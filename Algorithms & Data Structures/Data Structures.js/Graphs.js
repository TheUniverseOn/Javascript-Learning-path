
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

Graphs that are not strongly connected (sparse graphs)will be represented
by a matrix with many zero entries in the Adjacrncy matrix. 
This means we would waste a space in the computer memory to represent 
edges that do not exist; i.e if we need to find the adjacent 
vertices of a given vertex, we will have to iterate the whole
row even if this vertex has only one adjacent vertex. Another 
reason this might not be a good representation is that the number 
of vertices in the graph may change, and a two dimensional array 
is inflexible. 

The adjacency list 
We can use a dynamic structure to represent graphs as well, called 
an adjacensy list. This consists of a list of adjacent vertices for every vertex of the 
graph. There are a few different wats we can represent this 
data structure. To represent the list of adjacent vertices, we can 
use a list(array), a linked list, or even a hash map or dictionary. 
The following diagram exemplifies the adjacency list data structure, 
    
    
    The incidence matrix 
    we can also rrepresent graph using an incidence matrix. In an 
    incidence matrix, each row of the matrix represents a vertex, and 
each column represents ab edge, 
    
    Creating the graph class
      As usual we declare the skeleton of our class
          function Graph() {
          var vertices = []; // 1
              var adjList = new Dictionary();   //2
}
    
we will use an array to store the names of all vertices of the 
graph(//1), and we will use a dictionary to store the adjacent list(//2) 
    The dictionary will use the name of the vertex as a key abd the list 
    of adjacent as a value. Both the vertices array and the adjList
    dictionary are private attributes of our Graph class. 
    
    Next, we will implement two methods: one to add a new vertex to the 
    graph(because when we instantiate the graph, it will create an empty 
one)and another method to add edges between the vertices. Let's implement 
the addVertex method first, as follows. 

this.addVertex = function(v){
vertices.push(v) ; //3
    adjList.set(v, []); // 4
    
}

The  above method receives a vertex v as a paramater. We will 
add this vrtex to the list of the veryices //3 adn we will
initialize the adjacent list eith an empty array by setting the dictionary
value of the vertex v key with an empty array//4

Now, Let's implement the addEdge method via the following code 


this.addEdge = function(v, w) {
adjList.get(v).push(w) //5
    adjList.get(v).push(v) //6
};

The above method receives two vertices as parameters. First, we will 
add an edge from vertex v to vertex  w  //5  by adding w to the 
adjacency list if v. If you want to implement a directed graph 
line //5  is enough. As we are working with undirected graphs in most
examples jn this chapter, we will also need to add am edge from 
w to v //6

//we are only adding new elements to the array as we have already 
//initialised it jn line 4.

                
                
