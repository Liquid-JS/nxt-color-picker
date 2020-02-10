(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/nxt-color-picker/fesm2015/nxt-color-picker.js":
/*!******************************************************************************************!*\
  !*** C:/Development/nxt-color-picker/dist/nxt-color-picker/fesm2015/nxt-color-picker.js ***!
  \******************************************************************************************/
/*! exports provided: AlphaChannel, Cmyk, ColorFormat, ColorPickerDirective, ColorPickerModule, DialogDisplay, DialogPosition, Hsla, Hsva, OutputFormat, Rgba, calculateContrast, calculateLuminance, calculateMinimumAlpha, compositeAlpha, compositeColors, compositeComponent, denormalizeRGBA, formatOutput, hsla2hsva, hsva2hsla, hsvaToRgba, rgbaToCmyk, rgbaToHex, rgbaToHsva, stringToHsva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaChannel", function() { return AlphaChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFormat", function() { return ColorFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDisplay", function() { return DialogDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPosition", function() { return DialogPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputFormat", function() { return OutputFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateContrast", function() { return calculateContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLuminance", function() { return calculateLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMinimumAlpha", function() { return calculateMinimumAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeAlpha", function() { return compositeAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeColors", function() { return compositeColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeComponent", function() { return compositeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denormalizeRGBA", function() { return denormalizeRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatOutput", function() { return formatOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla2hsva", function() { return hsla2hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsva2hsla", function() { return hsva2hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToRgba", function() { return hsvaToRgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToCmyk", function() { return rgbaToCmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHsva", function() { return rgbaToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToHsva", function() { return stringToHsva; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class SliderPosition {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class SliderDimension {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
var Position;
(function (Position) {
    Position["fixed"] = "fixed";
    Position["relative"] = "relative";
    Position["static"] = "static";
    Position["absolute"] = "absolute";
})(Position || (Position = {}));
var ColorModeInternal;
(function (ColorModeInternal) {
    ColorModeInternal[ColorModeInternal["color"] = 0] = "color";
    ColorModeInternal[ColorModeInternal["grayscale"] = 1] = "grayscale";
    ColorModeInternal[ColorModeInternal["presets"] = 2] = "presets";
})(ColorModeInternal || (ColorModeInternal = {}));
function parseColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
        case '1':
        case 'C':
        case 'COLOR':
            return ColorModeInternal.color;
        case '2':
        case 'G':
        case 'GRAYSCALE':
            return ColorModeInternal.grayscale;
        case '3':
        case 'P':
        case 'PRESETS':
            return ColorModeInternal.presets;
        default:
            return ColorModeInternal.color;
    }
}
function sizeToString(val) {
    const strVal = ((val || 'auto') + '').trim().toLowerCase();
    if (strVal.match(/^\d+[a-z%]+$/) || strVal == 'auto') {
        return strVal;
    }
    const num = parseInt(strVal, 10);
    if (!Number.isNaN(num)) {
        return `${num}px`;
    }
    return 'auto';
}
function composedPath(event) {
    if (event.composedPath) {
        return event.composedPath();
    }
    const _evt = event;
    if (_evt.path) {
        return _evt.path;
    }
    let t = _evt.target;
    _evt.path = [];
    while (t.parentNode !== null) {
        _evt.path.push(t);
        t = t.parentNode;
    }
    _evt.path.push(document, window);
    return _evt.path;
}

var ColorFormat;
(function (ColorFormat) {
    ColorFormat["hex"] = "hex";
    ColorFormat["rgba"] = "rgba";
    ColorFormat["hsla"] = "hsla";
})(ColorFormat || (ColorFormat = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["auto"] = "auto";
    OutputFormat["hex"] = "hex";
    OutputFormat["rgba"] = "rgba";
    OutputFormat["hsla"] = "hsla";
})(OutputFormat || (OutputFormat = {}));
var AlphaChannel;
(function (AlphaChannel) {
    AlphaChannel["enabled"] = "enabled";
    AlphaChannel["disabled"] = "disabled";
    AlphaChannel["always"] = "always";
    AlphaChannel["forced"] = "forced";
})(AlphaChannel || (AlphaChannel = {}));
var DialogPosition;
(function (DialogPosition) {
    DialogPosition["top"] = "top";
    DialogPosition["left"] = "left";
    DialogPosition["right"] = "right";
    DialogPosition["bottom"] = "bottom";
})(DialogPosition || (DialogPosition = {}));
var DialogDisplay;
(function (DialogDisplay) {
    DialogDisplay["popup"] = "popup";
    DialogDisplay["inline"] = "inline";
})(DialogDisplay || (DialogDisplay = {}));

class Cmyk {
    constructor(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}
class Hsla {
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
}
class Hsva {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class Rgba {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

function hsva2hsla(hsva) {
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    if (v == 0) {
        return new Hsla(h, 0, 0, a);
    }
    else if (s == 0 && v == 1) {
        return new Hsla(h, 1, 1, a);
    }
    else {
        const l = v * (2 - s) / 2;
        return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
    }
}
function hsla2hsva(hsla) {
    const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
    const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
    if (l == 0) {
        return new Hsva(h, 0, 0, a);
    }
    else {
        const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
        return new Hsva(h, 2 * (v - l) / v, v, a);
    }
}
function hsvaToRgba(hsva) {
    let r, g, b;
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
        default:
            r = 0, g = 0, b = 0;
    }
    return new Rgba(r, g, b, a);
}
function rgbaToCmyk(rgba) {
    const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k == 1) {
        return new Cmyk(0, 0, 0, 1);
    }
    else {
        const c = (1 - rgba.r - k) / (1 - k);
        const m = (1 - rgba.g - k) / (1 - k);
        const y = (1 - rgba.b - k) / (1 - k);
        return new Cmyk(c, m, y, k);
    }
}
function rgbaToHsva(rgba) {
    let h, s;
    const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
    const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const v = max, d = max - min;
    s = (max == 0) ? 0 : d / max;
    if (max == min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                h = 0;
        }
        h /= 6;
    }
    return new Hsva(h, s, v, a);
}
function rgbaToHex(rgba, allowHex8) {
    /* tslint:disable:no-bitwise */
    let hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
    if (allowHex8) {
        hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    /* tslint:enable:no-bitwise */
    return hex;
}
function denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
}
function stringToHsva(colorString = '', allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || '').toLowerCase();
    const stringParsers = [
        {
            re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
            }
        }, {
            re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
                return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
            }
        }
    ];
    if (allowHex8) {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
            }
        });
    }
    else {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
            }
        });
    }
    stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: function (execResult) {
            return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
        }
    });
    for (const key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
            const parser = stringParsers[key];
            const match = parser.re.exec(colorString), color = match && parser.parse(match);
            if (color) {
                if (color instanceof Rgba) {
                    hsva = rgbaToHsva(color);
                }
                else if (color instanceof Hsla) {
                    hsva = hsla2hsva(color);
                }
                return hsva;
            }
        }
    }
    return hsva;
}
function formatOutput(hsva, outputFormat, alphaChannel) {
    if (outputFormat == OutputFormat.auto) {
        outputFormat = hsva.a < 1 ? OutputFormat.rgba : OutputFormat.hex;
    }
    switch (outputFormat) {
        case OutputFormat.hsla:
            const hsla = hsva2hsla(hsva);
            const hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            if (hsva.a < 1 || alphaChannel == AlphaChannel.always) {
                return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                    hslaText.a + ')';
            }
            else {
                return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
            }
        case OutputFormat.rgba:
            const rgba = denormalizeRGBA(hsvaToRgba(hsva));
            if (hsva.a < 1 || alphaChannel == AlphaChannel.always) {
                return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                    Math.round(rgba.a * 100) / 100 + ')';
            }
            else {
                return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            }
        default:
            const allowHex8 = (alphaChannel == AlphaChannel.always || alphaChannel == AlphaChannel.forced);
            return rgbaToHex(denormalizeRGBA(hsvaToRgba(hsva)), allowHex8);
    }
}
function calculateContrast(foreground, background) {
    if (Math.round(foreground.a * 100) < 100) {
        foreground = compositeColors(foreground, background);
    }
    const luminance1 = calculateLuminance(foreground) + 0.05;
    const luminance2 = calculateLuminance(background) + 0.05;
    return Math.max(luminance1, luminance2) / Math.min(luminance1, luminance2);
}
function compositeColors(foreground, background) {
    const a = compositeAlpha(foreground.a, background.a);
    const r = compositeComponent(foreground.r, foreground.a, background.r, background.a, a);
    const g = compositeComponent(foreground.g, foreground.a, background.g, background.a, a);
    const b = compositeComponent(foreground.b, foreground.a, background.b, background.a, a);
    return new Rgba(r, g, b, a);
}
function compositeAlpha(foregroundAlpha, backgroundAlpha) {
    return 1 - (1 - backgroundAlpha) * (1 - foregroundAlpha);
}
function compositeComponent(fgC, fgA, bgC, bgA, a) {
    if (a == 0) {
        return 0;
    }
    return ((fgC * fgA) + (bgC * bgA * (1 - fgA))) / a;
}
function calculateLuminance(color) {
    let red = color.r / 255;
    red = red < 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4);
    let green = color.g / 255;
    green = green < 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
    let blue = color.b / 255;
    blue = blue < 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4);
    return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
}
function calculateMinimumAlpha(foreground, background, minContrastRatio) {
    if (Math.round(background.a * 100) < 100) {
        return -1;
    }
    let testForeground = new Rgba(foreground.r, foreground.g, foreground.b, 1);
    let testRatio = calculateContrast(testForeground, background);
    if (testRatio < minContrastRatio) {
        return -1;
    }
    let numIterations = 0;
    let minAlpha = 0;
    let maxAlpha = 1;
    while (numIterations <= 10 && (maxAlpha - minAlpha) > 0.01) {
        const testAlpha = (minAlpha + maxAlpha) / 2;
        testForeground = new Rgba(foreground.r, foreground.g, foreground.b, testAlpha);
        testRatio = calculateContrast(testForeground, background);
        if (testRatio < minContrastRatio) {
            minAlpha = testAlpha;
        }
        else {
            maxAlpha = testAlpha;
        }
        numIterations++;
    }
    return maxAlpha;
}

