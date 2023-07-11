import {Post} from './Post'
import {useEffect, useState} from "react";

export const Posts = ({userId, users}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [userId])

    return (
        <div>
            {posts.map(post => {
                const author = users.filter(user => user.id === post.userId)[0]
                return (
                    <Post key={post.id} post={post} author={author}/>
                )
            })}
        </div>
    )
}