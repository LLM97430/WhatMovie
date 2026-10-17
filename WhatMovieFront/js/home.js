const queryBtn = document.getElementById("query-btn");
const queryInput = document.getElementById("query");
const movieQuery = document.getElementById("movie-query");
const seriesQuery = document.getElementById("series-query")

queryBtn.addEventListener("click", query);


   function query(movieQuery, queryInput) {

   const myHeaders = new Headers();
   myHeaders.append("Authorization", "Bearer ");
   myHeaders.append("api_key", "••••••");
   const query = queryInput;

   if(movieQuery) {
      const type="movie"; 
   } else {
      const type="tv";
   };

   const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
   };

   fetch("https://api.themoviedb.org/3/search/${type}?query=${query}&append_to_response=watch/providers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
   .catch((error) => console.error(error));
}