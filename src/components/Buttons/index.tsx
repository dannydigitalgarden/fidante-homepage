import React from 'react'
import cn from 'classnames';
import colors  from 'constants/colors'
import './_button.scss';
interface Props {
  isHover?: boolean,
  label?: string,
  url: string,
  type?: string,
}

const Button = ({isHover, label, url, type='primary'} : Props) => {

  return (
    <a arial-label={label ? label :  'read more'} rel="noopener noreferrer nofollow" href={url} className={cn('button', {'is-hover': isHover }, `button-${type}`, {'icon-fill': !label}, {'icon-expand': label})}>
      {label &&  <span className='button__label'>{label}</span>}
      <span className='button__arrow'>
      <svg  width="32" height="32" viewBox="0 0 24 24" focusable="false" className='arrow-right' fill={type == 'primary' ? '#fff' : colors.primary}><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path></svg>
      </span>
    </a>
  )
}

export default Button