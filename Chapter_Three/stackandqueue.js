class Stack {
    // First In, Last Out
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.size() - 1];
    }

    _toArray() {
        return this.data;
    }
}


class Queue {
    // First In, First Out
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    unshift(value) {
        this.data.unshift(value);
    }

    shift() {
        this.data.shift()
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data[0]
    }

    _toArray() {
        return this.data;
    }
}