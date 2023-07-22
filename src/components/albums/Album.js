import styles from '../ComponentStyles/ComponentStyles.module.css'

export const Album = ({album}) => {
    const {userId, id, title} = album


    return (
        <div className={styles.box}>
            <h4>User: {userId}. Album: {id}</h4>
            <h3>{title}</h3>
        </div>
    )
}