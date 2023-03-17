let snapshots: number[][] = [];

function heapify(a: number[], length: number, i: number) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;
  if (left < length && a[left] > a[largest]) largest = left;
  if (right < length && a[right] > a[largest]) largest = right;
  if (largest != i) {
    [a[i], a[largest]] = [a[largest], a[i]];
    heapify(a, length, largest);
  }
  snapshots.push(a.slice());
  return a;
}

export default function heapSort(arr: number[]) {
  let length = arr.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;
  while (i >= 0) {
    heapify(arr, length, i);
    i--;
  }
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    heapify(arr, k, 0);
    k--;
  }

  return snapshots.filter((a, i, arr) => {
    return arr.indexOf(a) === i;
  });
}
