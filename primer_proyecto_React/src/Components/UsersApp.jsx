import { useState } from "react"
import { UserList } from "./UserList"
export const UsersApp = () => {
    const [endPoint, setEndPoint] = useState('users')
    const handleFetch = () => {
        setEndPoint('comments')
    }
    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endPoint={endPoint} ></UserList>
            <button onClick={handleFetch}>Usuarios API</button>

        </>
    )
}
