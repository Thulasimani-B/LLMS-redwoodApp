import Member from 'src/components/Member/Member'

export const QUERY = gql`
  query FindMemberById($id: Int!) {
    member: member(id: $id) {
      id
      email
      name
      profileImg
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Member not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ member }) => {
  return <Member member={member} />
}
