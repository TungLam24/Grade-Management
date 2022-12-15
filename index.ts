class Grade {
    name: string;
    score: number;
    next: Grade | null = null;
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}
class List {
    arr: Grade[] = [];
    head: Grade | null = null;
    tail: Grade | null = null;
    size: number = 0;
    insertFirst(name: string, score: number): void {
        let node: Grade = new Grade(name, score);
        if (this.head == null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++;
        this.arr.push(node);
    }
    insertLast(name: string, score: number): void {
        let node: Grade = new Grade(name, score);
        if (this.tail == null) {
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++;
        this.arr.push(node);
    }
    showList(): void {
        console.table(this.arr)
    }
    totalStudentFail(): void {
        let count = 0
        for (let i of this.arr) {
            if (i.score <= 5) {
                count++
            }
        }
        console.log(`Total student fail is: ${count}`)
    }
    listStudentMaxScore(): void {
        let arr: Grade[] = []
        let max = 0
        for (let i of this.arr) {
            if (i.score > max) {
                max = i.score
            }
        }
        for (let i of this.arr) {
            if (i.score == max) {
                arr.push(i)
            }
        }
        console.table(arr)
    }
    findByName(name: string) {
        let arr: Grade[] = []
        for (let i of this.arr) {
            if (i.name == name) {
                arr.push(i)
            }
        }
        console.table(arr)
    }
}
let list = new List()
list.insertLast("Hung", 0)
list.insertLast("Lam", 10)
list.showList()