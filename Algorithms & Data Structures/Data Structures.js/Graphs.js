
vertices connected by an edge = adjacent vertices 
    A
   /  \
   B   C
   /     \
   E      G
   A & B, A & C are adjacent. A & E are not adjacent. A degree
   of a vertex consists of the number of adjacent verrtices. 
i.e A is connected to other vertices therefore,  A has degree 2. 
c has 1 degree as its connected to too one vertex. 

A path is a sequence of a consecutive vertices, such as v1, v2,....vk
where vi and vi+1 are adjacent. Using the graph from the previous 
diagram as an example, we have the paths A B E and A C G. 

A simple path does not contain repeated vertices. 
A graph is acyclic if it does not have cycles. A graph is connected 
if there is a path between every pair of vertices. 

Directed and Undirected graphs. 
Graphs can be undirected(where edges do not have a direction)
directed(digraph) : edges have direction. 

A graph is strongly connected if there is a path in both directions 
every direction between every pair of vertices. 

Graphs can also be unweighted : Edges have no weight

Representing a graph
there are few ways in which we can represent , the most common implementation 
is the adjacency matrix. Each node is associated with an integer, which is the 
array index. we will represent the connectevity between vertices 
using a two-dimensional array, as array[i][j]=== 1 if there
is an edge from the node with index i to the node with index j or 
as array[i][j] === 0 otherwise. 

Graphs thar are not strongly connected (sparse graphs)will be represented
by a matrix with many zero entries in the Adjacrncy matrix. 
This means we would waste a space in the computer memory to represent 
edges that do not exist; i.e if we need to find the adjacent 
vertices of a given vertex, we will have to iterate the whole
row even if this vertex has only one adjacent vertex. Another 
reason this might not be a good representation is that the number 
of vertices in the graph may change, and a two dimensional array 
is inflexible. 
