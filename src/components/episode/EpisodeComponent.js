import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import * as PropTypes from "prop-types";

Typography.propTypes = {
    color: PropTypes.string,
    sx: PropTypes.shape({fontSize: PropTypes.number}),
    gutterBottom: PropTypes.bool,
    children: PropTypes.node
};

export const EpisodeComponent = ({episode}) => {
    const {name, air_date, episode: episodeName} = episode

    return (
        <Box sx={{width: 275}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Episode
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {episodeName}
                    </Typography>
                    <Typography variant="body2">
                        {air_date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={'contained'}>Characters</Button>
                </CardActions>
            </Card>
        </Box>
    );
};