function checkPermutation(inputStr1, inputStr2) {
    if (inputStr1.length !== inputStr2.length) {
        return false;
    }
    let input1Array = inputStr1.split('').sort();
    let input2Array = inputStr2.split('').sort();

    for (let i = 0; i < input1Array.length; i += 1) {
        if (input1Array[i] !== input2Array[i]) {
            return false;
        }
    }
    return true;
}