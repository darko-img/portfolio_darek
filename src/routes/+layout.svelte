<script>
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
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

    const MIN_LOADER_TIME = 450;
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

  // Reagiere auf Navigation zu /projekte nur bei mobilen Geräten
  $: if ($page.url.pathname !== currentPath) {
    const newPath = $page.url.pathname;
    // Nur wenn sich die Route ändert
    if (newPath !== currentPath) {
      currentPath = newPath;

      if (isMobile && currentPath.startsWith('/projekte')) {
        loading = true;

        const start = performance.now();

        (async () => {
          await tick(); // Svelte Update abwarten

          const elapsed = performance.now() - start;
          const remaining = Math.max(0, 450 - elapsed);

          setTimeout(() => {
            loading = false;
          }, remaining);
        })();
      } else {
        loading = false;
      }
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
