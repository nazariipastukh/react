import React from 'react';
import styles from '../Components.module.css'

export class Post extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {id, title, body} = this.props.post
        return (
            <div className={styles.container}>
                <h2>Post: {id}.</h2>
                <h2>{title}</h2>
                <h2>{body}</h2>
            </div>
        )
    }
}