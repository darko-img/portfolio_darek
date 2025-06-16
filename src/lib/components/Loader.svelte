<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  export let warten = [
    'Warten', 'Wait', 'Wachten', 'Attendere', 'Esperar',
    'Vänta', 'Ждать', 'Czekać', '等待', '待つ'
  ];

  export let onComplete = () => {};

  onMount(() => {
    const elements = document.querySelectorAll('.warten');
    elements.forEach((el) => {
      gsap.set(el, {
        x: `${gsap.utils.random(-10, 10)}vw`,
        y: `${gsap.utils.random(-10, 10)}vh`,
      });

      gsap.to(el, {
        x: () => `${gsap.utils.random(-15, 15)}vw`,
        y: () => `${gsap.utils.random(-15, 15)}vh`,
        duration: 0.1,
        ease: "expo.out",
        repeat: -1,
        repeatRefresh: true,
        yoyo: true
      });
    });

    const preloadVideos = [
      '/Videos/cube_nuss_snippet_neu.mp4',
      '/Videos/logo_nuss_snippet_neu.mp4',
      '/Videos/formen_2_snippet_neu.mp4',
      '/Videos/tatort_snippet_neu.mp4',
      '/Videos/formen_snippet_neu.mp4'
    ];

    let loaded = 0;

    preloadVideos.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.style.display = 'none';
      video.onloadeddata = () => {
        loaded++;
        if (loaded === preloadVideos.length) {
          onComplete();
        }
      };
      document.body.appendChild(video);
    });

    // Fallback nach 5s
    setTimeout(() => {
      onComplete();
    }, 5000);
  });
</script>

<div class="loader-screen">
  {#each warten as word}
    <div class="warten" style={`transform: translate(${Math.random() * 20 - 10}vw, ${Math.random() * 20 - 10}vh);`}>
      {word}
    </div>
  {/each}
  <div class="lade">Lade ...</div>
</div>
