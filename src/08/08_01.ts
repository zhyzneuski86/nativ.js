export const userObj = {
    '0': 'Dima',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}
type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dima'},
    '3314': {id: 3314, name: 'Natasha'},
    '24': {id: 24, name: 'Valera'},
    '215': {id: 215, name: 'Katya'},

}
//users[1]
const user = {id: 17634876, name: 'Igor'}
users[user.id]=user // добавили user
delete users[user.id]
users[user.id].name='Vitya' // перезапись имени

export const usersArray = [
    {id: 101, name: 'Dima'},
    {id: 3314, name: 'Natasha'},
    {id: 24, name: 'Valera'},
    {id: 215, name: 'Katya'},

]
usersArray.find(u => u.id===24)
// const usersCopy = [...usersArray.filter(), user]
// const usersArray = usersArray.filter(u => u.id !== user.id)