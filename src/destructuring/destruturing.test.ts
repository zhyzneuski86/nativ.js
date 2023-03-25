type LessonsType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType
beforeEach(() => {
    props = {
        name: "Ivan",
        age: 33,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test("", () => {
    // let props = {
    //     name: "Ivan",
    //     age: 33,
    //     lessons: [{title: "1"}, {title: "2"}],
    //     address: {
    //         street: {
    //             title: "Nezavisimosti street"
    //         }
    //     }
    // }
    const {age, lessons} = props
    const title = props.address.street.title //or const {title} = props.address.street


    expect(age).toBe(33)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Nezavisimosti street")
})

// eslint-disable-next-line jest/no-identical-title
test("", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]


    const [ls1, ls2] = props.lessons // тоже что и выше

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})