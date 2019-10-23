// Bubble sort- Algorithm, 

// It's simple and good for small datasets. 

// Time - Worse case: O(n^2)
// Time - Best case: O(n)

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
    
bubbleSort([14, 33, 27, 35, 10, 56, 101 ]); //[ 10, 14, 27, 33, 35, 56, 101 ]


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
                     console.log(z); //[ 12, 30, 40, 70, 90, 99, 100 ]
                     return z; 
                     }     
                     
                     
                     
bubbleSort7([100,99, 12, 30, 40, 70, 90])
