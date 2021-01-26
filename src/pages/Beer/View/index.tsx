import React from 'react'

import Link from 'next/link'
import { Beer_Props } from './interfaces'
import { BeerStyled } from './styles'
import BeerPlace from './Place'

const Beerinfo: React.FC<Beer_Props> = ({ object }) => {
  /*
   const places =
    object.places?.map((n) => <BeerPlace key={n.id} object={n.Place} />) || []
*/
  return (
    <BeerStyled>
      <Link
        // href={object.uri || `/beers/${object.id}`}
        href={`/beers/${object.id}`}
      >
        <a title={object.name || ''}>
          <img
            src={'https://pivkarta.ru/images/resized/thumb/' + object.image}
            alt={object.name || ''}
          />
          <span className="name">{object.name}</span>
        </a>
      </Link>
      {/*places*/}
    </BeerStyled>
  )
}

export default Beerinfo