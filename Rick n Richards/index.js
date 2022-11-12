//level mid
/*
There is a contest of Competitive eating. Rick and Richard were participating in the game.

N bananas are placed in a line. Rick starts to eat from left to right, and Richard from right to left. For each banana, its length is known.

Rick eats with speed twice that of Richard. If a player starts to eat the banana, other player can't touch it. If both players reach the same banana simultaneously, Rick gets to eat that banana as he snatches it away from Richard.

How many bananas each of the players will eat?
*/

function runProgram(input) {
    input=input.split('\n')
    let tCase=Number(input[0])
    let i=0
    let j=1
    while(i<tCase){
        let n=Number(input[j])
        let arr=input[j+1].split(' ').map(Number);
        op(n,arr)
        i++
        j+=2
    }
    function op(n,arr){
        let totalSum=0
        for(let i=0;i<n;i++){
            totalSum+=arr[i]
        }
        let ricksTotal=totalSum*(2/3);
        let count=0
        let index=0
        for(let i=0;i<n;i++){
            if(ricksTotal>=count){
                count+=arr[i]
            }else{
                index=i
                break;
            }
        }
        let endCount=totalSum-count
        count-=arr[index-1]
        if(endCount*2<count){
            index--
        }
        
       
        console.log(index,n-index)
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