export const schema = gql`
  type Member {
    id: Int!
    email: String!
    name: String!
    profileImg: String!
    age: Int!
    lendBook: [LendBook]!
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: Int!): Member @requireAuth
  }

  input CreateMemberInput {
    email: String!
    name: String!
    profileImg: String!
    age: Int!
  }

  input UpdateMemberInput {
    email: String
    name: String
    profileImg: String
    age: Int
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: Int!): Member! @requireAuth
  }
`
