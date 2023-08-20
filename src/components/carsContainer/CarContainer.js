import CarForm from "./carForm/CarForm";
import Cars from "./cars/Cars";
import {useSelector} from "react-redux";

const CarContainer = () => {
    const {isLoading} = useSelector(state => state.cars)

    return (
        <div>
            <CarForm/>
            {isLoading && <h1>Loading...</h1>}
            <Cars/>
        </div>
    );
};

export default CarContainer;