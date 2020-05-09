import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movies/Movie.js"
import SavedList from './Movies/SavedList';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList.js";
const App = () => {
  const [savedList, setSavedList] = useState([]);
  


  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
     
      <Route exact path="/">
      <MovieList />
      </Route>
    
      <Route path="/movies/:id" component={MovieList}>
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
