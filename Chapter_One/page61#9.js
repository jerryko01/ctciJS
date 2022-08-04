function isSubstring(str1, str2) {
    if (str1.includes(str2)) {
        return true;
    }
    else {
        return false;
    }
}

const stringRotation = (str1, str2) => {
    let s1s1 = str1 + str1;
    if (str1.length === str2.length && str1.length !== 0) {
        return isSubstring(s1s1, str2);
    }
    else {
        return false;
    }
}