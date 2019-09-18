let snapshots = [];
let originalLength;
let lastArr = [];

function append(a) {
  let toAppend = a.filter( e => e !== undefined);
  let areEqual = toAppend.every( (e, i) => e === lastArr[i]);
  if (toAppend.length === originalLength && !areEqual) {
    snapshots.push(toAppend.slice());
  }
  lastArr = toAppend;
}

function merge(a, low, mid, high) {
  let N = high - low + 1;
  let b = [];
  let left = low;
  let right = mid + 1;
  let bIdx = 0;
  while (left <= mid && right <= high) {
    b[bIdx++] = (a[left] <= a[right]) ? a[left++] : a[right++];
    append(a);
  }
  while (left <= mid) {
    b[bIdx++] = a[left++];
    append(a);
  }
  while (right <= high) {
    b[bIdx++] = a[right++];
    append(a);
  }
  for (let k = 0; k < N; k++) {
    a[low+k] = b[k];
    append(a);
  }
}

function executeMerge(a, low, high) {
  lastArr = a;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    executeMerge(a, low, mid);
    executeMerge(a, mid + 1, high);
    merge(a, low, mid, high);
  }
}

export default function mergeSort(list) {
  originalLength = list.length;
  executeMerge(list, 0, originalLength);
  return snapshots;
}
