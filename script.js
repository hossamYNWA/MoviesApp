const api_url  ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05275f5a5c77e7e181f708cac967cb53&page=1",
img_path = "https://image.tmdb.org/t/p/w1280",
search_api = 'https://api.themoviedb.org/3/search/movie?api_key=05275f5a5c77e7e181f708cac967cb53&query="',
main = document.querySelector(".main"),
 form = document.getElementById("search_fld"),
    search = document.getElementById("search");

async function getMovie(url)
{
    const res = await fetch(url);
    const data = await res.json();
    main.innerHTML = "";
    data.results.forEach((movie) => {
            main.innerHTML += `<div class="movie">
            <div class="info">
               <img src="${img_path + movie.backdrop_path}" alt="">
               <h4>${movie.title}</h4>
               <span class = ${movie.vote_average > 6.5?"green":movie.vote_average>5?"yellow":"red"}>${movie.vote_average}</span>
            </div>
            <div class="breif">${movie.overview}</div>
         </div>`;

    })
}
getMovie(api_url);


    form.addEventListener("submit", function (e)
    {
        e.preventDefault();
        let searchTerm = search.value;
        if (searchTerm && searchTerm != "" )
        {
            getMovie(search_api + searchTerm);
            search.value = "";
        }
        else
        {
            window.location.reload();
        }
    })