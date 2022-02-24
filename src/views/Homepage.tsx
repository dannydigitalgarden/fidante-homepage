import React from "react";
import HeroBanner from "./components/HeroBanner";
import FeatureVideoPanel from "./components/FeatureVideoPanel";
import WhyFidante from "./components/WhyFidante";
import OurManagers from "./components/OurManagers";
import Spotlight from "./components/Spotlight";
import LatestInsights from "./components/LatestInsights";

const card = {
  image: "https://images.pexels.com/photos/11178920/pexels-photo-11178920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  title: "Foundations for global net zero: An investor’s reflections on COP26",
  url: "#",
  intro: "While this year is only a few weeks old, the key theme in markets already appears to be well established.",
};

const bannerdata = {
  title: "Excellence in investment management",
  intro: "Fidante Partners forms long term alliances with talented investment teams to support and grow specialist investment management businesses.",
  mediaType: "video",
  mediaSource: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  url: "#",
};

const videoPanel = {
  title: "At Fidante Partners, active investing is at the heart of what we do.",
  videoSource: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  poster: "https://images.pexels.com/photos/6238608/pexels-photo-6238608.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
};

const whyFidante = {
  title: "Why Fidante?",
  intro: "Our investment managers are carefully selected not only for their robust investment processes, but their expertise, passion and ability to deliver the best possible outcomes for investors. These partnerships often involve managers’ taking an equity stake in the business, further aligning interests of the manager and their clients.",
  url: "#",
  statistics: [
    {
      icon:"https://www.svgrepo.com/show/408495/arrow-02.svg", figure:"A$87.5B", textColor:"#226257", backgroundColor:"white", description:"total funds under management"
    },
    {
      icon:"https://www.svgrepo.com/show/408495/arrow-02.svg", figure:"8th largest", textColor:"white", backgroundColor:"#6ccdb3", description:"fund manager in Australia"
    },
    {
      icon:"https://www.svgrepo.com/show/408495/arrow-02.svg", figure:"17", textColor:"white", backgroundColor:"#226257", description:"manager partnerships"
    },
    {
      icon:"https://www.svgrepo.com/show/408495/arrow-02.svg", figure:"10", textColor:"white", backgroundColor:"#226257", description:"office locations"
    },
    {
      icon:"https://www.svgrepo.com/show/408495/arrow-02.svg", figure:"221", textColor:"white", backgroundColor:"#226257", description:"employees globally"
    }
  ]
}

const spotlight = {
  title: "Why Fidante?",
  intro: "Our investment managers are carefully selected not only for their robust investment processes, but their expertise, passion and ability to deliver the best possible outcomes for investors. These partnerships often involve managers’ taking an equity stake in the business, further aligning interests of the manager and their clients.",
  url: "#",
  brandLogos: [
    {
      name:"Fidante", description:'Distributor of the Year', logo:"https://tonicpr.com.au/wp-content/uploads/2018/07/igtv-logo-circle-transparent-png.png", url:"#"
    },
    {
      name:"Eiger Capital", description:'Emerging Manager Winner', logo:"https://tonicpr.com.au/wp-content/uploads/2018/07/igtv-logo-circle-transparent-png.png", url:"#"
    },
    {
      name:"Ox Capital", description:'Fidante launches new Emerging Market fund manager', logo:"https://tonicpr.com.au/wp-content/uploads/2018/07/igtv-logo-circle-transparent-png.png", url:"#"
    },
    {
      name:"Impax Asset Management", description:'Recommended rating', logo:"https://tonicpr.com.au/wp-content/uploads/2018/07/igtv-logo-circle-transparent-png.png", url:"#"
    }
  ]
}



const latestInsights = {
  title: 'Latest Insights',
  articles: [
    {
      title: "Fed ‘Policy Normalisation’ Or a New Bear Market?",
      intro: "While this year is only a few weeks old, the key theme in markets already appears to be well established.",
      image: "https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "#"
    },
    {
      title: "Fed ‘Policy Normalisation’ Or a New Bear Market?",
      intro: "While this year is only a few weeks old, the key theme in markets already appears to be well established.",
      image: "https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "#"
    },
    {
      title: "Fed ‘Policy Normalisation’ Or a New Bear Market?",
      intro: "While this year is only a few weeks old, the key theme in markets already appears to be well established.",
      image: "https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "#"
    }
  ]
}

const Homepage = () => {
  return (
    <div className="fidante-homepage">
      <HeroBanner data={bannerdata} />
      <FeatureVideoPanel {...videoPanel} />
      <WhyFidante {...whyFidante}/>
      <OurManagers />
      <Spotlight {...spotlight} />
      <LatestInsights {...latestInsights} />
    </div>
  );
};

export default Homepage;
