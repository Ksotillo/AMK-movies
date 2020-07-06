import React, { useState } from 'react'
import { Genre } from "../models/Genre";


interface GenreProps {
    genre: Genre,
    onGenreAdded: (genres: number) => void,
    onGenreRemoved: (genres: number) => void
}

const GenreFilter = ({ genre, onGenreAdded, onGenreRemoved }: GenreProps) => {
    const [active, setActive] = useState(false);
    const toggle = () => {
        if (!active) onGenreAdded(genre.id)
        else onGenreRemoved(genre.id)
        setActive(!active)
    }
    return (
        <label className={`genre ${active ? 'active' : ''}`} onClick={toggle}>
            {genre.name}
        </label>
    )
}

export default GenreFilter;