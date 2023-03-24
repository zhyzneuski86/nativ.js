import React from "react";


export const User = () => {

    const deletedUser = () => {
    alert('deleted user?')

    }
    const saveUser = () => {
        alert('save user?')

    }
    return <div>Dimych
        <button onClick={deletedUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}