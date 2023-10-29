import React from "react";
import Movie from "./Movie";
import { Badge } from '@mui/material'
import  CustomPagination from './CustomPagination'
import Genre from "./Genre";
import useGenreHook from "./useGenreHook";

export default function Movies(){
    
    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [genres, setGenres] = React.useState([]);
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const genreForURL = useGenreHook(selectedGenres);


    const apiKey = import.meta.env.VITE_API_KEY;

    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&page=${page}&with_genres=${genreForURL}`)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
    },[page, genreForURL])


    const movieArray = data.map((movie, index)=>{
        return(
            <div key={index} className='movie-head'>
                <Badge badgeContent={movie.vote_count} color={movie.vote_count >50 ? 'primary':'secondary'}/>
                <Movie moviee={movie}/>
            </div>
        )
    })
        
    return(
        <div>
            <h1 className='heading'>Mov<span>V</span>ies <span>...</span></h1>
            <Genre selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} type={'movie'} setPage={setPage}/>
            <div className='movies'>
                {movieArray ? movieArray:'Nothing is there'}
            </div>
            <CustomPagination setPage={setPage} numberOfPages={10}/>
        </div>
    )
}