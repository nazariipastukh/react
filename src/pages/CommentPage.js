// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments

import './CommentPage.modules.css'
import {useState} from "react";

export const CommentPage = () => {
    const [formValues, setFormValues] = useState({
        postId: '', name: '', email: '', body: ''
    })

    const handleFormChange = (event, key) => {
        event.preventDefault()
        const {value} = event.target
        setFormValues(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSend(event)
    }

    const handleSend = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formValues)
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <lable className='lable'> Add Your Comment:
                    <input type='number' placeholder='Enter Post Id' value={formValues.postId}
                           onChange={(event) => handleFormChange(event, 'postId')}/>
                    <input type='text' placeholder='Your Name' value={formValues.name}
                           onChange={(event) => handleFormChange(event, 'name')}/>
                    <input type='text' placeholder='Your Email' value={formValues.email}
                           onChange={(event) => handleFormChange(event, 'email')}/>
                    <input className='comment' type='text' placeholder='Add a Сomment…' value={formValues.body}
                           onChange={(event) => handleFormChange(event, 'body')}/>
                    <button type='submit'> Send</button>
                </lable>
            </form>
        </div>
    );
};