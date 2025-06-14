<script>
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { onMount, tick } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;
  let isInitialLoad = true;

  const MIN_LOADER_TIME = 500;

  const checkScreen = () => {
    isMobile = window.innerWidth <= 1024;
  };

  onMount(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);

    // Initialer Seitenaufruf – Loader immer zeigen
    startLoading();

    // Nach Navigation: Nur bei Projekten + Mobile
    afterNavigate(({ to }) => {
      checkScreen(); // ggf. geänderte Breite beachten
      if (!isInitialLoad && isMobile && to?.url.pathname.startsWith('/projekte')) {
        startLoading();
      }
      isInitialLoad = false;
    });

    return () => window.removeEventListener('resize', checkScreen);
  });

  async function startLoading() {
    loading = true;
    const startTime = performance.now();

    await tick(); // Damit loading sofort wirksam ist

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
        window.removeEventListener('load', onLoad);
      };
      window.addEventListener('load', onLoad);
    }
  }

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
