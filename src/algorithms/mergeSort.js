let array = [300, 201, 250, 5 , 220 , 420 , 25 , 13 , 12 , 24 , 88 , 85 , 17]

function mergeSort(list) {
  let snapshots = [];
  
  let temp = list;
  list.forEach( (n, i, a) => {
    if (i % 2 === 0 && i !== a.length - 1) {
      if (n > temp[i + 1]) {
        let j = [temp[i + 1], n];
        temp = temp.slice(0, i).concat(j.concat(temp.slice(i + 2)));
        snapshots.push(temp.slice());
      }
    }
  });

  for (let i = 4; i < Math.floor(array.length / 2); i = i * 2) {
    console.log(i)
  }

	return snapshots;
}

console.log(mergeSort(array));
