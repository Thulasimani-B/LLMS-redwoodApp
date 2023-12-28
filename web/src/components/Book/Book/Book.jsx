import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBookMutation($id: Int!) {
    deleteBook(id: $id) {
      id
    }
  }
`

const Book = ({ book }) => {
  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book deleted')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete book ' + id + '?')) {
      deleteBook({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Book {book.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{book.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{book.title}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{book.author}</td>
            </tr>
            <tr>
              <th>Year of pub</th>
              <td>{timeTag(book.yearOfPub)}</td>
            </tr>
            <tr>
              <th>Available status</th>
              <td>{book.availableStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBook({ id: book.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(book.id)}
        >
          Delete
        </button>

        {book.availableStatus == 'Available' ?
        (<Link to={routes.newLendBook()} className='rw-button rw-button-green'>
          Lend Book
        </Link>) : (<></>)}

      </nav>
    </>
  )
}

export default Book
