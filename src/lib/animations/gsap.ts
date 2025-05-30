import { gsap } from 'gsap';

export const textReveal = () => {
  gsap.from(".text-reveal", {
    y: "-150%",
    duration: 1.0,
    stagger: 0.1,
    ease: "expo.out",
  });
};

export const textReveal2 = (onFinish?: () => void) => {
  gsap.from(".text-reveal2", {
    y: "-150%",
    duration: 1.0,
    delay: 0.75,
    stagger: 0.1,
    ease: "expo.out",
    onComplete: () => {
      if (onFinish) onFinish();
    }
  });
};

export const imageRevealAndMove = () => {
  const tl = gsap.timeline();

  tl.from(
    ".text-reveal3",
    {
      y: "-150%",
      duration: 2.0,
      ease: "expo.out",
    }
  );

  tl.fromTo(
    ".work",
    {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
    },
    {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 2.0,
      stagger: 0.1,
      ease: "expo.out"
    },
    "<0.5"
  );

  tl.from(
    ".work-section",
    {
      y: "-40%",
      scale: 0.5,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out"
    },
    "<"
  );

  tl.from(
    ".title",
    {
      opacity: 0,
      duration: 0.25,
      ease: "expo.out",
    },
    "<0.5"
  );

  return tl;
};
