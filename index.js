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
  let movieTitle = []
  for (const movie of movies) {
    movieTitle.push(movie.title)
  }
  return movieTitle
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
  let highestMetascore = 0
  for (const movie of movies) {
    if (movie.metascore > highestMetascore) {
      highestMetascore = movie.metascore
    }
  }
  return Number(highestMetascore)
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
  let avg = 0
  let sum = 0
  for (const movie of movies) {
    a = Number(movie.imdbRating)
    sum += a   
  }

  if (movies.length === 0){
    return 0
  }

  avg = (sum / movies.length)

  return avg
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
  let ratingObj = {}
  for (const movie of movies) {
    if (ratingObj[movie.rated]) {
      ratingObj[movie.rated] +=  1
    } else {
      ratingObj[movie.rated] = 1
    }
  }
  return ratingObj
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
function findById(movies, string) {
  let movieObj = null
  for (const movie of movies) {
    if (string === movie.imdbID) {
      movieObj = movie
    }
  }
  return movieObj
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
function filterByGenre(movies,genre) {
  let movieOfGenre = []
  for (const movie of movies) {
      let uppercaseGenres = []
      uppercaseGenres = movie.genre.toUpperCase()
      if (uppercaseGenres.includes(genre.toUpperCase())) {
        movieOfGenre.push(movie)
      }
    }
    return movieOfGenre
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
  let releasedBefore = []
  for (const movie of movies) {
      let releasedArray = []
      releasedArray = movie.released.split(" ")
      movYear = Number(releasedArray[2])
      if (movYear <= year) {
        releasedBefore.push(movie)
      }
    }
  return releasedBefore
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
  let mostMoney = 0
  let currentHighest
  let moneyArray = []
  let place = 0
  for (const movie of movies) {
    
    let amount
    let newArray = []
    let newerArray = []
    
    let money
    
    newArray = movie.boxOffice.split("$")
    newerArray = newArray[1].split(",")
    amount = newerArray.join('')
    money = Number(amount)
    
    moneyArray.push(money)

    for (let i = 0; i < moneyArray.length; i++) {
      if (moneyArray[i] >= mostMoney) {
        mostMoney = moneyArray[i]
        place = [i]
      }
    }
  }
  if (movies.length === 0) {
    return null
  } else {
    currentHighest = movies[place].title
  }

  
  return currentHighest
}



















  //   let currentHighest = {}
//   for (const movie of movies) {
//     let amount
//     let newArray = []
//     let money
    
//     newArray = movie.boxOffice.split("$")
//     newArray = newArray[1].split(",")
//     amount = newArray.join('')
//     money = Number(amount)

//     currentHighest[movie.title] = money
//     if (currentHighest[movie.title] >= currentHighest[movie.title]) {
//       console.log(currentHighest)
//       return currentHighest[movie.title]
//     }
//   }
//   return currentHighest
// }



















  // let mostMoney
  // let currentHighest
  // let moneyArray = []
  // let place = 0
  // for (const movie of movies) {
    
  //   let amount
  //   let newArray = []
  //   let newerArray = []
    
  //   let money
    
  //   newArray = movie.boxOffice.split("$")
  //   newerArray = newArray[1].split(",")
  //   amount = newerArray.join('')
  //   money = Number(amount)
    
  //   moneyArray.push(money)

  //   for (let i = 0; i < moneyArray.length; i++) {
  //     if (moneyArray[i] >= money) {
  //       place = [i]
  //     }
  //   }
  // }
  // currentHighest = movies[place].title

  // if (movies.length === 0) {
  //   return null
  // }
  // return currentHighest











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
