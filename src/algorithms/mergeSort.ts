let snapshots: number[][] = [];
let originalLength: number;
let lastArr: number[] = [];

function append(a: number[]): void {
  let toAppend = a.filter((e) => e !== undefined);
  let areEqual = toAppend.every((e, i) => e === lastArr[i]);
  if (toAppend.length === originalLength && !areEqual) {
    snapshots.push(toAppend.slice());
  }
  lastArr = toAppend;
}

function merge(arr: number[], low: number, mid: number, high: number): void {
  let N = high - low + 1;
  let b: number[] = [];
  let left = low;
  let right = mid + 1;
  let bIdx = 0;
  while (left <= mid && right <= high) {
    b[bIdx++] = arr[left] <= arr[right] ? arr[left++] : arr[right++];
    append(arr);
  }
  while (left <= mid) {
    b[bIdx++] = arr[left++];
    append(arr);
  }
  while (right <= high) {
    b[bIdx++] = arr[right++];
    append(arr);
  }
  for (let k = 0; k < N; k++) {
    arr[low + k] = b[k];
    append(arr);
  }
}

function executeMerge(arr: number[], low: number, high: number): void {
  lastArr = arr;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    executeMerge(arr, low, mid);
    executeMerge(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

export default function mergeSort(arr: number[]): number[][] {
  originalLength = arr.length;
  executeMerge(arr, 0, originalLength);
  return snapshots;
}
