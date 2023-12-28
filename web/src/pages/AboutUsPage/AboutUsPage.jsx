import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutUsPage = () => {
  return (
    <>
      <Metadata title="AboutUs" description="AboutUs page" />

      <h1>AboutUsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutUsPage/AboutUsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>aboutUs</code>, link to me with `
        <Link to={routes.aboutUs()}>AboutUs</Link>`
      </p>
    </>
  )
}

export default AboutUsPage
