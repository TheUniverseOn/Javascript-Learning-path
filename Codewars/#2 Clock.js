Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

//solution 
function past(h, m, s){
  //#Happy Coding! ^_^
 let  hour = h *3600000 
  let minute = m* 60000
  let seconds = s * 1000
  let sum = [hour, minute, seconds]
 return  sum.reduce((total, accu)=> total + accu, 0)
}


Test.describe("Fixed Tests", _ => {
  Test.it("Tests", __ => {
    Test.assertEquals(past(0,1,1),61000)
    Test.assertEquals(past(1,1,1),3661000)
    Test.assertEquals(past(0,0,0),0)
    Test.assertEquals(past(1,0,1),3601000)
    Test.assertEquals(past(1,0,0),3600000)
  });
});

