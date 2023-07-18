// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http:jsonplaceholder.typicode.com/users

import styles from './LoginPage.module.css';
import {useForm} from "react-hook-form";
import {ApiServices} from '../services/apiServices';
import {joiResolver} from '@hookform/resolvers/joi';
import {userValidator} from '../validators/userValidators'


export const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(userValidator),
    });

    const onSubmit = (data) => {
        ApiServices.handleSubmit(data);
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Enter Your Information:
                    <input type="text" placeholder="Name:" {...register('name')} />
                    <input type="text" placeholder="UserName:" {...register('userName')} />
                    <input type="email" placeholder="Email:" {...register('email')} />
                    {errors?.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
                </label>
                <label>
                    Enter Your Address:
                    <input type="text" placeholder="Street:"{...register('street')} />
                    <input type="text" placeholder="Suite:" {...register('suite')} />
                    <input type="text" placeholder="City:" {...register('city')} />
                    <input type="number" placeholder="Zipcode" {...register('zipcode')} />
                    <input type="number" placeholder="Geo - lng:" {...register('lng')} />
                    <input type="number" placeholder="Geo - lat:" {...register('lat')} />
                </label>
                <label>
                    Enter Your Contact Information:
                    <input type="number" placeholder="Phone:" {...register('phone')} />
                    <input type="text" placeholder="Website:" {...register('website')} />
                </label>
                <label>
                    Enter Company Information:
                    <input type="text" placeholder="Name:" {...register('companyName')} />
                    <input type="text" placeholder="CatchPhrase:" {...register('catchPhrase')} />
                    <input type="text" placeholder="Bs:" {...register('bs')} />
                </label>
                <button type="submit">Approve</button>
            </form>
        </div>
    );
};