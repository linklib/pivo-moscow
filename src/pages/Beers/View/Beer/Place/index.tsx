import Link from 'next/link'
import React from 'react'
import { BeerPlaceProps } from './interfaces'
import { BeerPlaceStyled } from './styles'

const BeerPlace: React.FC<BeerPlaceProps> = ({ object }) => {
  return (
    <BeerPlaceStyled>
      <Link href={`/places/${object.id}`}>
        <a>{object.name}</a>
      </Link>
    </BeerPlaceStyled>
  )
}

export default BeerPlace
