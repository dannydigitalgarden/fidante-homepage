import React, {useRef, useEffect, MutableRefObject} from "react";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import "./_feature-video-panel.scss";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";
import { SquareOne } from "components/Squares";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {textReveal} from 'utils/animation'
export interface FeatureVideoPanelProps {
  title: string;
  videoSource: string;
  poster: string;
}


const FeatureVideoPanel = ({ title, videoSource, poster }: FeatureVideoPanelProps) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const videoJsOptions = {
    theme:'forest',
    controls: true,
    fluid: true,
    responsive: true,
    poster: poster,
    sources: [
      {
        src: videoSource,
      }
    ]
  };

  useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const scrollOptions = {
      trigger: ".feature-video-panel",
      start: 'top 80%',
      end: '+=80%',
      scrub: 1.25,
      toggleActions: "play none none none"
    }

    if (headingRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, undefined, undefined, 0)
      }, 1000)

      gsap.set(headingRef.current, { y: 20});

      gsap.to(headingRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: scrollOptions
      });
    }

    


     

  }, [])


  return (
    <div className="feature-video-panel">
      <TwoColumnsLayout options={{ backgroundColor: "light", layoutType: "layout-3-2" }}>
        <TwoColumnsMedia>
          <div className="feature-video-panel__video">
            <VideoPlayer options={videoJsOptions}  />
          </div>
        </TwoColumnsMedia>
        <TwoColumnsContent>
         <div className="squares"> <SquareOne /></div>
          <div className="feature-video-panel__title h2" ref={headingRef}>
            {title}
          </div>
        </TwoColumnsContent>
      </TwoColumnsLayout>
    </div>
  );
};

export default FeatureVideoPanel;
