export default function InsertionSort(list) {
  let snapshots = [];
  for (let i = 1; i < list.length; i++) {
    let key = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      snapshots.push(list.slice());
      j = j - 1;
    }
    list[j + 1] = key;
    snapshots.push(list.slice());
  }
  return snapshots;
}
