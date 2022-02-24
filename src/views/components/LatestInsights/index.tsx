import React from 'react'
import Card, { InsightCard } from 'components/Card'
import TwoColumns, { TwoColumnsContent, TwoColumnsMedia } from 'components/Layouts/TwoColumns'
import './_latest-insights.scss';

interface Props {
    title: string,
    articles: InsightCard[]
}

const LatestInsights = ({title, articles}: Props) => {
  return (
    <div className='latest-insights'>
        <TwoColumns options={{backgroundColor: 'light',mediaSide:'right' ,layoutType: 'layout-2-3'}}>
            <TwoColumnsContent >
                <div className="latest-insight__heading">
                    <h2>{title}</h2>
                </div>
            </TwoColumnsContent>
            <TwoColumnsMedia>
                {articles?.length > 0 && (
                    <div className="latest-insights__listing">
                        {articles.map((article, index) =>(
                            <div className='card-wrapper' key={index}>
                                <Card {...article}/>
                            </div>
                        ))}
                    </div>
                )}
            </TwoColumnsMedia>
        </TwoColumns>
    </div>
  )
}

export default LatestInsights