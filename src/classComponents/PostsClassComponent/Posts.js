import React from "react";
import {Post} from "./Post";
import {postsService} from "../../service";
import styles from '../Components.module.css'

export class Posts extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        postsService.getAll()
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        const {data} = this.state
        return (
            <div className={styles.wrapper}>
                {data.map(post =>
                    <Post key={post.id} post={post}/>
                )}
            </div>
        )
    }
}