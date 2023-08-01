import React from "react";
import {Car} from "./Car";
import {carsService} from "../../service";
import styles from "../Components.module.css";

export class Cars extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        carsService.getAll()
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        const {data} = this.state
        return (
            <div className={styles.wrapper}>
                {data.map(car =>
                    <Car key={car.id} car={car}/>
                )}
            </div>
        )
    }
}