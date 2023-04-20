export function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number,
    address: { title: string}
}

test('reference type test', () => {
    var user: UserType = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)


    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    var users = [
        {
            name: 'Dima',
            age: 32
        },
        {
            name: 'Ivan',
            age: 33
        }
    ]

    var admins = users
    admins.push({name: 'Bandit', age: 10})
    expect(users[2]).toEqual({name: 'Bandit', age: 10})
})
test('reference  type test', () => {
    let user: UserType = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Bora-Bora'

    expect(user.address.title).toBe('Bora-Bora')
})

test('reference  type array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Dima',
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: 'Boba', age: 45, address: address}]

  const administraters = [user, user2]

    administraters[0].name = 'Sasha'

    expect(users[0].name).toBe('Sasha')
    expect(user.name).toBe('Sasha')
})
