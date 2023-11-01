import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
        <NavLink exact to="/" ><img src="./images/home navbar.png" alt="Poster"/></NavLink>
        <NavLink exact to="movies"><img src="./images/all movies.png" alt="Poster"/></NavLink>
        <NavLink exact to="newMovie"><img src="./images/create movie.png" alt="Poster"/></NavLink>
        </div>
    )
}

export default NavBar;