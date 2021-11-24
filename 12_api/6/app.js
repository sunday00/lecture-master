const ul = document.querySelector('ul')

const api_key = "c50e46af5dfb74c52d2af87d8b8de594";
const v4_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTBlNDZhZjVkZmI3NGM1MmQyYWY4N2Q4YjhkZTU5NCIsInN1YiI6IjYxOWRjZmVmNGY5YTk5MDAyNDU1NzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kQrXG0vCFgb59OBRYJwldRYUpuchAqC36aaqsGTN0E0";
// const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
const url = `https://api.themoviedb.org/4/list/1?api_key=${api_key}`;
axios.get(url).then(res => {
  res.data.results.forEach(r => {
    console.log(r);

    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = "https://image.tmdb.org/t/p/w300" + r.backdrop_path
    li.appendChild(img)
    ul.appendChild(li)
  })
})