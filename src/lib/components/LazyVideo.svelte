<script>
  import { onMount } from 'svelte';
  export let src;
  export let autoplay = true;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;

  let videoRef;
  let inView = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef) observer.observe(videoRef);
  });
</script>

{#if inView}
  <video
    bind:this={videoRef}
    src={src}
    {autoplay}
    {muted}
    {loop}
    {playsinline}
    preload="none"
  ></video>
{:else}
  <div bind:this={videoRef} class="placeholder"></div>
{/if}

<style>
  video {
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .placeholder {
    background-color: #888; /* grauer Platzhalter */
    width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>
