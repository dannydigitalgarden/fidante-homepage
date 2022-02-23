import React from 'react'
import './_statistic.scss';

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
            <img src={icon} alt={description} />
        </div>
       <div className='statistic__info'>
          <div className="statistic__figure">{figure}</div>
          <div className='statistic__description'>{description}</div>
       </div>
    </div>
  )
}

export default Statistic