/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { Beer_Fragment } from './beer_';
import { gql } from '@apollo/client';
import { Beer_FragmentDoc } from './beer_';
import * as Apollo from '@apollo/client';
export type BeerinfoQueryVariables = Types.Exact<{
  where: Types.BeerWhereUniqueInput;
}>;


export type BeerinfoQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Beer' }
    & Beer_Fragment
  )> };


export const BeerinfoDocument = gql`
    query beerinfo($where: BeerWhereUniqueInput!) {
  object: beer(where: $where) {
    ...beer_
  }
}
    ${Beer_FragmentDoc}`;

/**
 * __useBeerinfoQuery__
 *
 * To run a query within a React component, call `useBeerinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBeerinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBeerinfoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBeerinfoQuery(baseOptions: Apollo.QueryHookOptions<BeerinfoQuery, BeerinfoQueryVariables>) {
        return Apollo.useQuery<BeerinfoQuery, BeerinfoQueryVariables>(BeerinfoDocument, baseOptions);
      }
export function useBeerinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BeerinfoQuery, BeerinfoQueryVariables>) {
          return Apollo.useLazyQuery<BeerinfoQuery, BeerinfoQueryVariables>(BeerinfoDocument, baseOptions);
        }
export type BeerinfoQueryHookResult = ReturnType<typeof useBeerinfoQuery>;
export type BeerinfoLazyQueryHookResult = ReturnType<typeof useBeerinfoLazyQuery>;
export type BeerinfoQueryResult = Apollo.QueryResult<BeerinfoQuery, BeerinfoQueryVariables>;