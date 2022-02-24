import React from "react";
import Button from "components/Buttons";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import "./_hero-banner.scss";

interface PanelProps {
  data: {
    mediaType: string;
    mediaSource: string;
    title: string;
    intro: string;
    url: string;
  };
}

const HeroBanner = ({ data }: PanelProps) => {
  return (
    <div className="hero-banner">
      <TwoColumnsLayout options={{ mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="hero-banner__content">
            <div className="hero-banner__heading">
              <h1>{data.title}</h1>
            </div>
            {data.intro && <div className="hero-banner__intro margin-b-2" dangerouslySetInnerHTML={{ __html: data.intro }}></div>}
            {data.url && <Button url={data.url} label="Learn more" type="secondary" />}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          <div className="hero-banner__media">
            {data.mediaType === "image" && <img src={data.mediaSource} alt={data.title} />}

            {data.mediaType === "video" && <video src={data.mediaSource} autoPlay muted controls={false} loop />}
          </div>
        </TwoColumnsMedia>
      </TwoColumnsLayout>
    </div>
  );
};

export default HeroBanner;
