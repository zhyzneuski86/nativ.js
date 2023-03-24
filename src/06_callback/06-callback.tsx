import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deletedUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)

    }

    const onAgeChange =(event: ChangeEvent<HTMLInputElement>)=>{
        console.log('age changed:' + event.currentTarget.value)
    }

    // const saveUser = () => {
    //     alert('save user?')
    // }
    return <div>Dimych
        <input type="number" onChange={onAgeChange}/>
        <button name={"delete"} onClick={deletedUser}>delete +</button>
        <button name={"save"} onClick={deletedUser}>save +</button>
    </div>
}