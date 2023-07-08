// в кожного юзера має бути кнопка яка буде показувати пости цього юзера

import styles from './User.module.css'

const User = (props)=>{
    const {user,setUserId}=props
    const {id,name,username,email}=user

    return(
        <div className={styles.user}>
            <h2>{id}. {name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
            <button onClick={()=>setUserId(id)}>Posts</button>
        </div>
    )
}

export default User