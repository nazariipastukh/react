import styles from './User.module.css'

const Post=(props)=>{
    const {post}=props
    const {id,userId,title,body}=post

    return(
        <div className={styles.user}>
            <h2>{id} - {userId}</h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
        </div>
    )
}

export default Post