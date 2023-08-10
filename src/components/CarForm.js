import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {carService} from "../services";

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
        carService.postCar(data)
            .then(() => {
                setOnSend(previous => !previous);
                setOnUpdate(null);
                reset();
            })
    };

    const handleUpdate = (car) => {
        carService.updateCar(onUpdate.id, car)
            .then(() => {
                setOnSend(previous => !previous);
                setOnUpdate(null);
                reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!onUpdate ? handleSend : handleUpdate)}>
                <label> Add New Car:
                    <input type='text' {...register('brand')} placeholder='Enter Brand'/>
                    <input type='number' {...register('year')} placeholder='Enter Year'/>
                    <input type='text' {...register('price')} placeholder='Enter Price'/>
                    <button type='submit'> Send</button>
                </label>
            </form>
        </div>
    )
}