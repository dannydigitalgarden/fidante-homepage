import React from "react";
import LogoListing from "./LogoListing";
import "./_our-managers.scss";

interface Props {
  title: string;
  backgroundImage: string;
  logos: Array<any>;
}

const OurManagers = ({ title, backgroundImage, logos }: Props) => {
  return (
    <div className="our-managers" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="our-managers__title">
        <h1>{title}</h1>
      </div>

      {logos?.length > 0 && (
        <div className="our-managers__logos-listing">
          {logos.map((logo) => (
            <LogoListing {...logo} key={logo.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurManagers;
