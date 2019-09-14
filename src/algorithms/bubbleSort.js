export default function bubbleSort(list) {
  let snapshots = [];
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j+1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp
        snapshots.push(list.slice());
      }
    }
  }
  return snapshots;
}
