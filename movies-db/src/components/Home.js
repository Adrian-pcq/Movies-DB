import React from "react";

function Home({moviesArray}){

    const shuffled = moviesArray.sort(()=>0.5 - Math.random())
    const display5 = shuffled.slice(0,8)
    
    return(
        <>

        <h1><img src="./images/sugg.png" alt="Poster"/></h1>
        <div className="card-container">
            
            {display5.map((movie)=>{
                return(
                    <div className="card" key={movie.id}>
                    <img 
                     src={movie.Poster} alt="Poster"/>
                     </div>
                )
            })}
            
        </div>
        </>
    )
}

export default Home;