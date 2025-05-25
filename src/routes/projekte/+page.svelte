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
      <a
      href="https://vimeo.com/1078624279?share=copy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Projekt Nussknagger Cube">
      <video src="/Videos/cube_nuss_snippet_neu.mp4" autoplay muted loop></video>
      </a>
    </div>

    <div class="title">
      <p class="title-s">
        Nussknagger_Cube_2024_Animation_3D
      </p>
    </div>

    </div>


  <div class="work-section">

    <div class="work">
      <a
      href="https://vimeo.com/1078458176?share=copy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Projekt Nussknagger Logo">
      <video src="/Videos/logo_nuss_snippet_neu.mp4" autoplay muted loop></video>
      </a>
    </div>

    <div class="title">
      <p class="title-s">
        Nussknagger_Logo_2024_Animation_3D
      </p>
    </div>

  </div>

  <div class="work-section">

    <div class="work">
      <a
      href="https://vimeo.com/1078455810?share=copy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Projekt Formen 2">
      <video src="/Videos/formen_2_snippet_neu.mp4" autoplay muted loop></video>
      </a>
    </div>

    <div class="title">
      <p class="title-s">
        Formen_02_2024_Animation_3D_SoundFX
      </p>
    </div>

  </div>

  <div class="work-section">

      <div class="work">
        <a
        href="https://vimeo.com/1078457155?share=copy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Projekt Tatort">
        <video src="/Videos/tatort_snippet_neu.mp4" autoplay muted loop></video>
        </a>
      </div>

      <div class="title">
        <p class="title-s">
          Tatort_2017_Animation_3D_SoundFX
        </p>
      </div>

    </div>

      <div class="work-section">

        <div class="work">
          <!-- svelte-ignore a11y-media-has-caption -->
          <a
          href="https://vimeo.com/1078637488?share=copy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Projekt Formen">
          <video src="/Videos/formen_snippet_neu.mp4" autoplay muted loop></video>
          </a>
        </div>

        <div class="title">
          <p class="title-s">
            Formen_2017_Animation_SoundFX
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
  }

  .work-section {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .title {
    display: flex;
    justify-content: flex-start;
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

  .work {
    pointer-events: none;
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
