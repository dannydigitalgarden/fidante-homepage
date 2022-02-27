import React from "react";
import HeroBanner from "./components/HeroBanner";
import FeatureVideoPanel from "./components/FeatureVideoPanel";
import WhyFidante from "./components/WhyFidante";
import OurManagers from "./components/OurManagers";
import Spotlight from "./components/Spotlight";
import LatestInsights from "./components/LatestInsights";
//icons
import icon1 from 'assets/icons/icon-1.svg'
import icon2 from 'assets/icons/icon-2.svg'
import icon3 from 'assets/icons/icon-3.svg'
import icon4 from 'assets/icons/icon-4.svg'
import icon5 from 'assets/icons/icon-5.svg'



const bannerdata = {
  title: "Excellence in investment management",
  intro: "Fidante Partners forms long term alliances with talented investment teams to support and grow specialist investment management businesses.",
  mediaType: "image",
  mediaSource: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
      icon: icon1, figure:"A$87.5B", textColor:"#226257", backgroundColor:"white", description:"total funds under management"
    },
    {
      icon: icon2, figure:"8th largest", textColor:"white", backgroundColor:"#6ccdb3", description:"fund manager in Australia"
    },
    {
      icon:icon3, figure:"17", textColor:"white", backgroundColor:"#226257", description:"manager partnerships"
    },
    {
      icon:icon4, figure:"10", textColor:"white", backgroundColor:"#226257", description:"office locations"
    },
    {
      icon:icon5, figure:"221", textColor:"white", backgroundColor:"#226257", description:"employees globally"
    }
  ]
}

