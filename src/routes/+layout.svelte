<script lang="ts">
  import { page } from '$app/state'; // Svelte 5
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

  const videoSrcs = [
    '/Videos/cube_nuss_snippet_neu.mp4',
    '/Videos/logo_nuss_snippet_neu.mp4',
    '/Videos/formen_2_snippet_neu.mp4',
    '/Videos/tatort_snippet_neu.mp4',
    '/Videos/formen_snippet_neu.mp4'
  ];

  const preloadVideo = (src: string): Promise<void> =>
    new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.onloadeddata = () => resolve();
      video.onerror = () => resolve(); // im Fehlerfall trotzdem fortsetzen
    });

  const MIN_LOADER_TIME = 500;
  const startTime = performance.now();

  Promise.all(videoSrcs.map(preloadVideo)).then(() => {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
    setTimeout(() => {
      loading = false;
    }, remaining);
  });

  return () => window.removeEventListener('resize', checkScreen);
});

  $: isProjectPage = page.url.pathname.startsWith('/projekte');
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
