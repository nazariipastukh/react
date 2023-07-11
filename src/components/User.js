import styles from './User.module.css'

export const User = ({user, setUserId}) => (
    <div className={styles.user}>
        <h2>{user.id}, {user.name}</h2>
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        <button onClick={() => setUserId(user.id)}>See posts</button>
    </div>
)