// вивести всіх юзерів з плайсхолдеру

import {User} from './User'
import {useEffect, useState} from "react";

export const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} setUserId={setUserId}/>
            ))}
        </div>
    )
}

