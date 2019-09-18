let snapshots = [];

function heapify(a, length, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;
  if (left < length && a[left] > a[largest]) largest = left;
  if (right < length && a[right] > a[largest]) largest = right;
  if (largest != i) {
    [a[i], a[largest]] = [a[largest], a[i]];
    heapify(a, length, largest)
  }
  snapshots.push(a.slice());
  return a;
}

function executeHeap(a) {
  let length = a.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;
  while (i >= 0) {
    heapify(a, length, i);
    i--;
  }
  while (k >= 0) {
    [a[0], a[k]] = [a[k], a[0]];
    heapify(a, k, 0);
    k--;
  }
}

export default function heapSort(a) {
  executeHeap(a);
  let t;
  return snapshots.filter(( t = {}, a => !( t[a]=a in t ) ));
}
