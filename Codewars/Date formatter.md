


You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.

Example: getDate(1481020142, 'en-GB') -> '06/12/2016'

A list with the different locale formats is pre-loaded as "formats".
```

function getDate(uts, loc){
  // Your code here
  return require('moment').unix(uts).format((formats[loc] || 'DD/MM/YYYY').toUpperCase());
}
```


Test.describe('Basic tests',_=>{

it ("en-GB: dd/mm/yyyy", function(){
Test.assertEquals(getDate(1481020142, 'en-GB'), '06/12/2016');
});
it ("en-US: m/d/yyyy", function(){
Test.assertEquals(getDate(1481020142, 'en-US'), '12/6/2016');
});
it ("de-DE: dd.mm.yyyy", function(){
Test.assertEquals(getDate(1481020142, 'de-DE'), '06.12.2016');
});

});
