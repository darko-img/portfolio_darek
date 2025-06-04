<footer class="footer">

  <ul class="job-block">

    <li class="text-wrapper">
      <a href="mailto:hi@daro.dev" class="line text-reveal2">hi@daro.dev</a>
  </li>

  </ul>

  <ul class="social-block">

    <li class="line text-wrapper">
        <div class="text-reveal2"><a href="https://www.instagram.com/91daro" target="_blank">Instagram</a></div>
    </li>

    <li class="line text-wrapper">
      <div class="text-reveal2"><a href="https://github.com/darko-img" target="_blank">Github</a></div>
  </li>

  </ul>

</footer>

<style>

footer {
    position: static;
    width: 100%;
    bottom: 0;
    color: black;

    font-size: 1vw;

    z-index: 10;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    pointer-events: none;

    padding-bottom: env(safe-area-inset-bottom);

    margin-top: 2.5rem;
  }

  .social-block {
    text-align: right;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
  }

  .job-block {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }



@media (max-width: 1024px) {
  footer {
    font-size: 1.5vw;
    }
}



@media (max-width: 390px) {
  footer {
    font-size: 3vw;
    }
}

</style>
