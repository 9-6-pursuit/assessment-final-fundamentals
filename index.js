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


function getAllMovieTitles(movies) {
  return movies.map(movie => movie.title) || [];
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


function getHighestMetascore(movies) {
  return movies.reduce((max, movie) => Math.max(max, movie.metascore), 0) || 0;
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


function getAverageIMDBRating(movies) {
  if (!movies || !movies.length) 
  return 0;

  const sum = movies.reduce((acc, movie) => {
    const rating = parseFloat(movie.imdbRating);
    return isNaN(rating) ? acc : acc + rating;
  }, 0);
  return sum / movies.length;
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

function countByRating(movies) {
  if (!movies.length) 
  return {};

  return movies.reduce((counts, movie) => {
    const rating = movie.rated;
    counts[rating] = (counts[rating] || 0) + 1;
    return counts;
  }, {});
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

function findById(movies, id) {
  if (!movies.length) 
  return null;
  return movies.find(movie => movie.imdbID === id) || null;
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

// function filterByGenre(movies, genre) {
//   if (!movies || !movies.length) 
//   return [];

//   genre = genre.toLowerCase();
//   return movies.filter(movie => {
//     if (!movie.genres) {
//       return false;
//     }
//     return movie.genres.map(g => g.toLowerCase()).includes(genre);
//   });
// }

function filterByGenre(movies, gen) {
  let result = []
  for (m of movies){
    if ((m.genre.toLowerCase()).includes(gen.toLowerCase())){
      result.push(m)
    }
  }
  return result
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

function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  return movies.filter(movie => new Date(movie.released).getFullYear() <= year);
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

// function getBiggestBoxOfficeMovie(movies) {

//   if (!movies || !movies.length) 
//   return null;

//   let biggestBoxOffice = movies[0].boxOffice;
//   let biggestBoxOfficeMovie = movies[0].title;

//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].boxOffice > biggestBoxOffice) {
//       biggestBoxOffice = movies[i].boxOffice;
//       biggestBoxOfficeMovie = movies[i].title;
//     }
//   }
//   return biggestBoxOfficeMovie;
// }

function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0){
    return null
  }
  let max =0
  let title = ''
    for (movie of movies) {
      boxOffice = Number((movie.boxOffice.slice(1)).split(",").join(""))
  
    if(boxOffice > max){
      max = boxOffice
      title = movie.title
    }    
      }  
    return title
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
