function isUnique(inputString) {
    let letterArray = [];

    for (let i = 0; i < inputString.length; i += 1) {
        if (letterArray.includes(inputString[i])) {
            return false;
        }
        else {
            letterArray.push(inputString[i])
        }
    }
    return true;
}