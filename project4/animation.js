function animation() {
  var shapes = {
    cube: {y: 2.5, inc: true, rate: 50, factor: 0.0005, max: 3, min: -3},
    sphere: {rad: 0, inc: true, rate: 50, factor: 0.0005, max: Math.PI*2, min: 0},
    ring: {rad: 0, inc: true, rate: 50, factor: 0.0009, max: Math.PI*2, min:0},
    torus: {rad: 0, inc: true, rate: 50, factor: 0.0009, max: Math.PI*2, min:0},
    triangle: {rad: 0, inc: true, rate: 50, factor: 0.0006, max: Math.PI*2, min: 0},
    teapot: {rad: 0, inc: true, rate: 50, factor: 0.0006, max: Math.PI, min: 0},
    cone: {
      y: {val: -2, inc: true, rate: 50, factor: 0.0005, max: -2, min: -3},
      z: {val: 1, inc: false, rate: 50, factor: 0.0005, max: 3, min: 1}
    },
    pyramid: {
      x: {val: 1, inc: true, rate: 50, factor: 0.0004, max: 2, min: 0.5},
      y: {val: 1, inc: true, rate: 50, factor: 0.0004, max: 2, min: 0.5},
      z: {val: 1, inc: true, rate: 50, factor: 0.0004, max: 2, min: 0.5}
    },
    cylinder: {
      trans: {x: -2, inc: false, rate: 50, factor: 0.0005, max: -1, min: -3},
      scale: {y: 2, inc: true, rate: 50, factor: 0.0005, max: 3, min: 1},
    },
    cross: {
      rot: {rad: 0, inc: true, rate: 50, factor: 0.0005, max: Math.PI*2, min: 0},
      scale: {
        x: {val: 0.8, inc: true, rate: 50, factor: 0.0004, max: 1.4, min: 0.4},
        y: {val: 0.8, inc: true, rate: 50, factor: 0.0004, max: 1.4, min: 0.4}
      }
    }
  };

  function update() {
    if(shapes.cube.inc) {
      if(shapes.cube.y <= shapes.cube.max) {
        shapes.cube.y += shapes.cube.rate * shapes.cube.factor;
      }else {
        shapes.cube.inc = false;
      }
    }else {
      if(shapes.cube.y >= shapes.cube.min) {
        shapes.cube.y -= shapes.cube.rate * shapes.cube.factor;
      }else {
        shapes.cube.inc = true;
      }
    }

    if(shapes.sphere.rad <= shapes.sphere.max) {
      shapes.sphere.rad += shapes.sphere.rate * shapes.sphere.factor;
    }else {
      shapes.sphere.rad = shapes.sphere.min;
    }

    if(shapes.ring.rad <= shapes.ring.max) {
      shapes.ring.rad += shapes.ring.rate * shapes.ring.factor;
    }else {
      shapes.ring.rad = shapes.ring.min;
    }

    if(shapes.torus.rad <= shapes.torus.max) {
      shapes.torus.rad += shapes.torus.rate * shapes.torus.factor;
    }else {
      shapes.torus.rad = shapes.torus.min;
    }

    if(shapes.cylinder.trans.inc) {
      if(shapes.cylinder.trans.x <= shapes.cylinder.trans.max) {
        shapes.cylinder.trans.x += shapes.cylinder.trans.rate * shapes.cylinder.trans.factor;
      }else {
        shapes.cylinder.trans.inc = false;
      }
    }else {
      if(shapes.cylinder.trans.x >= shapes.cylinder.trans.min) {
        shapes.cylinder.trans.x -= shapes.cylinder.trans.rate * shapes.cylinder.trans.factor;
      }else {
        shapes.cylinder.trans.inc = true;
      }
    }

    if(shapes.cylinder.scale.inc) {
      if(shapes.cylinder.scale.y <= shapes.cylinder.scale.max) {
        shapes.cylinder.scale.y += shapes.cylinder.scale.rate * shapes.cylinder.scale.factor;
      }else {
        shapes.cylinder.scale.inc = false;
      }
    }else {
      if(shapes.cylinder.scale.y >= shapes.cylinder.scale.min) {
        shapes.cylinder.scale.y -= shapes.cylinder.scale.rate * shapes.cylinder.scale.factor;
      }else {
        shapes.cylinder.scale.inc = true;
      }
    }

    if(shapes.cone.y.inc) {
      if(shapes.cone.y.val <= shapes.cone.y.max) {
        shapes.cone.y.val += shapes.cone.y.rate * shapes.cone.y.factor;
      }else {
        shapes.cone.y.inc = false;
      }
    }else {
      if(shapes.cone.y.val >= shapes.cone.y.min) {
        shapes.cone.y.val -= shapes.cone.y.rate * shapes.cone.y.factor;
      }else {
        shapes.cone.y.inc = true;
      }
    }

    if(shapes.cone.z.inc) {
      if(shapes.cone.z.val <= shapes.cone.z.max) {
        shapes.cone.z.val += shapes.cone.z.rate * shapes.cone.z.factor;
      }else {
        shapes.cone.z.inc = false;
      }
    }else {
      if(shapes.cone.z.val >= shapes.cone.z.min) {
        shapes.cone.z.val -= shapes.cone.z.rate * shapes.cone.z.factor;
      }else {
        shapes.cone.z.inc = true;
      }
    }

    if(shapes.triangle.rad <= shapes.triangle.max) {
      shapes.triangle.rad += shapes.triangle.rate * shapes.triangle.factor;
    }else {
      shapes.triangle.rad = shapes.triangle.min;
    }

    if(shapes.pyramid.x.inc) {
      if(shapes.pyramid.x.val <= shapes.pyramid.x.max) {
        shapes.pyramid.x.val += shapes.pyramid.x.rate * shapes.pyramid.x.factor;
      }else {
        shapes.pyramid.x.inc = false;
      }
    }else {
      if(shapes.pyramid.x.val >= shapes.pyramid.x.min) {
        shapes.pyramid.x.val -= shapes.pyramid.x.rate * shapes.pyramid.x.factor;
      }else {
        shapes.pyramid.x.inc = true;
      }
    }

    if(shapes.pyramid.y.inc) {
      if(shapes.pyramid.y.val <= shapes.pyramid.y.max) {
        shapes.pyramid.y.val += shapes.pyramid.y.rate * shapes.pyramid.y.factor;
      }else {
        shapes.pyramid.y.inc = false;
      }
    }else {
      if(shapes.pyramid.y.val >= shapes.pyramid.y.min) {
        shapes.pyramid.y.val -= shapes.pyramid.y.rate * shapes.pyramid.y.factor;
      }else {
        shapes.pyramid.y.inc = true;
      }
    }

    if(shapes.pyramid.z.inc) {
      if(shapes.pyramid.z.val <= shapes.pyramid.z.max) {
        shapes.pyramid.z.val += shapes.pyramid.z.rate * shapes.pyramid.z.factor;
      }else {
        shapes.pyramid.z.inc = false;
      }
    }else {
      if(shapes.pyramid.z.val >= shapes.pyramid.z.min) {
        shapes.pyramid.z.val -= shapes.pyramid.z.rate * shapes.pyramid.z.factor;
      }else {
        shapes.pyramid.z.inc = true;
      }
    }

    if(shapes.teapot.inc) {
      if(shapes.teapot.rad <= shapes.teapot.max) {
        shapes.teapot.rad += shapes.teapot.rate * shapes.teapot.factor;
      }else {
        shapes.teapot.inc = false;
      }
    }else {
      if(shapes.teapot.rad >= shapes.teapot.min) {
        shapes.teapot.rad -= shapes.teapot.rate * shapes.teapot.factor;
      }else {
        shapes.teapot.inc = true;
      }
    }

    if(shapes.cross.rot.rad <= shapes.cross.rot.max) {
      shapes.cross.rot.rad += shapes.cross.rot.rate * shapes.cross.rot.factor;
    }else {
      shapes.cross.rot.rad = shapes.cross.rot.min;
    }

    if(shapes.cross.scale.x.inc) {
      if(shapes.cross.scale.x.val <= shapes.cross.scale.x.max) {
        shapes.cross.scale.x.val += shapes.cross.scale.x.rate * shapes.cross.scale.x.factor;
      }else {
        shapes.cross.scale.x.inc = false;
      }
    }else {
      if(shapes.cross.scale.x.val >= shapes.cross.scale.x.min) {
        shapes.cross.scale.x.val -= shapes.cross.scale.x.rate * shapes.cross.scale.x.factor;
      }else {
        shapes.cross.scale.x.inc = true;
      }
    }

    if(shapes.cross.scale.y.inc) {
      if(shapes.cross.scale.y.val <= shapes.cross.scale.y.max) {
        shapes.cross.scale.y.val += shapes.cross.scale.y.rate * shapes.cross.scale.y.factor;
      }else {
        shapes.cross.scale.y.inc = false;
      }
    }else {
      if(shapes.cross.scale.y.val >= shapes.cross.scale.y.min) {
        shapes.cross.scale.y.val -= shapes.cross.scale.y.rate * shapes.cross.scale.y.factor;
      }else {
        shapes.cross.scale.y.inc = true;
      }
    }
  }

  return {
    shapes: shapes,
    update: update
  }
}