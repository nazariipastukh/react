import {HeaderComponent} from "../components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './Layout.module.css'

export const MainLayout = () => {
    const {themeCheck} = useSelector(state => state.theme)

    return (
        <div className={themeCheck ? styles.dark : styles.light}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};