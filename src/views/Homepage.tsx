import React, {useEffect} from "react";
import HeroBanner, { HeroBannerProps } from "./components/HeroBanner";
import FeatureVideoPanel, { FeatureVideoPanelProps } from "./components/FeatureVideoPanel";
import WhyFidante, { WhyFidanteProps } from "./components/WhyFidante";
import OurManagers, { OurManagersProps } from "./components/OurManagers";
import Spotlight, { SpotlightProps } from "./components/Spotlight";
import LatestInsights, { LatestInsightsProps } from "./components/LatestInsights";




export interface HomepageProps {
  heroBanner: HeroBannerProps;
  videoPanel: FeatureVideoPanelProps;
  whyFidante: WhyFidanteProps;
  ourManagers: OurManagersProps;
  spotlight: SpotlightProps;
  latestInsights: LatestInsightsProps;
}

const Homepage = ({ heroBanner, videoPanel, whyFidante, ourManagers, spotlight, latestInsights }: HomepageProps) => {
  useEffect(() => {

  }, [])
  return (
    <div className="fidante-homepage container">
      <HeroBanner {...heroBanner} />
      <FeatureVideoPanel {...videoPanel} />
      <WhyFidante {...whyFidante} />
      <OurManagers {...ourManagers} />
      <Spotlight {...spotlight} />
      <LatestInsights {...latestInsights} />
    </div>
  );
};

export default Homepage;
