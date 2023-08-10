import {Car} from './Car'
import {useState, useEffect} from "react";
import {CarForm} from "./CarForm";
import {carService} from "../services";

export const Cars = () => {
    const [cars, setCars] = useState([]);
    const [onSend, setOnSend] = useState(null);
    const [onUpdate, setOnUpdate] = useState(null)

    useEffect(() => {
        carService.getAll()
            .then(({data}) => {
                setCars(data);
            })
    }, [onSend]);

    return (
        <div>
            <CarForm setOnSend={setOnSend} onUpdate={onUpdate} setOnUpdate={setOnUpdate}/>
            {cars.map(car =>
                <Car key={car.id} car={car} setOnSend={setOnSend} setOnUpdate={setOnUpdate}/>
            )}
        </div>
    )
}