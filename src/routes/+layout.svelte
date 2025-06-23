<script>
  import { page } from '$app/stores';
  import { onMount, afterUpdate } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import Lenis from 'lenis';
  import 'lenis/dist/lenis.css';
  import '../app.css';

  let isMobile = false;
  let loading = true;
  let lenis;


  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
  $: isMehrPage = $page.url.pathname.startsWith('/mehr');

  function initLenis() {
    if (lenis) {
      lenis.destroy();
    }

    lenis = new Lenis({
      smooth: true,
      autoRaf: true,
      duration: isMehrPage ? 0.5 : 1.2,
      easing: isMehrPage
        ? (t) => 1 - Math.pow(1 - t, 5)
        : (t) => 1 - Math.pow(1 - t, 3)
    });
  }

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
        initLenis(); // Lenis initialisieren nachdem Seite fertig geladen
      }, remaining);
    };
    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      const onLoad = () => finishLoading();
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  });

  // Aktualisiere Lenis, wenn sich die Seite ändert (z.B. auf /mehr navigiert wird)
  afterUpdate(() => {
    initLenis();
  });
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
