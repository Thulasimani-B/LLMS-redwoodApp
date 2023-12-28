export const standard = defineScenario({
  lendBook: {
    one: {
      data: {
        DueDate: '2023-12-26T11:30:06.301Z',
        lendAt: '2023-12-26T11:30:06.301Z',
        member: {
          create: {
            email: 'String',
            name: 'String',
            profileImg: 'String',
            age: 239927,
          },
        },
        book: {
          create: {
            title: 'String',
            author: 'String',
            yearOfPub: '2023-12-26T11:30:06.301Z',
          },
        },
      },
    },
    two: {
      data: {
        DueDate: '2023-12-26T11:30:06.301Z',
        lendAt: '2023-12-26T11:30:06.301Z',
        member: {
          create: {
            email: 'String',
            name: 'String',
            profileImg: 'String',
            age: 2045509,
          },
        },
        book: {
          create: {
            title: 'String',
            author: 'String',
            yearOfPub: '2023-12-26T11:30:06.301Z',
          },
        },
      },
    },
  },
})
