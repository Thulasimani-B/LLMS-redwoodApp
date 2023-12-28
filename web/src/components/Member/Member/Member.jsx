import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: Int!) {
    deleteMember(id: $id) {
      id
    }
  }
`

const Member = ({ member }) => {
  const [deleteMember] = useMutation(DELETE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member deleted')
      navigate(routes.members())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete member ' + id + '?')) {
      deleteMember({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Member {member.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{member.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{member.email}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{member.name}</td>
            </tr>
            <tr>
              <th>Profile img</th>
              <td><img src={member.profileImg} style={{maxWidth:'50px'}} /></td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{member.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMember({ id: member.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(member.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Member
