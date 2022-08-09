class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    printListData() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

function getLength(inputNode) {
    let count = 0;
    while (inputNode !== null) {
        count += 1;
        inputNode = inputNode.next;
    }
    return count;
}

function intersection(inputNode1, inputNode2) {
    let currA = inputNode1;
    let currB = inputNode2;
    let lengthA = getLength(currA);
    let lengthB = getLength(currB);

    // currA = inputNode1;
    // currB = inputNode2;

    let differenceLength = Math.abs(lengthA - lengthB);

    while (differenceLength > 0) {
        if (lengthA > lengthB) {
            currA = currA.next;
        } else {
            currB = currB.next;
        }
        differenceLength -= 1;
    }

    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }

    return currA;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

let a1 = new Node('a1');
let b1 = new Node('b1');
let c1 = new Node('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

// Test between a and a1