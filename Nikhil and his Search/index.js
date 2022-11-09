//level mid
/*
Nikhil and his friend Sachin are on a quest to find the answer to Life.

In order to complete it, they need to answer Q queries on an array A having N integers. The queries can be of the following two types:

0 x: Find the number of numbers in A which are not less than x.

1 x: Find the number of numbers in A which are greater than x.

Help them complete the quest.
*/

function runProgram(input) {
    let a=input.split('\n');
    // console.log(a.length)
    let n=Number(a[0]);
    let arr=a[1].split(' ').map(Number)
    arr.sort((a,b)=>a-b)
    let q=Number(a[2])
    for(let i=3;i<a.length;i++){
        let [w,x]=a[i].split(' ').map(Number)
        op(w,x)
    }
    function op(w,x){
       let i=0;
       let j=n-1
       let present=0
       while(i<=j){
           let mid=Math.floor(i+(-i+j)/2)
           if(arr[mid]>x){
               j=mid-1
           }
           if(arr[mid]<=x){
               i=mid+1
           }
           if(arr[mid]==x){
            //   i=mid
               present++
            //   break
           }
       }
    //   console.log('i',i)
    //   console.log('j',j)
      let end=j
        i=0;
        j=n-1;
       while(i<=j){
           let mid=Math.floor(i+(-i+j)/2)
           if(arr[mid]>=x){
               j=mid-1
           }
           if(arr[mid]<x){
               i=mid+1
           }
           if(arr[mid]==x){
            //   i=mid
               present++
            //   break
           }
       }
    //   console.log('i',i)
    //   console.log('j',j)
    let front=i
      if(n-1-end<0){
          console.log(0)
      }else{
          if(present==0){
             console.log(n-1-end)
                
          }else{
              if(w==0){
                  console.log(n-1-front+1)
              }else{
                  console.log(n-1-end)   
              }
          }
      }
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