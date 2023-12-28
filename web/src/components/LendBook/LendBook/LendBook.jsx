import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_LEND_BOOK_MUTATION = gql`
  mutation DeleteLendBookMutation($id: Int!) {
    deleteLendBook(id: $id) {
      id
    }
  }
`

const LendBook = ({ lendBook }) => {
  const [deleteLendBook] = useMutation(DELETE_LEND_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('LendBook deleted')
      navigate(routes.lendBooks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete lendBook ' + id + '?')) {
      deleteLendBook({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LendBook {lendBook.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{lendBook.id}</td>
            </tr>
            <tr>
              <th>Due date</th>
              <td>{timeTag(lendBook.DueDate)}</td>
            </tr>
            <tr>
              <th>Lend at</th>
              <td>{timeTag(lendBook.lendAt)}</td>
            </tr>
            <tr>
              <th>Return at</th>
              <td>{timeTag(lendBook.returnAt)}</td>
            </tr>
            <tr>
              <th>Member id</th>
              <td><Link to={routes.member({id: lendBook.memberId})}>{lendBook.memberId}</Link></td>
            </tr>
            <tr>
              <th>Book id</th>
              <td><Link to={routes.book({id:lendBook.bookId})}>{lendBook.bookId}</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLendBook({ id: lendBook.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(lendBook.id)}
        >
          Delete
        </button>

        {lendBook.returnAt==null ?
        (
          <Link to={routes.returnBook({id:lendBook.id})} className='rw-button rw-button-red'>
          Return Book
        </Link>
        ) :
        (<></>)
        }


      </nav>
    </>
  )
}

export default LendBook
