import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import {
  BeerFragment,
  BeersDocument,
  BeersQuery,
  BeersQueryVariables,
  useBeersQuery,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import BeersPageView from './View'

const getVariables = (query: ParsedUrlQuery): BeersQueryVariables => {
  const first =
    query.first && typeof query.first === 'string'
      ? parseInt(query.first)
      : undefined

  return {
    first,
  }
}

const BeersPage: Page = () => {
  const router = useRouter()

  const variables = getVariables(router.query)

  const response = useBeersQuery({
    variables,
  })

  // console.log('response', response.data);

  // const total = response.data?.beersConnection.aggregate.count ?? 0;
  // const first = variables.first ?? 0;

  // console.log('total', total);
  // console.log('first', first);

  const beers: BeerFragment[] = []

  response.data?.beersConnection.edges.map((n) => {
    if (n?.node) {
      beers.push(n.node)
    }
  })

  return (
    <>
      <NextSeo title="Beers" />

      <BeersPageView objects={beers} />
    </>
  )
}

BeersPage.getInitialProps = async ({ apolloClient, query }) => {
  const variables = getVariables(query)

  const result = await apolloClient.query<BeersQuery, BeersQueryVariables>({
    query: BeersDocument,
    variables,
  })

  return {
    statusCode: !result.data.beersConnection.edges.length ? 404 : undefined,
  }
}

export default BeersPage
