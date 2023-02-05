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
  let movieTitleList = []
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    let movieTitle = movie.title
    movieTitleList.push(movieTitle)
  }
return movieTitleList;
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
  let highestScore = 0;

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];

    if (movies.length === 0) {
      return highestScore;
    }
    if (Number(movie.metascore) > Number(highestScore)){
       highestScore = movie.metascore;
    }
  }
  return Number(highestScore);
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
  let imdbAverage = 0;

  if (movies.length === 0) {
    return imdbAverage;
  }
  for (let m = 0; m  < movies.length; m ++) {
    const movie = movies[m];
    imdbAverage += Number(movie.imdbRating)
  }
  return imdbAverage/movies.length;
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
  let ratingObj = {};

  if (movies.length === 0) {
    return ratingObj;
  }

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];
    let rating = movie.rated;

 /* this code was flipping me out! refer to slack for original code;
this code is much clearer and works. Here I am saying if my object (ratingObj) has the property I am going to add 1 to it's value, which is initially 0 for all property values because ratingObj is an empty object I created. for the if state, it is saying "if property has __(rating)___ property add 1 to the value; if not add property key and value; then set value =1; 

Tada!!

my original code used the variable "count" which was returning an inaccurate value because it was one variable that was being used for all properties within the new object. Thus, instead of each property having its own unique count variable, the count variable was holding over (or keeping) the previous value and adding it to the next item in the array and putting that value into the object, which was erroneous. 
*/

    if(ratingObj.hasOwnProperty(rating)){
      ratingObj[rating] += 1;
    } else {
      ratingObj[rating] = 1;
    }
  }
  return ratingObj;
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
  if (movies.length === 0){
    return null;
  }
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if(movie.imdbID === id) {
      return movie;
    }
  }
  return null;
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
function filterByGenre(movies, genre) {
  let movieArr = [];

  if (movies.length === 0){
    return movieArr;
  }
for (let m = 0; m < movies.length; m++) {
  const movie = movies[m];
  if (movie.genre.toLowerCase().includes(genre.toLowerCase())){
    movieArr.push(movie)
  }
}
return movieArr;
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
  let movieArr = [];
  
  let reg = /\d+/g;

  /* to return numbers within a string I used \d+ ;
  d stands for "digits" and the "+" tells the system we are looking numbers with at least 1 digit. the /g is a standard ECMA 6 code modifier for global, which - in this case - means all numbers (decimals, intergers, etc)
  */

  if (movies.length === 0){
    return movieArr;
  }

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];
    let num = movie.released.match(reg)

/* match is cool, it's similar to includes but less strict. I used a regEx with match. a regEx is a sequence of characters that forms a search pattern. I used the regEx for digits (global) and set it equal to a variable called "reg." I then searched for characters that align with the reg pattern using the match methood which returned all numbers (num) as an array. 
- match returns as an array
*/




    for (let r = 0; r < num.length; r++) {
      const releasedYear = num[r];
      if (releasedYear.length === 4) {
        if (releasedYear <= year) {
          movieArr.push(movie);
        }
      }
    }
  }
  return movieArr;
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
  let string = ''
  let highestBoxOffice = 0

  if (movies.length === 0){
    return null;
  }

  for (let m= 0; m < movies.length; m++) {
    const movie = movies[m];
    let bigHit = Number(movie.boxOffice.slice(1).split(",").join(""))
    if(bigHit > highestBoxOffice) {
      highestBoxOffice = bigHit
      string = movie.title;
    }
  }
  return string;
}

  /*I used slice method at index 1 to return the # part without dollar sign then split at the commas then used join to return one whole number. I tried to used regEx for this one, but too much work. it would take way more steps because with setting a regEx value then using match... 

learning takeaways:
-slice is a string method that returns an inclusive starting point to the end when a second parameter is not added
-split turns our string into an array with the elements seperated at the position it is split at (in this case the commas in the number string)
- join is an ARRAY method that joins all array elements into a string it is similar to the toString() method except the toString() method joins the array elements seperated by commas and we can set the seperator using the .join method ('') 
  */


   

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
