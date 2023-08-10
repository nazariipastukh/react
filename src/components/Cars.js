import {Car} from './Car'
import {/*useState, */useEffect} from "react";
// import {CarForm} from "./CarForm";
// import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux";

// import {carActions} from "../redux";

export const Cars = () => {
    // const [cars, setCars] = useState([]);
    // const [onSend, setOnSend] = useState(null);
    // const [onUpdate, setOnUpdate] = useState(null)

    const dispatch=useDispatch()
    const cars = useSelector(state => state.cars)


    useEffect(() => {
        dispatch(getCars())
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(carActions.getCars())
    // }, [dispatch])
    // console.log(cars)

    return (
        <div>
            {/*<CarForm /* setOnSend={setOnSend}*/ /*onUpdate={onUpdate} setOnUpdate={setOnUpdate}*//>*/}
            {cars.map(car =>
                <Car key={car.id} car={car} /*setOnSend={setOnSend}*/ /*setOnUpdate={setOnUpdate}*//>
            )}
        </div>
    )
}