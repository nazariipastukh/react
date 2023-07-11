// property drill
//
// Структура:
// Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
// В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs

import './App.css';
import {Users} from './components/Users'
import {useState, useEffect} from "react";

export const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div className='main'>
            {users.map(user => (
                <Users key={user.id} user={user}/>
            ))}
        </div>
    );
}
