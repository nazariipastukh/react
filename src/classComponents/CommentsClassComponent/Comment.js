import React from 'react';
import styles from "../Components.module.css";

export class Comment extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, email, body} = this.props.comment
        return (
            <div className={styles.container}>
                <h2>{name} </h2>
                <h3>{id} - {email} </h3>
                <h2>{body}</h2>
            </div>
        )
    }
}