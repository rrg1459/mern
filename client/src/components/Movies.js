import { useEffect, useState } from "react";
const Movies = () => {

  const name = "Rafael";

  const [movies, setMovies] = useState([])
  const [favorite, setFavorite] = useState({})

  useEffect(() => {
    setMovies([
      { title: 'Batman vs Superman', year: 2017, image: "https://cde.laprensa.e3.pe/ima/0/0/1/2/8/128722.jpg" },
      { title: 'Gran torino', year: 2015, image: "https://www.marquid.com/wp-content/uploads/2015/05/gran-torino.jpg" },
      { title: 'The Lord of the rings', year: 2003, image: "https://sfo2.digitaloceanspaces.com/estaticos/var/www/html/wp-content/uploads/2019/07/El-sen%CC%83or-de-los-anillos.jpg" },
    ])
  }, [])


  return (
    <div id="content" className="movies">

      <h2 className="subheader">Movies</h2>
      <p>Selection of favorite movies of: {name}</p>

      <div id="articles" className="movies">

        {
          movies.map((movie, i) => {

            return (
              <article key={i} className="article-item" id="article-template">
                <div className="image-wrap"><img src={movie.image} alt={movie.title} /></div>
                <h2>{movie.title}</h2>
                <span className="date">5 minutes ago</span>
                <a href="/">Read more</a>
                <div className="clearfix"></div>
              </article>
            )
          })
        }

      </div>



    </div>
  );
}

export default Movies;
