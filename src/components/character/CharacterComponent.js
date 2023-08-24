import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import styles from "../Episode.module.css";

export const CharacterComponent = ({character}) => {
    const {name, species, status, image} = character

    return (
        <div className={styles.boxCharacter}>
            <Card sx={{height: '41vh', width: '13vw'}}>
                <CardMedia
                    sx={{height: 140}}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {species} {status}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};