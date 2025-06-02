import { gsap } from 'gsap';

export const textReveal = () => {
  gsap.fromTo(".text-reveal",
    {
    y: "-150%",
    },
    {
    y: 0,
    duration: 1.0,
    stagger: 0.1,
    ease: "expo.out",
  });
};

export const textReveal2 = (onFinish?: () => void) => {
  gsap.fromTo(".text-reveal2",
    {
    y: "-150%",
    },
    {
    y: 0,
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

  tl.fromTo(
  ".text-reveal3",
  {
    y: "-150%",
  },
  {
    y: "0%",
    duration: 2.0,
    stagger: 0.1,
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
    "<0.75"
  );

  tl.fromTo(
    ".work-section",
    {
    y: "-30%",
    },
    {
      y: 0,
      duration: 2.0,
      ease: "expo.out"
    },
    "<"
  );

  tl.fromTo(
    ".title",
    {
    opacity: 0,
    },
    {
    opacity: 1,
    duration: 0.5,
    },
    "<0.25"
  );

  return tl;
};
