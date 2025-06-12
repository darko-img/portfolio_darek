<script>
  import { onMount, tick } from 'svelte';
  import { observeReveal } from '$lib/animations/gsap';
  import { gsap } from 'gsap';

  export let src;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;

  let videoRef;

  onMount(() => {
    const isMobile = window.innerWidth <= 1024;
    const thresholdValue = isMobile ? 0.35 : 0.25;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          await tick();

          try {
            await videoRef?.play();
          } catch (e) {
            console.warn('Autoplay failed:', e);
          }

          const section = entry.target.closest('section');
          if (section) {
            const selectors = {
              work: section.querySelector('.work-video'),
              workSection: section,
              title: section.querySelector('.title'),
            };
            const tl = gsap.timeline();
            observeReveal(tl, selectors);
          }
        }
      },
      { threshold: thresholdValue }
    );

    if (videoRef) observer.observe(videoRef);

    return () => observer.disconnect();
  });
</script>

<video
  bind:this={videoRef}
  src={src}
  {muted}
  {loop}
  {playsinline}
  preload="none"
  class="lazy-video"
></video>

<style>
  .lazy-video {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    pointer-events: none;
    display: block;
    will-change: clip-path;
  }
</style>
