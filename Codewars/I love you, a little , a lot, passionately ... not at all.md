
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.




```
function howMuchILoveYou(nbPetals) {
    // your code
//     var mapObj = {
//     7: 'I love you', 
//     2: 'a little',
//     3: 'a lot',
//     4: 'passionately',
//     5: 'madly',
//     6: 'not at all',
//     }
    
// return nbPetals.toString().replace(/I love you,a little,a lot,passionately,madly,not at all|7|2|3|4|5|6/gi, function(matched){
// return mapObj[matched]
// })

//}
const girlSays = [
   'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
  
const stopage = girlSays.length -1
const out = []
let j = 0

for(let i = 0; i < nbPetals; i++){
out.push(girlSays[j])

if(j >= stopage){
j = 0
continue
}

j++
}

const finalPetal = out[out.length-1]
return finalPetal 

}

```




### Tests 
function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}
Test.describe("howMuchILoveYou",function() {
    Test.it("Basic tests",function() { 
        testing(howMuchILoveYou(7),"I love you")
        testing(howMuchILoveYou(3),"a lot")
        testing(howMuchILoveYou(6),"not at all")
      
})})
