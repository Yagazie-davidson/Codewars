function swap(i, j, array) {
  let b = array[i];
  array[i] = array[j];
  array[j] = b;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // if(array[i] > array[j]){
      //   swap(j, i, array)
      // }
      if (array[j - 1] > array[j]) {
        swap(j, j - 1, array);
      }
    }
  }
  return array;
}
