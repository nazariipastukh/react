import {Outlet} from "react-router-dom";
import {Header} from "../classComponents";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}