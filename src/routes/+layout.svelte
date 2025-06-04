<script lang="ts">
  import { page } from '$app/state'; // Svelte 5
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';

  let isMobile = false;
  let loading = true;

  let isProjectPage = false;

  onMount(() => {
    const checkScreen = () => {
      isMobile = window.innerWidth <= 1024;
    };

    checkScreen();

    // Video Preload
    const preloadVideo = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      link.type = 'video/mp4';
      document.head.appendChild(link);
    };

    preloadVideo('/Videos/cube_nuss_snippet_neu.mp4');
    preloadVideo('/Videos/logo_nuss_snippet_neu.mp4');
    preloadVideo('/Videos/formen_2_snippet_neu.mp4');
    preloadVideo('/Videos/tatort_snippet_neu.mp4');
    preloadVideo('/Videos/formen_snippet_neu.mp4');

    window.addEventListener('resize', checkScreen);

    const MIN_LOADER_TIME = 500;
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

    // Hier ist die korrekte Verwendung in Svelte 5:
    isProjectPage = page.url.pathname.startsWith('/projekte');

    return () => window.removeEventListener('resize', checkScreen);
  });
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
