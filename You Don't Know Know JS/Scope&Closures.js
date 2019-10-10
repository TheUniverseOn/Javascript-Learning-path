
function a (){
    console.log('in fn a'); 
    
    function b(){
      console.log('In fn b');
      
      function c (){
        console.log('in fn c');
      }
      c();
    }
    b();
  }
  a();