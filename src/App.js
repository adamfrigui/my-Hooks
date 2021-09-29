
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovie from  './components/AddMovie'

import {useState} from 'react'

function App() {
  const [movies, setMovies] = useState([
    {
                "Title": "Spider-Man: Homecoming",
                "Year": "2017",
                "imdbID": "tt2250912",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man 3",
                "Year": "2007",
                "imdbID": "tt0413300",
                "vote_average" : "5",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
            },
            {
                "Title": "The Amazing Spider-Man 2",
                "Year": "2014",
                "imdbID": "tt1872181",
                "vote_average" : "3",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man: Into the Spider-Verse",
                "Year": "2018",
                "imdbID": "tt4633694",
                "Type": "movie",
                "vote_average" : "2",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man: Far from Home",
                "Year": "2019",
                "imdbID": "tt6320628",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            },
             {
                "Title": "Star Wars",
                "Year": "1977",
                "imdbID": "tt0076759",
                "Type": "movie",
                "vote_average" : "1",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode V - The Empire Strikes Back",
                "Year": "1980",
                "imdbID": "tt0080684",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VI - Return of the Jedi",
                "Year": "1983",
                "imdbID": "tt0086190",
                "Type": "movie",
                "vote_average" : "2",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VII - The Force Awakens",
                "Year": "2015",
                "imdbID": "tt2488496",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
            },
             {
                "Title": "Wonder Woman",
                "Year": "2017",
                "imdbID": "tt0451279",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
            },
            {
                "Title": "Wonder Woman 1984",
                "Year": "2020",
                "imdbID": "tt7126948",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg"
            },
            {
                "Title": "The Shawshank Redemption",
                "Year": "1994",
                "imdbID": "tt0111161",
                "Type": "movie",
                "vote_average" : "5",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
                "Title": "Infinite",
                "Year": "2021",
                "imdbID": "tt6654210",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZTU5MmY0ZjctYTNlOS00MDIyLWJkZTAtNzBiOTkyNWI5MGY2XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"
            },
            {
                "Title": "Black Widow",
                "Year": "2021",
                "imdbID": "tt3480822",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Free Guy",
                "Year": "2021",
                "imdbID": "tt6264654",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            }])
  const [rating, setRating] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [showList, setShowList] = useState(true)

  const addNewMovie = (movie) => {
      setMovies([...movies, movie])
  }
  const handleRating  = (num_stars) => {
    setRating(num_stars)
  }
  const handleKeyword = string =>{
    setKeyword (string)
  }
  
  return (
    <div className="App">
    {showList ?
      <>
     <Filter handleRating={handleRating} rating={rating} handleKeyword={handleKeyword}/>
     <button type='submit' onClick={e =>setShowList(false)}>add new movie</button>
     <MovieList 
     movies={movies.filter(el => el.vote_average >= rating && el.Title.toLowerCase().includes(keyword.toLowerCase()) )}
     />
     </> : <AddMovie addNewMovie={addNewMovie} setShowList={setShowList}/>}
    </div>
  );
}

export default App;
