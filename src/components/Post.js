import styles from './User.module.css'

export const Post = (props) => {
    const {post} = props

    return (
        <div className={styles.user}>
            <h2>{post.id}, {post.userId}</h2>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
        </div>
    )
}