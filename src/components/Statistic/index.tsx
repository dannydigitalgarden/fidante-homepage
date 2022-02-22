import React from 'react'
import { ReactSVG } from 'react-svg'

interface StatisticProps {
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
        <div className="statistic__figure">{figure}</div>
        <div className='statistic__description'>{description}</div>
    </div>
  )
}

export default Statistic