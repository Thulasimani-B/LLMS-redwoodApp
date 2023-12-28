import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LendBookForm from 'src/components/LendBook/LendBookForm'

const CREATE_LEND_BOOK_MUTATION = gql`
  mutation CreateLendBookMutation($input: CreateLendBookInput!) {
    createLendBook(input: $input) {
      id,
      bookId
    }
  }
`

const UPDATE_BOOK_AVAILABILITY_MUTATION = gql`
  mutation UpdateBookAvailabilityMutation($id:Int!, $availableStatus:String!){
    updateBookAvailability(id:$id, availableStatus:$availableStatus)
    {
      id
      availableStatus
    }
  }
`

const NewLendBook = () => {
  const [updateBookAvailability] = useMutation(UPDATE_BOOK_AVAILABILITY_MUTATION)
  const [createLendBook, { loading, error }] = useMutation(
    CREATE_LEND_BOOK_MUTATION,
    {
      onCompleted: (data) => {
        toast.success('LendBook created')
        console.log(data.createLendBook.bookId)
        updateBookAvailability({variables:{id:data.createLendBook.bookId, availableStatus:'Not Available'}})
        navigate(routes.lendBooks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createLendBook({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LendBook</h2>
      </header>
      <div className="rw-segment-main">
        <LendBookForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLendBook
