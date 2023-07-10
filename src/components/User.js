// в кожного юзера має бути кнопка яка буде показувати пости цього юзера

import styles from './User.module.css'

export const User = (props) => {
    const {user, setUserId} = props

    return (
        <div className={styles.user}>
            <h2>{user.id}, {user.name}</h2>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <button onClick={() => setUserId(user.id)}>See posts</button>
        </div>
    )
}