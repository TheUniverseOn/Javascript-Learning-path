/*A promise in JS is exactly what it sounds like - you use it to make a promose to do something, usually asynchronously. When 
the task completes, you either fulfil your promise or fail to so. Promise is a constructor function,so you need to use the new 
keyword to create one. It takes a function,as its argument,with two parameters - resolve and reject. These are methods used to 
determine the outcome of the promise. The syntax look like this: */

const myPromise = new Promise((resolve, reject) => {

}); 

/*A promise has three states: pending, fulfilled, and rejected. The promise  I created in the above snippet is forever stuck in 
pending state because I did not add away to complete the promise. The resolve and reject parameters given to the promise argument are 
used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. There are 
methods that take an argument, as you can see below: */

const myPromise = new Promise((resolve, reject) =>{
  let responseFromServer;
if(responseFromServer;){
resolve("promise was fulfilled " ); 
}else {
reject("promise was rejected");
})


/*Handling a fulfilled Promise with then 
Promises are most useful when you have a process that takes an unknown amount of time in your code(i.e seomething asychronous), 
often a server request. When you make a server request it takes some amount of time, and after it completes you usually 
want to do something with the response from the server. This can be achieved by using the then method. The then method is 
executed immediately after a promise is fulfilled with resolve. Here is how*/
const myPromise = new Promise((resolve, reject) =>{
  let responseFromServer;
if(responseFromServer;){
resolve("promise was fulfilled " ); 
}else {
reject("promise was rejected");
})

myPromise.then(result => {
  console.log(result)
})
  
 //result comes from the argument given to the resolve method
  
  
  /* handling a rejected promise with catch
  catch is a method used when your promise has been rejected. It is executed immediately after a promise's reject method 
  is called. Here is the sytanx*/
  
  myPromise.catch(error => {
    console.log(error)
  })
//error is the argument passed into the reject method
