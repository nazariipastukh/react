import {Post} from './Post'
import {useEffect, useState} from "react";

export const Posts = ({user: {userId, name}}) => {
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
            {posts.map(post =>
                <Post key={post.id} post={post} userName={name}/>
            )}
        </div>
    )
}