/*Binary Search Tree 🌲 

 A node in BST has zero, one or two subtrees/ children. Every element in the left subtree Is lesser
 than the value of the node and every element in the right is greater than the value of the node.
 Like linked lists we just have to change the pointers when we add new elements */ 


//Best get an average case of o(log n) in gets, adds and deletes, but they can have a worst case of
//o(n) if you do something like add a sorted list to a BST.




/* Name your class Tree 
 make another class called node. 
 
 make BST. Your Tree class will keep track of a root which will be the 
 first item added to your tree. if the item is less than the value of that node
 it will go into its left subtree. if greater it will go tot the right subtree
 
 use the following names for the properties 
 value - integer - value being contained in the node.
 left-  Node/object - the left node which itself may be another tree
 right - Node/object -the right node which itself may be another tree
 
 
 
 */ 

class Tree {
constructor() {
this.root = null;
}
 
 toObject(){
return this.root; 
 }
add(value) {
if(this.root = null){
this.root = new Node(value);
 return; 
}
 let current = this.root; 
 while(true){
if(current.value > value ) {
// go left 
if(current.left){
current = current.left; 

}
  else {

   current.left = new Node(value); 
   return;
   
  }

 }
  else {
   // go right 
   
   
   if(current.right){
current = current.right; 

   }
else {
current.right = new Node(value); 
 return; 
                     
}
  }
}

}
}

class Node {
constructor(value, left= null; right = null; 
             this.value = value; 
             this.left = left; 
             this.right = right; 
            
}
             
             
             
             
            // unit tests 
             xdesribe('Binary Search Tree', function(){
it('creates a correct tree', () => {
const nums = [3,7,4,5,6,1,10,2,9,8]; 
 cons tree = new Tree(); 
 

}


}




