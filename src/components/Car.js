import styles from './Cars.module.css'
import {useContext} from "react";
import {Context} from "./CarsContainer";
import {carServices} from "../services/carServices";

export const Car = ({car}) => {
    const {id, brand, price, year} = car
    const {setCarForUpdate, setTrigger} = useContext(Context)

    const deleteCar = async () => {
        try {
            await carServices.deleteById(id)
        } catch (e) {
            console.log(e.response.data)
        } finally {
            setTrigger()
        }
    }

    return (
        <div className={styles.car}>
            <h3>ID: {id}</h3>
            <h4>{brand}, {year} - {price} USD</h4>
            <button onClick={deleteCar}> Delete</button>
            <button onClick={() => setCarForUpdate(car)}> Update</button>
        </div>
    )
}