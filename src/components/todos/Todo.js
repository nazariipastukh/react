import styles from '../ComponentStyles/ComponentStyles.module.css'

export const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo

    return (
        <div className={styles.box}>
            <h4>User: {userId}. To do: {id}</h4>
            <h2>{title}</h2>
            <h3>{JSON.stringify(completed)}</h3>
        </div>
    )
}