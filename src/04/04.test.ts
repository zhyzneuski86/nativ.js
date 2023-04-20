import {CoursesType} from "./04";

test ("should take courses chipper 160", ()=>{
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ]
    // const chipPredicate = (courses:CoursesType)=> courses.price < 160

    const chipCourses = courses.filter((courses:CoursesType)=>
        courses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("REACT")


})

test("get only completed task", ()=>{
    const tasks =[
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Sold", isDone: false},
        {id: 4, title: "Suger", isDone: true},
    ]
    const completedTasks = tasks.filter(task=>task.isDone)


    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})
test("get only uncompleted task", ()=>{
    const tasks =[
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Sold", isDone: false},
        {id: 4, title: "Suger", isDone: true},
    ]
    const uncompletedTasks = tasks.filter(task=>!task.isDone)


    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})