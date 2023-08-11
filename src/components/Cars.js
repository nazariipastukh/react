import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Car} from './Car'
import {CarForm} from "./CarForm";
import {getCars} from "../redux";

export const Cars = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)

    useEffect(() => {
        dispatch(getCars())
    }, [dispatch]);

    return (
        <div>
            <CarForm/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}