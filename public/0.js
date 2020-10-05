(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/progressbar.js/src/circle.js":
/*!***************************************************!*\
  !*** ./node_modules/progressbar.js/src/circle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Circle shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Circle = function Circle(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m 0,-{radius}' +
        ' a {radius},{radius} 0 1 1 0,{2radius}' +
        ' a {radius},{radius} 0 1 1 0,-{2radius}';

    this.containerAspectRatio = 1;

    Shape.apply(this, arguments);
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
        widthOfWider = opts.trailWidth;
    }

    var r = 50 - widthOfWider / 2;

    return utils.render(this._pathTemplate, {
        radius: r,
        '2radius': r * 2
    });
};

Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Circle;


/***/ }),

/***/ "./node_modules/progressbar.js/src/line.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/line.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Line shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Line = function Line(container, options) {
    this._pathTemplate = 'M 0,{center} L 100,{center}';
    Shape.apply(this, arguments);
};

Line.prototype = new Shape();
Line.prototype.constructor = Line;

Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
    svg.setAttribute('preserveAspectRatio', 'none');
};

Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};

Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Line;


/***/ }),

/***/ "./node_modules/progressbar.js/src/main.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    // Higher level API, different shaped progress bars
    Line: __webpack_require__(/*! ./line */ "./node_modules/progressbar.js/src/line.js"),
    Circle: __webpack_require__(/*! ./circle */ "./node_modules/progressbar.js/src/circle.js"),
    SemiCircle: __webpack_require__(/*! ./semicircle */ "./node_modules/progressbar.js/src/semicircle.js"),
    Square: __webpack_require__(/*! ./square */ "./node_modules/progressbar.js/src/square.js"),

    // Lower level API to use any SVG path
    Path: __webpack_require__(/*! ./path */ "./node_modules/progressbar.js/src/path.js"),

    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js"),

    // Internal utils, undocumented.
    utils: __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js")
};


/***/ }),

/***/ "./node_modules/progressbar.js/src/path.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/path.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Lower level API to animate any kind of svg path

var shifty = __webpack_require__(/*! shifty */ "./node_modules/shifty/dist/shifty.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Tweenable = shifty.Tweenable;

var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};

var Path = function Path(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Default parameters for animation
    opts = utils.extend({
        delay: 0,
        duration: 800,
        easing: 'linear',
        from: {},
        to: {},
        step: function() {}
    }, opts);

    var element;
    if (utils.isString(path)) {
        element = document.querySelector(path);
    } else {
        element = path;
    }

    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;

    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + ' ' + length;
    this.set(0);
};

Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();

    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};

Path.prototype.set = function set(progress) {
    this.stop();

    this.path.style.strokeDashoffset = this._progressToOffset(progress);

    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};

Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};

// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {};

    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {};
    }

    var passedOpts = utils.extend({}, opts);

    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({}, this._opts);
    opts = utils.extend(defaultOpts, opts);

    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

    this.stop();

    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();

    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);

    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({ offset: offset }, values.from),
        to: utils.extend({ offset: newOffset }, values.to),
        duration: opts.duration,
        delay: opts.delay,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        }
    }).then(function(state) {
        if (utils.isFunction(cb)) {
            cb();
        }
    });
};

Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
};

Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};

// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) {
        return {
            from: opts.from,
            to: opts.to
        };
    }

    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};

// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};

// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
};

Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};

Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
    }

    return easing;
};

module.exports = Path;


/***/ }),

/***/ "./node_modules/progressbar.js/src/semicircle.js":
/*!*******************************************************!*\
  !*** ./node_modules/progressbar.js/src/semicircle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Semi-SemiCircle shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var Circle = __webpack_require__(/*! ./circle */ "./node_modules/progressbar.js/src/circle.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var SemiCircle = function SemiCircle(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m -{radius},0' +
        ' a {radius},{radius} 0 1 1 {2radius},0';

    this.containerAspectRatio = 2;

    Shape.apply(this, arguments);
};

SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;

SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 50');
};

SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
    opts,
    container,
    textContainer
) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = 'auto';
        textContainer.style.bottom = '0';

        if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
        } else {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
        }
    }
};

// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;

module.exports = SemiCircle;


/***/ }),

