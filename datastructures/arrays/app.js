// Build an array
class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const last = this.data[this.length-1];
        if (last) {
            delete this.data[this.length - 1];
            this.length--;
        }
        return last;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
const newArray = new Array();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);


// Reverse string
function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'no good!';
    }

    let chars = str.split('');
    let reversed = [chars.length];
    let j = 0;
    for (let i = chars.length-1; i >=0; i--) {
        reversed[j] = chars[i];
        j++;
    }

    return reversed.join('');
}
reverse('Sadat wrote this reverse function!');

// Merge sorted arrays
function mergeSortedArrays(array1, array2)
{
    const merged = [];

    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    let index1 = 0;
    let index2 = 0;

    while (index1 < array1.length || index2 < array2.length) {

        //console.log(merged);
        // ['a', 'c', 'f', 'z'], ['b', 'd', 'q']
        if (!array2[index2] || array1[index1] <= array2[index2]) {
            merged.push(array1[index1]);
            index1++;
        } else {
            merged.push(array2[index2]);
            index2++;
        }

    }

    return merged;
}

mergeSortedArrays(['a', 'c', 'f', 'z'], ['b', 'd', 'q']);