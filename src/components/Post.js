import styles from './User.module.css'

export const Post = ({post, userName}) => (
    <div className={styles.user}>
        <h2>{post.id}, {userName}</h2>
        <h3>{post.title}</h3>
        <h3>{post.body}</h3>
    </div>
)
