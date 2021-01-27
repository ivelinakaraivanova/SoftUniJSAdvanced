function createSortedList() {
    let list = [];

    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b);
        this.size += 1;
    }

    function remove(index) {
        if (0 <= index && list.length > index) {
        list.splice(index, 1);
        this.size -= 1;
        }
    }

    function get(index) {
        if (0 <= index && list.length > index) {
        return list[index];
        }
    }

        
    const listObject = {
        size: 0,
        add,
        remove,
        get,
    }

    return listObject;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.get(4));
