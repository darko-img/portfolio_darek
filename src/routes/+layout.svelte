<script>
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true; // Loader beim ersten Laden an

  const MIN_LOADER_TIME = 450;

  const checkScreen = () => {
    isMobile = window.innerWidth <= 1024;
  };

  onMount(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const startTime = performance.now();

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
      setTimeout(() => {
        loading = false;
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      const onLoad = () => {
        finishLoading();
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    return () => window.removeEventListener('resize', checkScreen);
  });

  let currentPath = '';

  $: if ($page.url.pathname !== currentPath) {
    currentPath = $page.url.pathname;

    // Loader nur bei mobile + /projekte Navigation an
    if (currentPath.startsWith('/projekte') && isMobile) {
      loading = true;

      const start = performance.now();

      (async () => {
        await tick();

        const elapsed = performance.now() - start;
        const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

        setTimeout(() => {
          loading = false;
        }, remaining);
      })();
    } else {
      // Sonst sofort Loader aus
      loading = false;
    }
  }

  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
  $: isMehrPage = $page.url.pathname.startsWith('/mehr');
</script>

{#if loading}
  <Loader />
{:else}
  <Nav />
  <slot />
  {#if (!isProjectPage && !isMehrPage) || !isMobile}
    <Footer />
  {/if}
{/if}
