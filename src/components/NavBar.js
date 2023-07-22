import styles from './ComponentStyles/ComponentStyles.module.css'
import {Routes} from '../routing/routes';
import {Link} from "react-router-dom";

export const NavBar = () => {
    const links = [
        {
            label: 'Main',
            route: Routes.MAIN
        },
        {
            label: 'ToDo',
            route: Routes.TODOS
        },
        {
            label: 'Albums',
            route: Routes.ALBUMS
        },
        {
            label: 'Comments',
            route: Routes.COMMENTS
        }
    ]

    return (
        <div className={styles.navBar}>
            {links.map(link => {
                return (
                    <Link to={link.route}>
                        {link.label}
                    </Link>
                )
            })}
        </div>
    )
}