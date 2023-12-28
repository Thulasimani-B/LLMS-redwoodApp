import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LendBook/LendBooksCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_LEND_BOOK_MUTATION = gql`
  mutation DeleteLendBookMutation($id: Int!) {
    deleteLendBook(id: $id) {
      id
    }
  }
`

const LendBooksList = ({ lendBooks }) => {
  const [deleteLendBook] = useMutation(DELETE_LEND_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('LendBook deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete lendBook ' + id + '?')) {
      deleteLendBook({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Due date</th>
            <th>Lend at</th>
            <th>Return at</th>
            <th>Member id</th>
            <th>Book id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {lendBooks.map((lendBook) => (
            <tr key={lendBook.id}>
              <td>{truncate(lendBook.id)}</td>
              <td>{timeTag(lendBook.DueDate)}</td>
              <td>{timeTag(lendBook.lendAt)}</td>
              <td>{timeTag(lendBook.returnAt)}</td>
              <td>{truncate(lendBook.memberId)}</td>
              <td>{truncate(lendBook.bookId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.lendBook({ id: lendBook.id })}
                    title={'Show lendBook ' + lendBook.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLendBook({ id: lendBook.id })}
                    title={'Edit lendBook ' + lendBook.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete lendBook ' + lendBook.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(lendBook.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LendBooksList
