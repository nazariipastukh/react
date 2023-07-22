import {createBrowserRouter, Outlet} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {Routes} from './routes'
import {Todos} from "../components/todos/Todos";
import {Albums} from "../components/albums/Albums";
import {Comments} from "../components/comments/Comments";

const AppLayout = () => (
    <>
        <NavBar/>
        <Outlet/>
    </>
)

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: Routes.MAIN,
                element:<h1>mainPage</h1>
            },
            {
                path: Routes.TODOS,
                element: <Todos/>
            },
            {
                path: Routes.ALBUMS,
                element: <Albums/>
            },
            {
                path: Routes.COMMENTS,
                element: <Comments/>
            }
        ]
    }
]);