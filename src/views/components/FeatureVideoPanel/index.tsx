import React from "react";
import Video from "components/VideoPlayer/VideoPlayer";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";

import "./_feature-video-panel.scss";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";
import { SquareOne } from "components/Squares";
export interface FeatureVideoPanelProps {
  title: string;
  videoSource: string;
  poster: string;
}


const FeatureVideoPanel = ({ title, videoSource, poster }: FeatureVideoPanelProps) => {
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
          <div className="feature-video-panel__title">
            <h2>{title}</h2>
          </div>
        </TwoColumnsContent>
      </TwoColumnsLayout>
    </div>
  );
};

export default FeatureVideoPanel;
