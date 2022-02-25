import React from "react";
import cn from 'classnames'
import './_brand-logo.scss';
export interface BrandLogos {
  name: string;
  description?: string;
  logo: string;
  url: string;
  showInfo?: boolean
}

const BrandLogo = ({ name, description, logo, url, showInfo=false }: BrandLogos ) => {
  return (
    <a className={cn("brand-logo", {"show-info" : showInfo})} href={url} arial-label={name} rel="noopener noreferrer nofollow" >
      {showInfo && (
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
