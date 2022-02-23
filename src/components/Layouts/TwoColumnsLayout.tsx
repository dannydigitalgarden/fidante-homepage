import React from 'react'
import cn from 'classnames'
import './_two-columns-layout.scss';

interface Props {
  contentChild: React.ReactNode,
  mediaChild: React.ReactNode,
  options?: {
    layoutType?: string,
    mediaSide?:string,
    backgroundColor?: string,
  }
}

const TwoColumnsLayout = ({ contentChild, mediaChild, options }: Props) => {

  const extraClass: any[] = [options?.layoutType, `media-side-${options?.mediaSide}`, options?.backgroundColor]
  return (
    <div className={cn('two-column-layout', extraClass) }>
      <div className="two-column-layout__content">
        {contentChild}
      </div>
      <div className="two-column-layout__media">
        {mediaChild}
      </div>
    </div>
  )
}

export default TwoColumnsLayout