import React,  { useRef, useEffect, MutableRefObject } from "react";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import Button from "components/Buttons";
import BrandLogo from "components/BrandLogo";
import "./_spotlight.scss";
import { BrandLogos } from "../../../components/BrandLogo/index";
import { SquareThree } from "components/Squares";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {textReveal} from 'utils/animation'
import colors from "constants/colors";

export interface SpotlightProps {
  title: string;
  url?: string;
  intro?: string;
  brands: BrandLogos[];
}

const Spotlight = ({ title, intro, url, brands }: SpotlightProps) => {

  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const introRef = useRef() as MutableRefObject<HTMLDivElement>
  const buttonRef  = useRef() as MutableRefObject<HTMLDivElement>
  const squareRef = useRef() as MutableRefObject<HTMLDivElement>
  const logoListingRef = useRef() as MutableRefObject<HTMLImageElement>
  const contentRef = useRef() as MutableRefObject<HTMLImageElement>

  useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);

    const scrollOptions = {
      trigger: ".spotlight",
      start: 'top 60%',
      end: '+=50%',
      scrub: 1.5,
      toggleActions: "play none none none"
    }

    if (headingRef && introRef && buttonRef && contentRef) {
     setTimeout(() => {
      textReveal(contentRef.current, headingRef.current, introRef.current, buttonRef.current,0)
     }, 900);

     gsap.set(contentRef.current, { y: 40});

     gsap.to(contentRef.current, {
       y: -20,
       ease: "none",
       scrollTrigger: scrollOptions
     });

     gsap.from('.spotlight .layout-two-columns', {
      scrollTrigger: {...scrollOptions, start:"top 80%", scrub: false, toggleActions: "play none none reverse"},
      backgroundColor: colors.accent,
      duration: 1
    })

    }

    if(squareRef.current) {
      gsap.set(squareRef.current, {
        xPercent: 10,
      })

      gsap.to(squareRef.current, {
        scrollTrigger: {...scrollOptions, scrub: 2},
        xPercent: 0,
      })
    }

    if(logoListingRef.current) {
      gsap.from(logoListingRef.current, {
        scrollTrigger: {trigger:logoListingRef.current, start:"top 80%", scrub: false, toggleActions: "play none none reverse"},
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.4
      })
    }


  }, [])

  return (
    <div className="spotlight">
      <TwoColumns options={{ mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="squares" ref={squareRef}> <SquareThree /></div>
          <div className="spotlight__content" ref={contentRef}>
            <div className="spotlight__heading h2" ref={headingRef}>
              {title}
            </div>
            {intro && <div ref={introRef} className="spotlight__intro margin-b-2 text-intro" dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <div ref={buttonRef}>
              <Button url={url} label="View all funds" type="secondary" />
              </div>}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          {brands?.length > 0 && (
            <div className="spotlight__logos-listing" ref={logoListingRef}>
              {brands.map((brand) => (
                <BrandLogo {...brand} showInfo={true} key={brand.name} />
              ))}
            </div>
          )}
        </TwoColumnsMedia>
      </TwoColumns>
    </div>
  );
};

export default Spotlight;
