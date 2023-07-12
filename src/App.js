// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться
// state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.

import './App.css'
import {UsersComponent} from "./components/UsersComponent";
import {Posts} from "./components/Posts";
import {useState} from "react";

export const App = () => {
    const [user, setUser] = useState(null)

    return (
        <div className='main'>
            <UsersComponent setUser={setUser}/>
            {user && <Posts user={user}/>}
        </div>
    )
}