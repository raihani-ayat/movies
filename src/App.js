import React , {useEffect, useState} from 'react';
import Movie from './Components/Movie'
import './App.css';

const Movie_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=601da777eec24b8209bb071a00da3a93&page=1"
const Search_API="https://api.themoviedb.org/3/search/movie?&api_key=601da777eec24b8209bb071a00da3a93&query="
const Year_Popular_API="https://api.themoviedb.org/3/discover/movie?api_key=601da777eec24b8209bb071a00da3a93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year="
function App() {

  const [movies, setMovies] =useState([]);
  const [SearchQuery, setSearchQuery] = useState(""); 
  const [YearQuery, setYearQuery] = useState("");

   useEffect( ()=>{
      getMovies(Movie_API);
   },[]);

   const getMovies = (API)=>{
    fetch(API).then(response=>response.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results)
    });

   }

   const SearchHandler=(e) =>{
     e.preventDefault();
     if(SearchQuery){
      getMovies(Search_API+SearchQuery);
     setSearchQuery("");
    }

   };

   const ChangeHandler= (e) => {
     setSearchQuery(e.target.value);
   }

   const DiscoverHandler=(e) => {
     e.preventDefault();
     getMovies(Year_Popular_API+YearQuery);
     setYearQuery("");
   }

   const YearHandler=(e) => {
     setYearQuery(e.target.value);
   }

  return (
  <>  
    <header>
      <form onSubmit={SearchHandler}>
      <input  className="input-search" type="text" placeholder="Search" value={SearchQuery} onChange={ChangeHandler}></input>
      </form>
      <form onSubmit={DiscoverHandler}>
        <input type="discover" className="discover" placeholder="Dicover" value={YearQuery} onChange={YearHandler}></input>
      </form>
  </header>
    <div className="movie-container">
      {movies.length > 0 &&
      movies.map((movie)=>
      <Movie key={movie.id} {...movie}/>)}
    </div>
  </>  
  );
      }

export default App;
