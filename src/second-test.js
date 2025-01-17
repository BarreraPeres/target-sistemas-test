function fibonacci(n) {
    let num1 = 0
    let num2 = 1
    let nextNumber;
    fibonacciArray = []

    for (let i = 0; i < n; i++) {
        nextNumber = num1 + num2

        num1 = num2
        num2 = nextNumber
        fibonacciArray.push(nextNumber)
    }
    if (fibonacciArray.includes(n)) {
        console.log("pertence a sequência")
    } else {
        console.log("não pertence a sequência de fibonacci")
    }

    console.log(fibonacciArray)
}

console.log(fibonacci(7))