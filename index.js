var Grade = /** @class */ (function () {
    function Grade(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    return Grade;
}());
var List = /** @class */ (function () {
    function List() {
        this.arr = [];
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    List.prototype.insertFirst = function (name, score) {
        var node = new Grade(name, score);
        if (this.head == null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        this.arr.push(node);
    };
    List.prototype.insertLast = function (name, score) {
        var node = new Grade(name, score);
        if (this.tail == null) {
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        this.arr.push(node);
    };
    List.prototype.showList = function () {
        console.table(this.arr);
    };
    List.prototype.totalStudentFail = function () {
        var count = 0;
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.score <= 5) {
                count++;
            }
        }
        console.log("Total student fail is: ".concat(count));
    };
    List.prototype.listStudentMaxScore = function () {
        var arr = [];
        var max = 0;
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.score > max) {
                max = i.score;
            }
        }
        for (var _b = 0, _c = this.arr; _b < _c.length; _b++) {
            var i = _c[_b];
            if (i.score == max) {
                arr.push(i);
            }
        }
        console.table(arr);
    };
    List.prototype.findByName = function (name) {
        var arr = [];
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name == name) {
                arr.push(i);
            }
        }
        console.table(arr);
    };
    return List;
}());
var list = new List();
list.insertLast("Hung", 0);
list.insertLast("Lam", 10);
list.showList();
console.log(list.size);
