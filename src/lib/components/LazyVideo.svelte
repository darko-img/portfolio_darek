<script>
  import { onMount, tick } from 'svelte';

  export let src;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;

  let videoRef;
  let containerRef;
  let inView = false;

  onMount(() => {
    const isMobile = window.innerWidth <= 1024;
    const thresholdValue = isMobile ? 0.3 : 0.1;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
          observer.disconnect();
          await tick();
          try {
            videoRef?.play();
          } catch (e) {
            console.warn('Autoplay failed:', e);
          }
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
      preload="auto"
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
