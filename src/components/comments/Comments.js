import {Comment} from './Comment'
import {useEffect, useState} from "react";

export const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data)
            })
    }, [])

    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment key={comment.id} comment={comment}/>
                )
            })}
        </div>
    )
}