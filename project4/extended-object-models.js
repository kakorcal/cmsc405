/*
  utility functions to assemble vertices, normals, and indices of a shape
  line, face, triangle, pyramid, and cross function were inspired by the 
  cube function in basic-object-models-IFS.js
 */
function line(vertices, normals, indices) {
  return {
    vertexPositions: new Float32Array(vertices),
    vertexNormals: new Float32Array(normals),
    vertexTextureCoords: new Float32Array([]),
    indices: new Uint16Array(indices)
  };
}

function face(xyz, nrm, coords, normals) {
  var clen = xyz.length;
  var nlen = clen / 3;
  for(var i = 0; i < clen; i++) {
    coords.push(xyz[i]);
  }
  for(var i = 0; i < nlen; i++) {
    normals.push(nrm[0], nrm[1], nrm[2]);
  }
}

function triangle(size) {
  var s = size ? size : 1;
  var w = s * 2;
  var h = Math.sqrt(Math.pow(w, 2) - Math.pow(s, 2));
  var c = h * 0.5;
  var coords = [];
  var normals = [];
  var indices = [
    0,1,2,
    3,4,5,
    6,7,8,6,8,9,
    10,11,12,10,12,13,
    14,15,16,14,16,17
  ];
  
  face([s,-c,s, 0,h-c,s, -s,-c,s], [0,0,1], coords, normals);
  face([s,-c,-s, 0,h-c,-s, -s,-c,-s], [0,0,-1], coords, normals);
  face([s,-c,s, s,-c,-s, 0,h-c,-s, 0,h-c,s], [1,1,0], coords, normals);
  face([-s,-c,s, -s,-c,-s, 0,h-c,-s, 0,h-c,s], [-1,1,0], coords, normals);
  face([s,-c,s, s,-c,-s, -s,-c,-s, -s,-c,s], [0,1,0], coords, normals);

  return {
    vertexPositions: new Float32Array(coords),
    vertexNormals: new Float32Array(normals),
    vertexTextureCoords: new Float32Array([]),
    indices: new Uint16Array(indices)
  };
}

function pyramid(size) {
  var s = size ? size : 1;
  var w = s * 2;
  var h = Math.sqrt(Math.pow(w, 2) - Math.pow(s, 2));
  var c = h * 0.5;
  var coords = [];
  var normals = [];
  var indices = [
    0,1,2,
    3,4,5,
    6,7,8,
    9,10,11,
    12,13,14,12,14,15
  ];

  face([s,-c,s, 0,h-c,0, -s,-c,s], [0,1,1], coords, normals);
  face([s,-c,-s, 0,h-c,0, -s,-c,-s], [0,1,-1], coords, normals);
  face([s,-c,s, 0,h-c,0, s,-c,-s,], [1,1,0], coords, normals);
  face([-s,-c,s, 0,h-c,0, -s,-c,-s], [-1,1,0], coords, normals);
  face([s,-c,s, s,-c,-s, -s,-c,-s, -s,-c,s], [0,1,0], coords, normals);

  return {
    vertexPositions: new Float32Array(coords),
    vertexNormals: new Float32Array(normals),
    vertexTextureCoords: new Float32Array([]),
    indices: new Uint16Array(indices)
  };
}

function cross(size) {
  var s = size ? size : 1;
  var h = s * 0.5;
  var d = s * 2 + h;
  var coords = [];
  var normals = [];
  var indices = [
    0,1,2,0,2,3,
    4,5,6,4,6,7,
    8,9,10,8,10,11,
    12,13,14,12,14,15,
    16,17,18,16,18,19,

    20,21,22,20,22,23,
    24,25,26,24,26,27,
    28,29,30,28,30,31,
    32,33,34,32,34,35,
    36,37,38,36,38,39,

    40,41,42,40,42,43,
    44,45,46,44,46,47,
    48,49,50,48,50,51,
    52,53,54,52,54,55,
    56,57,58,56,58,59,
    60,61,62,60,62,63,
    64,65,66,64,66,67,
    68,69,70,68,70,71,
    72,73,74,72,74,75,
    76,77,78,76,78,79,
    80,81,82,80,82,83,
    84,85,86,84,86,87
  ];

  face([h,h,h, h,-h,h, -h,-h,h, -h,h,h], [0,0,1], coords, normals);
  face([h,d,h, h,h,h, -h,h,h, -h,d,h], [0,0,1], coords, normals);
  face([d,h,h, d,-h,h, h,-h,h, h,h,h], [0,0,1], coords, normals);
  face([h,-h,h, h,-d,h, -h,-d,h, -h,-h,h], [0,0,1], coords, normals);
  face([-h,h,h, -h,-h,h, -d,-h,h, -d,h,h], [0,0,1], coords, normals);

  face([h,h,-h, h,-h,-h, -h,-h,-h, -h,h,-h], [0,0,-1], coords, normals);
  face([h,d,-h, h,h,-h, -h,h,-h, -h,d,-h], [0,0,-1], coords, normals);
  face([d,h,-h, d,-h,-h, h,-h,-h, h,h,-h], [0,0,-1], coords, normals);
  face([h,-h,-h, h,-d,-h, -h,-d,-h, -h,-h,-h], [0,0,-1], coords, normals);
  face([-h,h,-h, -h,-h,-h, -d,-h,-h, -d,h,-h], [0,0,-1], coords, normals);

  face([h,d,h, h,d,-h, -h,d,-h, -h,d,h], [0,1,0], coords, normals);
  face([h,-d,h, h,-d,-h, -h,-d,-h, -h,-d,h], [0,-1,0], coords, normals);

  face([h,d,h, h,h,h, h,h,-h, h,d,-h], [1,0,0], coords, normals);
  face([-h,d,h, -h,h,h, -h,h,-h, -h,d,-h], [-1,0,0], coords, normals);

  face([h,h,h, d,h,h, d,h,-h, h,h,-h], [0,1,0], coords, normals);
  face([-h,h,h, -d,h,h, -d,h,-h, -h,h,-h], [0,1,0], coords, normals);

  face([d,h,h, d,-h,h, d,-h,-h, d,h,-h], [1,0,0], coords, normals);
  face([-d,h,h, -d,-h,h, -d,-h,-h, -d,h,-h], [-1,0,0], coords, normals);

  face([h,-h,h, d,-h,h, d,-h,-h, h,-h,-h], [0,-1,0], coords, normals);
  face([-h,-h,h, -d,-h,h, -d,-h,-h, -h,-h,-h], [0,-1,0], coords, normals);

  face([h,-h,h, h,-d,h, h,-d,-h, h,-h,-h], [1,0,0], coords, normals);
  face([-h,-h,h, -h,-d,h, -h,-d,-h, -h,-h,-h], [-1,0,0], coords, normals);

  return {
    vertexPositions: new Float32Array(coords),
    vertexNormals: new Float32Array(normals),
    vertexTextureCoords: new Float32Array([]),
    indices: new Uint16Array(indices)
  };
}