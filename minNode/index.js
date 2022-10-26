// <script>

let input=['4','2','5','7','9','2','7 2','9 5','7','9']
let n=Number(input[0])
let id={}
for(let i=1;i<=n;i++){
    id[input[i]]=i
}
// console.log('id',id)
let x=n+1;
let numberOfPaths=Number(input[x])
// console.log(numberOfPaths)
let paths={}
for(let i=n+2;i<numberOfPaths+n+2;i++){
    let [a,b]=input[i].split(' ').map(Number);
    a=id[a];
    b=id[b];
    // console.log(a,b)
if(paths.hasOwnProperty(a)){
    paths[a].push(b)
}else{
    paths[a]=[b]
}
if(paths.hasOwnProperty(b)){
    paths[b].push(a)
}else{
    paths[b]=[a]
}
    
}
// console.log(paths)
 x=n+1+numberOfPaths+1;
let source=id[Number(input[x])]

let end=id[Number(input[n+1+numberOfPaths+1+1])]

// JavaScript program for the above approach

// Function for Depth first Search
function dfs(s, g, v)
{
for(let i of g[s])
{
    
    // If current vertex is
    // not visited yet
    if (!v[i])
    {
        v[i] = 1;

        // Recursive call for
        // dfs function
        dfs(i, g, v);
    }
}
}

// Function to find the out the minimum
// number of edges that must be removed
function deleteEdges(n, m, a, b, edges)
{

// Creating Adjacency Matrix
let g = new Array(m);
for(let i = 0; i < g.length; i++)
{
    g[i] = [];
}

for(let i = 0; i < m; i++)
{
    g[edges[i][0] - 1].push(edges[i][1] - 1);
    g[edges[i][1] - 1].push(edges[i][0] - 1);
}

// Vector for marking visited
let v = new Array(n).fill(0)
v[a - 1] = 1;

// Calling dfs function
dfs(a - 1, g, v);

// Stores the final count
let cnt = 0;

for(let i = 0; i < n; i++)
{
    
    // If current node can not
    // be visited from node A
    if (v[i] == 0)
        continue;
        
    for(let j = 0; j < g[i].length; j++)
    {
        
        // If a node between current
        // node and node b exist
        if (g[i][j] == b - 1)
        {console.log(g[i][j])
            cnt++;
        }
    }
}

// Return Answer
return cnt;
}

// Driver Code
let N = 4;
let M = 4;
let A = 3;
let B = 4;
let edges = [ [ 1,4 ], [3,1  ], [3,4],
        [4,2] ];

console.log(deleteEdges(N, M, A, B, edges));

// This code is contributed by Potta Lokesh

// </script>
