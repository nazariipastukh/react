import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styles from '../Episode.module.css'
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";

export const EpisodeComponent = ({episode}) => {
    const {name, air_date, episode: episodeName, characters} = episode
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',')
        dispatch(episodeActions.setCurrent(name))
        navigate('/characters', {state: {ids}})
    }

    return (
        <div className={styles.box}>
            <Card sx={{
                height: '35vh',
                width: '13vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {air_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {episodeName}
                    </Typography>
                </CardContent>
                <CardActions className={styles.button}>
                    <Button size="small" variant={'contained'} onClick={toCharacters}>Characters</Button>
                </CardActions>
            </Card>
        </div>
    )
}