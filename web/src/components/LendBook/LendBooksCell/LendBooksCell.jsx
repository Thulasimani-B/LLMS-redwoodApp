import { Link, routes } from '@redwoodjs/router'

import LendBooks from 'src/components/LendBook/LendBooks'

export const QUERY = gql`
  query FindLendBooks {
    lendBooks {
      id
      DueDate
      lendAt
      returnAt
      memberId
      bookId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No lendBooks yet. '}
      <Link to={routes.newLendBook()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lendBooks }) => {
  return <LendBooks lendBooks={lendBooks} />
}
