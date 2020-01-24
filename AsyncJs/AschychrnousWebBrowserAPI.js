function printHello(){
console.log("Hello");

}
function blockFor1Sec(){
//blocks in the JS thread for 1 second
}

setTimeout(printHello, 0); 
blockFor1Sec()
console.log("Me First"); 




memory(Variable Environment)
----------------------------
printHello: function 
blockFor1Sec: function 







Thread of exection
-----------------------------


setTimeout(printHello, 0)

1)seTimeout is going to connect to Web Browser feature called Timer


2)blockFor1Sec()
(1000ms)
console.log("me first) (1002ms)

printHello(1003sms)








Web Broswer Feature
-------------------
Timer:                        completed: Yes .      on completion 
                                                     printHello is ready to run, but it's going to the callstack instead 
                                                     it gets queued up on the CallBack queue(JS feature); we're not storing a function here, we are referncing a memory(copying) 
                                                     The process of checking is called Event loop
is going to run for 0 ms,  





callstack 
----------
blockfor1Sec()
---------
global 


