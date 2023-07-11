import styles from "../User.module.css";

export const Company = ({user}) => (
    <div className={styles.info}>
        <h3>Company:</h3>
        <h4>{user.company.name}</h4>
        <h4>{user.company.catchPhrase}</h4>
        <h4>{user.company.bs}</h4>
    </div>
)