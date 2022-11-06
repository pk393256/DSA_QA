/*
You are given a permutation consisting of n numbers 1, 2, ..., n (a permutation is an array in which each element from 1 to n occurs exactly once).

You are allowed to perform the following operation any number of times:

Choose a subarray (contiguous segment) of this permutation and arrange it any way you want.
Note: You cannot choose the entire sequence at once.

Your task is to calculate the minimum number of operations described above to sort the permutation a in ascending order.
*/

function runProgram(input) {
    input = input.split('\n');
    let t = Number(input[0]);
    let i=0
    let j=1
    while(i<t){
        let n = Number(input[j])
        let originalArr = input[j+1]
        let arr = input[j+1].split(' ').map(Number)
        console.log(op(n,arr,originalArr))
        i++
        j+=2
    }
       function op(n,arr,originalArr){
           let x = [...arr].sort((a,b)=>a-b).join(' ')
           let lastNumber = arr[arr.length-1]
           let firstNumber = arr[0]
           arr.pop()
           arrWithoutLast = [...arr]
           arrWithoutLast.sort((a,b)=>a-b)
           arr.push(lastNumber)
           arr.shift()
           arrWithoutFirst = [...arr] 
           arrWithoutFirst.sort((a,b)=>a-b)
           let x1 = arrWithoutLast.join(' ')
           let x2 = arrWithoutFirst.join(' ')
           if(x==originalArr){
               return 0
           }
           if(x==(x1+" "+lastNumber) || x==(firstNumber+" "+x2)){
               
               return 1
           }
           arrWithoutFirst.unshift(firstNumber)
           x1=arrWithoutFirst.pop()
           arrWithoutFirst.sort((a,b)=>a-b)
           arrWithoutFirst.push(x1)
           let x3 = arrWithoutFirst.join(' ')
           arrWithoutLast.push(lastNumber)
           x2=arrWithoutLast.shift()
           arrWithoutLast.sort((a,b)=>a-b)
           arrWithoutLast.unshift(x2)
           let x4 = arrWithoutLast.join(' ')
           if(x==x4 || x==x3){
               return 2
           }
           
           return 3
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