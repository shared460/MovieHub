import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import React from "react";
import Movie from "./Movie";

export default function Search(){
    
    const [type, setType] = React.useState();
    const [searchText, setSearchText] = React.useState('');
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [value, setValue] = React.useState(1);

    console.log(searchText);
    console.log(data)

    const apiKey = import.meta.env.VITE_API_KEY;

    React.useEffect(()=>{
        fetchdata();
    },[page,value])

        function fetchdata(){
            fetch(`https://api.themoviedb.org/3/search/${value ==1 ? 'movie':'tv'}?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
            .then(response => response.json())
            .then(response => setData(response.results))
        }
        
    
        const movieArray = data.map((movie, index)=>{
            return(
                <div key={index} className='movie-head'>
                    <Movie moviee={movie}/>
                </div>
            )
        })

    
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}} className='search'>
                <TextField  style={{width:'80%'}} className='searchbox' label='search for Movies or Tv series' variant="filled" onChange={e=>setSearchText(e.target.value)}/> 
            <div style={{marginTop:'2rem', width:'80%'}} className='button-box'>
                <Button variant="contained" onClick={()=>{
                    setValue(1)
                    fetchdata();
                }}>Movies</Button>
                <Button variant="contained" onClick={()=>{
                    setValue(2);
                    fetchdata();
                }}>TvSeries</Button>
            </div>
            <div className='movies' style={{marginTop:'4rem'}}>
                {movieArray}
            </div>    
        </div>
    )
}