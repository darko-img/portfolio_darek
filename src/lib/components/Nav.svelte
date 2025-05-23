<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { textReveal2 } from '$lib/animations/gsap';

  let animationFinished = false;

  onMount(() => {
    textReveal2(() => {
      animationFinished = true;
    });
  });

</script>

<nav class:disabled={!animationFinished}>

<div></div>

  <ul class="menu">

    <li class="intro text-wrapper">
      <a
      href="/"
      class="line text-reveal2"
      class:active={page.url.pathname === '/'}
      class:inactive={!animationFinished}
      tabindex={animationFinished ? 0 : -1}
      aria-disabled={!animationFinished}
      >Intro</a>
    </li>

    <li class="projekte text-wrapper">
      <a
      href="/projekte"
      class="line text-reveal2"
      class:active={page.url.pathname.startsWith('/projekte')}
      class:inactive={!animationFinished}
      tabindex={animationFinished ? 0 : -1}
      aria-disabled={!animationFinished}
      >Projekte</a>
    </li>

  </ul>

</nav>

<style>

nav {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1rem;
    color: black;

    font-size: 1.2vw;

    z-index: 10;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    pointer-events: none;
  }

  .menu {
    text-align: right;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }



@media (max-width: 1024px) {
  nav {
    font-size: 1.5vw;
    }

  .menu {
  flex-direction: row;
  gap: 4rem;
    }
}



@media (max-width: 390px) {
  nav {
    font-size: 3vw;
    }
}

</style>
