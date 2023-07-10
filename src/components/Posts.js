// пости мають виводитись під компонетою Users (в App компоненті)

import {Post} from './Post'
import {useEffect, useState} from "react";

export const Posts = ({userId}) => {
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
            {posts.map(post => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}