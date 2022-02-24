import React from "react";
import Video from "components/Video";
import TwoColumnsLayout, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";

import "./_feature-video-panel.scss";
interface Props {
  title: string;
  videoSource: string;
  poster: string;
}

const FeatureVideoPanel = ({ title, videoSource, poster }: Props) => {
  return (
    <div className="feature-video-panel">
      <TwoColumnsLayout options={{ backgroundColor: "light", layoutType: "layout-3-2" }}>
        <TwoColumnsMedia>
          <div className="feature-video-panel__video">
            <Video source={videoSource} poster={poster} />
          </div>
        </TwoColumnsMedia>
        <TwoColumnsContent>
          <div className="feature-video-panel__title">
            <h2>{title}</h2>
          </div>
        </TwoColumnsContent>
      </TwoColumnsLayout>
    </div>
  );
};

export default FeatureVideoPanel;
