const Movie = ({ movie, bookmarkFavorite }) => {

  const book = () => bookmarkFavorite(movie);

  return (
    <article className="article-item" id="article-template">
      <div className="image-wrap"><img src={movie.image} alt={movie.title} /></div>
      <h2>{movie.title}</h2>
      <span className="date">5 minutes ago</span>
      <a href="/">Read more</a>

      <button onClick={book}>Bookmark as favorite</button>
      <div className="clearfix"></div>
    </article>
  )

}

export default Movie;
