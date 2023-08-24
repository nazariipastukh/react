import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {charactersActions} from "../../redux";
import {CharacterComponent} from "../character/CharacterComponent";
import styles from "../Episode.module.css";

export const CharactersComponent = () => {
    const {characters} = useSelector(state => state.characters)
    const dispatch = useDispatch()
    const {state: {ids}} = useLocation()

    useEffect(() => {
        dispatch(charactersActions.getByIds({ids}))
    }, [dispatch, ids])

    return (
        <div className={styles.wrapper}>
            {characters.map(character =>
                <CharacterComponent key={character.id} character={character}/>
            )}
        </div>
    );
};