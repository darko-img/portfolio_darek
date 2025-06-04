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
    { y: "-150%" },
    { y: "0%", duration, stagger, ease: defaultEase }
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
    { y: "-150%" },
    { y: "0%", duration, stagger, ease: defaultEase, onComplete: onFinish }
  );
};

export const imageRevealAndMove = (
  tl = gsap.timeline(),
  selectors = {
    textReveal3: ".text-reveal3",
    work: ".work",
    workSection: ".work-section",
    title: ".title"
  }
) => {
  tl.fromTo(
    selectors.textReveal3,
    { y: "-150%" },
    { y: "0%", duration: 2.25, stagger: 0.1, ease: defaultEase }
  );

  tl.fromTo(
    selectors.work,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", },
    { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 2.0, stagger: 0.1, ease: defaultEase },
    "<0.85"
  );

  tl.fromTo(
    selectors.workSection,
    { y: "-25%" },
    { y: "0%", duration: 2.0, ease: defaultEase },
    "<"
  );

  tl.fromTo(
    selectors.title,
    { opacity: 0 },
    { opacity: 1, duration: 0.25 },
    "<0.5"
  );

  return tl;
};
