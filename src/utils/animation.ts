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
   const splitHeading = new SplitType(headingEl, {types:'lines, words'});
    tl.from(splitHeading.words, {
      duration: 0.7,
      yPercent: 101,
      stagger: 0.08,
      ease: "circ.out",
      delay: delay ? delay : 0,
    });
  }

  console.time('timer')
  if (introEl !== undefined) {
    tl.from(
      introEl,
      {
        y: 20,
        duration: 0.5,
        opacity: 0,
        ease: "circ.out",
      },
      "-=0.2"
    );
  }
  console.timeEnd('timer')

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
