import styles from '../ComponentStyles/ComponentStyles.module.css'

export const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div className={styles.box}>
            <h4>Post: {postId}. Comment: {id}</h4>
            <h3>{email}</h3>
            <h2>{name}</h2>
            <h2>{body}</h2>
        </div>
    )
}