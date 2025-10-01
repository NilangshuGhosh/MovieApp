import React from "react";
import MovieCard from "../Components/MovieCard";
import '../css/Home.css'
import { popular_movies, search_movies } from "../services/api";
 function Home(){
const [searchQuery,setSearchQuery]=React.useState("");
const [movies,setmovies]=React.useState([]);
const [loading,set_loading]=React.useState(true);
const [error,set_error]=React.useState(null);
React.useEffect(()=>{    // will not be rerendered after each dom update,used for api data-fetching.
async function fetch_data() {
   try {
   const data=await popular_movies();
setmovies(data); 
   } catch (error) {
    console.log("Error in fetching the data."); 
    set_error("Hmm error happened while fetching data.");
   } finally{
    set_loading(false);
   }
}
fetch_data();
},[]);


// const movies=[
// {id:1, title:"John Wick", release_date:"2020",url:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/250px-John_Wick_TeaserPoster.jpg"},
// {id:2, title:"Inception", release_date:"2010",url:"https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"},
// {id:3, title:"Interstellar", release_date:"2014",url:"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"},
// {id:4, title:"The Dark Knight", release_date:"2008",url:"https://i.pinimg.com/236x/b7/c8/1a/b7c81aaf567216bb249e994d0df03c45.jpg"},
// // {id:5, title:"Avengers: Endgame", release_date:"2019"},
// // {id:6, title:"Parasite", release_date:"2019"},
// // {id:7, title:"The Matrix", release_date:"1999"},
// // {id:8, title:"Gladiator", release_date:"2000"},
// // {id:9, title:"Joker", release_date:"2019"},
// // {id:10, title:"Oppenheimer", release_date:"2023"}

// ];
// console.log("Hello first");

//  const movies=  popular_movies();// ->useEffect needed here.
// console.log("Hello");
const handleSearch=(e)=>{
    e.preventDefault();// stops it from clearing the input after each submit
    // alert(searchQuery+" is being searched");
if(!searchQuery.trim()){alert("Stop searching empty strings.");return;}
if(loading){return;}
set_loading(true);
try {
   async function fetch_data() {
    const data=await search_movies(searchQuery);
setmovies(data);
set_error(null);
   }
fetch_data();
} catch (error) {
    set_error("Hmm error occured while searching.");
}finally{
    set_loading(false);
}

}


return (
<div className="home">
 {/* use .map to dynamically show values of an array.    */}

<form onSubmit={handleSearch} className="search-form" >
    <input value={searchQuery} className="search-input"  type="text" placeholder="Type the movie name" onChange={(e)=>{setSearchQuery(e.target.value)}} ></input>
<button type="submit" className="search-button">Search</button>
</form>
{error&& <div className="error-message">{error}</div>}
{loading?<div><h1 style={{color:"violet",fontSize:"50px"}} className="loading">Loading....</h1></div>:<></>}
<div className="movies-grid">
{movies.map(movie=><MovieCard movie={movie} key={movie.id}></MovieCard>)}
</div>

</div>
);


}
export default Home;