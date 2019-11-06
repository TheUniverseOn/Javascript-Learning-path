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


*/



