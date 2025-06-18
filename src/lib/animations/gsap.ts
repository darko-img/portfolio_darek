import { gsap } from "gsap";

const defaultEase = "expo.out";

const defaultFromTo = (
  target: string | Element | Element[],
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) => {
  return gsap.fromTo(target, fromVars, toVars);
};

export const textReveal = (selector = ".text-reveal", duration = 1, stagger = 0.1) => {
  return defaultFromTo(
    selector,
    { yPercent: -150 },
    { yPercent: 0, duration, stagger, ease: defaultEase }
  );
};

export const textReveal2 = (
  onFinish?: () => void,
  selector = ".text-reveal2",
  duration = 1,
  stagger = 0.1,
  delay = 0.35
) => {
  return defaultFromTo(
    selector,
    { yPercent: -150 },
    { yPercent: 0, delay, duration, stagger, ease: defaultEase, onComplete: onFinish }
  );
};

// ABOUT //
// ABOUT //
// ABOUT //

export const aboutReveal = (
  tl = gsap.timeline({ defaults: { lazy: true } }),
  selectors = {
    about: ".about-reveal",
    portrait: ".portrait",
    tReveal: ".t-reveal",
  }
) => {
  tl.fromTo(
    selectors.about,
    { yPercent: 150, },
    { yPercent: 0, duration: 1.0, stagger: 0.05, ease: defaultEase, force3D: true }
  );

  tl.fromTo(
    selectors.portrait,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", },
    { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.0, stagger: 0.05, ease: defaultEase, force3D: true },
    "<0.25"
  );

  tl.fromTo(
    selectors.tReveal,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: defaultEase, force3D: true },
    "<0.35"
  );
  return tl;
};

// OBSERVER //
// OBSERVER //
// OBSERVER //

export const observeReveal = (
  tl = gsap.timeline({ defaults: { lazy: true } }),
  selectors = {
    work: ".work-video",
    workSection: ".work-section",
    title: ".title"
  }
) => {
    tl.fromTo(
    selectors.work,
    { opacity: 0 },
    { opacity: 1, duration: 0.1, force3D: true, },
  );

  tl.fromTo(
    selectors.work,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", },
    { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.5, ease: defaultEase, force3D: true, },
    "<0.3"
  );

  tl.fromTo(
    selectors.workSection,
    { yPercent: -30 },
    { yPercent: 0, duration: 1.5, ease: defaultEase, force3D: true },
    "<"
  );

  tl.fromTo(
    selectors.title,
    { opacity: 0 },
    { opacity: 1, duration: 0.1, force3D: true },
    "<0.2"
  );
  return tl;
};
