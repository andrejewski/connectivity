
function connectivity(matrix) {
  var size = matrix.length;
  var v = null;

  // find starting node (first non-zero entry)
  row: for(var i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(matrix[i][j] !== 0) {
        v = [i,j];
        break row;
      }
    }
  }

  var vertices = Array(size).fill(0);
  var stack = [v];
  
  while(stack.length !== 0) {
    var v = stack.pop();
    var l = v[1];
    if(vertices[l]) continue;
    vertices[l] = 1;
    for(var k = 0; k < size; k++) {
      if(matrix[l][k] !== 0) stack.push([l, k]);
    }
  }

  var t = 0;
  while(vertices[t]) {t++;}
  return t === size;
}

module.exports = connectivity;

