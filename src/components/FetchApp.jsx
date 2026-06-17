import { useFetch } from "../hooks/useFetch"


export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error } = useFetch(url)

    return (
        <>
            <h2>Lista de usuarios: </h2>

            {isLoading
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha osurrido un error: {error}</h4>
                    :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    return (
                                        <tr key ={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }


        </>
    )
}
