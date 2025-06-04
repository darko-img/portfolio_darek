<script>
  import { onMount, tick } from 'svelte';

  export let src;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;
  export let autoplay = false;
  export let ready = false; // <- NEU

  let videoRef;
  let containerRef;
  let inView = false;
  let hasPlayed = false;

  async function tryPlay() {
    if (autoplay && ready && inView && !hasPlayed && videoRef) {
      hasPlayed = true;
      await tick();
      try {
        await videoRef.play();
      } catch (e) {
        console.warn('Autoplay failed:', e);
      }
    }
  }

  $: tryPlay();

  onMount(() => {
    const isMobile = window.innerWidth <= 1024;
    const thresholdValue = isMobile ? 0.3 : 0.01;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
          observer.disconnect();
        }
      },
      { threshold: thresholdValue }
    );

    if (containerRef) observer.observe(containerRef);

    return () => observer.disconnect();
  });
</script>

<div bind:this={containerRef}>
  {#if inView}
    <video
      bind:this={videoRef}
      src={src}
      {muted}
      {loop}
      {playsinline}
      preload="none"
    ></video>
  {:else}
    <div class="placeholder"></div>
  {/if}
</div>

<style>
  video {
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: block;
  }

  .placeholder {
    background-color: #888;
    width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>
