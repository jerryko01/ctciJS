// function URLify(inputStr, inputNum) {
//     let stringArray = inputStr.split('');
//     function noWhiteSpace(inputArray) {
//         for (let i = 0; i < inputArray.length; i += 1) {
//             if (inputArray[i] !== ' ') {
//                 return inputArray.slice(i)
//             }
//         }
//     }
//     stringArray = noWhiteSpace(stringArray);
//     stringArray.reverse();
//     stringArray = noWhiteSpace(stringArray);
//     stringArray.reverse();
//     for (let i = 0; i < stringArray.length; i += 1) {
//         if (stringArray[i] === ' ') {
//             stringArray.splice(i, 1, "%20")
//         }
//     }
//     return stringArray.join('');
// }

function URLify(inputStr, inputNum) {
    inputStr = inputStr.slice(0, inputNum);
    return inputStr.replaceAll(" ", "%20");
}