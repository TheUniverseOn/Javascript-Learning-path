const num = 3 
function multiplyBy3(input){
const result = input * 2; 
return result; 
}
const output = multiplyBy3(4); 
const newOutPut = multiplyBy3(10); 

when I execute a function I am creating a new execution context comprising of: 
1. The thread of execution, we go through the code in the function line by line; 
2. A local memory(varibale environment) where anything degined in the functon is stored. 


Memory(Variable environment
num : 3; 
multiplyBy3: Function 
output; 


Global execution context
output = multiplyBy3(4) 
                  |local memory
                  |
                  |input: 4
                  | result: 8 ( return out 8 to global constant)     
                  | 
                
                  
                  
             newOutPut = multiplyBy3(10)
       
                   |local memory
                  |
                  |input: 10
                  | result: 20 ( return out 20 to global constant)     
                  | 


call stack
-----------

-----------
multiplyBy3
---------
Global()
