When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".


function switchItUp(number){
//Write your own Code!
var mapObj = {
0: 'Zero',
1: 'One', 
2: 'Two', 
3: 'Three', 
4: 'Four', 
5: 'Five', 
6: 'Six', 
7: 'Seven', 
8: 'Eight', 
9: 'Nine',

}


return number.toString().replace(/Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine|0|1|2|3|4|5|6|7|8|9/gi, function(matched){
return mapObj[matched]
})
}


Test.assertEquals(switchItUp(1),"One");
Test.assertEquals(switchItUp(3),"Three");
Test.assertEquals(switchItUp(5),"Five");
