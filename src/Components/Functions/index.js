export const paginate = (data) => {
  const joinedArr = [];
  for (var i = 0; i < data.length; i++) {
    const lastItem = joinedArr[joinedArr.length - 1];
    if (!lastItem || lastItem.length === 9) {
      joinedArr.push([data[i]]);
    } else {
      lastItem.push(data[i]);
    }
  }
  return joinedArr;
};
