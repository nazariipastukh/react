import {Box, LinearProgress, Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import styles from '../Episode.module.css'
import {themeActions} from "../../redux";

export const HeaderComponent = () => {
    const {isLoading} = useSelector(state => state.progress)
    const {current} = useSelector(state => state.episodes)
    const {themeCheck} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return (
        <div className={styles.headerWrap}>
            <div className={styles.header}>
                {
                    current ? current : 'Rick And Morty'
                }
                <Switch className={styles.switch}
                        defaultChecked={themeCheck}
                        onClick={() => dispatch(themeActions.changeThemeCheck())}
                />
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