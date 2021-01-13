/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { BeerFragment } from './beer';
import { gql } from '@apollo/client';
import { BeerFragmentDoc } from './beer';
import * as Apollo from '@apollo/client';
export type BeersQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.BeerWhereInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type BeersQuery = { __typename?: 'Query', beersConnection: { __typename?: 'BeerConnection', aggregate: { __typename?: 'AggregateBeer', count: number }, edges: Array<Types.Maybe<{ __typename?: 'BeerEdge', node: (
        { __typename?: 'Beer' }
        & BeerFragment
      ) }>> } };


export const BeersDocument = gql`
    query beers($where: BeerWhereInput, $first: Int = 3, $skip: Int) {
  beersConnection(where: $where, first: $first, skip: $skip) {
    aggregate {
      count
    }
    edges {
      node {
        ...beer
      }
    }
  }
}
    ${BeerFragmentDoc}`;

/**
 * __useBeersQuery__
 *
 * To run a query within a React component, call `useBeersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBeersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBeersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useBeersQuery(baseOptions?: Apollo.QueryHookOptions<BeersQuery, BeersQueryVariables>) {
        return Apollo.useQuery<BeersQuery, BeersQueryVariables>(BeersDocument, baseOptions);
      }
export function useBeersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BeersQuery, BeersQueryVariables>) {
          return Apollo.useLazyQuery<BeersQuery, BeersQueryVariables>(BeersDocument, baseOptions);
        }
export type BeersQueryHookResult = ReturnType<typeof useBeersQuery>;
export type BeersLazyQueryHookResult = ReturnType<typeof useBeersLazyQuery>;
export type BeersQueryResult = Apollo.QueryResult<BeersQuery, BeersQueryVariables>;