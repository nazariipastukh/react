// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http:jsonplaceholder.typicode.com/users

import './LoginPage.modules.css';
import {useState} from 'react';

export const LoginPage = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        lng: '',
        lat: '',
        phone: '',
        website: '',
        companyName: '',
        catchPhrase: '',
        bs: '',
    });

    const handleFormChange = (event, key) => {
        event.preventDefault();
        const  {value} = event.target;
        setFormValues((prevState) => {
            return {
                ...prevState,
                [key]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleApprove(event);
    };

    const handleApprove = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Enter Your Information:
                    <input type="text" placeholder="Name:" value={formValues.name}
                           onChange={(event) => handleFormChange(event, 'name')}/>
                    <input type="text" placeholder="UserName:" value={formValues.username}
                           onChange={(event) => handleFormChange(event, 'username')}/>
                    <input type="email" placeholder="Email:" value={formValues.email}
                           onChange={(event) => handleFormChange(event, 'email')}/>
                </label>
                <label>
                    Enter Your Address:
                    <input type="text" placeholder="Street:" value={formValues.street}
                           onChange={(event) => handleFormChange(event, 'street')}/>
                    <input type="text" placeholder="Suite:" value={formValues.suite}
                           onChange={(event) => handleFormChange(event, 'suite')}/>
                    <input type="text" placeholder="City:" value={formValues.city}
                           onChange={(event) => handleFormChange(event, 'city')}/>
                    <input type="number" placeholder="Zipcode" value={formValues.zipcode}
                           onChange={(event) => handleFormChange(event, 'zipcode')}/>
                    <input type="number" placeholder="Geo - lng:" value={formValues.lng}
                           onChange={(event) => handleFormChange(event, 'lng')}/>
                    <input type="number" placeholder="Geo - lat:" value={formValues.lat}
                           onChange={(event) => handleFormChange(event, 'lat')}/>
                </label>
                <label>
                    Enter Your Contact Information:
                    <input type="number" placeholder="Phone:" value={formValues.phone}
                           onChange={(event) => handleFormChange(event, 'phone')}/>
                    <input type="text" placeholder="Website:" value={formValues.website}
                           onChange={(event) => handleFormChange(event, 'website')}/>
                </label>
                <label>
                    Enter Company Information:
                    <input type="text" placeholder="Name:" value={formValues.companyName}
                           onChange={(event) => handleFormChange(event, 'companyName')}/>
                    <input type="text" placeholder="CatchPhrase:" value={formValues.catchPhrase}
                           onChange={(event) => handleFormChange(event, 'catchPhrase')}/>
                    <input type="text" placeholder="Bs:" value={formValues.bs}
                           onChange={(event) => handleFormChange(event, 'bs')}/>
                </label>
                <button type="submit">Approve</button>
            </form>
        </div>
    );
};