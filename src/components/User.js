import styles from './User.module.css'

export const User = ({user, setUser}) => {
    const {id, name, username, email} = user

    return (
        <div className={styles.user}>
            <h2>{id}, {name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <button onClick={() => setUser({name, userId: id})}> See posts</button>
        </div>
    )
}