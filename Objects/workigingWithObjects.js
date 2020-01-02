detecting properties objects 

if("name" in person){}
hasOwnProperty()
if(person.hasOwnProperty("name"){}

//using loop


var person ={
name: "sophonias", 
programmingLag: "Javascript", 
email: "my@gmail.com",
address: {
street: "1 street name", 
postcode: "1 postcode"
}
}; 


//looping through the properties; 

for(var prop in person){
console.log("Name: " + prop); 
console.log("Value: " + person[prop]); //if we use .prop if you would look  a property name inside the person object, so we use brackets here 
}

 Name: name
 Value: sophonias
 Name: programmingLag
 Value: Javascript
 Name: email
 Value: my@gmail.com
 Name: address
 Value: [object Object] 
 
 2) Object.keys 
 var properties = Object.keys(person); 
 ["name", "programmingLag", "email", "address"]
0: "name"
1: "programmingLag"
2: "email"
3: "address"
