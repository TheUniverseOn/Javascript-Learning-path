A promise in JS is exactly what it sounds like - you use it to make a promose to do something, usually asynchronously. When 
the task completes, you either fulfil your promise or fail to so. Promise is a constructor function,so you need to use the new 
keyword to create one. It takes a function,as its argument,with two parameters - resolve and reject. These are methods used to 
determine the outcome of the promise. The syntax look like this: 

const myPromise = new Promise((resolve, reject) => {

}); 

A promise has three states: pending, fulfilled, and rejected. The promise  I created in the above snippet is forever stuck in 
pending state because I did not add away to complete the promise. The resolve and reject parameters given to the promise argument are 
used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. There are 
methods that take an argument, as you can see below: 

const myPromise = new Promise((resolve, reject) =>{
  let responseFromServer;
if(responseFromServer;){
resolve("promise was fulfilled " ); 
}else {
reject("promise was rejected");
})
