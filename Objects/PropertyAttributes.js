Changing Property attributes 


var obj = {
type: "Rectangle", 
width: 10, 
height: 5
}; 

 // Object.defineProperty(obj, "type", {enumerable: false}); //making the property so it can not disovere by for in loop 
 obj.propertyIsEnumerable('type'); = false; 



//configurable = you can not delete that property 

Object.defineProperty(obj, "type", {configurable: false});
delete obj.width; = true; 
obj = {height: 5, type: "Rectangle"}

delete obj.type; 
obj = {height: 5, type: "Rectangle"}
