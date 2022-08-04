function oneAway(input1, input2) {
    let errorCount = 0;
    if (input1.length - 1 === input2.length) {
        for (let i = 0; i < input2.length; i += 1) {
            if (!input1.includes(input2[i])) {
                return false;
            }
        }
        return true;
    }
    else if (input2.length - 1 === input1.length) {
        for (let i = 0; i < input1.length; i += 1) {
            if (!input2.includes(input1[i])) {
                return false;
            }
        }
        return true;
    }
    else if (input1.length === input2.length) {
        for (let i = 0; i < input1.length; i += 1) {
            if (input1[i] !== input2[i]) {
                errorCount += 1;
            }
            if (errorCount > 1) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}