import {useForm} from "react-hook-form";
import {useEffect} from "react";

export const CarForm = ({setOnSend, onUpdate, setOnUpdate}) => {
    const {register, handleSubmit, reset, setValue} = useForm()

    useEffect(() => {
        if (onUpdate) {
            setValue('brand', onUpdate.brand)
            setValue('year', onUpdate.year)
            setValue('price', onUpdate.price)
        }
    }, [onUpdate, setValue])

    const handleSend = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(value => {
                if (!value.ok) {
                    throw Error(value.status + ' not ok')
                }
                return value.json()
            })
            .then(() => {
                setOnSend(previous => !previous)
                reset()
            })
            .catch(e => {
                console.log(e)
            })
    }

    const handleUpdate = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${onUpdate.id}`, {
            headers: {'content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(car)
        })
            .then(value => value.json())
            .then(() => {
                setOnSend(previous => !previous)
                setOnUpdate(null)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!onUpdate ? handleSend : handleUpdate)}>
                <lable className='lable'> Add New Car:
                    <input type='text' {...register('brand')} placeholder='Enter Brand'/>
                    <input type='number' {...register('year')} placeholder='Enter Year'/>
                    <input type='text' {...register('price')} placeholder='Enter Price'/>
                    <button type='submit'> Send</button>
                </lable>
            </form>
        </div>
    )
}