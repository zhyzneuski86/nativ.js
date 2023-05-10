
export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}
export type LaptopType ={
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBookType = UserType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };

export type withCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
       ...u, hair: u.hair/power
    }
    //copy.hair = u.hair / power
    return copy
}
export function change(u:UserType, changeName: string) {
    const copy = {
        ...u, name: changeName
}
return copy
}
export function moveUser(u: UserWithLaptopType, city: string) {
    return {
       ...u, address: {...u.address, city: city}
    }
}
export function changeNameLaptop(u:UserWithLaptopType, newTitle: string){
    return {
        ...u, laptop: {...u.laptop, title: newTitle}
    }
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, number: number) {
    return {
        ...u, address: {...u.address, house: number}
    }
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, newBook: string) {
    return {
        ...u, books: [...u.books, newBook]
    }
}
export const updateBook=(u: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) => (
    {...u, books: u.books.map(b=>b===oldBook ? newBook : b)}
)
export const removeBook=(u: UserWithLaptopType & UserWithBookType,   bookForDelete: string) => (
    {...u, books: u.books.filter(b=>b !== bookForDelete)}
)
export const updateCompanyTitle=(u: withCompaniesType, companyId: number, newTitle: string) => (
    {...u, companies: u.companies.map( c => c.id === companyId ? {...c, title: newTitle} : c)}
)
export const updateCompanyTitle2=(companies: { [key: string]: Array<CompanyType> },
                                  userName: string,
                                  companyId: number,
                                  newTitle: string):{[key: string]: Array<CompanyType>}=> (
    {...companies,
        companies: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle}:c)
    }
)