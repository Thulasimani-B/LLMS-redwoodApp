import { db } from 'src/lib/db'

export const lendBooks = () => {
  return db.lendBook.findMany()
}

export const lendBook = ({ id }) => {
  return db.lendBook.findUnique({
    where: { id },
  })
}

export const createLendBook = ({ input }) => {
  return db.lendBook.create({
    data: input,
  })
}

export const updateLendBook = ({ id, input }) => {
  return db.lendBook.update({
    data: input,
    where: { id },
  })
}

export const deleteLendBook = ({ id }) => {
  return db.lendBook.delete({
    where: { id },
  })
}

export const returnBook = ({id,returnAt}) => {
  return db.lendBook.update({
    data: {returnAt:returnAt},
    where: {id}
  })
}

export const LendBook = {
  member: (_obj, { root }) => {
    return db.lendBook.findUnique({ where: { id: root?.id } }).member()
  },
  book: (_obj, { root }) => {
    return db.lendBook.findUnique({ where: { id: root?.id } }).book()
  },
}
