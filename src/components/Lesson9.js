import {useEffect} from "react";
import {characterActions} from "../reduxCore/actions/characterActions";
import {useDispatch, useSelector} from "react-redux";
import styles from './Rick.module.css'
import {rickService} from "../service/rickService";

export const Lesson9 = () => {
    const dispatch = useDispatch()
    const characters = useSelector((store) => store.characters.results)
    const isLoading = useSelector((store) => store.characters.isLoading)
    const next = useSelector((store) => store.characters.info?.next)
    const prev = useSelector((store) => store.characters.info?.prev)

    useEffect(() => {
        dispatch(characterActions.setIsLoading(true))
        rickService.getAll()
            .then(({data}) =>
                dispatch(characterActions.setCharacters(data)))
    }, [])

    const getNext = (e) => {
        e.preventDefault()
        dispatch(characterActions.setIsLoading(true))
        fetch(next)
            .then(response => response.json())
            .then(data =>
                dispatch(characterActions.addCharacters(data))
            )
    }

    const getPrevious = (e) => {
        e.preventDefault()
        dispatch(characterActions.setIsLoading(true))
        fetch(prev)
            .then(response => response.json())
            .then(data =>
                dispatch(characterActions.prevCharacters(data))
            )
    }

    return (
        <div className={styles.wrapper}>
            {isLoading ?
                <h1>Loading...</h1> :
                <div>
                    <div className={styles.buttons}>
                        <button onClick={getPrevious} disabled={!prev}>GetPrevious</button>
                        <button onClick={getNext} disabled={!next}>GetNext</button>
                    </div>
                    {characters && characters.map(character => (
                        <div className={styles.container}>
                            <img src={character.image} alt={''}></img>
                            <p>{character.name}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}