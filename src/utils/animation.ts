import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const textReveal = (triggerEl?: HTMLElement, headingEl?: HTMLElement, introEl?: HTMLElement, buttonEl?: HTMLElement, delay?: number): void => {
  let tl = gsap.timeline({
    scrollTrigger: triggerEl !== undefined
      ? {
          trigger: triggerEl,
          start: "top 90%",
          scrub: false,
          toggleActions: "play none none reverse"
        }
      : null,
  });


  if (headingEl !== undefined) {
   const splitHeading = new SplitType(headingEl);
    tl.from(splitHeading.chars, {
      duration: 0.5,
      yPercent: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "circ.out",
      delay: delay ? delay : 0,
    });
  }

  if (introEl !== undefined) {
   const splitIntro = new SplitType(introEl);
    tl.from(
        splitIntro.words,
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "circ.out",
      },
      "-=0.5"
    );
  }

  if (buttonEl !== undefined ) {
    tl.from(
      buttonEl,
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.2"
    );
  }
};
