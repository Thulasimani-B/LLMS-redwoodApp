export const schema = gql`
  type LendBook {
    id: Int!
    DueDate: DateTime!
    lendAt: DateTime!
    returnAt: DateTime
    member: Member!
    memberId: Int!
    book: Book!
    bookId: Int!
  }

  type Query {
    lendBooks: [LendBook!]! @requireAuth
    lendBook(id: Int!): LendBook @requireAuth
  }

  input CreateLendBookInput {
    DueDate: DateTime!
    lendAt: DateTime!
    returnAt: DateTime
    memberId: Int!
    bookId: Int!
  }

  input UpdateLendBookInput {
    DueDate: DateTime
    lendAt: DateTime
    returnAt: DateTime
    memberId: Int
    bookId: Int
  }

  type Mutation {
    createLendBook(input: CreateLendBookInput!): LendBook! @requireAuth
    updateLendBook(id: Int!, input: UpdateLendBookInput!): LendBook!
      @requireAuth
    deleteLendBook(id: Int!): LendBook! @requireAuth
    returnBook(id:Int!, returnAt:DateTime!) : LendBook! @requireAuth
  }
`
