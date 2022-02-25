import React from 'react'
import { ReactSVG } from 'react-svg'
import './_statistic.scss';

export interface StatisticProps {
 icon: string,
 figure: string,
 description: string,
 backgroundColor: string,
 textColor: string;
}

const Statistic = ({icon, figure, description, backgroundColor, textColor}: StatisticProps) => {

  return (
    <div className='statistic' style={{backgroundColor: backgroundColor, color: textColor}}>
        <div className="statistic__icon">
          <ReactSVG src={icon} />
        </div>
       <div className='statistic__info'>
          <div className="statistic__figure">{figure}</div>
          <div className='statistic__description h3'>{description}</div>
       </div>
    </div>
  )
}

export default Statistic