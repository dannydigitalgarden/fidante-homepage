
import React, {useEffect} from 'react';
import cn from 'classnames';
import logo from 'assets/icons/logo.svg';
import gsap from 'gsap'
import './_fidante-preloader.scss'

const Preloader = ({isLoading} : {isLoading: boolean}) => {

  useEffect(() => {

   if (!isLoading) {
    const tl = gsap.timeline();
    tl.to('.fidante-preloader__inner', {
      duration: 0.3,
      opacity: 0,
    }, )

    tl.to('#fidante-preloader', {
      scaleY: 0,
      duration: 1.2,
      ease: "power2.inOut",
    })

   
   }

  }, [isLoading])

  return (
    <div id="fidante-preloader" className={cn('fidante-preloader', {'fidante-preloader--hidden' : !isLoading})}>
        <div className='fidante-preloader__inner'>
            <img src={logo} alt="fidante" />
        </div>
    </div>
  )
}

export default Preloader