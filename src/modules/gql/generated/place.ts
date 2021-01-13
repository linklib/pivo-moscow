/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type PlaceFragment = { __typename?: 'Place', id: string, name: string, uri?: Types.Maybe<string> };

export const PlaceFragmentDoc = gql`
    fragment place on Place {
  id
  name
  uri
}
    `;