/***/ "./node_modules/progressbar.js/src/shape.js":
/*!**************************************************!*\
  !*** ./node_modules/progressbar.js/src/shape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Base object for different progress bar shapes

var Path = __webpack_require__(/*! ./path */ "./node_modules/progressbar.js/src/path.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var DESTROYED_ERROR = 'Object is destroyed';

var Shape = function Shape(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) {
        return;
    }

    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: '#555',
        strokeWidth: 1.0,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: 'progressbar-text'
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        warnings: false
    }, opts, true);  // Use recursive extend

    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
        this._opts.svgStyle = opts.svgStyle;
    }
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
        this._opts.text.style = opts.text.style;
    }

    var svgView = this._createSvgView(this._opts);

    var element;
    if (utils.isString(container)) {
        element = document.querySelector(container);
    } else {
        element = container;
    }

    if (!element) {
        throw new Error('Container does not exist: ' + container);
    }

    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) {
        this._warnContainerAspectRatio(this._container);
    }

    if (this._opts.svgStyle) {
        utils.setStyles(svgView.svg, this._opts.svgStyle);
    }

    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;

    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);

    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
        this.setText(this._opts.text.value);
    }
};

Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.animate(progress, opts, cb);
};

Shape.prototype.stop = function stop() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) {
        return;
    }

    this._progressPath.stop();
};

Shape.prototype.pause = function pause() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return;
    }

    if (!this._progressPath._tweenable) {
        // It seems that we can't pause this
        return;
    }

    this._progressPath._tweenable.pause();
};

Shape.prototype.resume = function resume() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return;
    }

    if (!this._progressPath._tweenable) {
        // It seems that we can't resume this
        return;
    }

    this._progressPath._tweenable.resume();
};

Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;

    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};

Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.set(progress);
};

Shape.prototype.value = function value() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return 0;
    }

    return this._progressPath.value();
};

Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }

    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else {
        this.text.innerHTML = newText;
    }
};

Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._initializeSvg(svg, opts);

    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }

    var path = this._createPath(opts);
    svg.appendChild(path);

    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};

Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 100');
};

Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};

Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);

    // Prevent modifying original
    var newOpts = utils.extend({}, opts);

    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) {
        newOpts.trailColor = '#eee';
    }
    if (!newOpts.trailWidth) {
        newOpts.trailWidth = newOpts.strokeWidth;
    }

    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;

    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;

    return this._createPathElement(pathString, newOpts);
};

Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    path.setAttribute('stroke', opts.color);
    path.setAttribute('stroke-width', opts.strokeWidth);

    if (opts.fill) {
        path.setAttribute('fill', opts.fill);
    } else {
        path.setAttribute('fill-opacity', '0');
    }

    return path;
};

Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement('div');
    textContainer.className = opts.text.className;

    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) {
            container.style.position = 'relative';
        }

        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) {
            textContainer.style.color = opts.color;
        }
    }

    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};

// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
    // By default, no-op
    // Custom shapes should respect API options, such as text.style
};

Shape.prototype._pathString = function _pathString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._trailString = function _trailString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) {
        return;
    }

    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn(
            'Incorrect aspect ratio of container',
            '#' + container.id,
            'detected:',
            computedStyle.getPropertyValue('width') + '(width)',
            '/',
            computedStyle.getPropertyValue('height') + '(height)',
            '=',
            width / height
        );

        console.warn(
            'Aspect ratio of should be',
            this.containerAspectRatio
        );
    }
};

module.exports = Shape;


/***/ }),

/***/ "./node_modules/progressbar.js/src/square.js":
/*!***************************************************!*\
  !*** ./node_modules/progressbar.js/src/square.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Square shaped progress bar
// Note: Square is not core part of API anymore. It's left here
//       for reference. square is not included to the progressbar
//       build anymore

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Square = function Square(container, options) {
    this._pathTemplate =
        'M 0,{halfOfStrokeWidth}' +
        ' L {width},{halfOfStrokeWidth}' +
        ' L {width},{width}' +
        ' L {halfOfStrokeWidth},{width}' +
        ' L {halfOfStrokeWidth},{strokeWidth}';

    this._trailTemplate =
        'M {startMargin},{halfOfStrokeWidth}' +
        ' L {width},{halfOfStrokeWidth}' +
        ' L {width},{width}' +
        ' L {halfOfStrokeWidth},{width}' +
        ' L {halfOfStrokeWidth},{halfOfStrokeWidth}';

    Shape.apply(this, arguments);
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype._pathString = function _pathString(opts) {
    var w = 100 - opts.strokeWidth / 2;

    return utils.render(this._pathTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2
    });
};

Square.prototype._trailString = function _trailString(opts) {
    var w = 100 - opts.strokeWidth / 2;

    return utils.render(this._trailTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2,
        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
    });
};

module.exports = Square;


/***/ }),

