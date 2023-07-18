// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments

import styles from './CommentPage.module.css'
import {useForm} from "react-hook-form";
import {ApiServices} from "../services/apiServices";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidators} from '../validators/commentValidators'

export const CommentPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(commentValidators)
    })

    const onSubmit = (data) => {
        ApiServices.handleComment(data)
    }

    return (
        <div className={styles.wrapperComment}>
            <form className={styles.formComment} onSubmit={handleSubmit(onSubmit)}>
                <lable className='lable'> Add Your Comment:
                    <input type='number' placeholder='Enter Post Id' {...register('postId')}/>
                    <input type='text' placeholder='Your Name' {...register('name')}/>
                    <input type='text' placeholder='Your Email' {...register('email')}/>
                    {errors?.email?.message && <div style={{color: 'red'}}>{errors.email.message}</div>}
                    <input className='comment' type='text' placeholder='Add a Сomment…' {...register('body')}/>
                    <button type='submit'> Send</button>
                </lable>
            </form>
        </div>
    )
}