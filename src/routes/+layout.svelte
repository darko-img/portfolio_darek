<script>
  import { page } from '$app/stores';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { globalLoading } from '$lib/stores/loading.js';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;
  let routeLoading = false;

  // Bildschirmbreite prüfen und auf Resize reagieren
  onMount(() => {
    const MIN_LOADER_TIME = 350;
    const startTime = performance.now();

    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    const finishInitialLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
      setTimeout(() => {
        loading = false;
      }, remaining);
    };

    const onLoad = () => {
      finishInitialLoading();
      window.removeEventListener('load', onLoad);
    };

    if (document.readyState === 'complete') {
      finishInitialLoading();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('load', onLoad);
    };
  });

  // Reaktive Ableitungen für bestimmte Seiten
  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
  $: isMehrPage = $page.url.pathname.startsWith('/mehr');

  // Navigation: Ladezustand aktivieren vor dem Wechsel
  beforeNavigate(({ to }) => {
    if (isMobile && to?.url.pathname.startsWith('/projekte')) {
      routeLoading = true;
    }
  });

  // Nach Navigation: Ladezustand zurücksetzen nach kurzer Zeit
  afterNavigate(() => {
    if (routeLoading) {
      const DELAY = 1000;
      setTimeout(() => {
        routeLoading = false;
      }, DELAY);
    }
  });
</script>

{#if loading || $globalLoading}
  <Loader />
{:else}
  <Nav />
  <slot />
  {#if (!isProjectPage && !isMehrPage) || !isMobile}
    <Footer />
  {/if}
{/if}
