import styles from "../User.module.css";

export const UserDetails = ({user: {id, name, username, email, phone, website}}) => (
    <div className={styles.info}>
        <h3>Information:</h3>
        <h4>{id}, {name} - {username}</h4>
        <h4>{email} - {phone}</h4>
        <h4>{website}</h4>
    </div>
)