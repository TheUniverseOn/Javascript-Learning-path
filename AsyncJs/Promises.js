Introducting the readability enhancer: Promises

1. Special objects built into JS that get returned immediately when we make 
a call to a web browser API/feature(e.g fetch) that's setup to return promises(not all are)
2.Promises act as a placeholder for the data we hope to get back from the web browser feature's background work 
3. We also attach the functionality we want to defer running until that background work is done(using the built
in .then method) 

4.Promise objects will automatically trigger that functionality to run 
4.1 The value returned from the web broswer feature's work(e.g the returned data from the server using fetch) will be 
that function's input/argument. 


Using two-pronged 'facade) function that both initiate background web browser work and return a placeholder object 
(promise) immediately in Javascript)
------------------------------------------



function display(data){
console.log(data)

}

const futureData = fetch('https://twitter.com/theuniverseon/tweets/1')

futureData.then(display); //Attaches display functionality
console.log("Me first!"); 




Memory(variable Environment)
-------
display: function 
futureData: {value, (undefined property)}
             {fullfillment:(  })
             fullfillmet is a list we want to auto trigger when value gets updated: 





Thread Execution
-------------------
futureData = fetch('https://twitter.com/theuniverseon/tweets/1')
|
|
(value,......)
(fullfillment,( })
fetch:  a web broswer feature: it's going to immediatly return an object with a property called value and onFulFillment(onFulFillment is an empty arrays that will receive the value it gets back from value; 

fetch; has two consquences: 1. IN JS ((value,......)
(fullfillment,( })

2. One in the browser: XMLHTTP request

|
|
|
|
|
|

futureData.then(display) 
------------------------
.then is saying: Whatever you pass(function defintion) store function we want to autotrigger on value property
being updated.
futureData has a property called onfullfillment [empty Array]
|
|
|
|


2msconsole.log("Me first!"); 







Webrowser features
------------------
xhr        complete         on completion
                               futureData value= .......
|
|
Url(twitter.com)
/theuniverson/1
GET(get some tweets back)

200ms(response from twitter) .   -----> value is filled with the data












How promise deferred functionality gets back into JS to be run 


function display(data){console.log(data})
function printHello(data){console.log("Hello"};)
function blockFor300ms(){/* blocks js thread for 300ms with long for loop */}


//which will run first?

console.log('Me first'); 


