import React, { useEffect, useState } from "react";
import Card, { InsightCard } from "components/Card";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useWindowSize from "../../../hooks/useWindowSize";
import "swiper/css";
import "./_latest-insights.scss";

interface Props {
  title: string;
  articles: InsightCard[];
}

const LatestInsights = ({ title, articles }: Props) => {

  return (
    <div className="latest-insights">
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
                slidesPerView={1.2}
                breakpoints={{
                  650: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1500: {
                    slidesPerView: 3,
                    spaceBetween: 40,
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
