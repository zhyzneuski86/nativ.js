import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<any>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}

}
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man}= props / перенесли в ManComponent
    // const {name}=props.man/ перенесли выше


    return <div>
        <h1>{ title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}