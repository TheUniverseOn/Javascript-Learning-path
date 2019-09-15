
  const currencyChange = {
      today: {min:77.3, max: 79}, 
      tomorrow: {min: 80, max: 82}
  }; 

  function getTmrwCurrency(avgChange){
      "use strict"; 


  const{tomorrow: {max: MaxTmrwCurrency}} = avgChange; 

  return MaxTmrwCurrency; 

}

console.log(getTmrwCurrency(currencyChange));
