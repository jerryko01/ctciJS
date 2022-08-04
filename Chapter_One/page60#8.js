function zeroMatrix(inputM) {
    let zeroCol = 0;
    let zeroRow = 0;
    for (let r = 0; r < inputM.length; r += 1) {
        for (let c = 0; c < inputM[0].length; c += 1) {
            if (inputM[r][c] === 0) {
                zeroCol = c;
                zeroRow = r;
            }
        }
    }
    for (let i = 0; i < inputM[0].length; i += 1) {
        inputM[zeroRow][i] = 0
    }
    for (let r = 0; r < inputM.length; r += 1) {
        inputM[r][zeroCol] = 0
    }
    return inputM;
}