
import React from 'react';
import cn from 'classnames';
import logo from 'assets/icons/logo.svg'
import './_loading-spinner.scss'

const LoadingSpinner = ({isLoading} : {isLoading: boolean}) => {
  return (
    <div className={cn('loading-spinner', {'loading-spinner--hidden' : !isLoading})}>
        <div className='loading-spinner__inner bb'>
            <img src={logo} alt="fidante" />
        </div>
    </div>
  )
}

export default LoadingSpinner