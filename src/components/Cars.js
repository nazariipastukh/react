import {Car} from './Car'
import {useContext, useState, useEffect} from "react";
import {Context} from "./CarsContainer";
import {carServices} from "../services/carServices";

export const Cars = () => {
    const [cars, setCars] = useState([]);
    const {trigger} = useContext(Context)

    useEffect(() => {
        carServices.getAll().then(value => value.data).then(value => setCars(value))
    }, [trigger])

    return (
        <div>
            {cars.map(car =>
                <Car key={car.id} car={car}/>
            )}
        </div>
    )
}