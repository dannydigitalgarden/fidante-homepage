import React, {useEffect, useRef, MutableRefObject} from "react";
import Button from "components/Buttons";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import Rectangle from "./Rectangle";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {textReveal} from 'utils/animation'
import "./_hero-banner.scss";


export interface HeroBannerProps {
    mediaType: string;
    mediaSource: string;
    title: string;
    intro: string;
    url: string;
}

const HeroBanner = ({  mediaType, mediaSource, title, intro, url }: HeroBannerProps) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const introRef = useRef() as MutableRefObject<HTMLDivElement>
  const buttonRef  = useRef() as MutableRefObject<HTMLDivElement>
  const rectRef = useRef() as MutableRefObject<HTMLDivElement>
  const mediaRef = useRef() as MutableRefObject<HTMLImageElement>
  const contentRef = useRef() as MutableRefObject<HTMLImageElement>

  useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const scrollOptions = {
      trigger: ".hero-banner",
      start: 'top top',
      end: '+=80%',
      scrub: 1.5,
      toggleActions: "play none none none"
    }

    if (headingRef && introRef && buttonRef && contentRef) {
      textReveal(undefined, headingRef.current, introRef.current, buttonRef.current,1.25)
    }

    if (rectRef && mediaRef) {
      tl.from(rectRef.current, {
        delay: 0.5,
        y: 100,
        x: 20,
        duration: 1.25
      })

      tl.from(mediaRef.current, {
        opacity: 0,
        scale: 1.5,
        duration: 2,
      }, "-=1")


      //parallax effect
      gsap.to(mediaRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: scrollOptions
      });
      }

      gsap.set(contentRef.current, { y: 10});

      gsap.to(contentRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: scrollOptions
      });

  }, [])

  return (
    <div className="hero-banner">
      <TwoColumnsLayout options={{ mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="hero-banner__content" ref={contentRef}>
            <div className="hero-banner__heading h1" ref={headingRef}><h1>{title}</h1></div>
            {intro && <div className="hero-banner__intro text-intro margin-b-2" ref={introRef} dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <div className="hero-banner__button" ref={buttonRef}>
              <Button url={url} label="Learn more" type="secondary" />
              </div>}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          <div className="rectangle" ref={rectRef}>
           <Rectangle />
          </div>
          <div className="hero-banner__media" >
            {mediaType === "image" && <img ref={mediaRef} src={mediaSource} alt={title} />}

            {mediaType === "video" && <video src={mediaSource} autoPlay muted controls={false} loop />}
          </div>
        </TwoColumnsMedia>
      </TwoColumnsLayout>
    </div>
  );
};

export default HeroBanner;
