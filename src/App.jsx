import React from "react";

import Trending from "./components/Trending";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Series from "./components/Seriex";
import Layout from "./Layout";

import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'

export default function App(){
  return(
    <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Trending/>}/>
                  <Route path ='movies' element={<Movies/>}/>
                  <Route path ='series' element={<Series/>}/>
                  <Route path ='search' element={<Search/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
    </div>
  )
}