import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CustomPagination({setPage, numberOfPages}) {

    function handelOnClick(page){
        setPage(page);
        window.scroll(0,0);
    }

  return (
    <div style={{marginTop:'2rem', marginBottom:'2rem', color:'white', marginInline:'auto'}} className='pagination'>
        <Stack spacing={2} className='bg'>
            <Pagination count={numberOfPages} onClick={(e)=> handelOnClick(e.target.textContent)} color="primary" className='number'/>
        </Stack>
    </div>
  );
}