// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import {Post} from './Post'
import {useEffect, useState} from "react";
import styles from './Post.module.css'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                    setPosts(data)
                }
            )
    }, [])

    const seePost = (id) => {
        const selected = posts.find(post => id === post.id)
        setSelectedPost(selected)
    }

    return (
        <div>
            {selectedPost && (
                <div className={styles.post}>
                    {<h2>{selectedPost.id} - {selectedPost.userId}</h2>}
                    {<h3>{selectedPost.title}</h3>}
                    {<h4>{selectedPost.body}</h4>}
                </div>
            )}
            {posts.map(post => {
                return (
                    <Post key={post.id} post={post} seePost={seePost}/>
                )
            })}
        </div>
    )
}

