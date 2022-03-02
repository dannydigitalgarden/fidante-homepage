import React, { useRef, useEffect, MutableRefObject } from "react";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import Button from "components/Buttons";
import Statistic from "components/Statistic";
import "./_why-fidante.scss";
import { StatisticProps } from "components/Statistic";
import { SquareTwo } from "components/Squares";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {textReveal} from 'utils/animation'

export interface WhyFidanteProps {
  title: string;
  url?: string;
  intro?: string;
  statistics: StatisticProps[];
}

const WhyFidante = ({ title, intro, url, statistics }: WhyFidanteProps) => {
  const leftColumnRef = useRef() as MutableRefObject<HTMLDivElement>;
  const rightColumnRef = useRef() as MutableRefObject<HTMLDivElement>;
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const introRef = useRef() as MutableRefObject<HTMLDivElement>
  const buttonRef  = useRef() as MutableRefObject<HTMLDivElement>
  const squareRef = useRef() as MutableRefObject<HTMLDivElement>
  const mediaRef = useRef() as MutableRefObject<HTMLImageElement>
  const contentRef = useRef() as MutableRefObject<HTMLImageElement>

  useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);


    const scrollOptions = {
      trigger: ".why-fidante",
      start: 'top center',
      end: '+=50%',
      scrub: 1.5,
      toggleActions: "play none none none"
    }

    if (headingRef && introRef && buttonRef && contentRef) {
     setTimeout(() => {
      textReveal(contentRef.current, headingRef.current, introRef.current, buttonRef.current,0)
     }, 500);

     gsap.set(contentRef.current, { y: 10});

     gsap.to(contentRef.current, {
       y: -50,
       ease: "none",
       scrollTrigger: scrollOptions
     });
    }

    if(squareRef.current) {
      gsap.to(squareRef.current, {
        scrollTrigger: {...scrollOptions, scrub: 2},
        xPercent: -10,
        yPercent: -10
      })
    }

    if( leftColumnRef.current && rightColumnRef.current) {

      gsap.set(leftColumnRef.current, {
        y: -50
      })

      gsap.set(rightColumnRef.current, {
        y: 40
      })


      gsap.to(leftColumnRef.current, {
        scrollTrigger: {...scrollOptions, scrub: 2},
        y: 16
      })

      gsap.to(rightColumnRef.current, {
        scrollTrigger: {...scrollOptions, scrub: 2},
        y: 0
      })
    }

  }, [])

  return (
    <div className="why-fidante">
      <TwoColumns options={{ backgroundColor: "light", mediaSide: "right" }}>
        <TwoColumnsContent>
         <div className="squares" ref={squareRef}> <SquareTwo /></div>
          <div className="why-fidante__content" ref={contentRef}>
            <div className="why-fidante__heading h2" ref={headingRef}>
              {title}
            </div>
            {intro && <div ref={introRef} className="why-fidante__intro text-intro margin-b-2" dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <div ref={buttonRef}>
              <Button url={url} label="Learn more" type="primary" />
              </div>}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
         {statistics?.length > 0 &&  <div className="why-fidante__stats">
            <div className="why-fidante__stats-column column-left" ref={leftColumnRef}>
              {statistics.slice(0,2).map(item => (
                <Statistic {...item} key={item.figure} />
              ))}
            </div>
            <div className="why-fidante__stats-column column-right" ref={rightColumnRef}>
              {statistics.slice(2,statistics.length).map(item => (
                <Statistic {...item} key={item.figure} />
              ))}
            </div>
          </div>}
        </TwoColumnsMedia>
      </TwoColumns>
    </div>
  );
};

export default WhyFidante;
