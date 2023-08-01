import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={'posts'}> Posts </NavLink>
            <NavLink to={'comments'}> Comments </NavLink>
            <NavLink to={'cars'}> Cars </NavLink>
        </div>
    )
}