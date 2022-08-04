class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size += 1;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size += 1;
    }

    // Insert at index
    insertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }
        // If first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count += 1;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size += 1;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count += 1;
            current = current.next
        }
        return null;
    }

    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                count += 1;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let testLL = new LinkedList();

testLL.insertFirst(100)
testLL.insertLast(200)
testLL.insertLast(300)
testLL.insertLast(200)
testLL.insertLast(400)

function removeDups(inputLL) {
    let current = inputLL.head;
    while (current !== null) {
        let runner = current;
        while (runner.next !== null) {
            if (runner.next.data === current.data) {
                runner.next = runner.next.next
            }
            else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
}