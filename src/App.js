// Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень
// 1.
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http://jsonplaceholder.typicode.com/users
// 2.
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments
// 3.
// Реалізувати створення, видалення та оновлення машин
// http://owu.linkpc.net/carsAPI/v1/doc

import './App.css';
import {LoginPage} from "./components/LoginPage";

function App() {
    return (
        <div className="App">
            <LoginPage/>
        </div>
    );
}

export default App;
