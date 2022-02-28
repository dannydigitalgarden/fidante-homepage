import React, { useRef, useEffect, MutableRefObject } from "react";
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from "components/Layouts/TwoColumns";
import Button from "components/Buttons";
import Statistic from "components/Statistic";
import "./_why-fidante.scss";
import { StatisticProps } from "components/Statistic";

interface Props {
  title: string;
  url?: string;
  intro?: string;
  statistics: StatisticProps[];
}

const WhyFidante = ({ title, intro, url, statistics }: Props) => {
  const leftColumnRef = useRef() as MutableRefObject<HTMLDivElement>;
  const rightColumnRef = useRef() as MutableRefObject<HTMLDivElement>;



  return (
    <div className="why-fidante">
      <TwoColumns options={{ backgroundColor: "light", mediaSide: "right" }}>
        <TwoColumnsContent>
          <div className="why-fidante__content">
            <div className="why-fidante__heading">
              <h2>{title}</h2>
            </div>
            {intro && <div className="why-fidante__intro text-intro margin-b-2" dangerouslySetInnerHTML={{ __html: intro }}></div>}
            {url && <Button url={url} label="Learn more" type="primary" />}
          </div>
        </TwoColumnsContent>
        <TwoColumnsMedia>
         {statistics?.length > 0 &&  <div className="why-fidante__stats">
            <div className="why-fidante__stats-column column-left" ref={leftColumnRef}>
              {statistics.slice(0,2).map(item => (
                <Statistic {...item} key={item.figure} />
              ))}
            </div>
            <div className="why-fidante__stats-column column-right" ref={rightColumnRef}>
              {statistics.slice(2,statistics.length).map(item => (
                <Statistic {...item} key={item.figure} />
              ))}
            </div>
          </div>}
        </TwoColumnsMedia>
      </TwoColumns>
    </div>
  );
};

export default WhyFidante;
