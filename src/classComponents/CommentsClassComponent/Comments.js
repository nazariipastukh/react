import React from "react";
import {Comment} from "./Comment";
import {commentsService} from "../../service";
import styles from "../Components.module.css";

export class Comments extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        commentsService.getAll()
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        const {data} = this.state
        return (
            <div className={styles.wrapper}>
                {data.map(comment =>
                    <Comment key={comment.id} comment={comment}/>
                )}
            </div>
        )
    }
}