import { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {

  const name = "Rafael";

  const [movies, setMovies] = useState([])
  const [favorite, setFavorite] = useState({})

  useEffect(() => {
    setMovies([
      { title: 'Batman vs Superman', year: 2017, image: "https://cde.laprensa.e3.pe/ima/0/0/1/2/8/128722.jpg" },
      { title: 'Gran torino', year: 2015, image: "https://www.marquid.com/wp-content/uploads/2015/05/gran-torino.jpg" },
      { title: 'The Lord of the rings', year: 2003, image: "https://sfo2.digitaloceanspaces.com/estaticos/var/www/html/wp-content/uploads/2019/07/El-sen%CC%83or-de-los-anillos.jpg" }
    ])
  }, [])

  const changeTitle = () => {
    const random = Math.floor(Math.random() * 3);
    movies[random].title = 'Title changed';
    setMovies([...movies]);
  }

  const myFavorite = (movie) => {
    setFavorite(movie);
  }

  const pStyle = {
    background: 'green',
    color: 'white',
    padding: '10px'
  }

  const favoriteMovie = (favorite.title ?
    <p style={pStyle}>
      <strong>The favorite movie is: </strong>
      <span>{favorite.title}</span>
    </p> :
    <p>No favorite movie</p>)

  return (
    <div id="content" className="movies">

      <h2 className="subheader">Movies</h2>
      <p>Selection of favorite movies of: {name}</p>

      <p><button onClick={changeTitle}>Change title</button></p>

      {favoriteMovie}

      <div id="articles" className="movies">
        {movies.map((movie, i) => <Movie movie={movie} bookmarkFavorite={myFavorite} key={i} />)}
      </div>

    </div>
  );
}

export default Movies;
