/*
Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.
*/
function runProgram(input) {
    var a=input.trim().split("\n")
    var [m,n]=a[0].split(" ").map(Number)
    var arr=a[1].split(" ").map(Number)
    var k=m
    
     var c=0
    for(var i=0;i<m;i++){
        c+=arr[i]
    }
    
   while(k>0){
   var f=c
    var d=0
    for(var i=0;i<m-k+1;i++){
        if(f%n!=0){d++
            
        }if(k<m){
        f=f-arr[i]+arr[k+i]}
    }
    c=c-arr[k-1]
    if(d==0){k--}
    else{k=0}
   }
    
    console.log(d)
   
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