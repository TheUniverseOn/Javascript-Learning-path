/* AVL tree are answer to the problem that BST have: BST can easily 
get out of balance. Even, if it's not the worst case scenario of 
ascending or descending lists being added, even a random distribution
on numbers on a BST is going to pretty heavy in places. There are several 
wats to balance these trees.
AVLs are specialised BSTs. That is to say a valid AVL tree is always 
a valid BST(but not necessarily vice versa ) when you add a new value 
to a AVL tree, you do it the same way. The only difference is on the way 
up your recursive calls you check to see if the node is balanced after you 
added the new node. A tree is out of balance if its subtrees' difference of heights 
is greater than one.

The benefit of all this extra effort is we can now guarntee that we won't hit 
those bad or worse case scenerios of having greatly out of balance trees
and guarantee we won't hit the O(n) cases. our worst cases becomes O(log n)

       5
        \
          8
  -> currenlty valid AVL tree 
  -> .add called with 9
  
  5 - node A
   \ 
    8 - node B 
      \ 
       9 - node C 
( on the way up from the recursion) 
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: Left height is 0, right height is 1, balanced
-> check balance of Node A: left height is 0: right height is 2: unbalanced, 
right heavy: child is right heavy.




-> perform right rotation 
-> swap the value of nodes A and B 
->make node B the left child of node A
->make node C the right child of node A
-> move node C the right child to its left child
(in the case they're both null) 
->make node A's  original left child 
( which was null in this case) the left child of node B 
->UPDATe the heights of all the nodes involved 



left node are nodes who have no children


single rotation 
             8  node A
            /  \ 
 node C  5       9 node /



*/



/*double rotation


 */ 
class Tree { 
constructor() {
this.root = null; 
       
}
add(value) {
if(!this.root) {
this.root = new Node(value);

} else {
this.root.add(value) 

}
}
toObject(){
return this.root;
}

}


class Node {
constructor(value, left = null, right= null) {
this.value = value;
this.left = left;
 this.right = right;  
   this.height = 1; 
       

}
       
       add(value) {

if(value < this.value){
// go left 
if(this.left) {
this.left.add(value);
}
       else {
this.left = new Node(value); 
       } 
       // making sure height stats the same
       if(!this.right || this.right.height < this.left.height){
this.height = this.left.height + 1;

}
}
else {
if(this.right) {
this.right.add(value);
}
       else { 
this.right = new Node(value);
}
     if(!this.left || this.right.height > this.left.height)  {
this.height = this.right.height + 1;


} 
       
}
              this.balance()
}
       balance(){
const rightHeight = (this.right) ? this.right.height : 0;
  const leftHeight = (this.left) ? this.left.height : 0;           

if(leftHeight > rightHeight + 1) { 
const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
 const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;
       
       if(leftRightHeight > leftLeftHeight){
this.left.rotateRR();


}
       
       this.rotateLL();
}
              else {
const rightRight
}
 } 
       
}

