import React from "react";
import Button from "components/Buttons";
import TwoColumnsLayout from "components/Layouts/TwoColumnsLayout";
import "./_hero-banner.scss";

interface PanelProps {
  mediaType: string;
  mediaSource: string;
  title: string;
  intro: string;
  url: string;
}

export const HeroContent = ({ title, intro, url } : {title: string, intro: string, url: string}) => {
  return (
    <div className="hero-banner__content">
      <div className="hero-banner__heading">
        <h1>{title}</h1>
      </div>
      {intro && (
        <div
          className="hero-banner__intro margin-b-2"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></div>
      )}
      {url && <Button url={url} label="Learn more" type="secondary" />}
    </div>
  );
};

export const HeroMedia = ({ mediaType, mediaSource, title }: {mediaType:string, mediaSource: string, title: string}) => {
  return (
    <div className="hero-banner__media">
      {mediaType === "image" && <img src={mediaSource} alt={title} />}

      {mediaType === "video" && (
        <video src={mediaSource} autoPlay muted controls={false} loop />
      )}
    </div>
  );
};



const HeroBanner = ({...data} : PanelProps) => {
  return (
    <div className="hero-banner">
      <TwoColumnsLayout
        contentChild={
          <HeroContent title={data.title} intro={data.intro} url={data.url} />
        }
        mediaChild={
          <HeroMedia
            mediaType={data.mediaType}
            mediaSource={data.mediaSource}
            title={data.title}
          />
        }
        options={{ mediaSide: "right" }}
      />
    </div>
  );
};

export default HeroBanner;
