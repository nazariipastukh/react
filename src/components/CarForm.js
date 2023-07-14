import './Cars.css'
import {useState} from "react";

export const CarForm = ({setOnSend}) => {
    const [formValues, setFormValues] = useState({
        brand: '', price: '', year: ''
    })

    const handleFormChange = (e, key) => {
        e.preventDefault()
        const {value} = e.target
        setFormValues(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSend(e)
    }

    const handleSend = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formValues)
        })
            .then(response => response.json())
            .then(() => {
                setOnSend(prevState => !prevState)
                setFormValues(formValues)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <lable className='lable'> Add New Car:
                    <input type='text' placeholder='Enter Brand' value={formValues.brand}
                           onChange={e => handleFormChange(e, 'brand')}/>
                    <input type='number' placeholder='Enter Year' value={formValues.year}
                           onChange={e => handleFormChange(e, 'year')}/>
                    <input type='text' placeholder='Enter Price' value={formValues.price}
                           onChange={e => handleFormChange(e, 'price')}/>
                    <button type='submit'> Send</button>
                </lable>
            </form>
        </div>
    )
}