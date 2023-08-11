import './Cars.module.css'
import {useDispatch} from "react-redux";
import {actions, deleteCar} from "../redux";

export const Car = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useDispatch()

    return (
        <div className='car'>
            <h3>ID: {id}</h3>
            <h4>{brand}, {year} - {price} USD</h4>
            <button onClick={() => dispatch(deleteCar(id))}> Delete</button>
            <button onClick={() => dispatch(actions.setCarForUpdate(car))}> Update</button>
        </div>
    )
}