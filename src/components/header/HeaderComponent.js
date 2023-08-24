import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import styles from '../Episode.module.css'

export const HeaderComponent = () => {
    const {isLoading} = useSelector(state => state.progress)
    const {current} = useSelector(state => state.episodes)

    return (
        <div className={styles.headerWrap}>
            <div className={styles.header}>
                {
                    current ? current : 'Rick And Morty'
                }
            </div>
            {
                isLoading && (
                    <Box sx={{width: '100%'}}>
                        <LinearProgress/>
                    </Box>
                )
            }
        </div>
    );
};