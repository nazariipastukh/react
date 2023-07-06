import styles from './Flight.module.css'

const Flight =(props)=>{
    const {flight}=props
    return(
        <div className={styles.container}>
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}></img>
            <h3>{flight.mission_name}, {flight.launch_year}</h3>
        </div>
    )
}

export default Flight