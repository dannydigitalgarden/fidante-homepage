import React, { useRef, MutableRefObject, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import "./_statistic.scss";

export interface StatisticProps {
  icon: string;
  figure: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

const Statistic = ({ icon, figure, description, backgroundColor, textColor }: StatisticProps) => {
  const [isInjectedSvg, setIsInjectedSvg] = useState(false);
  const iconRef = useRef() as MutableRefObject<HTMLDivElement>;

  const afterInjection = (error: Error, svg: HTMLOrSVGElement) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(svg);
  };

  useEffect(() => {
    if (iconRef.current && isInjectedSvg) {
      setTimeout(() => {
        const pathElements = iconRef.current.querySelectorAll("svg path") as NodeListOf<any>;
        const ellipseElements = iconRef.current.querySelectorAll("svg ellipse") as NodeListOf<any>;
        const rectElements = iconRef.current.querySelectorAll("svg rect") as NodeListOf<any>;
        const elements = [...pathElements, ...ellipseElements, ...rectElements];

        if (elements.length > 0) {
          elements.forEach((el) => {
            el.style.setProperty("--stroke-dasharray", el.getTotalLength());
          });
        }
      }, 500);
    }
  }, [isInjectedSvg]);
  return (
    <div className="statistic" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <div className="statistic__icon" ref={iconRef}>
        <ReactSVG
          afterInjection={(error, svg) => {
            if (error) return;
            setIsInjectedSvg(true);
          }}
          src={icon}
          className="statistic-svg-wrap"
          fallback={() => <span>Error!</span>}
        />
      </div>
      <div className="statistic__info">
        <div className="statistic__figure">{figure}</div>
        <div className="statistic__description h3">{description}</div>
      </div>
    </div>
  );
};

export default Statistic;
