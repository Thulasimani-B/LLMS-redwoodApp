import LendBook from 'src/components/LendBook/LendBook'

export const QUERY = gql`
  query FindLendBookById($id: Int!) {
    lendBook: lendBook(id: $id) {
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

export const Empty = () => <div>LendBook not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lendBook }) => {
  return <LendBook lendBook={lendBook} />
}
