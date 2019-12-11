
//sum all numbers in this range 

function sumAll(arr) {
    var list = [];

    var smaller = Math.min(arr[0], arr[1]);
    var bigger = Math.max(arr[0], arr[1]);

    for (var i = smaller; i <= bigger; i++) {
        list.push(i);
    }

    var total = list.reduce(function(a, b) {
        return a + b;
    });

    return total;
}
 


console.log(sumAll([1, 5])); //15