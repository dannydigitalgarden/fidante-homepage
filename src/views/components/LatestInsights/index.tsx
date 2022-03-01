
import Card, { InsightCard } from "components/Card";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./_latest-insights.scss";
import { SquareFour } from '../../../components/Squares/index';

export interface LatestInsightsProps {
  title: string;
  articles: InsightCard[];
}

const LatestInsights = ({ title, articles }: LatestInsightsProps) => {

  return (
    <div className="latest-insights">
       <div className="squares"><SquareFour /></div>
      <TwoColumns options={{ backgroundColor: "light", mediaSide: "right", layoutType: "layout-2-3" }}>
        <TwoColumnsContent>
          <div className="latest-insights__heading">
            <h2>{title}</h2>
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          {articles?.length > 0 && (
            <div className="latest-insights__listing">
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
