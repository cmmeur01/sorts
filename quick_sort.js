function quickSort(array) {
    if (array.length <= 1) return array;
    
    let pivot = array[0];

    let left = array.slice(1).filter(el => el < pivot);
    let right = array.slice(1).filter(el => el >= pivot);
    let sortedL = quickSort(left);
    let sortedR = quickSort(right);

    return sortedL.concat([pivot], sortedR);
}


module.exports = {
    quickSort
};