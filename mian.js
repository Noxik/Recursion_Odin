console.log(1)

function fibIteration(n) {
    let arr = [0]
    for (let i=1; i<n; i++) {
    /*
        if (i === 1) {
            arr.push(i)
        } else {
            let next = arr[arr.length-2] + arr[arr.length-1]
            arr.push(next)
        }
        */
        i === 1 ? arr.push(i) : arr.push(arr[arr.length-2] + arr[arr.length-1])

    }
    return arr
}

function fib(n) {
if (n <= 0) {
    return alert("Wrong number, must be positive integer")
    }  else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        return [...fib(n-1), fib(n-1)[n - 2] + fib(n-2)[n-3]]
    }
}

function fibTernary(n) {
    return  n <= 0 ? alert("Wrong number, must be positive integer") 
        : n === 1 ? [0] 
        : n === 2 ? [0, 1]
        : [...fibTernary(n-1), fibTernary(n-1)[n - 2] + fibTernary(n-2)[n-3]]

}