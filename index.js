// Task 1
const convertFahrToCelsius = (F) => {
    //Check if F is a number or can be converted to a number
    if (F instanceof Array) {
        const message = `[${F}] is not a valid number but a/an Array`
        return message
    } 
    else if (typeof F == "object") {
        const message = `${JSON.stringify(F)} is not a valid number but a/an ${typeof F}` 
        return message
    }
    else if (typeof F !== 'number' && parseInt(F) != F) {
        const message = `${F} is not a valid number but a/an ${typeof F}`
        return message
    } 
    else {
        //Calculate Celsius
        const C = (F - 32) * 5 / 9
        return C.toFixed(4)
    } 
}


// Task 2
const checkYuGiOh = (n) => {
    if (n instanceof Array) {
        const message = `invalid parameter: [${n}]`
        return message
    } 
    else if (typeof n == "object") {
        const message = `invalid parameter: ${JSON.stringify(n)}` 
        return message
    }
    else if (typeof n !== 'number' && parseInt(n) != n) {
        const message = `invalid parameter: ${n}`
        return message   
    }
    else {
        let result = []
        for (let start = 1; start <= n; start++) {
            
            if (start % 2 == 0 && start % 3 > 0 && start % 5 > 0) {
                result.push('yu')
            } else if (start % 3 == 0 && start % 2 > 0 && start % 5 > 0) {
                result.push('gi')
            } else if (start % 5 == 0 && start % 2 > 0 && start % 3 > 0) {
                result.push('oh')
            } else if (start % 2 == 0 && start % 3 == 0 && start % 5 > 0){
                result.push('yu-gi')
            } else if (start % 2 == 0 && start % 5 == 0 && start % 3 > 0) {
                result.push('yu-oh')
            } else if  (start % 2 > 0 && start % 3 == 0 && start % 5 == 0) {
                result.push('gi-oh')
            } else if (start % 2 == 0 && start % 3 == 0 && start % 5 == 0) {
                result.push('yu-gi-oh')
            }
            else {
                result.push(start)
            }
        }
        return result
    }   
}
