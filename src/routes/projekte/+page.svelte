<script>
  import { onMount } from 'svelte';
  import LocalFooter from '$lib/components/LocalProjectFooter.svelte';
  import { imageRevealAndMove } from '$lib/animations/gsap';
  import LazyVideo from '$lib/components/LazyVideo.svelte';

  let showLocalFooter = false;

  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    showLocalFooter = mediaQuery.matches;

    const handler = (e) => {
      if (showLocalFooter !== e.matches) {
        showLocalFooter = e.matches;
      }
    };
    mediaQuery.addEventListener('change', handler);

    imageRevealAndMove();

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  });
</script>

<main>

  <div class="work-flex">

    <div class="work-wrapper">

      <div class="work-section">

        <div class="work">
          <LazyVideo
          src="/Videos/cube_nuss_snippet_neu.mp4"
          autoplay
          muted
          playsinline
          loop
          />
        </div>

        <div class="title" title="https://vimeo.com/1078624279">
          <p>Nussknagger [Animation, 3D] 2024</p>
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
          <LazyVideo
          src="/Videos/logo_nuss_snippet_neu.mp4"
          autoplay
          muted
          playsinline
          loop
          />
        </div>


        <div class="title" title="https://vimeo.com/1078624279">
          <p>Nussknagger [Animation, 3D] 2024</p>
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
          <LazyVideo
          src="/Videos/formen_2_snippet_neu.mp4"
          autoplay
          muted
          playsinline
          loop
          />
        </div>


        <div class="title" title="https://vimeo.com/1078624279">
          <p>Formen 02 [Animation, 3D, SoundFX] 2024</p>
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
          <LazyVideo
          src="/Videos/tatort_snippet_neu.mp4"
          autoplay
          muted
          playsinline
          loop
          />
        </div>


        <div class="title" title="https://vimeo.com/1078624279">
          <p>Tatort [Animation, 3D, SoundFX] 2017</p>
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
          <LazyVideo
          src="/Videos/formen_snippet_neu.mp4"
          autoplay
          muted
          playsinline
          loop
          />
        </div>


        <div class="title" title="https://vimeo.com/1078624279">
          <p>Formen [Animation, SoundFX] 2017</p>
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

    overflow-y: auto;
    overflow-x: hidden;

    padding: 1rem;

    overscroll-behavior: none;
    -webkit-overflow-scrolling: auto;
  }

  .work-section {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    will-change: transform;
  }

  .title {
    display: flex;
    justify-content: space-between;
    text-align: center;
    will-change: opacity;
  }

  .work-wrapper {
    width: 65vw;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .work-flex {
    height: 100%;
    width: 100%;
    margin-top: 8rem;
    padding-bottom: 5rem;

    padding-right: 10rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
  }



@media (max-width: 450px) {

  p {
    font-size: 3vw;
    }

  .work-flex {
    padding-right: 0;
    }

  .work-wrapper {
    width: 100%;
    }
  }

</style>
