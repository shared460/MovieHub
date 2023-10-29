import React from "react";
import Movie from "./Movie";
import { Badge } from '@mui/material'
import  CustomPagination from './CustomPagination'
export default function Trending(){
    
    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState(1)

    const apiKey = import.meta.env.VITE_API_KEY;

    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
    },[page])

    console.log(data);
    //when the inside api content changes then it will change the genreForURL 

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
            <h1 className='heading'>Tren<span>d</span>ing Movies <span>...</span></h1>
            <div className='movies'>
                {movieArray ? movieArray:'Nothing is there'}
            </div>
            <CustomPagination setPage={setPage} numberOfPages={15}/>
        </div>
    )
}