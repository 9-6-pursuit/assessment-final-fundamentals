/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) 
{
  movieTitles = []
  for (const movie of movies) 
  {
  movieTitles.push(movie.title)
   
  }
  return movieTitles
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) 
{
let highest = 0
 for (let i = 0; i < movies.length; i++) 
  {
    Number(movies[i].metascore)
    if (Math.max(...movies[i].metascore, movies[i].metascore) > highest)
    {
    highest = Math.max(...movies[i].metascore, movies[i].metascore)
    }
  }
  return highest
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) 
{
  if (movies.length === 0)
  {
    return 0
  }
  let avg = [];
  for (let i = 0; i < movies.length; i++) 
  {
    let rates = Number(movies[i].imdbRating)
    avg.push(rates)
  }
  let sum = 0;
  for(const summ of avg)
    {
        sum += summ
    }
    return (sum / avg.length)

}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) 
{
  let count = {}
  for (let i = 0; i < movies.length; i++) // CHECKS IF KEY EXISTS ALREADY IN THE OBJECT
  {
    if (count[movies[i].rated])
    {
      count[movies[i].rated]++ 
      // IF SO INCREASE THE COUNT AND MOVE TO THE NEXT INDEX
    }
    else {
  // IF NOT A KEY ALREADY ADD THE KEY +1 IN VALUE, WILL REPEAT THRU (LOOP) AND ADD 1 REGARDLESS IF IT'S EXISTING OR NOT BECAUSE OF ABOVE STATEMENT.  ABOVE CONDITION HANDLES THE REPEAT KEYS (INDEXES OF ARRAY).
      count[movies[i].rated] = 1 
      //THIS CONDITION HANDLES NEW KEYS(INDEXS OF ARRAY).
    }
    }
    return count
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id)
{
  for (let i = 0; i < movies.length; i++)
  {
    if(movies[i].imdbID === id)
    {
    return movies[i]
    }
  }
  return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) 
{
  let arr = []
  for (const genres of movies)
  {
  if(genres.genre.toUpperCase().includes(genre.toUpperCase()))
  {
    arr.push(genres)
  }
}
return arr
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) 
{
  releasedArr = []
  for (const releaseYr of movies) 
  {
   let newYear = releaseYr.released.split(" ")
    if(newYear[2] <= year)
    {
    releasedArr.push(releaseYr)
    }
  }
  return releasedArr
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let biggest = 0
  let bestMovie = ""
  if(movies.length === 0)
  {
    return null
  }
  for (const movie of movies){
    let newBox = (movie.boxOffice).slice(1)
    newBox = newBox.split(",")
    newBox = newBox.join("")
    if (Number(newBox) > biggest){
      biggest = newBox
      bestMovie = movie.title
    }
  }
  return bestMovie
 
}


// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
