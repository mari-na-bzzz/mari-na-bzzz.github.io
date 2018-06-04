/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_color__ = __webpack_require__(14);

/**
 * Preset of render state for OVER compositing,
 * @see T. Porter and T. Duff, "Compositing Digital Images", Proceedings of
 *      SIGGRAPH'84, 18 (1984).
 */
const BLEND_OVER_RENDER_STATE = {
    blend: true,
    blendFuncSrcRgb: 770 /* SRC_ALPHA */,
    blendFuncDstRgb: 771 /* ONE_MINUS_SRC_ALPHA */,
    blendFuncSrcAlpha: 1 /* ONE */,
    blendFuncDstAlpha: 771 /* ONE_MINUS_SRC_ALPHA */
};
/* harmony export (immutable) */ __webpack_exports__["a"] = BLEND_OVER_RENDER_STATE;

/**
 * State of the WebGL rendering pipeline. Doesn't include object bindings since
 * the context handles them.
 */
class RenderState {
    /**
     * Creates a new render state object.
     *
     * @param state Object with state properties that values differ from default
     *      ones.
     */
    constructor(...state) {
        this.clearColor = __WEBPACK_IMPORTED_MODULE_0__util_color__["c" /* create */](0, 0, 0, 0);
        this.clearDepth = 1;
        this.clearStencil = 0;
        this.colorMaskR = true;
        this.colorMaskG = true;
        this.colorMaskB = true;
        this.colorMaskAlpha = true;
        this.blend = false;
        this.blendEquationRgb = 32774 /* ADD */;
        this.blendEquationAlpha = 32774 /* ADD */;
        this.blendFuncSrcRgb = 1 /* ONE */;
        this.blendFuncDstRgb = 0 /* ZERO */;
        this.blendFuncSrcAlpha = 1 /* ONE */;
        this.blendFuncDstAlpha = 0 /* ZERO */;
        this.cullFace = false;
        this.cullFaceMode = 1029 /* BACK */;
        this.frontFaceMode = 2305 /* COUNTERCLOCKWISE */;
        this.depthTest = false;
        this.depthFunc = 513 /* LESS */;
        this.depthRangeNear = 0;
        this.depthRangeFar = 1;
        this.depthMask = true;
        this.dither = true;
        this.drawBuffers = [36064 /* COLOR_ATTACHMENT0 */];
        this.polygonOffset = false;
        this.polygonOffsetFactor = 0;
        this.polygonOffsetUnits = 0;
        this.sampleAlphaToCoverage = false;
        this.sampleCoverage = false;
        this.sampleCoverageValue = 1;
        this.sampleCoverageInvert = false;
        this.scissorTest = false;
        this.scissorX = 0;
        this.scissorY = 0;
        // Actual defaults aren't known here since they depend upon context. -1's
        // as "do not change" values.
        this.scissorWidth = -1;
        this.scissorHeight = -1;
        this.stencilTest = false;
        this.stencilReference = 0;
        this.stencilMask = 0xff;
        this.stencilWriteMask = 0xff;
        this.stencilFrontFunc = 519 /* ALWAYS */;
        this.stencilFrontFailOp = 7680 /* KEEP */;
        this.stencilFrontDepthFailOp = 7680 /* KEEP */;
        this.stencilFrontDepthPassOp = 7680 /* KEEP */;
        this.stencilBackFunc = 519 /* ALWAYS */;
        this.stencilBackFailOp = 7680 /* KEEP */;
        this.stencilBackDepthFailOp = 7680 /* KEEP */;
        this.stencilBackDepthPassOp = 7680 /* KEEP */;
        this.viewportX = 0;
        this.viewportY = 0;
        // Actual defaults aren't known here since they depend upon context. -1's
        // as "do not change" values.
        this.viewportWidth = -1;
        this.viewportHeight = -1;
        Object.assign(this, ...state);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = RenderState;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = create;
/* harmony export (immutable) */ __webpack_exports__["d"] = copy;
/* unused harmony export areEqual */
/* unused harmony export areCollinear */
/* unused harmony export areFuzzyEqual */
/* harmony export (immutable) */ __webpack_exports__["b"] = add;
/* harmony export (immutable) */ __webpack_exports__["l"] = sub;
/* unused harmony export mulv */
/* harmony export (immutable) */ __webpack_exports__["i"] = muln;
/* harmony export (immutable) */ __webpack_exports__["g"] = divv;
/* unused harmony export divn */
/* unused harmony export mod */
/* unused harmony export mix */
/* unused harmony export rotate */
/* unused harmony export rotate45 */
/* harmony export (immutable) */ __webpack_exports__["k"] = rotate90;
/* unused harmony export rotateNeg90 */
/* unused harmony export invert */
/* harmony export (immutable) */ __webpack_exports__["h"] = length;
/* unused harmony export distance */
/* harmony export (immutable) */ __webpack_exports__["j"] = normalize;
/* unused harmony export dot */
/* harmony export (immutable) */ __webpack_exports__["f"] = crossZ;
/* unused harmony export bboxesOverlap */
/* unused harmony export pointIsInBBox */
/* harmony export (immutable) */ __webpack_exports__["c"] = computeBBoxForPoints;
/* unused harmony export getLineFromPoints */
/* unused harmony export getSignedDistanceToLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_fuzzy_equal__ = __webpack_require__(22);

/**
 * Creates a new vector and initializes it with given components.
 *
 * @param x X component of the vector.
 * @param y Y component of the vector.
 * @returns The vector.
 */
function create(x, y) {
    return { x, y };
}
const ZERO = create(0, 0);
/* harmony export (immutable) */ __webpack_exports__["a"] = ZERO;

const ORIGIN = ZERO;
/* unused harmony export ORIGIN */

const POSITIVE_X = create(1, 0);
/* unused harmony export POSITIVE_X */

const NEGATIVE_X = create(-1, 0);
/* unused harmony export NEGATIVE_X */

const POSITIVE_Y = create(0, 1);
/* unused harmony export POSITIVE_Y */

const NEGATIVE_Y = create(0, -1);
/* unused harmony export NEGATIVE_Y */

/**
 * Copies a vector to another one.
 *
 * @param src The source vector.
 * @param dst The vector the source vector will be copied to.
 * @returns `dst`.
 */
function copy(src, dst = create(0, 0)) {
    dst.x = src.x;
    dst.y = src.y;
    return dst;
}
/**
 * Checks if two vectors are strictly equal component-wise.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns `true` if the vectors are equal and `false` otherwise.
 */
function areEqual(v1, v2) {
    return v1.x == v2.x && v1.y == v2.y;
}
/**
 * Checks if two vectors are collinear.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns `true` if the vectors are collinear and `false` otherwise.
 */
function areCollinear(v1, v2) {
    return v1.x / v2.x == v1.y / v2.y;
}
/**
 * Checks if corresponding components of two vectors are all within given
 * tolerance from each other.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @param tolerance The tolerance.
 * @returns `true` if the vectors are "fuzzy" equal and `false` otherwise.
 */
function areFuzzyEqual(v1, v2, tolerance = __WEBPACK_IMPORTED_MODULE_0__util_fuzzy_equal__["a" /* DEFAULT_TOLERANCE */]) {
    return (Object(__WEBPACK_IMPORTED_MODULE_0__util_fuzzy_equal__["b" /* default */])(v1.x, v2.x, tolerance) &&
        Object(__WEBPACK_IMPORTED_MODULE_0__util_fuzzy_equal__["b" /* default */])(v1.y, v2.y, tolerance));
}
/**
 * Adds two vector and stores the result into a third one, i.e. `dst = a + b`.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function add(a, b, dst = create(0, 0)) {
    dst.x = a.x + b.x;
    dst.y = a.y + b.y;
    return dst;
}
/**
 * Subtracts a vector from another one and stores the result to a third one, i.e.
 * `dst = a - b`.
 *
 * @param a The minuend vector.
 * @param b The subtrahend vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function sub(a, b, dst = create(0, 0)) {
    dst.x = a.x - b.x;
    dst.y = a.y - b.y;
    return dst;
}
/**
 * Multiplies two vectors component-wise and stores the result into a third one.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function mulv(a, b, dst = create(0, 0)) {
    dst.x = a.x * b.x;
    dst.y = a.y * b.y;
    return dst;
}
/**
 * Multiplies a vector by a scalar and stores the result into a third vector.
 *
 * @param a The vector.
 * @param n The scalar.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function muln(a, n, dst = create(0, 0)) {
    dst.x = a.x * n;
    dst.y = a.y * n;
    return dst;
}
/**
 * Divides a vector by another one component wise and stores the result into a
 * third one.
 *
 * @param a The dividend vector.
 * @param b The divisor vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function divv(a, b, dst = create(0, 0)) {
    dst.x = a.x / b.x;
    dst.y = a.y / b.y;
    return dst;
}
/**
 * Divides a vector by a scalar and stores the result into a third vector.
 *
 * @param a The dividend vector.
 * @param n The scalar.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function divn(a, n, dst = create(0, 0)) {
    dst.x = a.x / n;
    dst.y = a.y / n;
    return dst;
}
/**
 * Calculates the reminder after division of a's components by n and stores the result into a third vector.
 *
 * @param a The dividend vector.
 * @param n The scalar.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function mod(a, n, dst = create(0, 0)) {
    dst.x = a.x % n;
    dst.y = a.y % n;
    return dst;
}
/**
 * Linearly interpolates between two vectors, i.e. computes
 * `(1 - factor) * a + factor * b`, and writes the result into a third vector.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param factor The interpolation factor.
 * @param dst The vector the result will be written to.
 * @returns `dst`.
 */
function mix(a, b, factor, dst = create(0, 0)) {
    dst.x = (1 - factor) * a.x + factor * b.x;
    dst.y = (1 - factor) * a.y + factor * b.y;
    return dst;
}
/**
 * Rotates a vector by a given angle and stores the result into a second vector.
 * Positive direction is from +X to +Y.
 *
 * @param v The vector to rotate.
 * @param angle The angle of rotation.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function rotate(v, angle, dst = create(0, 0)) {
    const x = v.x;
    const y = v.y;
    const angleCos = Math.cos(angle);
    const angleSin = Math.sin(angle);
    dst.x = angleCos * x - angleSin * y;
    dst.y = angleSin * x + angleCos * y;
    return dst;
}
/**
 * Rotates a vector by 45 degrees and stores the result into a second vector.
 * Analogous to `rotate(v, Math.PI / 4, dst)`, but faster.
 *
 * @param v The vector to rotate.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function rotate45(v, dst = create(0, 0)) {
    const y = v.y;
    const s = Math.SQRT1_2;
    dst.y = s * v.x + s * v.y;
    dst.x = s * v.x - s * y;
    return dst;
}
/**
 * Rotates a vector by 90 degrees and stores the result into a second vector.
 * Analogous to `rotate(v, Math.PI / 2, dst)`, but faster.
 *
 * @param v The vector to rotate.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function rotate90(v, dst = create(0, 0)) {
    const y = v.y;
    dst.y = v.x;
    dst.x = -y;
    return dst;
}
/**
 * Rotates a vector by -90 degrees and stores the result into a second vector.
 * Analogous to `rotate(v, -Math.PI / 2, dst)`, but faster.
 *
 * @param v The vector to rotate.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function rotateNeg90(v, dst = create(0, 0)) {
    const y = v.y;
    dst.y = -v.x;
    dst.x = y;
    return dst;
}
/**
 * Inverts signs of components of a vector and stores the result into a second
 * vector. Analogous to `rotate(v, Math.PI, dst)` (or `rotate(v, -Math.PI, dst)`,
 * which is the same), but faster.
 *
 * @param v The vector to invert.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function invert(v, dst = create(0, 0)) {
    dst.x = -v.x;
    dst.y = -v.y;
    return dst;
}
/**
 * Computes length of a vector.
 *
 * @param v The vector.
 * @returns The length.
 */
function length(v) {
    return Math.hypot(v.x, v.y);
}
/**
 * Computes distance between ends of two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns The distance, i.e. `length(sub(a, b))`.
 */
function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}
/**
 * Divides a vector by its length (thus making it a unit vector) and stores the
 * result to another one.
 *
 * @param v The vector to be normalized.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function normalize(v, dst = create(0, 0)) {
    return divn(v, length(v), dst);
}
/**
 * Computes dot product of two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns The dot product.
 */
function dot(a, b) {
    return a.x * b.x + a.y * b.y;
}
/**
 * Computes Z-component of a cross product of two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns Z-component of the cross product.
 */
function crossZ(a, b) {
    return a.x * b.y - a.y * b.x;
}
const EMPTY = {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
};
/* unused harmony export EMPTY */

const UNIT_BBOX = {
    minX: -1,
    maxX: 1,
    minY: -1,
    maxY: 1
};
/* unused harmony export UNIT_BBOX */

/**
 * Checks if two bounding boxes overlap.
 *
 * @param bbox1 A bounding box.
 * @param bbox2 Another bounding box.
 * @returns `true` if given bounding boxes do overlap and `false` otherwise.
 */
function bboxesOverlap(bbox1, bbox2) {
    let leftBBox;
    let rightBBox;
    if (bbox1.minX < bbox2.minX) {
        leftBBox = bbox1;
        rightBBox = bbox2;
    }
    else {
        leftBBox = bbox2;
        rightBBox = bbox1;
    }
    let topBBox;
    let bottomBBox;
    if (bbox1.maxY > bbox2.maxY) {
        topBBox = bbox1;
        bottomBBox = bbox2;
    }
    else {
        topBBox = bbox2;
        bottomBBox = bbox1;
    }
    return rightBBox.minX < leftBBox.maxX && bottomBBox.maxY > topBBox.minY;
}
/**
 * Checks if a 2D point lies inside a bounding box or on its border.
 *
 * @param point The point.
 * @param bbox The bounding box.
 * @returns `true` if the point is inside of the box and `false` otherwise.
 */
function pointIsInBBox(point, bbox) {
    return bbox.minX <= point.x && point.x <= bbox.maxX &&
        bbox.minY <= point.y && point.y <= bbox.maxY;
}
/**
 * Computes bounding box of an array of points and stores it to a given object.
 *
 * @param points The array of points.
 * @param dst The bbox the result will be written to. Left unmodified if the array
 *      of points is empty.
 * @returns `dst`.
 */
function computeBBoxForPoints(points, dst = { minX: 0, maxX: 0, minY: 0, maxY: 0 }) {
    if (points.length === 0) {
        return dst;
    }
    dst.minX = dst.maxX = points[0].x;
    dst.minY = dst.maxY = points[0].y;
    for (let i = 1; i < points.length; ++i) {
        const { x, y } = points[i];
        if (x < dst.minX) {
            dst.minX = x;
        }
        if (x > dst.maxX) {
            dst.maxX = x;
        }
        if (y < dst.minY) {
            dst.minY = y;
        }
        if (y > dst.maxY) {
            dst.maxY = y;
        }
    }
    return dst;
}
const X_AXIS = {
    origin: ORIGIN,
    tangent: POSITIVE_X
};
/* unused harmony export X_AXIS */

const Y_AXIS = {
    origin: ORIGIN,
    tangent: POSITIVE_Y
};
/* unused harmony export Y_AXIS */

function getLineFromPoints(p1, p2, dst = {
    origin: create(0, 0),
    tangent: create(0, 0)
}) {
    copy(p1, dst.origin);
    sub(p2, p1, dst.tangent);
    return dst;
}
/**
 * Computes signed distance from a point to a line.
 *
 * @param p The point.
 * @param l1 Start point of the line.
 * @param l2 End point of the line.
 * @returns Distance from the point to the line. It'll be greater than 0 if the
 *      point lies to the left of the line and less than 0 otherwise.
 */
function getSignedDistanceToLine(p, l) {
    const tangent = l.tangent;
    return dot(sub(p, l.origin), create(-tangent.y, tangent.x)) / length(tangent);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_iterable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_pow_of_2__ = __webpack_require__(41);


/**
 * Gives size of a GL type.
 *
 * @param type The type.
 * @returns Size of the type in bytes.
 */
function getTypeSize(type) {
    switch (type) {
        case 5120 /* BYTE */:
        case 5121 /* UNSIGNED_BYTE */:
            return 1;
        case 5122 /* SHORT */:
        case 5123 /* UNSIGNED_SHORT */:
            return 2;
        case 5124 /* INT */:
        case 5125 /* UNSIGNED_INT */:
        case 5126 /* FLOAT */:
            return 4;
    }
}
/**
 * Description of how particular attributes of a vertex are packed into a vertex
 * buffer.
 */
class AttributeMapping extends Map {
    /**
     * Creates a new attribute mapping with a set of attributes of given types and
     * sizes. Automatically computes offsets of the attributes.
     *
     * @param mapping The mapping from attribute IDs to types and sizes.
     * @param alignment Desired alignment of attributes in the vertex data
     *      structure. Must be a power of 2.
     */
    constructor(mapping, alignment = 4 /* ALIGN_4_BYTES */) {
        let offset = 0;
        super(Object(__WEBPACK_IMPORTED_MODULE_0__util_iterable__["c" /* mapIterable */])(mapping, ([idx, { type, size, normalized }]) => {
            const pointer = [
                idx,
                {
                    type,
                    size,
                    normalized,
                    offset
                }
            ];
            const attributeSize = size * getTypeSize(type);
            const newOffset = Object(__WEBPACK_IMPORTED_MODULE_1__util_pow_of_2__["a" /* align */])(offset + attributeSize, -alignment);
            // FIXME(dmikis) Check this only in debug mode.
            if (newOffset - offset > attributeSize) {
                console.warn(`${newOffset - offset} byte padding's inserted`);
            }
            offset = newOffset;
            return pointer;
        }));
        this.vertexByteSize = offset;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributeMapping;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = countVertices;
/* harmony export (immutable) */ __webpack_exports__["a"] = countIndices;
/**
 * @returns Integer number of vertices that fit into a region of specified in bytes size.
 */
function countVertices(vertexByteSize, attribMapping) {
    return vertexByteSize / attribMapping.vertexByteSize | 0;
}
/**
 * @returns Integer number of indices that fit into a region of specified in bytes size.
 */
function countIndices(indexByteSize, type) {
    switch (type) {
        case 5123 /* UNSIGNED_SHORT */:
            return indexByteSize >> 1;
        case 5125 /* UNSIGNED_INT */:
            return indexByteSize >> 2;
        default:
            return -1;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Simple pub/sub implementation. The emitter is supposed to emit only one type of event,
 * if someone has to emit events of different types, multiple emitters should be created.
 */
class EventEmitter {
    constructor() {
        this._listeners = new Set();
    }
    /**
     * Adds listener.
     */
    addListener(listener) {
        this._listeners.add(listener);
    }
    /**
     * Removes listener.
     */
    removeListener(listener) {
        this._listeners.delete(listener);
    }
    /**
     * Calls all the added listeners, the order (e.g. of adding) is not guaranteed.
     */
    fire(data) {
        for (const listener of this._listeners) {
            listener(data);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventEmitter;

/**
 * Event emitter with no payload emitted.
 */
class VoidEventEmitter extends EventEmitter {
    fire() {
        super.fire(undefined);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = VoidEventEmitter;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memory_relative_location__ = __webpack_require__(58);

function memoryLocationProvider(primitive) {
    return primitive.memorySubChunk;
}
function initBatch(primitive) {
    const subChunk = primitive.memorySubChunk;
    return {
        firstPrimitive: primitive,
        page: subChunk.memoryChunk.page,
        vertexByteOffset: subChunk.vertexByteOffset,
        vertexByteLength: subChunk.vertexByteLength,
        indexByteOffset: subChunk.indexByteOffset,
        indexByteLength: subChunk.indexByteLength
    };
}
/**
 * Renderer of primitives (objects that are physically presented in the scene). Most of the camera-related
 * staff (uniforms of camera position and projection matrix) is defined here.
 */
class PrimitiveRenderer {
    constructor(context, renderState, defaultProgram) {
        this._context = context;
        this._defaultProgram = defaultProgram;
        this._renderState = renderState;
    }
    /**
     * @param target The target to render primitives into.
     * @param uniforms Set of global uniforms.
     */
    render(target, uniforms) {
        this._bindProgram(this._program, uniforms);
        this._bindRenderState(this._renderState);
        this._bindRenderTarget(target);
        for (const cameraPosition of uniforms.cameraPositions) {
            this._program.setVector2Uniform('lookAtHigh', cameraPosition.lookAtHigh);
            this._program.setVector2Uniform('lookAtLow', cameraPosition.lookAtLow);
            this._renderPrimitives(this.primitives);
        }
    }
    destroy() {
        this._program.destroy();
    }
    /**
     * Batches primitives that can be rendered by a single draw call, that is critical for performance.
     * Performance gain from this method is possible (while it is not strictly required) if primitives
     * are sorted by memory offset and there are no many "holes" between them.
     * By default it batches primitives only by their locations in memory, but subclasses can
     * override _canBatch() method to break a batch at specific place, e.g. if a shader needs a texture and
     * two adjacent primitives don't share one these primitives must be in different batches
     */
    batchPrimitives(primitives) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__memory_relative_location__["a" /* batchAllocatedObjects */])(primitives, memoryLocationProvider, initBatch, this._canBatch);
    }
    /**
     * Determines if two primitives can be rendered in one batch (by a single draw call). It should be overridden
     * in subclasses if their primitives have more complex rules of batching (e.g. binding a shared texture).
     */
    _canBatch(a, b) {
        return a.memorySubChunk.memoryChunk.page === b.memorySubChunk.memoryChunk.page;
    }
    _bindProgram(program, uniforms) {
        this._context.bindProgram(program);
        program.setMatrix4Uniform('viewProjMatrix', uniforms.viewProjMatrix);
    }
    _bindRenderState(state) {
        this._context.bindRenderState(state);
    }
    _bindRenderTarget(target) {
        this._context.bindRenderTarget(target);
    }
    get _program() {
        return this._defaultProgram;
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PrimitiveRenderer;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_primitive_presentation_class__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_event_emitter__ = __webpack_require__(4);


/**
 * Base abstract class that represent an object that comes from API.
 * Concrete primitives are supposed to control one or more engine's renderables according to
 * business rules (style/visibility updates on zooming) that also come from API.
 */
class ApiPrimitive {
    constructor(styles) {
        this._isVisible = false;
        this._presentationClass = new __WEBPACK_IMPORTED_MODULE_0__style_primitive_presentation_class__["a" /* default */](styles);
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_1__util_event_emitter__["b" /* VoidEventEmitter */]();
        this.isDestroyed = false;
    }
    /**
     * Notifies primitive about zoom changed. It monitors if something's (visibility/style) changed
     * and calls appropriate callback.
     */
    setZoom(zoom) {
        const style = this._presentationClass.getStyle(zoom);
        if (style && style !== this._style) {
            this._style = style;
            this.onStyleChanged(style);
        }
        this.updateVisibility();
    }
    updateVisibility() {
        const isVisible = this.checkVisibility();
        if (isVisible !== this._isVisible) {
            this._isVisible = isVisible;
            this.onVisibilityChanged(isVisible);
        }
    }
    checkVisibility() {
        return !!this._style;
    }
    destroy() {
        this.isDestroyed = true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiPrimitive;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = create;
/* unused harmony export copy */
/* unused harmony export areEqual */
/* unused harmony export areFuzzyEqual */
/* unused harmony export areCollinear */
/* unused harmony export add */
/* harmony export (immutable) */ __webpack_exports__["n"] = sub;
/* harmony export (immutable) */ __webpack_exports__["j"] = mulv;
/* harmony export (immutable) */ __webpack_exports__["i"] = muln;
/* unused harmony export divv */
/* unused harmony export divn */
/* unused harmony export length */
/* unused harmony export distance */
/* harmony export (immutable) */ __webpack_exports__["k"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["g"] = dot;
/* harmony export (immutable) */ __webpack_exports__["f"] = cross;
/* harmony export (immutable) */ __webpack_exports__["l"] = rotateX;
/* unused harmony export rotateY */
/* harmony export (immutable) */ __webpack_exports__["m"] = rotateZ;
/* unused harmony export getPlaneLineIntersection */
/* harmony export (immutable) */ __webpack_exports__["h"] = getPlaneRayIntersection;
/* unused harmony export getPlanePlaneIntersection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix3__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_fuzzy_equal__ = __webpack_require__(22);


/**
 * Creates a new vector and initializes it with given components.
 *
 * @param x X component of the vector.
 * @param y Y component of the vector.
 * @param z Z component of the vector.
 * @returns The vector.
 */
function create(x, y, z) {
    return { x, y, z };
}
const ORIGIN = create(0, 0, 0);
/* harmony export (immutable) */ __webpack_exports__["a"] = ORIGIN;

const POSITIVE_X = create(1, 0, 0);
/* unused harmony export POSITIVE_X */

const NEGATIVE_X = create(-1, 0, 0);
/* unused harmony export NEGATIVE_X */

const POSITIVE_Y = create(0, 1, 0);
/* harmony export (immutable) */ __webpack_exports__["b"] = POSITIVE_Y;

const NEGATIVE_Y = create(0, -1, 0);
/* unused harmony export NEGATIVE_Y */

const POSITIVE_Z = create(0, 0, 1);
/* harmony export (immutable) */ __webpack_exports__["c"] = POSITIVE_Z;

const NEGATIVE_Z = create(0, 0, -1);
/* unused harmony export NEGATIVE_Z */

/**
 * Copies a vector to another one.
 *
 * @param src The source vector.
 * @param dst The vector the source vector will be copied to.
 * @returns `dst`.
 */
function copy(src, dst = create(0, 0, 0)) {
    dst.x = src.x;
    dst.y = src.y;
    dst.z = src.z;
    return dst;
}
/**
 * Checks if two vectors are strictly equal component-wise.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns `true` if the vectors are equal and `false` otherwise.
 */
function areEqual(v1, v2) {
    return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
}
/**
 * Checks if corresponding components of two vectors are all within given
 * tolerance from each other.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @param tolerance The tolerance.
 * @returns `true` if the vectors are "fuzzy" equal and `false` otherwise.
 */
function areFuzzyEqual(v1, v2, tolerance = __WEBPACK_IMPORTED_MODULE_1__util_fuzzy_equal__["a" /* DEFAULT_TOLERANCE */]) {
    return (Object(__WEBPACK_IMPORTED_MODULE_1__util_fuzzy_equal__["b" /* default */])(v1.x, v2.x, tolerance) &&
        Object(__WEBPACK_IMPORTED_MODULE_1__util_fuzzy_equal__["b" /* default */])(v1.y, v2.y, tolerance) &&
        Object(__WEBPACK_IMPORTED_MODULE_1__util_fuzzy_equal__["b" /* default */])(v1.z, v2.z, tolerance));
}
/**
 * Checks if two vectors are collinear.
 *
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns `true` if the vectors are collinear and `false` otherwise.
 */
function areCollinear(v1, v2) {
    const lambdaX = v1.x / v2.x;
    const lambdaY = v1.y / v2.y;
    const lambdaZ = v1.z / v2.z;
    return lambdaX == lambdaY && lambdaY == lambdaZ;
}
/**
 * Adds two vector and stores the result into a third one, i.e. `dst = a + b`.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function add(a, b, dst = create(0, 0, 0)) {
    dst.x = a.x + b.x;
    dst.y = a.y + b.y;
    dst.z = a.z + b.z;
    return dst;
}
/**
 * Subtracts a vector from another one and stores the result to a third one, i.e.
 * `dst = a - b`.
 *
 * @param a The minuend vector.
 * @param b The subtrahend vector.
 * @param dst The vector the result will be stored to.
 */
function sub(a, b, dst = create(0, 0, 0)) {
    dst.x = a.x - b.x;
    dst.y = a.y - b.y;
    dst.z = a.z - b.z;
    return dst;
}
/**
 * Multiplies two vectors component-wise and stores the result into a third one.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function mulv(a, b, dst = create(0, 0, 0)) {
    dst.x = a.x * b.x;
    dst.y = a.y * b.y;
    dst.z = a.z * b.z;
    return dst;
}
/**
 * Multiplies a vector by a scalar and stores the result into a third vector.
 *
 * @param a The vector.
 * @param n The scalar.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function muln(a, n, dst = create(0, 0, 0)) {
    dst.x = a.x * n;
    dst.y = a.y * n;
    dst.z = a.z * n;
    return dst;
}
/**
 * Divides a vector by another one component wise and stores the result into a
 * third one.
 *
 * @param a The dividend vector.
 * @param b The divisor vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function divv(a, b, dst = create(0, 0, 0)) {
    dst.x = a.x / b.x;
    dst.y = a.y / b.y;
    dst.z = a.z / b.z;
    return dst;
}
/**
 * Divides a vector by a scalar and stores the result into a third vector.
 *
 * @param a The dividend vector.
 * @param n The scalar.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function divn(a, n, dst = create(0, 0, 0)) {
    dst.x = a.x / n;
    dst.y = a.y / n;
    dst.z = a.z / n;
    return dst;
}
/**
 * Computes length of a vector.
 *
 * @param v The vector.
 * @returns The length.
 */
function length(v) {
    return Math.hypot(v.x, v.y, v.z);
}
/**
 * Computes distance between ends of two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns The distance, i.e. `length(sub(a, b))`.
 */
function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}
/**
 * Divides a vector by its length (thus making it a unit vector) and stores the
 * result to another one.
 *
 * @param v The vector to be normalized.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function normalize(v, dst = create(0, 0, 0)) {
    return divn(v, length(v), dst);
}
/**
 * Computes dot product of two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns The dot product.
 */
function dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
/**
 * Computes cross product of two vectors and stores it to a third one.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @param dst The vector the result will be stored to.
 * @returns `dst`.
 */
function cross(a, b, dst = create(0, 0, 0)) {
    // Write components to a separate variables so we don't produce incorrect
    // results in cases when a == dst or b == dst.
    const x = a.y * b.z - a.z * b.y;
    const y = a.z * b.x - a.x * b.z;
    const z = a.x * b.y - a.y * b.x;
    dst.x = x;
    dst.y = y;
    dst.z = z;
    return dst;
}
/**
 * Rotates vector about the X axis.
 *
 * @param v The vector to be rotated.
 * @param angle The angle of rotation (in radians), positive values rotates from +Y to +Z
 * @param dst The vector the result will be stored to.
 */
function rotateX(v, angle, dst = create(0, 0, 0)) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const y = v.y;
    dst.x = v.x;
    dst.y = y * cos - v.z * sin;
    dst.z = y * sin + v.z * cos;
    return dst;
}
/**
 * Rotates vector about the Y axis.
 *
 * @param v The vector to be rotated.
 * @param angle The angle of rotation (in radians), positive values rotates from +X to +Z
 * @param dst The vector the result will be stored to.
 */
function rotateY(v, angle, dst = create(0, 0, 0)) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    // handle the case when source and destination are the same object: related components can break each other
    v = (v === dst) ? copy(v) : v;
    dst.x = v.x * cos + v.z * sin;
    dst.y = v.y;
    dst.z = -v.x * sin + v.z * cos;
    return dst;
}
/**
 * Rotates vector about the Z axis.
 *
 * @param v The vector to be rotated.
 * @param angle The angle of rotation (in radians), positive values rotates from +X to +Y
 * @param dst The vector the result will be stored to.
 */
function rotateZ(v, angle, dst = create(0, 0, 0)) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    // handle the case when source and destination are the same object: related components can break each other
    v = (v === dst) ? copy(v) : v;
    dst.x = v.x * cos - v.y * sin;
    dst.y = v.x * sin + v.y * cos;
    dst.z = v.z;
    return dst;
}
const X_AXIS = {
    origin: ORIGIN,
    tangent: POSITIVE_X
};
/* unused harmony export X_AXIS */

const Y_AXIS = {
    origin: ORIGIN,
    tangent: POSITIVE_Y
};
/* unused harmony export Y_AXIS */

const Z_AXIS = {
    origin: ORIGIN,
    tangent: POSITIVE_Z
};
/* unused harmony export Z_AXIS */

const XY = {
    normal: POSITIVE_Z,
    distance: 0
};
/* harmony export (immutable) */ __webpack_exports__["d"] = XY;

const YZ = {
    normal: POSITIVE_X,
    distance: 0
};
/* unused harmony export YZ */

const ZX = {
    normal: POSITIVE_Y,
    distance: 0
};
/* unused harmony export ZX */

/**
 * Computes intersection of a plane and a line.
 *
 * @param p The plane.
 * @param l The line.
 * @returns The point or `null` if the line is parallel to the plane.
 */
function getPlaneLineIntersection(p, l) {
    const dotLP = dot(l.tangent, p.normal);
    // If plane normal and line tangent vector are perpendicular intersection is
    // either an empty set or the line itself.
    if (dotLP == 0) {
        return null;
    }
    const intersection = copy(l.tangent);
    muln(intersection, (p.distance - dot(p.normal, l.origin)) / dotLP, intersection);
    add(intersection, l.origin, intersection);
    return intersection;
}
/**
 * Computes an intersection of a plane and a ray and stores it into a given
 * vector.
 *
 * @param plane The plane.
 * @param ray The ray.
 * @param dst The vector the intersection point will be stored to. If there's no
 *      intersection, this vector will be left unmodified.
 * @returns The `dst` or `null` if the ray doesn't have a common point with the
 *      plane.
 */
function getPlaneRayIntersection(plane, ray, dst = create(0, 0, 0)) {
    const dotRP = dot(ray.direction, plane.normal);
    if (dotRP === 0) {
        // The plane normal and the ray direction vector are perpendicular, so
        // intersection is either an empty set or the ray itself.
        return null;
    }
    const lambda = (plane.distance - dot(plane.normal, ray.origin)) / dotRP;
    if (lambda < 0) {
        // The intersection point is on a line that contains the ray, but not on
        // the ray itself.
        return null;
    }
    copy(ray.direction, dst);
    muln(dst, lambda, dst);
    add(dst, ray.origin, dst);
    return dst;
}
/**
 * Computes intersection of two planes.
 *
 * @param p1 The first plane.
 * @param p2 The second plane.
 * @returns The line or `null` if the planes are parallel to each other.
 */
function getPlanePlaneIntersection(p1, p2) {
    const n1 = p1.normal;
    const n2 = p2.normal;
    if (areCollinear(n1, n2)) {
        return null;
    }
    const tangent = cross(n1, n2);
    normalize(tangent);
    return {
        tangent,
        origin: __WEBPACK_IMPORTED_MODULE_0__matrix3__["b" /* solve */](__WEBPACK_IMPORTED_MODULE_0__matrix3__["a" /* fromRows */](n1, n2, tangent), create(p1.distance, p2.distance, 0))
    };
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Base class for primitive objects that are ready to be fed to the renderer.
 */
class RenderablePrimitive {
    constructor(memorySubChunk) {
        this.memorySubChunk = memorySubChunk;
    }
    destroy() {
        this.memorySubChunk.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderablePrimitive;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = create;
/* unused harmony export zero */
/* harmony export (immutable) */ __webpack_exports__["c"] = copy;
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* harmony export (immutable) */ __webpack_exports__["g"] = translate;
/* unused harmony export scale */
/* harmony export (immutable) */ __webpack_exports__["e"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["f"] = perspective;
/* unused harmony export mul */
/* harmony export (immutable) */ __webpack_exports__["b"] = apply;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__(7);

// TODO(dmikis) RoMatrix4?
const IDENTITY = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
];
/* harmony export (immutable) */ __webpack_exports__["a"] = IDENTITY;

const MATRIX_SIZE = 16;
/**
 * Creates and returns a new **uninitialized** matrix.
 */
function create() {
    return new Array(MATRIX_SIZE);
}
/**
 * Zeroes a matrix.
 *
 * @param dst The matrix.
 * @returns `dst`.
 */
function zero(dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; ++i) {
        dst[i] = 0;
    }
    return dst;
}
/**
 * Copies a matrix to another one.
 *
 * @param src The matrix to be copied.
 * @param dst The matrix the `src` will be copied to.
 * @returns `dst`.
 */
function copy(src, dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; ++i) {
        dst[i] = src[i];
    }
    return dst;
}
/**
 * Applies a rotation around the X axis by a given angle to a given matrix.
 * Positive direction is from positive Y to positive Z.
 *
 * @param src The matrix to be multiplied by the rotation matrix.
 * @param angle The angle of rotation.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function rotateX(src, angle, dst = create()) {
    const angleCos = Math.cos(angle);
    const angleSin = Math.sin(angle);
    // The rotation matrix:
    //
    // 1   0    0 0
    // 0 cos -sin 0
    // 0 sin  cos 0
    // 0   0    0 1
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        dst[i] = src[i];
        const m1i = src[i + 1];
        const m2i = src[i + 2];
        dst[i + 1] = m1i * angleCos - m2i * angleSin;
        dst[i + 2] = m1i * angleSin + m2i * angleCos;
        dst[i + 3] = src[i + 3];
    }
    return dst;
}
/**
 * Applies a rotation around the Y axis by a given angle to a given matrix.
 * Positive direction is from positive X to positive Z.
 *
 * @param src The matrix to be multiplied by the rotation matrix.
 * @param angle The angle of rotation.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function rotateY(src, angle, dst = create()) {
    const angleCos = Math.cos(angle);
    const angleSin = Math.sin(angle);
    // The rotation matrix:
    //
    // cos 0 -sin 0
    // 0   1    0 0
    // sin 0  cos 0
    // 0    0   0 1
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        const m0i = src[i];
        const m2i = src[i + 2];
        dst[i] = m0i * angleCos - m2i * angleSin;
        dst[i + 1] = src[i + 1];
        dst[i + 2] = m0i * angleSin + m2i * angleCos;
        dst[i + 3] = src[i + 3];
    }
    return dst;
}
/**
 * Applies a rotation around the X axis by a given angle to a given matrix.
 * Positive direction is from positive X to positive Y.
 *
 * @param src The matrix to be multiplied by the rotation matrix.
 * @param angle The angle of rotation.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function rotateZ(src, angle, dst = create()) {
    const angleCos = Math.cos(angle);
    const angleSin = Math.sin(angle);
    // The rotation matrix:
    // cos -sin 0 0
    // sin  cos 0 0
    //   0    0 1 0
    //   0    0 0 1
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        const m0i = src[i];
        const m1i = src[i + 1];
        dst[i] = m0i * angleCos - m1i * angleSin;
        dst[i + 1] = m0i * angleSin + m1i * angleCos;
        dst[i + 2] = src[i + 2];
        dst[i + 3] = src[i + 3];
    }
    return dst;
}
/**
 * Applies a translation by a given vector to a given matrix.
 *
 * @param src The matrix to be multiplied by the translation matrix.
 * @param translation The translation vector.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function translate(src, translation, dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        const m4i = dst[i + 3] = src[i + 3];
        dst[i] = src[i] + m4i * translation.x;
        dst[i + 1] = src[i + 1] + m4i * translation.y;
        dst[i + 2] = src[i + 2] + m4i * translation.z;
    }
    return dst;
}
/**
 * Applies a scale matrix by given factors (packed into a vector) to a given
 * matrix.
 *
 * @param src The matrix to be multiplied by the scale matrix.
 * @param factor The vector the scale factors packed into.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function scale(src, factor, dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        dst[i] = src[i] * factor.x;
        dst[i + 1] = src[i + 1] * factor.y;
        dst[i + 2] = src[i + 2] * factor.z;
        dst[i + 3] = src[i + 3];
    }
    return dst;
}
// The matrix:
// xAxis.x yAxis.x zAxis.x -eye.x
// xAxis.y yAxis.y zAxis.y -eye.y
// xAxis.z yAxis.z zAxis.z -eye.z
//       0       0       0 1
// where xAxis, yAxis and zAxis — axes of the eye coordinate system, eye —
// origin of the eye coordinate system.
const lookAtMatrix = copy(IDENTITY);
/**
 * Applies a matrix of transformation into a coordinate system of a camera
 * defined by its position, a point it's looking at and an up direction vector.
 *
 * @param src The matrix to be multiplied by the scale matrix.
 * @param eye The position of the camera.
 * @param center The point the camera's looking at.
 * @param up The up vector.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function lookAt(src, eye, center, up, dst = create()) {
    const zAxis = __WEBPACK_IMPORTED_MODULE_0__vector3__["n" /* sub */](eye, center);
    __WEBPACK_IMPORTED_MODULE_0__vector3__["k" /* normalize */](zAxis, zAxis);
    const xAxis = __WEBPACK_IMPORTED_MODULE_0__vector3__["f" /* cross */](up, zAxis);
    __WEBPACK_IMPORTED_MODULE_0__vector3__["k" /* normalize */](xAxis, xAxis);
    const yAxis = __WEBPACK_IMPORTED_MODULE_0__vector3__["f" /* cross */](zAxis, xAxis);
    lookAtMatrix[0] = xAxis.x;
    lookAtMatrix[1] = yAxis.x;
    lookAtMatrix[2] = zAxis.x;
    lookAtMatrix[4] = xAxis.y;
    lookAtMatrix[5] = yAxis.y;
    lookAtMatrix[6] = zAxis.y;
    lookAtMatrix[8] = xAxis.z;
    lookAtMatrix[9] = yAxis.z;
    lookAtMatrix[10] = zAxis.z;
    lookAtMatrix[12] = -__WEBPACK_IMPORTED_MODULE_0__vector3__["g" /* dot */](xAxis, eye);
    lookAtMatrix[13] = -__WEBPACK_IMPORTED_MODULE_0__vector3__["g" /* dot */](yAxis, eye);
    lookAtMatrix[14] = -__WEBPACK_IMPORTED_MODULE_0__vector3__["g" /* dot */](zAxis, eye);
    return mul(src, lookAtMatrix, dst);
}
/**
 * Applies a perspective matrix to a given one.
 *
 * @param src The matrix to be multiplied by the perspective matrix.
 * @param fov Vertical field of view angle.
 * @param aspectRatio Screen aspect ratio.
 * @param zNear Z-coordinate of near clipping plane.
 * @param zFar Z-coordinate of far clipping plane.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function perspective(src, fov, aspect, zNear, zFar, dst = create()) {
    const p11 = 1 / Math.tan(0.5 * fov);
    const p00 = p11 / aspect;
    const p22 = (zNear + zFar) / (zNear - zFar);
    const p32 = 2 * zNear * zFar / (zNear - zFar);
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        dst[i] = src[i] * p00;
        dst[i + 1] = src[i + 1] * p11;
        const m2i = src[i + 2];
        const m3i = src[i + 3];
        dst[i + 2] = m2i * p22 + m3i * p32;
        dst[i + 3] = -m2i;
    }
    return dst;
}
/**
 * Multiplies a matrix by another one, i.e. `dst = m * src`.
 *
 * @param src The right matrix.
 * @param m The left matrix.
 * @param dst The matrix the product will be stored to. Can be the same as `src`.
 * @returns `dst`.
 */
function mul(src, m, dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; i += 4) {
        const m0i = src[i];
        const m1i = src[i + 1];
        const m2i = src[i + 2];
        const m3i = src[i + 3];
        for (let j = 0; j < 4; ++j) {
            dst[i + j] = m0i * m[j] + m1i * m[4 + j] + m2i * m[8 + j] +
                m3i * m[12 + j];
        }
    }
    return dst;
}
/**
 * Applies a matrix to a vector.
 *
 * @param m The matrix.
 * @param v The vector.
 * @returns Normalized product of multiplying the vector by the matrix.
 */
function apply(m, v, dst = __WEBPACK_IMPORTED_MODULE_0__vector3__["e" /* create */](0, 0, 0)) {
    const w = m[3] * v.x + m[7] * v.y + m[11] * v.z + m[15];
    const x = (m[0] * v.x + m[4] * v.y + m[8] * v.z + m[12]) / w;
    const y = (m[1] * v.x + m[5] * v.y + m[9] * v.z + m[13]) / w;
    const z = (m[2] * v.x + m[6] * v.y + m[10] * v.z + m[14]) / w;
    dst.x = x;
    dst.y = y;
    dst.z = z;
    return dst;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gputypes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(70);


const WORD_BYTE_SIZE = 4;
/* harmony export (immutable) */ __webpack_exports__["a"] = WORD_BYTE_SIZE;

/**
 * Generates triangles of a fan of a given length as if it is continuous and
 * starts with 0.
 *
 * @param count Number of vertices in the fan.
 * @returns Iterator over indices of triangles.
 */
function* generateFan(count) {
    for (let i = 2; i < count; ++i) {
        yield 0;
        yield i - 1;
        yield i;
    }
}
/**
 * Generates triangles of a strip of a given length as if it is continuous and
 * starts with 0.
 *
 * @param count Number of vertices in the fan.
 * @returns Iterator over indices of triangles.
 */
function* generateStrip(count) {
    yield 0;
    yield 1;
    yield 2;
    let offset0 = 1;
    let offset1 = 2;
    for (let i = 3; i < count; ++i) {
        yield i - offset0;
        yield i - offset1;
        yield i;
        const tmp = offset0;
        offset0 = offset1;
        offset1 = tmp;
    }
}
/**
 * Vertex buffer helper class, that supports sequential writing interface and takes over some single-buffer operations.
 * It is an integral part of the buffer writer class and its main purpose is to make the writer's code easier.
 */
class VertexBuffer {
    /**
     * @param byteSize Initial size of the buffer in bytes. As it gets filled by words
     *      the size must be a multiply of 4.
     */
    constructor(byteSize) {
        this._nextWordOffset = 0;
        this._initBuffers(byteSize);
    }
    /**
     * @returns true if there is no free space remaining in buffer.
     */
    get isFull() {
        return this._nextWordOffset >= this._uint32View.length;
    }
    /**
     * @returns The number of words (4 bytes values) already written.
     */
    get occupiedSize() {
        return this._nextWordOffset;
    }
    /**
     * @return Max number of bytes this buffer is able to store. It can be increased by the extend() method.
     */
    get byteSize() {
        return this._uint32View.byteLength;
    }
    /**
     * Extends buffer to the new size. The new size must be not less than current one and it must be a multiply of 4.
     */
    extend(newByteSize) {
        // TODO assert newByteLength is larger than current _arrayBuffer and its is a multiply of the word size.
        const oldUint32View = this._uint32View;
        this._initBuffers(newByteSize);
        this._uint32View.set(oldUint32View);
    }
    /**
     * Appends value as a uint32 number.
     */
    pushUint32(value) {
        this._uint32View[this._nextWordOffset++] = value;
    }
    /**
     * Appends value as a float32 number.
     */
    pushFloat32(value) {
        this._float32View[this._nextWordOffset++] = value;
    }
    /**
     * @returns uint8 view of this buffer. The size of the view matches the amount of written data.
     */
    asUint32Array() {
        return this._uint32View.subarray(0, this.occupiedSize);
    }
    _initBuffers(byteLength) {
        const arrayBuffer = new ArrayBuffer(byteLength);
        this._uint32View = new Uint32Array(arrayBuffer);
        this._float32View = new Float32Array(arrayBuffer);
    }
    /**
     * Moves "tail" data (from the offset specified to the end of the buffer) of one buffer to another. The cursors of
     * buffers will be appropriately updated to reflect data changes.
     */
    static transferDataTail(src, dst, srcWordOffset, dstOffset = 0) {
        const tailLength = src.occupiedSize - srcWordOffset;
        const srcTail = src._uint32View.subarray(srcWordOffset, src.occupiedSize);
        dst._uint32View.set(srcTail, dstOffset);
        dst._nextWordOffset = tailLength;
        src._nextWordOffset = srcWordOffset;
    }
}
/**
 * Index buffer helper class, that supports sequential writing interface and takes over some single-buffer operations.
 * It is an integral part of the buffer writer class and its main purpose is to make the writer's code easier.
 */
class IndexBuffer {
    /**
     * @param size Initial size of the buffer.
     */
    constructor(size) {
        this._nextIndexOffset = 0;
        this._uint16View = new Uint16Array(size);
    }
    /**
     * @returns The number of indices already written.
     */
    get occupiedSize() {
        return this._nextIndexOffset;
    }
    /**
     * @return Max number of indices this buffer is able to store. It can be increased by the extend() method.
     */
    get size() {
        return this._uint16View.length;
    }
    /**
     * Extends buffer to the new size.
     */
    extend(newSize) {
        // TODO assert newByteLength is larger than current _arrayBuffer
        const oldUint16View = this._uint16View;
        this._uint16View = new Uint16Array(newSize);
        this._uint16View.set(oldUint16View);
    }
    /**
     * Appends index to the end of the buffer.
     */
    push(index) {
        this._uint16View[this._nextIndexOffset++] = index;
    }
    /**
     * @returns uint16 view of this buffer. The size of the view matches the amount of written data.
     */
    asUint16Array() {
        return new Uint16Array(this._uint16View.buffer, 0, this.occupiedSize);
    }
    /**
     * Moves "tail" data (from the offset specified to the end of the buffer) of one buffer to another. The offsets of
     * buffers will be appropriately updated to reflect data changes.
     * baseIndex will be deducted from all moved indices.
     */
    static transferDataTail(src, dst, baseIndex, srcOffset, dstOffset = 0) {
        for (let i = srcOffset, j = dstOffset; i < src.occupiedSize; i++, j++) {
            dst._uint16View[j] = src._uint16View[i] - baseIndex;
        }
        dst._nextIndexOffset = src.occupiedSize - srcOffset;
        src._nextIndexOffset = srcOffset;
    }
}
/**
 * Base buffer writer implementation. Can write unsigned short indices and
 * provides facilities for child classes to handle writing vertex data. Defines
 * a concept of current mesh. Basically, it mean that all vertices and indices
 * written to a writer between two `endMesh` calls (or construction of the writer
 * and an `endMesh` call) must be considered belonging to one atomic piece of
 * geometry and should not be spitted between separate buffers.
 */
class BufferWriter {
    /**
     * Creates a new writer and allocates initial amount of memory to store data.
     * Also implicitly "start" a mesh.
     *
     * @param vertexByteSize
     * @param initVertexBufferSize Init size (in vertices) of growing vertex buffers.
     * @param maxVertexBufferSize Max size (in vertices) of vertex buffers.
     * @param initIndexBufferUint16Size Init size (in uint16 number) of growing index buffers.
     */
    constructor(vertexByteSize, initVertexBufferSize = 0x400, maxVertexBufferSize = 0x10000, initIndexBufferUint16Size = 0xc00) {
        this._vertexByteSize = vertexByteSize;
        this._initVertexBufferByteSize = vertexByteSize * initVertexBufferSize;
        this._maxVertexBufferByteSize = vertexByteSize * maxVertexBufferSize;
        this._initIndexBufferUint16Size = initIndexBufferUint16Size;
        this._vertexBuffer = new VertexBuffer(this._initVertexBufferByteSize);
        this._vertexBuffers = [this._vertexBuffer];
        this._indexBuffer = new IndexBuffer(this._initIndexBufferUint16Size);
        this._indexBuffers = [this._indexBuffer];
        this._currentMeshVertexOffset = 0;
        this._currentMeshIndexOffset = 0;
        this._currentMeshBaseIndex = 0;
    }
    /**
     * Writes a bunch of indices to the underlying storage as unsigned short
     * numbers. If current storage doesn't have enough space to accommodate
     * given indices, the writer will automatically resize it. The writer
     * automatically adds base index to the supplied values, so from a user
     * point of view first vertex of a mesh has index 0 and there's no need
     * to take into account it's offset while generating mesh's topology.
     *
     * @param indices Array of indices to write.
     */
    writeIndices(indices) {
        this._ensureEnoughIndexBufferSpace(indices.length);
        const buffer = this._indexBuffer;
        const baseIndex = this._currentMeshBaseIndex;
        for (let i = 0; i < indices.length; ++i) {
            buffer.push(baseIndex + indices[i]);
        }
    }
    /**
     * Generates triangle indices from an array of indices of a triangle strip
     * (as in GL) and writes generated triplets to the managed index buffer.
     * @see OpenGL ES 2.0 Spec, §2.6.1
     *
     * @param indices Indices of the strip.
     */
    writeIndicesForStrip(indices) {
        this._ensureEnoughIndexBufferSpace(3 * (indices.length - 2));
        const buffer = this._indexBuffer;
        const baseIndex = this._currentMeshBaseIndex;
        for (const i of generateStrip(indices.length)) {
            buffer.push(baseIndex + indices[i]);
        }
    }
    /**
     * Generates triangle indices from a continuous triangle strip of a given
     * length and writes generated triplets to managed index buffer.
     * @see OpenGL ES 2.0 Spec, §2.6.1
     *
     * @param indexCount
     * @param baseIndexInMesh
     */
    writeIndicesForContinuousStrip(indexCount, baseIndexInMesh = 0) {
        this._ensureEnoughIndexBufferSpace(3 * (indexCount - 2));
        const buffer = this._indexBuffer;
        const baseIndex = this._currentMeshBaseIndex + baseIndexInMesh;
        for (const i of generateStrip(indexCount)) {
            buffer.push(baseIndex + i);
        }
    }
    /**
     * Generates triangle indices from an array of indices of a triangle fan (as
     * in GL) and writes generated triplets to the managed index buffer.
     * @see OpenGL ES 2.0 Spec, §2.6.1
     *
     * @param indices Indices of the strip.
     */
    writeIndicesForFan(indices) {
        this._ensureEnoughIndexBufferSpace(3 * (indices.length - 2));
        const buffer = this._indexBuffer;
        const baseIndex = this._currentMeshBaseIndex;
        for (const i of generateFan(indices.length)) {
            buffer.push(baseIndex + indices[i]);
        }
    }
    /**
     * Generates triangle indices from a continuous triangle fan of a given length
     * and writes generated triplets to managed index buffer.
     * @see OpenGL ES 2.0 Spec, §2.6.1
     *
     * @param indexCount
     * @param baseIndexInMesh
     */
    writeIndicesForContinuousFan(indexCount, baseIndexInMesh = 0) {
        this._ensureEnoughIndexBufferSpace(3 * (indexCount - 2));
        const buffer = this._indexBuffer;
        const baseIndex = baseIndexInMesh + this._currentMeshBaseIndex;
        for (const i of generateFan(indexCount)) {
            buffer.push(baseIndex + i);
        }
    }
    /**
     * Ends current mesh and implicitly starts a new one.
     *
     * @returns Internal index of vertex and index buffers the mesh was written
     *      to and its memory location in them.
     */
    endMesh() {
        const currentMeshVertexOffset = this._currentMeshVertexOffset;
        const vertexOccupiedSize = this._vertexBuffer.occupiedSize;
        this._currentMeshVertexOffset = vertexOccupiedSize;
        this._currentMeshBaseIndex = (vertexOccupiedSize << 2) / this._vertexByteSize;
        const currentMeshIndexOffset = this._currentMeshIndexOffset;
        const indexOccupiedSize = this._indexBuffer.occupiedSize;
        this._currentMeshIndexOffset = indexOccupiedSize;
        return {
            vertexByteOffset: currentMeshVertexOffset << 2,
            vertexByteLength: vertexOccupiedSize - currentMeshVertexOffset << 2,
            indexByteOffset: currentMeshIndexOffset << 1,
            indexByteLength: indexOccupiedSize - currentMeshIndexOffset << 1,
            // We can't return actual buffer reference since it can change if
            // the buffer gets reallocated.
            bufferIndex: this._vertexBuffers.length - 1
        };
    }
    /**
     * Returns an array of currently owned buffer data. This call's better
     * made when you're done with the writer since if the writer decides to
     * resize any of the buffers some of the references in the returned array
     * may become outdated.
     */
    getBuffers() {
        return Object(__WEBPACK_IMPORTED_MODULE_1__array__["a" /* zip */])(this._vertexBuffers, this._indexBuffers, (vertexBuffer, indexBuffer) => ({
            vertexBuffer: vertexBuffer.asUint32Array(),
            indexBuffer: indexBuffer.asUint16Array()
        }));
    }
    /**
     * Returns an offset in the current vertex buffer to the location where next
     * piece of data will be written.
     */
    getCurrentVertexBufferByteOffset() {
        return this._vertexBuffer.occupiedSize << 2;
    }
    /**
     * Returns index of currently written vertex structure in the current vertex
     * buffer.
     */
    getCurrentVertexIdx() {
        return ((this._vertexBuffer.occupiedSize << 2) / this._vertexByteSize | 0) - this._currentMeshBaseIndex;
    }
    /**
     * Writes a floating point value to the current vertex buffer and advances
     * the offset by 4 bytes.
     *
     * @param value The value to be written.
     */
    _writeFloat32(value) {
        this._ensureEnoughVertexBufferSpace();
        this._vertexBuffer.pushFloat32(value);
    }
    /**
     * Writes an unsigned integer value to the current vertex buffer and advances
     * the offset by 4 bytes.
     *
     * @param value The value to be written.
     */
    _writeWord(value) {
        this._ensureEnoughVertexBufferSpace();
        this._vertexBuffer.pushUint32(value);
    }
    /**
     * Writes an unsigned short value to the current vertex buffer and advances
     * the offset by 2 bytes. Passed values will be truncated to 16 bits.
     *
     * @param value The value to be written.
     */
    _writeHalfWords(v1, v2) {
        this._writeWord(v2 << 16 | v1 & 0xffff);
    }
    /**
     * Writes an unsigned byte value to the current vertex buffer and advances
     * the offset by 1 byte. Passed values will be truncated to 8 bits.
     *
     * @param value The value to be written.
     */
    _writeBytes(v1, v2, v3, v4) {
        this._writeWord(v4 << 24 |
            (v3 & 0xff) << 16 |
            (v2 & 0xff) << 8 |
            v1 & 0xff);
    }
    /**
     * Encodes a world coordinate vector as a pair of 32-bit integers (splitting
     * them in turn into to 16-bit ones).
     *
     * @param c The world coordinate.
     */
    _writeWorldCoordinate(c) {
        // To avoid using GPU singed integer conversions we shift and scale world
        // coordinates so they're in [0, 1] range (instead of [-1, 1]) and then
        // encoded as unsigned 32 bit integers split into to 16 bit ones.
        const xUint32 = Object(__WEBPACK_IMPORTED_MODULE_0__gputypes__["b" /* floatToUint32 */])(0.5 * (c.x + 1));
        const yUint32 = Object(__WEBPACK_IMPORTED_MODULE_0__gputypes__["b" /* floatToUint32 */])(0.5 * (c.y + 1));
        this._writeHalfWords(xUint32 >>> 16, yUint32 >>> 16);
        this._writeHalfWords(xUint32, yUint32);
    }
    /**
     * Computes new bigger size of a vertex buffer based on its current size. By
     * default just double the current size.
     *
     * @param currentByteSize Current size of the index buffer in bytes.
     * @returns The new size.
     */
    _getNextVertexBufferByteSize(currentByteSize) {
        return currentByteSize << 1;
    }
    /**
     * Computes new bigger size of an index buffer based on its current size. By
     * default just double the current size.
     *
     * @param currentUint16Size Current size of the index buffer in shorts.
     * @returns The new size.
     */
    _getNextIndexBufferUint16Size(currentUint16Size) {
        return currentUint16Size << 1;
    }
    /**
     * Ensures that the managed vertex buffer has enough space to fit in a chunk
     * of data of a given size. Either does nothing, resizes the current vertex
     * buffer or creates entirely new pair of vertex and index buffers.
     *
     * @param valueSize Byte size of the data that needs to be accommodated by
     *      the vertex buffer.
     */
    _ensureEnoughVertexBufferSpace() {
        const vertexBuffer = this._vertexBuffer;
        if (!vertexBuffer.isFull) {
            // We have enough space, so nothing to be done.
            return;
        }
        if (vertexBuffer.byteSize < this._maxVertexBufferByteSize) {
            // If we can just resize the current vertex buffer, do that.
            this._vertexBuffer.extend(this._getNextVertexBufferByteSize(vertexBuffer.byteSize));
            return;
        }
        // If there's no enough space in the current vertex buffer and it's
        // already of maximum size, allocate new vertex and index buffers and
        // copy data of the current mesh to them from the current buffers.
        // Then make those buffer the current ones.
        const currentMeshVertexOffset = this._currentMeshVertexOffset;
        const currentMeshVertexByteSize = (vertexBuffer.occupiedSize - currentMeshVertexOffset) * 4;
        const maxVertexBufferByteSize = this._maxVertexBufferByteSize;
        if (currentMeshVertexByteSize == maxVertexBufferByteSize) {
            throw new Error('Mesh is too big to fit in.');
        }
        let newVertexBufferByteSize = this._initVertexBufferByteSize;
        // Initial vertex buffer size may be too small to accommodate the current
        // mesh, so we find next bigger size that is sufficient.
        while (newVertexBufferByteSize <= currentMeshVertexByteSize) {
            newVertexBufferByteSize = this._getNextVertexBufferByteSize(newVertexBufferByteSize);
        }
        const newVertexBuffer = new VertexBuffer(newVertexBufferByteSize);
        VertexBuffer.transferDataTail(vertexBuffer, newVertexBuffer, currentMeshVertexOffset);
        this._vertexBuffer = newVertexBuffer;
        this._vertexBuffers.push(newVertexBuffer);
        this._currentMeshVertexOffset = 0;
        const indexBuffer = this._indexBuffer;
        const currentMeshIndexOffset = this._currentMeshIndexOffset;
        const currentMeshIndexSize = indexBuffer.occupiedSize - currentMeshIndexOffset;
        let newIndexBufferSize = this._initIndexBufferUint16Size;
        // Initial index buffer size may be too small to accommodate the current
        // mesh, so we find next bigger size that is sufficient.
        while (newIndexBufferSize <= currentMeshIndexSize) {
            newIndexBufferSize = this._getNextIndexBufferUint16Size(newIndexBufferSize);
        }
        const newIndexBuffer = new IndexBuffer(newIndexBufferSize);
        // Since the current mesh's copied to the beginning of the new vertex
        // buffer, it's base index now is 0. If the mesh has any written indices,
        // they're already offset by the old base index.
        IndexBuffer.transferDataTail(indexBuffer, newIndexBuffer, this._currentMeshBaseIndex, currentMeshIndexOffset);
        this._currentMeshBaseIndex = 0;
        this._currentMeshIndexOffset = 0;
        this._indexBuffer = newIndexBuffer;
        this._indexBuffers.push(newIndexBuffer);
    }
    /**
     * Ensures that the managed index buffer has enough space to fit in a given
     * number of indices. Either does nothing or resizes the current index
     * buffer.
     *
     * @param indexCount Number of indices client wants to write to the managed
     *      index buffer.
     */
    _ensureEnoughIndexBufferSpace(indexCount) {
        const buffer = this._indexBuffer;
        const requiredSize = buffer.occupiedSize + indexCount;
        if (requiredSize <= buffer.size) {
            // We have enough space so nothing to be done.
            return;
        }
        let newBufferSize = buffer.size;
        // Let's compute new larger size of the index buffer until we can
        // accommodate incoming data.
        while (requiredSize > newBufferSize) {
            newBufferSize = this._getNextIndexBufferUint16Size(newBufferSize);
        }
        this._indexBuffer.extend(newBufferSize);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = BufferWriter;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = floatToUint16;
/* unused harmony export floatToInt16 */
/* harmony export (immutable) */ __webpack_exports__["b"] = floatToUint32;
/* unused harmony export floatToInt32 */
/* unused harmony export int32ToFloat */
/* unused harmony export uint32ToFloat */
/* unused harmony export int16ToFloat */
/* harmony export (immutable) */ __webpack_exports__["c"] = int24ToFloat;
/* harmony export (immutable) */ __webpack_exports__["d"] = uint16ToFloat;
const UINT16_MAX = 0xffff;
const UINT32_MAX = 0xffffffff;
function floatToUint16(x) {
    return x * UINT16_MAX | 0;
}
function floatToInt16(x) {
    return (x * UINT16_MAX - 1) / 2 | 0;
}
function floatToUint32(x) {
    return x * UINT32_MAX | 0;
}
function floatToInt32(x) {
    return (x * UINT32_MAX - 1) / 2 | 0;
}
function int32ToFloat(x) {
    return (2 * x + 1) / UINT32_MAX;
}
function uint32ToFloat(x) {
    return x / UINT32_MAX;
}
function int16ToFloat(x) {
    return (2 * x + 1) / UINT16_MAX;
}
function int24ToFloat(x) {
    return Math.max(-1, x / 0x7fffff);
}
function uint16ToFloat(x) {
    return x / UINT16_MAX;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["b"] = cycleRestrict;
/* unused harmony export mix */
/* harmony export (immutable) */ __webpack_exports__["c"] = smoothStep;
/**
 * Clamps a value to a given range.
 *
 * @param x The value.
 * @param min Start of the range.
 * @param max End of the range.
 * @returns Clamped value.
 */
function clamp(x, min, max) {
    return min < x ? x < max ? x : max : min;
}
/**
 * Restricts a value to a given cycled range, i.e. ends of the range are
 * equivalent. E.g. like angles can be restricted to any range of size `2 * PI`.
 *
 * @param x The value.
 * @param min Start of the range.
 * @param max End of the range.
 * @returns Restricted value.
 */
function cycleRestrict(x, min, max) {
    const d = max - min;
    const s = (x - min) / (max - min);
    return min + d * (s - Math.floor(s));
}
/**
 * Linear interpolation.
 *
 * @param min Value that correspond to 0% progress.
 * @param max Value that correspond to 100% progress.
 * @param progress In 0..1.0 range that maps to 0..100% progress. It is allowed to pass a value
 *      outside of this range, that means progress greater then 100% or negative progress.
 */
function mix(min, max, progress) {
    return (1 - progress) * min + progress * max;
}
/**
 * A step function with a smooth transition between given edges. Completely
 * analogous to `smoothstep` in GLSL (GLSL ES 1.0 §8.3).
 *
 * @param edge1 The smaller edge.
 * @param edge2
 * @param x `0` if `x < edge1`, `1` if `x > edge2` and an interpolated value for
 *      `edge1 < x < edge2`.
 */
function smoothStep(edge1, edge2, x) {
    const factor = clamp((x - edge1) / (edge2 - edge1), 0, 1);
    return factor * factor * (3 - 2 * factor);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findInIterable */
/* harmony export (immutable) */ __webpack_exports__["c"] = mapIterable;
/* harmony export (immutable) */ __webpack_exports__["b"] = filterIterable;
/* unused harmony export reduceIterable */
/* unused harmony export oneOfIterable */
/* harmony export (immutable) */ __webpack_exports__["a"] = allOfIterable;
/* unused harmony export rangeIterable */
/* unused harmony export zipIterables */
/**
 * Searches for the first collection item satisfying a predicate.
 *
 * @param collection The collection.
 * @param predicate The predicate.
 * @returns The first item satisfying the predicate or `undefined` if none found.
 */
function findInIterable(collection, predicate) {
    for (const item of collection) {
        if (predicate(item)) {
            return item;
        }
    }
    return;
}
/**
 * Transforms a collection to another one.
 *
 * @param collection The source collection.
 * @param mapper A function producing items for destination collection.
 * @returns Collection of produced items.
 */
function* mapIterable(collection, mapper) {
    for (const item of collection) {
        yield mapper(item);
    }
}
/**
 * Chooses items of a collection satisfying a predicate.
 *
 * @param collection The collection.
 * @param predicate The predicate.
 * @returns Collection of chosen items.
 */
function* filterIterable(collection, predicate) {
    for (const item of collection) {
        if (predicate(item)) {
            yield item;
        }
    }
}
/**
 * Traverses a collection from left to right recomputing an accumulator on every
 * iteration.
 *
 * @param collection The collection.
 * @param reducer The function used to compute next value of the accumulator.
 * @param initial
 * @returns Value of the accumulator.
 */
function reduceIterable(collection, reducer, initial) {
    let result = initial;
    for (const item of collection) {
        result = reducer(result, item);
    }
    return result;
}
/**
 * Checks if there's at least one item in a collection satisfying a predicate.
 *
 * @param collection The collection.
 * @param predicate The predicate.
 * @returns `true` if for at least one item in the collection the predicate returns
 *      `true` and `false` otherwise.
 */
function oneOfIterable(collection, predicate) {
    for (const item of collection) {
        if (predicate(item)) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if all items of a collection satisfy a predicate.
 *
 * @param collection The collection.
 * @param predicate The predicate.
 * @returns `false` if for at least one item in the collection the predicate returns
 *      `false` and `true` otherwise.
 */
function allOfIterable(collection, predicate) {
    for (const item of collection) {
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}
/**
 * Creates an iterator for [startIndex, startIndex+length) range.
 */
function* rangeIterable(length, startIndex = 0) {
    const endIndex = startIndex + length;
    for (let i = startIndex; i < endIndex; i++) {
        yield i;
    }
}
function* zipIterables(ts, us, zipper = (t, u) => [t, u]) {
    const tIterator = ts[Symbol.iterator]();
    const uIterator = us[Symbol.iterator]();
    for (let t = tIterator.next(), u = uIterator.next(); !(t.done || u.done); t = tIterator.next(), u = uIterator.next()) {
        yield zipper(t.value, u.value);
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = copy;
/* harmony export (immutable) */ __webpack_exports__["a"] = areEqual;
/* unused harmony export decodeAbgr8 */
/* unused harmony export encodeRgba8 */
/* unused harmony export isOpaque */
const OPAQUE_BLACK = create(0, 0, 0, 1);
/* unused harmony export OPAQUE_BLACK */

const TRANSPARENT_BLACK = create(0, 0, 0, 0);
/* unused harmony export TRANSPARENT_BLACK */

/**
 * @param r Red component as a normalized value [0..1]
 * @param g Green component as a normalized value [0..1]
 * @param b Blue component as a normalized value [0..1]
 * @param a Alpha component as a normalized value [0..1]
 *
 * @returns A color with given values assigned to components.
 */
function create(r, g, b, a = 1) {
    return { r, g, b, a };
}
/**
 * Copies a color to another one.
 *
 * @param src The source color.
 * @param dst The color the source color will be copied to.
 * @returns `dst`.
 */
function copy(src, dst = create(0, 0, 0, 0)) {
    dst.r = src.r;
    dst.g = src.g;
    dst.b = src.b;
    dst.a = src.a;
    return dst;
}
function areEqual(c1, c2) {
    return c1.r == c2.r && c1.g == c2.g && c1.b == c2.b && c1.a == c2.a;
}
/**
 * Decodes a color represented as four 8-bit channels encoded into a 32-bit
 * number in ABGR order (from MSB to LSB).
 *
 * @param color Color encoded into unsigned 32-bit integer.
 * @returns Decoded color.
 */
function decodeAbgr8(color) {
    return {
        r: (color >>> 24) / 0xff,
        g: (color >>> 16 & 0xff) / 0xff,
        b: (color >>> 8 & 0xff) / 0xff,
        a: (color & 0xff) / 0xff
    };
}
/**
 * Encodes a color components into four 8 bit numbers packed into 32-bit one.
 *
 * @param c The color to be encoded.
 * @returns The color as 32-bit integer.
 */
function encodeRgba8(c) {
    return (c.r * 0xff |
        (c.g * 0xff << 8) |
        (c.b * 0xff << 16) |
        (c.a * 0xff << 24));
}
/**
 * Checks if a color is completely opaque.
 *
 * @param color The color to be checked.
 * @returns `true` if the color is opaque and `false` otherwise.
 */
function isOpaque(color) {
    return color.a === 1;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosition;\nattribute vec2 vertexUv;\n\n#ifndef YV_LEAST_16b_P\n#   ifdef GL_FRAGMENT_PRECISION_HIGH\n#       define YV_LEAST_16b_P highp\n#   else\n#       define YV_LEAST_16b_P mediump\n#   endif\n#endif\n\nvarying YV_LEAST_16b_P vec2 uv;\n\nvoid main(void) {\n    gl_Position = vec4(vertexPosition, 0, 1);\n    uv = vertexUv;\n}\n"

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Simple reference counting for shared entities that need explicit destruction.
 */
class ReferenceCounted {
    /**
     * Initializes reference count to 1.
     */
    constructor() {
        this._refCount = 1;
    }
    /**
     * Increments reference count.
     */
    retain() {
        if (this._refCount == 0) {
            throw new Error('Tried to retain a destroyed object.');
        }
        this._refCount++;
    }
    /**
     * Decrements reference count and, if it's reached 0, destroys the object.
     */
    release() {
        if (this._refCount == 0) {
            throw new Error('Tried to release a destroyed object.');
        }
        this._refCount--;
        if (this._refCount === 0) {
            this.destroy();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReferenceCounted;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DelegatorBase {
    constructor() {
        this._delegate = null;
    }
    setDelegate(delegate) {
        this._delegate = delegate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DelegatorBase;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binary_tree__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_set__ = __webpack_require__(55);


/**
 * Alignes an offset so it's a multiple of an alignment.
 *
 * @param offset The offset.
 * @param alignment The alignment.
 * @returns Aligned offset.
 */
function align(offset, alignment) {
    return alignment * Math.ceil(offset / alignment);
}
class ArenaAllocator {
    /**
     * Constructs a new empty arena allocator.
     *
     * @param size Size of managed region.
     * @param alignment alignment of offsets.
     */
    constructor(size, alignment = 1) {
        this._size = size;
        this._alignment = alignment;
        this._freeOffset = 0;
        this._allocatedOffsets = new Set();
    }
    get size() {
        return this._size;
    }
    get maxAllocableSize() {
        return this._size - this._freeOffset;
    }
    get isEmpty() {
        return this._allocatedOffsets.size === 0;
    }
    allocate(size) {
        if (this._size >= this._freeOffset + size) {
            const offset = this._freeOffset;
            this._freeOffset = align(offset + size, this._alignment);
            this._allocatedOffsets.add(offset);
            return offset;
        }
        else {
            return -1;
        }
    }
    deallocate(offset) {
        this._allocatedOffsets.delete(offset);
    }
    isAllocated(offset) {
        return offset < this._freeOffset;
    }
    extend(newSize) {
        if (newSize < this._freeOffset) {
            throw new Error('Could not reduce the size because it conflicts with already allocated region.');
        }
        this._size = newSize;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ArenaAllocator;

/**
 * Allocator optimised for both primary operations: allocation and deallocation. It uses BST for efficient lookup of
 * suitable free region during allocation and two way linked list for fast adjacent free regions merge.
 * Max allocable size is also determined by means of the BST.
 */
class FreeListAllocator {
    constructor(size) {
        this._size = size;
        this._allRegions = new __WEBPACK_IMPORTED_MODULE_1__linked_set__["a" /* default */]();
        this._occupiedRegions = new Map();
        this._freeRegions = new __WEBPACK_IMPORTED_MODULE_0__binary_tree__["a" /* BinarySearchTree */]((rangeA, rangeB) => rangeA.size - rangeB.size);
        const initRegion = { offset: 0, size };
        this._allRegions.insert(initRegion);
        initRegion._freeNode = this._freeRegions.insert(initRegion);
    }
    get size() {
        return this._size;
    }
    get maxAllocableSize() {
        const max = this._freeRegions.max;
        return max ? max.size : 0;
    }
    get isEmpty() {
        return this._occupiedRegions.size == 0;
    }
    allocate(size) {
        const node = this._findMinSuitable(size);
        if (!node) {
            return -1;
        }
        const range = node.value;
        // current region is not available anymore
        // it is removed from the free regions pool
        this._freeRegions.remove(node);
        // new occupied one is created
        const occupiedRange = { offset: range.offset, size };
        this._occupiedRegions.set(range.offset, occupiedRange);
        this._allRegions.insertAfter(range, occupiedRange);
        this._allRegions.remove(range);
        // dont loose remaining if any
        // it should be returned back to the free regions pool
        if (range.size > size) {
            const remainingRange = { offset: range.offset + size, size: range.size - size };
            remainingRange._freeNode = this._freeRegions.insert(remainingRange);
            this._allRegions.insertAfter(occupiedRange, remainingRange);
        }
        return occupiedRange.offset;
    }
    deallocate(offset) {
        let region = this._occupiedRegions.get(offset);
        if (region) {
            // check if the region can be merged with its previous neighbor
            const prev = this._allRegions.getPrev(region);
            if (prev && prev._freeNode) {
                const embracingRange = { offset: prev.offset, size: prev.size + region.size };
                this._allRegions.insertAfter(prev, embracingRange);
                this._allRegions.remove(region);
                this._allRegions.remove(prev);
                this._freeRegions.remove(prev._freeNode);
                region = embracingRange;
            }
            // check if the region can be merged with its next neighbor
            const next = this._allRegions.getNext(region);
            if (next && next._freeNode) {
                const embracingRange = { offset: region.offset, size: region.size + next.size };
                this._allRegions.insertBefore(next, embracingRange);
                this._allRegions.remove(region);
                this._allRegions.remove(next);
                this._freeRegions.remove(next._freeNode);
                region = embracingRange;
            }
            this._occupiedRegions.delete(offset);
            region._freeNode = this._freeRegions.insert(region);
        }
    }
    isAllocated(offset) {
        return this._occupiedRegions.has(offset);
    }
    extend(newSize) {
        if (newSize < this._size) {
            throw new Error('Size reducing is not allowed in free list allocator');
        }
        const diff = newSize - this._size;
        const last = this._allRegions.end;
        if (last && last._freeNode) {
            this._freeRegions.remove(last._freeNode);
            const region = { offset: last.offset, size: last.size + diff, isFree: true };
            this._allRegions.insertAfter(last, region);
            this._allRegions.remove(last);
            this._freeRegions.insert(region);
        }
        else {
            const region = { offset: this._size, size: diff, isFree: true };
            this._allRegions.insert(region);
            this._freeRegions.insert(region);
        }
        this._size = newSize;
    }
    /**
     * Traverses BST to find the smallest region required size can fit.
     */
    _findMinSuitable(size) {
        let node = this._freeRegions.root;
        let best;
        while (node) {
            if (node.value.size === size) {
                best = node;
                break;
            }
            else if (node.value.size < size) {
                node = node.right;
            }
            else {
                best = node;
                node = node.left;
            }
        }
        return best;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = FreeListAllocator;



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nuniform float dpr;\nuniform sampler2D atlas;\nuniform vec2 atlasSize;\n\nvarying vec2 uv;\nvarying lowp vec4 color;\nvarying lowp vec4 outlineColor;\nvarying float scale;\n\nconst float MAX_CORRECTED_GLYPH_SCALE = 0.5;\nconst float GLYPH_BASE_WEIGHT = 0.7;\nconst float GLYPH_BASE_SMOTHNESS = 0.1;\nconst float GLYPH_WEIGHT_SCALE_IMPACT = 0.1;\nconst float GLYPH_SMOOTHNESS_SCALE_IMPACT = 0.06;\nconst float OUTLINE_WEIGHT_SCALE_IMPACT = 0.125;\n\nvoid main(void) {\n#ifdef COLOR_ID_MODE\n    gl_FragColor = color;\n#else\n    // low scale glyphs (less than 0.5) should be a little bit bolder and smoother\n    float scaleClamped = clamp(scale, 0.0, MAX_CORRECTED_GLYPH_SCALE);\n    // weight is responsible for glyph boldness, the less weight value the bolder the text\n    float weight = GLYPH_BASE_WEIGHT + GLYPH_WEIGHT_SCALE_IMPACT * scaleClamped;\n    // smoothness is how blurred glyphs are, the less smoothness value the less blurring\n    float smoothness = (GLYPH_BASE_SMOTHNESS + GLYPH_SMOOTHNESS_SCALE_IMPACT / scaleClamped) / dpr;\n\n    vec4 resultColor = color;\n    float dist = texture2D(atlas, uv / atlasSize).a;\n    float alpha = smoothstep(weight - smoothness, weight + smoothness, dist);\n\n    if (outlineColor.a != 0.0) {\n        // to render outline the glyph is rendered a little bit bolder with different color at edges\n        weight = weight - OUTLINE_WEIGHT_SCALE_IMPACT / scale;\n        resultColor = mix(outlineColor, color, alpha);\n        alpha = smoothstep(weight - smoothness, weight + smoothness, dist);\n    }\n\n    gl_FragColor = vec4(resultColor.rgb, resultColor.a * alpha);\n\n    gl_FragColor = vec4(0, 1, 0, 1);\n#endif\n}\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nvarying lowp vec4 color;\n\nvoid main(void) {\n    gl_FragColor = color;\n}\n"

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memory_count_vertices__ = __webpack_require__(3);




/**
 * Base renderer that incapsulates all the GL specifics to make labels rendered.
 */
class LabelRenderer extends __WEBPACK_IMPORTED_MODULE_2__primitive_renderer__["a" /* default */] {
    constructor(context, program, colorIdProgram) {
        super(context, new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_0__state__["a" /* BLEND_OVER_RENDER_STATE */]), program);
        this._colorIdMode = {
            enabled: false,
            program: colorIdProgram,
            stabilityShift: __WEBPACK_IMPORTED_MODULE_1__math_vector2__["e" /* create */](0, 0)
        };
    }
    render(target, uniforms) {
        this._colorIdMode.enabled = false;
        super.render(target, uniforms);
    }
    renderVisible(target, uniforms, visibility) {
        this._visibility = visibility;
        this._colorIdMode.enabled = false;
        super.render(target, uniforms);
    }
    renderInColorIdMode(target, uniforms, stabilityShift) {
        delete this._visibility;
        this._colorIdMode.enabled = true;
        this._colorIdMode.stabilityShift = stabilityShift;
        super.render(target, uniforms);
    }
    renderInColorIdModeReversePriority(target, uniforms, stabilityShift) {
        delete this._visibility;
        this._colorIdMode.enabled = true;
        this._colorIdMode.stabilityShift = stabilityShift;
        super.render(target, uniforms);
    }
    destroy() {
        super.destroy();
        this._visibility.destroy();
        this._colorIdMode.program.destroy();
    }
    _renderPrimitives(primitives) {
        if (this._visibility) {
            this._context.bindTextureUnit(1);
            this._context.bindTexture(this._visibility);
            this._program.setIntScalarUniform('visibility', 1);
            this._program.setVector2Uniform('visibilitySize', __WEBPACK_IMPORTED_MODULE_1__math_vector2__["e" /* create */](this._visibility.getWidth(), this._visibility.getHeight()));
        }
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            if (!this._colorIdMode.enabled) {
                const atlas = memoryBatch.firstPrimitive.atlas;
                this._program.setIntScalarUniform('atlas', 0);
                this._program.setVector2Uniform('atlasSize', __WEBPACK_IMPORTED_MODULE_1__math_vector2__["e" /* create */](atlas.width, atlas.height));
                this._context.bindTextureUnit(0);
                this._context.bindTexture(atlas.texture);
            }
            else {
                this._program.setVector2Uniform('shift', this._colorIdMode.stabilityShift);
            }
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_3__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _bindProgram(program, uniforms) {
        super._bindProgram(program, uniforms);
        program.setVector2Uniform('pixelSize', uniforms.pixelSize);
        if (!this._colorIdMode.enabled) {
            program.setScalarUniform('dpr', window.devicePixelRatio);
        }
    }
    _bindRenderState(state) {
        if (!this._colorIdMode.enabled) {
            super._bindRenderState(state);
        }
    }
    _canBatch(a, b) {
        return super._canBatch(a, b) && (a.atlas == b.atlas);
    }
    get _program() {
        return this._colorIdMode.enabled ? this._colorIdMode.program : super._program;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LabelRenderer;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = areFuzzyEqual;
const DEFAULT_TOLERANCE = 1e-6;
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TOLERANCE;

/**
 * Checks if two floating point number are within a tolerance from each other.
 *
 * @param a The first number.
 * @param b The second number.
 * @param tolerance The tolerance.
 * @returns `true` if the number are within the tolerance and `false` otherwise.
 */
function areFuzzyEqual(a, b, tolerance = DEFAULT_TOLERANCE) {
    const d = a - b;
    return -tolerance < d && d < tolerance;
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_image_vert__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_image_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_image_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_image_frag__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_image_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shader_image_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__ = __webpack_require__(3);






const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_1__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_1__state__["a" /* BLEND_OVER_RENDER_STATE */]);
/**
 * Renderer of image primitives.
 */
class ImageRenderer extends __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__["a" /* default */] {
    constructor(context, program) {
        super(context, RENDER_STATE, program || context.createProgram(__WEBPACK_IMPORTED_MODULE_2__shader_image_vert___default.a, __WEBPACK_IMPORTED_MODULE_3__shader_image_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexUV: 4 /* UV */
            }
        }));
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            const atlas = memoryBatch.firstPrimitive.atlas;
            if (atlas.isDirty) {
                atlas.syncTexture();
            }
            this._program.setIntScalarUniform('atlas', 0);
            this._program.setVector2Uniform('atlasSize', Object(__WEBPACK_IMPORTED_MODULE_4__math_vector2__["e" /* create */])(atlas.width, atlas.height));
            this._context.bindTextureUnit(0);
            this._context.bindTexture(atlas.texture);
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _canBatch(a, b) {
        return super._canBatch(a, b) && (a.atlas == b.atlas);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageRenderer;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostprocessType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shaders_quad_vert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shaders_quad_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shaders_quad_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaders_fill_frag__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaders_fill_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shaders_fill_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(0);



const POSTPROCESSING_STATE = new __WEBPACK_IMPORTED_MODULE_2__state__["b" /* default */]({
    depthMask: false,
    depthTest: false
});
var PostprocessType;
(function (PostprocessType) {
    PostprocessType[PostprocessType["COPY"] = 0] = "COPY";
    PostprocessType[PostprocessType["BACKGROUND"] = 1] = "BACKGROUND";
})(PostprocessType || (PostprocessType = {}));
/**
 * Renderer of postprocessing pass.
 */
class PostprocessRenderer {
    constructor(context, type) {
        this._context = context;
        this._type = type;
        let defines;
        switch (type) {
            case PostprocessType.COPY:
                defines = {
                    YV_TEXTURE_FILL: 1
                };
                break;
            case PostprocessType.BACKGROUND:
                defines = {
                    YV_BACKGROUND: 1
                };
                break;
        }
        this._program = context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shaders_quad_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__shaders_fill_frag___default.a, {
            defines,
            attribMap: {
                vertexPosition: 0 /* POSITION */,
                vertexUv: 4 /* UV */
            }
        });
    }
    destroy() {
        this._program.destroy();
    }
    render(target, sourceColorBuffer) {
        const context = this._context;
        context.bindRenderTarget(target);
        context.bindProgram(this._program);
        context.bindRenderState(POSTPROCESSING_STATE);
        context.bindTextureUnit(0);
        switch (this._type) {
            case PostprocessType.COPY:
                context.bindTexture(sourceColorBuffer);
                this._program.setIntScalarUniform('texture', 0);
                break;
            case PostprocessType.BACKGROUND:
                this._program.setScalarUniform('dpr', window.devicePixelRatio);
                break;
        }
        context.bindQuadVao();
        context.drawQuad();
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = PostprocessRenderer;



/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\n#ifdef GL_EXT_draw_buffers\n#   extension GL_EXT_draw_buffers : enable\n#endif\n\n#ifndef YV_LEAST_16b_P\n#   ifdef GL_FRAGMENT_PRECISION_HIGH\n#       define YV_LEAST_16b_P highp\n#   else\n#       define YV_LEAST_16b_P mediump\n#   endif\n#endif\n\n#ifdef YV_TEXTURE_FILL\n    varying YV_LEAST_16b_P vec2 uv;\n    uniform lowp sampler2D texture;\n#else\n    varying lowp vec4 color;\n#endif\n\n#ifdef YV_OPACITY\n    uniform mediump float opacity;\n#endif\n\nlowp vec4 yvPremultiplyAlpha(const in lowp vec4 color) {\n    return vec4(color.rgb * color.a, color.a);\n}\n\n#ifdef YV_BACKGROUND\nuniform mediump float dpr;\nlowp vec3 pattern(in mediump vec2 coord) {\n    mediump vec2 uv = mod(coord, 16.) - 8.;\n\n    return mix(vec3(233./255.), vec3(250./255.), smoothstep(0.5, 1.5, length(uv)));\n}\n#endif\n\nvoid main(void) {\n#ifdef YV_BACKGROUND\n    gl_FragColor = vec4(pattern(gl_FragCoord.xy / dpr), 1.0);\n#else\n\n#   ifdef YV_TEXTURE_FILL\n    lowp vec4 color = texture2D(texture, uv);\n#   endif\n\n#   if defined(GL_EXT_draw_buffers) && defined(YV_OIT)\n    gl_FragData[0] = yvPremultiplyAlpha(color);\n    gl_FragData[1].r = color.a;\n#   elif defined(YV_OIT_ALPHA_PASS)\n    gl_FragColor.r = color.a;\n#   else\n    gl_FragColor = yvPremultiplyAlpha(color);\n#   endif\n\n#   ifdef YV_OPACITY\n    gl_FragColor *= opacity;\n#   endif\n#endif\n}\n"

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_polyline_vert__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_polyline_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_polyline_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_polyline_frag__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_polyline_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_polyline_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_polyline_renderer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memory_count_vertices__ = __webpack_require__(3);





/**
 * Renderer of polyline primitives. Its default render state is aimed to render opaque polylines.
 */
class PolylineRenderer extends __WEBPACK_IMPORTED_MODULE_3__base_polyline_renderer__["a" /* default */] {
    constructor(context, renderState = new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](PolylineRenderer.DEFAULT_RENDER_STATE_PARAMS)) {
        super(context, renderState, context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_polyline_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_polyline_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexDisplacement: 6 /* DISPLACEMENT */,
                vertexColor: 7 /* COLOR */,
                vertexZIndex: 9 /* PRIORITY */,
                vertexWidth: 11 /* AUX */
            }
        }));
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_4__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PolylineRenderer;

PolylineRenderer.DEFAULT_RENDER_STATE_PARAMS = {
    depthTest: true,
    depthFunc: 518 /* GREATER_OR_EQUAL */
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__ = __webpack_require__(5);

/**
 * Base renderer of polyline primitives.
 */
class BasePolylineRenderer extends __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__["a" /* default */] {
    _bindProgram(program, uniforms) {
        super._bindProgram(program, uniforms);
        program.setScalarUniform('worldToPxFactor', uniforms.worldToPxFactor);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BasePolylineRenderer;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_polygon_vert__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_polygon_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_polygon_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_polygon_frag__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_polygon_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_polygon_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memory_count_vertices__ = __webpack_require__(3);





/**
 * Renderer of polygon primitives.
 */
class PolygonRenderer extends __WEBPACK_IMPORTED_MODULE_3__primitive_renderer__["a" /* default */] {
    constructor(context, renderState = new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](PolygonRenderer.DEFAULT_RENDER_STATE_PARAMS)) {
        super(context, renderState, context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_polygon_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_polygon_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexColor: 7 /* COLOR */,
                vertexZIndex: 10 /* Z_INDEX */
            }
        }));
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_4__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PolygonRenderer;

PolygonRenderer.DEFAULT_RENDER_STATE_PARAMS = {
    depthTest: true,
    depthFunc: 518 /* GREATER_OR_EQUAL */
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__font__ = __webpack_require__(105);

const UNKNOWN_GLYPH = {
    id: -1,
    width: 0,
    height: 0,
    bearingX: 0,
    bearingY: 0,
    advance: 18
};
/**
 * Font whose glyphs are specified in distance field bitmaps. It's "margin" metric specifies glyph bitmap inner padding,
 * that is required to fit a "blurred" glyph image. This margin should be considered during layouting to draw glyphs of
 * proper sizes.
 */
class DfFont extends __WEBPACK_IMPORTED_MODULE_0__font__["a" /* default */] {
    constructor(id, xheight, margin) {
        super(id, xheight, UNKNOWN_GLYPH);
        this.margin = margin;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DfFont;



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTileIdByRawValues */
/* harmony export (immutable) */ __webpack_exports__["a"] = getTileId;
function getTileIdByRawValues(x, y, zoom) {
    return `${x}:${y}:${zoom}`;
}
function getTileId(tile) {
    return getTileIdByRawValues(tile.x, tile.y, tile.zoom);
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_vertices__ = __webpack_require__(3);

/**
 * Represents a region in a memory chunk. Memory is allocated by big chunks for performance reasons,
 * and we need a mechanism to control those chunk's suballocation to properly free
 * the occupied memory - that is what this class is for.
 */
class MemorySubChunk {
    constructor(chunk, location) {
        this.memoryChunk = chunk;
        this._location = location;
        chunk.retain();
    }
    /**
     * @returns Offset of vertex data of the chunk in bytes.
     */
    get vertexByteOffset() {
        return this.memoryChunk.vertexByteOffset + this._location.vertexByteOffset;
    }
    /**
     * @returns Offset of index data of the chunk in bytes.
     */
    get indexByteOffset() {
        return this.memoryChunk.indexByteOffset + this._location.indexByteOffset;
    }
    /**
     * @returns Number of indexes occupied by this chunk.
     */
    get indexCount() {
        return Object(__WEBPACK_IMPORTED_MODULE_0__count_vertices__["a" /* countIndices */])(this._location.indexByteLength, this.memoryChunk.page.indexType);
    }
    /**
     * @returns Number of bytes occupied by this chunk for vertex data.
     */
    get vertexByteLength() {
        return this._location.vertexByteLength;
    }
    /**
     * @returns Number of bytes occupied by this chunk for index data.
     */
    get indexByteLength() {
        return this._location.indexByteLength;
    }
    destroy() {
        this.memoryChunk.release();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MemorySubChunk;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

class RenderablePolyline extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
    constructor(memorySubChunk, isOpaque) {
        super(memorySubChunk);
        this.isOpaque = isOpaque;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderablePolyline;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_model_renderable_model__ = __webpack_require__(132);


/**
 * Extruded polygon that can have an association external 3D object. If it has one it hides itself once the object
 * is ready to be displayed.
 * See PolygonObjects from tile.proto.
 */
class ApiModel extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    constructor(styles, memorySubChunk) {
        super(styles);
        this.renderableModel = new __WEBPACK_IMPORTED_MODULE_1__primitive_model_renderable_model__["a" /* default */](memorySubChunk);
    }
    destroy() {
        this.renderableModel.destroy();
        super.destroy();
    }
    /**
     * Updates mesh's visibility.
     */
    onVisibilityChanged(_isVisible) {
        // TODO
    }
    /**
     * Updates mesh's style.
     */
    onStyleChanged(_style) {
        // TODO
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ApiModel;

/**
 * External 3D object can be shared among multiple polygons (that span different tiles). Moreover, polygons on
 * different zoom generally represent the same 3D object. But the object should be requested, parsed and added to
 * the map only once, and removed when no one need it.
 */
class ApiPolygonMesh extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    constructor(externalMesh, styles) {
        super([]);
        this.externalMesh = externalMesh;
        this.styles = styles;
    }
    onVisibilityChanged(_isVisible) {
        // do nothing, it is stub
    }
    onStyleChanged(_style) {
        // do nothing, it is stub
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiPolygonMesh;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__ = __webpack_require__(10);


/**
 * Base class for 3D models buffer writers. It is not supposed to write indices, instead it writes vertices (possibly
 * duplicated) in order that correspond to triangular facets of the mesh.
 */
class ModelBufferWriter extends __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__["b" /* default */] {
    constructor() {
        super(ModelBufferWriter.ATTRIBUTE_MAPPING.vertexByteSize);
    }
    /**
     * Writes a vertex to the vertex buffer.
     */
    _writeVertex(v, colorRgba8) {
        const vertexIdx = this.getCurrentVertexIdx();
        this._writeWorldCoordinate(v);
        this._writeFloat32(v.z);
        this._writeWord(colorRgba8);
        return vertexIdx;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModelBufferWriter;

/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
ModelBufferWriter.ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        3 /* HEIGHT */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ]
]);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
const TEXTURED_POLYGON_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        4 /* UV */,
        {
            size: 4,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ],
    [
        11 /* AUX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        10 /* Z_INDEX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = TEXTURED_POLYGON_ATTRIBUTE_MAPPING;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
const POLYGON_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        10 /* Z_INDEX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = POLYGON_ATTRIBUTE_MAPPING;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
const POLYLINE_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        9 /* PRIORITY */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        11 /* AUX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = POLYLINE_ATTRIBUTE_MAPPING;



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileProviderMessageType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__ = __webpack_require__(148);

var TileProviderMessageType;
(function (TileProviderMessageType) {
    TileProviderMessageType[TileProviderMessageType["INIT"] = 0] = "INIT";
    TileProviderMessageType[TileProviderMessageType["TILE_REQUEST"] = 1] = "TILE_REQUEST";
    TileProviderMessageType[TileProviderMessageType["TILE_REQUEST_CANCEL"] = 2] = "TILE_REQUEST_CANCEL";
    TileProviderMessageType[TileProviderMessageType["TILE_RESPONSE"] = 3] = "TILE_RESPONSE";
    TileProviderMessageType[TileProviderMessageType["GEOMETRY_RESPONSE"] = 4] = "GEOMETRY_RESPONSE";
    TileProviderMessageType[TileProviderMessageType["LABELS_RESPONSE"] = 5] = "LABELS_RESPONSE";
    TileProviderMessageType[TileProviderMessageType["MESH_REQUEST"] = 6] = "MESH_REQUEST";
    TileProviderMessageType[TileProviderMessageType["MESH_REQUEST_CANCEL"] = 7] = "MESH_REQUEST_CANCEL";
    TileProviderMessageType[TileProviderMessageType["MESH_RESPONSE"] = 8] = "MESH_RESPONSE";
})(TileProviderMessageType || (TileProviderMessageType = {}));
const geometryTransferableExtractor = function (message, transferables = []) {
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.polygonPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.transparentPolygonPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.texturedPolygonPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.meshPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.polylinePages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.transparentPolylinePages, transferables);
    return transferables;
};
/* unused harmony export geometryTransferableExtractor */

const meshTransferableExtractor = function (message) {
    const transferables = [];
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.pages, transferables);
    return transferables;
};
/* unused harmony export meshTransferableExtractor */

const labelTransferableExtractor = function (message, transferables = []) {
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.pointLabelPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.pointLabelBackgroundPages, transferables);
    Object(__WEBPACK_IMPORTED_MODULE_0__primitive_provider_worker_messages__["a" /* extractTransferables */])(message.curvedLabelPages, transferables);
    return transferables;
};
/* unused harmony export labelTransferableExtractor */

const tileTransferableExtractor = function (message) {
    const transferables = [];
    geometryTransferableExtractor(message, transferables);
    labelTransferableExtractor(message, transferables);
    return transferables;
};
/* unused harmony export tileTransferableExtractor */



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_render_context__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_engine__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_camera_camera__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_adapters_vector_api_adapter__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__camera_stuff__ = __webpack_require__(152);





// import RasterTilesAdapter from '../../src/adapters/raster_tiles/adapter';
// import {TileItem} from '../../src/adapters/vector_api/util/tile_system';
const GL_CONTEXT_ATTRIBS = {
    alpha: false,
    depth: true,
    stencil: false,
    antialias: false,
    failIfMajorPerformanceCaveat: true
};
const camera = new __WEBPACK_IMPORTED_MODULE_2__src_camera_camera__["a" /* default */]({
    wrapModeX: 2 /* REPEAT */,
    wrapModeY: 0 /* NONE */
});
camera.onUpdate.addListener(() => Object(__WEBPACK_IMPORTED_MODULE_4__camera_stuff__["d" /* renderCameraState */])(camera));
const canvas = document.querySelector('#canvas');
{
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = window.devicePixelRatio * width;
    canvas.height = window.devicePixelRatio * height;
    camera.screenSize.width = width;
    camera.screenSize.height = height;
}
const cameraMouseController = new __WEBPACK_IMPORTED_MODULE_4__camera_stuff__["a" /* CameraMouseController */](canvas, camera);
const mouseDragController = new __WEBPACK_IMPORTED_MODULE_4__camera_stuff__["b" /* MouseDragController */](canvas);
mouseDragController.setDelegate(cameraMouseController);
const scrollZoomController = new __WEBPACK_IMPORTED_MODULE_4__camera_stuff__["c" /* ScrollZoomController */](canvas);
scrollZoomController.setDelegate(cameraMouseController);
const context = __WEBPACK_IMPORTED_MODULE_0__src_render_context__["a" /* default */].createFromCanvas(canvas, GL_CONTEXT_ATTRIBS);
const engine = new __WEBPACK_IMPORTED_MODULE_1__src_engine__["a" /* default */](context, camera);
new __WEBPACK_IMPORTED_MODULE_3__src_adapters_vector_api_adapter__["a" /* default */](engine, camera, '/src/adapters/vector_api/worker/tile_provider_worker.js?worker', {
    tileUrlTemplate: 'https://vec-rdr01e.tst.maps.yandex.ru/vmap2/tiles?l=vmap2&lang=ru_RU&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}',
    imageUrlTemplate: 'https://vec-rdr01e.tst.maps.yandex.ru/resources?id={{id}}&scale={{scale}}',
    meshUrlTemplate: 'https://vec-rdr01e.tst.maps.yandex.ru/meshes?id={{id}}',
    glyphRangeUrlTemplate: 'https://vec-rdr01e.tst.maps.yandex.ru/glyphs?lang=ru_RU&font_id={{fontId}}&range={{range}}'
});
// class TrafficLayerAdapter extends RasterTilesAdapter {
//     public _getImageUrl(tile: TileItem): string {
//         return `https://jgo.maps.yandex.net/1.1/tiles?trf&l=trf,trfe&lang=ru_UA&x=${tile.x}&y=${tile.y}&z=${tile.zoom}&scale=${this._scale}&tm=${Math.floor(Date.now() / 1000)}`
//     }
// }
//
// new TrafficLayerAdapter(
//     engine,
//     camera
// );
document.getElementById('moscow').addEventListener('click', () => {
    camera.center.x = 0x1ABFFFFF / 0x7FFFFFFF;
    camera.center.y = 0x2FBFFFFF / 0x7FFFFFFF;
    camera.zoom = 16;
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_buffer__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_framebuffer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_program__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_renderbuffer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capabilities__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_texture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_vao__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_color__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_event_emitter__ = __webpack_require__(4);











const QUAD_VERTEX_DATA = new Float32Array([
    // tslint:disable
    // x   y  u  v
    -1, -1, 0, 0,
    1, 1, 1, 1,
    -1, 1, 0, 1,
    -1, -1, 0, 0,
    1, -1, 1, 0,
    1, 1, 1, 1
    // tslint:enable
]);
const QUAD_ATTRIB_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/**
 * Default render target of a WebGL context, which is canvas element of the
 * context.
 */
class DefaultRenderTarget {
    constructor(gl) {
        this._gl = gl;
    }
    bind() {
        const gl = this._gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    setSize(width, height) {
        const canvas = this._gl.canvas;
        canvas.width = width;
        canvas.height = height;
    }
    getWidth() {
        return this._gl.drawingBufferWidth;
    }
    getHeight() {
        return this._gl.drawingBufferHeight;
    }
    destroy() {
        // We can't destroy default render target, so do nothing.
        // TODO(dmikis) Throw an exception?
    }
}
/**
 * Computes a string key that uniquely identifies a shader program from `Program`
 * constructor parameters.
 *
 * @param vertexShaderSource Source code of vertex shader of the program.
 * @param fragmentShaderSource Source code of fragment shader of the program.
 * @param options Options.
 * @returns The key.
 */
function getProgramKey(vertexShaderSource, fragmentShaderSource, options) {
    // TODO(dmikis) hash and/or compression?
    let key = vertexShaderSource + fragmentShaderSource;
    if (options) {
        if (options.defines) {
            const defines = options.defines;
            key += Object.keys(defines)
                .sort()
                .map((define) => `${define}${defines[define]}`)
                .join('');
        }
        if (options.attribMap) {
            const attribMap = options.attribMap;
            key += Object.keys(options.attribMap)
                .sort()
                .map((attribute) => `${attribute}${attribMap[attribute]}`)
                .join('');
        }
    }
    return key;
}
/**
 * Wrapper around WebGL context. Serves to localize all GL calls to minimum set
 * of objects.
 */
class RenderContext {
    /**
     * Creates a new wrapper for a given WebGL context.
     *
     * @param gl The context to be wrapped.
     */
    constructor(gl) {
        this._gl = gl;
        this.onLoss = new __WEBPACK_IMPORTED_MODULE_10__util_event_emitter__["b" /* VoidEventEmitter */]();
        this._contextLostListener = (e) => {
            e.preventDefault();
            this.onLoss.fire();
        };
        gl.canvas.addEventListener('webglcontextlost', this._contextLostListener);
        this._capabilities = new __WEBPACK_IMPORTED_MODULE_5__capabilities__["a" /* default */](gl);
        const vaoExt = gl.getExtension('OES_vertex_array_object');
        if (!vaoExt) {
            throw new Error('OES_vertex_array_object is required.');
        }
        this._vaoExt = vaoExt;
        if (!gl.getExtension('OES_standard_derivatives')) {
            throw new Error('OES_standard_derivatives is required.');
        }
        this._programCache = new Map();
        const defaultRenderTarget = this._boundRenderTarget =
            this._defaultRenderTarget =
                new DefaultRenderTarget(gl);
        const boundState = this._boundRenderState = new __WEBPACK_IMPORTED_MODULE_6__state__["b" /* default */]();
        // Default viewport and scissor rectangle sizes are equal to the size of
        // the canvas of the WebGL context. But we have no way of knowing them in
        // RenderState's constructor. So we're fixing them here.
        boundState.scissorWidth = boundState.viewportWidth =
            defaultRenderTarget.getWidth();
        boundState.scissorHeight = boundState.viewportHeight =
            defaultRenderTarget.getHeight();
        const quadBuffer = this._quadVertexBuffer =
            new __WEBPACK_IMPORTED_MODULE_1__gl_buffer__["a" /* default */](gl, gl.ARRAY_BUFFER, gl.STATIC_DRAW);
        quadBuffer.bind();
        gl.bufferData(gl.ARRAY_BUFFER, QUAD_VERTEX_DATA, gl.STATIC_DRAW);
        this._quadVao = this.createVao(QUAD_ATTRIB_MAPPING, quadBuffer, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this._boundProgram = null;
        this._boundVao = null;
        this._boundTextures = new Array(this._capabilities.getMaxCombinedTextureImageUnits());
        this._boundTextures.fill(null);
        this._boundTextureUnit = 0;
    }
    /**
     * Returns object to request capabilities of the context such as maximum
     * texture size or maximum number of uniform vectors allowed in shaders.
     */
    getCapabilities() {
        return this._capabilities;
    }
    /**
     * Creates a new framebuffer with given attachments.
     *
     * @param descriptor Object containing framebuffer attachments.
     * @returns Created framebuffer object.
     */
    createFramebuffer({ color, depth, stencil, depthStencil }) {
        // TODO Uncomment and put under debug flag (when implemented)
        // if (depthStencil && (depth || stencil)) {
        //     throw new Error(
        //         'Framebuffer can\'t have DEPTH_STENCIL and DEPTH or STENCIL ' +
        //             'attachment simultaneously.'
        //     );
        // }
        const gl = this._gl;
        let width = 0;
        let height = 0;
        if (color) {
            width = color.getWidth();
            height = color.getHeight();
        }
        else if (depth) {
            width = depth.getWidth();
            height = depth.getHeight();
        }
        else if (stencil) {
            width = stencil.getWidth();
            height = stencil.getHeight();
        }
        else if (depthStencil) {
            width = depthStencil.getWidth();
            height = depthStencil.getHeight();
        }
        const framebuffer = new __WEBPACK_IMPORTED_MODULE_2__gl_framebuffer__["a" /* default */](gl, width, height);
        framebuffer.bind();
        this._boundRenderTarget = framebuffer;
        if (color) {
            color.attachToFramebuffer(gl.COLOR_ATTACHMENT0);
        }
        if (depth) {
            depth.attachToFramebuffer(gl.DEPTH_ATTACHMENT);
        }
        if (stencil) {
            stencil.attachToFramebuffer(gl.STENCIL_ATTACHMENT);
        }
        if (depthStencil) {
            depthStencil.attachToFramebuffer(gl.DEPTH_STENCIL_ATTACHMENT);
        }
        // TODO Uncomment and put under debug flag (when implemented)
        // switch (gl.checkFramebufferStatus(gl.FRAMEBUFFER)) {
        //     case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        //         throw new Error('Framebuffer attachments are not renderable');
        //     case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        //         throw new Error('Framebuffer attachments are not same size');
        //     case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        //         throw new Error('Framebuffer has no attachments');
        //     case gl.FRAMEBUFFER_UNSUPPORTED:
        //         throw new Error('Framebuffer has unsupported attachment');
        // }
        return framebuffer;
    }
    /**
     * Allocates a new renderbuffer with given size and format.
     *
     * @param width Width of the renderbuffer.
     * @param height Height of the renderbuffer.
     * @param format Format of the renderbuffer.
     * @return The allocated renderbuffer.
     *
     */
    createRenderbuffer(width, height, format) {
        const gl = this._gl;
        const renderbuffer = new __WEBPACK_IMPORTED_MODULE_4__gl_renderbuffer__["a" /* default */](gl, width, height);
        renderbuffer.bind();
        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
        return renderbuffer;
    }
    /**
     * Allocates a new texture with given size, format, type and parameters and
     * fills it with zeroes.
     *
     * @param width Width of the texture.
     * @param height Height of the texture.
     * @param format Pixel format of the texture.
     * @param type Pixel type of the texture.
     * @param params Parameters of the texture.
     * @returns Newly allocated texture.
     */
    createEmpty2DTexture(width, height, format, type, params = __WEBPACK_IMPORTED_MODULE_7__gl_texture__["a" /* DEFAULT_TEXTURE_PARAMS */]) {
        const texture = new __WEBPACK_IMPORTED_MODULE_7__gl_texture__["b" /* default */](this._gl, width, height, format, type, params);
        this.bindTexture(texture);
        texture.setData(null);
        return texture;
    }
    /**
     * Creates a new shader program. Uses cache, i.e. if a program with same
     * source string and options is already created, returns it.
     *
     * @param vertexShaderSource Source code of vertex shader of the program.
     * @param fragmentShaderSource Source code of fragment shader of the program.
     * @param options Options.
     * @returns Newly created program or one from the cache.
     */
    createProgram(vertexShaderSource, fragmentShaderSource, options) {
        const key = getProgramKey(vertexShaderSource, fragmentShaderSource, options);
        let program = this._programCache.get(key);
        if (!program) {
            program = new __WEBPACK_IMPORTED_MODULE_3__gl_program__["a" /* default */](this._gl, vertexShaderSource, fragmentShaderSource, options);
            this._programCache.set(key, program);
        }
        return program;
    }
    createVertexBuffer(size, usage = 35044 /* STATIC_DRAW */) {
        return this._createBuffer(this._gl.ARRAY_BUFFER, size, usage);
    }
    createIndexBuffer(size, usage = 35044 /* STATIC_DRAW */) {
        return this._createBuffer(this._gl.ELEMENT_ARRAY_BUFFER, size, usage);
    }
    // TODO: check https://github.com/Microsoft/TypeScript/issues/24195 to update narrowed data type according
    uploadDataToBuffer(buffer, data, offset = 0) {
        buffer.bind();
        this._gl.bufferSubData(buffer.getTarget(), offset, data);
    }
    /**
     * Creates a new vertex array object in the context.
     *
     * @param attributeMapping Mapping of vertex attrbiutes for the VAO.
     * @param vertexBuffer Vertex buffer to be bound to the VAO.
     * @param indexBuffer Index buffer to be bound to the VAO.
     * @returns The new VAO.
     */
    createVao(attributeMapping, vertexBuffer, indexBuffer) {
        const gl = this._gl;
        const vao = new __WEBPACK_IMPORTED_MODULE_8__gl_vao__["a" /* default */](gl, this._vaoExt, attributeMapping);
        vao.bind();
        if (indexBuffer) {
            indexBuffer.bind();
        }
        else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
        vertexBuffer.bind();
        const vertexByteSize = attributeMapping.vertexByteSize;
        for (const [idx, pointer] of attributeMapping) {
            gl.enableVertexAttribArray(idx);
            gl.vertexAttribPointer(idx, pointer.size, pointer.type, pointer.normalized, vertexByteSize, pointer.offset);
        }
        this._vaoExt.bindVertexArrayOES(null);
        return vao;
    }
    /**
     * Returns default render target associated with canvas on which the WebGL
     * context operates.
     */
    getDefaultRenderTarget() {
        return this._defaultRenderTarget;
    }
    /**
     * Clears currently bound render target according to a mask.
     *
     * @param mask Bitwise OR of marks, i.e.
     *      `ClearMask.COLOR_BUFFER_BIT | ClearMask.DEPTH_BUFFER_BIT`.
     */
    clearCurrentTarget(mask) {
        if (mask) {
            this._gl.clear(mask);
        }
    }
    /**
     * Binds a render target to the WebGL context if it's not already bound.
     *
     * @param target The render target to be bound.
     */
    bindRenderTarget(target) {
        if (this._boundRenderTarget != target) {
            target.bind();
            this._boundRenderTarget = target;
            this._setViewportState(new __WEBPACK_IMPORTED_MODULE_6__state__["b" /* default */]({
                viewportWidth: target.getWidth(),
                viewportHeight: target.getHeight()
            }));
        }
    }
    /**
     * Binds a render state to the WebGL context with minimum amount of actual
     * state switching.
     *
     * @param state The state to be bound.
     */
    bindRenderState(state) {
        this._setColorBufferState(state);
        this._setBlendState(state);
        this._setCullFaceState(state);
        this._setFrontFaceState(state);
        this._setDepthTestState(state);
        this._setDitherState(state);
        this._setDrawBuffersState(state);
        this._setPolygonOffsetState(state);
        this._setAlphaToCoverageState(state);
        this._setSampleCoverageState(state);
        this._setStencilTestState(state);
        this._setScissorTestState(state);
        this._setViewportState(state);
    }
    /**
     * Binds a program to the WebGL context if it's not already bound.
     *
     * @param program The program to be bound.
     */
    bindProgram(program) {
        if (this._boundProgram != program) {
            program.bind();
            this._boundProgram = program;
        }
    }
    /**
     * Binds a vertex array object to the context if it's not already bound.
     *
     * @param vao The vertex array object to bind. Passing `null` will unbind
     *      any currently bound VAO.
     */
    bindVao(vao) {
        if (this._boundVao != vao) {
            if (vao) {
                vao.bind();
            }
            else {
                this._vaoExt.bindVertexArrayOES(null);
            }
            this._boundVao = vao;
        }
    }
    bindQuadVao() {
        this.bindVao(this._quadVao);
    }
    bindTextureUnit(unit) {
        const gl = this._gl;
        if (this._boundTextureUnit !== unit) {
            gl.activeTexture(gl.TEXTURE0 + unit);
            this._boundTextureUnit = unit;
        }
    }
    bindTexture(texture) {
        const boundUnit = this._boundTextureUnit;
        if (this._boundTextures[boundUnit] !== texture) {
            texture.bind();
            this._boundTextures[boundUnit] = texture;
        }
    }
    /**
     * Draws a quad to currently bound render target with currently bound render
     * state, program and uniform state.
     */
    drawQuad() {
        const gl = this._gl;
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    /**
     * Draws a mesh from currently bound to ARRAY_BUFFER buffer.
     *
     * @param offset Index of the vertex to start drawing from.
     * @param count Number of vertices to process.
     * @param primitiveType
     */
    drawMesh(offset, count, primitiveType = 4 /* TRIANGLES */) {
        this._gl.drawArrays(primitiveType, offset, count);
    }
    /**
     * Draws a mesh to currently bound render target with currently bound render
     * state, program and uniform state.
     *
     * @param offset Offset of indices of the mesh in currently bound memory page.
     * @param indexCount Number of indices in the mesh.
     */
    drawIndexedMesh(offset, indexCount, primitiveType = 4 /* TRIANGLES */) {
        const gl = this._gl;
        gl.drawElements(primitiveType, indexCount, gl.UNSIGNED_SHORT, offset);
    }
    /**
     * Destroys the context and resources owned by it. Note that resources that
     * were created with `create*` method of the context aren't exactly belong
     * to the context, entities that created them have to destroy them.
     */
    destroy() {
        this._vaoExt.deleteVertexArrayOES(this._quadVao);
        this._gl.deleteBuffer(this._quadVertexBuffer);
        this._gl.canvas.removeEventListener('webglcontextlost', this._contextLostListener);
    }
    /**
     * Creates a new context from a canvas.
     *
     * @throws An error if fails to create `webgl` context for the canvas.
     * @param canvas The canvas.
     * @param attribs Attributes of the context.
     */
    static createFromCanvas(canvas, attribs) {
        const gl = canvas.getContext('webgl', attribs);
        if (!gl) {
            throw new Error('Failed to create GL context from canvas.');
        }
        return new RenderContext(gl);
    }
    /**
     * Enables or disables a WebGL capability.
     * @see https://www.khronos.org/registry/OpenGL-Refpages/es2.0/xhtml/glEnable.xml
     *
     * @param capability The capability to be enabled of disabled.
     * @param enabled New state of the capability;
     */
    _setCapabilityEnabled(capability, enabled) {
        if (enabled) {
            this._gl.enable(capability);
        }
        else {
            this._gl.disable(capability);
        }
    }
    /**
     * Sets new clear color and color mask from a state if they're different from
     * currently set ones.
     *
     * @param state The state that contains new clear color and color masks.
     */
    _setColorBufferState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        const newClearColor = state.clearColor;
        if (!__WEBPACK_IMPORTED_MODULE_9__util_color__["a" /* areEqual */](boundState.clearColor, newClearColor)) {
            gl.clearColor(newClearColor.r, newClearColor.g, newClearColor.b, newClearColor.a);
            __WEBPACK_IMPORTED_MODULE_9__util_color__["b" /* copy */](newClearColor, boundState.clearColor);
        }
        if (boundState.colorMaskR != state.colorMaskR ||
            boundState.colorMaskG != state.colorMaskG ||
            boundState.colorMaskB != state.colorMaskB ||
            boundState.colorMaskAlpha != state.colorMaskAlpha) {
            this._gl.colorMask(state.colorMaskR, state.colorMaskG, state.colorMaskB, state.colorMaskAlpha);
            boundState.colorMaskR = state.colorMaskR;
            boundState.colorMaskG = state.colorMaskG;
            boundState.colorMaskB = state.colorMaskB;
            boundState.colorMaskAlpha = state.colorMaskAlpha;
        }
    }
    /**
     * Sets blend state and params.
     *
     * @param state The state that contains new blend params.
     */
    _setBlendState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.blend != state.blend) {
            this._setCapabilityEnabled(gl.BLEND, state.blend);
            boundState.blend = state.blend;
        }
        if (state.blend) {
            if (boundState.blendEquationRgb != state.blendEquationRgb ||
                boundState.blendEquationAlpha != state.blendEquationAlpha) {
                gl.blendEquationSeparate(state.blendEquationRgb, state.blendEquationAlpha);
                boundState.blendEquationRgb = state.blendEquationRgb;
                boundState.blendEquationAlpha = state.blendEquationAlpha;
            }
            if (boundState.blendFuncDstRgb != state.blendFuncDstRgb ||
                boundState.blendFuncSrcRgb != state.blendFuncSrcRgb ||
                boundState.blendFuncDstAlpha != state.blendFuncDstAlpha ||
                boundState.blendFuncSrcAlpha != state.blendFuncSrcAlpha) {
                gl.blendFuncSeparate(state.blendFuncSrcRgb, state.blendFuncDstRgb, state.blendFuncSrcAlpha, state.blendFuncDstAlpha);
                boundState.blendFuncSrcRgb = state.blendFuncSrcRgb;
                boundState.blendFuncDstRgb = state.blendFuncDstRgb;
                boundState.blendFuncSrcAlpha = state.blendFuncSrcAlpha;
                boundState.blendFuncDstAlpha = state.blendFuncDstAlpha;
            }
        }
    }
    /**
     * Sets cull face state and params.
     *
     * @param state The state that contains new cull face state and mode.
     */
    _setCullFaceState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.cullFace != state.cullFace) {
            this._setCapabilityEnabled(gl.CULL_FACE, state.cullFace);
            boundState.cullFace = state.cullFace;
        }
        if (state.cullFace &&
            boundState.cullFaceMode != state.cullFaceMode) {
            gl.cullFace(state.cullFaceMode);
            boundState.cullFaceMode = state.cullFaceMode;
        }
    }
    /**
     * Sets front face mode.
     *
     * @param state The state that contains new front face mode.
     */
    _setFrontFaceState(state) {
        const boundState = this._boundRenderState;
        if (boundState.frontFaceMode != state.frontFaceMode) {
            this._gl.frontFace(state.frontFaceMode);
            boundState.frontFaceMode = state.frontFaceMode;
        }
    }
    /**
     * Sets depth test state and params.
     *
     * @param state The state that contains new depth test state and params.
     */
    _setDepthTestState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.depthTest != state.depthTest) {
            this._setCapabilityEnabled(gl.DEPTH_TEST, state.depthTest);
            boundState.depthTest = state.depthTest;
        }
        if (state.depthTest) {
            if (boundState.clearDepth != state.clearDepth) {
                gl.clearDepth(state.clearDepth);
                boundState.clearDepth = state.clearDepth;
            }
            if (boundState.depthMask != state.depthMask) {
                gl.depthMask(state.depthMask);
                boundState.depthMask = state.depthMask;
            }
            if (boundState.depthFunc != state.depthFunc) {
                gl.depthFunc(state.depthFunc);
                boundState.depthFunc = state.depthFunc;
            }
            if (boundState.depthRangeNear != state.depthRangeNear ||
                boundState.depthRangeFar != state.depthRangeFar) {
                gl.depthRange(state.depthRangeNear, state.depthRangeFar);
                boundState.depthRangeNear = state.depthRangeNear;
                boundState.depthRangeFar = state.depthRangeFar;
            }
        }
    }
    /**
     * Sets dither state.
     *
     * @param state The state that contains new dither state.
     */
    _setDitherState(state) {
        const boundState = this._boundRenderState;
        if (boundState.dither != state.dither) {
            this._setCapabilityEnabled(this._gl.DITHER, state.dither);
            boundState.dither = state.dither;
        }
    }
    /**
     * Sets draw buffers.
     *
     * @param state The state that contains array of draw buffers.
     */
    _setDrawBuffersState(state) {
        const boundDrawBuffers = this._boundRenderState.drawBuffers;
        if (boundDrawBuffers.length != state.drawBuffers.length ||
            boundDrawBuffers
                .some((attachment, i) => attachment != state.drawBuffers[i])) {
            this._boundRenderState.drawBuffers = state.drawBuffers.slice();
        }
    }
    /**
     * Sets polygon offset state and params.
     *
     * @param state The state that contains new polygon offset state and params.
     */
    _setPolygonOffsetState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.polygonOffset != state.polygonOffset) {
            this._setCapabilityEnabled(gl.POLYGON_OFFSET_FILL, state.polygonOffset);
            boundState.polygonOffset = state.polygonOffset;
        }
        if (state.polygonOffset &&
            (boundState.polygonOffsetFactor != state.polygonOffsetFactor ||
                boundState.polygonOffsetUnits != state.polygonOffsetUnits)) {
            gl.polygonOffset(state.polygonOffsetFactor, state.polygonOffsetUnits);
            boundState.polygonOffsetFactor = state.polygonOffsetFactor;
            boundState.polygonOffsetUnits = state.polygonOffsetUnits;
        }
    }
    /**
     * Sets alpha-to-coverage state.
     *
     * @param state The state that contains new alpha-to-coverage state.
     */
    _setAlphaToCoverageState(state) {
        const boundState = this._boundRenderState;
        if (boundState.sampleAlphaToCoverage != state.sampleAlphaToCoverage) {
            this._setCapabilityEnabled(this._gl.SAMPLE_ALPHA_TO_COVERAGE, state.sampleAlphaToCoverage);
            boundState.sampleAlphaToCoverage = state.sampleAlphaToCoverage;
        }
    }
    /**
     * Sets sample coverage state.
     *
     * @param state The state that contains new sample coverage state and params.
     */
    _setSampleCoverageState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.sampleCoverage != state.sampleCoverage) {
            this._setCapabilityEnabled(gl.SAMPLE_COVERAGE, state.sampleCoverage);
            boundState.sampleCoverage = state.sampleCoverage;
        }
        if (state.sampleCoverage &&
            (boundState.sampleCoverageValue != state.sampleCoverageValue ||
                boundState.sampleCoverageInvert != state.sampleCoverageInvert)) {
            gl.sampleCoverage(state.sampleCoverageValue, state.sampleCoverageInvert);
            boundState.sampleCoverageValue = state.sampleCoverageValue;
            boundState.sampleCoverageInvert = state.sampleCoverageInvert;
        }
    }
    /**
     * Sets stencil test state and params.
     *
     * @param state The state that contains new stencil test state and params.
     */
    _setStencilTestState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.stencilTest != state.stencilTest) {
            this._setCapabilityEnabled(gl.STENCIL_TEST, state.stencilTest);
            boundState.stencilTest = state.stencilTest;
        }
        if (state.stencilTest) {
            if (boundState.clearStencil != state.clearStencil) {
                gl.clearStencil(state.clearStencil);
                boundState.clearStencil = state.clearStencil;
            }
            if (boundState.stencilWriteMask != state.stencilWriteMask) {
                gl.stencilMask(state.stencilWriteMask);
                boundState.stencilWriteMask = state.stencilWriteMask;
            }
            const refOrMaskIsDifferent = (boundState.stencilMask != state.stencilMask ||
                boundState.stencilReference != state.stencilReference);
            if (refOrMaskIsDifferent) {
                boundState.stencilMask = state.stencilMask;
                boundState.stencilReference = state.stencilReference;
            }
            if (boundState.stencilFrontFunc != state.stencilFrontFunc ||
                refOrMaskIsDifferent) {
                gl.stencilFuncSeparate(gl.FRONT, state.stencilFrontFunc, state.stencilReference, state.stencilMask);
                boundState.stencilFrontFunc = state.stencilFrontFunc;
            }
            if (boundState.stencilBackFunc != state.stencilBackFunc ||
                refOrMaskIsDifferent) {
                gl.stencilFuncSeparate(gl.BACK, state.stencilBackFunc, state.stencilReference, state.stencilMask);
                boundState.stencilBackFunc = state.stencilBackFunc;
            }
            if (boundState.stencilFrontFailOp != state.stencilFrontFailOp ||
                boundState.stencilFrontDepthFailOp != state.stencilFrontDepthFailOp ||
                boundState.stencilFrontDepthPassOp != state.stencilFrontDepthPassOp) {
                gl.stencilOpSeparate(gl.FRONT, state.stencilFrontFailOp, state.stencilFrontDepthFailOp, state.stencilFrontDepthPassOp);
                boundState.stencilFrontFailOp = state.stencilFrontFailOp;
                boundState.stencilFrontDepthFailOp = state.stencilFrontDepthFailOp;
                boundState.stencilFrontDepthPassOp = state.stencilFrontDepthPassOp;
            }
            if (boundState.stencilBackFailOp != state.stencilBackFailOp ||
                boundState.stencilBackDepthFailOp != state.stencilBackDepthFailOp ||
                boundState.stencilBackDepthPassOp != state.stencilBackDepthPassOp) {
                gl.stencilOpSeparate(gl.BACK, state.stencilBackFailOp, state.stencilBackDepthFailOp, state.stencilBackDepthPassOp);
                boundState.stencilBackFailOp = state.stencilBackFailOp;
                boundState.stencilBackDepthFailOp = state.stencilBackDepthFailOp;
                boundState.stencilBackDepthPassOp = state.stencilBackDepthPassOp;
            }
        }
    }
    /**
     * Sets scissor test state and scissor rectangle.
     *
     * @param state The state that contains new scissor test state and scissor
     *      rectangle.
     */
    _setScissorTestState(state) {
        const gl = this._gl;
        const boundState = this._boundRenderState;
        if (boundState.scissorTest != state.scissorTest) {
            this._setCapabilityEnabled(gl.SCISSOR_TEST, state.scissorTest);
            boundState.scissorTest = state.scissorTest;
        }
        if (state.scissorTest &&
            state.scissorWidth >= 0 &&
            state.scissorHeight >= 0 &&
            (boundState.scissorX != state.scissorX ||
                boundState.scissorY != state.scissorY ||
                boundState.scissorWidth != state.scissorWidth ||
                boundState.scissorHeight != state.scissorHeight)) {
            gl.scissor(state.scissorX, state.scissorY, state.scissorWidth, state.scissorHeight);
            boundState.scissorX = state.scissorX;
            boundState.scissorY = state.scissorY;
            boundState.scissorWidth = state.scissorWidth;
            boundState.scissorHeight = state.scissorHeight;
        }
    }
    /**
     * Sets viewport.
     *
     * @param state The state that contains new viewport.
     */
    _setViewportState(state) {
        const boundState = this._boundRenderState;
        if (state.viewportWidth >= 0 &&
            state.viewportHeight >= 0 &&
            (boundState.viewportX != state.viewportX ||
                boundState.viewportY != state.viewportY ||
                boundState.viewportWidth != state.viewportWidth ||
                boundState.viewportHeight != state.viewportHeight)) {
            this._gl.viewport(state.viewportX, state.viewportY, state.viewportWidth, state.viewportHeight);
            boundState.viewportX = state.viewportX;
            boundState.viewportY = state.viewportY;
            boundState.viewportWidth = state.viewportWidth;
            boundState.viewportHeight = state.viewportHeight;
        }
    }
    /**
     * Creates a new zeroed buffer with a given size and a target.
     *
     * @param target The target of the new buffer, `ARRAY_BUFFER` or
     *      `ELEMENT_ARRAY_BUFFER`.
     * @param size The size of the buffer.
     * @param usage Usage of the buffer.
     * @returns The buffer.
     */
    _createBuffer(target, size, usage = this._gl.STATIC_DRAW) {
        const gl = this._gl;
        const buffer = new __WEBPACK_IMPORTED_MODULE_1__gl_buffer__["a" /* default */](gl, target, size);
        // TODO(dmikis) a cleverer way not to break currently bound VAO;
        this.bindVao(null);
        buffer.bind();
        gl.bufferData(target, size, usage);
        return buffer;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderContext;



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isPowOf2 */
/* harmony export (immutable) */ __webpack_exports__["a"] = align;
/**
 * Checks if a number is a power of 2.
 *
 * @param x The number to check.
 * @returns `true` if the number is an integer power of 2 and `false` otherwise.
 */
function isPowOf2(x) {
    return x > 0 && !(x & (x - 1));
}
/**
 * Aligns an offset by an alignment given by a mask.
 *
 * @param offset The offset.
 * @param alignmentMask The alignment mask — a bit field that has `log2(alignment)`
 *      of least significant bits unset and other set, e.g. if `alignment` is 4
 *      then the `alignmentMask` will be `0xffffffc`
 * @returns Aligned offset.
 */
function align(offset, alignmentMask) {
    return (offset - 1 & alignmentMask) - alignmentMask;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Wrapper around WebGLBuffer object. */
class Buffer {
    /**
     * Creates a new empty buffer in a WebGL context.
     *
     * @param gl The context the buffer will be created in.
     * @param target Binding target of the buffer. Since in WebGL once you've
     *      bound a buffer to a given target you can't bind it any other one,
     *      we "tie" the buffer and it's binding point together.
     * @param size Size of the buffer. We don't do actual allocation in the
     *      wrapper, it's context's responsibility. But it's convenient to be
     *      able to get the size from the wrapper object.
     */
    constructor(gl, target, size) {
        this._gl = gl;
        this._target = target;
        this._handle = gl.createBuffer();
        this._size = size;
    }
    /** Binds the buffer to the context to its binding target. */
    bind() {
        this._gl.bindBuffer(this._target, this._handle);
    }
    /**
     * Returns `true` if the buffer is currently bound to the context to its
     * binding target and `false` otherwise.
     */
    isBound() {
        const gl = this._gl;
        const handle = this._handle;
        switch (this._target) {
            case gl.ARRAY_BUFFER:
                return gl.getParameter(gl.ARRAY_BUFFER_BINDING) == handle;
            case gl.ELEMENT_ARRAY_BUFFER:
                return gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING) == handle;
        }
        return false;
    }
    /** Returns binding target of the buffer. */
    getTarget() {
        return this._target;
    }
    /** Returns size of the buffer. */
    getSize() {
        return this._size;
    }
    /**
     * Destroys the buffer.
     */
    destroy() {
        this._gl.deleteBuffer(this._handle);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Buffer;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Wrapper around WebGLFramebuffer object. */
class Framebuffer {
    /**
     * Creates a new framebuffer in a WebGL context.
     *
     * @param gl The context the framebuffer will be created in.
     * @param width Width of the framebuffer.
     * @param height Height of the framebuffer.
     */
    constructor(gl, width, height) {
        this._gl = gl;
        this._handle = gl.createFramebuffer();
        this._width = width;
        this._height = height;
    }
    /**
     * Binds the framebuffer to the WebGL context.
     */
    bind() {
        const gl = this._gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._handle);
    }
    /**
     * Checks if the framebuffer is bound to the WebGL context.
     *
     * @returns `true` if the framebuffer is currently bound to the WebGL context
     *      and `false` otherwise.
     */
    isBound() {
        const gl = this._gl;
        return gl.getParameter(gl.FRAMEBUFFER_BINDING) == this._handle;
    }
    /**
     * Returns width of the framebuffer.
     */
    getWidth() {
        return this._width;
    }
    /**
     * Returns height of the framebuffer.
     */
    getHeight() {
        return this._height;
    }
    /**
     * Destroys the framebuffer.
     */
    destroy() {
        this._gl.deleteFramebuffer(this._handle);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Framebuffer;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Inserts given parameters as preprocessor define directives into shader source.
 *
 * @param source Shader source.
 * @param defines Dictionary with parameters to define with preprocessor directives.
 * @returns Shader source with preprocessor directives inserted.
 */
function insertDefines(source, defines) {
    const definesString = Object.keys(defines)
        .map((defineName) => '#define ' + defineName + ' ' +
        defines[defineName])
        .join('\n');
    const versionIdx = source.indexOf('#version');
    if (versionIdx == -1) {
        return definesString + source;
    }
    const nextLineIdx = source.indexOf('\n', versionIdx) + 1;
    return source.slice(0, nextLineIdx) + definesString +
        source.slice(nextLineIdx);
}
/**
 * Creates a new shader of a given type out of a given source string.
 *
 * @param gl WebGL context the shader will be created in.
 * @param type The type of the shader, VERTEX_SHADER or FRAGMENT_SHADER.
 * @param source The source string.
 * @throws An error if compilation of the shader fails.
 * @returns The shader WebGL handle.
 */
function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    // TODO Uncomment and put under debug flag (when implemented)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error('Failed to compile shader:\n' + gl.getShaderInfoLog(shader));
    }
    return shader;
}
/** Wrapper around WebGLProgram objects. */
class Program {
    /**
     * Constructs a new program.
     *
     * @param gl WebGL context the program will be created in.
     * @param vertexShaderSource Source code of vertex shader of the program.
     * @param fragmentShaderSource Source code of fragment shader of the program.
     * @param options Options.
     * @throws An error if shader compilation or program linking fails.
     */
    constructor(gl, vertexShaderSource, fragmentShaderSource, options) {
        this._gl = gl;
        const handle = this._handle = gl.createProgram();
        if (options && options.defines) {
            vertexShaderSource = insertDefines(vertexShaderSource, options.defines);
            fragmentShaderSource = insertDefines(fragmentShaderSource, options.defines);
        }
        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        gl.attachShader(handle, vertexShader);
        gl.attachShader(handle, fragmentShader);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        if (options && options.attribMap) {
            Object.keys(options.attribMap)
                .forEach((attributeName) => gl.bindAttribLocation(handle, options.attribMap[attributeName], attributeName));
        }
        gl.linkProgram(handle);
        // TODO Uncomment and put under debug flag (when implemented)
        if (!gl.getProgramParameter(handle, gl.LINK_STATUS)) {
            throw new Error(`Failed to link program:\n${gl.getProgramInfoLog(handle)}`);
        }
        this._uniformCache = new Map();
    }
    /**
     * Binds the program to the WebGL context.
     */
    bind() {
        const gl = this._gl;
        const handle = this._handle;
        // TODO Uncomment and put under debug flag (when implemented)
        // gl.validateProgram(handle);
        // if (!gl.getProgramParameter(handle, gl.VALIDATE_STATUS)) {
        //     throw new Error(
        //         'Failed to validate program:\n' + gl.getProgramInfoLog(handle)
        //     );
        // }
        gl.useProgram(handle);
    }
    /**
     * Checks if the program is bound to the WebGL context.
     *
     * @returns `true` if the program if currently bound to the WebGL context and
     *      `false` otherwise.
     */
    isBound() {
        const gl = this._gl;
        return gl.getParameter(gl.CURRENT_PROGRAM) == this._handle;
    }
    /**
     * Sets an integer scalar value to a uniform. If there's no uniform with
     * given name in the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The scalar value.
     */
    setIntScalarUniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform1i(location, value);
        }
    }
    /**
     * Sets a scalar value to a uniform. If there's no uniform with
     * given name in the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The scalar value.
     */
    setScalarUniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform1f(location, value);
        }
    }
    /**
     * Sets a 2D vector to a uniform. If there's no uniform with given name in
     * the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The vector.
     */
    setVector2Uniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform2f(location, value.x, value.y);
        }
    }
    /**
     * Sets a 3D vector to a uniform. If there's no uniform with given name in
     * the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The vector.
     */
    setVector3Uniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform3f(location, value.x, value.y, value.z);
        }
    }
    /**
     * Sets a 4D vector to a uniform. If there's no uniform with given name in
     * the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The vector.
     */
    setVector4Uniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform4f(location, value.x, value.y, value.z, value.w);
        }
    }
    /**
     * Sets a color to a uniform. If there's no uniform with given name in the
     * program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The color.
     */
    setColorUniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniform4f(location, value.r, value.g, value.b, value.a);
        }
    }
    /**
     * Sets a 3x3 matrix to a uniform. If there's no uniform with given name in
     * the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The matrix.
     */
    setMatrix3Uniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniformMatrix3fv(location, false, value);
        }
    }
    /**
     * Sets a 4x4 matrix to a uniform. If there's no uniform with given name in
     * the program, silently does nothing.
     *
     * @param uniformName Name of the uniform.
     * @param value The matrix.
     */
    setMatrix4Uniform(uniformName, value) {
        const location = this._getUniformLocation(uniformName);
        if (location) {
            this._gl.uniformMatrix4fv(location, false, value);
        }
    }
    /**
     * Destroys the program.
     */
    destroy() {
        this._gl.deleteProgram(this._handle);
    }
    _getUniformLocation(name) {
        const cache = this._uniformCache;
        let location = cache.get(name);
        if (!location) {
            location = this._gl.getUniformLocation(this._handle, name);
            if (!location) {
                // TODO Uncomment and put under debug flag (when implemented)
                // console.warn(`Uniform ${name} doesn't exist in program.`);
                return null;
            }
            cache.set(name, location);
        }
        return location;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Program;



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Wrapper around WebGLRenderbuffer objects. */
class Renderbuffer {
    /**
     * Creates a new renderbuffer in a WebGL context.
     *
     * @param gl The context the renderbuffer will be created in.
     */
    constructor(gl, width, height) {
        this._gl = gl;
        this._handle = gl.createRenderbuffer();
        this._width = width;
        this._height = height;
    }
    /**
     * Binds the renderbuffer to the WebGL context.
     */
    bind() {
        const gl = this._gl;
        gl.bindRenderbuffer(gl.RENDERBUFFER, this._handle);
    }
    /**
     * Checks if the renderbuffer is bound to the WebGL context.
     *
     * @returns `true` if the renderbuffer is currently bound to the WebGL context
     *      and `false` otherwise.
     */
    isBound() {
        const gl = this._gl;
        return gl.getParameter(gl.RENDERBUFFER_BINDING) == this._handle;
    }
    /**
     * Attaches the renderbuffer to a currently bound to the WebGL context
     * framebuffer.
     *
     * @param attachmentPoint Attachment point the renderbuffer will be attached
     *      to.
     */
    attachToFramebuffer(attachmentPoint) {
        const gl = this._gl;
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachmentPoint, gl.RENDERBUFFER, this._handle);
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    /**
     * Destroys the renderbuffer.
     */
    destroy() {
        this._gl.deleteRenderbuffer(this._handle);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderbuffer;



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// tslint:disable
/*
    This is automatically generated by /tools/gl_gen/gen_capabilities.js script.
    Instead of modifying it edit the script and regenerate this file.
*/
class RenderContextCapabilitiesManager {
    constructor(gl) {
        this._gl = gl;
        this._paramValues = new Map();
    }
    getAliasedLineWidthRange() { return this._getParam(33902 /* ALIASED_LINE_WIDTH_RANGE */); }
    getAliasedPointSizeRange() { return this._getParam(33901 /* ALIASED_POINT_SIZE_RANGE */); }
    getMaxCombinedTextureImageUnits() { return this._getParam(35661 /* MAX_COMBINED_TEXTURE_IMAGE_UNITS */); }
    getMaxCubeMapTextureSize() { return this._getParam(34076 /* MAX_CUBE_MAP_TEXTURE_SIZE */); }
    getMaxFragmentUniformVectors() { return this._getParam(36349 /* MAX_FRAGMENT_UNIFORM_VECTORS */); }
    getMaxRenderbufferSize() { return this._getParam(34024 /* MAX_RENDERBUFFER_SIZE */); }
    getMaxTextureImageUnits() { return this._getParam(34930 /* MAX_TEXTURE_IMAGE_UNITS */); }
    getMaxTextureSize() { return this._getParam(3379 /* MAX_TEXTURE_SIZE */); }
    getMaxVaryingVectors() { return this._getParam(36348 /* MAX_VARYING_VECTORS */); }
    getMaxVertexAttribs() { return this._getParam(34921 /* MAX_VERTEX_ATTRIBS */); }
    getMaxVertexTextureImageUnits() { return this._getParam(35660 /* MAX_VERTEX_TEXTURE_IMAGE_UNITS */); }
    getMaxVertexUniformVectors() { return this._getParam(36347 /* MAX_VERTEX_UNIFORM_VECTORS */); }
    getMaxViewportDims() { return this._getParam(3386 /* MAX_VIEWPORT_DIMS */); }
    getRenderer() { return this._getParam(7937 /* RENDERER */); }
    getSubpixelBits() { return this._getParam(3408 /* SUBPIXEL_BITS */); }
    getVendor() { return this._getParam(7936 /* VENDOR */); }
    getVersion() { return this._getParam(7938 /* VERSION */); }
    /** Calling this method w/o `WEBGL_debug_renderer_info` enabled will return `null`! */
    getUnmaskedVendor() { return this._getParam(37445 /* UNMASKED_VENDOR */); }
    /** Calling this method w/o `WEBGL_debug_renderer_info` enabled will return `null`! */
    getUnmaskedRenderer() { return this._getParam(37446 /* UNMASKED_RENDERER */); }
    _getParam(param) {
        const paramValues = this._paramValues;
        let paramValue = paramValues.get(param);
        if (!paramValue) {
            paramValue = this._gl.getParameter(param);
            paramValues.set(param, paramValue);
        }
        return paramValue;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderContextCapabilitiesManager;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Our defaults for textures are different from ones in WebGL for two reasons:
 * 1. default minification filter in WebGL is NEAREST_MIPMAP_LINEAR which requires
 *    texture to have all mip levels specified;
 * 2. default wrap modes are REPEAT which isn't supported for NPOT textures.
 */
const DEFAULT_TEXTURE_PARAMS = {
    wrapS: 33071 /* CLAMP_TO_EDGE */,
    wrapT: 33071 /* CLAMP_TO_EDGE */,
    magnificationFilter: 9728 /* NEAREST */,
    minificationFilter: 9728 /* NEAREST */
};
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TEXTURE_PARAMS;

/** Wrapper around WebGLTexture objects. For now only works with 2D textures. */
class Texture {
    /**
     * Creates a new texture in a WebGL context.
     *
     * @param gl The context the texture will be created in.
     */
    constructor(gl, width, height, format, type, params = DEFAULT_TEXTURE_PARAMS) {
        this._gl = gl;
        this._format = format;
        this._type = type;
        this._params = params;
        this._width = width;
        this._height = height;
        this._handle = gl.createTexture();
        this.bind();
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, params.wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, params.wrapT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, params.magnificationFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, params.minificationFilter);
    }
    /**
     * Binds the texture to the WebGL context as a 2D texture.
     */
    bind() {
        const gl = this._gl;
        gl.bindTexture(gl.TEXTURE_2D, this._handle);
    }
    /**
     * Sets new content of texture, provided data must be of length equal to "width * height" and its type
     * must correspond to texture's type {@see PixelType}.
     */
    setData(data) {
        const gl = this._gl;
        gl.texImage2D(gl.TEXTURE_2D, 0, this._format, this._width, this._height, 0, this._format, this._type, data);
        this._onDataUpdated();
    }
    /**
     * Sets new texture content from canvas element.
     */
    setDataFromDomElement(element) {
        const gl = this._gl;
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this._format, this._type, element);
        this._onDataUpdated();
    }
    /**
     * Checks if the texture is bound to the WebGL context.
     *
     * @returns `true` if the texture is currently bound to the WebGL context
     *      and `false` otherwise.
     */
    isBound() {
        const gl = this._gl;
        return gl.getParameter(gl.TEXTURE_BINDING_2D) == this._handle;
    }
    /**
     * Attaches the texture to a currently bound to the WebGL context framebuffer.
     *
     * @param attachmentPoint Attachment point the texture will be attached to.
     */
    attachToFramebuffer(attachmentPoint) {
        const gl = this._gl;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this._handle, 0);
    }
    /** Returns width of the texture. */
    getWidth() {
        return this._width;
    }
    /** Returns height of the texture. */
    getHeight() {
        return this._height;
    }
    /**
     * Destroys the texture.
     */
    destroy() {
        this._gl.deleteTexture(this._handle);
    }
    _onDataUpdated() {
        const gl = this._gl;
        if (this._params.minificationFilter >= 9984 /* NEAREST_MIPMAP_NEAREST */) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Texture;



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Wrapper around vertex array (VAO) object from `OES_vertex_array_object`
 * extension.
 */
class VertexArrayObject {
    /**
     * Creates new VAO in a given WebGL context.
     *
     * @param gl The context.
     * @param vaoExt Instance of `OES_vertex_array_object` extension.
     * @param attributeMapping Mapping of attributes.
     */
    constructor(gl, vaoExt, attributeMapping) {
        this._gl = gl;
        this._vaoExt = vaoExt;
        this._handle = vaoExt.createVertexArrayOES();
        this.attributeMapping = attributeMapping;
    }
    /**
     * Binds the VAO to the context.
     */
    bind() {
        this._vaoExt.bindVertexArrayOES(this._handle);
    }
    /**
     * Checks if the VAO is currently bound to the context.
     *
     * @returns `true` if the VAO is currently bound to the WebGL context and
     *      `false` otherwise.
     */
    isBound() {
        return this._gl.getParameter(this._vaoExt.VERTEX_ARRAY_BINDING_OES) ==
            this._handle;
    }
    /**
     * Destroys the VAO.
     */
    destroy() {
        this._vaoExt.deleteVertexArrayOES(this._handle);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VertexArrayObject;



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_main_renderer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_render_loop__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_event_emitter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_font_renderable_df_glyph_atlas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__font_df_font_registry__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__render_billboard_renderable_image_atlas__ = __webpack_require__(106);







class Engine {
    constructor(context, camera) {
        this._context = context;
        this._camera = camera;
        this._renderer = new __WEBPACK_IMPORTED_MODULE_0__render_main_renderer__["a" /* default */](context);
        this._scene = new __WEBPACK_IMPORTED_MODULE_1__scene__["a" /* default */]();
        this._atlases = new Set();
        this._contentUpdateListener = () => this._onUpdate(1 /* CONTENT */);
        this._cameraUpdateListener = () => this._onUpdate(0 /* CAMERA */);
        this.renderLoop = new __WEBPACK_IMPORTED_MODULE_2__engine_render_loop__["a" /* default */](this._renderer, this._scene, camera);
        this.glyphAtlas = new __WEBPACK_IMPORTED_MODULE_4__render_font_renderable_df_glyph_atlas__["a" /* default */](context);
        this.fontRegistry = new __WEBPACK_IMPORTED_MODULE_5__font_df_font_registry__["a" /* default */]();
        this.onInternalError = new __WEBPACK_IMPORTED_MODULE_3__util_event_emitter__["b" /* VoidEventEmitter */]();
        this._camera.onUpdate.addListener(this._cameraUpdateListener);
        this._contextLostListener = () => this.onInternalError.fire();
        this._context.onLoss.addListener(this._contextLostListener);
    }
    createImageAtlas() {
        const atlas = new __WEBPACK_IMPORTED_MODULE_6__render_billboard_renderable_image_atlas__["a" /* default */](this._context);
        atlas.onContentUpdate.addListener(this._contentUpdateListener);
        this._atlases.add(atlas);
        return atlas;
    }
    removeImageAtlas(atlas) {
        atlas.destroy();
        atlas.onContentUpdate.removeListener(this._contentUpdateListener);
        this._atlases.delete(atlas);
    }
    getRenderer() {
        return this._renderer;
    }
    getScene() {
        return this._scene;
    }
    getCamera() {
        return this._camera;
    }
    destroy() {
        this._camera.onUpdate.removeListener(this._cameraUpdateListener);
        for (const atlas of this._atlases) {
            atlas.onContentUpdate.removeListener(this._contentUpdateListener);
            atlas.destroy();
        }
        this.glyphAtlas.destroy();
        this._context.onLoss.removeListener(this._contextLostListener);
    }
    _onUpdate(type) {
        this.renderLoop.update(type);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Engine;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memory_manager__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primitive_renderer_label_point_label_renderer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__primitive_renderer_label_curved_label_renderer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primitive_renderer_colliding_primitive_colliding_primitives_renderer__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitive_renderer_icon_icon_renderer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__primitive_renderer_model_model_renderer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__primitive_renderer_image_image_renderer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fxaa_renderer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ssaa_renderer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postprocess_renderer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__primitive_renderer_polyline_polyline_renderer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__primitive_renderer_polyline_textured_polyline_renderer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__primitive_renderer_polygon_textured_polygon_renderer__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__primitive_renderer_polygon_polygon_renderer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__primitive_renderer_polygon_transparent_polygon_renderer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__global_frame_uniforms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__math_matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util_cartesian_grid__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__util_gputypes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__primitive_renderer_polyline_transparent_polyline_renderer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__util_event_emitter__ = __webpack_require__(4);























/**
 * Maps world coordinates to corresponding points on the cartesian grid.
 */
function convertToGridCoords(point) {
    return __WEBPACK_IMPORTED_MODULE_19__math_vector2__["e" /* create */]((point.x + 1) / 2, (point.y + 1) / 2);
}
const tmpCameraPosition = __WEBPACK_IMPORTED_MODULE_19__math_vector2__["e" /* create */](0, 0);
/**
 * If there are multiple worlds visible (large monitors/low zoom) primitives are rendered in multiple passes from
 * different positions (if the wrap mode of corresponding direction is REPEAT) to get correct final picture.
 * This method calculates camera positions and prepare them to be passed to the render() method.
 */
function calculateCameraPositions(camera) {
    const positions = [];
    const visibleRegion = camera.getVisibleRegion().map(convertToGridCoords);
    for (const worldPosition of Object(__WEBPACK_IMPORTED_MODULE_18__util_cartesian_grid__["a" /* computeSquaresCoveredByConvexPolygon */])(visibleRegion)) {
        if ((camera.options.wrapModeX === 2 /* REPEAT */ || worldPosition.x === 0) &&
            (camera.options.wrapModeY === 2 /* REPEAT */ || worldPosition.y === 0)) {
            tmpCameraPosition.x = -worldPosition.x * 2.0;
            tmpCameraPosition.y = -worldPosition.y * 2.0;
            __WEBPACK_IMPORTED_MODULE_19__math_vector2__["b" /* add */](camera.center, tmpCameraPosition, tmpCameraPosition);
            const centerX = 0.5 * (tmpCameraPosition.x + 1) * 0xffffffff;
            const centerY = 0.5 * (tmpCameraPosition.y + 1) * 0xffffffff;
            const lookAtHigh = __WEBPACK_IMPORTED_MODULE_19__math_vector2__["e" /* create */](Object(__WEBPACK_IMPORTED_MODULE_20__util_gputypes__["d" /* uint16ToFloat */])(Math.trunc(centerX / 0x10000)), Object(__WEBPACK_IMPORTED_MODULE_20__util_gputypes__["d" /* uint16ToFloat */])(Math.trunc(centerY / 0x10000)));
            const lookAtLow = __WEBPACK_IMPORTED_MODULE_19__math_vector2__["e" /* create */](Object(__WEBPACK_IMPORTED_MODULE_20__util_gputypes__["d" /* uint16ToFloat */])(centerX & 0xffff), Object(__WEBPACK_IMPORTED_MODULE_20__util_gputypes__["d" /* uint16ToFloat */])(centerY & 0xffff));
            positions.push({ lookAtHigh, lookAtLow });
        }
    }
    return positions;
}
const FINAL_RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_1__state__["b" /* default */]({
    clearDepth: 0,
    depthTest: true,
    depthFunc: 518 /* GREATER_OR_EQUAL */
});
/**
 * Renderer that bridges high level objects such as polygons, models and styles and
 * low level graphics context.
 */
class MainRenderer {
    /**
     * Create a new renderer.
     *
     * @param context The context the renderer will operate within.
     */
    constructor(context) {
        this.onRender = new __WEBPACK_IMPORTED_MODULE_22__util_event_emitter__["b" /* VoidEventEmitter */]();
        this._context = context;
        this._memoryManager = new __WEBPACK_IMPORTED_MODULE_0__memory_manager__["a" /* default */](context);
        this._globalUniforms = new __WEBPACK_IMPORTED_MODULE_16__global_frame_uniforms__["a" /* default */]();
        this._opaquePolygonRenderer = new __WEBPACK_IMPORTED_MODULE_14__primitive_renderer_polygon_polygon_renderer__["a" /* default */](context);
        this._transparentPolygonRenderer = new __WEBPACK_IMPORTED_MODULE_15__primitive_renderer_polygon_transparent_polygon_renderer__["a" /* default */](context);
        this._texturedPolygonRenderer = new __WEBPACK_IMPORTED_MODULE_13__primitive_renderer_polygon_textured_polygon_renderer__["a" /* default */](context);
        this._modelRenderer = new __WEBPACK_IMPORTED_MODULE_6__primitive_renderer_model_model_renderer__["a" /* default */](context);
        this._iconRenderer = new __WEBPACK_IMPORTED_MODULE_5__primitive_renderer_icon_icon_renderer__["a" /* default */](context);
        this._rasterLayerRenderer = new __WEBPACK_IMPORTED_MODULE_7__primitive_renderer_image_image_renderer__["a" /* default */](context);
        this._pointLabelRenderer = new __WEBPACK_IMPORTED_MODULE_2__primitive_renderer_label_point_label_renderer__["a" /* default */](context);
        this._curvedLabelRenderer = new __WEBPACK_IMPORTED_MODULE_3__primitive_renderer_label_curved_label_renderer__["a" /* default */](context);
        this._opaquePolylineRenderer = new __WEBPACK_IMPORTED_MODULE_11__primitive_renderer_polyline_polyline_renderer__["a" /* default */](context);
        this._transparentPolylineRenderer = new __WEBPACK_IMPORTED_MODULE_21__primitive_renderer_polyline_transparent_polyline_renderer__["a" /* default */](context);
        this._texturedPolylineRenderer = new __WEBPACK_IMPORTED_MODULE_12__primitive_renderer_polyline_textured_polyline_renderer__["a" /* default */](context);
        this._collidingPrimitivesRenderer = new __WEBPACK_IMPORTED_MODULE_4__primitive_renderer_colliding_primitive_colliding_primitives_renderer__["a" /* default */](context, [
            this._pointLabelRenderer,
            this._curvedLabelRenderer
        ]);
        this._fxaaRenderer = new __WEBPACK_IMPORTED_MODULE_8__fxaa_renderer__["a" /* default */](context);
        this._ssaaRenderer = new __WEBPACK_IMPORTED_MODULE_9__ssaa_renderer__["a" /* default */](context);
        this._backgroundRenderer = new __WEBPACK_IMPORTED_MODULE_10__postprocess_renderer__["b" /* default */](context, __WEBPACK_IMPORTED_MODULE_10__postprocess_renderer__["a" /* PostprocessType */].BACKGROUND);
        this._initInternalRenderTargets();
    }
    setRenderTargetSize(width, height) {
        const renderTarget = this._context.getDefaultRenderTarget();
        if (renderTarget.getWidth() === width &&
            renderTarget.getHeight() === height) {
            return;
        }
        this._context.getDefaultRenderTarget().setSize(width, height);
        this._destroyInternalRenderTargets();
        this._initInternalRenderTargets();
    }
    getMemoryManager() {
        return this._memoryManager;
    }
    render(scene, camera, initiator) {
        this._updateGlobalUniforms(camera);
        const renderTarget = this._context.getDefaultRenderTarget();
        switch (initiator) {
            case 2 /* USER */:
                this._render(scene, renderTarget, this._globalUniforms, true);
                this._ssaaRenderer.reset();
                break;
            case 1 /* CONTENT */:
                this._ssaaRenderer.render((renderTarget, globalUniforms) => {
                    this._render(scene, renderTarget, globalUniforms, true);
                }, renderTarget, this._globalUniforms, 0 /* ONE_FRAME */);
                break;
            case 3 /* RENDERER */:
                this._ssaaRenderer.render((renderTarget, globalUniforms) => {
                    this._render(scene, renderTarget, globalUniforms, true);
                }, renderTarget, this._globalUniforms, 1 /* MULTIPLE_FRAMES */);
                break;
        }
        this._rasterLayerRenderer.primitives = scene.getVisibleRasterLayer();
        this._rasterLayerRenderer.render(renderTarget, this._globalUniforms);
        this._iconRenderer.primitives = scene.getVisibleIcons(camera);
        this._iconRenderer.render(renderTarget, this._globalUniforms);
        this._pointLabelRenderer.primitives = scene.getVisiblePointLabels(camera);
        this._curvedLabelRenderer.primitives = scene.getVisibleCurvedLabels(camera);
        this._collidingPrimitivesRenderer.render(renderTarget, camera, this._globalUniforms);
        this._context.bindVao(null);
        this.onRender.fire();
    }
    destroy() {
        this._memoryManager.destroy();
        this._opaquePolygonRenderer.destroy();
        this._transparentPolygonRenderer.destroy();
        this._texturedPolygonRenderer.destroy();
        this._opaquePolylineRenderer.destroy();
        this._transparentPolylineRenderer.destroy();
        this._texturedPolylineRenderer.destroy();
        this._modelRenderer.destroy();
        this._rasterLayerRenderer.destroy();
        this._iconRenderer.destroy();
        this._pointLabelRenderer.destroy();
        this._curvedLabelRenderer.destroy();
        this._collidingPrimitivesRenderer.destroy();
        this._fxaaRenderer.destroy();
        this._ssaaRenderer.destroy();
    }
    /**
     * Set FXAA quality parameters.
     *
     * 'subpix' sets up the amount of sub-pixel aliasing removal.
     *
     * 'edgeThreshold' is the minimum amount of local contrast required to apply algorithm.
     *
     * 'edgeThresholdMin' trims the algorithm from processing darks.
     * @param {object = {subpix=0.75, edgeThreshold=0.063, edgeThresholdMin=0.0625}}
     * @returns void
     */
    setFxaaParams(params) {
        this._fxaaRenderer.setParams(params);
    }
    _updateGlobalUniforms(camera) {
        __WEBPACK_IMPORTED_MODULE_17__math_matrix4__["c" /* copy */](camera.getViewProjMatrix(), this._globalUniforms.viewProjMatrix);
        this._globalUniforms.pixelSize.x = 2.0 / camera.screenSize.width;
        this._globalUniforms.pixelSize.y = 2.0 / camera.screenSize.height;
        this._globalUniforms.worldToPxFactor = 2.0 / (256 * Math.pow(2, camera.zoom));
        this._globalUniforms.cameraPositions = calculateCameraPositions(camera);
    }
    get isComplete() {
        return this._ssaaRenderer.isComplete;
    }
    _render(scene, renderTarget, globalUniforms, useFxaa) {
        const context = this._context;
        const vectorRenderTarget = useFxaa ?
            this._intermediateRendereBuffer :
            renderTarget;
        if (useFxaa) {
            context.bindRenderTarget(vectorRenderTarget);
            context.bindRenderState(FINAL_RENDER_STATE);
            context.clearCurrentTarget(17664 /* ALL */);
        }
        else {
            this._backgroundRenderer.render(vectorRenderTarget);
            context.bindRenderState(FINAL_RENDER_STATE);
            context.clearCurrentTarget(256 /* DEPTH_BUFFER_BIT */);
        }
        context.bindTextureUnit(0);
        this._opaquePolygonRenderer.primitives = scene.getVisibleOpaquePolygons();
        this._opaquePolygonRenderer.render(vectorRenderTarget, globalUniforms);
        this._transparentPolygonRenderer.primitives = scene.getVisibleTransparentPolygons();
        this._transparentPolygonRenderer.render(vectorRenderTarget, globalUniforms);
        this._texturedPolygonRenderer.primitives = scene.getVisibleTexturedPolygons();
        this._texturedPolygonRenderer.render(vectorRenderTarget, globalUniforms);
        this._opaquePolylineRenderer.primitives = scene.getVisibleOpaquePolylines();
        this._opaquePolylineRenderer.render(vectorRenderTarget, globalUniforms);
        this._transparentPolylineRenderer.primitives = scene.getVisibleTransparentPolylines();
        this._transparentPolylineRenderer.render(vectorRenderTarget, globalUniforms);
        this._texturedPolylineRenderer.primitives = scene.getVisibleTexturedPolylines();
        this._texturedPolylineRenderer.render(vectorRenderTarget, globalUniforms);
        this._modelRenderer.primitives = scene.getVisibleModels();
        this._modelRenderer.render(vectorRenderTarget, globalUniforms);
        if (useFxaa) {
            this._fxaaRenderer.render(renderTarget, this._intermediateColorBuffer);
        }
    }
    _initInternalRenderTargets() {
        const context = this._context;
        const renderTarget = context.getDefaultRenderTarget();
        const targetWidth = renderTarget.getWidth();
        const targetHeight = renderTarget.getHeight();
        const intermediateColorBuffer = this._intermediateColorBuffer =
            context.createEmpty2DTexture(targetWidth, targetHeight, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        const intermediateDepthStencilBuffer = this._intermediateDepthStencilBuffer =
            context.createRenderbuffer(targetWidth, targetHeight, 34041 /* DEPTH_STENCIL */);
        this._intermediateRendereBuffer = context.createFramebuffer({
            color: intermediateColorBuffer,
            depthStencil: intermediateDepthStencilBuffer
        });
    }
    _destroyInternalRenderTargets() {
        this._intermediateRendereBuffer.destroy();
        this._intermediateColorBuffer.destroy();
        this._intermediateDepthStencilBuffer.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainRenderer;



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__count_vertices__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_allocator__ = __webpack_require__(18);



const MAX_VERTEX_COUNT = 0x10000;
// FIXME(dmikis) Let's use oversized index buffer til we sort out indices allocation
// both in writers and the manager.
const PAGE_INDEX_BUFFER_BYTE_SIZE = 0x100000;
/**
 * Manager that controls GL memory allocations and pagination.[]
 */
class MemoryManager {
    /**
     * Creates a new memory manager that will allocate memory in a given context.
     *
     * @param context The context.
     */
    constructor(context) {
        this._context = context;
        this._pages = new Map();
        this._emptyPagesClearTimeout = 0;
    }
    /**
     * Allocates memory for a given data in the manager and uploads given data.
     *
     * @param vertexData Buffer with vertices that needs to be allocated.
     * @param indexData Buffer with indices that needs to be allocated.
     * @param attributeMapping Mapping of vertex attributes.
     * @returns Descriptor of the allocated memory region.
     */
    allocate(vertexData, indexData, attributeMapping) {
        const context = this._context;
        let pageSet = this._pages.get(attributeMapping);
        // If there's no pages for the given attribute mapping, create a new set.
        if (!pageSet) {
            pageSet = new Set();
            this._pages.set(attributeMapping, pageSet);
        }
        // Try to allocate data in the existing pages.
        for (const page of pageSet) {
            const memoryChunk = page.allocate(vertexData.byteLength, indexData.byteLength);
            if (memoryChunk) {
                // Success! Now we just upload the data.
                this._updatePage(page, memoryChunk, vertexData, indexData);
                return memoryChunk;
            }
        }
        // We've failed to allocate the data in any of existing pages. No worries
        // though, we just create a new one:)
        const vertexBuffer = context.createVertexBuffer(
        // some buffer writers don't use indices and MAX_VERTEX_COUNT restriction is not applied in such cases
        Math.max(MAX_VERTEX_COUNT * attributeMapping.vertexByteSize, vertexData.byteLength));
        const indexBuffer = context.createIndexBuffer(PAGE_INDEX_BUFFER_BYTE_SIZE);
        const vao = context.createVao(attributeMapping, vertexBuffer, indexBuffer);
        const page = new SinglePassMemoryPage(vertexBuffer, indexBuffer, vao, 5123 /* UNSIGNED_SHORT */);
        page.setDelegate(this);
        pageSet.add(page);
        // Here we assume we always can allocate data in an empty page.
        const memoryChunk = page.allocate(vertexData.byteLength, indexData.byteLength);
        this._updatePage(page, memoryChunk, vertexData, indexData);
        return memoryChunk;
    }
    onPageEmpty() {
        if (!this._emptyPagesClearTimeout) {
            this._emptyPagesClearTimeout = setTimeout(() => {
                this._clearEmptyPages();
                this._emptyPagesClearTimeout = 0;
            });
        }
    }
    /**
     * Destroys the manager and all its memory pages. All memory chunks that were
     * allocated in the manager become invalid.
     */
    destroy() {
        if (this._emptyPagesClearTimeout) {
            clearTimeout(this._emptyPagesClearTimeout);
        }
        for (const [, pageSet] of this._pages) {
            for (const page of pageSet) {
                page.destroy();
            }
        }
    }
    _updatePage(page, memoryChunk, vertexData, indexData) {
        const context = this._context;
        // Let's ensure that we won't break any bound VAOs.
        context.bindVao(null);
        context.uploadDataToBuffer(page.vertexBuffer, vertexData, memoryChunk.vertexByteOffset);
        // Shift indices.
        const baseIndex = Object(__WEBPACK_IMPORTED_MODULE_1__count_vertices__["b" /* countVertices */])(memoryChunk.vertexByteOffset, page.vao.attributeMapping);
        for (let i = 0; i < indexData.length; ++i) {
            indexData[i] += baseIndex;
        }
        context.uploadDataToBuffer(page.indexBuffer, indexData, memoryChunk.indexByteOffset);
    }
    _clearEmptyPages() {
        for (const pageSet of this._pages.values()) {
            for (const page of pageSet) {
                if (page.isEmpty()) {
                    pageSet.delete(page);
                    page.setDelegate(null);
                    page.destroy();
                }
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MemoryManager;

/**
 * Memory page with the following peculiarity: once allocation is failed it gets closed for any subsequent
 * allocations. It allow to keep related primitives closer in memory.
 */
class SinglePassMemoryPage extends __WEBPACK_IMPORTED_MODULE_0__page__["a" /* default */] {
    constructor(vertexBuffer, indexBuffer, vao, indexType) {
        super(vertexBuffer, indexBuffer, vao, indexType, new __WEBPACK_IMPORTED_MODULE_2__util_allocator__["a" /* ArenaAllocator */](vertexBuffer.getSize()), new __WEBPACK_IMPORTED_MODULE_2__util_allocator__["a" /* ArenaAllocator */](indexBuffer.getSize()));
        this._failedAllocation = false;
    }
    allocate(vertexByteLength, indexByteLength) {
        if (this._failedAllocation) {
            return null;
        }
        const chunk = super.allocate(vertexByteLength, indexByteLength);
        this._failedAllocation = (chunk === null);
        return chunk;
    }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_delegator__ = __webpack_require__(17);


/**
 * A "page" of GPU memory. Comprises vertex and index buffers of a fixed size.
 */
class MemoryPage extends __WEBPACK_IMPORTED_MODULE_1__util_delegator__["a" /* DelegatorBase */] {
    /**
     * Creates a new page to manage given vertex and index buffers.
     *
     * @param vertexBuffer The vertex buffer the page will manage.
     * @param indexBuffer The index buffer the page will manager.
     * @param vao The VAO of the page.
     * @param indexType Type of elements of indexBuffer.
     * @param vertexAllocator Allocator of vertex data, logic of allocation directly impacts the lifecycle of the page.
     * @param indexAllocator Allocator of index data, logic of allocation directly impacts the lifecycle of the page.
     */
    constructor(vertexBuffer, indexBuffer, vao, indexType, vertexAllocator, indexAllocator) {
        super();
        this.vertexBuffer = vertexBuffer;
        this.indexBuffer = indexBuffer;
        this.vao = vao;
        this.indexType = indexType;
        this._vertexAllocator = vertexAllocator;
        this._indexAllocator = indexAllocator;
    }
    /**
     * Allocates and writes vertex and index data to the page. Offsets indices
     * in an index array to appropriately take into account offset of the vertex
     * data.
     *
     * @param vertexByteLength required number of bytes in vertex buffer
     * @param indexByteLength required number of bytes in index buffer
     * @returns memory chunk allocated or `null` if allocation's failed
     */
    allocate(vertexByteLength, indexByteLength) {
        if (this._vertexAllocator.maxAllocableSize >= vertexByteLength &&
            this._indexAllocator.maxAllocableSize >= indexByteLength) {
            return new __WEBPACK_IMPORTED_MODULE_0__chunk__["a" /* default */](this, {
                vertexByteOffset: this._vertexAllocator.allocate(vertexByteLength),
                vertexByteLength: vertexByteLength,
                indexByteOffset: this._indexAllocator.allocate(indexByteLength),
                indexByteLength: indexByteLength
            });
        }
        else {
            return null;
        }
    }
    /**
     * Frees a previously allocated memory chunk.
     *
     * @param chunk The chunk to be freed.
     */
    free(chunk) {
        this._vertexAllocator.deallocate(chunk.vertexByteOffset);
        this._indexAllocator.deallocate(chunk.indexByteOffset);
        if (this.isEmpty() && this._delegate) {
            this._delegate.onPageEmpty(this);
        }
    }
    /**
     * Returns `true` if the page does not contain any previously allocated data
     * and `false` otherwise.
     */
    isEmpty() {
        return this._vertexAllocator.isEmpty && this._indexAllocator.isEmpty;
    }
    /**
     * Destroys the page and all its resources.
     */
    destroy() {
        this.vertexBuffer.destroy();
        this.indexBuffer.destroy();
        this.vao.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MemoryPage;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ref_counted__ = __webpack_require__(16);

/** Handler to a allocated memory chunk. */
class MemoryChunk extends __WEBPACK_IMPORTED_MODULE_0__util_ref_counted__["a" /* default */] {
    /**
     * Creates a new handler to a memory chunk with given offsets allocated in
     * a given memory page.
     *
     * @param page The page the chunk was allocated in.
     * @param vertexOffset The offset of chunk's vertex data.
     * @param indexOffset The offset of chunk's index data.
     */
    constructor(page, location) {
        super();
        this.page = page;
        this._location = location;
    }
    /**
     * Returns offset of vertex data of the chunk in bytes.
     */
    get vertexByteOffset() {
        return this._location.vertexByteOffset;
    }
    /**
     * Returns offset of index data of the chunk in bytes.
     */
    get indexByteOffset() {
        return this._location.indexByteOffset;
    }
    destroy() {
        this.page.free(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MemoryChunk;



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Simple implementation of Binary Search Tree.
 */
class BinarySearchTree {
    /**
     * @param comparator To specify the order of items, that can be any complex objects.
     */
    constructor(comparator) {
        this._comparator = comparator;
        this._size = 0;
    }
    /**
     * @returns The root element or `undefined` if the tree is empty.
     */
    get root() {
        return this._root;
    }
    /**
     * @returns The number of items in the tree.
     */
    get size() {
        return this._size;
    }
    /**
     * @returns The smallest element in the tree or `undefined` the the tree is empty.
     */
    get min() {
        if (this._root) {
            return this._min(this._root).value;
        }
        return undefined;
    }
    /**
     * @returns The biggest element in the tree or `undefined` the the tree is empty.
     */
    get max() {
        if (this._root) {
            return this._max(this._root).value;
        }
        return undefined;
    }
    insert(item) {
        this._size++;
        if (!this._root) {
            this._root = { value: item };
            return this._root;
        }
        let node = this._root;
        while (node) {
            if (this._comparator(item, node.value) < 0) {
                if (!node.left) {
                    return node.left = { parent: node, value: item };
                }
                node = node.left;
            }
            else {
                if (!node.right) {
                    return node.right = { parent: node, value: item };
                }
                node = node.right;
            }
        }
        // impossible to get there, throwing is to make TS analizator happy
        throw new Error();
    }
    remove(node) {
        this._size--;
        if (node.left && node.right) {
            const successor = this._min(node.right);
            this._replaceSubtree(node, successor);
            // update links to children of the removed node
            if (node.left) {
                successor.left = node.left;
                node.left.parent = successor;
            }
            if (node.right) {
                successor.right = node.right;
                node.right.parent = successor;
            }
        }
        else if (node.left) {
            this._replaceSubtree(node, node.left);
        }
        else if (node.right) {
            this._replaceSubtree(node, node.right);
        }
        else {
            this._replaceSubtree(node, undefined);
        }
    }
    /**
     * Iterates elements in ascending order.
     */
    *values(node) {
        if (node) {
            yield* this.values(node.left);
            yield node.value;
            yield* this.values(node.right);
        }
    }
    /**
     * Iterates elements in ascending order.
     */
    [Symbol.iterator]() {
        return this.values(this._root);
    }
    _min(from) {
        let node = from;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    _max(from) {
        let node = from;
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    /**
     * Reorganizes the tree structure so that the replacement node takes replaceable's position, the latter is removed.
     */
    _replaceSubtree(replaceable, replacement) {
        if (replaceable.parent) {
            if (replaceable.parent.left === replaceable) {
                replaceable.parent.left = replacement;
            }
            else if (replaceable.parent.right === replaceable) {
                replaceable.parent.right = replacement;
            }
        }
        else {
            this._root = replacement;
        }
        if (replacement) {
            // remove replacement from its current location
            if (replacement.parent) {
                if (replacement.parent.left === replacement) {
                    replacement.parent.left = undefined;
                }
                else if (replacement.parent.right === replacement) {
                    replacement.parent.right = undefined;
                }
            }
            replacement.parent = replaceable.parent;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BinarySearchTree;



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Set with predictable iteration order. Stores items as a two way linked list thus allowing to insert items in between.
 */
class LinkedSet {
    constructor() {
        this._nodes = new Map();
    }
    get begin() {
        return this._begin && this._begin.value;
    }
    get end() {
        return this._end && this._end.value;
    }
    /**
     * Inserts a new item at the end of the set.
     */
    insert(item) {
        if (!this._nodes.has(item)) {
            const node = { value: item };
            if (this._end) {
                this.insertAfter(this._end.value, item);
            }
            else {
                this._begin = this._end = node;
                this._nodes.set(item, node);
            }
        }
    }
    /**
     * Inserts a new item before the specified one. If the before item is not in the set or
     * the item is already inserted nothing happens.
     */
    insertBefore(before, item) {
        const beforeNode = this._nodes.get(before);
        if (beforeNode && !this._nodes.has(item)) {
            const node = { value: item };
            if (beforeNode.prev) {
                beforeNode.prev.next = node;
                node.prev = beforeNode.prev;
            }
            node.next = beforeNode;
            beforeNode.prev = node;
            this._nodes.set(item, node);
            if (beforeNode === this._begin) {
                this._begin = node;
            }
        }
    }
    /**
     * Inserts a new item after the specified one. If the after item is not in the set or
     * the item is already inserted nothing happens.
     */
    insertAfter(after, item) {
        const afterNode = this._nodes.get(after);
        if (afterNode && !this._nodes.has(item)) {
            const node = { value: item };
            if (afterNode.next) {
                afterNode.next.prev = node;
                node.next = afterNode.next;
            }
            node.prev = afterNode;
            afterNode.next = node;
            this._nodes.set(item, node);
            if (afterNode === this._end) {
                this._end = node;
            }
        }
    }
    /**
     * Removes item from the set.
     */
    remove(item) {
        const node = this._nodes.get(item);
        if (node) {
            if (node === this._begin) {
                this._begin = node.next;
            }
            if (node === this._end) {
                this._end = node.prev;
            }
            if (node.next) {
                node.next.prev = node.prev;
            }
            if (node.prev) {
                node.prev.next = node.next;
            }
            this._nodes.delete(item);
        }
    }
    /**
     * @returns `undefined` if the item is not in the set or it is the first elements.
     */
    getPrev(item) {
        const node = this._nodes.get(item);
        if (node && node.prev) {
            return node.prev.value;
        }
        return undefined;
    }
    /**
     * @returns `undefined` if the item is not in the set or it is the last elements.
     */
    getNext(item) {
        const node = this._nodes.get(item);
        if (node && node.next) {
            return node.next.value;
        }
        return undefined;
    }
    /**
     * Iterates over the set from the fist element to the last (in the order of insertion
     * if the insert method was used only).
     */
    *values() {
        let node = this._begin;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }
    /**
     * Iterates over the set from the fist element to the last (in the order of insertion
     * if the insert method was used only).
     */
    [Symbol.iterator]() {
        return this.values();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedSet;



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_point_label_vert__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_point_label_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shader_point_label_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__label_renderer__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billboard_rectangle_renderer__ = __webpack_require__(59);





const PROGRAM_OPTIONS = {
    attribMap: {
        vertexId: 2 /* ID */,
        vertexPosHigh: 0 /* POSITION_HIGH */,
        vertexPosLow: 1 /* POSITION_LOW */,
        vertexDisplacement: 6 /* DISPLACEMENT */,
        vertexUV: 4 /* UV */,
        vertexPriority: 9 /* PRIORITY */,
        vertexColor: 7 /* COLOR */,
        vertexOutlineColor: 8 /* OUTLINE_COLOR */,
        vertexScale: 11 /* AUX */
    }
};
/**
 * Point labels renderer. It uses appropriate program to layout glyphs on GPU.
 */
class PointLabelRenderer extends __WEBPACK_IMPORTED_MODULE_3__label_renderer__["a" /* default */] {
    constructor(context) {
        super(context, context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_point_label_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag___default.a, Object.assign({}, PROGRAM_OPTIONS)), context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_point_label_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag___default.a, Object.assign({ defines: { COLOR_ID_MODE: 1 } }, PROGRAM_OPTIONS)));
        this._backgroundRenderer = new __WEBPACK_IMPORTED_MODULE_4__billboard_rectangle_renderer__["a" /* default */](context);
    }
    renderVisible(target, uniforms, visibility) {
        this._backgroundRenderer.primitives = this.primitives
            .filter((label) => label.background !== undefined)
            .map((label) => label.background);
        this._backgroundRenderer.render(target, uniforms, visibility);
        super.renderVisible(target, uniforms, visibility);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PointLabelRenderer;



/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexId;\n\n// point in the world the label is anchored to\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\n\n// vector of concrete glyph point displacement (top-left, bottom-left, ...) relative to label's center, in px\nattribute vec2 vertexDisplacement;\n\n// coordinates of the glyph vertex in the atlas\nattribute vec2 vertexUV;\n\nattribute float vertexPriority;\n\nattribute lowp vec4 vertexColor;\nattribute lowp vec4 vertexOutlineColor;\nattribute float vertexScale;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform vec2 pixelSize;\nuniform sampler2D visibility;\nuniform vec2 visibilitySize;\nuniform vec2 shift;\n\nvarying vec2 uv;\nvarying lowp vec4 color;\nvarying lowp vec4 outlineColor;\nvarying mediump float scale;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvec2 VISIBILITY_HALF_PX = 0.5 / visibilitySize;\n\nvoid main(void) {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow),\n        0,\n        1\n    );\n    position.xyz /= position.w;\n    position.w = 1.0;\n\n    gl_Position = position + vec4(vertexDisplacement * pixelSize, 0.0, 0.0);\n\n#ifdef COLOR_ID_MODE\n    gl_Position.xy += shift;\n    gl_Position.z = vertexPriority;\n    color = vec4(vertexId, 0, 1);\n#else\n    vec4 visibilityValue = texture2D(visibility, vertexId.xy + VISIBILITY_HALF_PX);\n    if (visibilityValue.x == 1.0) {\n        gl_Position.z = -2.0; // make it invisible\n        return;\n    }\n    uv = vertexUV;\n    color = vertexColor;\n    outlineColor = vertexOutlineColor;\n    scale = vertexScale;\n#endif\n}\n"

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appendToBatch */
/* harmony export (immutable) */ __webpack_exports__["a"] = batchAllocatedObjects;
/**
 * Appends portion of memory to batch if they are adjacent.
 *
 * @returns `true` if both params are adjacent and the batch was successfully updated, `false` otherwise.
 */
function appendToBatch(memoryLocation, batch) {
    if (batch.vertexByteOffset + batch.vertexByteLength === memoryLocation.vertexByteOffset &&
        batch.indexByteOffset + batch.indexByteLength === memoryLocation.indexByteOffset) {
        batch.vertexByteLength += memoryLocation.vertexByteLength;
        batch.indexByteLength += memoryLocation.indexByteLength;
        return true;
    }
    return false;
}
/**
 * Combines objects allocated in memory into batches. No sorting is done in this method, the objects are supposed
 * to be sorted by index/vertex offsets to make batching effective. The batch is created by factory since it can
 * contains problem specific information.
 *
 * @param objects List of allocated objects.
 * @param getMemoryLocation Returns memory location of specific object.
 * @param createBatch Initiates batch by the first object.
 * @param canBatch Checks if two objects can be allocated.
 * @returns Iterable list of batches.
 */
function* batchAllocatedObjects(objects, getMemoryLocation, createBatch, canBatch = () => true) {
    const iterator = objects[Symbol.iterator]();
    let primitive = iterator.next().value;
    if (!primitive) {
        return;
    }
    let prev = primitive;
    let batch = createBatch(prev);
    while (primitive = iterator.next().value) {
        const primitiveMemoryLocation = getMemoryLocation(primitive);
        if (!canBatch(prev, primitive, batch) || !appendToBatch(primitiveMemoryLocation, batch)) {
            yield batch;
            batch = createBatch(primitive);
        }
        prev = primitive;
    }
    yield batch;
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_billboard_rectangle_vert__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_billboard_rectangle_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_billboard_rectangle_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_billboard_rectangle_frag__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_billboard_rectangle_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_billboard_rectangle_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__ = __webpack_require__(3);






const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_3__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_3__state__["a" /* BLEND_OVER_RENDER_STATE */]);
/**
 * Renderer of billboard rectangles.
 */
class BillboardRectangleRenderer extends __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__["a" /* default */] {
    constructor(context) {
        super(context, RENDER_STATE, context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_billboard_rectangle_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_billboard_rectangle_frag___default.a, {
            attribMap: {
                vertexId: 2 /* ID */,
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexDisplacement: 6 /* DISPLACEMENT */,
                vertexUV: 4 /* UV */,
                vertexColor: 7 /* COLOR */,
                vertexBorderRadii: 11 /* AUX */
            }
        }));
        this._visibilitySizeUniform = __WEBPACK_IMPORTED_MODULE_4__math_vector2__["e" /* create */](0, 0);
    }
    render(target, uniforms, visibility) {
        this._visibility = visibility;
        super.render(target, uniforms);
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _bindProgram(program, uniforms) {
        super._bindProgram(program, uniforms);
        program.setVector2Uniform('pixelSize', uniforms.pixelSize);
        if (this._visibility) {
            this._visibilitySizeUniform.x = this._visibility.getWidth();
            this._visibilitySizeUniform.y = this._visibility.getHeight();
            program.setIntScalarUniform('visibility', 0);
            program.setVector2Uniform('visibilitySize', this._visibilitySizeUniform);
            this._context.bindTextureUnit(0);
            this._context.bindTexture(this._visibility);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BillboardRectangleRenderer;



/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexId;\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec2 vertexDisplacement;\nattribute vec2 vertexUV;\nattribute vec4 vertexColor;\nattribute vec2 vertexBorderRadii;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform vec2 pixelSize;\nuniform sampler2D visibility;\nuniform vec2 visibilitySize;\n\nvarying vec2 uv;\nvarying vec4 color;\nvarying vec2 borderRadii;\n\nconst vec4 INVISIBLE_GL_POSITION = vec4(2, 2, 2, 1);\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\nvec2 VISIBILITY_HALF_PX = 0.5 / visibilitySize;\n\nvoid main(void) {\n    vec4 visibilityValue = texture2D(visibility, vertexId.xy + VISIBILITY_HALF_PX);\n    if (visibilityValue.x == 1.0) {\n        gl_Position = INVISIBLE_GL_POSITION;\n        return;\n    }\n\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow),\n        0,\n        1\n    );\n    position.xyz /= position.w;\n    position.w = 1.0;\n\n    gl_Position = position + vec4(vertexDisplacement * pixelSize, 0.0, 0.0);\n\n    uv = vertexUV;\n    color = vertexColor;\n    borderRadii = vertexBorderRadii;\n}\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nvarying vec2 uv;\nvarying vec4 color;\nvarying vec2 borderRadii;\n\nfloat roundedRectangle(const in vec2 uv, const in vec2 radii) {\n    vec2 absUv = abs(uv);\n    vec2 q = absUv + radii - 1.0;\n    return min(q.x, q.y) > 0.0 ? length(q / radii) : max(absUv.x, absUv.y);\n}\n\nvoid main(void) {\n    gl_FragColor = step(roundedRectangle(uv, borderRadii), 1.0) * color;\n}\n"

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_curved_label_vert__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_curved_label_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shader_curved_label_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__label_renderer__ = __webpack_require__(21);




const PROGRAM_OPTIONS = {
    attribMap: {
        vertexId: 2 /* ID */,
        vertexPosHigh: 0 /* POSITION_HIGH */,
        vertexPosLow: 1 /* POSITION_LOW */,
        vertexDisplacements: 6 /* DISPLACEMENT */,
        vertexUV: 4 /* UV */,
        vertexColor: 7 /* COLOR */,
        vertexOutlineColor: 8 /* OUTLINE_COLOR */,
        vertexScale: 11 /* AUX */,
        vertexPriority: 9 /* PRIORITY */,
        leftPolylinePoint1: 12 /* AUX1 */,
        leftPolylinePoint2: 13 /* AUX2 */,
        rightPolylinePoint1: 14 /* AUX3 */,
        rightPolylinePoint2: 15 /* AUX4 */
    }
};
/**
 * Curved labels renderer. It uses appropriate program to layout glyphs on GPU.
 */
class CurvedLabelRenderer extends __WEBPACK_IMPORTED_MODULE_3__label_renderer__["a" /* default */] {
    constructor(context) {
        super(context, context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_curved_label_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__shader_df_text_frag___default.a, Object.assign({}, PROGRAM_OPTIONS)), context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_curved_label_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_color_id_frag___default.a, Object.assign({ defines: { COLOR_ID_MODE: 1 } }, PROGRAM_OPTIONS)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CurvedLabelRenderer;



/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexId;\n\n// point in the world the label is anchored to\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\n\n// vector of concrete glyph point displacement (top-left, bottom-left, ...) relative to glyph's center (two values),\n// and distance of the glyph center to label's center (third value), in px\nattribute vec3 vertexDisplacements;\n\n// coordinates of the glyph vertex in the atlas\nattribute vec2 vertexUV;\n\nattribute float vertexPriority;\n\nattribute lowp vec4 vertexColor;\nattribute lowp vec4 vertexOutlineColor;\nattribute float vertexScale;\n\n// deltas relative to the world point encoded in vertexPosHigh/vertexPosLow\nattribute vec2 leftPolylinePoint1;\nattribute vec2 leftPolylinePoint2;\nattribute vec2 rightPolylinePoint1;\nattribute vec2 rightPolylinePoint2;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform vec2 pixelSize;\nuniform sampler2D visibility;\nuniform vec2 visibilitySize;\nuniform vec2 shift;\n\nvarying vec2 uv;\nvarying lowp vec4 color;\nvarying lowp vec4 outlineColor;\nvarying float scale;\n\nconst float INFINITY = 1000000.0; // large enough for a segment length to consider it infinity\nconst int MAX_POLYLINE_POINTS = 2;\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvec2 VISIBILITY_HALF_PX = 0.5 / visibilitySize;\n\n/**\n * Returns world coordinate (plus delta) projected on screen, in pixels.\n */\nvec2 project(vec2 pointHigh, vec2 pointLow, vec2 delta) {\n    vec4 position = viewProjMatrix * vec4(\n            YV_H * (pointHigh - lookAtHigh) + YV_L * (pointLow - lookAtLow) + delta,\n            0,\n            1\n        );\n    vec2 projected = position.xy / position.w;\n    return projected / pixelSize;\n}\n\nvoid setPolylineUpDirection(inout vec2 polylineDeltas[MAX_POLYLINE_POINTS], bool isRightPart) {\n    if (isRightPart) {\n        polylineDeltas[0] = rightPolylinePoint1;\n        polylineDeltas[1] = rightPolylinePoint2;\n    } else {\n        polylineDeltas[0] = leftPolylinePoint1;\n        polylineDeltas[1] = leftPolylinePoint2;\n    }\n}\n\n/**\n * Curved labels are layouted here: the label is centered in the vertexPosHigh/vertexPosLow and polyline points\n * are used to guide concrete gryph vertex. Number of polyline points is hardcoded to pass them in attributes.\n */\nvoid main(void) {\n    vec2 vertexDisplacement = vertexDisplacements.xy;\n    float vertexLineDisplacement = vertexDisplacements.z;\n    vec2 polylineDeltas[MAX_POLYLINE_POINTS];\n    vec2 position = project(vertexPosHigh, vertexPosLow, vec2(0, 0));\n    float remainingLength = abs(vertexLineDisplacement);\n    for (int i = 0; i < MAX_POLYLINE_POINTS; i++) {\n        vec2 projectedPoint;\n\n        // figure out the direction (left/right) at the first step\n        if (i == 0) {\n            projectedPoint = project(vertexPosHigh, vertexPosLow, rightPolylinePoint1);\n            bool isRightPart = vertexLineDisplacement > 0.0;\n            bool isInverted = projectedPoint.x < position.x;\n            // the map could be rotated and curved label should change its direction if they got upside down\n            // using center segment to identify this case is an approximation (ideally we should check all segments)\n            setPolylineUpDirection(polylineDeltas, isRightPart ^^ isInverted); // invert isRightPart if isInverted\n\n            // the first right point of the segment already calculated,\n            // recalculate the point if this part of the label goes other direction\n            if (!(isRightPart && !isInverted) && !(!isRightPart && isInverted)) {\n                projectedPoint = project(vertexPosHigh, vertexPosLow, polylineDeltas[i]);\n            }\n        } else {\n            projectedPoint = project(vertexPosHigh, vertexPosLow, polylineDeltas[i]);\n        }\n\n        vec2 segment = projectedPoint - position;\n        bool isLast = i == (MAX_POLYLINE_POINTS - 1);\n        float segmentLength = (isLast || (polylineDeltas[i + 1] == vec2(0, 0))) ? INFINITY : length(segment);\n\n        if (segmentLength > remainingLength) {\n            float signFactor = vertexLineDisplacement > 0.0 ? 1.0 : -1.0;\n            vec2 direction = normalize(segment);\n            vec2 normal = vec2(-direction.y, direction.x);\n\n            position += direction * remainingLength;\n            position += signFactor * direction * vertexDisplacement.x;\n            position += signFactor * normal * vertexDisplacement.y;\n\n            break;\n        } else {\n            remainingLength -= segmentLength;\n            position += segment;\n        }\n    }\n\n    gl_Position = vec4(position * pixelSize, 0.0, 1.0);\n\n#ifdef COLOR_ID_MODE\n    gl_Position.xy += shift;\n    gl_Position.z = vertexPriority;\n    color = vec4(vertexId, 0, 1);\n#else\n    vec4 visibilityValue = texture2D(visibility, vertexId.xy + VISIBILITY_HALF_PX);\n    if (visibilityValue.x == 1.0) {\n        gl_Position.z = -2.0; // make it invisible\n        return;\n    }\n    uv = vertexUV;\n    color = vertexColor;\n    outlineColor = vertexOutlineColor;\n    scale = vertexScale;\n#endif\n}\n"

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_color__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_collision_sampler_vert__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_collision_sampler_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_collision_sampler_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_collision_sampler_frag__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_collision_sampler_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_collision_sampler_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_full_overlap_sampler_vert__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_full_overlap_sampler_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shader_full_overlap_sampler_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_vector3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collision_sampler_buffer_writer__ = __webpack_require__(69);









const EMPTY = __WEBPACK_IMPORTED_MODULE_0__util_color__["c" /* create */](0, 0, 0, 1);
const INVISIBLE = __WEBPACK_IMPORTED_MODULE_0__util_color__["c" /* create */](1, 1, 1, 1);
const VISIBILITY_RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_4__state__["b" /* default */]({
    clearColor: INVISIBLE,
    dither: false
});
const RENDER_STATE_PRIORITY = new __WEBPACK_IMPORTED_MODULE_4__state__["b" /* default */]({
    clearColor: EMPTY,
    depthTest: true,
    clearDepth: 0,
    depthFunc: 516 /* GREATER */,
    dither: false
});
const RENDER_STATE_REVERSE_PRIORITY = new __WEBPACK_IMPORTED_MODULE_4__state__["b" /* default */]({
    clearColor: EMPTY,
    depthTest: true,
    clearDepth: 1,
    depthFunc: 515 /* LESS_OR_EQUAL */,
    dither: false
});
// size of minimal recognizable square side in css pixels.
const GRID_PRECISION_PX = 6;
/**
 * The id of a primitive should meet the following criteria:
 *   it should be encoded as single pixel RGBA texture (from 0 to 2^32 - 1) after overlap sampling phase
 *   and it should be used as coordinates of a primitive's visibility flag in visibility texture
 * 256 (one byte) seems the most handy value as it fits the color component size and makes
 * the visibility texture's size acceptable (256x256).
 */
const ID_COMPONENT_SIZE = 256;
const OUTPUT_HALF_PX_SIZE = __WEBPACK_IMPORTED_MODULE_5__math_vector2__["e" /* create */](0.5 / ID_COMPONENT_SIZE, 0.5 / ID_COMPONENT_SIZE);
const PRIORITY_TEXTURE_INDEX = 0;
const REVERSE_PRIORITY_TEXTURE_INDEX = 1;
const PREV_VISIBILITY_TEXTURE_INDEX = 2;
/**
 * There can be many primitive renderers that should hide colliding primitives, this class takes over
 * the building of the visibility texture and supplies it to them. The renderers should not be called
 * to render independently, this one will manage it.
 */
class CollidingPrimitivesRenderer {
    constructor(context, renderers) {
        this._context = context;
        this._renderers = renderers;
        this._stabiltyShift = __WEBPACK_IMPORTED_MODULE_6__math_vector3__["e" /* create */](0, 0, 0);
        this._prevTargetSize = { width: -1, height: -1 };
        this._priorityPxSizeUniform = __WEBPACK_IMPORTED_MODULE_5__math_vector2__["e" /* create */](0, 0);
        this._currentVisibilityTexture = context.createEmpty2DTexture(ID_COMPONENT_SIZE, ID_COMPONENT_SIZE, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        this._currentVisibilityBuffer = context.createFramebuffer({
            color: this._currentVisibilityTexture
        });
        this._prevVisibilityTexture = context.createEmpty2DTexture(ID_COMPONENT_SIZE, ID_COMPONENT_SIZE, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        this._prevVisibilityBuffer = context.createFramebuffer({
            color: this._prevVisibilityTexture
        });
        this._visibilityProgram = context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_collision_sampler_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_collision_sampler_frag___default.a, {
            attribMap: {
                uv: 0 /* POSITION */
            }
        });
        this._fullOverlapVisibilityProgram = context.createProgram(__WEBPACK_IMPORTED_MODULE_3__shader_full_overlap_sampler_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_collision_sampler_frag___default.a, {
            attribMap: {
                uv: 0 /* POSITION */
            }
        });
        // this texture is attached uninitialized at the first draw call and FF is complaining about slow zeroing
        // texture data, whilst this manual clearing doesn't change anything it removes annoying console warning
        this._context.bindRenderState(VISIBILITY_RENDER_STATE);
        this._context.bindRenderTarget(this._prevVisibilityBuffer);
        this._context.clearCurrentTarget(16384 /* COLOR_BUFFER_BIT */);
    }
    render(target, camera, uniforms) {
        if (target.getWidth() !== this._prevTargetSize.width ||
            target.getHeight() !== this._prevTargetSize.height) {
            this._onTargetSizeChanged(target.getWidth(), target.getHeight());
        }
        // Rasterization may be not stable in the sense of the shape of pixels occupied by particular object when this
        // object gets shifted (e.g. the user drags the center of the map) and since collisions are detected by
        // overlapped pixels this fact can lead to blinking (found overlapping in one frame/not found in the next/etc).
        // For those objects (and their positions) that are not distorted by perspective it can be fixed by
        // introducing a shift that takes into account the amount of drag and forces vertices to be displaced in the
        // same position in grid's cell.
        this._stabiltyShift.x = camera.center.x;
        this._stabiltyShift.y = camera.center.y;
        this._stabiltyShift.z = 0;
        __WEBPACK_IMPORTED_MODULE_7__math_matrix4__["b" /* apply */](camera.getViewProjMatrix(), this._stabiltyShift, this._stabiltyShift);
        // NDC (-1 : 1) are 2 times larger than texture coordinates (0 : 1)
        this._stabiltyShift.x %= 2 * this._priorityPxSizeUniform.x;
        this._stabiltyShift.y %= 2 * this._priorityPxSizeUniform.y;
        // render all primitives in straight order
        this._context.bindRenderTarget(this._priorityColorBuffer);
        this._context.bindRenderState(RENDER_STATE_PRIORITY);
        this._context.clearCurrentTarget(16384 /* COLOR_BUFFER_BIT */ | 256 /* DEPTH_BUFFER_BIT */);
        for (const renderer of this._renderers) {
            renderer.renderInColorIdMode(this._priorityColorBuffer, uniforms, this._stabiltyShift);
        }
        // render all primitives in straight order
        this._context.bindRenderTarget(this._reversePriorityColorBuffer);
        this._context.bindRenderState(RENDER_STATE_REVERSE_PRIORITY);
        this._context.clearCurrentTarget(16384 /* COLOR_BUFFER_BIT */ | 256 /* DEPTH_BUFFER_BIT */);
        for (const renderer of this._renderers) {
            renderer.renderInColorIdModeReversePriority(this._reversePriorityColorBuffer, uniforms, this._stabiltyShift);
        }
        // sample previously rendered outputs to find out collisions
        this._context.bindRenderState(VISIBILITY_RENDER_STATE);
        this._context.bindRenderTarget(this._currentVisibilityBuffer);
        this._context.clearCurrentTarget(16384 /* COLOR_BUFFER_BIT */);
        const fullOverlapVisibilityProgram = this._fullOverlapVisibilityProgram;
        this._context.bindProgram(fullOverlapVisibilityProgram);
        fullOverlapVisibilityProgram.setIntScalarUniform('priority', PRIORITY_TEXTURE_INDEX);
        fullOverlapVisibilityProgram.setVector2Uniform('priorityPxSize', this._priorityPxSizeUniform);
        fullOverlapVisibilityProgram.setVector2Uniform('outputHalfPxSize', OUTPUT_HALF_PX_SIZE);
        this._context.bindTextureUnit(PRIORITY_TEXTURE_INDEX);
        this._context.bindTexture(this._priorityColorTexture);
        this._context.bindVao(this._visibilityVao);
        this._context.drawMesh(0, this._numberOfCollisionSamplers, 0 /* POINTS */);
        const visibilityProgram = this._visibilityProgram;
        this._context.bindProgram(visibilityProgram);
        visibilityProgram.setIntScalarUniform('priority', PRIORITY_TEXTURE_INDEX);
        visibilityProgram.setIntScalarUniform('reversePriority', REVERSE_PRIORITY_TEXTURE_INDEX);
        visibilityProgram.setIntScalarUniform('prevVisibility', PREV_VISIBILITY_TEXTURE_INDEX);
        visibilityProgram.setVector2Uniform('priorityPxSize', this._priorityPxSizeUniform);
        visibilityProgram.setVector2Uniform('outputHalfPxSize', OUTPUT_HALF_PX_SIZE);
        this._context.bindTextureUnit(PRIORITY_TEXTURE_INDEX);
        this._context.bindTexture(this._priorityColorTexture);
        this._context.bindTextureUnit(REVERSE_PRIORITY_TEXTURE_INDEX);
        this._context.bindTexture(this._reversePriorityColorTexture);
        this._context.bindTextureUnit(PREV_VISIBILITY_TEXTURE_INDEX);
        this._context.bindTexture(this._prevVisibilityTexture);
        this._context.bindVao(this._visibilityVao);
        this._context.drawMesh(0, this._numberOfCollisionSamplers, 0 /* POINTS */);
        // render final picture
        for (const renderer of this._renderers) {
            renderer.renderVisible(target, uniforms, this._currentVisibilityTexture);
        }
        // swap visibility buffers
        const buffer = this._currentVisibilityBuffer;
        this._currentVisibilityBuffer = this._prevVisibilityBuffer;
        this._prevVisibilityBuffer = buffer;
        const texture = this._currentVisibilityTexture;
        this._currentVisibilityTexture = this._prevVisibilityTexture;
        this._prevVisibilityTexture = texture;
    }
    destroy() {
        this._destroyGridResources();
        this._currentVisibilityTexture.destroy();
        this._currentVisibilityBuffer.destroy();
        this._prevVisibilityTexture.destroy();
        this._prevVisibilityBuffer.destroy();
        this._visibilityProgram.destroy();
        this._fullOverlapVisibilityProgram.destroy();
    }
    _destroyGridResources() {
        this._depthBuffer.destroy();
        this._priorityColorTexture.destroy();
        this._reversePriorityColorTexture.destroy();
        this._priorityColorBuffer.destroy();
        this._reversePriorityColorBuffer.destroy();
        this._vertexBuffer.destroy();
        this._visibilityVao.destroy();
    }
    _onTargetSizeChanged(width, height) {
        if (this._depthBuffer) {
            this._destroyGridResources();
        }
        const gridPrecisionTargetPx = GRID_PRECISION_PX * window.devicePixelRatio;
        const gridWidth = Math.ceil(width / gridPrecisionTargetPx);
        const gridHeight = Math.ceil(height / gridPrecisionTargetPx);
        this._depthBuffer = this._context.createRenderbuffer(gridWidth, gridHeight, 34041 /* DEPTH_STENCIL */);
        this._priorityColorTexture = this._context.createEmpty2DTexture(gridWidth, gridHeight, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        this._reversePriorityColorTexture = this._context.createEmpty2DTexture(gridWidth, gridHeight, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        this._priorityColorBuffer = this._context.createFramebuffer({
            color: this._priorityColorTexture,
            depthStencil: this._depthBuffer
        });
        this._reversePriorityColorBuffer = this._context.createFramebuffer({
            color: this._reversePriorityColorTexture,
            depthStencil: this._depthBuffer
        });
        const writer = new __WEBPACK_IMPORTED_MODULE_8__collision_sampler_buffer_writer__["b" /* default */](gridWidth, gridHeight);
        this._vertexBuffer = this._context.createVertexBuffer(writer.data.byteLength);
        this._visibilityVao = this._context.createVao(__WEBPACK_IMPORTED_MODULE_8__collision_sampler_buffer_writer__["a" /* ATTRIBUTE_MAPPING */], this._vertexBuffer, null);
        this._numberOfCollisionSamplers = writer.numberOfSamplers;
        this._context.uploadDataToBuffer(this._vertexBuffer, writer.data);
        this._prevTargetSize.width = width;
        this._prevTargetSize.height = height;
        this._priorityPxSizeUniform.x = 1.0 / gridWidth;
        this._priorityPxSizeUniform.y = 1.0 / gridHeight;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CollidingPrimitivesRenderer;



/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 uv;\n\nuniform sampler2D priority;\nuniform sampler2D reversePriority;\nuniform sampler2D prevVisibility;\nuniform vec2 priorityPxSize;\nuniform vec2 outputHalfPxSize;\n\nvarying vec4 color;\n\nconst vec4 DISCARD_POSITION = vec4(2, 2, 2, 1);\nconst vec4 EMPTY_CELL = vec4(0, 0, 0, 1);\nconst vec4 VISIBLE = vec4(0, 0, 0, 1);\nconst vec4 INVISIBLE = vec4(1, 1, 1, 1);\nconst vec4 INVISIBLE_BY_COLLISION = vec4(1, 0, 1, 1);\n\nvec4 calculateOutputPosition(vec2 objectId) {\n    return vec4((objectId + outputHalfPxSize) * 2.0 - 1.0, 0, 1);\n}\n\nvoid main() {\n    vec4 priorityValue = texture2D(priority, uv);\n\n    // discard sample by default, it will be rewriten to something meaningfull if collision is found\n    gl_Position = DISCARD_POSITION;\n\n    if (priorityValue == EMPTY_CELL) {\n        return;\n    }\n\n    vec2 neighbours[8];\n    neighbours[0] = vec2( 0,  1); // top\n    neighbours[1] = vec2( 0, -1); // bottom\n    neighbours[2] = vec2(-1,  0); // left\n    neighbours[3] = vec2( 1,  0); // right\n    neighbours[4] = vec2(-1, -1); // bottom-left\n    neighbours[5] = vec2(-1,  1); // top-left\n    neighbours[6] = vec2( 1, -1); // bottom-left\n    neighbours[7] = vec2( 1,  1); // top-right\n\n    gl_PointSize = 1.0;\n\n    int messFactor = 0;\n    vec4 prevVisibilityCache;\n    bool prevVisibilityCached = false;\n    for (int i = 0; i < 8; i++) {\n        vec2 neighbourOffset = neighbours[i];\n        vec2 neighbourCoords = uv + neighbourOffset * priorityPxSize;\n        vec4 neighbourPriorityValue = texture2D(priority, neighbourCoords);\n\n        if (neighbourPriorityValue == EMPTY_CELL) {\n            continue;\n        }\n\n        if (priorityValue != neighbourPriorityValue) {\n            vec4 prevVisibilityValue = prevVisibilityCache;\n            if (!prevVisibilityCached) {\n                prevVisibilityCache = texture2D(prevVisibility, priorityValue.rg + outputHalfPxSize);\n                prevVisibilityValue = prevVisibilityCache;\n                prevVisibilityCached = true;\n            }\n\n            // hide the object if it is close to another one and it was hidden previously\n            if (prevVisibilityValue == INVISIBLE_BY_COLLISION) {\n                gl_Position = calculateOutputPosition(priorityValue.rg);\n                color = INVISIBLE_BY_COLLISION;\n                return;\n            }\n\n            // check if it is overlapped by a neighbour\n            vec4 reverseNeighbourPriorityValue = texture2D(reversePriority, neighbourCoords);\n            if (reverseNeighbourPriorityValue == priorityValue) {\n                gl_Position = calculateOutputPosition(priorityValue.rg);\n                color = INVISIBLE_BY_COLLISION;\n                return;\n            }\n\n            // count overlapped neighbours to assess the degree of \"mess\" around\n            if (reverseNeighbourPriorityValue != neighbourPriorityValue) {\n                messFactor++;\n            }\n        }\n    }\n\n    // hide the object if there is \"mess\" around it (when there are too many colliding objects overlap each other)\n    if(messFactor > 4 || (messFactor > 0 && prevVisibilityCache.x == 1.0)) {\n        gl_Position = calculateOutputPosition(priorityValue.rg);\n        color = INVISIBLE_BY_COLLISION;\n        return;\n    }\n\n}\n"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nvarying vec4 color;\n\nvoid main() {\n    gl_FragColor = color;\n}\n"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 uv;\n\nuniform sampler2D priority;\nuniform vec2 priorityPxSize;\nuniform vec2 outputHalfPxSize;\n\nvarying vec4 color;\n\nconst vec4 EMPTY_CELL = vec4(0, 0, 0, 1);\nconst vec4 VISIBLE = vec4(0, 0, 0, 1);\nconst vec4 DISCARD_POSITION = vec4(2, 2, 2, 1);\n\nvoid main() {\n    vec2 coords = uv + priorityPxSize / 2.0;\n    vec4 priorityValue = texture2D(priority, coords);\n\n    if (priorityValue != EMPTY_CELL) {\n        gl_Position = vec4((priorityValue.rg + outputHalfPxSize) * 2.0 - 1.0, 0, 1);\n        gl_PointSize = 1.0;\n        color = VISIBLE;\n    } else {\n        gl_Position = DISCARD_POSITION;\n    }\n}\n"

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export zero */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromRows;
/* unused harmony export columns */
/* unused harmony export fromColumns */
/* unused harmony export determinant */
/* harmony export (immutable) */ __webpack_exports__["b"] = solve;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__(7);

const MATRIX_SIZE = 9;
/**
 * Creates and returns a new **uninitialized** matrix.
 */
function create() {
    return new Array(MATRIX_SIZE);
}
/**
 * Zeroes a matrix.
 *
 * @param dst The matrix.
 * @returns `dst`.
 */
function zero(dst = create()) {
    for (let i = 0; i < MATRIX_SIZE; ++i) {
        dst[i] = 0;
    }
    return dst;
}
/**
 * Copies three vectors to a matrix as rows.
 *
 * @param r0 The first row.
 * @param r1 The second row.
 * @param r2 The third row.
 * @param dst The matrix the rows will be written to.
 * @returns `dst`.
 */
function fromRows(r0, r1, r2, dst = create()) {
    dst[0] = r0.x;
    dst[1] = r1.x;
    dst[2] = r2.x;
    dst[3] = r0.y;
    dst[4] = r1.y;
    dst[5] = r2.y;
    dst[6] = r0.z;
    dst[7] = r1.z;
    dst[8] = r2.z;
    return dst;
}
/**
 * Returns array of columns of a matrix.
 *
 * @param m The matrix.
 * @param dst The array columns of the matrix will be written to.
 * @returns `dst`.
 */
function columns(m, dst = [
    __WEBPACK_IMPORTED_MODULE_0__vector3__["e" /* create */](0, 0, 0),
    __WEBPACK_IMPORTED_MODULE_0__vector3__["e" /* create */](0, 0, 0),
    __WEBPACK_IMPORTED_MODULE_0__vector3__["e" /* create */](0, 0, 0)
]) {
    for (let i = 0, j = 0; i < 3; ++i, j += 3) {
        dst[i].x = m[j];
        dst[i].y = m[j + 1];
        dst[i].z = m[j + 2];
    }
    return dst;
}
/**
 * Copies three vectors to a matrix as columns.
 *
 * @param c0 The first column.
 * @param c1 The second column.
 * @param c2 The third column.
 * @param dst The matrix the columns will be written to.
 * @returns `dst`.
 */
function fromColumns(c0, c1, c2, dst = create()) {
    dst[0] = c0.x;
    dst[1] = c0.y;
    dst[2] = c0.z;
    dst[3] = c1.x;
    dst[4] = c1.y;
    dst[5] = c1.z;
    dst[6] = c2.x;
    dst[7] = c2.y;
    dst[8] = c2.z;
    return dst;
}
/**
 * Computes determinant of a matrix.
 *
 * @param m The matrix.
 * @returns The determinant.
 */
function determinant(m) {
    return m[0] * (m[4] * m[8] - m[7] * m[5]) +
        m[3] * (m[1] * m[8] - m[7] * m[2]) +
        m[6] * (m[1] * m[5] - m[4] * m[2]);
}
const staticMatrixColumns = [
    // Not using vector3.create here due to circular dependency.
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 }
];
const staticMatrix = create();
/**
 * Solves a system of linear equations represented with a matrix and a vector,
 * i.e.:
 *
 * ```
 * m * (x, y ,z)^T = v
 * ```
 *
 * Uses Cramer's rule.
 * @see https://en.wikipedia.org/wiki/Cramer's_rule
 *
 * @param m The matrix of the system.
 * @param v The vector of the system.
 * @param dst The vector solution of the system will be written to.
 * @return `dst`.
 */
function solve(m, v, dst = __WEBPACK_IMPORTED_MODULE_0__vector3__["e" /* create */](0, 0, 0)) {
    const revDet = 1 / determinant(m);
    const [c0, c1, c2] = columns(m, staticMatrixColumns);
    dst.x = revDet * determinant(fromColumns(v, c1, c2, staticMatrix));
    dst.y = revDet * determinant(fromColumns(c0, v, c2, staticMatrix));
    dst.z = revDet * determinant(fromColumns(c0, c1, v, staticMatrix));
    return dst;
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_gputypes__ = __webpack_require__(11);



const ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = ATTRIBUTE_MAPPING;

/**
 * Writes overlap samplers data to vertex buffer, the number of vertices (samplers) is equal to "width x height".
 */
class CollisionSamplerBufferWriter extends __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__["b" /* default */] {
    constructor(width, height) {
        const cols = width * 2;
        const rows = height;
        const numberOfSamplers = cols * rows;
        super(ATTRIBUTE_MAPPING.vertexByteSize, numberOfSamplers, undefined, 0);
        // staggered grid is created: every odd col (number of cols is doubled) is shifted half cell up,
        // thus we can guarantee that everything larger then a cell in both dimensions will be sampled.
        const colStep = Object(__WEBPACK_IMPORTED_MODULE_2__util_gputypes__["a" /* floatToUint16 */])(1.0 / cols);
        const rowStep = Object(__WEBPACK_IMPORTED_MODULE_2__util_gputypes__["a" /* floatToUint16 */])(1.0 / rows);
        const rowHalfStep = rowStep / 2;
        for (let i = 0; i < cols; i++) {
            const col = i * colStep;
            let row = (i % 2 === 0) ? 0.0 : rowHalfStep;
            for (let j = 0; j < rows; j++, row += rowStep) {
                this.writeVertex(col, row);
            }
        }
        this.data = this.getBuffers()[0].vertexBuffer;
        this.numberOfSamplers = numberOfSamplers;
    }
    /**
     * @param u horizontal texture coordinate as uint16 number.
     * @param v vertical texture coordinate as uint16 number.
     */
    writeVertex(u, v) {
        this._writeHalfWords(u, v);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = CollisionSamplerBufferWriter;



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export swap */
/* unused harmony export reverse */
/* unused harmony export rotate */
/* unused harmony export copy */
/* unused harmony export shuffle */
/* harmony export (immutable) */ __webpack_exports__["a"] = zip;
/* unused harmony export compare */
/**
 * Swaps two values in an array.
 *
 * @param array The array.
 * @param i Index of a value to be swapped.
 * @param j Index of a value to be swapped.
 */
function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}
/**
 * Reverses order of elements in a range in an array.
 *
 * @param array The array.
 * @param start The start of the range.
 * @param end The end of the range.
 */
function reverse(array, start = 0, end = array.length) {
    for (let i = start, j = end - 1; i < j; ++i, --j) {
        swap(array, i, j);
    }
}
/**
 * Rotates a range of elements in an array by given amount.
 *
 * @param array The array.
 * @param amount The amount.
 * @param start The start of the range.
 * @param end The end of the range.
 */
function rotate(array, amount = 1, start = 0, end = array.length) {
    reverse(array, start, end);
    reverse(array, start, start + amount);
    reverse(array, start + amount, end);
}
/**
 * Copies a range of elements from a source array to a range in a destination
 * array.
 *
 * @param src The source array.
 * @param dst The destination array.
 * @param srcStart The start of the source range.
 * @param srcStart The start of the source range.
 * @param dstStart The start of the destination range.
 */
function copy(src, dst, srcStart = 0, srcEnd = src.length, dstStart = 0) {
    for (let i = srcStart, j = dstStart; i < srcEnd; ++i, ++j) {
        dst[j] = src[i];
    }
}
/**
 * Shuffles randomly a range of elements in an array.
 *
 * @param array The array.
 * @param start The start of the range.
 * @param end The end of the range.
 */
function shuffle(array, start = 0, end = array.length) {
    for (let i = start, j = i + 1; i < end; ++i, ++j) {
        swap(array, i, j + (Math.random() * (end - j) | 0));
    }
}
function zip(ts, us, zipper = (t, u) => [t, u]) {
    const l = Math.min(ts.length, us.length);
    const vs = new Array(l);
    for (let i = 0; i < l; ++i) {
        vs[i] = zipper(ts[i], us[i]);
    }
    return vs;
}
/**
 * Compares two arrays lexicographically. The order is specified be the comparator parameter.
 *
 * @param comparator Elements comparator with standard signature.
 * @param a The first array to compare.
 * @param b The second array to compare.
 * @returns 0 if all elements and lengths are equal,
 *      negative number if the first element is less then the second (lexicographically),
 *      positive number if the first element is greater then the second,
 *      if all the elements are equal the lengths are being compared.
 */
function compare(comparator, a, b) {
    const length = Math.min(a.length, b.length);
    for (let i = 0; i < length; i++) {
        const result = comparator(a[i], b[i]);
        if (result) {
            return result;
        }
    }
    return a.length - b.length;
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_icon_vert__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_icon_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shader_icon_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_icon_frag__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_icon_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_icon_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_image_renderer__ = __webpack_require__(23);



/**
 * Renderer of icon primitives.
 */
class IconRenderer extends __WEBPACK_IMPORTED_MODULE_2__image_image_renderer__["a" /* default */] {
    constructor(context) {
        super(context, context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_icon_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__shader_icon_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexDisplacement: 6 /* DISPLACEMENT */,
                vertexUV: 4 /* UV */
            }
        }));
    }
    _bindProgram(program, uniforms) {
        super._bindProgram(program, uniforms);
        program.setVector2Uniform('pixelSize', uniforms.pixelSize);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IconRenderer;



/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec2 vertexDisplacement;\nattribute vec2 vertexUV;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform vec2 pixelSize;\n\nvarying vec2 uv;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main() {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow),\n        0,\n        1\n    );\n    position.xyz /= position.w;\n    position.w = 1.0;\n\n    gl_Position = position + vec4(vertexDisplacement * pixelSize, 0.0, 0.0);\n\n    uv = vertexUV;\n}\n"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "#version 100\nprecision mediump float;\n\nuniform sampler2D atlas;\nuniform vec2 atlasSize;\n\nvarying vec2 uv;\n\nvoid main() {\n    gl_FragColor = texture2D(atlas, uv / atlasSize);\n}\n"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec2 vertexUV;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\n\nvarying vec2 uv;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main() {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow),\n        0,\n        1\n    );\n\n    gl_Position = position;\n\n    uv = vertexUV;\n}\n"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "#version 100\nprecision mediump float;\n\nuniform sampler2D atlas;\nuniform vec2 atlasSize;\n\nvarying vec2 uv;\n\nvoid main() {\n    gl_FragColor = texture2D(atlas, uv / atlasSize);\n\n    if (gl_FragColor.a == 0.0) {\n        discard;\n    }\n\n}\n"

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_model_vert__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_model_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_model_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_model_frag__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_model_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shader_model_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_overlay_renderer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__ = __webpack_require__(3);






const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_1__state__["b" /* default */]({
    depthTest: true
});
/**
 * Renderer of models. It renders models into a texture with depth test and then this texture into the render target.
 * It allows to show only the top facets of semi-transparent objects without exposing their inner structure.
 */
class ModelRenderer extends __WEBPACK_IMPORTED_MODULE_0__primitive_renderer__["a" /* default */] {
    constructor(context) {
        super(context, RENDER_STATE, context.createProgram(__WEBPACK_IMPORTED_MODULE_2__shader_model_vert___default.a, __WEBPACK_IMPORTED_MODULE_3__shader_model_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexHeight: 3 /* HEIGHT */,
                vertexColor: 7 /* COLOR */
            }
        }));
        this._outputSize = { width: -1, height: -1 };
        this._overlayRenderer = new __WEBPACK_IMPORTED_MODULE_4__overlay_overlay_renderer__["a" /* default */](context);
    }
    render(target, uniforms) {
        this._syncOutputBuffer(target);
        super.render(target, uniforms);
        // copy into the final target
        this._overlayRenderer.render(target, this._outputTexture);
    }
    destroy() {
        super.destroy();
        this._overlayRenderer.destroy();
        this._outputTexture.destroy();
        this._outputDepthBuffer.destroy();
        this._outputBuffer.destroy();
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _syncOutputBuffer(target) {
        // make sure the intermediate texture fits the output target
        if (this._outputSize.width !== target.getWidth() || this._outputSize.height !== target.getHeight()) {
            if (this._outputTexture || this._outputDepthBuffer || this._outputBuffer) {
                this._outputTexture.destroy();
                this._outputDepthBuffer.destroy();
                this._outputBuffer.destroy();
            }
            this._outputSize = { width: target.getWidth(), height: target.getHeight() };
            this._outputTexture = this._context.createEmpty2DTexture(this._outputSize.width, this._outputSize.height, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
            this._outputDepthBuffer = this._context.createRenderbuffer(this._outputSize.width, this._outputSize.height, 34041 /* DEPTH_STENCIL */);
            this._outputBuffer = this._context.createFramebuffer({
                color: this._outputTexture,
                depthStencil: this._outputDepthBuffer
            });
        }
    }
    /**
     * Overridden _bindRenderTarget() to bind intermediate render target to render models into and
     * later put its content into the final target.
     */
    _bindRenderTarget(_target) {
        this._context.bindRenderTarget(this._outputBuffer);
        this._context.clearCurrentTarget(16384 /* COLOR_BUFFER_BIT */ | 256 /* DEPTH_BUFFER_BIT */);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModelRenderer;



/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec3 vertexPosHigh;\nattribute vec3 vertexPosLow;\nattribute float vertexHeight;\nattribute vec4 vertexColor;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\n\nvarying vec4 globalPos;\nvarying vec4 diffuseColor;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main(void) {\n    globalPos = vec4(\n        YV_H * (vertexPosHigh.xy - lookAtHigh) + YV_L * (vertexPosLow.xy - lookAtLow),\n        vertexHeight,\n        1\n    );\n\n    gl_Position = viewProjMatrix * globalPos;\n    diffuseColor = vertexColor;\n}\n"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\n#extension GL_OES_standard_derivatives : require\n\nprecision mediump float;\n\nvarying vec4 diffuseColor;\nvarying vec4 globalPos;\n\nconst vec3 LIGHT_DIRECTION = normalize(vec3(0.5, 0.5, 1.0));\nconst float LIGHT_INTENSITY = 0.4;\nconst float AMBIENT_LIGHT_INTENSITY = 1.0 - LIGHT_INTENSITY;\n\nvoid main(void) {\n    vec3 pos = globalPos.xyz;\n\n    vec3 dxpos = normalize(dFdx(pos));\n    vec3 dypos = normalize(dFdy(pos));\n    vec3 normal = normalize(cross(dxpos, dypos));\n\n    float diffuseIntensity = AMBIENT_LIGHT_INTENSITY + LIGHT_INTENSITY * (dot(normal, LIGHT_DIRECTION) + 1.) / 2.;\n    vec3 color = diffuseColor.rgb * diffuseIntensity;\n    gl_FragColor = vec4(color, diffuseColor.a);\n}\n"

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_overlay_vert__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_overlay_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shader_overlay_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_overlay_frag__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_overlay_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_overlay_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(0);



const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_2__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_2__state__["a" /* BLEND_OVER_RENDER_STATE */]);
/**
 * Renders a texture into a render target with OVER compositing. The texture will completely overlay the target, i.e.
 * it is stretched/shrinked to fit the target width/height, so ideally they should have the same dimensions.
 */
class OverlayRenderer {
    constructor(context) {
        this._context = context;
        this._program = context.createProgram(__WEBPACK_IMPORTED_MODULE_0__shader_overlay_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__shader_overlay_frag___default.a, {
            attribMap: {
                vertexPosition: 0 /* POSITION */,
                vertexUV: 4 /* UV */
            }
        });
    }
    render(target, texture) {
        this._context.bindRenderTarget(target);
        this._context.bindRenderState(RENDER_STATE);
        this._context.bindProgram(this._program);
        this._context.bindTexture(texture);
        this._context.bindQuadVao();
        this._context.drawQuad();
    }
    destroy() {
        this._program.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OverlayRenderer;



/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "#version 100\nprecision mediump float;\n\nattribute vec2 vertexPosition;\nattribute vec2 vertexUV;\n\nvarying vec2 uv;\n\nvoid main() {\n    gl_Position = vec4(vertexPosition, 0, 1);\n    uv = vertexUV;\n}\n"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "#version 100\nprecision mediump float;\n\nuniform sampler2D texture;\n\nvarying vec2 uv;\n\nvoid main() {\n    gl_FragColor = texture2D(texture, uv);\n}\n"

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_fxaa_frag__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_fxaa_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shaders_fxaa_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_quad_vert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_quad_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__shaders_quad_vert__);





const FXAA_POSTPROCESSING_STATE = new __WEBPACK_IMPORTED_MODULE_2__state__["b" /* default */]({
    depthMask: false,
    depthTest: false
});
/**
 * Renderer of FXAA postprocessing pass.
 */
class FxaaRenderer {
    constructor(context) {
        this._context = context;
        this._program = context.createProgram(__WEBPACK_IMPORTED_MODULE_4__shaders_quad_vert___default.a, __WEBPACK_IMPORTED_MODULE_3__shaders_fxaa_frag___default.a, {
            attribMap: {
                vertexPosition: 0 /* POSITION */
            }
        });
        this._pixelSize = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
        this._fxaaQuality = __WEBPACK_IMPORTED_MODULE_1__math_vector3__["e" /* create */](0, 0, 0);
        this.setParams({});
    }
    destroy() {
        this._program.destroy();
    }
    render(target, sourceColorBuffer) {
        this._updateFrameUniformState(target);
        const context = this._context;
        context.bindRenderTarget(target);
        context.bindProgram(this._program);
        context.bindRenderState(FXAA_POSTPROCESSING_STATE);
        context.bindTextureUnit(0);
        context.bindTexture(sourceColorBuffer);
        this._program.setIntScalarUniform('texture', 0);
        this._program.setVector2Uniform('pixelSize', this._pixelSize);
        this._program.setVector3Uniform('fxaaQuality', this._fxaaQuality);
        this._program.setScalarUniform('dpr', window.devicePixelRatio);
        context.bindQuadVao();
        context.drawQuad();
    }
    /**
     * Set FXAA quality parameters.
     */
    setParams({ subpix = 0.75, edgeThreshold = 0.063, edgeThresholdMin = 0.0625 }) {
        this._fxaaQuality.x = subpix;
        this._fxaaQuality.y = edgeThreshold;
        this._fxaaQuality.z = edgeThresholdMin;
    }
    _updateFrameUniformState(target) {
        this._pixelSize.x = 1 / target.getWidth();
        this._pixelSize.y = 1 / target.getHeight();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FxaaRenderer;



/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nuniform vec2 pixelSize;\nuniform vec3 fxaaQuality;\nuniform sampler2D texture;\nuniform float dpr;\n\nconst float EPSILON = 0.0001;\n\nfloat luma(vec4 rgba) {\n    return dot(rgba.xyz, vec3(0.299, 0.587, 0.114));\n}\n\nvec4 fxaa(\n    vec2 pos,\n    sampler2D tex,\n    vec2 fxaaQualityRcpFrame,\n    // This used to be the FXAA_QUALITY_SUBPIX define.\n    // Choose the amount of sub-pixel aliasing removal.\n    // This can effect sharpness.\n    //   1.00 - upper limit (softer)\n    //   0.75 - default amount of filtering\n    //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)\n    //   0.25 - almost off\n    //   0.00 - completely off\n    float fxaaQualitySubpix,\n    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.\n    // The minimum amount of local contrast required to apply algorithm.\n    //   0.333 - too little (faster)\n    //   0.250 - low quality\n    //   0.166 - default\n    //   0.125 - high quality\n    //   0.063 - overkill (slower)\n    float fxaaQualityEdgeThreshold,\n    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.\n    // Trims the algorithm from processing darks.\n    //   0.0833 - upper limit (default, the start of visible unfiltered edges)\n    //   0.0625 - high quality (faster)\n    //   0.0312 - visible limit (slower)\n    float fxaaQualityEdgeThresholdMin\n) {\n    vec2 posM;\n    posM.x = pos.x;\n    posM.y = pos.y;\n    vec4 rgbyM = texture2D(tex, posM);\n    float lumaM = luma(rgbyM);\n\n    float lumaS = luma(texture2D(tex, posM + vec2( 0, 1) * fxaaQualityRcpFrame.xy));\n    float lumaE = luma(texture2D(tex, posM + vec2( 1, 0) * fxaaQualityRcpFrame.xy));\n    float lumaN = luma(texture2D(tex, posM + vec2( 0,-1) * fxaaQualityRcpFrame.xy));\n    float lumaW = luma(texture2D(tex, posM + vec2(-1, 0) * fxaaQualityRcpFrame.xy));\n\n    float maxSM = max(lumaS, lumaM);\n    float minSM = min(lumaS, lumaM);\n    float maxESM = max(lumaE, maxSM);\n    float minESM = min(lumaE, minSM);\n    float maxWN = max(lumaN, lumaW);\n    float minWN = min(lumaN, lumaW);\n    float rangeMax = max(maxWN, maxESM);\n    float rangeMin = min(minWN, minESM);\n    float rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;\n    float range = rangeMax - rangeMin;\n    float rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);\n    bool earlyExit = range < rangeMaxClamped;\n\n    if (earlyExit)\n        return rgbyM;\n\n    float lumaNW = luma(texture2D(tex, posM + vec2(-1,-1) * fxaaQualityRcpFrame.xy));\n    float lumaSE = luma(texture2D(tex, posM + vec2( 1, 1) * fxaaQualityRcpFrame.xy));\n    float lumaNE = luma(texture2D(tex, posM + vec2( 1,-1) * fxaaQualityRcpFrame.xy));\n    float lumaSW = luma(texture2D(tex, posM + vec2(-1, 1) * fxaaQualityRcpFrame.xy));\n\n    float lumaNS = lumaN + lumaS;\n    float lumaWE = lumaW + lumaE;\n    float subpixRcpRange = 1.0/range;\n    float subpixNSWE = lumaNS + lumaWE;\n    float edgeHorz1 = (-2.0 * lumaM) + lumaNS;\n    float edgeVert1 = (-2.0 * lumaM) + lumaWE;\n\n    float lumaNESE = lumaNE + lumaSE;\n    float lumaNWNE = lumaNW + lumaNE;\n    float edgeHorz2 = (-2.0 * lumaE) + lumaNESE;\n    float edgeVert2 = (-2.0 * lumaN) + lumaNWNE;\n\n    float lumaNWSW = lumaNW + lumaSW;\n    float lumaSWSE = lumaSW + lumaSE;\n    float edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);\n    float edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);\n    float edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;\n    float edgeVert3 = (-2.0 * lumaS) + lumaSWSE;\n    float edgeHorz = abs(edgeHorz3) + edgeHorz4;\n    float edgeVert = abs(edgeVert3) + edgeVert4;\n\n    float subpixNWSWNESE = lumaNWSW + lumaNESE;\n    float lengthSign = fxaaQualityRcpFrame.x;\n    bool horzSpan = edgeHorz >= edgeVert;\n    float subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;\n\n    if (horzSpan) {\n        lengthSign = fxaaQualityRcpFrame.y;\n    } else {\n        lumaN = lumaW;\n        lumaS = lumaE;\n    }\n    float subpixB = (subpixA * (1.0/12.0)) - lumaM;\n\n    float gradientN = lumaN - lumaM;\n    float gradientS = lumaS - lumaM;\n    float lumaNN = lumaN + lumaM;\n    float lumaSS = lumaS + lumaM;\n    bool pairN = abs(gradientN) >= abs(gradientS);\n    float gradient = max(abs(gradientN), abs(gradientS));\n    if (pairN) {\n        lengthSign = -lengthSign;\n    } else {\n        lumaNN = lumaSS;\n    }\n    float subpixC = clamp(abs(subpixB) * subpixRcpRange, 0.0, 1.0);\n\n    vec2 posB = posM;\n    vec2 offNP;\n\n    vec2 offHM;\n    if (horzSpan) {\n        offNP = vec2(fxaaQualityRcpFrame.x, 0.0);\n        offHM = vec2(0.0, lengthSign);\n    } else {\n        offNP = vec2(0.0, fxaaQualityRcpFrame.y);\n        offHM = vec2(lengthSign, 0.0);\n    }\n\n    vec2 posN = posB - offNP * 2.;\n    vec2 posP = posB + offNP * 2.;\n\n    float subpixD = ((-2.0)*subpixC) + 3.0;\n    float lumaEndN = luma(\n        mix(\n            texture2D(tex, posN),\n            texture2D(tex, posN + offHM),\n            0.5\n        )\n    );\n    float subpixE = subpixC * subpixC;\n    float lumaEndP = luma(\n        mix(\n            texture2D(tex, posP),\n            texture2D(tex, posP + offHM),\n            0.5\n        )\n    );\n\n    float gradientScaled = gradient * 0.25;\n    float lumaMM = lumaM - lumaNN * 0.5;\n    float subpixF = subpixD * subpixE;\n    bool lumaMLTZero = lumaMM < 0.0;\n\n    lumaEndN -= lumaNN * 0.5;\n    lumaEndP -= lumaNN * 0.5;\n    bool doneN = abs(lumaEndN) >= gradientScaled;\n    bool doneP = abs(lumaEndP) >= gradientScaled;\n    if (!doneN) {\n        posN -= offNP * 3.0;\n    }\n    bool doneNP = (!doneN) || (!doneP);\n    if (!doneP) {\n        posP += offNP * 3.0;\n    }\n\n    if (doneNP) {\n        if (!doneN) {\n            lumaEndN = luma(\n                mix(\n                    texture2D(tex, posN),\n                    texture2D(tex, posN + offHM),\n                    0.5\n                )\n            );\n            lumaEndN = lumaEndN - lumaNN * 0.5;\n        }\n        if (!doneP) {\n            lumaEndP = luma(\n                mix(\n                    texture2D(tex, posP.xy),\n                    texture2D(tex, posP.xy + offHM),\n                    0.5\n                )\n            );\n            lumaEndP = lumaEndP - lumaNN * 0.5;\n        }\n        doneN = abs(lumaEndN) >= gradientScaled;\n        doneP = abs(lumaEndP) >= gradientScaled;\n        if (!doneN) {\n            posN -= offNP * 12.0;\n        }\n        if (!doneP) {\n            posP += offNP * 12.0;\n        }\n    }\n    float dstN = posM.x - posN.x;\n    float dstP = posP.x - posM.x;\n    if (!horzSpan) {\n        dstN = posM.y - posN.y;\n        dstP = posP.y - posM.y;\n    }\n    bool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;\n    float spanLength = (dstP + dstN);\n    bool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;\n    float spanLengthRcp = 1.0/spanLength;\n    bool directionN = dstN < dstP;\n    float dst = min(dstN, dstP);\n    bool goodSpan = directionN ? goodSpanN : goodSpanP;\n    float subpixG = subpixF * subpixF;\n    float pixelOffset = (dst * (-spanLengthRcp)) + 0.5;\n    float subpixH = subpixG * fxaaQualitySubpix;\n    float pixelOffsetGood = goodSpan ? pixelOffset : 0.0;\n    float pixelOffsetSubpix = max(pixelOffsetGood, subpixH);\n    vec4 color;\n    float factor = pixelOffsetSubpix;\n    if (horzSpan) {\n        color = mix(\n            texture2D(tex, posM),\n            texture2D(tex, posM + vec2(0.0, lengthSign)),\n            factor\n        );\n    } else {\n        color = mix(\n            texture2D(tex, posM),\n            texture2D(tex, posM + vec2(lengthSign, 0.0)),\n            factor\n        );\n    }\n\n    return color;\n}\n\n// It is a default background pattern.\n// Colors vec3(233./255.) and vec3(250./255.) are taken with color picker tools.\nlowp vec3 pattern(in vec2 coord) {\n    vec2 uv = mod(coord, 16.) - 8.;\n\n    return mix(vec3(233./255.), vec3(250./255.), smoothstep(0.5, 1.5, length(uv)));\n}\n\nvoid main() {\n    vec2 pos = gl_FragCoord.xy * pixelSize;\n    vec4 color = fxaa(\n        pos,\n        texture,\n        pixelSize,\n        fxaaQuality[0],\n        fxaaQuality[1],\n        fxaaQuality[2]\n    );\n\n    vec3 backgroundColor = pattern(gl_FragCoord.xy / dpr);\n    // If color.a is less than one, then the color has been blended with a black background before.\n    // An original color of transparent objects is vec4(color.xyz / color.a, color.a).\n    // We have to blend an original color with background pattern.\n    // color.a can be too close to zero. Check it.\n    if (color.a > EPSILON) {\n        color.xyz /= color.a;\n    }\n    gl_FragColor = vec4(mix(backgroundColor, color.xyz, color.a), 1.0);\n}\n"

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_scalar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postprocess_renderer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_quad_vert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_quad_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__shaders_quad_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_fill_frag__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_fill_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__shaders_fill_frag__);







const SSAA_ACCUMULATE_RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_4__state__["b" /* default */]({
    blend: true,
    blendFuncSrcRgb: 1 /* ONE */,
    blendFuncSrcAlpha: 1 /* ONE */,
    blendFuncDstRgb: 771 /* ONE_MINUS_SRC_ALPHA */,
    blendFuncDstAlpha: 771 /* ONE_MINUS_SRC_ALPHA */
});
// Pattern is taken from https://msdn.microsoft.com/en-us/library/ff476218(v=vs.85).aspx
const SSAA_JITTER_VECTORS = [
    [
        [0, 0]
    ],
    [
        [4, 4], [-4, -4]
    ],
    [
        [-2, -6], [6, -2], [-6, 2], [2, 6]
    ],
    [
        [1, -3], [-1, 3], [5, 1], [-3, -5], [-5, -5], [-7, -1], [3, 7], [7, -7]
    ],
    [
        [1, 1], [-1, -3], [-3, 2], [4, -1], [-5, -2], [2, 5], [5, 3], [3, -5],
        [-2, 6], [0, -7], [-4, -6], [-6, 4], [-8, 0], [7, -4], [6, 7], [-7, -8]
    ]
];
/**
 * Renderer of SSAA.
 */
class SsaaRenderer {
    constructor(context) {
        this._context = context;
        this._accumulateProgram = context.createProgram(__WEBPACK_IMPORTED_MODULE_5__shaders_quad_vert___default.a, __WEBPACK_IMPORTED_MODULE_6__shaders_fill_frag___default.a, {
            defines: {
                YV_OPACITY: 1,
                YV_TEXTURE_FILL: 1
            },
            attribMap: {
                vertexPosition: 0 /* POSITION */,
                vertexUv: 4 /* UV */
            }
        });
        this._copyRenderer = new __WEBPACK_IMPORTED_MODULE_3__postprocess_renderer__["b" /* default */](context, __WEBPACK_IMPORTED_MODULE_3__postprocess_renderer__["a" /* PostprocessType */].COPY);
        this._width = NaN;
        this._height = NaN;
        this.qualityLevel = 2;
        this.reset();
    }
    destroy() {
        this._destroyInternalRenderTargets();
        this._accumulateProgram.destroy();
        this._copyRenderer.destroy();
    }
    reset() {
        this._step = 0;
    }
    render(contentRenderer, renderTarget, globalUniforms, type) {
        const width = renderTarget.getWidth();
        const height = renderTarget.getHeight();
        if (this._width !== width || this._height !== height) {
            if (this._areRenderTargetsInitialized()) {
                this._destroyInternalRenderTargets();
            }
            this._initInternalRenderTargets(renderTarget);
        }
        if (type == 0 /* ONE_FRAME */) {
            this.reset();
            while (!this.isComplete) {
                this._renderStep(contentRenderer, globalUniforms);
            }
        }
        else {
            this._renderStep(contentRenderer, globalUniforms);
        }
        this._copyRenderer.render(renderTarget, this._accumColorBuffer);
    }
    get isComplete() {
        return this._step >= this._steps_count;
    }
    /**
     * It is a number in range of 0 to 4, which defines quality of SSAA
     */
    set qualityLevel(level) {
        this._level = Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["a" /* clamp */])(level, 0, 4);
        this._steps_count = Math.pow(2, this._level);
        this.reset();
    }
    _renderStep(contentRenderer, globalUniforms) {
        // jitter viewProjMatrix of the globalUniforms
        const viewProjMatrix = globalUniforms.viewProjMatrix;
        const copyViewProjMatrix = __WEBPACK_IMPORTED_MODULE_1__math_matrix4__["c" /* copy */](viewProjMatrix);
        this._jitterMatrix(viewProjMatrix, this._width, this._height, viewProjMatrix);
        if (this._step === 0) {
            contentRenderer(this._accumRenderTarget, globalUniforms);
        }
        else if (this._step < this._steps_count) {
            contentRenderer(this._sampleRenderTarget, globalUniforms);
            this._accumulate();
        }
        // restore viewProjMatrix of the globalUniforms
        __WEBPACK_IMPORTED_MODULE_1__math_matrix4__["c" /* copy */](copyViewProjMatrix, viewProjMatrix);
        ++this._step;
    }
    _jitterMatrix(source, width, height, dest) {
        const jitterId = this._step % this._steps_count;
        const offset = __WEBPACK_IMPORTED_MODULE_2__math_vector3__["e" /* create */](SSAA_JITTER_VECTORS[this._level][jitterId][0] / width, SSAA_JITTER_VECTORS[this._level][jitterId][1] / height, 0);
        // offset is in [-1 / width, 1 / width] x [-1 / height, 1 / height] x {0}
        __WEBPACK_IMPORTED_MODULE_2__math_vector3__["i" /* muln */](offset, 1 / 8, offset);
        __WEBPACK_IMPORTED_MODULE_1__math_matrix4__["g" /* translate */](source, offset, dest);
        return dest;
    }
    _accumulate() {
        const context = this._context;
        const opacity = 1 / Math.min(this._step + 1, this._steps_count);
        context.bindRenderTarget(this._accumRenderTarget);
        context.bindRenderState(SSAA_ACCUMULATE_RENDER_STATE);
        context.bindProgram(this._accumulateProgram);
        context.bindTextureUnit(0);
        context.bindTexture(this._sampleColorBuffer);
        this._accumulateProgram.setIntScalarUniform('texture', 0);
        this._accumulateProgram.setScalarUniform('opacity', opacity);
        context.bindQuadVao();
        context.drawQuad();
    }
    _areRenderTargetsInitialized() {
        return !!this._accumColorBuffer;
    }
    _initInternalRenderTargets(renderTarget) {
        const context = this._context;
        const targetWidth = this._width = renderTarget.getWidth();
        const targetHeight = this._height = renderTarget.getHeight();
        const sampleColorBuffer = this._sampleColorBuffer =
            context.createEmpty2DTexture(targetWidth, targetHeight, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        const accumColorBuffer = this._accumColorBuffer =
            context.createEmpty2DTexture(targetWidth, targetHeight, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
        this._sampleRenderTarget = context.createFramebuffer({
            color: sampleColorBuffer
        });
        this._accumRenderTarget = context.createFramebuffer({
            color: accumColorBuffer
        });
    }
    _destroyInternalRenderTargets() {
        this._accumRenderTarget.destroy();
        this._sampleRenderTarget.destroy();
        this._accumColorBuffer.destroy();
        this._sampleColorBuffer.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SsaaRenderer;



/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec2 vertexDisplacement;\nattribute vec4 vertexColor;\nattribute float vertexWidth;\nattribute float vertexZIndex;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform float worldToPxFactor;\n\nvarying lowp vec4 color;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main(void) {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow) +\n                worldToPxFactor * vertexWidth * vertexDisplacement,\n        0,\n        1\n    );\n\n    position.xy /= position.w;\n    position.z = vertexZIndex;\n    position.w = 1.0;\n\n    gl_Position = position;\n\n    color = vertexColor;\n}\n"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nvarying lowp vec4 color;\n\nvoid main(void) {\n    gl_FragColor = color;\n}\n"

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_textured_polyline_vert__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_textured_polyline_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_textured_polyline_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_textured_polyline_frag__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_textured_polyline_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_textured_polyline_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_polyline_renderer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__ = __webpack_require__(3);






const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_0__state__["a" /* BLEND_OVER_RENDER_STATE */], {
    depthTest: true,
    depthMask: false,
    depthFunc: 518 /* GREATER_OR_EQUAL */
});
/**
 * Renderer of polyline primitives.
 */
class TexturedPolylineRenderer extends __WEBPACK_IMPORTED_MODULE_4__base_polyline_renderer__["a" /* default */] {
    constructor(context) {
        super(context, RENDER_STATE, context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_textured_polyline_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_textured_polyline_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexDisplacement: 6 /* DISPLACEMENT */,
                vertexUV: 4 /* UV */,
                vertexZIndex: 9 /* PRIORITY */,
                vertexWidth: 11 /* AUX */,
                vertexPattern: 12 /* AUX1 */
            }
        }));
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            const atlas = memoryBatch.firstPrimitive.atlas;
            if (atlas.isDirty) {
                atlas.syncTexture();
            }
            this._program.setIntScalarUniform('atlas', 0);
            this._program.setVector2Uniform('atlasSize', Object(__WEBPACK_IMPORTED_MODULE_3__math_vector2__["e" /* create */])(atlas.width, atlas.height));
            this._context.bindTextureUnit(0);
            this._context.bindTexture(atlas.texture);
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _canBatch(a, b) {
        return super._canBatch(a, b) && (a.atlas == b.atlas);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TexturedPolylineRenderer;



/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec2 vertexDisplacement;\nattribute vec2 vertexUV;\nattribute float vertexWidth;\nattribute vec2 vertexPattern;\nattribute float vertexZIndex;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\nuniform float worldToPxFactor;\n\nvarying vec2 uv;\nvarying float patternLength;\nvarying float length;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main(void) {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow) +\n                worldToPxFactor * vertexWidth * vertexDisplacement,\n        0,\n        1\n    );\n\n    position.xy /= position.w;\n    position.z = vertexZIndex;\n    position.w = 1.0;\n\n    gl_Position = position;\n\n    uv = vertexUV;\n    patternLength = vertexPattern[0];\n    length = vertexPattern[1];\n}\n"

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nuniform sampler2D atlas;\nuniform vec2 atlasSize;\n\nvarying vec2 uv;\nvarying float patternLength;\nvarying float length;\n\nvoid main(void) {\n    vec2 uvAdjusted = vec2(uv.x + mod(length, patternLength), uv.y);\n    gl_FragColor = texture2D(atlas, uvAdjusted / atlasSize);\n}\n"

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_textured_polygon_vert__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_textured_polygon_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shader_textured_polygon_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_textured_polygon_frag__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_textured_polygon_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shader_textured_polygon_frag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primitive_renderer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__ = __webpack_require__(3);






const RENDER_STATE = new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_0__state__["a" /* BLEND_OVER_RENDER_STATE */], {
    depthTest: true,
    depthMask: false,
    depthFunc: 518 /* GREATER_OR_EQUAL */
});
/**
 * Renderer of polyline primitives.
 */
class TexturedPolygonRenderer extends __WEBPACK_IMPORTED_MODULE_4__primitive_renderer__["a" /* default */] {
    constructor(context) {
        super(context, RENDER_STATE, context.createProgram(__WEBPACK_IMPORTED_MODULE_1__shader_textured_polygon_vert___default.a, __WEBPACK_IMPORTED_MODULE_2__shader_textured_polygon_frag___default.a, {
            attribMap: {
                vertexPosHigh: 0 /* POSITION_HIGH */,
                vertexPosLow: 1 /* POSITION_LOW */,
                vertexUV: 4 /* UV */,
                vertexImageScale: 11 /* AUX */,
                vertexZIndex: 10 /* Z_INDEX */
            }
        }));
    }
    _renderPrimitives(primitives) {
        for (const memoryBatch of this.batchPrimitives(primitives)) {
            const atlas = memoryBatch.firstPrimitive.atlas;
            if (atlas.isDirty) {
                atlas.syncTexture();
            }
            this._program.setIntScalarUniform('atlas', 0);
            this._program.setVector2Uniform('atlasSize', Object(__WEBPACK_IMPORTED_MODULE_3__math_vector2__["e" /* create */])(atlas.width, atlas.height));
            this._context.bindTextureUnit(0);
            this._context.bindTexture(atlas.texture);
            this._context.bindVao(memoryBatch.page.vao);
            this._context.drawIndexedMesh(memoryBatch.indexByteOffset, Object(__WEBPACK_IMPORTED_MODULE_5__memory_count_vertices__["a" /* countIndices */])(memoryBatch.indexByteLength, memoryBatch.page.indexType));
        }
    }
    _canBatch(a, b) {
        return super._canBatch(a, b) && (a.atlas == b.atlas);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TexturedPolygonRenderer;



/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec4 vertexUV;\nattribute float vertexImageScale;\nattribute float vertexZIndex;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\n\nvarying vec2 uvPosition;\nvarying vec2 textureSize;\nvarying vec2 uvDisplacement;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main(void) {\n    uvPosition = vertexUV.xy;\n    textureSize = vertexUV.zw;\n\n    // The same pattern image should match across multiple (usually adjacent) polygons and it should have\n    // stable position realtive to the polygon. Also pattern is repeated at both directions.\n    // To meet these requirements the world is covered (virtually) by a texture of appropriate size (repeated image)\n    // and vertex coordinates are mapped to these texture coordinates (uvDisplacement).\n    // But due to limited precision we've got to work with \"narrow\" floats (as it is done in world position calculation):\n    //   1. calculate how big texture pattern in world coordinates (scaledTextureSize)\n    //   2. find the closest to eye coordinates texture base point (the bottom left point of the pattern)\n    //   3. use vertex position and textureBasePoint vectors to find coordinates in virtual texture\n    //   4. find uv coordinates in real texture using mod operation\n    //\n    // Both textureBasePoint and position are relativelly small vectors so that precision requirements are met,\n    // and correct interpolation of repeated image is possible by using single base point in all vertices.\n\n    vec2 scaledTextureSize = textureSize * vertexImageScale; // texture size in world coordinates\n    vec2 textureBasePoint = mod(YV_H * lookAtHigh, scaledTextureSize) + mod(YV_L * lookAtLow, scaledTextureSize);\n    vec2 position = YV_H * (vertexPosHigh - lookAtHigh) + YV_L * (vertexPosLow - lookAtLow);\n\n    gl_Position = viewProjMatrix * vec4(position, 0, 1);\n    gl_Position.xy /= gl_Position.w;\n    gl_Position.z = vertexZIndex;\n    gl_Position.w = 1.0;\n\n    // convert world coordinates back to teture pixels\n    uvDisplacement = (position + textureBasePoint) / vertexImageScale;\n}\n"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nprecision mediump float;\n\nuniform sampler2D atlas;\nuniform vec2 atlasSize;\n\nvarying vec2 uvPosition;\nvarying vec2 textureSize;\nvarying vec2 uvDisplacement;\n\nvoid main(void) {\n    vec2 uvAdjusted = vec2(\n        uvPosition.x + mod(uvDisplacement.x, textureSize.x),\n        uvPosition.y + mod(uvDisplacement.y, textureSize.y)\n    );\n\n    gl_FragColor = texture2D(atlas, uvAdjusted / atlasSize);\n}\n"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nattribute vec2 vertexPosHigh;\nattribute vec2 vertexPosLow;\nattribute vec4 vertexColor;\nattribute float vertexZIndex;\n\nuniform vec2 lookAtHigh;\nuniform vec2 lookAtLow;\nuniform mat4 viewProjMatrix;\n\nvarying vec4 color;\n\nconst float YV_H = 1.999969482421875;\nconst float YV_L = 0.000030517112463712692;\n\nvoid main(void) {\n    vec4 position = viewProjMatrix * vec4(\n        YV_H * (vertexPosHigh - lookAtHigh) +\n            YV_L * (vertexPosLow - lookAtLow),\n        0,\n        1\n    );\n\n    position.xy /= position.w;\n    position.z = vertexZIndex;\n    position.w = 1.0;\n\n    gl_Position = position;\n\n    color = vertexColor;\n}\n"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "#version 100\n\nvarying lowp vec4 color;\n\nvoid main(void) {\n    gl_FragColor = color;\n}\n"

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polygon_renderer__ = __webpack_require__(28);


/**
 * Renderer of transparent polygon
 * primitives.
 */
class TransparentPolygonRenderer extends __WEBPACK_IMPORTED_MODULE_1__polygon_renderer__["a" /* default */] {
    constructor(context) {
        super(context, new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_1__polygon_renderer__["a" /* default */].DEFAULT_RENDER_STATE_PARAMS, { depthMask: false }, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* BLEND_OVER_RENDER_STATE */]));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TransparentPolygonRenderer;



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector2__ = __webpack_require__(1);


/**
 * Container of global uniforms.
 */
class GlobalFrameUniforms {
    constructor() {
        this.viewProjMatrix = __WEBPACK_IMPORTED_MODULE_0__math_matrix4__["d" /* create */]();
        this.cameraPositions = [];
        this.pixelSize = __WEBPACK_IMPORTED_MODULE_1__math_vector2__["e" /* create */](0, 0);
        this.worldToPxFactor = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GlobalFrameUniforms;



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computeSquaresCoveredByConvexPolygon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector2__ = __webpack_require__(1);


/**
 * Container of indexed min/max values with a single update method.
 */
class ExtremumStorage {
    constructor(length) {
        this._mins = new Array(length);
        this._maxs = new Array(length);
        this._mins.fill(Number.POSITIVE_INFINITY);
        this._maxs.fill(Number.NEGATIVE_INFINITY);
    }
    updateValue(index, value) {
        this._mins[index] = Math.min(this._mins[index], value);
        this._maxs[index] = Math.max(this._maxs[index], value);
    }
    *values() {
        const item = { min: 0, max: 0, index: -1 };
        for (let i = 0; i < this._mins.length; i++) {
            item.min = this._mins[i];
            item.max = this._maxs[i];
            item.index = i;
            yield item;
        }
    }
}
/**
 * Squares that are ony touched by a line (with no significant crossing an edge) should not be considered "covered".
 * It happens when a point matches the max coordinate (integer) and this case is handled here.
 */
function floorToCellCoordinate(value, maxValue) {
    return Number.isInteger(value) && maxValue == value ? value - 1 : Math.floor(value);
}
/**
 * Calculates squares covered (at least partially) by a convex polygon.
 *
 * @param points Convex polygon point coordinates (on the grid).
 * @returns List of unit square coordinates.
 */
function computeSquaresCoveredByConvexPolygon(points) {
    const result = [];
    const bbox = Object(__WEBPACK_IMPORTED_MODULE_0__math_vector2__["c" /* computeBBoxForPoints */])(points);
    const minX = Math.floor(bbox.minX);
    const xLength = Math.ceil(bbox.maxX) - minX;
    const extremums = new ExtremumStorage(xLength);
    for (let i = points.length - 1, j = 0; j < points.length; i = j++) {
        let p1 = points[i];
        let p2 = points[j];
        // go from left to right always to not handle the opposite case
        if (p1.x > p2.x) {
            const tmp = p1;
            p1 = p2;
            p2 = tmp;
        }
        // calculate from/to interval so that only "internal" integer x-es are captured
        const fromX = Math.floor(p1.x + 1);
        const toX = Math.ceil(p2.x - 1);
        const slope = (p1.y - p2.y) / (p1.x - p2.x);
        // handle terminal points separately from the "internal" ones
        extremums.updateValue(floorToCellCoordinate(p1.x, bbox.maxX) - minX, floorToCellCoordinate(p1.y, bbox.maxY));
        extremums.updateValue(floorToCellCoordinate(p2.x, bbox.maxX) - minX, floorToCellCoordinate(p2.y, bbox.maxY));
        for (let x = fromX; x <= toX; x++) {
            const yIntercept = (isFinite(slope) ? slope * (x - p1.x) : 0) + p1.y;
            const nextX = x - minX;
            const prevX = nextX - 1;
            const y = Math.floor(yIntercept);
            // check if we hit exactly the intersection of two integer coordinates
            if (Number.isInteger(yIntercept)) {
                if (yIntercept == bbox.maxY) {
                    extremums.updateValue(prevX, y - 1);
                    extremums.updateValue(nextX, y - 1);
                }
                else if (slope > 0) {
                    // two diagonal squares intersected by a line with positive slope
                    extremums.updateValue(prevX, y - 1);
                    extremums.updateValue(nextX, y);
                }
                else if (slope < 0) {
                    // two diagonal squares intersected by a line with negative slope
                    extremums.updateValue(prevX, y);
                    extremums.updateValue(nextX, y - 1);
                }
            }
            else {
                extremums.updateValue(prevX, y);
                extremums.updateValue(nextX, y);
            }
        }
    }
    for (const { min, max, index } of extremums.values()) {
        const x = minX + index;
        for (let y = min; y <= max; y++) {
            result.push(__WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](x, y));
        }
    }
    return result;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyline_renderer__ = __webpack_require__(26);


/**
 * Renderer of transparent polyline primitives.
 */
class TransparentPolylineRenderer extends __WEBPACK_IMPORTED_MODULE_1__polyline_renderer__["a" /* default */] {
    constructor(context) {
        super(context, new __WEBPACK_IMPORTED_MODULE_0__state__["b" /* default */](__WEBPACK_IMPORTED_MODULE_1__polyline_renderer__["a" /* default */].DEFAULT_RENDER_STATE_PARAMS, { depthMask: false }, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* BLEND_OVER_RENDER_STATE */]));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TransparentPolylineRenderer;



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_iterable__ = __webpack_require__(13);

/**
 * Some types of primitives should be prepared before being passed to renderer, it could be sorting or filtering,
 * this storage provides functionality similar to Set but also allows to get prepared primitives more efficiently.
 */
class PrimitiveStorage {
    constructor() {
        this._primitiveSet = new Set();
        this._isDirty = false;
        this._primitives = [];
    }
    get primitives() {
        if (this._isDirty) {
            this._primitives.splice(0, this._primitives.length, ...this._filterPrimitives(this._primitiveSet));
            this._isDirty = false;
        }
        return this._primitives;
    }
    add(primitive) {
        this._primitiveSet.add(primitive);
        this._isDirty = true;
    }
    delete(primitive) {
        this._primitiveSet.delete(primitive);
        this._isDirty = true;
    }
    clear() {
        this._primitiveSet.clear();
        this._isDirty = true;
    }
    /**
     * Does no filtering by default, just returns primitives as is.
     */
    _filterPrimitives(primitives) {
        return primitives;
    }
}
/**
 * Primitives which visibility depends on current zoom. Its a temporary solution that should be replaced
 * by proper zoom slice management.
 */
class TmpZoomDependantPrimitiveStorage extends PrimitiveStorage {
    constructor() {
        super();
        this._zoom = -1;
    }
    set zoom(zoom) {
        if (this._zoom !== zoom) {
            this._isDirty = true;
            this._zoom = zoom;
        }
    }
    _filterPrimitives(primitives) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__util_iterable__["b" /* filterIterable */])(primitives, ({ minZoom }) => this._zoom >= minZoom);
    }
}
class Scene {
    constructor() {
        this._opaquePolygons = new PrimitiveStorage();
        this._transparentPolygons = new PrimitiveStorage();
        this._texturedPolygons = new PrimitiveStorage();
        this._opaquePolylines = new PrimitiveStorage();
        this._transparentPolylines = new PrimitiveStorage();
        this._texturedPolylines = new PrimitiveStorage();
        this._pointLabels = new TmpZoomDependantPrimitiveStorage();
        this._curvedLabels = new TmpZoomDependantPrimitiveStorage();
        this._icons = new TmpZoomDependantPrimitiveStorage();
        this._models = new PrimitiveStorage();
        this._rasterLayer = new PrimitiveStorage();
    }
    addPolygon(polygon) {
        if (polygon.isOpaque) {
            this._opaquePolygons.add(polygon);
        }
        else {
            this._transparentPolygons.add(polygon);
        }
    }
    removePolygon(polygon) {
        if (polygon.isOpaque) {
            this._opaquePolygons.delete(polygon);
        }
        else {
            this._transparentPolygons.delete(polygon);
        }
    }
    addTexturedPolygon(polygon) {
        this._texturedPolygons.add(polygon);
    }
    removeTexturedPolygon(ngon) {
        this._texturedPolygons.delete(ngon);
    }
    addPolyline(polyline) {
        if (polyline.isOpaque) {
            this._opaquePolylines.add(polyline);
        }
        else {
            this._transparentPolylines.add(polyline);
        }
    }
    removePolyline(polyline) {
        if (polyline.isOpaque) {
            this._opaquePolylines.delete(polyline);
        }
        else {
            this._transparentPolylines.delete(polyline);
        }
    }
    addTexturedPolyline(polyline) {
        this._texturedPolylines.add(polyline);
    }
    removeTexturedPolyline(polyline) {
        this._texturedPolylines.delete(polyline);
    }
    addPointLabel(label) {
        this._pointLabels.add(label);
    }
    removePointLabel(label) {
        this._pointLabels.delete(label);
    }
    addCurvedLabel(label) {
        this._curvedLabels.add(label);
    }
    removeCurvedLabel(label) {
        this._curvedLabels.delete(label);
    }
    addIcon(icon) {
        this._icons.add(icon);
    }
    removeIcon(icon) {
        this._icons.delete(icon);
    }
    addModel(model) {
        this._models.add(model);
    }
    removeModel(model) {
        this._models.delete(model);
    }
    addToRasterLayer(image) {
        this._rasterLayer.add(image);
    }
    removeFromRasterLayer(image) {
        this._rasterLayer.delete(image);
    }
    getVisibleOpaquePolygons() {
        return this._opaquePolygons.primitives;
    }
    getVisibleTransparentPolygons() {
        return this._transparentPolygons.primitives;
    }
    getVisibleTexturedPolygons() {
        return this._texturedPolygons.primitives;
    }
    getVisibleOpaquePolylines() {
        return this._opaquePolylines.primitives;
    }
    getVisibleTransparentPolylines() {
        return this._transparentPolylines.primitives;
    }
    getVisibleTexturedPolylines() {
        return this._texturedPolylines.primitives;
    }
    getVisiblePointLabels(camera) {
        this._pointLabels.zoom = camera.zoom;
        return this._pointLabels.primitives;
    }
    getVisibleCurvedLabels(camera) {
        this._curvedLabels.zoom = camera.zoom;
        return this._curvedLabels.primitives;
    }
    getVisibleIcons(camera) {
        this._icons.zoom = camera.zoom;
        return this._icons.primitives;
    }
    getVisibleModels() {
        return this._models.primitives;
    }
    getVisibleRasterLayer() {
        return this._rasterLayer.primitives;
    }
    clear() {
        this._opaquePolygons.clear();
        this._texturedPolygons.clear();
        this._opaquePolylines.clear();
        this._transparentPolylines.clear();
        this._texturedPolylines.clear();
        this._pointLabels.clear();
        this._curvedLabels.clear();
        this._icons.clear();
        this._rasterLayer.clear();
        this._models.clear();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This class encapsulates logic of engine's scene rendering, synchronizing rendering requests from multiple sources.
 * Synchronization is important because of performance constraints: there should be only one GPU rendering in a frame
 * no matter how many animations or individual update requests are there.
 * It works via requestingAnimationFrame() calls chain, updates animators in each frame and switches itself off
 * if there is nothing to update.
 */
class EngineRenderLoop {
    constructor(renderer, scene, camera) {
        this._renderer = renderer;
        this._scene = scene;
        this._camera = camera;
        this._animators = new Set();
        this._renderFrame = (time) => {
            this._stop();
            this._renderFrameImplementation(time);
        };
        this._animatorStateUpdateListener = this._onAnimatorStateUpdate.bind(this);
        this._running = false;
        this._updateInitiator = 0 /* NONE */;
    }
    /**
     * Adds animator (that is being started right away) to the loop. If the rendering loop is not active it starts up.
     * @param animator
     */
    addAnimator(animator) {
        this._animators.add(animator);
        animator.onStateChange.addListener(this._animatorStateUpdateListener);
        if (animator.getState() === 1 /* ACTIVE */) {
            this._run();
        }
    }
    removeAnimator(animator) {
        animator.onStateChange.removeListener(this._animatorStateUpdateListener);
        this._animators.delete(animator);
    }
    start() {
        this._updateInitiator = 2 /* USER */;
        this._running = true;
        this._run();
    }
    stop() {
        this._running = false;
        if (!this._renderer.isComplete) {
            this._updateInitiator = 3 /* RENDERER */;
            this._run();
        }
        else {
            this._updateInitiator = 0 /* NONE */;
            this._stop();
        }
    }
    /**
     * Forces the scene to be rendered. It is not guarantied that the scene is rendered immediately, it can happen in
     * the next frame, that is due to potential performance impact: to prevent multiple rendering in a single frame.
     */
    update(type = 1 /* CONTENT */) {
        switch (type) {
            case 0 /* CAMERA */:
                this._updateInitiator = 2 /* USER */;
                break;
            case 1 /* CONTENT */:
                if (this._updateInitiator === 3 /* RENDERER */) {
                    this._updateInitiator = 2 /* USER */;
                }
                else if (this._updateInitiator !== 2 /* USER */) {
                    this._updateInitiator = 1 /* CONTENT */;
                }
                break;
        }
        this._run();
    }
    /**
     * Stops all the rendering activities.
     */
    destroy() {
        this._updateInitiator = 0 /* NONE */;
        this._stop();
        this._animators.clear();
    }
    /**
     * RAF's callback, where most of the logic is concentrated: updating animators,
     * rendering scene, scheduling the next frame, etc.
     *
     * @param time
     */
    _renderFrameImplementation(time) {
        let isAnyAnimatorActive = false;
        for (const animator of this._animators) {
            if (animator.getState() === 1 /* ACTIVE */) {
                animator.update(time);
                // check is it still active after update
                isAnyAnimatorActive = isAnyAnimatorActive || (animator.getState() === 1 /* ACTIVE */);
            }
        }
        this._renderer.render(this._scene, this._camera, this._updateInitiator);
        if (isAnyAnimatorActive || this._running) {
            this._updateInitiator = 2 /* USER */;
            this._run();
        }
        else if (!this._renderer.isComplete) {
            this._updateInitiator = 3 /* RENDERER */;
            this._run();
        }
        else {
            this._updateInitiator = 0 /* NONE */;
            this._stop();
        }
    }
    /**
     * Starts the loop if it is not active by scheduling the next frame.
     */
    _run() {
        if (!this._scheduledFrameHandle) {
            this._scheduledFrameHandle = requestAnimationFrame(this._renderFrame);
        }
    }
    /**
     * Stops the loop. It can be started again by adding an animator.
     */
    _stop() {
        if (this._scheduledFrameHandle) {
            cancelAnimationFrame(this._scheduledFrameHandle);
        }
        this._scheduledFrameHandle = 0;
    }
    _onAnimatorStateUpdate(animatorStateUpdate) {
        const state = animatorStateUpdate.state;
        if (state === 1 /* ACTIVE */) {
            this._run();
        }
        else if (state === 4 /* FINISHED */ || state === 3 /* CANCELED */) {
            this.removeAnimator(animatorStateUpdate.animator);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EngineRenderLoop;



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__font_df_glyph_atlas__ = __webpack_require__(102);

/**
 * Atlas that manages allocation in GL texture.
 */
class RenderableDfGlyphAtlas extends __WEBPACK_IMPORTED_MODULE_0__font_df_glyph_atlas__["a" /* default */] {
    constructor(context) {
        super(0, 0, new Uint8Array(0), new Map());
        this._context = context;
        this.texture = this._createTexture(0, 0);
    }
    destroy() {
        this.texture.destroy();
    }
    /**
     * Updates the whole content of the glyph bitmap atlas, texture also get updated.
     *
     * @param width new bitmap width
     * @param height new bitmap height
     * @param data, length should be strictly equal to width * height
     */
    updateContent(width, height, data, glyphLocations) {
        this.width = width;
        this.height = height;
        this.data = data;
        this._glyphLocations = glyphLocations;
        const texture = this.texture;
        if (!texture || texture.getWidth() !== width || texture.getHeight() !== height) {
            if (this.texture) {
                this.texture.destroy();
            }
            this.texture = this._createTexture(width, height);
        }
        this._context.bindTexture(this.texture);
        this.texture.setData(data);
    }
    _createTexture(width, height) {
        return this._context.createEmpty2DTexture(width, height, 6406 /* ALPHA */, 5121 /* UNSIGNED_BYTE */, {
            wrapS: 33071 /* CLAMP_TO_EDGE */,
            wrapT: 33071 /* CLAMP_TO_EDGE */,
            magnificationFilter: 9729 /* LINEAR */,
            minificationFilter: 9729 /* LINEAR */
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableDfGlyphAtlas;



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const UNKNOWN_GLYPH_LOCATION = {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
};
/**
 * Abstract glyph atlas interface.
 */
class DfGlyphAtlas {
    constructor(width, height, data, glyphLocations) {
        this.width = width;
        this.height = height;
        this.data = data;
        this._glyphLocations = glyphLocations;
    }
    /**
     * @return Glyph location or fake location pointing to the origin (0, 0).
     */
    getGlyphLocation(fontId, glyphId) {
        const glyphLocation = this._glyphLocations.get(fontId + glyphId);
        if (glyphLocation) {
            return glyphLocation;
        }
        else {
            console.warn('Wow-wow-wow, something went wrong, you should not request nonexistent glyph locations');
            return UNKNOWN_GLYPH_LOCATION;
        }
    }
    /**
     * @return All glyph locations as [glyph id, glyph location] array. Glyph id is font id concatenated with glyph id.
     */
    getAllGlyphLocations() {
        return [...this._glyphLocations.entries()];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DfGlyphAtlas;



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__font_registry__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__df_font__ = __webpack_require__(29);


/**
 * Registry that stores distance field fonts.
 */
class DfFontRegistry extends __WEBPACK_IMPORTED_MODULE_0__font_registry__["a" /* default */] {
    constructor() {
        super(new __WEBPACK_IMPORTED_MODULE_1__df_font__["a" /* default */]('UNKNOWN_DF_FONT', 14, 0));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DfFontRegistry;



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A central storage of all available fonts.
 */
class FontRegistry {
    /**
     * @param unknownFontInstance An instance of specific font type to be served as a stub when nonexistent font
     *     is requested. Requesting nonexistent fonts normally should not happen.
     *     The stub just allows to avoid tedious null checks in registry clients.
     */
    constructor(unknownFontInstance) {
        this._fonts = new Map();
        this._unknownFontInstance = unknownFontInstance;
    }
    /**
     * @return If a font with specified id is in the registry.
     */
    contains(fontId) {
        return this._fonts.has(fontId);
    }
    /**
     * @return Font with specified id or unknown font instance if it is not found.
     */
    get(fontId) {
        const font = this._fonts.get(fontId);
        if (font) {
            return font;
        }
        else {
            console.warn('Wow-wow-wow, something went wrong, you should not request nonexistent fonts');
            return this._unknownFontInstance;
        }
    }
    /**
     * @return All stored fonts.
     */
    getAll() {
        return [...this._fonts.values()];
    }
    /**
     * Adds new for to the registry.
     */
    add(font) {
        this._fonts.set(font.id, font);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FontRegistry;



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Font is just a collection of glyph descriptions.
 */
class Font {
    /**
     * @param id Font id.
     * @param xheight The height of the "x" char in abstract points, in fact is used a the font size.
     * @param unknownGlyphInstance An instance of glyph to be served as a stub when nonexistent glyph
     *     is requested. Requesting nonexistent glyphs normally should not happen.
     *     The stub just allows to avoid tedious null checks in font clients.
     */
    constructor(id, xheight, unknownGlyphInstance) {
        this.id = id;
        this.xheight = xheight;
        this._unknownGlyphInstance = unknownGlyphInstance;
        this._glyphs = new Map();
    }
    /**
     * @return Glyph with specified id or unknown glyph instance.
     */
    getGlyph(glyphId) {
        const glyph = this._glyphs.get(glyphId);
        if (glyph) {
            return glyph;
        }
        else {
            console.warn('Wow-wow-wow, something went wrong, you should not request nonexistent glyphs');
            return this._unknownGlyphInstance;
        }
    }
    /**
     * @returns All stored glyphs.
     */
    getAllGlyphs() {
        return [...this._glyphs.values()];
    }
    /**
     * Adds glyph description.
     */
    addGlyph(glyph) {
        this._glyphs.set(glyph.id, glyph);
    }
    /**
     * Adds glyph descriptions from the iterable.
     */
    addAllGlyphs(glyphs) {
        for (const glyph of glyphs) {
            this.addGlyph(glyph);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Font;



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__billboard_image_atlas__ = __webpack_require__(107);

/**
 * Atlas that manages allocation in GL texture.
 */
class RenderableImageAtlas extends __WEBPACK_IMPORTED_MODULE_0__billboard_image_atlas__["a" /* default */] {
    constructor(context) {
        super();
        this._context = context;
        this.texture = this._createTexture(this.width, this.height);
        this.isDirty = false;
    }
    /**
     * Updates GL texture with changed data. Should be called after each image added to take effect in shaders.
     */
    syncTexture() {
        this._context.bindTexture(this.texture);
        this.texture.setDataFromDomElement(this.canvas);
        this.isDirty = false;
    }
    destroy() {
        this.texture.destroy();
    }
    _expand(newWidth, newHeight) {
        super._expand(newWidth, newHeight);
        this.texture.destroy();
        this.texture = this._createTexture(this.width, this.height);
        this.isDirty = true;
    }
    _putImageBitmap(image, location) {
        super._putImageBitmap(image, location);
        this.isDirty = true;
    }
    _createTexture(width, height) {
        return this._context.createEmpty2DTexture(width, height, 6408 /* RGBA */, 5121 /* UNSIGNED_BYTE */);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableImageAtlas;



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_allocator_2d__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_event_emitter__ = __webpack_require__(4);


const INIT_ATLAS_WIDTH = 256;
const INIT_ATLAS_HEIGHT = 256;
const MAX_ATLAS_WIDTH = 2048;
const MAX_ATLAS_HEIGHT = 2048;
const EXPAND_FACTOR = 2;
/**
 * Manages allocation of images. It resizes itself (up to a fixed limit) when there is no region
 * of enough size for the next image.
 */
class ImageAtlas {
    constructor(initAtlasWidth = INIT_ATLAS_WIDTH, initAtlasHeight = INIT_ATLAS_HEIGHT) {
        this.onContentUpdate = new __WEBPACK_IMPORTED_MODULE_1__util_event_emitter__["b" /* VoidEventEmitter */]();
        this.canvas = document.createElement('canvas');
        this.canvas.width = initAtlasWidth;
        this.canvas.height = initAtlasHeight;
        this._canvasContext = this.canvas.getContext('2d');
        this._allocator = new __WEBPACK_IMPORTED_MODULE_0__util_allocator_2d__["a" /* ShelfAllocator2D */](this.width, this.height);
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.width;
    }
    /**
     * Allocates image bitmap.
     */
    allocateImage(descriptor, image) {
        const location = this._allocate(descriptor);
        if (location) {
            this._putImageBitmap(image, location);
        }
        return location;
    }
    /**
     * Deallocates image from the atlas.
     */
    removeImage(image) {
        this._allocator.deallocate(image);
    }
    _allocate(descriptor) {
        let location = this._allocator.allocate(descriptor);
        // incremental expand can be inefficient if two or more iterations are needed to allocate an image,
        // but it is expected to be a rare (if any) case, rework if it turns out to be wrong
        while (!location) {
            const expandedWidth = this.width * EXPAND_FACTOR;
            const expandedHeight = this.height * EXPAND_FACTOR;
            if (expandedWidth <= MAX_ATLAS_WIDTH && expandedHeight <= MAX_ATLAS_HEIGHT) {
                this._expand(expandedWidth, expandedHeight);
                location = this._allocator.allocate(descriptor);
            }
            else {
                break;
            }
        }
        return location;
    }
    _putImageBitmap(image, location) {
        this._canvasContext.clearRect(location.minX, location.minY, location.maxX - location.minX, location.maxY - location.minY);
        this._canvasContext.drawImage(image, location.minX, location.minY, location.maxX - location.minX, location.maxY - location.minY);
        this.onContentUpdate.fire();
    }
    _expand(newWidth, newHeight) {
        this._allocator.resize(newWidth, newHeight);
        // setting new width/height to canvas will clear it,
        // so current data is saved to be restored immediately after resizing
        const data = this._canvasContext.getImageData(0, 0, this.width, this.height);
        this.canvas.width = newWidth;
        this.canvas.height = newHeight;
        this._canvasContext.putImageData(data, 0, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageAtlas;



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__allocator__ = __webpack_require__(18);

/**
 * A rectangular region with fixed height. Utility class for shelf allocation defined below.
 */
class Shelf {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this._allocator = new __WEBPACK_IMPORTED_MODULE_0__allocator__["b" /* FreeListAllocator */](this.width);
    }
    allocate(width) {
        return this._allocator.allocate(width);
    }
    deallocate(offset) {
        this._allocator.deallocate(offset);
    }
    isAllocated(offset) {
        return this._allocator.isAllocated(offset);
    }
    canAllocate(width) {
        return this._allocator.maxAllocableSize >= width;
    }
    resize(width) {
        this._allocator.extend(width);
        this.width = width;
    }
}
/**
 * Allocates rectangles in "shelves" (height fixed regions). They are created of necessity when the next object doesnt
 * fit any existing shelf. To optimize space usage it tries to find the best shelf for allocation (min height diff).
 * A shelf when allocated is never deallocated back and exists during all the allocator lifetime.
 */
class ShelfAllocator2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this._shelves = new Map();
        this._shelfAllocator = new __WEBPACK_IMPORTED_MODULE_0__allocator__["a" /* ArenaAllocator */](height); // no shelf deallocation, that is why ArenaAllocator is fine
    }
    allocate(object) {
        let bestShelf;
        let bestShelfOffset = -1;
        let bestShelfRatio = -1;
        for (const [offset, shelf] of this._shelves.entries()) {
            const shelfRatio = object.height / shelf.height;
            if (shelfRatio === 1 && shelf.canAllocate(object.width)) {
                bestShelf = shelf;
                bestShelfOffset = offset;
                break;
            }
            else if (shelfRatio < 1 && shelfRatio > bestShelfRatio && shelf.canAllocate(object.width)) {
                bestShelf = shelf;
                bestShelfOffset = offset;
                bestShelfRatio = shelfRatio;
            }
        }
        if (!bestShelf && this._shelfAllocator.maxAllocableSize >= object.height && this.width >= object.width) {
            const offset = this._shelfAllocator.allocate(object.height);
            bestShelf = new Shelf(this.width, object.height);
            bestShelfOffset = offset;
            this._shelves.set(offset, bestShelf);
        }
        if (bestShelf) {
            const left = bestShelf.allocate(object.width);
            const top = bestShelfOffset;
            const location = {
                minX: left,
                maxX: left + object.width,
                minY: top,
                maxY: top + object.height
            };
            return location;
        }
        else {
            return null;
        }
    }
    deallocate(objectLocation) {
        const shelf = this._shelves.get(objectLocation.minY);
        if (shelf) {
            shelf.deallocate(objectLocation.minX);
        }
    }
    isAllocated(objectLocation) {
        const shelf = this._shelves.get(objectLocation.minY);
        return !!shelf && shelf.isAllocated(objectLocation.minX);
    }
    resize(width, height) {
        this._shelfAllocator.extend(height);
        for (const shelf of this._shelves.values()) {
            shelf.resize(width);
        }
        this.width = width;
        this.height = height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShelfAllocator2D;



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_scalar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_rad_deg__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_options__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_vector3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_event_emitter__ = __webpack_require__(4);








// TODO(dmikis) We want to constraint coordinates so visible region doesn't extend
//      out of world boundaries. However, in current implementation it doesn't
//      work properly for aspect ratios >1 on zoom 0 since visible region is
//      larger that the world itself (so there's no way to squeeze it in). For
//      the current case (i.e. cycled in horizontal direction) it is not a problem.
const MAX_TILT = Object(__WEBPACK_IMPORTED_MODULE_1__util_rad_deg__["a" /* deg2rad */])(40);
/**
 * If a camera has zoom less than of equal to `NO_TILT_MAX_ZOOM`, tilt won't be
 * allowed.
 */
const NO_TILT_MAX_ZOOM = 1;
/**
 * If a camera has zoom greater than of equal to `FULL_TILT_MIN_ZOOM`, tilt will
 * be allowed up to `MAX_TILT`.
 */
const FULL_TILT_MIN_ZOOM = NO_TILT_MAX_ZOOM + 1;
const FRUSTUM_DIRECTIONS = [
    // tslint:disable
    __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](-1, 1, -1),
    __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](1, 1, -1),
    __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](1, -1, -1),
    __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](-1, -1, -1)
    // tslint:enable
];
/**
 * How big the world sould be on a screen if zoom is 0, in device independent pixels
 */
const ZOOM_0_WORLD_CSS_PIXEL_SIZE = 256;
const DEFAULT_OPTIONS = {
    wrapModeX: 1 /* CLAMP_TO_EDGE */,
    wrapModeY: 1 /* CLAMP_TO_EDGE */,
    minZoom: 0,
    maxZoom: 24,
    fov: Object(__WEBPACK_IMPORTED_MODULE_1__util_rad_deg__["a" /* deg2rad */])(30)
};
/**
 * Restricts a new value for a center's coordinate according to given wrap mode.
 *
 * @param wrapMode The wrap mode.
 * @param newCoordinate The new value.
 * @param oldCoordinate Current value of the coordinate.
 * @param bboxMin Minimum corresponding coordinate of bounding box of the
 *      visible quadrilateral.
 * @param bboxMax Maximum corresponding coordinate of bounding box of the
 *      visible quadrilateral.
 * @returns Restricted value for the coordinate.
 */
function restrictCoordinate(wrapMode, newCoordinate) {
    switch (wrapMode) {
        case 0 /* NONE */:
            return newCoordinate;
        case 1 /* CLAMP_TO_EDGE */:
            return Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["a" /* clamp */])(newCoordinate, -1, 1);
        case 2 /* REPEAT */:
            return Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["b" /* cycleRestrict */])(newCoordinate, -1, 1);
    }
}
/**
 * Camera represents user's point of view in the world space, as a real camera it has restricted field of view,
 * it can move and rotate (with or without animation).
 */
class Camera {
    /**
     * Creates a new camera.
     *
     * @param options Options.
     */
    constructor(options) {
        this.options = Object(__WEBPACK_IMPORTED_MODULE_2__util_options__["a" /* default */])(DEFAULT_OPTIONS, options);
        this.center = new Camera.Center(this);
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_6__util_event_emitter__["b" /* VoidEventEmitter */]();
        this.screenSize = new Camera.ScreenSize(this);
        this._distanceToCenter = 1;
        this._zoom = this.options.minZoom;
        this._tilt = this._azimuth = 0;
        this._dirtyBits = -1 /* ALL */;
        this._viewProjMatrix = __WEBPACK_IMPORTED_MODULE_3__math_matrix4__["c" /* copy */](__WEBPACK_IMPORTED_MODULE_3__math_matrix4__["a" /* IDENTITY */]);
        this._visibleQuadrilateral = [
            __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0),
            __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0),
            __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0),
            __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0)
        ];
        this._visibleQuadrilateralBBox =
            __WEBPACK_IMPORTED_MODULE_4__math_vector2__["c" /* computeBBoxForPoints */](this._visibleQuadrilateral);
    }
    get aspectRatio() {
        const { width, height } = this.screenSize;
        return width / height;
    }
    get zoom() {
        return this._zoom;
    }
    /**
     * Sets new zoom to the camera with respect to provided limits in the options.
     */
    set zoom(newZoom) {
        newZoom = Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["a" /* clamp */])(newZoom, this.options.minZoom, this.options.maxZoom);
        if (newZoom !== this._zoom) {
            this._zoom = newZoom;
            this._computeDistanceToCenter();
            // Constraints on tilt may have changed, we need to recompute it.
            this._tilt = this._constrainTilt(this._tilt);
            this._setDirtyBits(1 /* VIEW_PROJ_MATRIX */ | 2 /* VISIBLE_QUADRILATERAL */);
        }
    }
    get tilt() {
        return this._tilt;
    }
    set tilt(newTilt) {
        newTilt = this._constrainTilt(newTilt);
        if (this._tilt !== newTilt) {
            this._tilt = newTilt;
            this._setDirtyBits(1 /* VIEW_PROJ_MATRIX */ | 2 /* VISIBLE_QUADRILATERAL */);
        }
    }
    get azimuth() {
        return this._azimuth;
    }
    set azimuth(newAzimuth) {
        newAzimuth = Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["b" /* cycleRestrict */])(newAzimuth, 0, 2 * Math.PI);
        if (this._azimuth !== newAzimuth) {
            this._azimuth = newAzimuth;
            this._setDirtyBits(1 /* VIEW_PROJ_MATRIX */ | 2 /* VISIBLE_QUADRILATERAL */);
        }
    }
    /**
     * Invalidate all internally cached values (e.g. view matrix).
     */
    setDirty() {
        this._setDirtyBits(-1 /* ALL */);
    }
    /**
     * Recomputes (if needed) the view projection matrix.
     *
     * @returns The view-projection matrix.
     */
    getViewProjMatrix() {
        const viewProjMatrix = this._viewProjMatrix;
        if (this._dirtyBits & 1 /* VIEW_PROJ_MATRIX */) {
            __WEBPACK_IMPORTED_MODULE_3__math_matrix4__["c" /* copy */](__WEBPACK_IMPORTED_MODULE_3__math_matrix4__["a" /* IDENTITY */], viewProjMatrix);
            __WEBPACK_IMPORTED_MODULE_3__math_matrix4__["e" /* lookAt */](viewProjMatrix, this._computeCenterToCameraVector(), __WEBPACK_IMPORTED_MODULE_5__math_vector3__["a" /* ORIGIN */], __WEBPACK_IMPORTED_MODULE_5__math_vector3__["m" /* rotateZ */](__WEBPACK_IMPORTED_MODULE_5__math_vector3__["b" /* POSITIVE_Y */], this._azimuth), viewProjMatrix);
            const { fov } = this.options;
            const tanFactors = Math.tan(this._tilt) * Math.tan(0.5 * fov);
            __WEBPACK_IMPORTED_MODULE_3__math_matrix4__["f" /* perspective */](viewProjMatrix, fov, this.aspectRatio, Math.min(this._distanceToCenter * 0.01, this._distanceToCenter / (1 + tanFactors)), this._distanceToCenter / (1 - tanFactors), viewProjMatrix);
            this._dirtyBits &= ~1 /* VIEW_PROJ_MATRIX */;
        }
        return viewProjMatrix;
    }
    /**
     * Recomputes (if needed) and returns quadrilateral cut on the world plane
     * by frustum of the camera.
     *
     * @return The quadrilateral enclosing visible part of the world plane.
     */
    getVisibleRegion() {
        this._computeVisibleQuadrilateral();
        return this._visibleQuadrilateral;
    }
    /**
     * Recomputes (if needed) and returns bounding box of the visible region.
     *
     * @return Bounding box of the visible quadrilateral.
     */
    getVisibleRegionBBox() {
        this._computeVisibleQuadrilateral();
        return this._visibleQuadrilateralBBox;
    }
    _constrainTilt(tilt) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["a" /* clamp */])(tilt, 0, MAX_TILT * Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["c" /* smoothStep */])(NO_TILT_MAX_ZOOM, FULL_TILT_MIN_ZOOM, this._zoom));
    }
    _setDirtyBits(bits) {
        if (bits ^ (bits & this._dirtyBits)) {
            this._dirtyBits |= bits;
            this.onUpdate.fire();
        }
    }
    _computeDistanceToCenter() {
        this._distanceToCenter =
            this.screenSize.height * Math.pow(2, -this._zoom) /
                (Math.tan(0.5 * this.options.fov) * ZOOM_0_WORLD_CSS_PIXEL_SIZE);
    }
    _computeCenterToCameraVector(dst = __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0)) {
        __WEBPACK_IMPORTED_MODULE_5__math_vector3__["i" /* muln */](__WEBPACK_IMPORTED_MODULE_5__math_vector3__["c" /* POSITIVE_Z */], this._distanceToCenter, dst);
        __WEBPACK_IMPORTED_MODULE_5__math_vector3__["l" /* rotateX */](dst, this._tilt, dst);
        __WEBPACK_IMPORTED_MODULE_5__math_vector3__["m" /* rotateZ */](dst, this._azimuth, dst);
        return dst;
    }
    _computeVisibleQuadrilateral() {
        if (this._dirtyBits & 2 /* VISIBLE_QUADRILATERAL */) {
            const visibleQuadrilateral = this._visibleQuadrilateral;
            const halfFovTan = Math.tan(0.5 * this.options.fov);
            const origin = this._computeCenterToCameraVector();
            __WEBPACK_IMPORTED_MODULE_4__math_vector2__["b" /* add */](origin, this.center, origin);
            const scale = __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](halfFovTan * this.aspectRatio, halfFovTan, 1);
            const direction = __WEBPACK_IMPORTED_MODULE_5__math_vector3__["e" /* create */](0, 0, 0);
            const ray = { origin, direction };
            for (let i = 0; i < 4; ++i) {
                __WEBPACK_IMPORTED_MODULE_5__math_vector3__["j" /* mulv */](FRUSTUM_DIRECTIONS[i], scale, direction);
                __WEBPACK_IMPORTED_MODULE_5__math_vector3__["l" /* rotateX */](direction, this._tilt, direction);
                __WEBPACK_IMPORTED_MODULE_5__math_vector3__["m" /* rotateZ */](direction, this._azimuth, direction);
                if (!__WEBPACK_IMPORTED_MODULE_5__math_vector3__["h" /* getPlaneRayIntersection */](__WEBPACK_IMPORTED_MODULE_5__math_vector3__["d" /* XY */], ray, visibleQuadrilateral[i])) {
                    throw new Error('Visible quadrilateral is unbounded, engine can\'t handle that case (yet)');
                }
            }
            __WEBPACK_IMPORTED_MODULE_4__math_vector2__["c" /* computeBBoxForPoints */](visibleQuadrilateral, this._visibleQuadrilateralBBox);
            this._dirtyBits &= ~2 /* VISIBLE_QUADRILATERAL */;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;

/**
 * Implementation of a center vector of a camera. Takes into account wrapping
 * modes and updates camera's dirty flags.
 */
Camera.Center = class {
    /**
     * Creates new center vector for a camera.
     *
     * @param camera The camera.
     */
    constructor(camera) {
        this._camera = camera;
        this._x = this._y = 0;
    }
    /**
     * @returns Values of abscissa of the center vector.
     */
    get x() {
        return this._x;
    }
    /**
     * Properly clamps or wraps new abscissa value and sets it to the vector.
     *
     * @param newX The new
     */
    set x(newX) {
        const camera = this._camera;
        newX = restrictCoordinate(camera.options.wrapModeX, newX);
        if (this._x !== newX) {
            this._x = newX;
            camera._setDirtyBits(2 /* VISIBLE_QUADRILATERAL */);
        }
    }
    /**
     * @returns Values of ordinate of the center vector.
     */
    get y() {
        return this._y;
    }
    /**
     * Properly clamps or wraps new ordinate value and sets it to the vector.
     */
    set y(newY) {
        const camera = this._camera;
        newY = restrictCoordinate(camera.options.wrapModeY, newY);
        if (this._y !== newY) {
            this._y = newY;
            camera._setDirtyBits(2 /* VISIBLE_QUADRILATERAL */);
        }
    }
};
Camera.ScreenSize = class {
    constructor(camera) {
        this._camera = camera;
        this._width = this._height = 1;
    }
    get width() {
        return this._width;
    }
    set width(newWidth) {
        if (this._width !== newWidth) {
            this._width = newWidth;
            const camera = this._camera;
            camera._setDirtyBits(1 /* VIEW_PROJ_MATRIX */ | 2 /* VISIBLE_QUADRILATERAL */);
        }
    }
    get height() {
        return this._height;
    }
    set height(newHeight) {
        if (this._height !== newHeight) {
            this._height = newHeight;
            const camera = this._camera;
            camera._computeDistanceToCenter();
            camera._setDirtyBits(1 /* VIEW_PROJ_MATRIX */ | 2 /* VISIBLE_QUADRILATERAL */);
        }
    }
};


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deg2rad;
/* unused harmony export rad2deg */
const DEG_TO_RAD = Math.PI / 180;
function deg2rad(x) {
    return x * DEG_TO_RAD;
}
function rad2deg(x) {
    return x / DEG_TO_RAD;
}


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFullOptions;
/**
 * Resolves options.
 *
 * @param defaultOptions Object with default values.
 * @param options Object with custom values for options. Later objects "override"
 *      former ones.
 * @returns New object containing resolved options.
 */
function getFullOptions(defaultOptions, ...options) {
    return Object.assign({}, defaultOptions, ...options);
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile_based_adapter_adapter__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_icon_icon_buffer_writer__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__primitive_point__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billboard_identified_image_atlas_manager__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitive_polygon__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__primitive_polyline__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__primitive_label__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__font_df_font__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_image_provider__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__primitive_model__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__primitive_model_model_buffer_writer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__primitive_textured_polyline__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__primitive_polyline_textured_polyline_buffer_writer__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__billboard_image_manager__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__primitive_textured_polygon__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__primitive_polygon_textured_polygon_buffer_rewiter__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__primitive_polygon_polygon_attribute_mapping__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__primitive_polygon_textured_polygon_attribute_mapping__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__primitive_billboard_rectangle_attribute_mapping__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__primitive_label_point_label_attribute_mapping__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__primitive_label_curved_label_attribute_mapping__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__primitive_polyline_polyline_attribute_mapping__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__primitive_polyline_transparent_polyline_attribute_mapping__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__worker_tile_provider_worker_client__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__worker_tile_provider_worker_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__primitive_polygon_transparent_polygon_attribute_mapping__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__util_event_emitter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__util_idle_task_queue__ = __webpack_require__(151);































/**
 * Computes a minimum zoom an object should be still displayed on.
 *
 * @param tile Tile the object belongs to.
 * @param delta Tolerance of the visibility to zooming out, default value was empirically chosen.
 * @returns Minimum zoom for the object.
 */
function computeMinZoom(tile, delta = 2) {
    return tile.zoom - delta;
}
const WORLD_SIZE = 2.0;
const TILE_SIZE_PX = 256; // tile's vector data is optimized for displaying in a 256x256 css px square
class VectorApiAdapter extends __WEBPACK_IMPORTED_MODULE_0__tile_based_adapter_adapter__["a" /* default */] {
    constructor(engine, camera, tileProviderWorkerUrl, { imageUrlTemplate, tileUrlTemplate, meshUrlTemplate, glyphRangeUrlTemplate }) {
        super(engine, camera);
        this.onTileLoadChange = new __WEBPACK_IMPORTED_MODULE_28__util_event_emitter__["a" /* EventEmitter */]();
        this._requestedTiles = new Map();
        this._readyTiles = new Set();
        this._tileProvider = new __WEBPACK_IMPORTED_MODULE_24__worker_tile_provider_worker_client__["a" /* TileProviderWorkerClient */](tileProviderWorkerUrl);
        this._tileProvider.sendMessage({
            type: __WEBPACK_IMPORTED_MODULE_25__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].INIT,
            tileUrlTemplate,
            meshUrlTemplate,
            glyphRangeUrlTemplate
        }, 1 /* IMMEDIATE */);
        this._memoryManager = engine.getRenderer().getMemoryManager();
        this._glyphAtlas = engine.glyphAtlas;
        this._fontRegistry = engine.fontRegistry;
        this._imageManager = new __WEBPACK_IMPORTED_MODULE_14__billboard_image_manager__["a" /* ImageManager */](new __WEBPACK_IMPORTED_MODULE_4__billboard_identified_image_atlas_manager__["a" /* default */](engine.createImageAtlas()), new __WEBPACK_IMPORTED_MODULE_9__api_image_provider__["a" /* ApiImageProvider */](imageUrlTemplate));
        this._primitiveTypes = [
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.polygons, (scene, primitive) => scene.addPolygon(primitive.renderablePolygon), (scene, primitive) => scene.removePolygon(primitive.renderablePolygon)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.texturedPolygons, (scene, primitive) => scene.addTexturedPolygon(primitive.renderablePolygon), (scene, primitive) => scene.removeTexturedPolygon(primitive.renderablePolygon)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.pointLabels, (scene, primitive) => scene.addPointLabel(primitive.renderableLabel), (scene, primitive) => scene.removePointLabel(primitive.renderableLabel)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.curvedLabels, (scene, primitive) => scene.addCurvedLabel(primitive.renderableLabel), (scene, primitive) => scene.removeCurvedLabel(primitive.renderableLabel)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.points, (scene, primitive) => scene.addIcon(primitive.renderableIcon), (scene, primitive) => scene.removeIcon(primitive.renderableIcon)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.polylines, (scene, primitive) => scene.addPolyline(primitive.renderablePolyline), (scene, primitive) => scene.removePolyline(primitive.renderablePolyline)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.texturedPolylines, (scene, primitive) => scene.addTexturedPolyline(primitive.renderablePolyline), (scene, primitive) => scene.removeTexturedPolyline(primitive.renderablePolyline)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["b" /* ScenePrimitiveManager */]((data) => data.models, (scene, primitive) => scene.addModel(primitive.renderableModel), (scene, primitive) => scene.removeModel(primitive.renderableModel)),
            new __WEBPACK_IMPORTED_MODULE_27__scene_primitive_manager__["a" /* ExternalMeshScenePrimitiveManager */](engine.renderLoop, this._tileProvider, this._memoryManager)
        ];
        this._taskQueue = new __WEBPACK_IMPORTED_MODULE_30__util_idle_task_queue__["a" /* default */]();
        this._tileProvider.on(__WEBPACK_IMPORTED_MODULE_25__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].TILE_RESPONSE, (response) => {
            this._taskQueue.enqueue(() => {
                const tile = response.tile;
                // atlas must be updated notwithstanding the tile is active or not
                // as these new glyphs will be used in next tiles
                const atlas = response.glyphAtlasToUpdate;
                if (atlas) {
                    this._glyphAtlas.updateContent(atlas.width, atlas.height, atlas.data, new Map(atlas.glyphLocations));
                }
                const registry = response.fontRegistryToUpdate;
                if (registry) {
                    for (const fontData of registry) {
                        let font;
                        if (this._fontRegistry.contains(fontData.id)) {
                            font = this._fontRegistry.get(fontData.id);
                        }
                        else {
                            font = new __WEBPACK_IMPORTED_MODULE_8__font_df_font__["a" /* default */](fontData.id, fontData.xheight, fontData.margin);
                            this._fontRegistry.add(font);
                        }
                        font.addAllGlyphs(fontData.glyphs);
                    }
                }
                if (!this._isTileStillActive(tile))
                    return;
                this._taskQueue.enqueue(() => this._putTileData(tile, {
                    polygons: this._allocatePolygons(response),
                    models: this._allocateMeshes(response),
                    externalMeshes: this._allocateExternalMeshes(response),
                    polylines: this._allocatePolylines(response),
                    pointLabels: this._allocatePointLabels(response),
                    curvedLabels: this._allocateCurvedLabels(response)
                }, false));
                this._allocateIcons(tile, response).then((icons) => {
                    this._taskQueue.enqueue(() => this._putTileData(tile, { points: icons }));
                });
                this._allocateTexturedPolylines(response).then((texturedPolylines) => {
                    this._taskQueue.enqueue(() => this._putTileData(tile, { texturedPolylines }));
                });
                this._allocateTexturedPolygons(response).then((texturedPolygons) => {
                    this._taskQueue.enqueue(() => this._putTileData(tile, { texturedPolygons }));
                });
                const requestedTileData = this._requestedTiles.get(Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(tile));
                if (requestedTileData !== undefined) {
                    // TODO: the data is synced on these two properties and this code doesn't make much sense for now,
                    //       but it is left "as is" since it is not clear how it will be changed in nearest future
                    requestedTileData.isGeometryReady = true;
                    requestedTileData.areLabelsReady = true;
                }
                this._checkTileReady(tile);
            });
        });
        this._onCameraUpdate();
    }
    destroy() {
        this._tileProvider.destroy();
        super.destroy();
    }
    _onVisibleTilesChanged(visibleTiles, tileCoordinateSystem) {
        let readyTilesSetChanged = false;
        for (const tileId of this._readyTiles) {
            if (!visibleTiles.find((visibleItem) => {
                return Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(visibleItem) === tileId;
            })) {
                this._readyTiles.delete(tileId);
                readyTilesSetChanged = true;
            }
        }
        if (readyTilesSetChanged) {
            this._fireTileLoadChange();
        }
        super._onVisibleTilesChanged(visibleTiles, tileCoordinateSystem);
    }
    _requestTiles(tiles) {
        for (const tile of tiles) {
            this._requestedTiles.set(Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(tile.tile), {
                isGeometryReady: false,
                areLabelsReady: false
            });
        }
        this._fireTileLoadChange();
        this._tileProvider.sendMessage({
            type: __WEBPACK_IMPORTED_MODULE_25__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].TILE_REQUEST,
            tiles
        }, 1 /* IMMEDIATE */);
    }
    _cancelTileRequest(tileItem) {
        if (this._requestedTiles.has(Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(tileItem))) {
            this._requestedTiles.delete(Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(tileItem));
            this._fireTileLoadChange();
        }
        this._tileProvider.sendMessage({
            type: __WEBPACK_IMPORTED_MODULE_25__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].TILE_REQUEST_CANCEL,
            tile: tileItem
        });
    }
    _onTileDataUpdate(dataToShow, dataToHide) {
        for (const primitiveManager of this._primitiveTypes) {
            primitiveManager.updateScene(this.engine.getScene(), this.camera, dataToShow, dataToHide);
        }
        this.engine.renderLoop.update();
    }
    _onTileDestroy(_tileItem, data) {
        for (const primitiveManager of this._primitiveTypes) {
            for (const portion of data) {
                primitiveManager.destroy(portion);
            }
        }
        this.engine.renderLoop.update();
    }
    _allocatePolygons(response) {
        const apiPolygons = new Array(response.polygons.length + response.transparentPolygons.length);
        const memoryChunks = new MemoryChunks(response.polygonPages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_17__primitive_polygon_polygon_attribute_mapping__["a" /* POLYGON_ATTRIBUTE_MAPPING */]);
        const transparentPolygonsMemoryChunks = new MemoryChunks(response.transparentPolygonPages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_26__primitive_polygon_transparent_polygon_attribute_mapping__["a" /* TRANSPARENT_POLYGON_ATTRIBUTE_MAPPING */]);
        let index = 0;
        for (let i = 0; i < response.polygons.length; i++, index++) {
            const { bufferLocation, styles } = response.polygons[i];
            apiPolygons[index] = new __WEBPACK_IMPORTED_MODULE_5__primitive_polygon__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[bufferLocation.bufferIndex], bufferLocation), styles, true);
        }
        for (let i = 0; i < response.transparentPolygons.length; i++, index++) {
            const { bufferLocation, styles } = response.transparentPolygons[i];
            apiPolygons[index] = new __WEBPACK_IMPORTED_MODULE_5__primitive_polygon__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](transparentPolygonsMemoryChunks[bufferLocation.bufferIndex], bufferLocation), styles, false);
        }
        memoryChunks.forEach((chunk) => chunk.release());
        transparentPolygonsMemoryChunks.forEach((chunk) => chunk.release());
        return apiPolygons;
    }
    _allocateTexturedPolygons(response) {
        return Promise.all(response.texturedPolygons.map((texturedPolygon) => {
            const style = texturedPolygon.styles[0];
            const pattern = style && style.pattern;
            if (pattern) {
                return this._imageManager.getImage(pattern.imageId).then((allocatedImage) => ({ bufferLocation: texturedPolygon.bufferLocation, allocatedImage, style }), () => null);
            }
            else {
                return null;
            }
        })).then((texturedPolygons) => {
            return new Promise((resolve) => this._taskQueue.enqueue(() => {
                if (!this._isTileStillActive(response.tile))
                    resolve([]);
                const apiPolygonImages = [];
                if (this._isTileStillActive(response.tile)) {
                    const pages = response.texturedPolygonPages;
                    const texturedPolygonRewriter = new __WEBPACK_IMPORTED_MODULE_16__primitive_polygon_textured_polygon_buffer_rewiter__["a" /* default */](pages);
                    const rewrittenPolygonImages = [];
                    const worldToPxFactor = WORLD_SIZE / (TILE_SIZE_PX * Math.pow(2, response.tile.zoom));
                    for (const texturedPolygon of texturedPolygons) {
                        if (texturedPolygon && texturedPolygon.allocatedImage) {
                            const allocatedImage = texturedPolygon.allocatedImage;
                            const pattern = texturedPolygon.style.pattern;
                            const imageScale = pattern.width / allocatedImage.descriptor.width;
                            texturedPolygonRewriter.rewriteUV(texturedPolygon.bufferLocation, allocatedImage.bbox, worldToPxFactor * imageScale);
                            rewrittenPolygonImages.push(Object.assign({}, texturedPolygon, { allocatedImage }));
                        }
                    }
                    const chunks = new MemoryChunks(pages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_18__primitive_polygon_textured_polygon_attribute_mapping__["a" /* TEXTURED_POLYGON_ATTRIBUTE_MAPPING */]);
                    for (const { bufferLocation, allocatedImage } of rewrittenPolygonImages) {
                        apiPolygonImages.push(new __WEBPACK_IMPORTED_MODULE_15__primitive_textured_polygon__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](chunks[bufferLocation.bufferIndex], bufferLocation), allocatedImage));
                    }
                    chunks.forEach((chunk) => chunk.release());
                }
                // allocated images were retained on request, need to release all of them
                for (const polygonImage of texturedPolygons) {
                    if (polygonImage && polygonImage.allocatedImage) {
                        polygonImage.allocatedImage.release();
                    }
                }
                resolve(apiPolygonImages);
            }));
        }, () => []);
    }
    _allocateMeshes(tileResponse) {
        const memoryChunks = tileResponse.meshPages.map((page) => this._memoryManager.allocate(page.vertexBuffer, page.indexBuffer, __WEBPACK_IMPORTED_MODULE_11__primitive_model_model_buffer_writer__["a" /* default */].ATTRIBUTE_MAPPING));
        const meshes = tileResponse.meshes.map((mesh) => new __WEBPACK_IMPORTED_MODULE_10__primitive_model__["b" /* default */](mesh.styles, new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[mesh.bufferLocation.bufferIndex], mesh.bufferLocation)));
        memoryChunks.forEach((chunk) => chunk.release());
        return meshes;
    }
    _allocateExternalMeshes(tileResponse) {
        return tileResponse.externalMeshes.map((mesh) => new __WEBPACK_IMPORTED_MODULE_10__primitive_model__["a" /* ApiPolygonMesh */](mesh.mesh, mesh.styles));
    }
    _allocatePolylines(response) {
        const apiPolylines = new Array(response.polylines.length + response.transparentPolylines.length);
        const memoryChunks = new MemoryChunks(response.polylinePages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_22__primitive_polyline_polyline_attribute_mapping__["a" /* POLYLINE_ATTRIBUTE_MAPPING */]);
        const transparentPolylinesMemoryChunks = new MemoryChunks(response.transparentPolylinePages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_23__primitive_polyline_transparent_polyline_attribute_mapping__["a" /* TRANSPARENT_POLYLINE_ATTRIBUTE_MAPPING */]);
        let index = 0;
        for (let i = 0; i < response.polylines.length; i++, index++) {
            const { bufferLocation, styles } = response.polylines[i];
            apiPolylines[index] = new __WEBPACK_IMPORTED_MODULE_6__primitive_polyline__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[bufferLocation.bufferIndex], bufferLocation), styles, true);
        }
        for (let i = 0; i < response.transparentPolylines.length; i++, index++) {
            const { bufferLocation, styles } = response.transparentPolylines[i];
            apiPolylines[index] = new __WEBPACK_IMPORTED_MODULE_6__primitive_polyline__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](transparentPolylinesMemoryChunks[bufferLocation.bufferIndex], bufferLocation), styles, false);
        }
        memoryChunks.forEach((chunk) => chunk.release());
        transparentPolylinesMemoryChunks.forEach((chunk) => chunk.release());
        return apiPolylines;
    }
    _allocateTexturedPolylines(tileResponse) {
        return Promise.all(tileResponse.texturedPolylines.map((texturedPolyline) => {
            const style = texturedPolyline.styles[0];
            const pattern = style && style.inline && style.inline.pattern;
            if (pattern) {
                return this._imageManager.getImage(pattern.imageId).then((allocatedImage) => allocatedImage ? { texturedPolyline, allocatedImage } : null, () => null);
            }
            else {
                return null;
            }
        })).then((images) => {
            return new Promise((resolve) => this._taskQueue.enqueue(() => {
                if (!this._isTileStillActive(tileResponse.tile))
                    resolve([]);
                const texturedPolylineWriter = new __WEBPACK_IMPORTED_MODULE_13__primitive_polyline_textured_polyline_buffer_writer__["a" /* default */]();
                const worldToPxFactor = 2.0 / (256 * Math.pow(2, tileResponse.tile.zoom));
                const writtenTexturedPolylines = [];
                for (const texturedPolyline of images) {
                    if (texturedPolyline) {
                        const style = texturedPolyline.texturedPolyline.styles[0];
                        const width = (style.inline || style.outline).strokeWidth;
                        const imageLocation = texturedPolyline.allocatedImage.bbox;
                        // image size may not match polyline's strokeWidth, so it must be scaled accordingly in
                        // both directions, this factor can be passed to the writer in worldToPxFactor updated.
                        const pixelRatio = width / (imageLocation.maxY - imageLocation.minY);
                        const bufferLocation = texturedPolylineWriter.writeTexturedPolyline(texturedPolyline.texturedPolyline, width, worldToPxFactor * pixelRatio, texturedPolyline.allocatedImage.bbox, style.zIndex);
                        writtenTexturedPolylines.push({ bufferLocation, allocatedImage: texturedPolyline.allocatedImage });
                    }
                }
                const pages = texturedPolylineWriter.getBuffers();
                const memoryChunks = new MemoryChunks(pages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_13__primitive_polyline_textured_polyline_buffer_writer__["a" /* default */].ATTRIBUTE_MAPPING);
                const texturedPolylines = writtenTexturedPolylines.map((texturedPolyline) => {
                    const apiTexturedPolyline = new __WEBPACK_IMPORTED_MODULE_12__primitive_textured_polyline__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[texturedPolyline.bufferLocation.bufferIndex], texturedPolyline.bufferLocation), [], texturedPolyline.allocatedImage.atlas.imageAtlas, texturedPolyline.allocatedImage);
                    texturedPolyline.allocatedImage.release();
                    return apiTexturedPolyline;
                });
                memoryChunks.forEach((chunk) => chunk.release());
                resolve(texturedPolylines);
            }));
        }, () => []);
    }
    _allocatePointLabels(response) {
        const memoryChunks = new MemoryChunks(response.pointLabelPages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_20__primitive_label_point_label_attribute_mapping__["a" /* POINT_LABEL_ATTRIBUTE_MAPPING */]);
        const backgroundMemoryChunks = new MemoryChunks(response.pointLabelBackgroundPages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_19__primitive_billboard_rectangle_attribute_mapping__["a" /* BILLBOARD_RECTANGLE_ATTRIBUTE_MAPPING */]);
        const pointLabels = response.pointLabels.map(({ bufferLocation, styles, backgroundBufferLocation }) => new __WEBPACK_IMPORTED_MODULE_7__primitive_label__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[bufferLocation.bufferIndex], bufferLocation), computeMinZoom(response.tile), styles, this._glyphAtlas, backgroundBufferLocation ? new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](backgroundMemoryChunks[backgroundBufferLocation.bufferIndex], backgroundBufferLocation) : undefined));
        backgroundMemoryChunks.forEach((chunk) => chunk.release());
        memoryChunks.forEach((chunk) => chunk.release());
        return pointLabels;
    }
    _allocateCurvedLabels(response) {
        const memoryChunks = new MemoryChunks(response.curvedLabelPages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_21__primitive_label_curved_label_attribute_mapping__["a" /* CURVED_LABEL_ATTRIBUTE_MAPPING */]);
        const curvedLabels = response.curvedLabels.map(({ bufferLocation, styles }) => new __WEBPACK_IMPORTED_MODULE_7__primitive_label__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[bufferLocation.bufferIndex], bufferLocation), computeMinZoom(response.tile), styles, this._glyphAtlas));
        memoryChunks.forEach((chunk) => chunk.release());
        return curvedLabels;
    }
    _allocateIcons(tile, tileResponse) {
        return Promise.all(tileResponse.points.map((icon) => {
            const style = icon.styles[0];
            return this._imageManager.getImage(style.imageId).then((allocatedImage) => allocatedImage ? { icon, allocatedImage } : null, () => null);
        })).then((images) => {
            return new Promise((resolve) => this._taskQueue.enqueue(() => {
                if (!this._isTileStillActive(tile))
                    resolve([]);
                const iconWriter = new __WEBPACK_IMPORTED_MODULE_1__primitive_icon_icon_buffer_writer__["a" /* default */]();
                const writtenIcons = images.filter((image) => !!image).map((image) => {
                    const style = image.icon.styles[0];
                    const allocatedImage = image.allocatedImage;
                    const location = allocatedImage.bbox;
                    const size = allocatedImage.descriptor;
                    const pixelRatio = style.width / size.width;
                    return Object.assign({}, image, { location: iconWriter.writeIcon(image.icon, location, size, style.offset, pixelRatio) });
                });
                const pages = iconWriter.getBuffers();
                const memoryChunks = new MemoryChunks(pages, this._memoryManager, __WEBPACK_IMPORTED_MODULE_1__primitive_icon_icon_buffer_writer__["a" /* default */].ATTRIBUTE_MAPPING);
                const icons = writtenIcons.map((icon) => {
                    const apiPoint = new __WEBPACK_IMPORTED_MODULE_3__primitive_point__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[icon.location.bufferIndex], icon.location), icon.icon.styles, icon.allocatedImage, icon.allocatedImage.atlas.imageAtlas, computeMinZoom(tile));
                    icon.allocatedImage.release();
                    return apiPoint;
                });
                memoryChunks.forEach((chunk) => chunk.release());
                resolve(icons);
            }));
        }, () => []);
    }
    _fireTileLoadChange() {
        this.onTileLoadChange.fire({
            totalTileNumber: this._requestedTiles.size + this._readyTiles.size,
            readyTileNumber: this._readyTiles.size
        });
    }
    _checkTileReady(tileItem) {
        const tileId = Object(__WEBPACK_IMPORTED_MODULE_29__tile_based_adapter_tile_id__["a" /* getTileId */])(tileItem);
        const tileData = this._requestedTiles.get(tileId);
        if (tileData !== undefined) {
            if (tileData.areLabelsReady && tileData.isGeometryReady) {
                this._readyTiles.add(tileId);
                this._requestedTiles.delete(tileId);
                this._fireTileLoadChange();
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VectorApiAdapter;

/**
 * Helper class for allocation of an array of memory chunks.
 */
class MemoryChunks extends Array {
    constructor(pages, memoryManager, attribMapping) {
        super(pages.length);
        for (let i = 0; i < pages.length; i++) {
            this[i] = memoryManager.allocate(pages[i].vertexBuffer, pages[i].indexBuffer, attribMapping);
        }
    }
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector_api_util_tile_system__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_iterable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_id__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vector_api_util_compute_visible_tiles__ = __webpack_require__(117);





/* VECTOR-82 Turn off tile preloading until fix rendering speed issues.
import Camera, {CenterWrapMode} from '../../camera/camera';
import {calculateBeltTiles} from './belt_tiles';
*/
/**
 * This class is the main unit of the whole process of tile management. It stores visualizable data and links to
 * dependant tiles (for parent/child overlapping cases).
 */
class Tile {
    constructor(tileItem) {
        this.data = [];
        this.tileItem = tileItem;
        this.id = `${tileItem.x}:${tileItem.y}:${tileItem.zoom}`;
        this.isReadyToVisualize = false;
        this.isRemoved = false;
        this.toBeReplacedBy = new Set();
        this.replacementFor = new Set();
    }
}
const NO_TILES_TO_HANDLE = [];
const FILTER_VISIBLE = (data) => data.isVisible;
const FILTER_INVISIBLE = (data) => !data.isVisible;
const DATA_MAPPER = (data) => data.data;
const flattenDataPortions = function* (tiles) {
    for (const tile of tiles) {
        yield* tile.data;
    }
};
/**
 * Base class for adapters that get their data in tiles. Content of tiles that come into field of view should
 * be requested, as well as content of invisible tiles should be removed, also tiles on different zoom levels can
 * overlap each other. Managing of all these cases and other tile-specific logic is the responsibility of this class.
 */
class TileBasedAdapter extends __WEBPACK_IMPORTED_MODULE_0__adapter__["a" /* default */] {
    constructor(engine, camera) {
        super(engine, camera);
        this._currentTiles = new Map();
        this._preloadedTiles = new Map();
        this._allTiles = new Map();
        // this._beltSize = preloadedTilesBeltSize;
    }
    /**
     * @param tileItem The tile to which the data belongs.
     * @param data Data portion to be shown in tile once it is ready to visualize.
     * @param visualize Is this data portion enough to render this tile and replace overlapped ones if any.
     */
    _putTileData(tileItem, data, visualize = true) {
        const tile = this._allTiles.get(Object(__WEBPACK_IMPORTED_MODULE_3__tile_id__["a" /* getTileId */])(tileItem));
        if (tile) {
            const isCurrent = this._currentTiles.has(tile.id);
            const dataPortion = { isVisible: false, data: data };
            tile.data.push(dataPortion);
            if (!tile.isReadyToVisualize && visualize) {
                tile.isReadyToVisualize = true;
                if (isCurrent) {
                    this._checkTileReplacements(tile);
                }
            }
            else if (isCurrent) {
                this._updateTileData([tile], NO_TILES_TO_HANDLE);
            }
        }
        else {
            // Data recieved late and probably the tile had been destroyed.
            // Destroy data too.
            this._onTileDestroy(tileItem, [data]);
        }
    }
    _onCameraUpdate() {
        this._onVisibleTilesChanged([...Object(__WEBPACK_IMPORTED_MODULE_4__vector_api_util_compute_visible_tiles__["a" /* default */])(this.camera)], new __WEBPACK_IMPORTED_MODULE_1__vector_api_util_tile_system__["a" /* default */](this.camera.zoom));
    }
    /**
     * This method is where the whole magic happens, it manages replacement of current set of visible/preloaded tiles
     * with a new one.
     */
    _onVisibleTilesChanged(visibleTiles, tileCoordinateSystem) {
        this._currentTiles.clear();
        const tilesToRequest = [];
        const center = tileCoordinateSystem.toTileCoordinates(this.camera.center);
        for (const tileItem of visibleTiles) {
            let tile = this._allTiles.get(Object(__WEBPACK_IMPORTED_MODULE_3__tile_id__["a" /* getTileId */])(tileItem));
            if (!tile) {
                tile = new Tile(tileItem);
                tilesToRequest.push({
                    tile: tileItem,
                    // Shorter the distance from the tile to the viewport center,
                    // higher its priority.
                    priority: 1 / Math.hypot(tileItem.x - center.x, tileItem.y - center.y)
                });
                this._allTiles.set(tile.id, tile);
            }
            this._currentTiles.set(tile.id, tile);
        }
        this._requestTiles(tilesToRequest);
        /* VECTOR-82 Turn off tile preloading until fix rendering speed issues.
        // preload some tiles
        this._preloadedTiles.clear();
        for (const tileItem of calculateBeltTiles(
            visibleTiles,
            this._beltSize,
            this.camera.options.wrapModeX == CenterWrapMode.REPEAT,
            this.camera.options.wrapModeY == CenterWrapMode.REPEAT
        )) {
            const tileId = getTileId(tileItem);
            let tile = this._allTiles.get(tileId);
            if (!tile) {
                tile = new Tile(tileItem);
                this._requestTile(tileItem);
                this._allTiles.set(tileId, tile);
            }
            this._preloadedTiles.set(tileId, tile);
        }
        */
        // broke current relationships to set them up again but with new set of visible tiles
        for (const tile of this._allTiles.values()) {
            tile.toBeReplacedBy.clear();
            tile.replacementFor.clear();
        }
        // TODO: optimize this n^2 relationships resolver
        for (const currentTile of this._currentTiles.values()) {
            for (const tile of this._allTiles.values()) {
                if (tile.isReadyToVisualize &&
                    (Object(__WEBPACK_IMPORTED_MODULE_1__vector_api_util_tile_system__["b" /* isParent */])(tile.tileItem, currentTile.tileItem) || Object(__WEBPACK_IMPORTED_MODULE_1__vector_api_util_tile_system__["b" /* isParent */])(currentTile.tileItem, tile.tileItem))) {
                    tile.toBeReplacedBy.add(currentTile);
                    currentTile.replacementFor.add(tile);
                }
            }
        }
        // remove invisible
        for (const tile of this._allTiles.values()) {
            if (!this._currentTiles.has(tile.id) && tile.toBeReplacedBy.size === 0) {
                this._updateTileData(NO_TILES_TO_HANDLE, [tile]);
                if (!this._preloadedTiles.has(tile.id)) {
                    this._destroyTile(tile);
                }
            }
        }
        // this checks prevents leaks of tiles when quick zoom-in/zoom-out happens
        for (const tile of this._currentTiles.values()) {
            if (tile.isReadyToVisualize) {
                this._checkTileReplacements(tile);
            }
        }
    }
    /**
     * Shows/hides tiles if they are not shown/hidden yet. It notifies subclasses by calling appropriate
     * abstract method. Even though visible/invisible tiles are not supposed to be shown/hidden again,
     * there are cases where it simplifies tile visualization logic.
     * It is important to have exactly "update", not "add"/"remove" separately, as some business logic may rely on it,
     * e.g. morphing visible data or managing shared resources.
     */
    _updateTileData(toShow, toRemove) {
        const visible = Array.from(Object(__WEBPACK_IMPORTED_MODULE_2__util_iterable__["b" /* filterIterable */])(flattenDataPortions(toShow), FILTER_INVISIBLE), DATA_MAPPER);
        const invisible = Array.from(Object(__WEBPACK_IMPORTED_MODULE_2__util_iterable__["b" /* filterIterable */])(flattenDataPortions(toRemove), FILTER_VISIBLE), DATA_MAPPER);
        if (visible.length > 0 || invisible.length > 0) {
            this._onTileDataUpdate(visible, invisible);
            for (const dataPortion of flattenDataPortions(toShow)) {
                dataPortion.isVisible = true;
            }
            for (const dataPortion of flattenDataPortions(toRemove)) {
                dataPortion.isVisible = false;
            }
        }
    }
    /**
     * Removes tile if is not removed with calling all appropriate callbacks (abstract methods)
     * to notify descendant classes. Even though removed tile is not supposed to be removed again,
     * allowing this makes much simpler tile management, especially in tile replacements logic where multiple
     * tiles can have links to the same tile (that is to be removed).
     */
    _destroyTile(tile) {
        if (!tile.isRemoved) {
            tile.isRemoved = true;
            this._allTiles.delete(tile.id);
            this._currentTiles.delete(tile.id);
            this._preloadedTiles.delete(tile.id);
            // issue cancellation also in case there are non processed data enqueued to try to save some efforts
            this._cancelTileRequest(tile.tileItem);
            this._onTileDestroy(tile.tileItem, tile.data.map(DATA_MAPPER));
        }
    }
    _isTileStillActive(tileItem) {
        return this._allTiles.has(Object(__WEBPACK_IMPORTED_MODULE_3__tile_id__["a" /* getTileId */])(tileItem));
    }
    /**
     * Checks tiles that could be replaced by this one, should be called when tile becomes ready to visualize.
     * As overlapping relationships can happen in both directions (children by parents / parent by children) this
     * method goes one step deeper, i.e. it check not only tiles that should be replaced (to remove them),
     * but also all tiles that cover the replaced ones (to show them).
     */
    _checkTileReplacements(tile) {
        const toDestroy = new Set();
        const toShow = new Set();
        for (const tileToReplace of tile.replacementFor) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__util_iterable__["a" /* allOfIterable */])(tileToReplace.toBeReplacedBy, (tile) => tile.isReadyToVisualize)) {
                toDestroy.add(tileToReplace);
                for (const tileToShow of tileToReplace.toBeReplacedBy) {
                    toShow.add(tileToShow);
                }
            }
        }
        if (tile.replacementFor.size === 0) {
            toShow.add(tile);
        }
        this._updateTileData(toShow, toDestroy);
        for (const tileToDestroy of toDestroy) {
            this._destroyTile(tileToDestroy);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TileBasedAdapter;



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_function__ = __webpack_require__(115);

class Adapter {
    constructor(engine, camera, cameraUpdateDelay = 25) {
        this.engine = engine;
        this.camera = camera;
        this._cameraUpdateListener = Object(__WEBPACK_IMPORTED_MODULE_0__util_function__["a" /* debounce */])(this._onCameraUpdate.bind(this), cameraUpdateDelay);
        camera.onUpdate.addListener(this._cameraUpdateListener);
    }
    destroy() {
        this.camera.onUpdate.removeListener(this._cameraUpdateListener);
    }
    /**
     * Camera update handler, by default do nothing.
     */
    _onCameraUpdate() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Adapter;



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/**
 * Creates new function which execution is "debounced".
 */
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const later = () => {
            timeout = undefined;
            func.apply(this, args);
        };
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_scalar__ = __webpack_require__(12);

/**
 * @return `true` if the first param overlaps the second in tile hierarchy.
 */
function isParent(potentialParent, possibleChild) {
    const zoomDiff = possibleChild.zoom - potentialParent.zoom;
    return zoomDiff > 0 &&
        possibleChild.x >> zoomDiff == potentialParent.x &&
        possibleChild.y >> zoomDiff == potentialParent.y;
}
class TileCoordinateSystem {
    constructor(zoom) {
        this._zoom = Math.ceil(Object(__WEBPACK_IMPORTED_MODULE_0__math_scalar__["a" /* clamp */])(zoom, 0, 31));
        this._tileSize = 2 / (1 << this._zoom);
    }
    getZoom() {
        return this._zoom;
    }
    /**
     * @return Tile side length in units of the world coordinate system.
     */
    getTileSize() {
        return this._tileSize;
    }
    /**
     * @return Top left corner coordinates of the tile.
     */
    getTileOffset(tile) {
        return {
            x: this.getTileSize() * tile.x - 1,
            y: 1 - this.getTileSize() * tile.y
        };
    }
    toTileCoordinates(worldCoordinates) {
        return {
            x: (worldCoordinates.x + 1) / this._tileSize,
            y: (1 - worldCoordinates.y) / this._tileSize
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TileCoordinateSystem;



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computeVisibleTiles;
const TILE_0_0_0 = { x: 0, y: 0, zoom: 0 };
/**
 * Computes set of tiles visible through a camera. Tiles in the set are guaranteed
 * to be unique.
 *
 * FIXME(dmikis) The uniqueness guarantee is broken currently, but code that uses
 *      this function doesn't suffer from that.
 *
 * @param camera The camera.
 * @returns An iterator over visible tile items.
 */
function* computeVisibleTiles(camera) {
    const zoom = Math.round(camera.zoom);
    if (zoom === 0) {
        // The only tile on zoom 0 encompasses the whole world. Thus there's
        // little to no point computing that camera sees it: we can tell that
        // right away.
        yield TILE_0_0_0;
        return;
    }
    const tileCount = 1 << zoom;
    const tileIdxMask = tileCount - 1;
    // The idea behind the code below is quite simple: determine columns of the
    // tile grid that are visible to the camera, then for each column find
    // range of row indices that are visible.
    // Here's how we approach computing tile indices from world coordinates.
    // First, we transform world coordinates from [-1, 1] range to [0, 2],
    // dealing with inconsistency with Y axis direction in world and tile grid
    // coordinate system. Let's designate such a coordinate as C (for either X
    // or Y). Size of a tile is 2 / tileCount. Thus,
    //
    //      tileIdx = Math.floor(C / (2 / tileCount))
    //              = Math.floor(C * tileCount / 2)
    //
    const { minX, maxX, minY, maxY } = camera.getVisibleRegionBBox();
    const { wrapModeX, wrapModeY } = camera.options;
    const minTX = Math.floor((minX + 1) * tileCount / 2);
    const maxTX = Math.floor((maxX + 1) * tileCount / 2);
    const columnCount = maxTX - minTX + 1;
    // Arrays of indices of bottommost and topmost tiles correspondingly for
    // each column.
    // FIXME(dmikis) If number of columns is too large, we'll consume a lot of
    //      memory here. There's a method to do without the arrays, but it's a
    //      bit more complicated to implement.
    const minYs = new Array(columnCount);
    const maxYs = new Array(columnCount);
    // Common sense suggests that those indices can't be greater (less) than the
    // index of a tile row intersected by a line y = minY (y = maxY). Note that
    // maxY corresponds to a tile row with lesser index, not other way around.
    minYs.fill(Math.floor((1 - minY) * tileCount / 2));
    maxYs.fill(Math.floor((1 - maxY) * tileCount / 2));
    const visiblePolygon = camera.getVisibleRegion();
    const visiblePolygonLength = visiblePolygon.length;
    let prevX = visiblePolygon[visiblePolygonLength - 1].x + 1;
    let prevY = 1 - visiblePolygon[visiblePolygonLength - 1].y;
    let prevTX = Math.floor(prevX * tileCount / 2);
    let prevTY = Math.floor(prevY * tileCount / 2);
    // Iterate over edges of visible polygon of the camera to compute index of
    // topmost and bottommost tiles for each column.
    for (let i = 0; i < visiblePolygonLength; ++i) {
        const x = visiblePolygon[i].x + 1;
        const y = 1 - visiblePolygon[i].y;
        const tx = Math.floor(x * tileCount / 2);
        const ty = Math.floor(y * tileCount / 2);
        // For each edge we compute 4-connected line of tiles on the tile grid.
        // Length of a 4-connected line always equals Manhattan distance between
        // its ends. However, to avoid unnecessary computation, we omit last tile
        // for every edge. But, since the polygon is closed, we'll iterate over
        // all tiles intersected by edges anyway.
        const l = Math.abs(tx - prevTX) + Math.abs(ty - prevTY);
        const lx = x - prevX;
        const ly = y - prevY;
        const dtx = lx > 0 ? 1 : -1;
        const dty = ly > 0 ? 1 : -1;
        const a = 2 * dtx * ly;
        const b = -2 * dtx * lx;
        const c = dtx * tileCount * (lx * prevY - ly * prevX) + a * (~dtx >>> 31);
        for (let i = 0, tx = prevTX, ty = prevTY; i < l; ++i) {
            const intercept = a * tx + b * ty + c;
            // The math here is somewhat cumbersome to avoid divisions, but the
            // essence is that we try to check through which side the edge of
            // visible polygon exits the tile. Depending on that we "move" to
            // next tile in either vertical or horizontal direction.
            if (0 <= intercept && intercept <= -b) {
                tx += dtx;
            }
            else {
                ty += dty;
            }
            const yIdx = tx - minTX;
            if (maxYs[yIdx] < ty) {
                maxYs[yIdx] = ty;
            }
            if (minYs[yIdx] > ty) {
                minYs[yIdx] = ty;
            }
        }
        prevX = x;
        prevY = y;
        prevTX = tx;
        prevTY = ty;
    }
    // If the world is repeated along X axis, we need to "fold" the array of columns,
    // i.e. compute union of row intervals for columns tileCount indices apart.
    if (wrapModeX === 2 /* REPEAT */ && columnCount > tileCount) {
        for (let i = 0; i < tileCount; ++i) {
            for (let j = i + tileCount; j < columnCount; j += tileCount) {
                if (maxYs[i] < maxYs[j]) {
                    maxYs[i] = maxYs[j];
                }
                if (minYs[i] > minYs[j]) {
                    minYs[i] = minYs[j];
                }
            }
        }
    }
    // If the world is repeated along Y axis, we need to wrap indices in minYs
    // and maxYs arrays to [0, tileCount) interval.
    if (wrapModeY === 2 /* REPEAT */) {
        for (let i = 0; i < columnCount && i < tileCount; ++i) {
            const dy = maxYs[i] - minYs[i];
            // If there's more than tileCount rows between maxY and minY, then the
            // world is encompassed somewhere within visible region.
            if (dy > tileCount) {
                minYs[i] = 0;
                maxYs[i] = tileIdxMask;
            }
            else {
                const minY = minYs[i] &= tileIdxMask;
                maxYs[i] = minY + dy;
            }
        }
    }
    else {
        for (let i = 0; i < columnCount && i < tileCount; ++i) {
            minYs[i] = Math.max(minYs[i], 0);
            maxYs[i] = Math.min(maxYs[i], tileIdxMask);
        }
    }
    if (wrapModeX === 2 /* REPEAT */) {
        for (let i = 0; i < columnCount && i < tileCount; ++i) {
            const tx = (i + minTX) & tileIdxMask;
            for (let ty = minYs[i]; ty <= maxYs[i]; ++ty) {
                yield {
                    x: tx,
                    y: ty & tileIdxMask,
                    zoom
                };
            }
        }
    }
    else {
        for (let tx = Math.max(minTX, 0), txEnd = Math.min(maxTX, tileIdxMask); tx <= txEnd; ++tx) {
            const i = tx - minTX;
            for (let ty = minYs[i]; ty <= maxYs[i]; ++ty) {
                yield {
                    x: tx,
                    y: ty & tileIdxMask,
                    zoom
                };
            }
        }
    }
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__ = __webpack_require__(10);


/**
 * Writer of geometry data of icons.
 */
class IconBufferWriter extends __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__["b" /* default */] {
    constructor() {
        super(IconBufferWriter.ATTRIBUTE_MAPPING.vertexByteSize);
    }
    /**
     * Writes an icon to buffers.
     *
     * @param icon Icon to be written to buffer.
     * @param location Image location in atlas.
     * @param size Image size in atlas.
     * @param offset Offset of image points in CSS pixels.
     * @param pixelRatio Ratio of image size in CSS pixels to the size in atlas pixels.
     *
     * @returns Location of the icon data in buffers.
     */
    writeIcon(icon, location, size, offset, pixelRatio) {
        const top = offset.y;
        const bottom = offset.y + size.height * pixelRatio;
        const left = offset.x;
        const right = offset.x + size.width * pixelRatio;
        this.writeVertex(icon.position, left, bottom, location.minX, location.minY);
        this.writeVertex(icon.position, left, top, location.minX, location.maxY);
        this.writeVertex(icon.position, right, bottom, location.maxX, location.minY);
        this.writeVertex(icon.position, right, top, location.maxX, location.maxY);
        this.writeIndicesForContinuousStrip(4);
        return this.endMesh();
    }
    /**
     * Writes a vertex to the vertex buffer.
     *
     * @param position Position of the vertex in display coordinates.
     * @param uv UVs of the vertex.
     * @return Index of the written vertex.
     */
    writeVertex(position, displacementX, displacementY, uvX, uvY) {
        const vertexIdx = this.getCurrentVertexIdx();
        this._writeWorldCoordinate(position);
        this._writeHalfWords(displacementX, displacementY);
        this._writeHalfWords(uvX, uvY);
        return vertexIdx;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IconBufferWriter;

/** Description of how a writer stores vertex data. */
IconBufferWriter.ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 2,
            type: 5122 /* SHORT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ],
]);


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_icon_renderable_icon__ = __webpack_require__(121);


/**
 * API's point object representative. See PointObjects from tile.proto.
 */
class ApiPoint extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    /**
     * Constructs a new point object.
     *
     * @param memorySubChunk
     * @param styles
     * @param allocatedImage
     * @param imageAtlas
     * @param minZoom Minimal camera zoom the point should be still displayed on.
     *      If camera zoom's less than `minZoom` the point doesn't get rendered.
     */
    constructor(memorySubChunk, styles, allocatedImage, imageAtlas, minZoom) {
        super(styles);
        this._allocatedImage = allocatedImage;
        this.renderableIcon = new __WEBPACK_IMPORTED_MODULE_1__primitive_icon_renderable_icon__["a" /* default */](memorySubChunk, imageAtlas, minZoom);
        this._allocatedImage.retain();
    }
    /**
     * Update point's visibility according to the parameter.
     */
    onVisibilityChanged(_isVisible) {
        // TODO
    }
    /**
     * Update point's style according to the parameter.
     */
    onStyleChanged(_style) {
        // TODO
    }
    destroy() {
        super.destroy();
        this.renderableIcon.destroy();
        this._allocatedImage.release();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiPoint;



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Objects are styled using the concept of zoom slices ({@link ZoomSlice} in presentation.proto)
 * where styles are defined per each supported zoom range or invisible if no style specified.
 * This class implements this concept providing proper style according to zoom.
 */
class PrimitivePresentationClass {
    constructor(styles) {
        this._styles = styles;
    }
    /**
     * Returns style that corresponds to the zoom parameter or null if no style found.
     * When null is returned the object must be hidden.
     */
    getStyle(zoom) {
        zoom = Math.round(zoom);
        // TODO: consider using hashmap or something for styles look up
        for (const style of this._styles) {
            if (style.minZoom <= zoom && zoom <= style.maxZoom) {
                return style;
            }
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PrimitivePresentationClass;



/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_renderable_image__ = __webpack_require__(122);

class RenderableIcon extends __WEBPACK_IMPORTED_MODULE_0__image_renderable_image__["a" /* default */] {
    /**
     * Constructs a new renderable icon.
     *
     * @param memorySubChunk
     * @param atlas
     * @param minZoom Minimal camera zoom the icon should be still displayed on.
     *      If camera zoom's less than `minZoom` the icon doesn't get rendered.
     */
    constructor(memorySubChunk, atlas, minZoom) {
        super(memorySubChunk, atlas);
        this.minZoom = minZoom;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableIcon;



/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

class RenderableImage extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
    constructor(memorySubChunk, atlas) {
        super(memorySubChunk);
        this.atlas = atlas;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableImage;



/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ref_counted__ = __webpack_require__(16);

/**
 * Represents an allocated image. Allocated image is a shareable resource that should be resealed
 * when there are no clients use it. As it is not possible to rely on the GC, clients should
 * manually retain their required images and release them when they are not required anymore.
 */
class AllocatedImage extends __WEBPACK_IMPORTED_MODULE_0__util_ref_counted__["a" /* default */] {
    constructor(descriptor, bbox, atlas) {
        super();
        this.descriptor = descriptor;
        this.bbox = bbox;
        this.atlas = atlas;
    }
    destroy() {
        this.atlas.removeImage(this.descriptor);
    }
}
/* unused harmony export AllocatedImage */

/**
 * Manages allocation of images by id.
 */
class IdentifiedImageAtlasManager {
    constructor(imageAtlas) {
        this.imageAtlas = imageAtlas;
        this._locations = new Map();
    }
    get size() {
        return this._locations.size;
    }
    getImage(id, retain = false) {
        const imageLocation = this._locations.get(id);
        if (retain && imageLocation) {
            imageLocation.retain();
        }
        return imageLocation || null;
    }
    allocateImage(descriptor, image) {
        const location = this.imageAtlas.allocateImage(descriptor, image);
        if (location) {
            const image = new AllocatedImage(descriptor, location, this);
            this._locations.set(descriptor.id, image);
            return image;
        }
        return null;
    }
    removeImage(image) {
        const location = this._locations.get(image.id);
        if (location) {
            this.imageAtlas.removeImage(location.bbox);
            this._locations.delete(image.id);
        }
    }
    contains(id) {
        return this._locations.has(id);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdentifiedImageAtlasManager;



/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_polygon_renderable_polygon__ = __webpack_require__(125);


/**
 * API's polygon representative. See PolygonObjects from tile.proto.
 */
class ApiPolygon extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    constructor(memorySubChunk, styles, isOpaque) {
        super(styles);
        this.renderablePolygon = new __WEBPACK_IMPORTED_MODULE_1__primitive_polygon_renderable_polygon__["a" /* default */](memorySubChunk, isOpaque);
    }
    destroy() {
        this.renderablePolygon.destroy();
        super.destroy();
    }
    /**
     * Update polygon's visibility according to the parameter.
     */
    onVisibilityChanged(_isVisible) { }
    /**
     * Update polygon's style according to the parameter.
     */
    onStyleChanged(_style) { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiPolygon;



/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

/**
 * Allocated in GPU memory polygon.
 */
class RenderablePolygon extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
    constructor(memorySubChunk, isOpaque) {
        super(memorySubChunk);
        this.isOpaque = isOpaque;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderablePolygon;



/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_polyline_renderable_polyline__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive__ = __webpack_require__(6);


class ApiPolyline extends __WEBPACK_IMPORTED_MODULE_1__primitive__["a" /* default */] {
    constructor(memoryChunk, styles, isOpaque) {
        super(styles);
        this.renderablePolyline = new __WEBPACK_IMPORTED_MODULE_0__primitive_polyline_renderable_polyline__["a" /* default */](memoryChunk, isOpaque);
    }
    destroy() {
        this.renderablePolyline.destroy();
        super.destroy();
    }
    onVisibilityChanged(_isVisible) { }
    onStyleChanged(_style) { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiPolyline;



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_label_renderable_label__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primitive_billboard_rectangle_renderable_billboard_rectangle__ = __webpack_require__(129);



/**
 * Base class for API labels: point and curved ones.
 */
class ApiLabel extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    /**
     * Constructs a new label.
     *
     * @param memorySubChunk
     * @param minZoom Minimal camera zoom the label should be still displayed on.
     *      If camera zoom's less than `minZoom` the label doesn't get rendered.
     * @param styles
     * @param glyphAtlas
     * @param backgroundMemorySubChunk
     */
    constructor(memorySubChunk, minZoom, styles, glyphAtlas, backgroundMemorySubChunk) {
        super(styles);
        this.renderableLabel = new __WEBPACK_IMPORTED_MODULE_1__primitive_label_renderable_label__["a" /* default */](memorySubChunk, glyphAtlas, minZoom, backgroundMemorySubChunk ? new __WEBPACK_IMPORTED_MODULE_2__primitive_billboard_rectangle_renderable_billboard_rectangle__["a" /* default */](backgroundMemorySubChunk) : undefined);
    }
    destroy() {
        this.renderableLabel.destroy();
        super.destroy();
    }
    /**
     * Updates label's visibility.
     */
    onVisibilityChanged(_isVisible) {
        // TODO
    }
    /**
     * Updates label's style.
     */
    onStyleChanged(_style) {
        // TODO
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiLabel;



/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

/**
 * Allocated in GPU memory label.
 */
class RenderableLabel extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
    /**
     * Constructs a new renderable label.
     *
     * @param memorySubChunk
     * @param atlas
     * @param minZoom Minimal camera zoom the point should be still displayed on.
     *      If camera zoom's less than `minZoom` the point doesn't get rendered.
     * @param background
     */
    constructor(memorySubChunk, atlas, minZoom, background) {
        super(memorySubChunk);
        this.atlas = atlas;
        this.minZoom = minZoom;
        this.background = background;
    }
    destroy() {
        super.destroy();
        if (this.background) {
            this.background.destroy();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableLabel;



/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RenderableBillboardRectangle {
    constructor(memorySubChunk) {
        this.memorySubChunk = memorySubChunk;
    }
    destroy() {
        this.memorySubChunk.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableBillboardRectangle;



/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__billboard_image_provider__ = __webpack_require__(131);

/**
 * Image provider that gets images from specific API entry point.
 */
class ApiImageProvider extends __WEBPACK_IMPORTED_MODULE_0__billboard_image_provider__["a" /* ImageProvider */] {
    constructor(imageUrlTemplate) {
        super();
        this._imageUrlTemplate = imageUrlTemplate;
    }
    getImageUrl(id) {
        // API can return scaled images that allows us to request images according
        // to user's DPI and render them properly, non-integer numbers are accepted.
        return this._imageUrlTemplate
            .replace('{{id}}', id)
            .replace('{{scale}}', devicePixelRatio.toString());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiImageProvider;



/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Abstract image content provider, concrete implementations should specify the entry point in getImageUrl().
 */
class ImageProvider {
    /**
     * Gets image bitmap via an HTMLImageElement and a canvas.
     */
    getImage(id) {
        return new Promise((resolve, reject) => {
            const imageElement = new Image();
            imageElement.crossOrigin = 'anonymous';
            imageElement.onload = () => resolve(imageElement);
            imageElement.onerror = reject;
            imageElement.src = this.getImageUrl(id);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageProvider;



/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

/**
 * A general primitive that is best suitable for storing simple colored 3D models.
 */
class RenderableModel extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableModel;



/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_polyline_renderable_textured_polyline__ = __webpack_require__(134);


class TexturedPolyline extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    constructor(memoryChunk, styles, atlas, allocatedImage) {
        super(styles);
        this._allocatedImage = allocatedImage;
        this.renderablePolyline = new __WEBPACK_IMPORTED_MODULE_1__primitive_polyline_renderable_textured_polyline__["a" /* default */](memoryChunk, atlas);
        this._allocatedImage.retain();
    }
    onVisibilityChanged(_isVisible) { }
    onStyleChanged(_style) { }
    destroy() {
        super.destroy();
        this.renderablePolyline.destroy();
        this._allocatedImage.release();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TexturedPolyline;



/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_polyline__ = __webpack_require__(32);

class RenderableTexturedPolyline extends __WEBPACK_IMPORTED_MODULE_0__renderable_polyline__["a" /* default */] {
    constructor(memoryChunk, atlas) {
        super(memoryChunk, false);
        this.atlas = atlas;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableTexturedPolyline;



/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textured_polyline_geometry__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_gputypes__ = __webpack_require__(11);




/**
 * Writer of geometry data of polyline hulls.
 */
class TexturedPolylineBufferWriter extends __WEBPACK_IMPORTED_MODULE_1__util_buffer_writer__["b" /* default */] {
    constructor() {
        super(TexturedPolylineBufferWriter.ATTRIBUTE_MAPPING.vertexByteSize);
    }
    /**
     * Generates a hull for a polyline and writes it to the writer.
     *
     * @param polyline The polyline to be written.
     * @param width Thickness of the polyline.
     * @param worldToPxFactor Ratio of world coordinates to pixels.
     * @param imageLocation Image location in atlas.
     */
    writeTexturedPolyline(polyline, width, worldToPxFactor, imageLocation, zIndex) {
        Object(__WEBPACK_IMPORTED_MODULE_2__textured_polyline_geometry__["a" /* default */])(this, polyline.vertices, worldToPxFactor, imageLocation, width, Object(__WEBPACK_IMPORTED_MODULE_3__util_gputypes__["c" /* int24ToFloat */])(zIndex + 1));
        return this.endMesh();
    }
    /**
     * Writes a vertex to the vertex buffer.
     *
     * @param position Position of the vertex in world coordinates.
     * @param displacement Displacement vector, in most cases must be normalized, the width is considered in shaders.
     * @param width Thickness of the polyline.
     * @param patterWidth Width of the image that is repeated along the polyline.
     * @param length Length of the polyline for current vertex, needed to correctly calculate image uv x coordinate.
     * @return Index of the written vertex.
     */
    writeVertex(position, displacement, width, patterWidth, length, uv, zIndex) {
        const vertexIdx = this.getCurrentVertexIdx();
        this._writeWorldCoordinate(position);
        this._writeFloat32(displacement.x);
        this._writeFloat32(displacement.y);
        this._writeHalfWords(uv.x, uv.y);
        this._writeFloat32(zIndex);
        this._writeFloat32(width);
        this._writeHalfWords(patterWidth, length);
        return vertexIdx;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TexturedPolylineBufferWriter;

/** Description of how a writer stores vertex data. */
TexturedPolylineBufferWriter.ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ],
    [
        9 /* PRIORITY */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        11 /* AUX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        12 /* AUX1 */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ]
]);


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = writeTexturedPolylineGeometry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector2__ = __webpack_require__(1);

/**
 * Writes polyline image geometry (set of triangles that draw up a solid thick polyline) into a buffer writer.
 *
 * @param writer Output buffer writer.
 * @param polyline Polyline to be written.
 * @param worldToPxFactor Ratio of world coordinates to pixels.
 * @param imageLocation Image location in atlas.
 * @param width Thickness of the polyline.
 * @param color Color of the polyline.
 */
function writeTexturedPolylineGeometry(writer, polyline, worldToPxFactor, imageLocation, width, z) {
    const hWidth = width / 2;
    const patternWidth = imageLocation.maxX - imageLocation.minX;
    const segment = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
    const dir = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
    const prevDir = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
    const norm = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
    const normInv = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](0, 0);
    const uv = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["e" /* create */](imageLocation.minX, 0);
    let prevBottomRight = -1;
    let prevTopRight = -1;
    let length = 0;
    let prevLength = 0;
    for (let i = 1; i < polyline.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__math_vector2__["l" /* sub */](polyline[i], polyline[i - 1], segment);
        __WEBPACK_IMPORTED_MODULE_0__math_vector2__["j" /* normalize */](segment, dir);
        __WEBPACK_IMPORTED_MODULE_0__math_vector2__["k" /* rotate90 */](dir, norm);
        __WEBPACK_IMPORTED_MODULE_0__math_vector2__["i" /* muln */](norm, -1, normInv);
        // segment is written as a rectangle (two triangles)
        uv.y = imageLocation.minY;
        const topLeft = writer.writeVertex(polyline[i - 1], norm, hWidth, patternWidth, length, uv, z);
        uv.y = imageLocation.maxY;
        const bottomLeft = writer.writeVertex(polyline[i - 1], normInv, hWidth, patternWidth, length, uv, z);
        // update length of the polyline in pixels
        length += __WEBPACK_IMPORTED_MODULE_0__math_vector2__["h" /* length */](segment) / worldToPxFactor;
        uv.y = imageLocation.minY;
        const topRight = writer.writeVertex(polyline[i], norm, hWidth, patternWidth, length, uv, z);
        uv.y = imageLocation.maxY;
        const bottomRight = writer.writeVertex(polyline[i], normInv, hWidth, patternWidth, length, uv, z);
        // write line join that fills an empty space on corners
        if (1 < i && i < polyline.length) {
            uv.y = (imageLocation.maxY + imageLocation.minY) / 2;
            const joinPointIndex = writer.writeVertex(polyline[i - 1], __WEBPACK_IMPORTED_MODULE_0__math_vector2__["a" /* ZERO */], hWidth, patternWidth, prevLength, uv, z);
            // find out where the fracture of segments is located to create correct join with minimum overdraw
            const turnLeft = __WEBPACK_IMPORTED_MODULE_0__math_vector2__["f" /* crossZ */](prevDir, dir) > 0;
            if (turnLeft) {
                writer.writeIndices([
                    joinPointIndex, bottomLeft, prevBottomRight
                ]);
            }
            else {
                writer.writeIndices([
                    joinPointIndex, prevTopRight, topLeft
                ]);
            }
        }
        writer.writeIndices([
            topLeft, topRight, bottomLeft,
            topRight, bottomRight, bottomLeft
        ]);
        __WEBPACK_IMPORTED_MODULE_0__math_vector2__["d" /* copy */](dir, prevDir);
        prevBottomRight = bottomRight;
        prevTopRight = topRight;
        prevLength = length;
    }
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Manages allocation of requested images. The same images can be requested multiple times from different places,
 * this class takes over duplication of HTTP requests/atlas allocations providing simple async interface for
 * getting allocated images.
 */
class ImageManager {
    constructor(atlas, provider) {
        this._atlas = atlas;
        this._provider = provider;
        this._requests = new Map();
    }
    /**
     * Pay attention that resulted allocated image is "retained", so it must be released
     * once it is passed to a responsible client.
     */
    getImage(id) {
        const allocatedImage = this._atlas.getImage(id, true);
        if (allocatedImage) {
            return Promise.resolve(allocatedImage);
        }
        else {
            const request = this._requests.get(id);
            if (request) {
                request.then((allocatedImage) => allocatedImage && allocatedImage.retain());
                return request;
            }
            else {
                const request = this._provider
                    .getImage(id)
                    .then((image) => this._onImageReceived(id, image), () => this._onImageFailed(id));
                this._requests.set(id, request);
                return request;
            }
        }
    }
    _onImageReceived(id, image) {
        const allocatedImage = this._atlas.allocateImage({ id, width: image.width, height: image.height }, image);
        this._requests.delete(id);
        return allocatedImage;
    }
    _onImageFailed(id) {
        this._requests.delete(id);
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageManager;



/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_polygon_renderable_textured_polygon__ = __webpack_require__(139);


class ApiTexturedPolygon extends __WEBPACK_IMPORTED_MODULE_0__primitive__["a" /* default */] {
    constructor(memoryChunk, allocatedImage) {
        super([]);
        this._allocatedImage = allocatedImage;
        this.renderablePolygon = new __WEBPACK_IMPORTED_MODULE_1__primitive_polygon_renderable_textured_polygon__["a" /* default */](memoryChunk, allocatedImage.atlas.imageAtlas);
        this._allocatedImage.retain();
    }
    onVisibilityChanged(_isVisible) { }
    onStyleChanged(_style) { }
    destroy() {
        super.destroy();
        this.renderablePolygon.destroy();
        this._allocatedImage.release();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiTexturedPolygon;



/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__ = __webpack_require__(8);

class RenderableTexturedPolygon extends __WEBPACK_IMPORTED_MODULE_0__renderable_primitive__["a" /* default */] {
    constructor(memoryChunk, atlas) {
        super(memoryChunk);
        this.atlas = atlas;
    }
    destroy() {
        this.memorySubChunk.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderableTexturedPolygon;



/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_buffer_rewriter__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textured_polygon_attribute_mapping__ = __webpack_require__(35);


class TexturedPolygonBufferRewriter extends __WEBPACK_IMPORTED_MODULE_0__util_buffer_rewriter__["a" /* default */] {
    constructor(buffers) {
        super(__WEBPACK_IMPORTED_MODULE_1__textured_polygon_attribute_mapping__["a" /* TEXTURED_POLYGON_ATTRIBUTE_MAPPING */], buffers);
    }
    /**
     * @param location Location of the polygon in memory.
     * @param imageLocation Location of the pattern in atlas.
     * @param imageScale How world coordinates relate to the image size.
     */
    rewriteUV(location, imageLocation, imageScale) {
        const uvOffset = this._getAttribOffset(4 /* UV */);
        const scaleOffset = this._getAttribOffset(11 /* AUX */);
        this._forEachVertex(location, (writer) => {
            writer.writeHalfWords(uvOffset, imageLocation.minX, imageLocation.minY);
            writer.writeHalfWords(uvOffset + 1, imageLocation.maxX - imageLocation.minX, imageLocation.maxY - imageLocation.minY);
            writer.writeFloat32(scaleOffset, imageScale);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TexturedPolygonBufferRewriter;



/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer_writer__ = __webpack_require__(10);

/**
 * Class that is exposed as an interface for writing to a specific vertex attribute.
 */
class VertexWriter {
    constructor(vertexBuffer) {
        this._vertexBuffer = new Uint32Array(vertexBuffer.buffer, 0, vertexBuffer.length);
        this._vertexBufferFloat32View = new Float32Array(vertexBuffer.buffer, 0, vertexBuffer.length);
    }
    /**
     * Writes float attribute into specific position in buffer.
     *
     * @param attribOffset Offset of an attribute in words (4 bytes), get it from BufferRewriter#_getAttribOffset().
     * @param value Value to be written.
     */
    writeFloat32(attribOffset, value) {
        this._vertexBufferFloat32View[this.vertexOffset + attribOffset] = value;
    }
    /**
     * Writes a word attribute into specific position in buffer.
     *
     * @param attribOffset Offset of an attribute in words (4 bytes), get it from BufferRewriter#_getAttribOffset().
     * @param value Value to be written.
     */
    writeWord(attribOffset, value) {
        this._vertexBuffer[this.vertexOffset + attribOffset] = value;
    }
    /**
     * Writes two half word attribute values into specific position in buffer.
     *
     * @param attribOffset Offset of an attribute in words (4 bytes), get it from BufferRewriter#_getAttribOffset().
     * @param value Value to be written.
     */
    writeHalfWords(attribOffset, v1, v2) {
        this.writeWord(attribOffset, v2 << 16 | v1 & 0xffff);
    }
}
/**
 * Provides some utils for rewriting vertex attribute values, see VertexWriter and tests for some tips of how to do it.
 * TODO: consider supporting of separate buffers for different attributes, that will make this class less useful
 */
class BufferRewriter {
    constructor(attribMapping, buffers) {
        this._attribMapping = attribMapping;
        this._buffers = buffers;
    }
    /**
     * Walks over all vertices exposing VertexWriter for each one by calling the handler argument.
     */
    _forEachVertex(location, handler) {
        const vertexWriter = new VertexWriter(this._buffers[location.bufferIndex].vertexBuffer);
        const vertexByteSize = this._attribMapping.vertexByteSize;
        for (let i = 0; i < location.vertexByteLength; i += vertexByteSize) {
            vertexWriter.vertexOffset = (location.vertexByteOffset + i) / __WEBPACK_IMPORTED_MODULE_0__buffer_writer__["a" /* WORD_BYTE_SIZE */];
            handler(vertexWriter);
        }
    }
    /**
     * @returns Offset in words (4 bytes) of specific attribute in a vertex (format is defined by AttributeMapping).
     */
    _getAttribOffset(attrib) {
        const attribPointer = this._attribMapping.get(attrib);
        return attribPointer ? attribPointer.offset / __WEBPACK_IMPORTED_MODULE_0__buffer_writer__["a" /* WORD_BYTE_SIZE */] : -1;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BufferRewriter;



/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/** Description of how a writer stores vertex data. */
const BILLBOARD_RECTANGLE_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        2 /* ID */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5122 /* SHORT */,
            normalized: true
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        11 /* AUX */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = BILLBOARD_RECTANGLE_ATTRIBUTE_MAPPING;



/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/** Description of how a writer stores vertex data. */
const POINT_LABEL_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        2 /* ID */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        8 /* OUTLINE_COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        9 /* PRIORITY */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        11 /* AUX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = POINT_LABEL_ATTRIBUTE_MAPPING;



/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);

/** Description of how a writer stores vertex data. */
const CURVED_LABEL_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */]([
    [
        2 /* ID */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        0 /* POSITION_HIGH */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        1 /* POSITION_LOW */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: true
        }
    ],
    [
        6 /* DISPLACEMENT */,
        {
            size: 3,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        4 /* UV */,
        {
            size: 2,
            type: 5123 /* UNSIGNED_SHORT */,
            normalized: false
        }
    ],
    [
        7 /* COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        8 /* OUTLINE_COLOR */,
        {
            size: 4,
            type: 5121 /* UNSIGNED_BYTE */,
            normalized: true
        }
    ],
    [
        9 /* PRIORITY */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        12 /* AUX1 */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        13 /* AUX2 */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        14 /* AUX3 */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        15 /* AUX4 */,
        {
            size: 2,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ],
    [
        11 /* AUX */,
        {
            size: 1,
            type: 5126 /* FLOAT */,
            normalized: false
        }
    ]
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = CURVED_LABEL_ATTRIBUTE_MAPPING;



/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyline_attribute_mapping__ = __webpack_require__(37);


/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
const TRANSPARENT_POLYLINE_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */](__WEBPACK_IMPORTED_MODULE_1__polyline_attribute_mapping__["a" /* POLYLINE_ATTRIBUTE_MAPPING */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = TRANSPARENT_POLYLINE_ATTRIBUTE_MAPPING;



/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_worker__ = __webpack_require__(147);

class TileProviderWorkerClient extends __WEBPACK_IMPORTED_MODULE_0__util_worker__["a" /* WebWorkerClient */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TileProviderWorkerClient;



/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export messageIs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_emitter__ = __webpack_require__(4);
/**
 * Base interface for webworker messages, both incoming and outgoing ones.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Transferable
 */

const MESSAGE_BATCH_MAX_SIZE = 50;
const FLUSH_TIMEOUT = 50;
// each subsequent message debounces postMessage call, that can lead to infinite delay, this const limits it
const MAX_FLUSH_TIMEOUT = 250;
/**
 * Checks message type with type guarding. It gives a little bit more elegant alternative
 * to tagged type unions providing the same type safety.
 *
 * @param message to be checked
 * @param type the value of the "type" property
 * @return {boolean}
 */
function messageIs(message, type) {
    return message.type === type;
}
/**
 * Base class for both sides of a webworker: its implementation (separate js that is run in a worker thread) and
 * a controller for the main thread. They have similar mechanism of sending/receiving messages that is implement here.
 */
class WebWorkerCommunicator {
    constructor(addressee) {
        this._addressee = addressee;
        this._events = new __WEBPACK_IMPORTED_MODULE_0__event_emitter__["a" /* EventEmitter */]();
        this._listeners = new Map();
        this._transferableExtractors = new Map();
        this._messages = [];
        this._transferables = [];
        this._timeoutHandle = 0;
        this._flushMessagesBinded = this._flushMessages.bind(this);
    }
    setTransferableExtractor(type, extractor) {
        this._transferableExtractors.set(type, extractor);
    }
    /**
     * Send a message to the opposite side of the web worker communication channel.
     * Messages are batched by delaying postMessage call to group messages that come during this delay and minimize
     * the number of interprocess communications that badly affect performance.
     *
     * @param message Message to be sent.
     * @param urgency IMMEDIATE forces message to be sent immediately (synchronous call) with no batching delay,
     *                DEFAULT debounces sending for another FLUSH_TIMEOUT.
     */
    sendMessage(message, urgency = 0 /* DEFAULT */) {
        const transferableExtractor = this._transferableExtractors.get(message.type);
        const transferables = transferableExtractor ? transferableExtractor(message) : undefined;
        const isFirstMessageInBatch = (this._messages.length === 0);
        if (isFirstMessageInBatch) {
            this._firstMessageTime = performance.now();
        }
        // Send messages asynchronously packing them into one message.
        // We don't want to abuse the web worker communication channel and
        // send messages asynchronously in short period of time or many messages synchronously.
        this._messages.push(message);
        if (transferables) {
            this._transferables.concat(transferables);
        }
        clearTimeout(this._timeoutHandle);
        if (this._messages.length > MESSAGE_BATCH_MAX_SIZE ||
            urgency === 1 /* IMMEDIATE */ ||
            (!isFirstMessageInBatch && (performance.now() - this._firstMessageTime) > MAX_FLUSH_TIMEOUT)) {
            this._flushMessages();
        }
        else {
            this._timeoutHandle = setTimeout(this._flushMessagesBinded, FLUSH_TIMEOUT);
        }
    }
    /**
     * Sends request message to/from worker as promise, the other side can respond and the promise is resolved.
     * Request/response is synchronized by the requestId field.
     */
    request(request, urgency) {
        return new Promise((resolve) => {
            request.requestId = (Date.now() << 16) | (0x10000 * Math.random());
            const listener = (message) => {
                if (messageIs(message, request.responseType) && message.requestId === request.requestId) {
                    resolve(message);
                    this.off(listener);
                }
            };
            this._events.addListener(listener);
            this.sendMessage(request, urgency);
        });
    }
    /**
     * Responds to provided request.
     */
    respond(request, response, urgency) {
        response.requestId = request.requestId;
        this.sendMessage(response, urgency);
    }
    /**
     * Sets a listener to specific type of incoming messages.
     */
    on(type, listener) {
        const typeSafeListener = (message) => {
            if (messageIs(message, type)) {
                listener(message);
            }
        };
        this._listeners.set(listener, typeSafeListener);
        this._events.addListener(typeSafeListener);
    }
    /**
     * Removes incoming messages listener.
     */
    off(listener) {
        const typeSafeListener = this._listeners.get(listener);
        if (typeSafeListener) {
            this._events.removeListener(typeSafeListener);
        }
    }
    /**
     * Starts listening for incoming messages.
     */
    listen() {
        this._addressee.onmessage = ({ data: messages }) => {
            for (const message of messages) {
                this.onMessage(message);
            }
        };
    }
    /**
     * Handler of incoming messages.
     */
    onMessage(message) {
        this._events.fire(message);
    }
    _flushMessages() {
        this._addressee.postMessage(this._messages, this._transferables);
        this._messages.length = 0;
        this._transferables.length = 0;
    }
}
/* unused harmony export WebWorkerCommunicator */

/**
 * Base class for a webworker controller for the main thread code.
 * It also wraps creation of a native Worker.
 */
class WebWorkerClient extends WebWorkerCommunicator {
    /**
     * @param url URL of webworker's deployed js file
     */
    constructor(url) {
        const worker = new Worker(url);
        super(worker);
        this._worker = worker;
        this.listen();
    }
    destroy() {
        this._worker.terminate();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WebWorkerClient;

/**
 * Base class for a webworker thread implementation. Concrete class should be the entry point for a webworker js build:
 *     new ConcreteWebWorkerImplementation(<DedicatedWorkerGlobalScope>self).run();
 */
class WebWorkerImplementation extends WebWorkerCommunicator {
    run() {
        this.listen();
    }
}
/* unused harmony export WebWorkerImplementation */



/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractTransferables;
/**
 * Extract ArrayBuffers (that are tansferable) from pages.
 */
function extractTransferables(pages, output) {
    for (const page of pages) {
        output.push(page.vertexBuffer.buffer, page.indexBuffer.buffer);
    }
}


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polygon_attribute_mapping__ = __webpack_require__(36);


/**
 * Description of how attributes of vertices are packed into a vertex buffer.
 */
const TRANSPARENT_POLYGON_ATTRIBUTE_MAPPING = new __WEBPACK_IMPORTED_MODULE_0__render_attrib_mapping__["a" /* AttributeMapping */](__WEBPACK_IMPORTED_MODULE_1__polygon_attribute_mapping__["a" /* POLYGON_ATTRIBUTE_MAPPING */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = TRANSPARENT_POLYGON_ATTRIBUTE_MAPPING;



/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_model__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__worker_tile_provider_worker_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__primitive_model_model_buffer_writer__ = __webpack_require__(34);




const EMPTY_LIST = [];
class ScenePrimitiveManager {
    constructor(extract, append = () => { }, remove = () => { }) {
        this._extract = extract;
        this._append = append;
        this._remove = remove;
    }
    /**
     * This method specifies the order in which tiles are replaced: firstly remove old tiles and then add new ones.
     * This order is preferable because it reduces (potentially) fragmentation and releases limited resources decreasing
     * the chances (ah, snap) of corresponding errors.
     */
    updateScene(scene, camera, dataToShow, dataToRemove) {
        this._removeFromScene(scene, dataToRemove);
        this._addToScene(scene, camera, dataToShow);
    }
    destroy(data) {
        for (const primitive of this._extract(data) || EMPTY_LIST) {
            this._destroyPrimitive(primitive);
        }
    }
    _addToScene(scene, camera, dataToShow) {
        for (const data of dataToShow) {
            for (const primitive of this._extract(data) || EMPTY_LIST) {
                this._addPrimitive(scene, camera, primitive);
            }
        }
    }
    _removeFromScene(scene, dataToHide) {
        for (const data of dataToHide) {
            for (const primitive of this._extract(data) || EMPTY_LIST) {
                this._removePrimitive(scene, primitive);
            }
        }
    }
    _addPrimitive(scene, camera, primitive) {
        this._append(scene, primitive);
        primitive.setZoom(camera.zoom);
    }
    _removePrimitive(scene, primitive) {
        this._remove(scene, primitive);
    }
    _destroyPrimitive(primitive) {
        primitive.destroy();
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ScenePrimitiveManager;

/**
 * Special primitive manager that monitors polygons with external models, requests these models, checks
 * their visibility and destroy them when no references are remaining.
 */
class ExternalMeshScenePrimitiveManager extends ScenePrimitiveManager {
    constructor(renderLoop, geometryProvider, memoryManager) {
        super((data) => data.externalMeshes);
        this._renderLoop = renderLoop;
        this._tileProvider = geometryProvider;
        this._memoryManager = memoryManager;
        this._externalMeshes = new Map();
    }
    /**
     * It is important to make sure new tiles are added first and then old ones are removed, since these references are
     * monitored to know when to destroy externally requested models. And if tiles are removed first it is possible to
     * reset all the references and destroy the model while it can be requested right away by new tiles to show,
     * causing unnecessary model request/parsing/allocation.
     */
    updateScene(scene, camera, dataToShow, dataToRemove) {
        this._addToScene(scene, camera, dataToShow);
        this._removeFromScene(scene, dataToRemove);
    }
    _addPrimitive(scene, _camera, primitive) {
        const id = this._getId(primitive.externalMesh);
        let external = this._externalMeshes.get(id);
        if (!external) {
            external = {
                polygons: new Set(),
                visiblePolygons: new Set(),
                isVisible: false
            };
            this._externalMeshes.set(id, external);
            this._tileProvider.request({
                type: __WEBPACK_IMPORTED_MODULE_1__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].MESH_REQUEST,
                responseType: __WEBPACK_IMPORTED_MODULE_1__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].MESH_RESPONSE,
                mesh: primitive.externalMesh,
                styles: primitive.styles
            }).then((response) => {
                if (!this._externalMeshes.get(id)) {
                    return;
                }
                const location = response.location;
                const memoryChunks = response.pages.map((page) => this._memoryManager.allocate(page.vertexBuffer, page.indexBuffer, __WEBPACK_IMPORTED_MODULE_3__primitive_model_model_buffer_writer__["a" /* default */].ATTRIBUTE_MAPPING));
                external.mesh = new __WEBPACK_IMPORTED_MODULE_0__primitive_model__["b" /* default */]([], new __WEBPACK_IMPORTED_MODULE_2__render_memory_sub_chunk__["a" /* default */](memoryChunks[location.bufferIndex], location));
                memoryChunks.forEach((chunk) => chunk.release());
                this._showExternal(scene, external);
            });
        }
        external.visiblePolygons.add(primitive);
        external.polygons.add(primitive);
        this._showExternal(scene, external);
    }
    _removePrimitive(scene, primitive) {
        const external = this._externalMeshes.get(this._getId(primitive.externalMesh));
        if (external) {
            external.visiblePolygons.delete(primitive);
            this._hideExternal(scene, external);
        }
    }
    _destroyPrimitive(primitive) {
        const id = this._getId(primitive.externalMesh);
        const external = this._externalMeshes.get(id);
        if (external) {
            external.polygons.delete(primitive);
            if (external.polygons.size === 0) {
                primitive.destroy();
                if (external.mesh) {
                    external.mesh.destroy();
                }
                this._externalMeshes.delete(id);
                // if no mesh yet returned cancel request
                if (!external.mesh) {
                    this._tileProvider.sendMessage({
                        type: __WEBPACK_IMPORTED_MODULE_1__worker_tile_provider_worker_messages__["a" /* TileProviderMessageType */].MESH_REQUEST_CANCEL,
                        mesh: primitive.externalMesh
                    });
                }
            }
        }
    }
    _showExternal(scene, external) {
        if (!external.isVisible && external.visiblePolygons.size > 0 && external.mesh) {
            scene.addModel(external.mesh.renderableModel);
            external.isVisible = true;
            this._renderLoop.update();
        }
    }
    _hideExternal(scene, external) {
        if (external.isVisible && external.visiblePolygons.size === 0 && external.mesh) {
            scene.removeModel(external.mesh.renderableModel);
            external.isVisible = false;
        }
    }
    _getId(mesh) {
        return mesh.objectId + mesh.meshId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ExternalMeshScenePrimitiveManager;



/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MAX_DEQUEUE_TIMEOUT = 100; // ms
// TODO: remove this shim when all supported browsers implement it
const SHIMMED_PROCESSING_DURATION_MS = 25;
window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout;
window.requestIdleCallback = window.requestIdleCallback || function (handler) {
    const startTime = performance.now();
    return setTimeout(() => {
        handler({
            didTimeout: false,
            timeRemaining: () => Math.max(0, SHIMMED_PROCESSING_DURATION_MS - (performance.now() - startTime))
        });
    });
};
/**
 * It is a task queue. Tasks are dequeued during idle period.
 */
class IdleTaskQueue {
    constructor() {
        this._queue = [];
        this._dequeueIdleHandle = 0;
    }
    destroy() {
        cancelIdleCallback(this._dequeueIdleHandle);
    }
    /**
     * Enqueues a task to the queue.
     *
     * @param task The task.
     */
    enqueue(execute) {
        this._queue.push(execute);
        this._run();
    }
    _dequeue(deadline) {
        while ((deadline.didTimeout || deadline.timeRemaining() > 0) && this._queue.length) {
            const execute = this._queue.shift();
            execute();
        }
        this._dequeueIdleHandle = 0;
        if (this._queue.length) {
            this._run();
        }
    }
    _run() {
        if (!this._dequeueIdleHandle) {
            this._dequeueIdleHandle = requestIdleCallback((deadline) => {
                this._dequeue(deadline);
            }, { timeout: MAX_DEQUEUE_TIMEOUT });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdleTaskQueue;



/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = renderCameraState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_util_delegator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__ = __webpack_require__(1);


class MouseDragController extends __WEBPACK_IMPORTED_MODULE_0__src_util_delegator__["a" /* DelegatorBase */] {
    constructor(target) {
        super();
        this._target = target;
        this._pressedButton = -1 /* NONE */;
        this._prevMouseCoords = __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["e" /* create */](0, 0);
        target.addEventListener('mousedown', this);
        target.addEventListener('click', this);
        target.addEventListener('contextmenu', this);
    }
    handleEvent(e) {
        switch (e.type) {
            case 'click':
            case 'contextmenu':
                e.preventDefault();
                break;
            case 'mousedown':
                if (this._pressedButton === -1 /* NONE */) {
                    this._pressedButton = e.button;
                    this._prevMouseCoords.x = e.clientX;
                    this._prevMouseCoords.y = e.clientY;
                    document.body.addEventListener('mousemove', this);
                    document.body.addEventListener('mouseup', this);
                }
                e.preventDefault();
                break;
            case 'mousemove':
                if (this._delegate === null) {
                    break;
                }
                const mouseCoords = __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["e" /* create */](e.clientX, e.clientY);
                const delta = __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["l" /* sub */](mouseCoords, this._prevMouseCoords);
                switch (this._pressedButton) {
                    case 0 /* LEFT */:
                        this._delegate.onLeftButtonDrag(delta);
                        break;
                    case 1 /* MIDDLE */:
                        this._delegate.onMiddleButtonDrag(delta);
                        break;
                    case 2 /* RIGHT */:
                        this._delegate.onRightButtonDrag(delta);
                        break;
                }
                __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["d" /* copy */](mouseCoords, this._prevMouseCoords);
                e.preventDefault();
                break;
            case 'mouseup':
                if (this._pressedButton === e.button) {
                    document.body.removeEventListener('mouseup', this);
                    document.body.removeEventListener('mousemove', this);
                    this._pressedButton = -1 /* NONE */;
                }
                e.preventDefault();
                break;
        }
    }
    destroy() {
        this._target.removeEventListener('contextmenu', this);
        this._target.removeEventListener('click', this);
        this._target.removeEventListener('mousedown', this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = MouseDragController;

class ScrollZoomController extends __WEBPACK_IMPORTED_MODULE_0__src_util_delegator__["a" /* DelegatorBase */] {
    constructor(target) {
        super();
        this._target = target;
        target.addEventListener('wheel', this);
    }
    handleEvent(e) {
        const delegate = this._delegate;
        if (!delegate) {
            return;
        }
        if (e.deltaY < 0) {
            delegate.onScrollIn();
        }
        else {
            delegate.onScrollOut();
        }
        e.preventDefault();
    }
    destroy() {
        this._target.removeEventListener('wheel', this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ScrollZoomController;

const ZOOM_STEP = 0.1;
const TILT_AZIMUTH_FACTOR = Math.PI / 1024;
class CameraMouseController {
    constructor(canvas, camera) {
        this._camera = camera;
        this._canvasSize = __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["e" /* create */](canvas.width, canvas.height);
        this.dragFactor = 1;
    }
    onLeftButtonDrag(delta) {
        // That's not exact, but good enough for now.
        __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["g" /* divv */](delta, this._canvasSize, delta);
        const camera = this._camera;
        __WEBPACK_IMPORTED_MODULE_1__src_math_vector2__["i" /* muln */](delta, this.dragFactor * camera.screenSize.height * Math.pow(2, -camera.zoom) /
            (Math.tan(0.5 * camera.options.fov) * 64), delta);
        const center = this._camera.center;
        center.x -= delta.x;
        center.y += delta.y;
        this._camera.setDirty();
    }
    onMiddleButtonDrag() { }
    onRightButtonDrag(delta) {
        const camera = this._camera;
        camera.tilt += delta.y * TILT_AZIMUTH_FACTOR;
        camera.azimuth += delta.x * TILT_AZIMUTH_FACTOR;
        this._camera.setDirty();
    }
    onScrollIn() {
        this._camera.zoom += ZOOM_STEP;
        this._camera.setDirty();
    }
    onScrollOut() {
        this._camera.zoom -= ZOOM_STEP;
        this._camera.setDirty();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraMouseController;

const cameraStateElement = document.querySelector('#camera_state');
const cameraStateText = cameraStateElement && cameraStateElement.firstChild;
function renderCameraState(camera) {
    const { center: { x, y }, zoom, tilt, azimuth } = camera;
    cameraStateText.replaceData(0, cameraStateText.length, `center: (${x.toFixed(8)},${y.toFixed(8)}); zoom: ${zoom.toFixed(4)}; ` +
        `tilt: ${tilt.toFixed(4)}; azimuth: ${azimuth.toFixed(4)}`);
}


/***/ })
/******/ ]);