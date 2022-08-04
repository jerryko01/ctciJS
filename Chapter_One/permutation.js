function permutation(inputArray) {
    let result = [];
    function permute(arr, m = []) {
        if (arr.length === 0) {
            result.push(m);
        }
        else {
            for (let i = 0; i < arr.length; i += 1) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    permute(inputArray);
    return result;
}
