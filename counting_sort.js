function countingSort(arr, max) {
    if (arr.length <= 1) return arr;
    let count = new Array(max + 1).fill(0);
    let result = [];

    arr.forEach(el => {
        count[el]++;
    });

    count.forEach((el, idx) => {
        for(let i = 1; i <= el; i++) {
            result.push(idx);
        }
    });

    return result;
}


module.exports = {
    countingSort
};