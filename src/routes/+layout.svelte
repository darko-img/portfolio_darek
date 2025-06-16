<script>
  import { page } from '$app/stores';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;
  let routeLoading = false;

  onMount(() => {
    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    const MIN_LOADER_TIME = 350;
    const startTime = performance.now();

    const finishInitialLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
      setTimeout(() => {
        loading = false;
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishInitialLoading();
    } else {
      const onLoad = () => finishInitialLoading();
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    return () => window.removeEventListener('resize', checkScreen);
  });

  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
  $: isMehrPage = $page.url.pathname.startsWith('/mehr');

  // Loader bei Navigation zu /projekte auf Mobilgeräten
  beforeNavigate(({ to }) => {
    if (isMobile && to?.url.pathname.startsWith('/projekte')) {
      routeLoading = true;
    }
  });

  afterNavigate(() => {
    if (routeLoading) {
      const DELAY = 1000; // Zeit für Loader bei Navigation
      setTimeout(() => {
        routeLoading = false;
      }, DELAY);
    }
  });
</script>

{#if loading || routeLoading}
  <Loader />
{:else}
  <Nav />
  <slot />
  {#if (!isProjectPage && !isMehrPage) || !isMobile}
    <Footer />
  {/if}
{/if}
