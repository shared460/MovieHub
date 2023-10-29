import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  console.log(value)

  React.useEffect(()=>{
    console.log('inside useEffect')
    if(value === 0)
      navigate('/');
    if(value === 1)
      navigate('/movies');
    if(value === 2)
      navigate('/series');
    if(value === 3)
      navigate('/search');
  },[value])

  return (
    <Box className='bottomNav'>
      <BottomNavigation className='nav'
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} className='icon'/>
        <BottomNavigationAction label="Movies" icon={<TheatersIcon />} className='icon'/>
        <BottomNavigationAction label="Tv series" icon={<TvIcon/>} className='icon'/>
        <BottomNavigationAction label="Search" icon={<SearchIcon/>} className='icon'/>
      </BottomNavigation>
    </Box>
  );
}