/***/ "./node_modules/progressbar.js/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/progressbar.js/src/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Utility functions

var PREFIXES = 'Webkit Moz O ms'.split(' ');
var FLOAT_COMPARISON_EPSILON = 0.001;

// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {};
    source = source || {};
    recursive = recursive || false;

    for (var attrName in source) {
        if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];
            if (recursive && isObject(destVal) && isObject(sourceVal)) {
                destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
                destination[attrName] = sourceVal;
            }
        }
    }

    return destination;
}

// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;

    for (var key in vars) {
        if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = '\\{' + key + '\\}';
            var regExp = new RegExp(regExpString, 'g');

            rendered = rendered.replace(regExp, val);
        }
    }

    return rendered;
}

function setStyle(element, style, value) {
    var elStyle = element.style;  // cache for performance

    for (var i = 0; i < PREFIXES.length; ++i) {
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }

    elStyle[style] = value;
}

function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) {
            return;
        }

        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
        } else {
            element.style[styleName] = styleValue;
        }
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

function isFunction(obj) {
    return typeof obj === 'function';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) {
        return false;
    }

    var type = typeof obj;
    return type === 'object' && !!obj;
}

function forEachObject(object, callback) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
        }
    }
}

function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}

// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};


/***/ }),

/***/ "./node_modules/shifty/dist/shifty.js":
/*!********************************************!*\
  !*** ./node_modules/shifty/dist/shifty.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Shifty 2.13.0 - https://github.com/jeremyckahn/shifty */
