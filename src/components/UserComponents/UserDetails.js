import styles from "../User.module.css";

export const UserDetails = ({user}) => (
    <div className={styles.info}>
        <h3>Information:</h3>
        <h4>{user.id}, {user.name} - {user.username}</h4>
        <h4>{user.email} - {user.phone}</h4>
        <h4>{user.website}</h4>
    </div>
)