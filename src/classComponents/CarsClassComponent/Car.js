import React from 'react';
import styles from "../Components.module.css";

export class Car extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {id, brand, price, year} = this.props.car
        return (
            <div className={styles.container}>
                <h2>{brand} </h2>
                <h3>{id} - {year} </h3>
                <h2>{price}</h2>
            </div>
        )
    }
}