const createArr = length => {
	let list = [];
  while(list.length < length) {
  	let rand = Math.ceil(Math.random() * length);
    if(!list.includes(rand)) list.push(rand);
  }
  return list;
}

export default createArr;
