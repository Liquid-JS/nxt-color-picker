/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Cmyk, Hsla, Hsva, Rgba } from '../util/formats';
import * as i0 from "@angular/core";
var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ColorPickerService.prototype.setActive = /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsva2hsla = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            /** @type {?} */
            var l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * @param {?} hsla
     * @return {?}
     */
    ColorPickerService.prototype.hsla2hsva = /**
     * @param {?} hsla
     * @return {?}
     */
    function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */
        var s = Math.min(hsla.s, 1);
        /** @type {?} */
        var l = Math.min(hsla.l, 1);
        /** @type {?} */
        var a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            /** @type {?} */
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsvaToRgba = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */
        var g;
        /** @type {?} */
        var b;
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        /** @type {?} */
        var i = Math.floor(h * 6);
        /** @type {?} */
        var f = h * 6 - i;
        /** @type {?} */
        var p = v * (1 - s);
        /** @type {?} */
        var q = v * (1 - f * s);
        /** @type {?} */
        var t = v * (1 - (1 - f) * s);
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
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToCmyk = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        else {
            /** @type {?} */
            var c = (1 - rgba.r - k) / (1 - k);
            /** @type {?} */
            var m = (1 - rgba.g - k) / (1 - k);
            /** @type {?} */
            var y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k);
        }
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHsva = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */
        var s;
        /** @type {?} */
        var r = Math.min(rgba.r, 1);
        /** @type {?} */
        var g = Math.min(rgba.g, 1);
        /** @type {?} */
        var b = Math.min(rgba.b, 1);
        /** @type {?} */
        var a = Math.min(rgba.a, 1);
        /** @type {?} */
        var max = Math.max(r, g, b);
        /** @type {?} */
        var min = Math.min(r, g, b);
        /** @type {?} */
        var v = max;
        /** @type {?} */
        var d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
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
    };
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHex = /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        /** @type {?} */
        var hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeRGBA = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.stringToHsva = /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        /** @type {?} */
        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                })
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                })
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                })
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                })
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: (/**
             * @param {?} execResult
             * @return {?}
             */
            function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            })
        });
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                /** @type {?} */
                var parser = stringParsers[key];
                /** @type {?} */
                var match = parser.re.exec(colorString);
                /** @type {?} */
                var color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    ColorPickerService.prototype.outputFormat = /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
            outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }
        switch (outputFormat) {
            case 'hsla':
                /** @type {?} */
                var hsla = this.hsva2hsla(hsva);
                /** @type {?} */
                var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                /** @type {?} */
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                /** @type {?} */
                var allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    };
    ColorPickerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    /** @nocollapse */ ColorPickerService.ngInjectableDef = i0.defineInjectable({ factory: function ColorPickerService_Factory() { return new ColorPickerService(); }, token: ColorPickerService, providedIn: "root" });
    return ColorPickerService;
}());
export { ColorPickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColorPickerService.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29sb3ItcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFBOztBQUd4RDtJQU1JO1FBRlEsV0FBTSxHQUFnQyxJQUFJLENBQUE7SUFFbEMsQ0FBQzs7Ozs7SUFFVixzQ0FBUzs7OztJQUFoQixVQUFpQixNQUFtQztRQUNoRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVNLHNDQUFTOzs7O0lBQWhCLFVBQWlCLElBQVU7O1lBQ2pCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzs7WUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7O1lBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDOztZQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzlCO2FBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxF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VUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Ozs2QkFORDtDQXNRQyxBQWxRRCxJQWtRQztTQS9QWSxrQkFBa0I7Ozs7OztJQUMzQixvQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQ215aywgSHNsYSwgSHN2YSwgUmdiYSB9IGZyb20gJy4uL3V0aWwvZm9ybWF0cydcclxuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50J1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBhY3RpdmU6IENvbG9yUGlja2VyQ29tcG9uZW50IHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRBY3RpdmUoYWN0aXZlOiBDb2xvclBpY2tlckNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUgIT09IGFjdGl2ZSAmJiB0aGlzLmFjdGl2ZS5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLmNsb3NlRGlhbG9nKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhzdmEyaHNsYShoc3ZhOiBIc3ZhKTogSHNsYSB7XHJcbiAgICAgICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYVxyXG5cclxuICAgICAgICBpZiAodiA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMCwgMCwgYSlcclxuICAgICAgICB9IGVsc2UgaWYgKHMgPT09IDAgJiYgdiA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMSwgMSwgYSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBsID0gdiAqICgyIC0gcykgLyAyXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEhzbGEoaCwgdiAqIHMgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpLCBsLCBhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaHNsYTJoc3ZhKGhzbGE6IEhzbGEpOiBIc3ZhIHtcclxuICAgICAgICBjb25zdCBoID0gTWF0aC5taW4oaHNsYS5oLCAxKSwgcyA9IE1hdGgubWluKGhzbGEucywgMSlcclxuICAgICAgICBjb25zdCBsID0gTWF0aC5taW4oaHNsYS5sLCAxKSwgYSA9IE1hdGgubWluKGhzbGEuYSwgMSlcclxuXHJcbiAgICAgICAgaWYgKGwgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDAsIDAsIGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGwgKyBzICogKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAvIDJcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSHN2YShoLCAyICogKHYgLSBsKSAvIHYsIHYsIGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoc3ZhVG9SZ2JhKGhzdmE6IEhzdmEpOiBSZ2JhIHtcclxuICAgICAgICBsZXQgcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlclxyXG5cclxuICAgICAgICBjb25zdCBoID0gaHN2YS5oLCBzID0gaHN2YS5zLCB2ID0gaHN2YS52LCBhID0gaHN2YS5hXHJcblxyXG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKGggKiA2KVxyXG4gICAgICAgIGNvbnN0IGYgPSBoICogNiAtIGlcclxuICAgICAgICBjb25zdCBwID0gdiAqICgxIC0gcylcclxuICAgICAgICBjb25zdCBxID0gdiAqICgxIC0gZiAqIHMpXHJcbiAgICAgICAgY29uc3QgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHIgPSBxLCBnID0gdiwgYiA9IHBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHIgPSBwLCBnID0gdiwgYiA9IHRcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHZcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHIgPSB0LCBnID0gcCwgYiA9IHZcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHIgPSB2LCBnID0gcCwgYiA9IHFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByID0gMCwgZyA9IDAsIGIgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJnYmEociwgZywgYiwgYSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmdiYVRvQ215ayhyZ2JhOiBSZ2JhKTogQ215ayB7XHJcbiAgICAgICAgY29uc3QgazogbnVtYmVyID0gMSAtIE1hdGgubWF4KHJnYmEuciwgcmdiYS5nLCByZ2JhLmIpXHJcblxyXG4gICAgICAgIGlmIChrID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ215aygwLCAwLCAwLCAxKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSAoMSAtIHJnYmEuciAtIGspIC8gKDEgLSBrKVxyXG4gICAgICAgICAgICBjb25zdCBtID0gKDEgLSByZ2JhLmcgLSBrKSAvICgxIC0gaylcclxuICAgICAgICAgICAgY29uc3QgeSA9ICgxIC0gcmdiYS5iIC0gaykgLyAoMSAtIGspXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENteWsoYywgbSwgeSwgaylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJnYmFUb0hzdmEocmdiYTogUmdiYSk6IEhzdmEge1xyXG4gICAgICAgIGxldCBoOiBudW1iZXIsIHM6IG51bWJlclxyXG5cclxuICAgICAgICBjb25zdCByID0gTWF0aC5taW4ocmdiYS5yLCAxKSwgZyA9IE1hdGgubWluKHJnYmEuZywgMSlcclxuICAgICAgICBjb25zdCBiID0gTWF0aC5taW4ocmdiYS5iLCAxKSwgYSA9IE1hdGgubWluKHJnYmEuYSwgMSlcclxuXHJcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXHJcblxyXG4gICAgICAgIGNvbnN0IHY6IG51bWJlciA9IG1heCwgZCA9IG1heCAtIG1pblxyXG5cclxuICAgICAgICBzID0gKG1heCA9PT0gMCkgPyAwIDogZCAvIG1heFxyXG5cclxuICAgICAgICBpZiAobWF4ID09PSBtaW4pIHtcclxuICAgICAgICAgICAgaCA9IDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIGI6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGggLz0gNlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIHMsIHYsIGEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJnYmFUb0hleChyZ2JhOiBSZ2JhLCBhbGxvd0hleDg/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlICovXHJcbiAgICAgICAgbGV0IGhleCA9ICcjJyArICgoMSA8PCAyNCkgfCAocmdiYS5yIDw8IDE2KSB8IChyZ2JhLmcgPDwgOCkgfCByZ2JhLmIpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSlcclxuXHJcbiAgICAgICAgaWYgKGFsbG93SGV4OCkge1xyXG4gICAgICAgICAgICBoZXggKz0gKCgxIDw8IDgpIHwgTWF0aC5yb3VuZChyZ2JhLmEgKiAyNTUpKS50b1N0cmluZygxNikuc3Vic3RyKDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xyXG5cclxuICAgICAgICByZXR1cm4gaGV4XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbm9ybWFsaXplUkdCQShyZ2JhOiBSZ2JhKTogUmdiYSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKE1hdGgucm91bmQocmdiYS5yICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmcgKiAyNTUpLCBNYXRoLnJvdW5kKHJnYmEuYiAqIDI1NSksIHJnYmEuYSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RyaW5nVG9Ic3ZhKGNvbG9yU3RyaW5nOiBzdHJpbmcgPSAnJywgYWxsb3dIZXg4OiBib29sZWFuID0gZmFsc2UpOiBIc3ZhIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IGhzdmE6IEhzdmEgfCBudWxsID0gbnVsbFxyXG5cclxuICAgICAgICBjb2xvclN0cmluZyA9IChjb2xvclN0cmluZyB8fCAnJykudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBjb25zdCBzdHJpbmdQYXJzZXJzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZTogLyhyZ2IpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqJT8sXFxzKihcXGR7MSwzfSlcXHMqJT8oPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sXHJcbiAgICAgICAgICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGV4ZWNSZXN1bHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmdiYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDEwKSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSwgMTApIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZTogLyhoc2wpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqKD86LFxccyooXFxkKyg/OlxcLlxcZCspPylcXHMqKT9cXCkvLFxyXG4gICAgICAgICAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChleGVjUmVzdWx0OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEhzbGEocGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTApIC8gMzYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0sIDEwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOYU4ocGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSkgPyAxIDogcGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgaWYgKGFsbG93SGV4OCkge1xyXG4gICAgICAgICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcmU6IC8jKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KT8kLyxcclxuICAgICAgICAgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoZXhlY1Jlc3VsdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0gfHwgJ0ZGJywgMTYpIC8gMjU1KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICByZTogLyMoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkkLyxcclxuICAgICAgICAgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoZXhlY1Jlc3VsdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICByZTogLyMoW2EtZkEtRjAtOV0pKFthLWZBLUYwLTldKShbYS1mQS1GMC05XSkkLyxcclxuICAgICAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChleGVjUmVzdWx0OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmdiYShwYXJzZUludChleGVjUmVzdWx0WzFdICsgZXhlY1Jlc3VsdFsxXSwgMTYpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0gKyBleGVjUmVzdWx0WzJdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSArIGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3RyaW5nUGFyc2Vycykge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nUGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBzdHJpbmdQYXJzZXJzW2tleV1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnNlci5yZS5leGVjKGNvbG9yU3RyaW5nKSwgY29sb3I6IGFueSA9IG1hdGNoICYmIHBhcnNlci5wYXJzZShtYXRjaClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiBSZ2JhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhzdmEgPSB0aGlzLnJnYmFUb0hzdmEoY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHN2YSA9IHRoaXMuaHNsYTJoc3ZhKGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhzdmFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhzdmFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3V0cHV0Rm9ybWF0KGhzdmE6IEhzdmEsIG91dHB1dEZvcm1hdDogc3RyaW5nLCBhbHBoYUNoYW5uZWw6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChvdXRwdXRGb3JtYXQgPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQgPSBoc3ZhLmEgPCAxID8gJ3JnYmEnIDogJ2hleCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAob3V0cHV0Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hzbGEnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuaHN2YTJoc2xhKGhzdmEpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaHNsYVRleHQgPSBuZXcgSHNsYShNYXRoLnJvdW5kKChoc2xhLmgpICogMzYwKSwgTWF0aC5yb3VuZChoc2xhLnMgKiAxMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoaHNsYS5sICogMTAwKSwgTWF0aC5yb3VuZChoc2xhLmEgKiAxMDApIC8gMTAwKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbGEoJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSwnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHNsYVRleHQuYSArICcpJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCgnICsgaHNsYVRleHQuaCArICcsJyArIGhzbGFUZXh0LnMgKyAnJSwnICsgaHNsYVRleHQubCArICclKSdcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3JnYmEnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmdiYSA9IHRoaXMuZGVub3JtYWxpemVSR0JBKHRoaXMuaHN2YVRvUmdiYShoc3ZhKSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaHN2YS5hIDwgMSB8fCBhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDAgKyAnKSdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbG93SGV4OCA9IChhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2ZvcmNlZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmdiYVRvSGV4KHRoaXMuZGVub3JtYWxpemVSR0JBKHRoaXMuaHN2YVRvUmdiYShoc3ZhKSksIGFsbG93SGV4OClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19