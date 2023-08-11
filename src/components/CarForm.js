import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar} from "../redux";
import {updateCar} from "../redux";

export const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm()
    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars)

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('year', carForUpdate.year)
        setValue('price', carForUpdate.price)
    }

    const handleSend = (car) => {
        dispatch(createCar(car))
        reset()
    };

    const handleUpdate = (car) => {
        dispatch(updateCar(carForUpdate.id, car))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? handleUpdate : handleSend)}>
                <label> Add New Car:
                    <input type='text' {...register('brand')} placeholder='Enter Brand'/>
                    <input type='number' {...register('year')} placeholder='Enter Year'/>
                    <input type='text' {...register('price')} placeholder='Enter Price'/>
                    <button type='submit'> {carForUpdate ? 'Update' : 'Send'}</button>
                </label>
            </form>
        </div>
    )
}