import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Page } from 'src/pages/_App/interfaces'
import { NextSeo } from 'next-seo'

import { ParsedUrlQuery } from 'querystring'

import {
  
  useBeerinfoQuery,
  //BeerinfoQuery,
  //BeerinfoDocument,
  BeerinfoQueryVariables
  //BeerFragment,
  //BeersDocument,
  //BeersQuery,
  //BeersQueryVariables,
  //useBeersQuery,
} from 'src/modules/gql/generated'


const getVariables = (query: ParsedUrlQuery): BeerinfoQueryVariables => {
      
     const id = query.id
     console.log('beers', query.id);

  return {      
    where: {
      id: id && typeof id === 'string' ?  id : '',
    },
  }
}


const BeerPage: Page = () => {
  const router = useRouter()

  const variables = getVariables(router.query)

  const response = useBeerinfoQuery({
    variables,
  }) 
  
  
  
    const name: any = response.data?.object.name || ''
    const image: any = response.data?.object.image
 
  console.log('Data', response.data?.object);
  
  return (
    <>    
     
     
         
       
           <NextSeo title={name} />
           <h1>{name}</h1>
    <img src={"https://pivkarta.ru/images/resized/thumb/" + image} alt={name}/>
           
         
        

   
   </>
  )

  
}

/*
BeerPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<BeerinfoQuery>({
    query: BeerinfoDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     *//*
    variables: {
      ...getQueryParams(context.query),
    },
  })
  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
}*/

/*
const getVariables = (query: ParsedUrlQuery): BeersQueryVariables => {
  const first =
    query.first && typeof query.first === 'string'
      ? parseInt(query.first)
      : undefined
    
     const id = query.id
     console.log('beers', query.id);

  return {
    first,    
    where: {
      id: id && typeof id === 'string' ?  id : '',
    },
  }
}


const BeerPage: Page = () => {
  const router = useRouter()

  const variables = getVariables(router.query)

  const response = useBeersQuery({
    variables,
  }) 

  const beers: BeerFragment[] = []

  response.data?.beersConnection.edges.map((n) => {
    if (n?.node) {
      beers.push(n.node)
    }
  })

  //console.log('beers', beers[0]);
  //console.log('variables', variables);
  
  //if(beers[0]) {
    //const beername :any = beers[0].name
    //const beerimage = beers[0].image
  //}

  

  return (
    <>    
     
      {beers.map((n) => (

        <>
           <NextSeo title={n.name} />
           <h1>{n.name}</h1>
           <img src={"https://pivkarta.ru/images/resized/thumb/" + n.image} alt={n.name}/>
        </>
        ))}

    {/*
    <h1>{beers[0].name}</h1>
    <img src={"https://pivkarta.ru/images/resized/thumb/" + beers[0].image} alt={beers[0].name}/>*//* }
   </>
  )
}
*/
export default BeerPage
