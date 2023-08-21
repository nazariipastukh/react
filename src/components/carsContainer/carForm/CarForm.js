import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../redux";

const CarForm = () => {
    const {register, setValue, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars)

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('year', carForUpdate.year)
        setValue('price', carForUpdate.price)
    }

    const saveCar = async (car) => {
        await dispatch(carActions.createCar({car}))
        reset()
    }

    const updateCar = async (car) => {
        await dispatch(carActions.updateCar({id: carForUpdate.id, car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
            <input type='text' placeholder='brand' {...register('brand')} />
            <input type={'text'} placeholder={'brand'} {...register('year')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <button> {carForUpdate ? 'Update' : 'Save'} </button>
        </form>
    );
};

export default CarForm;