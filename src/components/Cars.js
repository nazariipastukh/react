import {Car} from './Car'
import {useState, useEffect} from "react";
import {CarForm} from "./CarForm";

export const Cars = () => {
    const [cars, setCars] = useState([])
    const [onSend, setOnSend] = useState(null);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(data => {
                setCars(data)
            })
    }, [onSend])

    return (
        <div>
            <CarForm setOnSend={setOnSend}/>
            {cars.map(car =>
                <Car key={car.id} car={car}/>
            )}
        </div>
    )
}