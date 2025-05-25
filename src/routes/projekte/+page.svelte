<script>

  import { onMount } from 'svelte';
  import LocalFooter from '$lib/components/LocalProjectFooter.svelte';
  import { imageRevealAndMove } from '$lib/animations/gsap';

  let showLocalFooter = false;

  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    showLocalFooter = mediaQuery.matches;

    const handler = (e) => {
      showLocalFooter = e.matches;
    };
    mediaQuery.addEventListener('change', handler);

    imageRevealAndMove();

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  });

</script>

<main>

  <div class="me">
    <span class="text-wrapper">
      <div class="text-reveal3"><a href="/">Dariusz Tomaszewski</a></div>
    </span>
    <span class="text-wrapper">
      <div class="text-reveal3"><a href="/">Designer / Developer</a></div>
    </span>
    <span class="text-wrapper">
      <div class="text-reveal3"><a href="/">Berlin, Germany</a></div>
    </span>
  </div>

  <div class="work-flex">

    <div class="work-wrapper">

      <div class="work-section">

        <div class="work">
          <video
            src="/Videos/cube_nuss_snippet_neu.mp4"
            autoplay
            muted
            loop>
          </video>
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Nussknagger_2024_Animation_3D</p>
          <p>
            <a
              href="https://vimeo.com/1078624279??share=copy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projekt Tatort">Play</a>
              </p>
        </div>

    </div>


    <div class="work-section">

        <div class="work">
          <video
            src="/Videos/logo_nuss_snippet_neu.mp4"
            autoplay
            muted
            loop>
          </video>
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Nussknagger_2024_Animation_3D</p>
          <p>
            <a
              href="https://vimeo.com/1078458176?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projekt Tatort">Play</a>
              </p>
        </div>

    </div>

    <div class="work-section">

        <div class="work">
          <video
            src="/Videos/formen_2_snippet_neu.mp4"
            autoplay
            muted
            loop>
          </video>
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Formen_02_2024_Animation_3D_SoundFX</p>
          <p>
            <a
              href="https://vimeo.com/1078455810?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projekt Tatort">Play</a>
              </p>
        </div>

    </div>

    <div class="work-section">

        <div class="work">
          <video
            src="/Videos/tatort_snippet_neu.mp4"
            autoplay
            muted
            loop>
          </video>
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Tatort_2017_Animation_3D_SoundFX</p>
          <p>
            <a
              href="https://vimeo.com/1078457155?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projekt Tatort">Play</a>
              </p>
        </div>

    </div>


     <div class="work-section">

        <div class="work">
          <video
            src="/Videos/formen_snippet_neu.mp4"
            autoplay
            muted
            loop>
          </video>
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Formen_2017_Animation_SoundFX</p>
          <p>
            <a
              href="https://vimeo.com/1078637488?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projekt Tatort">Play</a>
              </p>
        </div>

    </div>

    </div>

  </div>

  {#if showLocalFooter}
    <LocalFooter />
  {/if}

</main>

<style>

  main {
    width: 100%;
    min-height: 100dvh;

    overflow-y: auto;             /* vertikal scrollen */
    overflow-x: hidden;

    display: flex;
    flex-direction: column;

    flex-grow: 1;

    padding: 1rem;

    overscroll-behavior: none;
    -webkit-overflow-scrolling: auto; /* verhindert iOS-Bounce */
  }

  video {
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;

    pointer-events: none;
  }

  .work-section {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    text-align: center;
    opacity: 1;
    will-change: opacity;
  }

  .work-wrapper {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transform: translateY(0);
    will-change: transform;
  }

  .work-flex {
    height: 100%;
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 5rem;

    padding-right: 10rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .me {
    position: static;
    left: 0;
    top: 0;
    font-size: 1.2vw;
    line-height: 1.2;
  }


@media (max-width: 1024px) {

  p {
    font-size: 1.5vw;
    }

  .work-flex {
    padding-right: 0;
    }

  .work-wrapper {
    width: 100%;
    }

  .me {
    font-size: 1.5vw;
    }

  }



@media (max-width: 390px) {

  p {
    font-size: 3vw;
    }

  .work-flex {
    padding-right: 0;
    }

  .work-wrapper {
    width: 100%;
    }

  .me {
    font-size: 3vw;
    }

  }

</style>
