<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;

  const MIN_LOADER_TIME = 450;

  onMount(() => {
    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    // Ursprüngliche Seite lädt: Loader mind. MIN_LOADER_TIME anzeigen
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

  // Reaktive Variablen für Pfad prüfen
  $: isProjectPage = $page.url.pathname.startsWith('/projekte');
  $: isMehrPage = $page.url.pathname.startsWith('/mehr');

  // Loader beim Navigieren zu /projekte und mobil triggern
  // Das setzt loading auf true und nach MIN_LOADER_TIME auf false
  $: if (isMobile && isProjectPage) {
    loading = true;

    // Verzögertes Ausschalten des Loaders
    setTimeout(() => {
      loading = false;
    }, MIN_LOADER_TIME);
  }

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
