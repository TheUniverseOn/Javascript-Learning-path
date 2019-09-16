//1.

var person = {}; 
person{'firstname'} = 'Zozo'; 
person{'lastname'} = 'Ora'; 
console.log(person.firstname) //  'Zozo'; 

console.log(industries['induname']); 



var industry = {}; 
industry['industryname'] = 'fintech'; 
industry["size"] = "billions";

console.log(industry.size) //Billions


var incubator = {};
incubator['companyname']  = 'Y-Combinator'; 
incubator['CEO'] = 'Michael Seibel'; 

console.log(incubator.companyname); // Y-Combinator


var carTypes = {}; 
carTypes["carname"] = "Defender"; 
carTypes["price"] = "50k"; 

console.log(carTypes.carname) //"Defender



//2.
person = {'firstname': 'Zozo', lastname: 'Ora'}

console.log(person['firstname']); 

// expected output: "Zozo"



const firm = {"vcname": "A16Z", "location": "California"}

console.log(firm["vcname"] //A16Z
            
            
const Industries = {"IndustryName": "HealthTech", "Size": "XBillion"}
            
console.log(Industries["IndustryName"]);
           

            
            
           



/*One can think of an object as an associative array(a.k.a map, dictionary, hash, lookup table)
The keys in this array are the names of the object's properties /  
There are two ways to access properties: dot notation and bracket notation */
