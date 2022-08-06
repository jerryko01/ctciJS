class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
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

        if (!this.head) {
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
        while (current.next) {
            console.log(current.data);
            current = current.next;
        }
    }
}

function palindrome(inputNode) {
    let nodeArray = [];
    while (inputNode !== null) {
        nodeArray.push(inputNode.data);
        inputNode = inputNode.next;
    }
    let arrayCopy = nodeArray.slice();
    let reverseArray = arrayCopy.reverse();
    for (let i = 0; i < reverseArray.length; i += 1) {
        if (nodeArray[i] !== reverseArray[i]) {
            return false;
        }
    }
    return true;
}

testLL = new LinkedList();
testLL.insertFirst('t')
testLL.insertLast('a')
testLL.insertLast('c')
testLL.insertLast('o')
testLL.insertLast('c')
testLL.insertLast('a')
testLL.insertLast('t')