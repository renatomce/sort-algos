export default function insertionSort(arr: number[]) {
  let snapshots = [];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      snapshots.push(arr.slice());
      j = j - 1;
    }
    arr[j + 1] = key;
    snapshots.push(arr.slice());
  }
  return snapshots;
}
