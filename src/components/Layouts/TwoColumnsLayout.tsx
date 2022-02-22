import React from 'react'
import cn from 'classnames'
interface Props {
  children: React.ReactNode,
  options?: {
    layoutType?: string,
    mediaSide?:string,
    backgroundColor?: string,
    textColor?: string,
  }
}

const TwoColumnsLayout = ({ children, options }: Props) => {

  const extraClass: any[] = [options?.layoutType, options?.mediaSide, options?.backgroundColor, options?.textColor]
  return (
    <div className={cn('two-column-layout', extraClass) }>{children}</div>
  )
}

export default TwoColumnsLayout