import {EpisodesComponent} from "../components";
import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import styles from '../components/Episode.module.css'

export const EpisodesPage = () => {
    const {pages} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams()

    return (
        <div className={styles.episodesPage}>
            <EpisodesComponent/>
            {
                <Pagination
                    defaultPage={+query.get('page')}
                    count={pages}
                    onChange={(e, page) => setQuery({page: page.toString()})}
                />
            }
        </div>
    );
};