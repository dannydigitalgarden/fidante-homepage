import React, {useRef, useEffect, MutableRefObject} from "react";
import LogoListing from "./LogoListing";
import {textReveal} from 'utils/animation'
import './_our-managers.scss'

export interface OurManagersProps {
  title: string;
  backgroundImage: string;
  logos: Array<any>;
}

const OurManagers = ({ title, backgroundImage, logos }: OurManagersProps) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {  

    if (headingRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, undefined, undefined, 0)
      }, 1000)
    }

  }, [])

  return (
    <div className="our-managers" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="our-managers__title h1" ref={headingRef}>
        {title}
      </div>

      {logos?.length > 0 && (
        <div className="our-managers__logos-listing-wrapper">
          {logos.map((logo) => (
            <LogoListing {...logo} key={logo.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurManagers;
