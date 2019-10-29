// //Sorting Algorithms

// const bubbleSort = (nums) => {
//     let swapped = false; 
//     do {
//        for (let i = 0; i< nums.length; i++){
//            snapshot(nums)

// }
//     } while(swapped); 
// }

function bubbleSort(arr){
    const loop = arr.length; 

    //loop for loop length
    for(let i = 0; i < loop; i++){
    
        //cycle through arr items 
        for(let j = 0; j < loop; j++){

        //compare adjecent items 
     
        if(arr[j] > arr[j+1]) {
            //swap
            let temp = arr[j]; 
            arr[j] = arr[j+1]; 
            arr[j+1] = temp; 
        }
    }
    }
    console.log(arr)
    return arr; 
    }
    
bubbleSort([14, 33, 27, 35, 10, 56, 101 ])
console




function bubbleSort5(a){
    const loop = a.length; 

    for(i = 0; i< loop; i++){



        //loop through the loop 

        for(b = 0; b < loop; b++){

            if(a[b] > a[b+1]){
                //swap
                let current = a[b]; 
                a[b] = a[b+1]; 
                a[b+1] = current; 
            }
        }
    }
    console.log(a);
    return a
}
bubbleSort5([2, 292, 28, 29, 40, 50, 3000])



function bubbleSort7(num){
    const loop = num.length; 


    for(i = 0; i < num; i+1){
        for(b = 0; b < num; b++){

            if(b[num] > b[num+1]){
                //swap
                let temp = num[b]; 
                num[b] = num[b+1]; 
                num[b+1] = temp; 
            }
        }
    }
    console.log(num);
    return num; 
}

bubbleSort7([3, 2, 3, 3, 3, 4, 45,5])


function bubbleSort7(z){
    const loop = z.length; 
       
       for(i = 0; i < loop; i++){
           
           //loop through the loop 
           
           for(k = 0; k < loop; k++){
               //compare z array 
               if(z[k] > z[k+1]){


               let current = z[k];
                  z[k] = z[k+1]; 
                   z[k+1] = current; 
              
                     }
                     }
   }
                     console.log(z); //[ 12, 30, 40, 70, 90, 99, 100 ][ 12, 30, 40, 70, 90, 99, 100 ]
                     return z; 
                     }     
                     
                     
                     
bubbleSort7([100,99, 12, 30, 40, 70, 90])



// function factorial(z){
//     if(z === 1){
//         return z; 
//     }
//     return z * factorial(z-1)
// }

// console.log(factorial(10));

function factorial(x) {
  if(x === 1){
    
    return 1; 
    
  } 
  return x * factorial ( x-1) 
}

console.log(factorial(3))