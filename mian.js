
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



function mergeSort(arr) {

if (arr.length === 0) {return alert("array in function argument is incorrect")}
if (arr.length === 1) {return arr}
    
// split array in half
    let l = arr.slice(0, Math.floor(arr.length/2));
    let r = arr.slice(Math.floor(arr.length/2))

//    console.log(l, r)

 return    merge(mergeSort(l), mergeSort(r))
}
    
function merge(left, right) {
//    console.log(left, right)

    let final = []

    let i = 0;
    let j = 0;

//compare elements in left and right array from base array split by mergeSort function recursion
// less value go to final array in ascending order 
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
        final.push(left[i])
        i++ }
     else {
        final.push(right[j])
        j++
        }
    }
    
// if there is no more elements in right array (j = right.length) next add only from left array to final
    while (i < left.length) {
            final.push(left[i])
            i++
    }

// if there is no more elements in left array (i = right.length) next add only from right array to final
    while (j < right.length) {
            final.push(right[j])
            j++
    }

return final

}
