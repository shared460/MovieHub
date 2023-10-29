import React from 'react'
import { Chip } from '@mui/material';

export default function Genre({selectedGenres, setSelectedGenres, genres, setGenres, type, setPage}){

    const apiKey = import.meta.env.VITE_API_KEY;

    function handelAdd(genre){
        setSelectedGenres([...selectedGenres,genre])
        setGenres(genres.filter((g)=>g.id !== genre.id))
        setPage(1);
    }
    function removeHandel(genre){
        setGenres([...genres,genre])
        setSelectedGenres(selectedGenres.filter((g)=>g.id !== genre.id))
        setPage(1);
    }


    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`)
        .then(response => response.json())
        .then(response => setGenres(response.genres))
        .catch(error => console.log(error))
    },[])
    

    return(
        <div style={{display:'flex', gap:'4px', marginBottom:'3rem', flexWrap:'wrap'}}>
            { selectedGenres && selectedGenres.map(genre => <Chip label={genre.name} clickable key={genre.id} color='primary' size='small' onDelete={()=>{removeHandel(genre)}}/>) }
            { genres && genres.map(genre => <Chip label={genre.name} clickable key={genre.id} color='secondary' size='small' onClick={()=>{
                handelAdd(genre);
            }}/>) }
        </div>
    )
}