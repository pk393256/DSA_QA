//level : med

/*
Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.
*/
function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let sum = parseInt(lines[2])
    
    if (rec(arr, sum, 0, 0)) {
        console.log("yes")
    } else {
        console.log("no")
    }
}

function rec(arr, sum, i, cur_sum) {
    if (cur_sum == sum) {
        return true
    }
    
    if (i >= arr.length) {
        return false
    }
    
    return rec(arr, sum, i + 1, cur_sum + arr[i]) || rec(arr, sum, i + 1, cur_sum)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});