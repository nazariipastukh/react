// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import styles from './Post.module.css'

export const Post = (props) => {
    const {post, seePost} = props
    return (
        <div className={styles.post}>
            <h2>{post.id} </h2>
            <h2>{post.title}</h2>
            <button onClick={() => seePost(post.id)}>See post</button>
        </div>
    )
}
