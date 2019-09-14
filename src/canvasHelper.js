const createArr = length => {
	let list = [];
  while(list.length < length) {
  	let rand = Math.ceil(Math.random() * length + 10);
    if(!list.includes(rand)) list.push(rand);
  }
  return list;
}

export default createArr;
