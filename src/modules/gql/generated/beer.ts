/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { PlaceFragment } from './place';
import { gql } from '@apollo/client';
import { PlaceFragmentDoc } from './place';
export type BeerFragment = { __typename?: 'Beer', id: string, name?: Types.Maybe<string>, uri?: Types.Maybe<string>, image?: Types.Maybe<string>, url_name?: Types.Maybe<string>, places?: Types.Maybe<Array<{ __typename?: 'PlaceBeer', id: string, price?: Types.Maybe<number>, Place: (
      { __typename?: 'Place' }
      & PlaceFragment
    ) }>> };

export const BeerFragmentDoc = gql`
    fragment beer on Beer {
  id
  name
  uri
  image
  url_name
  places {
    id
    price
    Place {
      ...place
    }
  }
}
    ${PlaceFragmentDoc}`;