import { NextSeo } from 'next-seo'

import { Page } from '../_App/interfaces'

export const About: Page = () => {
  return (
    <>
      <NextSeo title="About" description="About description" />

      <div>About Page</div>
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
About.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default About
