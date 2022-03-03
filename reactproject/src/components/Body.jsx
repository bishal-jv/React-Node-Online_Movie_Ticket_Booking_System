import React from 'react';
import { isAdmin } from '../utils/auth';
import Listallmovie from './Listallmovies';


function Body(props) {
if(isAdmin()){
  return (
    <body>
    <div className="container main-container p-1 m-3 mx-auto">
        <header className="row"><h4>Welcome to B-Cinemas</h4></header>
    </div>
    <Listallmovie/>
    </body>
  )}
  else{
      return (
      <body>
    <div className="container main-container p-1 m-3 mx-auto">
        <header className="row"><h4>Welcome to B-Cinemas</h4></header>
    </div>
    <Listallmovie/>
    </body>
      )}
}

export default Body;