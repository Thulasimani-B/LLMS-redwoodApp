import { db } from 'src/lib/db'

export const books = () => {
  return db.book.findMany()
}

export const book = ({ id }) => {
  return db.book.findUnique({
    where: { id },
  })
}

export const createBook = ({ input }) => {
  return db.book.create({
    data: input,
  })
}

export const updateBook = ({ id, input }) => {
  return db.book.update({
    data: input,
    where: { id },
  })
}

export const updateBookAvailability = ({id,availableStatus}) => {
  return db.book.update({
    data:{availableStatus:availableStatus},
    where: {id: id}
  })
}

export const deleteBook = ({ id }) => {
  return db.book.delete({
    where: { id },
  })
}

export const Book = {
  lendBook: (_obj, { root }) => {
    return db.book.findUnique({ where: { id: root?.id } }).lendBook()
  },
}
