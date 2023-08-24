import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {EpisodeComponent} from "../episode/EpisodeComponent";
import styles from '../Episode.module.css'

export const EpisodesComponent = () => {
    const dispatch = useDispatch()
    const {episodes} = useSelector(state => state.episodes)
    const [query] = useSearchParams({page: '1'})

    const page = query.get('page')

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [dispatch, page])

    return (
        <div className={styles.wrapper}>
            {episodes.map(episode => (
                <EpisodeComponent
                    key={episode.id} episode={episode}
                />
            ))}
        </div>
    );
};