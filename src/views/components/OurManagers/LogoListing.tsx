import React, {useRef, RefObject } from 'react'
import BrandLogo, { BrandLogos } from '../../../components/BrandLogo/index';
import { useIsOverflow } from 'hooks/useIsOverflow';
import cn from 'classnames'

interface Props {
    category: string;
    color: string;
    brands: BrandLogos[]
}

const LogoListing = ({category, brands, color}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(ref);
  return (
    <div className={cn("logo-listing", {'is-overflow': isOverflow})}>
        <div className="logo-listing__category" style={{backgroundColor: color}}>
            <h3>{category}</h3>
        </div>
        {brands?.length > 0 && (
            <div className={cn("logo-listing__items", {'is-overflow': isOverflow})} ref={ref}>
              {brands.map((brand) => (
                <BrandLogo {...brand} showInfo={false} key={brand.name} />
              ))}
            </div>
          )}
    </div>
  )
}

export default LogoListing