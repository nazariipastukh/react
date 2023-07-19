import {useState, createContext} from 'react'
import {Cars} from './Cars'
import {CarsForm} from "../pages/CarsForm";

export const Context = createContext(null)

export const CarsContainer = () => {
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    return (
        <Context.Provider value={{
            trigger,
            setTrigger: () => setTrigger(prev => !prev),
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <CarsForm/>
                <Cars/>
            </div>
        </Context.Provider>
    );
};