!function(t,n){ true?module.exports=n():undefined}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){"use strict";(function(t){e.d(n,"e",(function(){return E})),e.d(n,"c",(function(){return I})),e.d(n,"b",(function(){return q})),e.d(n,"a",(function(){return Q})),e.d(n,"d",(function(){return N}));var r=e(1),i=e.n(r),u=e(2);function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f,l,h,p,d,_,v,y,g,m,b,w,S,O,j,k="undefined"!=typeof window?window:t,M=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||k.mozCancelRequestAnimationFrame&&k.mozRequestAnimationFrame||setTimeout,P=function(){},T=null,x=null,A=i()({},u),E=function(t,n,e,r,i,u,o){for(l in f=t<u?0:(t-u)/i,n)h=o[l],p=h.call?h:A[h],d=e[l],n[l]=d+(r[l]-d)*p(f);return n},F=function(t,n){_=t._duration,v=t._timestamp,b=t._currentState,w=t._targetState,S=t._delay,m=_-((y=v+S+_)-(g=n>y?y:n)),g>=y?(t._render(w,t._data,m),t.stop(!0)):(t._applyFilter("beforeTween"),g<v+S?v=_=g=1:v+=S,E(g,b,t._originalState,w,_,v,t._easing),t._applyFilter("afterTween"),t._render(b,t._data,m))},I=function(t,n,e){return function(){for(t=Q.now(),n=T;n;)e=n._next,F(n,t),n=e}()},C=function t(){T&&(M.call(k,t,1e3/60),I())},q=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=s(n);if("string"===r||"function"===r)for(var i in t)e[i]=n;else for(var u in t)e[u]=n[u]||"linear";return e},D=function(t){t===T?(T=t._next)?T._previous=null:x=null:t===x?(x=t._previous)?x._next=null:T=null:(O=t._previous,j=t._next,O._next=j,j._previous=O),t._previous=t._next=null},Q=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o(this,t),c(this,"_config",{}),c(this,"_data",{}),c(this,"_filters",[]),c(this,"_next",null),c(this,"_previous",null),c(this,"_timestamp",null),c(this,"_resolve",null),c(this,"_reject",null),c(this,"_currentState",{}),c(this,"_originalState",{}),c(this,"_targetState",{}),c(this,"_start",P),c(this,"_render",P),this._currentState=n||this._currentState,e&&this.setConfig(e)}var n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){for(var n=this._filters.length;n>0;n--){var e=this._filters[n-n][t];e&&e(this)}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isPlaying&&this.stop(),!n&&this._config||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this._config,e);var r=this._config,u=r.promise,o=void 0===u?Promise:u,a=r.start,c=void 0===a?P:a,s=r.render,f=void 0===s?this._config.step||P:s,l=r.step,h=void 0===l?P:l;for(var p in this._data=this._config.data||this._config.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=e.delay||0,this._start=c,this._render=f||h,this._duration=this._config.duration||500,i()(this._currentState,e.from),i()(this._originalState,this._currentState),i()(this._targetState,this._currentState,e.to),this._easing=q(this._currentState,this._config.easing,this._easing),this._filters.length=0,t.filters)t.filters[p].doesApply(this)&&this._filters.push(t.filters[p]);return this._applyFilter("tweenCreated"),this._promise=new o((function(t,e){n._resolve=t,n._reject=e})),this}},{key:"get",value:function(){return i()({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,D(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.now();return null===this._timestamp?this.tween():(this._isPlaying||(this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===T?(T=this,x=this,C()):(this._previous=x,x._next=this,x=this)),this._promise)}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0||(this._timestamp=e-n,this._isPlaying||F(this,e)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._isPlaying?(this._isPlaying=!1,D(this),t&&(this._applyFilter("beforeTween"),E(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd")),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,i()(this._targetState,this._currentState),i()(this._originalState,this._targetState),this):this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._currentState,e=this._data,r=this._isPlaying;return r?(this._reject({data:e,state:n,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=i()({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&a(n.prototype,e),r&&a(n,r),t}();function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new Q,e=n.tween(t);return e.tweenable=n,e}Q.setScheduleFunction=function(t){return M=t},Q.formulas=A,Q.filters={},Q.now=Date.now||function(){return+new Date}}).call(this,e(3))},function(t,n,e){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(t){return n[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,n){for(var e,a,c=o(t),s=1;s<arguments.length;s++){for(var f in e=Object(arguments[s]))i.call(e,f)&&(c[f]=e[f]);if(r){a=r(e);for(var l=0;l<a.length;l++)u.call(e,a[l])&&(c[a[l]]=e[a[l]])}}return c}},function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return u})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return s})),e.d(n,"easeInQuart",(function(){return f})),e.d(n,"easeOutQuart",(function(){return l})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return d})),e.d(n,"easeInOutQuint",(function(){return _})),e.d(n,"easeInSine",(function(){return v})),e.d(n,"easeOutSine",(function(){return y})),e.d(n,"easeInOutSine",(function(){return g})),e.d(n,"easeInExpo",(function(){return m})),e.d(n,"easeOutExpo",(function(){return b})),e.d(n,"easeInOutExpo",(function(){return w})),e.d(n,"easeInCirc",(function(){return S})),e.d(n,"easeOutCirc",(function(){return O})),e.d(n,"easeInOutCirc",(function(){return j})),e.d(n,"easeOutBounce",(function(){return k})),e.d(n,"easeInBack",(function(){return M})),e.d(n,"easeOutBack",(function(){return P})),e.d(n,"easeInOutBack",(function(){return T})),e.d(n,"elastic",(function(){return x})),e.d(n,"swingFromTo",(function(){return A})),e.d(n,"swingFrom",(function(){return E})),e.d(n,"swingTo",(function(){return F})),e.d(n,"bounce",(function(){return I})),e.d(n,"bouncePast",(function(){return C})),e.d(n,"easeFromTo",(function(){return q})),e.d(n,"easeFrom",(function(){return D})),e.d(n,"easeTo",(function(){return Q}));
/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */
/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */
var r=function(t){return t},i=function(t){return Math.pow(t,2)},u=function(t){return-(Math.pow(t-1,2)-1)},o=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},a=function(t){return Math.pow(t,3)},c=function(t){return Math.pow(t-1,3)+1},s=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},f=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},_=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},v=function(t){return 1-Math.cos(t*(Math.PI/2))},y=function(t){return Math.sin(t*(Math.PI/2))},g=function(t){return-.5*(Math.cos(Math.PI*t)-1)},m=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},S=function(t){return-(Math.sqrt(1-t*t)-1)},O=function(t){return Math.sqrt(1-Math.pow(t-1,2))},j=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},k=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},M=function(t){var n=1.70158;return t*t*((n+1)*t-n)},P=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},T=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},x=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},A=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},E=function(t){var n=1.70158;return t*t*((n+1)*t-n)},F=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},I=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},C=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},q=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},D=function(t){return Math.pow(t,4)},Q=function(t){return Math.pow(t,.25)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n),e.d(n,"processTweens",(function(){return o.c})),e.d(n,"Tweenable",(function(){return o.a})),e.d(n,"tween",(function(){return o.d})),e.d(n,"interpolate",(function(){return F})),e.d(n,"Scene",(function(){return B})),e.d(n,"setBezierFunction",(function(){return z})),e.d(n,"unsetBezierFunction",(function(){return L}));var r={};e.r(r),e.d(r,"doesApply",(function(){return O})),e.d(r,"tweenCreated",(function(){return j})),e.d(r,"beforeTween",(function(){return k})),e.d(r,"afterTween",(function(){return M}));var i,u,o=e(0),a=/(\d|-|\.)/,c=/([^\-0-9.]+)/g,s=/[0-9.-]+/g,f=(i=s.source,u=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i,"\\)"),"g")),l=/^.*\(/,h=/#([0-9]|[a-f]){3,6}/gi,p=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function d(t){return parseInt(t,16)}var _=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[d(n.substr(0,2)),d(n.substr(2,2)),d(n.substr(4,2))]).join(","),")");var n},v=function(t,n,e){var r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",e(t))})),i},y=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(h)&&(t[n]=v(h,e,_))}},g=function(t){var n=t.match(s).map(Math.floor),e=t.match(l)[0];return"".concat(e).concat(n.join(","),")")},m=function(t){return t.match(s)},b=function(t,n){var e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},w=function(t,n){return n.map((function(n){return t[n]}))},S=function(t,n){return n.forEach((function(n){return t=t.replace("VAL",+n.toFixed(4))})),t},O=function(t){for(var n in t._currentState)if("string"==typeof t._currentState[n])return!0;return!1};function j(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(y),t._tokenData=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(c),e?(1===e.length||n.charAt(0).match(a))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:p(m(u),i)})}return r}(n)}function k(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;!function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(var r in n)e(r)}(i,u),[n,e,r].forEach((function(t){return function(t,n){var e=function(e){m(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(var r in n)e(r)}(t,u)}))}function M(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=S(u,w(b(t,i),i));t[e]=v(f,o,g)}}(t,u)})),function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){var e=t[n];return delete t[n],e})).join(" "):i}}(i,u)}function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function T(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var A=new o.a,E=o.a.filters,F=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=T({},t),a=Object(o.b)(t,r);for(var c in A._filters.length=0,A.set({}),A._currentState=u,A._originalState=t,A._targetState=n,A._easing=a,E)E[c].doesApply(A)&&A._filters.push(E[c]);A._applyFilter("tweenCreated"),A._applyFilter("beforeTween");var s=Object(o.e)(e,u,t,n,1,i,a);return A._applyFilter("afterTween"),s};function I(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return C(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function q(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function D(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,n){var e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}var N=new WeakMap,B=function(){function t(){q(this,t),N.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e,r;return n=t,(e=[{key:"add",value:function(t){return Q(this,N).push(t),t}},{key:"remove",value:function(t){var n=Q(this,N).indexOf(t);return~n&&Q(this,N).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Q(this,N).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return Q(this,N).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return Q(this,N).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return Q(this,N).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return Q(this,N).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return I(Q(this,N))}},{key:"promises",get:function(){return Q(this,N).map((function(t){return t._promise}))}}])&&D(n.prototype,e),r&&D(n,r),t}();function R(t,n,e,r,i,u){var o,a,c=0,s=0,f=0,l=0,h=0,p=0,d=function(t){return((c*t+s)*t+f)*t},_=function(t){return(3*c*t+2*s)*t+f},v=function(t){return t>=0?t:0-t};return c=1-(f=3*n)-(s=3*(r-n)-f),l=1-(p=3*e)-(h=3*(i-e)-p),o=t,a=function(t){return 1/(200*t)}(u),function(t){return((l*t+h)*t+p)*t}(function(t,n){var e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=d(i)-t,v(u)<n)return i;if(o=_(i),v(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=d(i),v(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(o,a))}var z=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return R(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,o.a.formulas[t]=u},L=function(t){return delete o.a.formulas[t]};o.a.filters.token=r}])}));
//# sourceMappingURL=shifty.js.map

/***/ })

}]);