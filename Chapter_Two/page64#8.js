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

function loopDetection(inputNode) {
    let fastPtr = inputNode; // hare 2x
    let slowPtr = inputNode; // tortoise 1x

    while (fastPtr !== null && fastPtr.next !== null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if (fastPtr === slowPtr) { // Collision
            break;
        }
    }

    if (fastPtr === null || fastPtr.next === null) {
        return null;
    }

    // Continue if we found a cycle
    // If there is a cycle, the slowPtr and the fastPtr will meet at
    // LengthOfLoop - K
    // k is the distance of the none-cycle part

    slowPtr = inputNode;
    while (slowPtr !== fastPtr) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }
    return fastPtr;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;