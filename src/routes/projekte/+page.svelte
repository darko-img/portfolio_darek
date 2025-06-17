<script>
  import { onMount } from "svelte";
  import LocalFooter from "$lib/components/LocalProjectFooter.svelte";
  import LazyVideo from "$lib/components/LazyVideo.svelte";

  let showLocalFooter = false;

  let section1, section2, section3, section4, section5;

  onMount(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    showLocalFooter = mediaQuery.matches;

    const handler = (e) => {
      if (showLocalFooter !== e.matches) {
        showLocalFooter = e.matches;
      }
    };
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
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

        <section class="work-section" bind:this={section1}>
          <div class="work-video">
            <LazyVideo
              src="/Videos/cube_nuss_snippet_neu.mp4"
              section={section1}
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
                href="https://vimeo.com/1078624279"
                target="_blank"
                rel="noopener noreferrer">Ansehen</a
              >
            </p>
          </div>
        </section>

        <section class="work-section" bind:this={section2}>
          <div class="work-video">
            <LazyVideo
              src="/Videos/logo_nuss_snippet_neu.mp4"
              section={section2}
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title">
            <p>Nussknagger, 2024</p>
            <p>
              <a
                href="https://vimeo.com/1078458176"
                target="_blank"
                rel="noopener noreferrer">Ansehen</a
              >
            </p>
          </div>
        </section>

        <section class="work-section" bind:this={section3}>
          <div class="work-video">
            <LazyVideo
              src="/Videos/formen_2_snippet_neu.mp4"
              section={section3}
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title">
            <p>Formen – Kapitel 2, 2024</p>
            <p>
              <a
                href="https://vimeo.com/1078455810"
                target="_blank"
                rel="noopener noreferrer">Ansehen</a
              >
            </p>
          </div>
        </section>

        <section class="work-section" bind:this={section4}>
          <div class="work-video">
            <LazyVideo
              src="/Videos/tatort_snippet_neu.mp4"
              section={section4}
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title">
            <p>Tatort, 2017</p>
            <p>
              <a
                href="https://vimeo.com/1078457155"
                target="_blank"
                rel="noopener noreferrer">Ansehen</a
              >
            </p>
          </div>
        </section>

        <section class="work-section" bind:this={section5}>
          <div class="work-video">
            <LazyVideo
              src="/Videos/formen_snippet_neu.mp4"
              section={section5}
              autoplay
              muted
              playsinline
              loop
            />
          </div>
          <div class="title">
            <p>Formen, 2017</p>
            <p>
              <a
                href="https://vimeo.com/1078637488"
                target="_blank"
                rel="noopener noreferrer">Ansehen</a
              >
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

    /* padding-bottom: 7rem; */
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
    opacity: 0;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
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

  .year-text {
    overflow: hidden;
  }

  .work-section {
    will-change: transform;
  }

  p {
    font-size: 0.9vw;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 3000px) {
    .work-wrapper {
      padding-bottom: 7rem;
    }
  }

  @media (max-width: 1380px) {
    .col-2 {
      width: 65vw;
    }
  }

  @media (max-width: 1024px) {
    .work-wrapper {
      padding-bottom: 0;
    }
    span {
      font-size: 3.5vw;
    }
    p {
      font-size: 1.5vw;
    }
    main {
      padding: 10rem 1rem 1rem 1rem;
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
    .work {
      grid-template-columns: 1fr;
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
