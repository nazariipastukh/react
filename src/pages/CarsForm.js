import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {Context} from "../components/CarsContainer";
import {carServices} from "../services/carServices";

export const CarsForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm()
    const [errors, setErrors] = useState(null)
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context)

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const submit = async (car) => {
        try {
            await carServices.create(car)
            setErrors(null)
            reset()
            setTrigger()
        } catch (e) {
            setErrors(e.response.data)
        }
    }

    const update = async (car) => {
        try {
            await carServices.updateById(carForUpdate.id, car)
            reset()
            setErrors(null)
            setTrigger()
            setCarForUpdate(null)
        } catch (e) {
            setErrors(e.response.data)
        }
    }

    console.log(errors)

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? submit : update)}>
                <lable> Add New Car:
                    <input type='text' {...register('brand')} placeholder='Enter Brand'/>
                    <input type='number' {...register('year')} placeholder='Enter Year'/>
                    <input type='text' {...register('price')} placeholder='Enter Price'/>
                    <button type='submit'> {!carForUpdate ? 'Send' : 'Update'}</button>
                </lable>
                {errors && <h3>{JSON.stringify(errors.year)}</h3>}
            </form>
        </div>
    )
}