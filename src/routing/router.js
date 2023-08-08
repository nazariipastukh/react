import {createBrowserRouter} from "react-router-dom";
import {Lesson9} from "../components/Lesson9";
import {MainLayout} from "../layouts/MainLayout";
import {routes} from "./routes";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                path: routes.lesson9,
                element:<Lesson9/>
            }
        ]
    }
    ]
)