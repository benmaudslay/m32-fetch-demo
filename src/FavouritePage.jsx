export const FavouritePage = ({ data, handleRemoveFav }) => {
  return (
    <div>
      <h1>Favourites List</h1>
      {data.map((movie, index) => {
        return (
          <li key={index}>
            <h4>{movie.original_title}</h4>
            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <button onClick={() => handleRemoveFav(index)}>remove to favourites</button>
          </li>
        )
      })}
    </div>
  )
}
