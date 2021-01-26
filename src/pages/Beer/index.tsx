import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Page } from 'src/pages/_App/interfaces'
import { NextSeo } from 'next-seo'

import { ParsedUrlQuery } from 'querystring'

import {
  useBeerinfoQuery,
  BeerinfoQuery,
  BeerinfoDocument,
  BeerinfoQueryVariables,  
} from 'src/modules/gql/generated'

const getVariables = (query: ParsedUrlQuery): BeerinfoQueryVariables => {
  const id = query.id
  console.log('beers', query.id)

  return {
    where: {
      id: id && typeof id === 'string' ? id : '',
    },
  }
}

const BeerPage: Page = () => {
  const router = useRouter()

  const variables = getVariables(router.query)

  const response = useBeerinfoQuery({
    variables,
  })

  const name = response.data?.object?.name 
  const image = response.data?.object?.image

  console.log('Data', response.data?.object)

  return (
    <>
      <NextSeo title={name} />
      <h1>{name}</h1>
      <img
        src={'https://pivkarta.ru/images/resized/thumb/' + image}
        alt={name}
      />
    </>
  )
}

BeerPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<BeerinfoQuery>({
    query: BeerinfoDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: getVariables(context.query),

   

  })
  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
} 
    
    export default BeerPage
