import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LendBookForm from 'src/components/LendBook/LendBookForm'

export const QUERY = gql`
  query EditLendBookById($id: Int!) {
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
const UPDATE_LEND_BOOK_MUTATION = gql`
  mutation UpdateLendBookMutation($id: Int!, $input: UpdateLendBookInput!) {
    updateLendBook(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lendBook }) => {
  const [updateLendBook, { loading, error }] = useMutation(
    UPDATE_LEND_BOOK_MUTATION,
    {
      onCompleted: () => {
        toast.success('LendBook updated')
        navigate(routes.lendBooks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateLendBook({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit LendBook {lendBook?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LendBookForm
          lendBook={lendBook}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
