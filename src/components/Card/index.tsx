import React, {useRef, useState} from "react";
import Button from "components/Buttons";
import "./_card.scss";

export interface InsightCard {
  title: string;
  intro: string;
  image: string;
  url: string;
}

const Card = ({ title, intro, image, url }: InsightCard) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false)


  return (
    <div className="card" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="card__image" style={{backgroundImage: `url(${image})`}}></div>
      <a className="card__link" href={url}>
        <div className="card__overlay"></div>
        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__intro text-intro">{intro}</div>
        </div>
      </a>
      <div className="card__button" ref={buttonRef}>
          <Button type="secondary" url={url} isHover={isHover}/>
        </div>
    </div>
  );
};

export default Card;
