import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

export const UserView = () => {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className="userview">
            <h2>List Of Users</h2>
            {user.loading && <div>Loading</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    )
}