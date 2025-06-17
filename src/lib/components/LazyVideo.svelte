<script>
  import { onMount, tick } from 'svelte';
  import { observeReveal } from '$lib/animations/gsap';
  import { gsap } from 'gsap';

  export let src;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;
  export let section;
  export let autoplayAfterReveal = true;

  let videoRef;
  let containerRef;

  onMount(() => {
    const isMobile = window.innerWidth <= 1024;
    const thresholdValue = isMobile ? 0.3 : 0.1;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          await tick();

          if (section) {
            const selectors = {
              work: section.querySelector('.work-video'),
              workSection: section,
              title: section.querySelector('.title'),
            };

            const tl = gsap.timeline({
              onComplete: async () => {
                if (autoplayAfterReveal) {
                  try {
                    await videoRef?.play();
                  } catch (e) {
                    console.warn('Autoplay failed:', e);
                  }
                }
              }
            });

            observeReveal(tl, selectors);
          }

          if (!autoplayAfterReveal) {
            try {
              await videoRef?.play();
            } catch (e) {
              console.warn('Autoplay failed:', e);
            }
          }
        }
      },
      { threshold: thresholdValue }
    );

    if (containerRef) observer.observe(containerRef);

    return () => observer.disconnect();
  });
</script>

<div bind:this={containerRef} class="video-wrapper">
  <video
    bind:this={videoRef}
    src={src}
    {muted}
    {loop}
    {playsinline}
    preload="none"
  ></video>
</div>

<style>
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: block;
}
</style>