const light = new Rgba(218, 218, 218, 1);
const dark = new Rgba(34, 34, 34, 1);
function opaqueSliderLight(background) {
    const cWhite = calculateContrast(light, new Rgba(background.r, background.g, background.b, 1));
    const cBlack = calculateContrast(dark, new Rgba(background.r, background.g, background.b, 1));
    return cWhite > cBlack;
}
function transparentSliderLight(background) {
    const bg = compositeColors(background, light);
    const cWhite = calculateContrast(light, new Rgba(bg.r, bg.g, bg.b, 1));
    const cBlack = calculateContrast(dark, new Rgba(bg.r, bg.g, bg.b, 1));
    return cWhite > cBlack;
}

class ColorPickerService {
    constructor() {
        this.active = null;
    }
    setActive(active) {
        if (active && active.cpDialogDisplay == DialogDisplay.popup) {
            if (this.active && this.active != active) {
                this.active.closeDialog();
            }
            this.active = active;
        }
    }
}
ColorPickerService.ɵfac = function ColorPickerService_Factory(t) { return new (t || ColorPickerService)(); };
ColorPickerService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: ColorPickerService, factory: ColorPickerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorPickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SliderDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.isMoving = false;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onStart(event) {
        event.stopPropagation();
        event.preventDefault();
        this.setCursor(event);
        this.isMoving = true;
        this.dragStart.emit();
    }
    onMove(event) {
        if (this.isMoving) {
            event.stopPropagation();
            event.preventDefault();
            this.setCursor(event);
        }
    }
    onStop(event) {
        if (this.isMoving) {
            event.stopPropagation();
            event.preventDefault();
            this.isMoving = false;
            this.dragEnd.emit();
        }
    }
    getX(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageX = 'pageX' in event ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    getY(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageY = 'pageX' in event ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    setCursor(event) {
        const width = this.elRef.nativeElement.offsetWidth;
        const height = this.elRef.nativeElement.offsetHeight;
        const x = Math.max(0, Math.min(this.getX(event), width));
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX != undefined && this.rgY != undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX == undefined && this.rgY != undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX != undefined && this.rgY == undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.ɵfac = function SliderDirective_Factory(t) { return new (t || SliderDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SliderDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: SliderDirective, selectors: [["", "cpSlider", ""]], hostBindings: function SliderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) { return ctx.onStart($event); })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) { return ctx.onStart($event); })("mousemove", function SliderDirective_mousemove_HostBindingHandler($event) { return ctx.onMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function SliderDirective_touchmove_HostBindingHandler($event) { return ctx.onMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function SliderDirective_mouseup_HostBindingHandler($event) { return ctx.onStop($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function SliderDirective_touchend_HostBindingHandler($event) { return ctx.onStop($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { rgX: "rgX", rgY: "rgY", slider: "slider" }, outputs: { dragEnd: "dragEnd", dragStart: "dragStart", newValue: "newValue" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SliderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cpSlider]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { rgX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rgY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
        }], onStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend', ['$event']]
        }] }); })();

class TextDirective {
    constructor() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    inputChange(event) {
        const value = ((event && event.target && event.target['value'] || '') + '').trim();
        if (this.rg == undefined) {
            this.newValue.emit(value);
        }
        else {
            const numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    }
}
TextDirective.ɵfac = function TextDirective_Factory(t) { return new (t || TextDirective)(); };
TextDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: TextDirective, selectors: [["", "cpText", ""]], hostBindings: function TextDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("input", function TextDirective_input_HostBindingHandler($event) { return ctx.inputChange($event); })("change", function TextDirective_change_HostBindingHandler($event) { return ctx.inputChange($event); });
    } }, inputs: { rg: "rg", text: "text" }, outputs: { newValue: "newValue" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TextDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cpText]'
            }]
    }], null, { rg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change', ['$event']]
        }] }); })();

const _c0 = ["dialogPopup"];
function ColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 16);
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "color-picker__arrow--" + ctx_r1.cpPosition);
} }
const _c1 = function (a0) { return { backgroundColor: a0 }; };
const _c2 = function (a0) { return { "color-picker__cursor--light": a0 }; };
const _c3 = function (a0, a1) { return { top: a0, left: a1 }; };
function ColorPickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r11); const ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r10.onColorChange($event); })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r11); const ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r12.onDragStart("saturation-lightness"); })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r11); const ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r13.onDragEnd("saturation-lightness"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rgX", 1)("rgY", 1)("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(5, _c1, ctx_r2.hueSliderColor || ""));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(7, _c2, ctx_r2.svSliderLight))("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(9, _c3, ((ctx_r2.slider == null ? null : ctx_r2.slider.v) || 0) * 100 + "%", ((ctx_r2.slider == null ? null : ctx_r2.slider.s) || 0) * 100 + "%"));
} }
const _c4 = function (a0) { return { "color-picker__add-selected--light": a0 }; };
function ColorPickerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r15); const ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r14.onAddPresetColor(ctx_r14.selectedColor); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "path", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("title", ctx_r3.cpAddColorButtonText)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(2, _c4, ctx_r3.alphaSliderLight));
} }
const _c5 = function (a0) { return { left: a0 }; };
function ColorPickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("newValue", function ColorPickerComponent_div_10_Template_div_newValue_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r17); const ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r16.onHueChange($event); })("dragStart", function ColorPickerComponent_div_10_Template_div_dragStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r17); const ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r18.onDragStart("hue"); })("dragEnd", function ColorPickerComponent_div_10_Template_div_dragEnd_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r17); const ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r19.onDragEnd("hue"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "div", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rgX", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(3, _c2, ctx_r4.hueSliderLight))("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(5, _c5, ((ctx_r4.slider == null ? null : ctx_r4.slider.h) || 0) * 100 + "%"));
} }
function ColorPickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("newValue", function ColorPickerComponent_div_11_Template_div_newValue_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r21); const ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r20.onValueChange($event); })("dragStart", function ColorPickerComponent_div_11_Template_div_dragStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r21); const ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r22.onDragStart("value"); })("dragEnd", function ColorPickerComponent_div_11_Template_div_dragEnd_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r21); const ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r23.onDragEnd("value"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "div", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rgX", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(3, _c2, ctx_r5.valueSliderLight))("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(5, _c5, (1 - ((ctx_r5.slider == null ? null : ctx_r5.slider.v) || 0)) * 100 + "%"));
} }
const _c6 = function (a0) { return { backgroundImage: a0 }; };
function ColorPickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("newValue", function ColorPickerComponent_div_12_Template_div_newValue_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const ctx_r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r24.onAlphaChange($event); })("dragStart", function ColorPickerComponent_div_12_Template_div_dragStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r26.onDragStart("alpha"); })("dragEnd", function ColorPickerComponent_div_12_Template_div_dragEnd_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r27.onDragEnd("alpha"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "div", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rgX", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(4, _c6, ctx_r6.alphaSliderColor || ""));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(6, _c2, ctx_r6.alphaSliderLight))("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(8, _c5, ((ctx_r6.slider == null ? null : ctx_r6.slider.a) || 0) * 100 + "%"));
} }
function ColorPickerComponent_div_13_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_container_2_div_5_Template_input_keyup_enter_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r33.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_container_2_div_5_Template_input_newValue_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r35 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r35.onAlphaInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r32 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 1)("value", ctx_r32.hslaText == null ? null : ctx_r32.hslaText.a);
} }
function ColorPickerComponent_div_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "input", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_container_2_Template_input_keyup_enter_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r37); const ctx_r36 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r36.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_container_2_Template_input_newValue_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r37); const ctx_r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r38.onValueInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "V");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, ColorPickerComponent_div_13_ng_container_2_div_5_Template, 4, 2, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 100)("value", ctx_r28.hslaText == null ? null : ctx_r28.hslaText.l);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.cpAlphaChannel != ctx_r28.alphaChannel.disabled);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r44 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_div_13_Template_input_keyup_enter_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r44); const ctx_r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r43.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_div_13_Template_input_newValue_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r44); const ctx_r45 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r45.onAlphaInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r42 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 1)("value", ctx_r42.hslaText == null ? null : ctx_r42.hslaText.a);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "input", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_keyup_enter_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r46 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r46.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_newValue_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r48.onHueInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "H");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "input", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_keyup_enter_6_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r49 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r49.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_newValue_6_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r50 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r50.onSaturationInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "S");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "input", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_keyup_enter_10_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r51.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template_input_newValue_10_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r47); const ctx_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r52.onLightnessInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(12, "L");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(13, ColorPickerComponent_div_13_ng_template_3_ng_container_1_div_13_Template, 4, 2, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 360)("value", ctx_r39.hslaText == null ? null : ctx_r39.hslaText.h);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 100)("value", ctx_r39.hslaText == null ? null : ctx_r39.hslaText.s);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 100)("value", ctx_r39.hslaText == null ? null : ctx_r39.hslaText.l);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r39.cpAlphaChannel != ctx_r39.alphaChannel.disabled);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_div_13_Template_input_keyup_enter_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r55); const ctx_r54 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r54.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_div_13_Template_input_newValue_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r55); const ctx_r56 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r56.onAlphaInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r53 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 1)("value", ctx_r53.hslaText == null ? null : ctx_r53.hslaText.a);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "input", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_keyup_enter_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r57 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r57.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_newValue_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r59.onRedInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "R");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "input", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_keyup_enter_6_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r60 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r60.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_newValue_6_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r61 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r61.onGreenInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "G");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "input", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_keyup_enter_10_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r62 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r62.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template_input_newValue_10_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r58); const ctx_r63 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r63.onBlueInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(12, "B");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(13, ColorPickerComponent_div_13_ng_template_3_ng_container_2_div_13_Template, 4, 2, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r40 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 255)("value", ctx_r40.rgbaText == null ? null : ctx_r40.rgbaText.r);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 255)("value", ctx_r40.rgbaText == null ? null : ctx_r40.rgbaText.g);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 255)("value", ctx_r40.rgbaText == null ? null : ctx_r40.rgbaText.b);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.cpAlphaChannel != ctx_r40.alphaChannel.disabled);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r66 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_3_div_5_Template_input_keyup_enter_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r66); const ctx_r65 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r65.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_3_div_5_Template_input_newValue_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r66); const ctx_r67 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r67.onAlphaInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r64 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("rg", 1)("value", ctx_r64.hexAlpha);
} }
function ColorPickerComponent_div_13_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r69 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "input", 43);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("blur", function ColorPickerComponent_div_13_ng_template_3_ng_container_3_Template_input_blur_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r69); const ctx_r68 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r68.onHexInput(null); })("keyup.enter", function ColorPickerComponent_div_13_ng_template_3_ng_container_3_Template_input_keyup_enter_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r69); const ctx_r70 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r70.onAccept($event); })("newValue", function ColorPickerComponent_div_13_ng_template_3_ng_container_3_Template_input_newValue_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r69); const ctx_r71 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r71.onHexInput($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "Hex");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, ColorPickerComponent_div_13_ng_template_3_ng_container_3_div_5_Template, 4, 2, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r41 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx_r41.hexText);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r41.cpAlphaChannel == ctx_r41.alphaChannel.forced);
} }
function ColorPickerComponent_div_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ColorPickerComponent_div_13_ng_template_3_ng_container_1_Template, 14, 7, "ng-container", 39);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_div_13_ng_template_3_ng_container_2_Template, 14, 7, "ng-container", 39);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ColorPickerComponent_div_13_ng_template_3_ng_container_3_Template, 6, 2, "ng-container", 40);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitch", ctx_r30.format);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", ctx_r30.colorFormat.hsla);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", ctx_r30.colorFormat.rgba);
} }
function ColorPickerComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r73 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span", 45);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_div_13_div_5_Template_span_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r73); const ctx_r72 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r72.onFormatToggle(1); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 45);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_div_13_div_5_Template_span_click_2_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r73); const ctx_r74 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r74.onFormatToggle(0 - 1); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function ColorPickerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_div_13_ng_container_2_Template, 6, 3, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ColorPickerComponent_div_13_ng_template_3_Template, 4, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, ColorPickerComponent_div_13_div_5_Template, 3, 0, "div", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const _r29 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(4);
    const ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.cpMode == ctx_r7.colorModeInternal.grayscale)("ngIfElse", _r29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.cpMode == ctx_r7.colorModeInternal.color);
} }
function ColorPickerComponent_ng_container_14_div_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 50);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r75 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r75.cpPresetLabel);
} }
function ColorPickerComponent_ng_container_14_div_4_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 57);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_ng_container_14_div_4_div_1_button_2_Template_button_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r83); const color_r79 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r81 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r81.onRemovePresetColor(color_r79); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 58);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "path", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r80 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("title", ctx_r80.cpRemoveColorButtonText);
} }
function ColorPickerComponent_ng_container_14_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r85 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 54);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_ng_container_14_div_4_div_1_Template_div_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r85); const color_r79 = ctx.$implicit; const ctx_r84 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r84.setColorFromString(color_r79); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 55);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_ng_container_14_div_4_div_1_button_2_Template, 4, 1, "button", 56);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const color_r79 = ctx.$implicit;
    const ctx_r77 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("title", color_r79);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(3, _c1, color_r79 || ""));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r77.cpAddColorButton);
} }
function ColorPickerComponent_ng_container_14_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 59);
} }
function ColorPickerComponent_ng_container_14_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 51);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ColorPickerComponent_ng_container_14_div_4_div_1_Template, 3, 5, "div", 52);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_ng_container_14_div_4_div_2_Template, 1, 0, "div", 53);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r76 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r76.cpPresetColors);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r76.fill(50));
} }
function ColorPickerComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "div", 46);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 47);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ColorPickerComponent_ng_container_14_div_3_Template, 2, 1, "div", 48);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, ColorPickerComponent_ng_container_14_div_4_Template, 3, 2, "div", 49);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.cpPresetLabel);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.cpPresetColors == null ? null : ctx_r8.cpPresetColors.length);
} }
function ColorPickerComponent_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r90 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 62);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_div_15_button_1_Template_button_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r90); const ctx_r89 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r89.onCancel($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r87 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r87.cpCancelButtonText);
} }
function ColorPickerComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 62);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_div_15_button_2_Template_button_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r92); const ctx_r91 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r91.onAccept($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r88 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r88.cpOKButtonText);
} }
function ColorPickerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 60);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ColorPickerComponent_div_15_button_1_Template, 2, 1, "button", 61);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_div_15_button_2_Template, 2, 1, "button", 61);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.cpCancelButton);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.cpOKButton);
} }
const _c7 = function (a0, a1, a2, a3, a4, a5) { return { visibility: a0, "top.px": a1, "left.px": a2, position: a3, width: a4, height: a5 }; };
class ColorPickerComponent {
    constructor(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.alphaChannel = AlphaChannel;
        this.colorModeInternal = ColorModeInternal;
        this.dialogDisplay = DialogDisplay;
        this.colorFormat = ColorFormat;
        this.dialogArrowSize = 16;
        this.dialogArrowOffset = 16;
        this.dialogInputFields = [
            ColorFormat.hex,
            ColorFormat.rgba,
            ColorFormat.hsla
        ];
        this.useRootViewContainer = false;
        this.svSliderLight = false;
        this.hueSliderLight = false;
        this.valueSliderLight = false;
        this.alphaSliderLight = false;
        this.cpMode = ColorModeInternal.color;
        this.cpPosition = DialogPosition.right;
    }
    onCancel(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.initialColor) {
            this.setColorFromString(this.initialColor, true);
        }
        if (this.callbacks) {
            this.callbacks.colorSelectCanceled();
        }
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.closeColorPicker();
        }
    }
    onAccept(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            if (this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor);
            }
            if (this.cpDialogDisplay == DialogDisplay.popup) {
                this.closeColorPicker();
            }
        }
    }
    onFocusChange(event) {
        const path = new Set(composedPath(event));
        const intersect = this.cpIgnoredElements.find(el => path.has(el));
        if (!intersect) {
            if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
                if (this.cpSaveClickOutside) {
                    if (this.outputColor && this.callbacks) {
                        this.callbacks.colorSelected(this.outputColor);
                    }
                }
                else {
                    this.setColorFromString(this.initialColor, false);
                    if (this.callbacks) {
                        this.callbacks.colorChanged(this.initialColor);
                    }
                }
                if (this.cpCloseClickOutside) {
                    this.closeColorPicker();
                }
            }
            else if (this.cpSaveClickOutside && this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor);
            }
        }
    }
    onResize() {
        if (this.position == Position.fixed) {
            this.setDialogPosition();
        }
    }
    ngOnInit() {
        this.slider = new SliderPosition(0, 0, 0, 0);
        if (this.cpOutputFormat == OutputFormat.rgba) {
            this.format = ColorFormat.rgba;
        }
        else if (this.cpOutputFormat == OutputFormat.hsla) {
            this.format = ColorFormat.hsla;
        }
        else {
            this.format = ColorFormat.hex;
        }
        this.openDialog(this.initialColor, false);
    }
    ngOnDestroy() {
        this.closeDialog();
    }
    ngAfterViewChecked() {
        if (this.show && this.dialogElement && this.dialogElement.nativeElement) {
            this.updateSize();
            if (this.hidden) {
                this.hidden = false;
                this.cdRef.detectChanges();
            }
        }
    }
    updateSize() {
        const w = this.dialogElement.nativeElement.offsetWidth;
        const h = this.dialogElement.nativeElement.offsetHeight;
        if (w != this.width || h != this.height) {
            this.width = w;
            this.height = h;
            if (this.cpDialogDisplay != DialogDisplay.inline) {
                this.setDialogPosition();
                this.cdRef.detectChanges();
            }
            return true;
        }
        return false;
    }
    openDialog(color, emit = true) {
        this.service.setActive(this);
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    }
    closeDialog() {
        this.closeColorPicker();
    }
    setupDialog(config) {
        this.setInitialColor(config.color);
        this.cpMode = parseColorMode(config.cpMode);
        this.callbacks = config.callbacks;
        this.directiveElementRef = config.elementRef;
        this.cpDisableInput = config.cpDisableInput;
        this.cpAlphaChannel = config.cpAlphaChannel;
        this.cpOutputFormat = config.cpOutputFormat;
        this.cpDialogDisplay = config.cpDialogDisplay;
        this.cpIgnoredElements = [
            ...(Array.isArray(config.cpIgnoredElements) ? config.cpIgnoredElements : [config.cpIgnoredElements]),
            this.elRef && this.elRef.nativeElement,
            config.elementRef && config.elementRef.nativeElement
        ].filter(e => !!e);
        this.cpSaveClickOutside = config.cpSaveClickOutside;
        this.cpCloseClickOutside = config.cpCloseClickOutside;
        this.useRootViewContainer = config.cpUseRootViewContainer;
        this.cpWidth = sizeToString(config.cpWidth);
        this.cpHeight = sizeToString(config.cpHeight);
        this.cpPosition = config.cpPosition;
        this.cpPositionOffset = parseInt(config.cpPositionOffset, 10);
        this.cpOKButton = config.cpOKButton;
        this.cpOKButtonText = config.cpOKButtonText;
        this.cpCancelButton = config.cpCancelButton;
        this.cpCancelButtonText = config.cpCancelButtonText;
        this.fallbackColor = config.cpFallbackColor || '#fff';
        this.setPresetConfig(config.cpPresetLabel, config.cpPresetColors);
        this.cpMaxPresetColors = config.cpMaxPresetColors;
        this.cpAddColorButton = config.cpAddColorButton;
        this.cpAddColorButtonText = config.cpAddColorButtonText;
        this.cpRemoveColorButtonText = config.cpRemoveColorButtonText;
        if (!config.cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (config.cpDialogDisplay == DialogDisplay.inline) {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (config.cpOutputFormat == OutputFormat.hex &&
            config.cpAlphaChannel != AlphaChannel.always && config.cpAlphaChannel != AlphaChannel.forced) {
            this.cpAlphaChannel = AlphaChannel.disabled;
        }
    }
    setInitialColor(color) {
        this.initialColor = color;
        this.setColorFromString(this.initialColor, false, true);
    }
    setPresetConfig(cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    }
    setColorFromString(value, emit = true, update = true) {
        let hsva = stringToHsva(value, true);
        if (!hsva && !this.hsva) {
            hsva = stringToHsva(this.fallbackColor, true);
        }
        if (hsva) {
            if (this.cpAlphaChannel == AlphaChannel.disabled) {
                hsva.a = 1;
            }
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            this.updateColorPicker(emit, update);
        }
    }
    onDragEnd(slider) {
        if (this.callbacks) {
            this.callbacks.sliderDragEnd({ slider: slider, color: this.outputColor });
        }
    }
    onDragStart(slider) {
        if (this.callbacks) {
            this.callbacks.sliderDragStart({ slider: slider, color: this.outputColor });
        }
    }
    onFormatToggle(change) {
        const availableFormats = this.dialogInputFields.length;
        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    }
    onColorChange(value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'lightness',
                value: this.hsva.v,
                color: this.outputColor
            });
        }
        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'saturation',
                value: this.hsva.s,
                color: this.outputColor
            });
        }
    }
    onHueChange(value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'hue',
                value: this.hsva.h,
                color: this.outputColor
            });
        }
    }
    onValueChange(value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'value',
                value: this.hsva.v,
                color: this.outputColor
            });
        }
    }
    onAlphaChange(value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'alpha',
                value: this.hsva.a,
                color: this.outputColor
            });
        }
    }
    onHexInput(value) {
        if (value == null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] != '#') {
                value = '#' + value;
            }
            const validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            const valid = validHex.test(value);
            if (valid) {
                // Short hex
                if (value.length == 4) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(c => c + c)
                        .join('');
                }
                // Hex without alpha
                if (value.length == 7 && this.cpAlphaChannel == AlphaChannel.forced) {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
            }
            if (this.callbacks) {
                this.callbacks.inputChanged({
                    input: 'hex',
                    valid: valid,
                    value: value,
                    color: this.outputColor
                });
            }
        }
    }
    onRedInput(value) {
        const rgba = hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.r = value.v / value.rg;
            this.hsva = rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'red',
                valid: valid,
                value: rgba.r,
                color: this.outputColor
            });
        }
    }
    onBlueInput(value) {
        const rgba = hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.b = value.v / value.rg;
            this.hsva = rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'blue',
                valid: valid,
                value: rgba.b,
                color: this.outputColor
            });
        }
    }
    onGreenInput(value) {
        const rgba = hsvaToRgba(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.g = value.v / value.rg;
            this.hsva = rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'green',
                valid: valid,
                value: rgba.g,
                color: this.outputColor
            });
        }
    }
    onHueInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.h = value.v / value.rg;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'hue',
                valid: valid,
                value: this.hsva.h,
                color: this.outputColor
            });
        }
    }
    onValueInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.v = value.v / value.rg;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'value',
                valid: valid,
                value: this.hsva.v,
                color: this.outputColor
            });
        }
    }
    onAlphaInput(value) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.a = value.v / value.rg;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'alpha',
                valid: valid,
                value: this.hsva.a,
                color: this.outputColor
            });
        }
    }
    onLightnessInput(value) {
        const hsla = hsva2hsla(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.l = value.v / value.rg;
            this.hsva = hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'lightness',
                valid: valid,
                value: hsla.l,
                color: this.outputColor
            });
        }
    }
    onSaturationInput(value) {
        const hsla = hsva2hsla(this.hsva);
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.s = value.v / value.rg;
            this.hsva = hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'saturation',
                valid: valid,
                value: hsla.s,
                color: this.outputColor
            });
        }
    }
    onAddPresetColor(value) {
        if (!this.cpPresetColors.filter((color) => (color == value)).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            if (this.callbacks) {
                this.callbacks.presetColorsChanged(this.cpPresetColors);
            }
        }
    }
    onRemovePresetColor(value) {
        this.cpPresetColors = this.cpPresetColors.filter((color) => (color != value));
        if (this.callbacks) {
            this.callbacks.presetColorsChanged(this.cpPresetColors);
        }
    }
    // Private helper functions for the color picker dialog status
    openColorPicker() {
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            if (this.callbacks) {
                this.callbacks.stateChanged(true);
            }
        }
    }
    closeColorPicker() {
        if (this.show) {
            this.show = false;
            if (this.callbacks) {
                this.callbacks.stateChanged(false);
            }
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    }
    updateColorPicker(emit = true, update = true) {
        if (this.cpMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0;
        }
        const lastOutput = this.outputColor;
        const hsla = hsva2hsla(this.hsva);
        const rgba = denormalizeRGBA(hsvaToRgba(this.hsva));
        const hue = denormalizeRGBA(hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
            const allowHex8 = this.cpAlphaChannel == AlphaChannel.always;
            this.hexText = rgbaToHex(rgba, allowHex8);
            this.hexAlpha = this.rgbaText.a;
        }
        if (this.cpOutputFormat == OutputFormat.auto && this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormat.rgba : ColorFormat.hex;
        }
        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)';
        this.svSliderLight = opaqueSliderLight(rgba);
        this.hueSliderLight = opaqueSliderLight(hue);
        this.valueSliderLight = opaqueSliderLight(rgba);
        this.alphaSliderLight = transparentSliderLight(rgba);
        this.outputColor = formatOutput(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
        this.selectedColor = formatOutput(this.hsva, OutputFormat.rgba, null);
        this.slider = new SliderPosition((this.sliderH || this.hsva.h), this.hsva.s, (1 - this.hsva.v), this.hsva.a);
        if (emit && lastOutput != this.outputColor && this.callbacks) {
            this.callbacks.colorChanged(this.outputColor);
        }
    }
    fill(n) {
        return new Array(n).fill(1);
    }
    // Private helper functions for the color picker dialog positioning
    setDialogPosition() {
        if (this.cpDialogDisplay == DialogDisplay.inline) {
            this.position = Position.relative;
        }
        else {
            let position = Position.static, transform = '', style;
            let parentNode = null, transformNode = null;
            let node = this.directiveElementRef.nativeElement.parentNode;
            const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node != null && node.tagName != 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position != Position.static && parentNode == null) {
                    parentNode = node;
                }
                if (transform && transform != 'none' && transformNode == null) {
                    transformNode = node;
                }
                if (position == Position.fixed) {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position != Position.fixed));
            if (this.useRootViewContainer || (position == Position.fixed && (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode == null) {
                    parentNode = node;
                }
                const boxParent = this.createDialogBox(parentNode, (position != Position.fixed));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position == Position.fixed) {
                this.position = Position.fixed;
            }
            switch (this.cpPosition) {
                case DialogPosition.left:
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                    this.left -= this.width + this.dialogArrowSize - 2;
                    break;
                case DialogPosition.top:
                    this.top -= dialogHeight + this.dialogArrowSize;
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                    break;
                case DialogPosition.bottom:
                    this.top += boxDirective.height + this.dialogArrowSize;
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                    break;
                default:
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                    this.left += boxDirective.width + this.dialogArrowSize - 2;
                    break;
            }
        }
    }
    createDialogBox(element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ColorPickerService)); };
ColorPickerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: ColorPickerComponent, selectors: [["cp-color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"])(_c0, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.dialogElement = _t.first);
    } }, hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) { return ctx.onCancel($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) { return ctx.onAccept($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousedown", function ColorPickerComponent_mousedown_HostBindingHandler($event) { return ctx.onFocusChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("focusin", function ColorPickerComponent_focusin_HostBindingHandler($event) { return ctx.onFocusChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("resize", function ColorPickerComponent_resize_HostBindingHandler($event) { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 20, consts: [[1, "color-picker", 3, "ngStyle", "click"], ["dialogPopup", ""], ["class", "color-picker__arrow", 3, "ngClass", 4, "ngIf"], ["class", "color-picker__sv", "cpSlider", "", 3, "rgX", "rgY", "ngStyle", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "color-picker__controls"], [1, "color-picker__selected"], [1, "color-picker__selected-color"], [3, "ngStyle"], ["type", "button", "class", "color-picker__add-selected", 3, "title", "ngClass", "click", 4, "ngIf"], [1, "color-picker__hav"], ["class", "color-picker__slider color-picker__slider--hue", "cpSlider", "", 3, "rgX", "newValue", "dragStart", "dragEnd", 4, "ngIf"], ["class", "color-picker__slider color-picker__slider--value", "cpSlider", "", 3, "rgX", "newValue", "dragStart", "dragEnd", 4, "ngIf"], ["class", "color-picker__slider color-picker__slider--alpha", "cpSlider", "", 3, "rgX", "newValue", "dragStart", "dragEnd", 4, "ngIf"], ["class", "color-picker__inputs", 4, "ngIf"], [4, "ngIf"], ["class", "color-picker__buttons", 4, "ngIf"], [1, "color-picker__arrow", 3, "ngClass"], ["cpSlider", "", 1, "color-picker__sv", 3, "rgX", "rgY", "ngStyle", "newValue", "dragStart", "dragEnd"], [1, "color-picker__cursor", "color-picker__cursor--sv", 3, "ngClass", "ngStyle"], ["type", "button", 1, "color-picker__add-selected", 3, "title", "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["cpSlider", "", 1, "color-picker__slider", "color-picker__slider--hue", 3, "rgX", "newValue", "dragStart", "dragEnd"], [1, "color-picker__cursor", 3, "ngClass", "ngStyle"], ["cpSlider", "", 1, "color-picker__slider", "color-picker__slider--value", 3, "rgX", "newValue", "dragStart", "dragEnd"], ["cpSlider", "", 1, "color-picker__slider", "color-picker__slider--alpha", 3, "rgX", "newValue", "dragStart", "dragEnd"], [1, "color-picker__slider--alpha-bg", 3, "ngStyle"], [1, "color-picker__inputs"], [1, "color-picker__input-fields"], [4, "ngIf", "ngIfElse"], ["formatSwitch", ""], ["class", "color-picker__input-type", 4, "ngIf"], [1, "color-picker__input-field"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", "cpText", "", 3, "rg", "value", "keyup.enter", "newValue"], [1, "color-picker__input-field-label"], ["class", "color-picker__input-field", 4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", "cpText", "", 3, "rg", "value", "keyup.enter", "newValue"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", "cpText", "", 3, "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", "cpText", "", 3, "rg", "value", "keyup.enter", "newValue"], ["cpText", "", 3, "value", "blur", "keyup.enter", "newValue"], [1, "color-picker__input-type"], [1, "color-picker__input-type-arrow", 3, "click"], [1, "color-picker__separator"], [1, "color-picker__preset"], ["class", "color-picker__preset-label", 4, "ngIf"], ["class", "color-picker__preset-items", 4, "ngIf"], [1, "color-picker__preset-label"], [1, "color-picker__preset-items"], ["class", "color-picker__preset-item", 3, "title", "click", 4, "ngFor", "ngForOf"], ["class", "color-picker__preset-item", 4, "ngFor", "ngForOf"], [1, "color-picker__preset-item", 3, "title", "click"], [1, "color-picker__preset-item-fill", 3, "ngStyle"], ["type", "button", "class", "color-picker__remove-selected", 3, "title", "click", 4, "ngIf"], ["type", "button", 1, "color-picker__remove-selected", 3, "title", "click"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"], [1, "color-picker__preset-item"], [1, "color-picker__buttons"], ["type", "button", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ColorPickerComponent_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ColorPickerComponent_div_2_Template, 1, 1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ColorPickerComponent_div_3_Template, 2, 12, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, ColorPickerComponent_button_8_Template, 4, 4, "button", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, ColorPickerComponent_div_10_Template, 2, 7, "div", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, ColorPickerComponent_div_11_Template, 2, 7, "div", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, ColorPickerComponent_div_12_Template, 3, 10, "div", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(13, ColorPickerComponent_div_13_Template, 6, 3, "div", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(14, ColorPickerComponent_ng_container_14_Template, 5, 2, "ng-container", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(15, ColorPickerComponent_div_15_Template, 3, 2, "div", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"])(11, _c7, ctx.hidden || !ctx.show ? "hidden" : "visible", ctx.top || 0, ctx.left || 0, ctx.position || undefined, ctx.cpWidth || "auto", ctx.cpHeight || "auto"));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpDialogDisplay == ctx.dialogDisplay.popup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpMode == ctx.colorModeInternal.color);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(18, _c1, ctx.selectedColor || ""));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpAddColorButton && !(ctx.cpMaxPresetColors && ((ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || 0) >= ctx.cpMaxPresetColors));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpMode == ctx.colorModeInternal.color);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpMode == ctx.colorModeInternal.grayscale);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpAlphaChannel != ctx.alphaChannel.disabled);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.cpDisableInput && (ctx.cpMode == ctx.colorModeInternal.color || ctx.cpMode == ctx.colorModeInternal.grayscale));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".color-picker[_ngcontent-%COMP%]{position:absolute;z-index:100000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);display:flex;flex-direction:column}.color-picker[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;font-size:12px}.color-picker[_ngcontent-%COMP%]   .color-picker__arrow[_ngcontent-%COMP%]{height:0;width:0;border-style:solid;position:absolute;z-index:999999}.color-picker[_ngcontent-%COMP%]   .color-picker__arrow.color-picker__arrow--top[_ngcontent-%COMP%]{border-width:12px 6px;border-color:#999 transparent transparent;left:12px;bottom:-24px}.color-picker[_ngcontent-%COMP%]   .color-picker__arrow.color-picker__arrow--left[_ngcontent-%COMP%]{border-width:6px 12px;border-color:transparent transparent transparent #999;top:12px;left:230px}.color-picker[_ngcontent-%COMP%]   .color-picker__arrow.color-picker__arrow--right[_ngcontent-%COMP%]{border-width:6px 12px;border-color:transparent #999 transparent transparent;top:12px;left:-24px}.color-picker[_ngcontent-%COMP%]   .color-picker__arrow.color-picker__arrow--bottom[_ngcontent-%COMP%]{border-width:12px 6px;border-color:transparent transparent #999;top:-24px;left:12px}.color-picker[_ngcontent-%COMP%]   .color-picker__cursor[_ngcontent-%COMP%]{cursor:pointer;position:absolute;border-radius:50%;width:16px;height:16px;border:2px solid #222;margin:0 -8px;transition:border .2s linear}.color-picker[_ngcontent-%COMP%]   .color-picker__cursor.color-picker__cursor--sv[_ngcontent-%COMP%]{margin:-8px}.color-picker[_ngcontent-%COMP%]   .color-picker__cursor.color-picker__cursor--light[_ngcontent-%COMP%]{border-color:#dadada}.color-picker[_ngcontent-%COMP%]   .color-picker__sv[_ngcontent-%COMP%]{position:relative;direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-image:linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%),linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);background-size:100% 100%}.color-picker[_ngcontent-%COMP%]   .color-picker__controls[_ngcontent-%COMP%]{display:flex;margin:8px;align-items:center}.color-picker[_ngcontent-%COMP%]   .color-picker__controls[_ngcontent-%COMP%]   .color-picker__selected[_ngcontent-%COMP%]{margin:4px;flex:48px 0 0}.color-picker[_ngcontent-%COMP%]   .color-picker__controls[_ngcontent-%COMP%]   .color-picker__hav[_ngcontent-%COMP%]{margin:-4px -4px -4px 0;flex:auto 1 1}.color-picker[_ngcontent-%COMP%]   .color-picker__selected-color[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;align-items:stretch;justify-content:stretch;border-radius:50%;background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat;box-shadow:0 0 8px -2px rgba(0,0,0,.5)}.color-picker[_ngcontent-%COMP%]   .color-picker__selected-color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.color-picker[_ngcontent-%COMP%]   .color-picker__add-selected[_ngcontent-%COMP%]{background:0 0;border:none;padding:0;width:100%;margin:0;color:#222;transition:color .2s linear;display:flex;align-items:center;justify-content:center;height:100%}.color-picker[_ngcontent-%COMP%]   .color-picker__add-selected[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor;width:24px;height:auto}.color-picker[_ngcontent-%COMP%]   .color-picker__add-selected.color-picker__add-selected--light[_ngcontent-%COMP%]{color:#dadada}.color-picker[_ngcontent-%COMP%]   .color-picker__hav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.color-picker[_ngcontent-%COMP%]   .color-picker__slider[_ngcontent-%COMP%]{width:100%;flex:100% 1 1;height:16px;margin:8px;position:relative}.color-picker[_ngcontent-%COMP%]   .color-picker__slider.color-picker__slider--hue[_ngcontent-%COMP%]{background-size:100% 100%;background-image:linear-gradient(to right,red 0,#ff0 16.6666666667%,#0f0 33.3333333333%,#0ff 50%,#00f 66.6666666667%,#f0f 83.3333333333%,red 100%)}.color-picker[_ngcontent-%COMP%]   .color-picker__slider.color-picker__slider--value[_ngcontent-%COMP%]{background-size:100% 100%;background-image:linear-gradient(to right,#000 0,#fff 100%)}.color-picker[_ngcontent-%COMP%]   .color-picker__slider.color-picker__slider--alpha[_ngcontent-%COMP%]{background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat}.color-picker[_ngcontent-%COMP%]   .color-picker__slider.color-picker__slider--alpha[_ngcontent-%COMP%]   .color-picker__slider--alpha-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.color-picker[_ngcontent-%COMP%]   .color-picker__inputs[_ngcontent-%COMP%]{display:flex;margin:8px;align-items:flex-start}.color-picker[_ngcontent-%COMP%]   .color-picker__inputs[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]{flex:auto 1 1}.color-picker[_ngcontent-%COMP%]   .color-picker__inputs[_ngcontent-%COMP%]   .color-picker__input-type[_ngcontent-%COMP%]{flex:24px 0 0}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]{display:flex}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]{margin:4px;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;flex:20% 1 1}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center;font-size:12px;height:24px;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:100% 1 1;padding:1px;border:1px solid #999;width:100%;background:0 0;min-width:0}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid{box-shadow:none}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.color-picker[_ngcontent-%COMP%]   .color-picker__input-fields[_ngcontent-%COMP%]   .color-picker__input-field[_ngcontent-%COMP%]   .color-picker__input-field-label[_ngcontent-%COMP%]{flex:100% 1 1;display:block;text-align:center;margin-top:4px}.color-picker[_ngcontent-%COMP%]   .color-picker__input-type[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:4px;display:flex;flex-wrap:wrap;background-size:contain;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjMzMzMzMzIiBwb2ludHM9IjUwIDE2IDMwIDQ0IDcwIDQ0ICIvPjxwb2x5Z29uIGZpbGw9IiMzMzMzMzMiIHBvaW50cz0iNTAgODQgNzAgNTYgMzAgNTYgIi8+PC9zdmc+);background-repeat:no-repeat;background-position:center}.color-picker[_ngcontent-%COMP%]   .color-picker__input-type[_ngcontent-%COMP%]   .color-picker__input-type-arrow[_ngcontent-%COMP%]{display:block;cursor:pointer;flex:100% 1 1;width:100%;height:50%}.color-picker[_ngcontent-%COMP%]   .color-picker__separator[_ngcontent-%COMP%]{border-top:1px solid #999;margin-left:8px;margin-right:8px;flex:100% 1 1}.color-picker[_ngcontent-%COMP%]   .color-picker__preset[_ngcontent-%COMP%]{display:flex;margin:8px;align-items:center;flex-wrap:wrap}.color-picker[_ngcontent-%COMP%]   .color-picker__preset-label[_ngcontent-%COMP%]{margin:4px;flex:100% 1 1}.color-picker[_ngcontent-%COMP%]   .color-picker__preset-items[_ngcontent-%COMP%]{display:flex;flex:100% 1 1;flex-wrap:wrap;align-items:flex-start}.color-picker[_ngcontent-%COMP%]   .color-picker__preset-items[_ngcontent-%COMP%]   .color-picker__preset-item[_ngcontent-%COMP%]{position:relative;flex:20px 1 1;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-size:100% 100%;margin:4px;border-radius:4px;border:1px solid #999;cursor:pointer}.color-picker[_ngcontent-%COMP%]   .color-picker__preset-items[_ngcontent-%COMP%]   .color-picker__preset-item[_ngcontent-%COMP%]   .color-picker__preset-item-fill[_ngcontent-%COMP%]{position:relative;width:100%;padding-bottom:100%;border-radius:calc(4px - 1px)}.color-picker[_ngcontent-%COMP%]   .color-picker__preset-items[_ngcontent-%COMP%]   .color-picker__preset-item[_ngcontent-%COMP%]:empty{margin-top:0;margin-bottom:0;border-top:0;border-bottom:0}.color-picker[_ngcontent-%COMP%]   .color-picker__remove-selected[_ngcontent-%COMP%]{border:none;padding:0;margin:0;color:#222;transition:color .2s linear;align-items:center;justify-content:center;box-shadow:0 0 8px -2px rgba(0,0,0,.5);position:absolute;width:12px;height:12px;right:-6px;top:-6px;background:#fff;border-radius:50%;display:flex}.color-picker[_ngcontent-%COMP%]   .color-picker__remove-selected[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor;width:100%;height:auto}.color-picker[_ngcontent-%COMP%]   .color-picker__buttons[_ngcontent-%COMP%]{display:flex;margin:0 8px 8px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.color-picker[_ngcontent-%COMP%]   .color-picker__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:auto 0 0;margin:4px}"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cp-color-picker',
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ColorPickerService }]; }, { dialogElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogPopup', { static: true }]
        }], onCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.esc', ['$event']]
        }], onAccept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.enter', ['$event']]
        }], onFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:focusin', ['$event']]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();

