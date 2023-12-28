import {navigate, routes} from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReturnBookForm from "../ReturnBookForm/ReturnBookForm"

export const QUERY = gql`
  query FindReturnBookQuery($id: Int!) {
    returnLendBook: lendBook(id: $id) {
      id
      DueDate
      lendAt
      returnAt
      memberId
      bookId
    }
  }
`

const RETURN_BOOK_MUTATION = gql`
  mutation returnBookMutation($id:Int!, $returnAt:DateTime!)
  {
    returnBook(id:$id, returnAt:$returnAt)
    {
      id
    }
  }
`

const UPDATE_BOOK_AVAILABILITY_MUTATION = gql`
  mutation updateBookAvailability($id:Int!, $availableStatus:String!)
  {
    updateBookAvailability(id:$id, availableStatus:$availableStatus)
    {
      id
    }
  }
`


export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ returnLendBook }) => {

  const [updateBookAvailability] = useMutation(UPDATE_BOOK_AVAILABILITY_MUTATION)
  const [returnBook, {loading, error}] = useMutation(RETURN_BOOK_MUTATION,
    {
      onCompleted: () => {

        updateBookAvailability({variables:{id:returnLendBook.bookId, availableStatus:'Available'}})

        toast.success('Book Returned Successfully!')
        navigate(routes.lendBook({id:returnLendBook.id}))
      },
      onError:(error) => {
        toast.error(error.message)
      }
    })

    const onSave = (input) => {
      // console.log(input.id,input)
      returnBook({variables: {id:parseInt(returnLendBook.id), returnAt: input.returnAt}})
    }

  return (<div className="rw-segment">
    <header className="rw-segment-header">
      <h2 className="rw-heading rw-heading-secondary">Return Book {returnLendBook.id}</h2>
    </header>
    <div className="rw-segment-main">
      <ReturnBookForm returnLendBook={returnLendBook}
      onSave={onSave}
      error={error}
      loading={loading} />
    </div>
  </div>)
}
