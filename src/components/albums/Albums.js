import {useEffect, useState} from "react";
import {Album} from './Album'

export const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
            })
    }, [])

    return (
        <div>
            {albums.map(album => {
                return (
                    <Album key={album.id} album={album}/>
                )
            })}
        </div>
    )
}