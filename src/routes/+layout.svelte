<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;

  onMount(() => {
    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    if (document.readyState === 'complete') {
      loading = false;
    } else {
      const onLoad = () => {
        loading = false;
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    return () => window.removeEventListener('resize', checkScreen);
  });

  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
</script>

{#if loading}
  <Loader />
{:else}
  <Nav />
  <slot />
  {#if !isProjectPage || !isMobile}
    <Footer />
  {/if}
{/if}
