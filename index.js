import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(getFinals(fifaData));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsTeams = data.filter(function (item) {
        return item.Stage === "Final";
    });
    return finalsTeams
}
console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {
    return getFinals(data).map(item => item.Year)
};
console.log(getYears(fifaData, getFinals));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(data, getFinals) {
    const newArray = getFinals(data);
    const winners = newArray.map(function (item) {
        if (item["Away Team Goals"] > item["Away Team Goals"]) {
            return item["Home Team Name"]
        } else {
            return item["Away Team Name"]
        }
    })
    return winners
};

console.log(getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(data, getYears, getWinners) {
    const newWinners = getWinners(data, getFinals)
    const newYears = getYears(data, getFinals)
    return newWinners.forEach(function (item, index) {
        console.log(`In ${newYears[index]}, ${item}`)
    })
};

console.log(getAllWinners(fifaData, getYears, getWinners));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    let count = 0;
    const cupWins = getFinals(data);
    const tiArray = cupWins.map(function (item) {
        if (item["Away Team Goals"] > item["Away Team Goals"]) {
            return item["Away Team Initials"]
        } else {
            return item["Home Team Initials"]
        }
    })
    tiArray.forEach(function (item) {
        if (item === teamInitials) {
            count = count + 1
        }
    })
    return count
    // return tiArray
};

console.log(getCountryWins(fifaData, "BRA"));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageHomeGoals = data.reduce(function (accumulator, item) {
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"]
    }, 0)
    return (averageHomeGoals / data.length).toFixed(2)
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */