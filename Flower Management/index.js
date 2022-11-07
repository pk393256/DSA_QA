//level medium

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer arrayflowerbedcontaining0's and1's, where0means empty and1means not empty, and an integern, find out if ifnnew flowers can be planted in theflowerbedwithout violating the no-adjacent-flowers rule.
*/

function runProgram(input) {
    input=input.split('\n')
    let tCase = Number(input[0])
    let i=0
    let j=1
    while(i<tCase){
        let [M,N] = input[j].split(' ').map(Number)
        let arr = input[j+1].split(' ').map(Number)
        console.log(op(arr,M,N))
        i++
        j+=2
    }
    function op(arr,M,N){
        let count=0
        let alternative = 0
        let continuous0 = 0
        let first = 0
        let ifPossible = false
        for(let i=0;i<M;i++){
            
            if(arr[i]==1){
                continuous0 = 0
                first = 1
            }else{
                continuous0++
                if(continuous0==2 && first==0){
                    continuous0 =1
                    first = 1
                    count++
                }
                if(continuous0==3){
                    continuous0=1
                    count++
                }
                
            }
            
            if(count>=N){
                ifPossible = true
                break
            }
        }
        if(continuous0==2){
            count++
        }
        if(count>=N){
            ifPossible=true
        }
        // console.log(count)
        if(ifPossible){
        return "Yes"
        }else{
            return "No"
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