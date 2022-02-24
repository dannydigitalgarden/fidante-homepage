import React from 'react'
import './_our-managers.scss'

interface Props {

}

const bg= "https://images.pexels.com/photos/5714375/pexels-photo-5714375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

const OurManagers = () => {
  return (
    <div className='our-managers' style={{backgroundImage: `url(${bg})`}}>
        <div className="our-managers__title">
            <h1>Our Managers</h1>
        </div>
        <div className="our-managers__logos-listing">
            Logo listing
        </div>
    </div>
  )
}

export default OurManagers