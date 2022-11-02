// level-mid
/*

Make Leaderboard Ended
Description

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

- If two students get same marks they get same rank

- The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Refer to the sample test case for better understanding

Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm
*/

//Solution


function runProgram(input) {
    var a=input.split('\n')
    var n=Number(a[0])
    var arr=[]
    for(var i=0;i<n;i++){
        arr.push(a[i+1].split(' '))
    }
    //console.log(arr)
        op(n,arr)

    function op(n,arr){
        var obj={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
        
        
        //console.log(obj[arr[1][0][0]],r)
        
        for(var i=0;i<n;i++){
            for(var j=0;j<n-1-i;j++){
            if(Number(arr[j+1][1])>Number(arr[j][1])){
                var x=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=x
            }else if(Number(arr[j+1][1])==Number(arr[j][1])){
                for(var z=0;z<arr[j][0].length;z++){
                if(obj[arr[j+1][0][z]]<obj[arr[j][0][z]]){
                    var x=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=x
                break;
                }else if(obj[arr[j+1][0][z]]>obj[arr[j][0][z]]){
                    break
                }
            }}
        }}
       // console.log(arr)
}
console.log('1'+" "+arr[0][0])
var c=1
var d=2
for(var i=1;i<n;i++){
    if(arr[i][1]==arr[i-1][1]){
        console.log(''+c+" "+arr[i][0])
    }else{c=d;console.log(''+c+" "+arr[i][0])}
    d++
}
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}