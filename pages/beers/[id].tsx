import { useRouter } from 'next/dist/client/router'
import { Page } from 'src/pages/_App/interfaces'

const BeerPage: Page = () => {
  const router = useRouter()

  return (
    <>
      {router.query.id} ## {router.query.name}
    </>
  )
}

export default BeerPage
