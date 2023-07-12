import styles from "../User.module.css";

export const UserAddress = ({user: {address: {street, suite, city}}}) => (
    <div className={styles.info}>
        <h3>Address:</h3>
        <h4>{street}</h4>
        <h4>{suite}</h4>
        <h4>{city}</h4>
    </div>
)