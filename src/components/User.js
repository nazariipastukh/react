import styles from './User.module.css'
import {Company} from './UserComponents/Company'
import {UserAddress} from './UserComponents/UserAddress'
import {UserDetails} from './UserComponents/UserDetails'

export const User = ({user}) => (
    <div className={styles.userCard}>
        <UserDetails key={user.id} user={user}/>
        <UserAddress key={user.id} user={user}/>
        <Company key={user.id} user={user}/>
    </div>
)