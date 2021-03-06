import React, {useRef, useEffect, MutableRefObject} from "react";
import LogoListing from "./LogoListing";
import {textReveal} from 'utils/animation'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import './_our-managers.scss'

export interface OurManagersProps {
  title: string;
  backgroundImage: string;
  logos: Array<any>;
}

const OurManagers = ({ title, backgroundImage, logos }: OurManagersProps) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const logoListingRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {  

    gsap.registerPlugin(ScrollTrigger);

    if (headingRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, undefined, undefined, 0)
      }, 800)

      gsap.to('.background__image', {
        scrollTrigger: {
          trigger: '.our-managers',
          start: 'top 70%',
          end: '+=150%',
          scrub: 1.5,
          toggleActions: "play none none reverse"
        },
        scale: 1.15
      })
    }

    if( logoListingRef.current) {
        gsap.from(logoListingRef.current, {
          scrollTrigger: {trigger:  logoListingRef.current, start: 'top 80%', scrub: false, toggleActions: "play none none reverse"},
          duration: 0.5,
          opacity: 0,
          y: 30
        })
    }

  }, [])

  return (
    <div className="our-managers">
      <div className="background__image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <div className="our-managers__title h1" ref={headingRef}>
        {title}
      </div>

      {logos?.length > 0 && (
        <div className="our-managers__logos-listing-wrapper" ref={logoListingRef}>
          {logos.map((logo) => (
            <LogoListing {...logo} key={logo.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurManagers;
