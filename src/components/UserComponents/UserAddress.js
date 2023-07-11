import styles from "../User.module.css";

export const UserAddress = ({user}) => (
    <div className={styles.info}>
        <h3>Address:</h3>
        <h4>{user.address.street}</h4>
        <h4>{user.address.suite}</h4>
        <h4>{user.address.city}</h4>
    </div>
)