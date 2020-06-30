const parseData = input => {
  let {data, column} = input;

  let columns = column.map(obj => obj.name);

  return data.map(line => {
    let result = {};
    for (let [index, key] of columns.entries()) {
      result[key] = line[index];
    };
    return result;
  })
};

export {parseData};
