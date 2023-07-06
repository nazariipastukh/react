// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import styles from './Post.module.css'

const Post = (props) => {
    const {post, showPost} = props;

    return (
        <div className={styles.post}>
            <h3>id: {post.id}</h3>
            <h2>{post.title}</h2>
            <button onClick={() => showPost(post.id)}>Show Post</button>
        </div>
    );
};

export default Post