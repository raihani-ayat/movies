import React from 'react';

const Images_API= "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) =>{
    if(vote >= 8){
        return 'green';
    }
    else if(vote >= 6){
        return 'orange';
    }
    else{
        return 'red';
    }
}

const Book_Ticket = (e) => {
            window.location='https://www.gv.com.sg/GVBuyTickets#/';
}



const Movie = ({title, poster_path, overview, vote_average})=>(
    <div className="movie">
        <img src={Images_API + poster_path} alt={title}/>
        <div className="movie-information">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="hover-overview">
            <h2>Overview:</h2>
            <p>{overview}</p>
            <button className="book-ticket" type="button" onClick={Book_Ticket}>Book ticket</button>

        </div>
    </div>
);

export default Movie;