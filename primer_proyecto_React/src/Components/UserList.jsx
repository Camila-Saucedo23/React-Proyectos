import { userFetchData } from './Hooks/userFetchData';

export const UserList = ({endPoint}) => {

    const { data, isLoading } = userFetchData(endPoint)

    return (
        <>
            <ul>
                {isLoading
                    ? <p>Cargando...</p>
                    : endPoint == 'users'
                        ? data.map(item => <li key={item.id}>{item.name}</li>)
                        : data.map(item => <li key={item.id}>{item.body}</li>)
                       }
            </ul>
        </>

    )
}
