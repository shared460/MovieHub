import React from 'react'
import {img_300, unavailable} from '../config/config'

export default function Movie({moviee}){
    return(
        <div className='movie'>
            <img src={ moviee.poster_path ? `${img_300}/${moviee.poster_path}` : `${unavailable}`}/>
            <h3 className='title'>{moviee.title || moviee.name}, <span>{moviee.media_type === 'movie'? 'movie':'series'}</span></h3>
            <p>{moviee.release_date ? `release date: ${moviee.release_date}` : `first-air date: ${moviee.first_air_date}`}</p>
        </div>
    )
}