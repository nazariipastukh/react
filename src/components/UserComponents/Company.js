import styles from "../User.module.css";

export const Company = ({user: {company: {name, catchPhrase, bs}}}) => (
    <div className={styles.info}>
        <h3>Company:</h3>
        <h4>{name}</h4>
        <h4>{catchPhrase}</h4>
        <h4>{bs}</h4>
    </div>
)