import React from "react";
import Button from "components/Buttons";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import "./_hero-banner.scss";
import Rectangle from "./Rectangle";

export interface HeroBannerProps {
    mediaType: string;
    mediaSource: string;
    title: string;
    intro: string;
    url: string;
}

const HeroBanner = ({  mediaType, mediaSource, title, intro, url }: HeroBannerProps) => {
  return (
    <div className="hero-banner">
      <TwoColumnsLayout options={{ mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="hero-banner__content">
            <div className="hero-banner__heading h1" dangerouslySetInnerHTML={{ __html: title }}></div>
            {intro && <div className="hero-banner__intro text-intro margin-b-2" dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <Button url={url} label="Learn more" type="secondary" />}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          <div className="rectangle">
           <Rectangle />
          </div>
          <div className="hero-banner__media">
            {mediaType === "image" && <img src={mediaSource} alt={title} />}

            {mediaType === "video" && <video src={mediaSource} autoPlay muted controls={false} loop />}
          </div>
        </TwoColumnsMedia>
      </TwoColumnsLayout>
    </div>
  );
};

export default HeroBanner;
