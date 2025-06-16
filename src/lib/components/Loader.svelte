<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import gsap from 'gsap';

  export let warten = [
    'Warten', 'Wait', 'Wachten', 'Attendere', 'Esperar',
    'Vänta', 'Ждать', 'Czekać', '等待', '待つ'
  ];

  const dispatch = createEventDispatcher();
  let loaderEl;

  onMount(() => {
    const elements = loaderEl.querySelectorAll('.warten');

    elements.forEach((el) => {
      gsap.set(el, {
        x: `${gsap.utils.random(-10, 10)}vw`,
        y: `${gsap.utils.random(-10, 10)}vh`
      });

      gsap.to(el, {
        x: () => `${gsap.utils.random(-15, 15)}vw`,
        y: () => `${gsap.utils.random(-15, 15)}vh`,
        duration: 1.5,
        ease: 'expo.out',
        repeat: -1,
        repeatRefresh: true,
        yoyo: true
      });
    });

    // Videos preloaden
    const preloadVideos = [
      '/Videos/cube_nuss_snippet_neu.mp4',
      '/Videos/logo_nuss_snippet_neu.mp4',
      '/Videos/formen_2_snippet_neu.mp4',
      '/Videos/tatort_snippet_neu.mp4',
      '/Videos/formen_snippet_neu.mp4'
    ];

    let loadedCount = 0;
    preloadVideos.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.style.display = 'none';

      video.oncanplaythrough = () => {
        loadedCount++;
        if (loadedCount === preloadVideos.length) {
          dispatch('ready');
        }
      };

      document.body.appendChild(video);
    });
  });
</script>

<div class="loader-screen" bind:this={loaderEl}>
  {#each warten as word}
    <div class="warten">{word}</div>
  {/each}
  <div class="lade">Lade ...</div>
</div>

<style>
  .loader-screen {
    position: fixed;
    inset: 0;
    color: black;
    z-index: 9999;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .warten {
    position: absolute;
    pointer-events: none;
    font-size: 0.85vw;
    letter-spacing: -0.02em;
  }

  .lade {
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: left;
    padding: 1rem;
    font-size: 1vw;
  }

  @media (max-width: 1024px) {
    .warten {
      font-size: 0.9vw;
    }
    .lade {
      font-size: 1.5vw;
    }
  }

  @media (max-width: 450px) {
    .warten {
      font-size: 1.5vw;
    }
    .lade {
      font-size: 3vw;
    }
  }
</style>
