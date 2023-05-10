import {
    UserType,
    makeHairStyle,
    UserWithLaptopType,
    moveUser,
    change,
    changeNameLaptop,
    UserWithBookType,
    moveUserToOtherHouse,
    addNewBooksToUser,
    updateBook,
    removeBook,
    withCompaniesType,
    updateCompanyTitle, updateCompanyTitle2, CompanyType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk'

        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    const changeNameUser = change(user, 'Vadim')
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
    expect(changeNameUser.name).toBe('Vadim')
    expect(user).not.toBe(changeNameUser)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')
    const changedNameLaptop = changeNameLaptop(user, 'Asus')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
    expect(changedNameLaptop.laptop.title).toBe('Asus')
})
test('add books and change house', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['ccs', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 14)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(14)

})
test('add books to user', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['ccs', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
})
test('update js to ts to user', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['ccs', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['ccs', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})
test('update company', () => {
    let user: UserWithLaptopType & withCompaniesType = {
        name: 'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'DDDD'}, {id: 2, title: 'It-incubator'}]
    }


    const userCopy = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType & withCompaniesType


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')
})
test('new update company', () => {
    let companies = {
        'Dimon': [{id: 1, title: 'DDDD'}, {id: 2, title: 'It-incubator'}],
        'Vad': [{id: 2, title: 'It-incubator'}]
    }


    const copy:{ [key: string]: Array<CompanyType> } = updateCompanyTitle2(companies,
        'Dimon',
        1,
        'Epam')


    expect(copy['Dimon']).not.toBe(companies['Dimon'])
    expect(copy['Vad']).toBe(companies['Vad'])
    expect(copy['Dimon'][0]).toBe('Epam')

})