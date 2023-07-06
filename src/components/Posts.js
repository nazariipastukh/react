// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import styles from './Post.module.css'
import Post from './Post'
import {useEffect} from "react";
import {useState} from "react";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    const showPost = (id) => {
        const selected = posts.find((post) => post.id === id);
        setSelectedPost(selected);
    };

    return (
        <div>
            {selectedPost && (
                <div className={styles.post}>
                    <h2>Post {selectedPost.id}. User:{selectedPost.userId}. </h2>
                    <h3>{selectedPost.title}</h3>
                    <p>{selectedPost.body}</p>
                </div>
            )}
            {posts.map((post) => (
                <Post key={post.id} post={post} showPost={showPost}/>
            ))}
        </div>
    );
};
