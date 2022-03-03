import { useRef, useEffect, MutableRefObject } from 'react'
import Card, { InsightCard } from "components/Card";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "./_latest-insights.scss";
import { SquareFour } from '../../../components/Squares/index';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {textReveal} from 'utils/animation'
export interface LatestInsightsProps {
  title: string;
  articles: InsightCard[];
}

const LatestInsights = ({ title, articles }: LatestInsightsProps) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const mediaRef = useRef() as MutableRefObject<HTMLImageElement>

  useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray('.card')

    const scrollOptions = {
      trigger: ".latest-insights",
      start: 'top 80%',
      end: '+=50%',
      scrub: 1.25,
      toggleActions: "play none none none"
    }

    if (headingRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, undefined, undefined, 0)
      }, 500)

      gsap.set(headingRef.current, { y: 30});

      gsap.to(headingRef.current, {
        y: -10,
        ease: "none",
        scrollTrigger: scrollOptions
      });

      gsap.from('.latest-insights .layout-two-columns', {
        scrollTrigger: scrollOptions,
        backgroundColor: 'white',
        duration: 1.5
      })
    }

    

    if ( window.matchMedia('(min-width: 960px)').matches) {
      if (cards?.length > 0 &&  mediaRef.current){
        gsap.from(cards, {
          scrollTrigger: {trigger: mediaRef.current, start: 'top 80%', scrub: false, toggleActions: "play none none reverse"},
          y: 40,
          delay: 0.5,
          duration: 0.4,
          opacity: 0.5,
          stagger: 0.2
        })
      }
    }


  }, [])

  return (
    <div className="latest-insights">
       <div className="squares"><SquareFour /></div>
      <TwoColumns options={{ backgroundColor: "light", mediaSide: "right", layoutType: "layout-2-3" }}>
        <TwoColumnsContent>
          <div className="latest-insights__heading h2" ref={headingRef}>
            {title}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          {articles?.length > 0 && (
            <div className="latest-insights__listing" ref={mediaRef}>
              <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                slidesPerView={1.2}
                breakpoints={{
                  650: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                    centeredSlides:false,
                    centeredSlidesBounds: false,
                  },

                  768: {
                    centeredSlides:false,
                    centeredSlidesBounds: false,
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                  },
                  960: {
                    centeredSlides:false,
                    centeredSlidesBounds: false,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    enabled: false
                  },
                  1500: {
                    centeredSlides:false,
                    centeredSlidesBounds: false,
                    slidesPerView: 3,
                    spaceBetween: 40,
                    enabled: false
                  }
                }}
                spaceBetween={10}
                className="latest-insights__listing-wrapper"
              >
                {articles.map((article, index) => (
                  <SwiperSlide className="card-wrapper" key={index}>
                    <Card {...article} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </TwoColumnsMedia>
      </TwoColumns>
    </div>
  );
};

export default LatestInsights;
