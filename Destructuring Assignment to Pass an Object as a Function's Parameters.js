
In this task I use destructuring assigment withtin the argument to the function "third" to send only max and min inside 
the function 

const GDP = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const third = (function(){
      "use strict";
      return function third ({ max, min}){
          

        //using function argument destructuring 
        return (GDP.max + GDP.min) / 3.0; 
      }
  })();
  console.log(GDP);
  console.log(third(GDP))
