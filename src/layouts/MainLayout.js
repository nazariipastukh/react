import {HeaderComponent} from "../components";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};