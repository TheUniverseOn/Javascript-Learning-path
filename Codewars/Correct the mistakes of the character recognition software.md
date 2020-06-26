Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

```

function correct(string){

var mapObj = {
5: 'S', 
0: 'O', 
1: 'I', 

}
return string.replace(/S, O, I|5| 0| 1/gi, function(matched){
return mapObj[matched]
})

}
```

Test.assertEquals(correct("L0ND0N"),"LONDON");
Test.assertEquals(correct("DUBL1N"),"DUBLIN");
Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
Test.assertEquals(correct("PAR15"),"PARIS");