class ColorPickerDirective {
    constructor(injector, cfr, appRef, vcRef, elRef) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this._callbacks = {
            stateChanged: (state) => {
                this.cpToggleChange.emit(state);
                if (state) {
                    this.cpOpen.emit(this.cpColor);
                }
                else {
                    this.cpClose.emit(this.cpColor);
                }
            },
            colorChanged: (value, ignore = true) => {
                this.ignoreChanges = ignore;
                this.cpColorChange.emit(value);
            },
            colorSelectCanceled: () => {
                this.cpColorSelectCancel.emit();
            },
            colorSelected: (value) => {
                this.cpColorSelect.emit(value);
            },
            inputChanged: (event) => {
                this.cpInputChange.emit(event);
            },
            sliderDragStart: (event) => {
                this.cpSliderDragStart.emit(event);
            },
            sliderChanged: (event) => {
                this.cpSliderChange.emit(event);
            },
            sliderDragEnd: (event) => {
                this.cpSliderDragEnd.emit(event);
            },
            presetColorsChanged: (value) => {
                this.cpPresetColorsChange.emit(value);
            }
        };
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpMode = 'color';
        this.cpOutputFormat = OutputFormat.auto;
        this.cpAlphaChannel = AlphaChannel.enabled;
        this.cpFallbackColor = '';
        this.cpPosition = DialogPosition.right;
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpPresetLabel = 'Preset colors';
        this.cpDisableInput = false;
        this.cpDialogDisplay = DialogDisplay.popup;
        this.cpIgnoredElements = new Array();
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color to preset';
        this.cpRemoveColorButtonText = 'Remove color';
        this.cpMaxPresetColors = 6;
        this.cpUseRootViewContainer = false;
        this.cpOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpColorSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpColorSelectCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    get ignoredElements() {
        const ign = Array.isArray(this.cpIgnoredElements) ? this.cpIgnoredElements : [this.cpIgnoredElements];
        return ign.filter(el => !!el);
    }
    handleOpen(event) {
        const path = new Set(composedPath(event));
        const ignored = this.ignoredElements.find(el => path.has(el));
        if (!this.cpDisabled && !ignored) {
            this.openDialog();
        }
    }
    handleInput(event) {
        const value = ((event && event.target && event.target['value'] || '') + '').trim();
        if (this.dialog) {
            this.dialog.setColorFromString(value, true);
        }
        else {
            this.cpColor = value;
            this.cpColorChange.emit(this.cpColor);
        }
    }
    ngOnDestroy() {
        if (this.cmpRef != undefined) {
            this.cmpRef.destroy();
        }
    }
    ngOnChanges(changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
        if (changes.cpColor) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay == DialogDisplay.inline) {
                    this.dialog.setInitialColor(changes.cpColor.currentValue);
                }
                this.dialog.setColorFromString(changes.cpColor.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors && this.dialog) {
            this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
        }
    }
    openDialog() {
        if (!this.dialogCreated) {
            let vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                const classOfRootComponent = this.appRef.componentTypes[0];
                const appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef == this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef! Please expose it by adding \'vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            this.cmpRef = vcRef.createComponent(compFactory, 0, this.injector, []);
            this.dialog = this.cmpRef.instance;
            this.setupDialog();
            if (this.vcRef != vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.cpColor);
        }
    }
    closeDialog() {
        if (this.dialog && this.cpDialogDisplay == DialogDisplay.popup) {
            this.dialog.closeDialog();
        }
    }
    setupDialog() {
        if (this.dialog) {
            this.dialog.setupDialog(Object.assign(Object.assign({}, this), { callbacks: this._callbacks, elementRef: this.elRef, color: this.cpColor }));
        }
    }
}
ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) { return new (t || ColorPickerDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ColorPickerDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: ColorPickerDirective, selectors: [["", "cpColor", ""]], hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("focus", function ColorPickerDirective_focus_HostBindingHandler($event) { return ctx.handleOpen($event); })("click", function ColorPickerDirective_click_HostBindingHandler($event) { return ctx.handleOpen($event); })("input", function ColorPickerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("change", function ColorPickerDirective_change_HostBindingHandler($event) { return ctx.handleInput($event); });
    } }, inputs: { cpColor: "cpColor", cpWidth: "cpWidth", cpHeight: "cpHeight", cpToggle: "cpToggle", cpDisabled: "cpDisabled", cpMode: "cpMode", cpOutputFormat: "cpOutputFormat", cpAlphaChannel: "cpAlphaChannel", cpFallbackColor: "cpFallbackColor", cpPosition: "cpPosition", cpPositionOffset: "cpPositionOffset", cpPositionRelativeToArrow: "cpPositionRelativeToArrow", cpPresetLabel: "cpPresetLabel", cpPresetColors: "cpPresetColors", cpDisableInput: "cpDisableInput", cpDialogDisplay: "cpDialogDisplay", cpIgnoredElements: "cpIgnoredElements", cpSaveClickOutside: "cpSaveClickOutside", cpCloseClickOutside: "cpCloseClickOutside", cpOKButton: "cpOKButton", cpOKButtonText: "cpOKButtonText", cpCancelButton: "cpCancelButton", cpCancelButtonText: "cpCancelButtonText", cpAddColorButton: "cpAddColorButton", cpAddColorButtonText: "cpAddColorButtonText", cpRemoveColorButtonText: "cpRemoveColorButtonText", cpMaxPresetColors: "cpMaxPresetColors", cpUseRootViewContainer: "cpUseRootViewContainer" }, outputs: { cpOpen: "cpOpen", cpClose: "cpClose", cpInputChange: "cpInputChange", cpToggleChange: "cpToggleChange", cpSliderDragStart: "cpSliderDragStart", cpSliderChange: "cpSliderChange", cpSliderDragEnd: "cpSliderDragEnd", cpColorSelect: "cpColorSelect", cpColorSelectCancel: "cpColorSelectCancel", cpColorChange: "cpColorChange", cpPresetColorsChange: "cpPresetColorsChange" }, features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"])()] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorPickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cpColor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { cpColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOutputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAlphaChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpFallbackColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPositionOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPositionRelativeToArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpPresetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDisableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpDialogDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpIgnoredElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpSaveClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCloseClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOKButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOKButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpCancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAddColorButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpAddColorButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpRemoveColorButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpMaxPresetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpUseRootViewContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpSliderDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpColorSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpColorSelectCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cpPresetColorsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], handleOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change', ['$event']]
        }] }); })();

