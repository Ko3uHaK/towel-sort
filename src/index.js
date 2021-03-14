
module.exports = function towelSort (matrix) {
  const res = [];
  if(!Array.isArray(matrix) || matrix.length === 0) {
      return [];
  } else {
      matrix.map((arr, index) => {
          if(index % 2 !== 0) {
              res.push(...arr.reverse());
          } else {
              res.push(...arr);
          }
      });
  }
  return res;
}
