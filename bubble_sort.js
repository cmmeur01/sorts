function swap(array, idx1, idx2) {
  let ele1 = array[idx1];
  let ele2 = array[idx2];

  array[idx1] = ele2;
  array[idx2] = ele1;

  return array;
}

function bubbleSort(array) {
  let sorted = false; 

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i ++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }
  }
  
  return array;
}


module.exports = {
    bubbleSort,
    swap
};