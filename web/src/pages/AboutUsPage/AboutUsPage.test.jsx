import { render } from '@redwoodjs/testing/web'

import AboutUsPage from './AboutUsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutUsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutUsPage />)
    }).not.toThrow()
  })
})
