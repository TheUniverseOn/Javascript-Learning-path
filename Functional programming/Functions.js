import { ZERO } from "long";

/** Function: the semantic relationship between input and output *
 */
function shippingRate(size, weight, speed){ //shippingrate calculates something(size, weight, and speed)
    return ((size + 1) * weight) + speed; 
}

//Side Effects : variables outside of the function
var rate; 
var size = 12; 
var weight  = 4; 
var speed = 5; 
shippingRate(); 
rate; ////undefined


size = 8; 
speed = 6; 
shippingRate(); 
rate; //undefined


var rate; 
rate  = shippingRate(12, 4, 6); 

console.log(rate);//58

/** Side effects to avoid(minimise) 
I/O(console, files, etc)
Database Storage 
Network Calls 
DOM 
TimeStamps 
Random Numbers 
CPU Heat
CPU Time Delay*/


/** Pure Functions
 * It's function: It takes all the inputs as direct, 
 * and all its output as direct and it has no side effects. 
 * 
 */

 //pure

 function addTwo(x, y){
     return x + y; 
 }
//  console.log(addTwo(3,5));//8

 //impure 
 function addAnother(x, y){
     return addTwo(x, y) + z; 
 }
 console.log(addAnother(20,21));//z is not defined. 

 
 
 //What if we use  const to make the function pure; 
 //It's in the spirit of functional programming concept, since the variable doesn't get reassigned. 
 //what if we use var instead of const, would it be a pure function?


// const z  = 1; 
// function addTwo(x, y){
//     return x + y; 
// }
// //  console.log(addTwo(3,5));//8

// //impure 
// function addAnother(x, y){
//     return addTwo(x, y) + z; 
// }
// console.log(addAnother(20,21));//42





   var watchList = [
        {
          "Title": "Inception",
          "Year": "2010",
          "Rated": "PG-13",
          "Released": "16 Jul 2010",
          "Runtime": "148 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Christopher Nolan",
          "Writer": "Christopher Nolan",
          "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
          "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
          "Language": "English, Japanese, French",
          "Country": "USA, UK",
          "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
          //"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
          "Metascore": "74",
          "imdbRating": "8.8",
          "imdbVotes": "1,446,708",
          "imdbID": "tt1375666",
          "Type": "movie",
          "Response": "True"
        }];
    

        const score = watchList.map(item => ({ title: item['Title'], score: item['Metascore'], rating: item['imdbRating']}))
    console.log(score)//[ { title: 'Inception', score: '74', rating: '8.8' } ] 

