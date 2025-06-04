<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { textReveal2 } from '$lib/animations/gsap';
  import { writable } from 'svelte/store';

  let animationFinished = false;

  // Scrollzustand
  const isScrolled = writable(false);

  onMount(() => {

  textReveal2(() => {
    animationFinished = true;
  });

  // Scroll-Animation nur bei Geräten bis 1024px
  if (window.innerWidth <= 1024) {
    const handleScroll = () => {
      isScrolled.set(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial aufrufen

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
});
</script>

<nav class:disabled={!animationFinished}>

  <div
  class="me"
  class:hidden={!page.url.pathname.startsWith('/projekte')}
  class:scrolled={$isScrolled}>
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

  .me {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    pointer-events: auto;
    line-height: 1.2;
  }

  .me.scrolled {
    opacity: 0;
    pointer-events: none;
  }

  .me.hidden {
    display: none;
  }



@media (max-width: 1024px) {
  nav {
    font-size: 1.5vw;
    }

  .menu {
  flex-direction: row;
  gap: 4rem;
  line-height: 1.2;
    }
}



@media (max-width: 390px) {
  nav {
    font-size: 3vw;
    }
}

</style>
