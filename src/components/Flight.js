import styles from './Flight.module.css'

export const Flight = (props) => {
    const {flight} = props

    return (
        <div className={styles.container}>
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}></img>
            <h2>{flight.mission_name}</h2>
            <h2>{flight.launch_year}</h2>
        </div>
    )
}