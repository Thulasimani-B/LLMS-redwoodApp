export const schema = gql`
  type Book {
    id: Int!
    title: String!
    author: String!
    yearOfPub: DateTime!
    availableStatus: String
    lendBook: [LendBook]!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    author: String!
    yearOfPub: DateTime!
    availableStatus: String
  }

  input UpdateBookInput {
    title: String
    author: String
    yearOfPub: DateTime
    availableStatus: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
    updateBookAvailability(id:Int!, availableStatus:String!) : Book! @requireAuth
  }
`
