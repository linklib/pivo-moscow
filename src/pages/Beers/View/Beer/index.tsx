import React from 'react'

import Link from 'next/link'
import { BeerProps } from './interfaces'
import { BeerStyled } from './styles'
import BeerPlace from './Place'

const Beer: React.FC<BeerProps> = ({ object }) => {
  const places =
    object.places?.map((n) => <BeerPlace key={n.id} object={n.Place} />) || []

  return (
    <BeerStyled>
      <Link
        // href={object.uri || `/beers/${object.id}`}
        href={`/beers/${object.id}`}
      >
        <a title={object.name || ''}>
          <span className="name">{object.name}</span>
        </a>
      </Link>
      {places}
    </BeerStyled>
  )
}

export default Beer
