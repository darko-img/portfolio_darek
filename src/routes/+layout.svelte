<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { derived } from 'svelte/store';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = false;

  const isProjectPage = derived(page, $page => $page.url.pathname.startsWith('/projekte'));
  const isMehrPage = derived(page, $page => $page.url.pathname.startsWith('/mehr'));

  let MIN_LOADER_TIME = 500;
  let loaderStart = 0;

  onMount(() => {
    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    const unsubscribe = isProjectPage.subscribe((isProj) => {
      if (isProj && isMobile) {
        loaderStart = performance.now();
        loading = true;
      }
    });

    return () => {
      window.removeEventListener('resize', checkScreen);
      unsubscribe();
    };
  });

  function handleLoaderReady() {
    const elapsed = performance.now() - loaderStart;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

    setTimeout(() => {
      loading = false;
    }, remaining);
  }
</script>

{#if loading}
  <Loader on:ready={handleLoaderReady} />
{:else}
  <Nav />
  <slot />
  {#if !$isProjectPage && !$isMehrPage || !isMobile}
    <Footer />
  {/if}
{/if}
