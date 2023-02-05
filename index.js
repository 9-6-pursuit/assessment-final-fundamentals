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
 //apply logi from getAllCityNames

  let allTitles = [];
        // emptry array to return all movies
  for (let i = 0; i < movies.length; i++) {
        //loops thrpugh movies
    allTitles.push(movies[i].title)
        //pushes all movies into allTitles
  }
  return allTitles 
  //returns allTitles
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
  //apply logic from oldestCity

  let highScore = null
        // new arry to gather high scores. will return null if movies is empty.
  for (let scores of movies) {
        //loop through all movies 
    if (scores.metascore > highScore) {
        // will iterate through metascores and place the newest highest score found into the highScore array
      highScore = scores.metascore
    }
  }
  return Number(highScore)
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
  // apply logic from getAverageFoundingYearForCapitals


  let avg = 0
        // new array to return average of IMDB ratings
  for (let movie of movies) {
    avg += Number(movie.imdbRating)
        // iterates through movies and coverts the imdb rating into a number, pushing into avg array and adding
  }
  if (movies.length) {
    avg = avg/(movies.length)
        // divides the total of the avg array by the total number of movies.
  }
  return avg
        // returns the the total of the avg array divided by the total number of movies.
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
// apply logic from countByCountry

  let ratings = {}
        // creates an emptry object to return ratings 
  for (i=0; i<movies.length; i++) {
    let mRated = movies[i].rated
        // loops through array of movies and assign new key to movies[i].rated
      if (ratings[mRated]) {
        ratings[mRated] += 1
        // adds the key and increase value
      } else {
        ratings[mRated] = 1
        // no rate, value equals 1
      }
  }
  return ratings

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
function findById(movies, imdbID) {
  //apply logic from findByName

  for (let movie of movies) {
    if (movie.imdbID === imdbID)
          // lopps through movie array and will return a movie title if the value matches
    return movie
  }
  return null
          // if the array is empty or the ids don't match, returns null
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
//apply logic from filterByCountry

  let zhonrah = []
            // new array to store genres
  for (let genres of movies) {
    if (genres.genre.toLowerCase().includes(genre.toLowerCase())) {
      zhonrah.push(genres)  
            // will match movie genres, covert to lower case and push into the array
    }
  }
  return zhonrah
            // returns array of matched genres
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
  // apply logic from getAllCittiesFoundedBeforeYear
  // should return all movies where the `released` date is equal to or less than the year given


  let allMoviesReleased = []
  for (let movie of movies) {
    let yearReleased = movie.released.split(" ") 
         // for future reference....
          //this is a little different from the getAllCittiesFoundedBeforeYear. Need to use the split() method because release contains date, month, year and the test only expects the year.
    if (yearReleased[2] <= year) { 
          //the new split released substring will check at the 2 index for the year, skipping 0 (day) and 1 (month)
      allMoviesReleased.push(movie)
    }
  }
  return allMoviesReleased
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
         // assuming since findBySportsTeam is the only example left, I should appply that logic here. I will see. Take 15 minutes and grab some food.
         // no. this is not the same at all. dios mio.
if (movies.length === 0)
{ 
  return null
}         /// woohoo. free test passed. 45 minutes left. next time no break until done.
  
  let highest = ""
          // a string variable to set the highest movie to.
  let highGross = 0
          // a number to set the highest grossing box office value to.
  
  for (let movie of movies) {
    let boxOfficeNumber = Number(movie['boxOffice'].replace(/[$,]/g, ""))
          // loops through the array and converts the box office number to the expected string.
    if (boxOfficeNumber > highGross) {
      highGross = boxOfficeNumber
      highest = movie['title']
          // iterates through box office totals and repleaces the current highest value with the newest high value, then assigned that movies 'title' to the created variable (highest).
    }
  }

  return highest
          // returns the highest box office grossing movie. 


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
