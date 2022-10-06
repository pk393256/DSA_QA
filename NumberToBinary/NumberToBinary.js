// binary representaion of a number n
let n = 100;

function toBinaryNumber(n) {
    let toBinaryReverse = ''

    while (n != 0) {
        let reminder = n % 2
        n = (n - reminder) / 2
        toBinaryReverse += reminder
    }
    // console.log(toBinaryReverse)
    let toBinary = ''
    for (let i = toBinaryReverse.length - 1; i >= 0; i--) {
        toBinary += toBinaryReverse[i]
    }
    // console.log(toBinary)
    return toBinary;
}
console.log(toBinaryNumber(n))