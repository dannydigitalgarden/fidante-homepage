import React from "react";
import './_brand-logo.scss';
export interface BrandLogos {
  name: string;
  description?: string;
  logo: string;
  url: string;
}

const BrandLogo = ({ name, description, logo, url }: BrandLogos ) => {
  return (
    <a className="brand-logo" href="#" arial-label={name} rel="noopener noreferrer nofollow" >
      {name && description && (
        <div className="brand-logo__info">
          <div className="brand-logo__name h3">{name}</div>
          <div className="brand-logo__description intro-text">{description}</div>
        </div>
      )}
      <div className="brand-logo__image">
        <img src={logo} alt={name} />
      </div>
    </a>
  );
};

export default BrandLogo;
