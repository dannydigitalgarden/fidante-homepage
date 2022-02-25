import React from 'react'
import BrandLogo, { BrandLogos } from '../../../components/BrandLogo/index';


interface Props {
    category: string;
    color: string;
    brands: BrandLogos[]
}

const LogoListing = ({category, brands, color}: Props) => {
  return (
    <div className='logo-listing'>
        <div className="logo-listing__category" style={{backgroundColor: color}}>
            <h3>{category}</h3>
        </div>
        {brands?.length > 0 && (
            <div className="logo-listing__items">
              {brands.map((brand) => (
                <BrandLogo {...brand} showInfo={false} key={brand.name} />
              ))}
            </div>
          )}
    </div>
  )
}

export default LogoListing