function rotateMatrix(inputM) {
    let dimensions = [inputM.length, inputM[0].length];
    // dimensions[0] is rows, dimesnions[1] is columns
    let target = new Array(dimensions[1]);
    for (let i = 0; i < dimensions[1]; i += 1) {
        target[i] = new Array(dimensions[0])
    }
    for (let r = 0; r < dimensions[0]; r += 1) {
        for (let c = 0; c < dimensions[1]; c += 1) {
            target[c][dimensions[0] - 1 - r] = inputM[r][c];
        }
    }
    return target;
}