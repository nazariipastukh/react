import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../redux";
import Car from "../car/Car";

const Cars = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)

    useEffect(()=>{
        dispatch(carActions.getCar())
    },[dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;