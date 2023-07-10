// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {Flight} from './Flight'
import {useEffect, useState} from "react";

export const Flights = () => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(data => {
                setFlights(data)
            })
    }, [])

    return (
        <div>
            {flights.filter(flight => flight.launch_year !== '2020').map(flight => (
                    <Flight key={flight.flight_number} flight={flight}/>
                )
            )}
        </div>
    )
}

