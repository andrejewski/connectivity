
var assert = require('assert');
var connectivity = require('../');

describe('connectivity(matrix Array<Array<Number>>) Boolean', function() {
  it('should return true if an undirected graph is connected', function() {
    var matrix = [
    // A  B  C  D  E  F  
      [0, 0, 0, 1, 1, 0], // A
      [0, 0, 0, 1, 0, 1], // B
      [0, 0, 0, 0, 1, 0], // C
      [1, 1, 0, 0, 0, 0], // D
      [1, 0, 1, 0, 0, 0], // E
      [0, 1, 0, 0, 0, 0], // F
    ];
    assert.ok(connectivity(matrix));
  });
  it('should return false if an undirected graph is not connected', function() {
    var matrix = [
    // A  B  C  D  E  F  
      [0, 0, 0, 0, 1, 0], // A
      [0, 0, 0, 1, 0, 1], // B
      [0, 0, 0, 0, 1, 0], // C
      [0, 1, 0, 0, 0, 0], // D
      [1, 0, 1, 0, 0, 0], // E
      [0, 1, 0, 0, 0, 0], // F
    ];
    assert.ok(!connectivity(matrix));
  });
  it('should return true if a directed graph is connected', function() {
    var matrix = [
    // A  B  C  D  E  F  
      [0, 0, 0, 0, 1, 0], // A
      [1, 0, 0, 0, 0, 0], // B
      [0, 0, 0, 0, 0, 1], // C
      [0, 0, 1, 0, 0, 0], // D
      [0, 0, 0, 1, 0, 0], // E
      [0, 1, 0, 0, 0, 0], // F
    ];
    assert.ok(connectivity(matrix));
  });
  it('should return false if a directed graph is not connected', function() {
    var matrix = [
    // A  B  C  D  E  F  
      [0, 0, 0, 0, 1, 0], // A
      [1, 0, 0, 0, 0, 0], // B
      [0, 0, 0, 0, 0, 1], // C
      [0, 0, 0, 0, 0, 0], // D
      [0, 0, 0, 1, 0, 0], // E
      [0, 1, 0, 0, 0, 0], // F
    ];
    assert.ok(!connectivity(matrix));
  });
});


