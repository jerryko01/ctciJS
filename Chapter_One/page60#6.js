const stringCompression = (inputStr) => {
    let resultStr = '';
    let charCount = 1;
    let curr = inputStr[0];
    for (let i = 1; i < inputStr.length; i += 1) {
        if (inputStr[i] === curr) {
            charCount += 1;
        }
        else {
            resultStr = resultStr.concat(curr, charCount);
            curr = inputStr[i];
            charCount = 1;
        }
        if (inputStr.length - 1 === i) {
            resultStr = resultStr.concat(curr, charCount);
        }
    }
    if (resultStr.length >= inputStr.length) {
        return inputStr;
    }
    else {
        return resultStr;
    }
}