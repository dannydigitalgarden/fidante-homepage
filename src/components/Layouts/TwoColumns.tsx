import React from 'react'
import cn from 'classnames'
import './_two-columns.scss';

interface Props {
  children: React.ReactNode,
  options?: {
    layoutType?: string,
    mediaSide?:string,
    backgroundColor?: string,
  }
}

export const TwoColumnsContent = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="layout-two-columns__content">
      {children}
    </div>
  )
}

export const TwoColumnsMedia = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="layout-two-columns__media">
      {children}
    </div>
  )
}


const TwoColumns = ({ children, options }: Props) => {

  const extraClass: any[] = [options?.layoutType, `media-side-${options?.mediaSide}`, `background-${options?.backgroundColor}`]
  return (
    <div className={cn('layout-two-columns', extraClass) }>
     {children}
    </div>
  )
}

export default TwoColumns