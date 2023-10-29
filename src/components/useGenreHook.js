const useGenreHook = (selectedGenres) =>{
    if(selectedGenres.length < 1){
        return "";
    }

    const genreIds = selectedGenres.map((genre)=>{
        return(genre.id);
    })

    //acc is the first value of arr 
    return genreIds.reduce((acc,curr)=>acc +","+ curr);
}

export default useGenreHook;