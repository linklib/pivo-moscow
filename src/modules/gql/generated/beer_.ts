/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type Beer_Fragment = { __typename?: 'Beer', id: string, name?: Types.Maybe<string>, image?: Types.Maybe<string>, url_name?: Types.Maybe<string>, uri?: Types.Maybe<string>, description?: Types.Maybe<string> };

export const Beer_FragmentDoc = gql`
    fragment beer_ on Beer {
  id
  name
  image
  url_name
  uri
  description
}
    `;