// const API_KEY= 27076755
// export const popular_movies=async()=>{
// const movies=['Inception',"John Wick","Interstellar","The Dark Knight"]

// const data=await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(movies[0])}&apikey=27076755`);

// }
const apiKey=import.meta.env.VITE_OMDB_API_KEY;
console.log(apiKey);

export const popular_movies = async () => {
  const movies = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "John Wick",
  "Avengers: Endgame",
  "The Matrix",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Lord of the Rings: The Two Towers",
  "The Lord of the Rings: The Return of the King",
  "Fight Club",
  "Pulp Fiction",
  "Forrest Gump",
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "Gladiator",
  "Jurassic Park",
  "Star Wars: Episode IV - A New Hope",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Star Wars: Episode VI - Return of the Jedi",
  "Titanic",
  "Guardians of the Galaxy",
  "Black Panther",
  "Doctor Strange",
  "Iron Man",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Captain America: Civil War",
  "Deadpool",
  "Wonder Woman",
  "Aquaman",
  "Joker",
  "Shazam!",
  "Dune",
  "Tenet",
  "Black Widow",
  "The Suicide Squad",
  "Avatar",
  "Avatar: The Way of Water"
];

 
 const apiKey=import.meta.env.VITE_OMDB_API_KEY;
const movies_data=[];
let cnt=0;
  for (const movie of movies) {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.Title, data.Released, data.Poster);
    movies_data.push({id:cnt,title:data.Title,url:data.Poster,release_date:data.Released});
    cnt++;
  }
for (let index = 0; index < movies_data.length; index++) {
  console.log(movies_data[index]);
  
}

 return movies_data;
 };
export const search_movies=async(movie)=>{
const movies_data=[];
const apiKey = "27076755"; // your OMDb key
 const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    movies_data.push({id:0,title:data.Title,url:data.Poster,release_date:data.Released});
return movies_data;
};
