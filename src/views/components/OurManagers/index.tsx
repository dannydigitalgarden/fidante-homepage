import React from "react";
import LogoListing from "./LogoListing";
import './_our-managers.scss'

export interface OurManagersProps {
  title: string;
  backgroundImage: string;
  logos: Array<any>;
}

const OurManagers = ({ title, backgroundImage, logos }: OurManagersProps) => {
  return (
    <div className="our-managers" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="our-managers__title">
        <h1>{title}</h1>
      </div>

      {logos?.length > 0 && (
        <div className="our-managers__logos-listing-wrapper">
          {logos.map((logo) => (
            <LogoListing {...logo} key={logo.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurManagers;
