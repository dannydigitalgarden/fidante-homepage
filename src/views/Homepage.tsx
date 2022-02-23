import React from "react";
import Statistic from "components/Statistic";
import TwoColumnsLayout from "components/Layouts/TwoColumnsLayout";
import Video from "components/Video";
import Button from "components/Buttons";
import Card from "components/Card";
import colors from "constants/colors";
import HeroBanner from "./components/HeroBanner";
import FeatureVideoPanel from "./components/FeautureVideoPanel";

const card = {
  image: "https://images.pexels.com/photos/11178920/pexels-photo-11178920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  title: "Foundations for global net zero: An investor’s reflections on COP26",
  url: "#",
  intro: "While this year is only a few weeks old, the key theme in markets already appears to be well established."
}

 const data = {
  title: "Excellence in investment management",
  intro:
    "Fidante Partners forms long term alliances with talented investment teams to support and grow specialist investment management businesses.",
  mediaType: "video",
  mediaSource:
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  url: "#",
};


const Homepage = () => {
  return (
    <div className="fidante-homepage">
      <HeroBanner {...data} />
      <FeatureVideoPanel />
    </div>
  );
};

export default Homepage;
