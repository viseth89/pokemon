console.log('hello')


const getMovies = async id => {
    const url = "https://ghibliapi.herokuapp.com/films"
    const res = await fetch(url);
    const movies = await res.json();
    console.log(movies)
}
getMovies();