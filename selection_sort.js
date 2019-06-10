function swap(array, idx1, idx2) {
    let ele1 = array[idx1];
    let ele2 = array[idx2];

    array[idx1] = ele2;
    array[idx2] = ele1;

    return array;
}

function selectionSort(arr) {

	for(let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for(let j = i +1; j < arr.length; j++){
			if (arr[minIdx] > arr[j]) minIdx = j;

		}
		swap(arr, i, minIdx);
	}

	return arr;
}

module.exports = {
    selectionSort,
    swap
};


