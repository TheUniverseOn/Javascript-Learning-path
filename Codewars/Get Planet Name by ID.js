The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'

function getPlanetName(id){
var name; 
switch(id){
case 1: 
name = 'Mercury'
break; 
case 2: 
name = 'Venus'
break; 
case 3: 
name = 'Earth'
break; 
case 4: 
name= 'Mars'
break; 
case 5: 
name = 'Jupiter'
break; 
case 6: 
name = 'Saturn'
break; 
case 7: 
name = 'Uranus'
break; 

case 8: 
name = 'Neptune'

default;
}

return name


}



//simpler  alternative 

const getPlanetName(id) => (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[id-1]; 


//tests
Test.assertEquals(getPlanetName(2), 'Venus');
Test.assertEquals(getPlanetName(5), 'Jupiter');
Test.assertEquals(getPlanetName(3), 'Earth');
