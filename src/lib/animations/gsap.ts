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
    { yPercent: 0, duration, stagger, ease: defaultEase, force3D: true }
  );
};

export const textReveal2 = (
  onFinish?: () => void,
  selector = ".text-reveal2",
  duration = 1,
  stagger = 0.1
) => {
  return defaultFromTo(
    selector,
    { yPercent: -150 },
    { yPercent: 0, duration, stagger, ease: defaultEase, force3D: true, onComplete: onFinish }
  );
};

export const imageRevealAndMove = (
  tl = gsap.timeline(),
  selectors = {
    textReveal3: ".text-reveal3",
    work: ".work",
    workSection: ".work-section",
    title: ".title",
    place: ".placeholder"
  }
) => {
  tl.fromTo(
    selectors.textReveal3,
    { yPercent: -150 },
    { yPercent: 0, duration: 1.0, stagger: 0.1, ease: defaultEase, force3D: true }
  );

  tl.fromTo(
    selectors.work,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", },
    { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.25, ease: defaultEase, force3D: true },
    "<0.75"
  );

  tl.fromTo(
    selectors.workSection,
    { yPercent: -20, scale: 0.5 },
    { yPercent: 0, scale: 1, duration: 1.25, ease: defaultEase, force3D: true },
    "<"
  );

  tl.fromTo(
    selectors.title,
    { opacity: 0 },
    { opacity: 1, duration: 0.1, ease: defaultEase, force3D: true },
    "<0.5"
  );

  return tl;
};

export const aboutReveal = (
  tl = gsap.timeline(),
  selectors = {
    about: ".about-reveal",
    portrait: ".portrait",
    aboutText: ".about",
  }
) => {
  tl.fromTo(
    selectors.about,
    { yPercent: -50, opacity: 0, },
    { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.1, ease: defaultEase, force3D: true }
  );

  tl.fromTo(
    selectors.portrait,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", },
    { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.25, ease: defaultEase, force3D: true },
    "<0.75"
  );

  return tl;
};