const managers = {
  title: "Our Managers",
  backgroundImage: "https://images.pexels.com/photos/5714375/pexels-photo-5714375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  logos: [
    {
      category: 'Australian Equities',
      color:'#ef9600',
      brands: [
        {
          name:"a", description:'Distributor of the Year', logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png", url:"#"
        },
        {
          name:"b", description:'Emerging Manager Winner', logo:"https://www.fidante.com/-/media/fidante/managers/eigercapital_transparent_logo_165x33px.png?h=33&w=165&la=en&hash=09B5343C8E98DC9EC236F67E38A93AE2", url:"#"
        },
        {
          name:"c", description:'Fidante launches new Emerging Market fund manager', logo:"https://www.fidante.com/-/media/fidante/managers/greencape-logo-transparent.png?h=45&w=160&la=en&hash=CA851DFC57861A7501A6055F63979122", url:"#"
        },
        {
          name:"d", description:'Recommended rating', logo:"https://www.fidante.com/-/media/fidante/managers/lennox_logo_166x60px/lennox_logo_166x60px_72dpi.png?h=60&w=166&la=en&hash=3422FE2D7E853392B010CC1F35CCFDAB", url:"#"
        },
        {
          name:"e", description:'Emerging Manager Winner', logo:"https://www.fidante.com/-/media/fidante/managers/24754-merlon-logo-transparent.png?h=27&w=151&la=en&hash=0734B3D9624074F7DCA6C1A2220F86A1", url:"#"
        },
        {
          name:"f", description:'Fidante launches new Emerging Market fund manager', logo:"https://www.fidante.com/-/media/fidante/managers/24754-novaport-logo-transparent.png?h=33&w=165&la=en&hash=4D316C4D60627C968629AA782E6FA89A", url:"#"
        },
        {
          name:"g", description:'Recommended rating', logo:"https://www.fidante.com/-/media/fidante/managers/24754-wavestone-logo-transparent.png?h=34&w=153&la=en&hash=FBD11FD52960B8832E8414E866BE6114", url:"#"
        }
      ]
    },
    {
      category: 'Global Equities',
      color:'#013b06',
      brands: [
        {
          name:"h", description:'Distributor of the Year', logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png", url:"#"
        },
        {
          name:"j", description:'Emerging Manager Winner', logo:"https://www.fidante.com/-/media/fidante/managers/impax-175-logo.png?h=30&w=175&la=en&hash=90CAF16A20A40D1D9094F5C80305EF8E", url:"#"
        },
        {
          name:"k", description:'Fidante launches new Emerging Market fund manager', logo:"https://www.fidante.com/-/media/fidante/managers/oxcap/oxcaplogo50.png?h=50&w=136&la=en&hash=05424EA1B8C7E02AB8AE864C317614A1", url:"#"
        },
       
      ]
    },
    {
      category: 'Fixed Income',
      color: '#28bbc7',
      brands: [
        {
          name:"q", description:'Distributor of the Year', logo:"https://www.fidante.com/-/media/fidante/managers/24754-ardea-logo-transparent.png?h=60&w=156&la=en&hash=C2061DD0ACC7D4613EA652537315B67D", url:"#"
        },
        {
          name:"i", description:'Emerging Manager Winner', logo:"https://www.fidante.com/-/media/fidante/managers/ares-transparent_logo.png?h=30&w=175&la=en&hash=A38CA8036B306EE40EC18D6FD69DC43E", url:"#"
        },
        {
          name:"e", description:'Fidante launches new Emerging Market fund manager', logo:"https://www.fidante.com/-/media/fidante/managers/24754-bentham-logo-transparent.png?h=41&w=167&la=en&hash=0451A764B764BB417DB90620B6C2A7AF", url:"#"
        },
        {
          name:"t", description:'Recommended rating', logo:"https://www.fidante.com/-/media/fidante/managers/cipam_logo-x-167.jpg?h=47&w=180&la=en&hash=446DFA38F3867E32998DA3B2D93DD190", url:"#"
        },
        {
          name:"y", description:'Recommended rating', logo:"https://www.fidante.com/-/media/fidante/managers/24754-kapstream-logo-transparent.png?h=56&w=158&la=en&hash=3FC712983D7943C50E8AF3A11BDE6547", url:"#"
        }
      ]
    },
    {
      category: 'Alternatives',
      color: '#40748e',
      brands: [
        {
          name:"z", description:'Distributor of the Year', logo:"https://www.fidante.com/-/media/fidante/managers/pat_logo_rgb-170x45-transparent.png?h=45&w=170&la=en&hash=94D2EE9A62D3B309D8368CBB40DC605B", url:"#"
        },
        {
          name:"x", description:'Emerging Manager Winner', logo:"https://www.fidante.com/-/media/fidante/managers/24754-resonance-logo-transparent_v3.png?h=81&w=175&la=en&hash=5530776925EC2339801551D96BBD3A12", url:"#"
        }
      ]
    }
  ]
}

const spotlight = {
  title: "In the spotlight?",
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  url: "#",
  brands: [
    {
      name:"Fidante", description:'Distributor of the Year', logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png", url:"#"
    },
    {
      name:"Eiger Capital", description:'Emerging Manager Winner', logo:"https://images.squarespace-cdn.com/content/5bcfdca2f4e531366d9e89fd/4f518aad-4b51-46e7-9362-5fccfb4e5549/FMOTY2021_tagline_black.png?format=1500w&content-type=image%2Fpng", url:"#"
    },
    {
      name:"Ox Capital", description:'Fidante launches new Emerging Market fund manager', logo:"https://www.fidante.com/-/media/fidante/managers/oxcap/oxcaplogo50.png?h=50&w=136&la=en&hash=05424EA1B8C7E02AB8AE864C317614A1", url:"#"
    },
    {
      name:"Impax Asset Management", description:'Recommended rating', logo:"https://www.fidante.com/-/media/fidante/managers/lennox_logo_166x60px/lennox_logo_166x60px_72dpi.png?h=60&w=166&la=en&hash=3422FE2D7E853392B010CC1F35CCFDAB", url:"#"
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
    <div className="fidante-homepage container">
      <HeroBanner data={bannerdata} />
      <FeatureVideoPanel {...videoPanel} />
      <WhyFidante {...whyFidante}/>
      <OurManagers {...managers} />
      <Spotlight {...spotlight} />
      <LatestInsights {...latestInsights} />
    </div>
  );
};

export default Homepage;
