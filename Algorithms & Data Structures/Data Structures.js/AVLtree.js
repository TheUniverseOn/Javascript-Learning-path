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



*/ 
