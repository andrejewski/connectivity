# Connectivity
Determine if a graph is connected using its adjacency matrix.

```bash
npm install connectivity
```

```js
var connectivity = require('connectivity');
var assert = require('assert');

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
```

## Contributing

The scope of this project is very limited and only pull requests correcting subtle bugs or improving performance with proper tests in either case will be accepted.

```bash
# running tests
npm run test
```
