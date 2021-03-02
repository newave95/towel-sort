

module.exports = function towelSort (matrix) {
  if(! matrix || matrix.length == 0){
    return [];
  }
  var r = []
  for(i=0;i<matrix.length;i++){
    if(i%2 != 0){
      r.push(matrix[i].reverse());
    }
    else{
      r.push(matrix[i]);
    }
  }
  return r.flat()
}

