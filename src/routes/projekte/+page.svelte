<script>

  import { onMount } from 'svelte';
  import LocalFooter from '$lib/components/LocalProjectFooter.svelte';
  import { textRevealProject } from '$lib/animations/gsap';
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

    textRevealProject();

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  });

</script>

<main class="main">

  <div class="work-wrapper">

    <div class="work">

      <div class="col-1">

        <div class="projekt-text">

          <span class="year-text">
            <span class="text-reveal3">2017</span>
          </span>

          <span class="year-text">
            <span class="text-reveal3">–24</span>
          </span>

        </div>

      </div>

      <div class="col-2">

        <section class="work-section">
          <div class="work-video">
            <LazyVideo
              src="/Videos/cube_nuss_snippet_neu.mp4"
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title" title="https://vimeo.com/1078624279">
            <p>Nussknagger, 2024</p>
            <p>
              <a
                href="https://vimeo.com/1078624279??share=copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projekt Tatort"
              >Play</a>
            </p>
          </div>
        </section>

        <section class="work-section">
          <div class="work-video">
            <LazyVideo
              src="/Videos/logo_nuss_snippet_neu.mp4"
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title" title="https://vimeo.com/1078624279">
            <p>Nussknagger, 2024</p>
            <p>
              <a
                href="https://vimeo.com/1078458176?share=copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projekt Tatort"
              >Play</a>
            </p>
          </div>
        </section>

        <section class="work-section">
          <div class="work-video">
            <LazyVideo
              src="/Videos/formen_2_snippet_neu.mp4"
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title" title="https://vimeo.com/1078624279">
            <p>Formen 02, 2024</p>
            <p>
              <a
                href="https://vimeo.com/1078455810?share=copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projekt Tatort"
              >Play</a>
            </p>
          </div>
        </section>

        <section class="work-section">
          <div class="work-video">
            <LazyVideo
              src="/Videos/tatort_snippet_neu.mp4"
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title" title="https://vimeo.com/1078624279">
            <p>Tatort, 2017</p>
            <p>
              <a
                href="https://vimeo.com/1078457155?share=copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projekt Tatort"
              >Play</a>
            </p>
          </div>
        </section>

        <section class="work-section">
          <div class="work-video">
            <LazyVideo
              src="/Videos/formen_snippet_neu.mp4"
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title" title="https://vimeo.com/1078624279">
            <p>Formen, 2017</p>
            <p>
              <a
                href="https://vimeo.com/1078637488?share=copy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projekt Tatort"
              >Play</a>
            </p>
          </div>
        </section>

      </div>

    </div>

  </div>

  {#if showLocalFooter}
  <div class="footer-wrapper">
    <LocalFooter />
  </div>
{/if}

</main>

<style>

main {
  inset: 0;
  width: 100%;
  height: 100dvh;

  padding: 12rem 12rem 1rem 1rem;

  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
}

section + section {
  margin-top: 1rem;
}

span {
  font-size: 2.5vw;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

.title {
  display: flex;
  justify-content: space-between;
  text-align: center;
  will-change: opacity;

  margin-top: 0.15rem;

  opacity: 0;
}

.work-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 7rem;
}

.work {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
  position: relative;
}

.work-video {
  will-change: opacity, clip-path;
}

.col-2 {
  width: 1000px;
}

.col-1 {
  width: 100%;
}

.projekt-text {
  position: fixed;

  display: flex;
  flex-direction: column;
}

.footer-wrapper {
  padding-bottom: 1rem;
}

.year-text {
  overflow: hidden;
}

.work-section {
  will-change: transform;
}

@media (max-width: 1024px) {
  main {
    padding: 10rem 1rem 1rem 1rem;
  }

  span {
  font-size: 3vw;
  }

  p {
    font-size: 1.5vw;
  }

  .work {
  grid-template-columns: 1fr;
  }

  .col-2 {
  width: 100%;
  }

  .projekt-text {
  position: static;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
}

@media (max-width: 450px) {
  p {
    font-size: 3vw;
  }
  span {
  font-size: 5vw;
  }
}

</style>
