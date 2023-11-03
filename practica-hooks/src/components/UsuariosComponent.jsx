import { useFecht } from "../hooks/useFecht"

export const UsuariosComponent = () => {

    const { data, isLoading, errors } = useFecht('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h1>Lista de usuarios</h1>
            {isLoading ? <h4>Cargando...</h4>
                : errors
                    ? <p>Ha ocurrido un error: {errors} </p>
                    : <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return(
                                    <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )                            
                            })}
                        </tbody>
                    </table>}
        </>
    )
}

