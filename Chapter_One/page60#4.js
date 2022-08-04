function permutation(inputArray) {
    let result = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            result.push(m)
        }
        else {
            for (let i = 0; i < arr.length; i += 1) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArray);

    return result;
}

function checkPalindrome(inputArray) {
    let copy = inputArray.slice();
    let reverse = inputArray.reverse();
    for (let i = 0; i < copy.length; i += 1) {
        if (reverse[i] !== copy[i]) {
            return false;
        }
    }
    return true;
}


function palindromePermutation(inputString) {
    inputString = inputString.toLowerCase();
    let stringArray = inputString.split('');
    for (let i = 0; i < stringArray.length; i += 1) {
        if (stringArray[i] === ' ') {
            stringArray.splice(i, 1);
        }
    }
    let listOfPermutations = permutation(stringArray);
    for (let i = 0; i < listOfPermutations.length; i += 1) {
        if (checkPalindrome(listOfPermutations[i])) {
            return true;
        }

    }
    return false;
}