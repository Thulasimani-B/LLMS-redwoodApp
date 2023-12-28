import {
  lendBooks,
  lendBook,
  createLendBook,
  updateLendBook,
  deleteLendBook,
} from './lendBooks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lendBooks', () => {
  scenario('returns all lendBooks', async (scenario) => {
    const result = await lendBooks()

    expect(result.length).toEqual(Object.keys(scenario.lendBook).length)
  })

  scenario('returns a single lendBook', async (scenario) => {
    const result = await lendBook({ id: scenario.lendBook.one.id })

    expect(result).toEqual(scenario.lendBook.one)
  })

  scenario('creates a lendBook', async (scenario) => {
    const result = await createLendBook({
      input: {
        DueDate: '2023-12-26T11:30:06.288Z',
        lendAt: '2023-12-26T11:30:06.288Z',
        memberId: scenario.lendBook.two.memberId,
        bookId: scenario.lendBook.two.bookId,
      },
    })

    expect(result.DueDate).toEqual(new Date('2023-12-26T11:30:06.288Z'))
    expect(result.lendAt).toEqual(new Date('2023-12-26T11:30:06.288Z'))
    expect(result.memberId).toEqual(scenario.lendBook.two.memberId)
    expect(result.bookId).toEqual(scenario.lendBook.two.bookId)
  })

  scenario('updates a lendBook', async (scenario) => {
    const original = await lendBook({
      id: scenario.lendBook.one.id,
    })
    const result = await updateLendBook({
      id: original.id,
      input: { DueDate: '2023-12-27T11:30:06.288Z' },
    })

    expect(result.DueDate).toEqual(new Date('2023-12-27T11:30:06.288Z'))
  })

  scenario('deletes a lendBook', async (scenario) => {
    const original = await deleteLendBook({
      id: scenario.lendBook.one.id,
    })
    const result = await lendBook({ id: original.id })

    expect(result).toEqual(null)
  })
})
