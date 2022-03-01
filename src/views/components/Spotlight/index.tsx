import React from "react";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import Button from "components/Buttons";
import BrandLogo from "components/BrandLogo";
import "./_spotlight.scss";
import { BrandLogos } from "../../../components/BrandLogo/index";
import { SquareThree } from "components/Squares";

export interface SpotlightProps {
  title: string;
  url?: string;
  intro?: string;
  brands: BrandLogos[];
}

const Spotlight = ({ title, intro, url, brands }: SpotlightProps) => {
  return (
    <div className="spotlight">
      <TwoColumns options={{ mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="squares"> <SquareThree /></div>
          <div className="spotlight__content">
            <div className="spotlight__heading">
              <h2>{title}</h2>
            </div>
            {intro && <div className="spotlight__intro margin-b-2 text-intro" dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <Button url={url} label="View all funds" type="secondary" />}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
          {brands?.length > 0 && (
            <div className="spotlight__logos-listing">
              {brands.map((brand) => (
                <BrandLogo {...brand} showInfo={true} key={brand.name} />
              ))}
            </div>
          )}
        </TwoColumnsMedia>
      </TwoColumns>
    </div>
  );
};

export default Spotlight;