class ColorPickerModule {
}
ColorPickerModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: ColorPickerModule });
ColorPickerModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(ColorPickerModule, { declarations: [TextDirective,
        SliderDirective,
        ColorPickerComponent,
        ColorPickerDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [ColorPickerDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorPickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TextDirective,
                    SliderDirective,
                    ColorPickerComponent,
                    ColorPickerDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    ColorPickerDirective
                ],
                entryComponents: [
                    ColorPickerComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of nxt-color-picker
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=nxt-color-picker.js.map


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nxt-color-picker */ "../../dist/nxt-color-picker/fesm2015/nxt-color-picker.js");




const _c0 = function () { return ["#fff", "#000", "#2889e9", "#e920e9", "#fff500", "rgb(236,64,64)"]; };
const _c1 = function () { return ["#fff", "#2889e9"]; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class AppComponent {
    constructor() {
        this.toggle = false;
        this.rgbaText = 'rgba(165, 26, 214, 0.2)';
        this.arrayColors = {
            color1: '#2883e9',
            color2: '#e920e9',
            color3: 'rgb(255,245,0)',
            color4: 'rgb(236,64,64)',
            color5: 'rgba(45,208,45,1)'
        };
        this.selectedColor = 'color1';
        this.color1 = '#2889e9';
        this.color2 = '#e920e9';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color6 = '#1973c0';
        this.color7 = '#f200bd';
        this.color8 = '#a8ff00';
        this.color9 = '#278ce2';
        this.color10 = '#0a6211';
        this.color11 = '#f2ff00';
        this.color12 = '#f200bd';
        this.color13 = 'rgba(0,255,0,0.5)';
        this.color14 = 'rgb(0,255,255)';
        this.color15 = 'rgb(255,0,0)';
        this.color16 = '#a51ad633';
        this.color17 = '#666666';
        this.color18 = '#ff0000';
        this.cmykColor = new nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["Cmyk"](0, 0, 0, 0);
    }
    onEventLog(event, data) {
        console.log(event, data);
    }
    onChangeColorCmyk(color) {
        const hsva = Object(nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["stringToHsva"])(color);
        if (hsva) {
            const rgba = Object(nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["hsvaToRgba"])(hsva);
            return Object(nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["rgbaToCmyk"])(rgba);
        }
        return new nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["Cmyk"](0, 0, 0, 0);
    }
    onChangeColorHex8(color) {
        const hsva = Object(nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["stringToHsva"])(color, true);
        if (hsva) {
            return Object(nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["formatOutput"])(hsva, nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["OutputFormat"].rgba, null);
        }
        return '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 591, vars: 122, consts: [[1, "container"], ["href", "https://github.com/Alberplz/angular2-color-picker"], ["href", "https://github.com/zefoy/ngx-color-picker"], [1, "row"], [1, "col-md-5"], [3, "cpColor", "cpColorChange", "cpOpen", "cpClose", "cpInputChange", "cpSliderDragStart", "cpSliderDragEnd"], [1, "col-md-7"], [1, "card"], [1, "card-body"], [3, "cpColor", "cpMode", "cpColorChange", "cpOpen", "cpClose", "cpInputChange", "cpSliderDragStart", "cpSliderDragEnd"], [3, "value", "cpColor", "cpColorChange"], [3, "value", "cpOutputFormat", "cpColor", "cpColorChange"], [3, "value", "cpPosition", "cpColor", "cpColorChange"], [1, "change-me", 3, "cpPosition", "cpPositionOffset", "cpPositionRelativeToArrow", "cpColor", "cpColorChange"], [3, "value", "cpCancelButton", "cpColor", "cpColorChange"], [3, "value", "cpOKButton", "cpSaveClickOutside", "cpColor", "cpColorChange"], [3, "cpColor", "cpColorChange"], [1, "clearfix"], [1, "cmyk-text", 2, "color", "rgb(0,255,255)"], [1, "cmyk-text", 2, "color", "rgb(255,0,255)"], [1, "cmyk-text", 2, "color", "rgb(255,255,0)"], [1, "cmyk-text"], [3, "cpPresetColors", "cpColor", "cpColorChange"], [3, "cpAlphaChannel", "cpOutputFormat", "cpPresetColors", "cpAddColorButton", "cpColor", "cpColorChange"], [3, "cpFallbackColor", "cpIgnoredElements", "cpToggle", "cpColor", "cpToggleChange", "cpColorChange"], ["ignoredInput", ""], [1, "btn", "btn-primary", 3, "click"], ["ignoredButton", ""], [3, "value", "cpAlphaChannel", "cpOutputFormat", "cpColor", "cpColorChange"], [1, "row", 2, "height", "320px"], [1, "col-md-3"], [3, "cpToggle", "cpDialogDisplay", "cpCancelButton", "cpColor", "cpColorChange"], [1, "col-md-2"], [1, "color-box", 3, "click"], [1, "col-md-12"], [1, "table"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular Color Picker Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A Color Picker Directive for Angular with no dependencies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "angular2-color-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " and updates from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ngx-color-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_16_listener($event) { return ctx.color1 = $event; })("cpOpen", function AppComponent_Template_input_cpOpen_16_listener($event) { return ctx.onEventLog("cpOpen", $event); })("cpClose", function AppComponent_Template_input_cpClose_16_listener($event) { return ctx.onEventLog("cpClose", $event); })("cpInputChange", function AppComponent_Template_input_cpInputChange_16_listener($event) { return ctx.onEventLog("cpInputChange", $event); })("cpSliderDragStart", function AppComponent_Template_input_cpSliderDragStart_16_listener($event) { return ctx.onEventLog("cpSliderDragStart", $event); })("cpSliderDragEnd", function AppComponent_Template_input_cpSliderDragEnd_16_listener($event) { return ctx.onEventLog("cpSliderDragEnd", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<input [(cpColor)]=\"color\"\n       [style.background]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Or:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "<input [style.background]=\"color\"\n       [cpColor]=\"color\"\n       (cpColorChange)=\"color=$event\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_35_listener($event) { return ctx.color17 = $event; })("cpOpen", function AppComponent_Template_input_cpOpen_35_listener($event) { return ctx.onEventLog("cpOpen", $event); })("cpClose", function AppComponent_Template_input_cpClose_35_listener($event) { return ctx.onEventLog("cpClose", $event); })("cpInputChange", function AppComponent_Template_input_cpInputChange_35_listener($event) { return ctx.onEventLog("cpInputChange", $event); })("cpSliderDragStart", function AppComponent_Template_input_cpSliderDragStart_35_listener($event) { return ctx.onEventLog("cpSliderDragStart", $event); })("cpSliderDragEnd", function AppComponent_Template_input_cpSliderDragEnd_35_listener($event) { return ctx.onEventLog("cpSliderDragEnd", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Grayscale color mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "<input [(cpColor)]=\"color\" \n       [cpMode]=\"'grayscale'\"\n       [style.background]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_47_listener($event) { return ctx.color2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Show the color in the input field:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_59_listener($event) { return ctx.color3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_62_listener($event) { return ctx.color4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Output format:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpOutputFormat]=\"'rgba'\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_74_listener($event) { return ctx.color5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Changing dialog position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpPosition]=\"'bottom'\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_span_cpColorChange_86_listener($event) { return ctx.color6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Change me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You can introduce a offset of the color picker relative to the html element:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "<span [style.color]=\"color\"\n      [cpPosition]=\"'bottom'\"\n      [cpPositionOffset]=\"'50%'\"\n      [cpPositionRelativeToArrow]=\"true\"\n      [(cpColor)]=\"color\">Change me!</span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_99_listener($event) { return ctx.color7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Show cancel button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpCancelButton]=\"true\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_111_listener($event) { return ctx.color8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Change cancel button class, in this example we are using a bootstrap button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpCancelButton]=\"true\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_123_listener($event) { return ctx.color9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Show OK button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpOKButton]=\"true\"\n       [cpSaveClickOutside]=\"false\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_135_listener($event) { ctx.cmykColor = ctx.onChangeColorCmyk($event); return ctx.color10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Change event color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "<input [style.background]=\"color\"\n       [cpColor]=\"color\"\n       (cpColorChange)=\"cmykColor=onChangeColorCmyk($event);color=$event\"/>\n<span [style.font-size.px]=\"100 * cmykColor.c\"/>C</span/>\n<span [style.font-size.px]=\"100 * cmykColor.m\"/>M</span/>\n<span [style.font-size.px]=\"100 * cmykColor.y\"/>Y</span/>\n<span [style.font-size.px]=\"100 * cmykColor.k\"/>K</span/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_160_listener($event) { return ctx.color11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "With preset colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "<input [style.background]=\"color\"\n       [cpPresetColors]=\"['#fff', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)']\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_172_listener($event) { return ctx.color13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Add and remove preset colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "<input [style.background]=\"color\"\n       [cpAlphaChannel]=\"'always'\"\n       [cpOutputFormat]=\"'rgba'\"\n       [cpPresetColors]=\"['#fff', '#2889e9']\"\n       [cpAddColorButton]=\"true\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpToggleChange", function AppComponent_Template_input_cpToggleChange_184_listener($event) { return ctx.toggle = $event; })("cpColorChange", function AppComponent_Template_input_cpColorChange_184_listener($event) { return ctx.color12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_187_listener($event) { return ctx.toggle = !ctx.toggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Use cpToggle with cpIgnoredElements:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "<input #ignoredInput\n       [style.background]=\"color\"\n       [cpIgnoredElements]=\"[ignoredButton, ignoredInput]\"\n       [(cpToggle)]=\"toggle\"\n       [(cpColor)]=\"color\"/>\n<button #ignoredButton (click)=\"toggle=!toggle\"></button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_206_listener($event) { return ctx.color14 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_208_listener($event) { return ctx.color13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_210_listener($event) { ctx.rgbaText = ctx.onChangeColorHex8($event); return ctx.color16 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_input_cpColorChange_212_listener($event) { return ctx.color15 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Change alpha channel behaviour:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpAlphaChannel]=\"'always'\"\n       [cpOutputFormat]=\"'rgba'\"\n       [(cpColor)]=\"color\"/>\n<input [value]=\"color\"\n       [style.background]=\"color13\"\n       [cpAlphaChannel]=\"'disabled'\"\n       [cpOutputFormat]=\"'rgba'\"\n       [(cpColor)]=\"color\"/>\n<input [value]=\"color\"\n       [style.background]=\"rgbaText\"\n       [cpAlphaChannel]=\"'always'\"\n       [cpOutputFormat]=\"'hex'\"\n       [cpColor]=\"color\"\n       (cpColorChange)=\"rgbaText=onChangeColorHex8($event);color16=$event\"/>\n<input [value]=\"color\"\n       [style.background]=\"color\"\n       [cpAlphaChannel]=\"'forced'\"\n       [cpOutputFormat]=\"'hex'\"\n       [(cpColor)]=\"color\"/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cpColorChange", function AppComponent_Template_span_cpColorChange_224_listener($event) { return (ctx.arrayColors[ctx.selectedColor] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_226_listener($event) { return ctx.selectedColor = "color1"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_227_listener($event) { return ctx.selectedColor = "color2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_228_listener($event) { return ctx.selectedColor = "color3"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_229_listener($event) { return ctx.selectedColor = "color4"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_230_listener($event) { return ctx.selectedColor = "color5"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Show the dialog permanently: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "<span [style.background]=\"arrayColors[selectedColor]\"\n      [cpToggle]=\"true\"\n      [cpDialogDisplay]=\"'inline'\"\n      [cpCancelButton]=\"true\"\n      [(cpColor)]=\"arrayColors[selectedColor]\"></span>\n<div [style.background]=\"arrayColors['color1']\"\n     (click)=\"selectedColor='color1'\"></div>\n<div [style.background]=\"arrayColors['color2']\"\n     (click)=\"selectedColor='color2'\"></div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Values (default values in bold)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "cpColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " The color to show in the color picker dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "cpWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "'230px'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Use this option to set color picker dialog width (pixels). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "cpHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "'auto'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Use this option to force color picker dialog height (pixels). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "cpToggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Input/ouput to open/close the color picker. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "cpDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Disable colorpicker. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "cpMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "'color'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ", 'grayscale', 'presets'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Dialog color mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "cpOutputFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "OutputFormat.auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " OutputFormat.hex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " OutputFormat.rgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " OutputFormat.hsla ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "cpAlphaChannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "AlphaChannel.enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " AlphaChannel.enabled: alpha channel is not included for hexadecimal (hex6) values or for values without alpha (alpha = 1).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " AlphaChannel.disabled: alpha channel is completely disabled.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " AlphaChannel.always: alpha channel is included for hexadecimal (hex6) values and values without alpha (alpha = 1).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " AlphaChannel.forced: alpha channel field is added for hexadecimal (hex6) values.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "cpFallbackColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "'#fff'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " Is used when the color is not well-formed or not defined. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "cpPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "DialogPosition.right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " DialogPosition.left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " DialogPosition.top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " DialogPosition.bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "cpPositionOffset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "'0%'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " Dialog offset (percent) relative to the element that contains the directive. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "cpPositionRelativeToArrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ", true ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " Dialog position is calculated relative to the dialog (false) or relative to the dialog arrow (true). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "cpPresetLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "'Preset colors'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " Label for preset colors if any provided used. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "cpPresetColors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " Array of preset colors to show in the color picker dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "cpDisableInput");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " Disables / hides the color input field from the dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "cpDialogDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "DialogDisplay.popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " DialogDisplay.popup: dialog is showed when user clicks in the directive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " DialogDisplay.inline: dialog is showed permanently. You can show/hide the dialog with cpToggle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "cpIgnoredElements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " Array of HTML elements that will be ignored by the color picker when they are clicked. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "cpSaveClickOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, ", false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " If true the initial color is restored when user clicks outside. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "cpCloseClickOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, ", false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " If true the dialog closes when user clicks outside. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "cpOKButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " Shows the Ok button. Saves the selected color. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "cpOKButtonText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "'OK'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "cpCancelButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " Shows the Cancel button. Cancel the selected color. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "cpCancelButtonText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "'Cancel'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "cpAddColorButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " Add or remove colors into your preset panel. The [cpPresetColors] is needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "cpAddColorButtonText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "'Add color to preset'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "cpAddColorButtonText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "'Remove Color'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "cpMaxPresetColors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, " (number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " Use this option to set the max colors allowed into preset panel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "cpUseRootViewContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, ", true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, " Create dialog component in the root view container instead the elements view container.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Description (data format in bold)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "cpOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " Current color value, send when dialog is opened. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "(value: string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "cpClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, " Current color value, send when dialog is closed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "(value: string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "cpInputChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " Input name and its value, send when user changes color through inputs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "(value: InputChangeEvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "cpToggleChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, " Status of the dialog, send when dialog is opened / closed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "(open: boolean)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "cpSliderDragStart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, " Slider name and current color, send when slider dragging starts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "(value: SliderChangeEvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "cpSliderChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " Slider name and its value, send when user changes color through slider. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "(value: SliderChangeEvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "cpSliderDragEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, " Slider name and current color, send when slider dragging ends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "(value: SliderChangeEvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "cpColorSelectCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, " Color select canceled, send when Cancel button is pressed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "(void)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "cpColorSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, " Selected color value, send when user presses the OK button or clicks outside (if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "cpSaveClickOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " is true). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "(value: string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "cpColorChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " Changed color value, send when color is changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "(value: string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "cpPresetColorsChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " Preset colors value, send when Add Color button is pressed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "(value: array)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](185);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpColor", ctx.color1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpColor", ctx.color17)("cpMode", "grayscale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color2)("cpColor", ctx.color2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color3)("cpOutputFormat", "rgba")("cpColor", ctx.color3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color4)("cpOutputFormat", "hsla")("cpColor", ctx.color4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color5)("cpPosition", "bottom")("cpColor", ctx.color5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpPosition", "bottom")("cpPositionOffset", "50%")("cpPositionRelativeToArrow", true)("cpColor", ctx.color6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color7)("cpCancelButton", true)("cpColor", ctx.color7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color8)("cpCancelButton", true)("cpColor", ctx.color8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color9)("cpOKButton", true)("cpSaveClickOutside", false)("cpColor", ctx.color9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpColor", ctx.color10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", 100 * ctx.cmykColor.c, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", 100 * ctx.cmykColor.m, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", 100 * ctx.cmykColor.y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", 100 * ctx.cmykColor.k, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpPresetColors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](117, _c0))("cpColor", ctx.color11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpAlphaChannel", "always")("cpOutputFormat", "rgba")("cpPresetColors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](118, _c1))("cpAddColorButton", true)("cpColor", ctx.color13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpFallbackColor", "#f200bd")("cpIgnoredElements", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](119, _c2, _r1, _r0))("cpToggle", ctx.toggle)("cpColor", ctx.color12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Toggle status: ", ctx.toggle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color14)("cpAlphaChannel", "always")("cpOutputFormat", "rgba")("cpColor", ctx.color14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color13)("cpAlphaChannel", "disabled")("cpOutputFormat", "rgba")("cpColor", ctx.color13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.rgbaText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color16)("cpAlphaChannel", "always")("cpOutputFormat", "hex")("cpColor", ctx.color16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color15)("cpAlphaChannel", "forced")("cpOutputFormat", "hex")("cpColor", ctx.color15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors[ctx.selectedColor], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpToggle", true)("cpDialogDisplay", "inline")("cpCancelButton", true)("cpColor", ctx.arrayColors[ctx.selectedColor]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors["color1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors["color2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors["color3"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors["color4"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.arrayColors["color5"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    } }, directives: [nxt_color_picker__WEBPACK_IMPORTED_MODULE_1__["ColorPickerDirective"]], styles: ["input[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-bottom: 16px;\n}\n\n.cmyk-text[_ngcontent-%COMP%] {\n  float: left;\n  width: 72px;\n  height: 72px;\n  font-weight: bolder;\n  line-height: 72px;\n  text-align: center;\n  text-shadow: 1px 1px 2px #bbb;\n}\n\n.color-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 25px;\n  margin: 16px auto;\n  cursor: pointer;\n}\n\n.change-me[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 30px;\n  font-weight: bolder;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL2FwcC9DOlxcRGV2ZWxvcG1lbnRcXG54dC1jb2xvci1waWNrZXIvcHJvamVjdHNcXGRlbW9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNteWstdGV4dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjYmJiO1xufVxuXG4uY29sb3ItYm94IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoYW5nZS1tZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufSIsImlucHV0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY215ay10ZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjYmJiO1xufVxuXG4uY29sb3ItYm94IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGFuZ2UtbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var nxt_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nxt-color-picker */ "../../dist/nxt-color-picker/fesm2015/nxt-color-picker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            nxt_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        nxt_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    nxt_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\nxt-color-picker\projects\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map