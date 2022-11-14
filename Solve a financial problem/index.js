//level mid
/*
Given a list of prices of a single stock for N number of days, find stock span for each day. Stock span is defined as a number of consecutive days prior to the current day when the price of a stock was less than or equal to the price at current day.
For the first day, span is always 1. In the example we can see that for day 2 at 60, there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. Remember days should be consecutive, that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.
*/
function runProgram(input) {
    input=input.split('\n')
    let tCase=Number(input[0])
    let i=0
    let j=1
    while(i<tCase){
        let n=Number(input[j])
        let arr=input[j+1].split(' ').map(Number)
        op(n,arr)
        i++
        j+=2
    }
    function op(n,arr){
        let newArr=[]
        for(let i=0;i<n;i++){
            newArr.push([arr[i],i])
        }
        let stack=[]
        let string='';
        for(let i=0;i<n;i++){
            if(stack.length==0){
                string+='1 '
                stack.push(newArr[i])
                // console.log(stack)
            }else{
                if(stack[stack.length-1][0]>newArr[i][0]){
                    string+='1 '
                    stack.push(newArr[i])
                }else{
                    while(stack.length!=0){
                        if(stack[stack.length-1][0]<=newArr[i][0]){
                            stack.pop()
                        }else{
                            string+=(newArr[i][1]-stack[stack.length-1][1])+' '
                            stack.push(newArr[i])
                            break
                        }
                    }
                    if(stack.length==0){
                        string+=(newArr[i][1]+1)+' ';
                        stack.push(newArr[i])
                    }
                }
                
            }
        }
        console.log(string)
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