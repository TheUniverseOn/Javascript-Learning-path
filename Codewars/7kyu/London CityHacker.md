You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

### My solution

function londonCityHacker(journey) {

let busfare =  journey.filter(j=> typeof j ==='number' ).map(i=> i=1.50 ).reduce((total, curr)=> total+curr,0)
  

let trainfare = journey.filter(j=> typeof j ==='string').map(i=> i=2.40).reduce((total, curr)=> total+curr, 0) 
let final = (busfare+trainfare)
for(let i=0; i< journey.length; i++){
  if(typeof journey[i]==='number'&& typeof journey[i+1]==='number'){
    final-=1.5
    i++
  }
}

### Another solution 
```
function londonCityHacker(journey) {
let busFare = 0; 
return `${ journey.map((j, index)=> isNan(j) ( busFare=0, 2.4) : busFare=1.5-busFare ).reduce((v,w)=> v+w, 0).toFixed(2)}`

}
```
### tests
Test.assertEquals(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
Test.assertEquals(londonCityHacker(['Piccidilly', 56]), "£3.90");
Test.assertEquals(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
Test.assertEquals(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
Test.assertEquals(londonCityHacker([386, 56, 1, 876]), "£3.00");
Test.assertEquals(londonCityHacker([]), "£0.00");

