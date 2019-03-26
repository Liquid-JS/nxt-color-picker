import { CommonModule } from '@angular/common';
import { Injectable, Directive, EventEmitter, HostListener, Input, Output, ElementRef, ApplicationRef, ComponentFactoryResolver, Injector, ViewContainerRef, ChangeDetectorRef, Component, ViewChild, ViewEncapsulation, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColorFormats = {
    HEX: 0,
    RGBA: 1,
    HSLA: 2,
};
ColorFormats[ColorFormats.HEX] = 'HEX';
ColorFormats[ColorFormats.RGBA] = 'RGBA';
ColorFormats[ColorFormats.HSLA] = 'HSLA';
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ ColorPickerService.ngInjectableDef = defineInjectable({ factory: function ColorPickerService_Factory() { return new ColorPickerService(); }, token: ColorPickerService, providedIn: "root" });
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} foreground
 * @param {?} background
 * @return {?}
 */
function calculateContrast(foreground, background) {
    if (Math.round(foreground.a * 100) < 100)
        foreground = compositeColors(foreground, background);
    /** @type {?} */
    var luminance1 = calculateLuminance(foreground) + 0.05;
    /** @type {?} */
    var luminance2 = calculateLuminance(background) + 0.05;
    return Math.max(luminance1, luminance2) / Math.min(luminance1, luminance2);
}
/**
 * @param {?} foreground
 * @param {?} background
 * @return {?}
 */
function compositeColors(foreground, background) {
    /** @type {?} */
    var a = compositeAlpha(foreground.a, background.a);
    /** @type {?} */
    var r = compositeComponent(foreground.r, foreground.a, background.r, background.a, a);
    /** @type {?} */
    var g = compositeComponent(foreground.g, foreground.a, background.g, background.a, a);
    /** @type {?} */
    var b = compositeComponent(foreground.b, foreground.a, background.b, background.a, a);
    return new Rgba(r, g, b, a);
}
/**
 * @param {?} foregroundAlpha
 * @param {?} backgroundAlpha
 * @return {?}
 */
function compositeAlpha(foregroundAlpha, backgroundAlpha) {
    return 1 - (1 - backgroundAlpha) * (1 - foregroundAlpha);
}
/**
 * @param {?} fgC
 * @param {?} fgA
 * @param {?} bgC
 * @param {?} bgA
 * @param {?} a
 * @return {?}
 */
function compositeComponent(fgC, fgA, bgC, bgA, a) {
    if (a == 0)
        return 0;
    return ((fgC * fgA) + (bgC * bgA * (1 - fgA))) / a;
}
/**
 * @param {?} color
 * @return {?}
 */
function calculateLuminance(color) {
    /** @type {?} */
    var red = color.r / 255;
    red = red < 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4);
    /** @type {?} */
    var green = color.g / 255;
    green = green < 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
    /** @type {?} */
    var blue = color.b / 255;
    blue = blue < 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4);
    return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
}
/** @type {?} */
var white = new Rgba(218, 218, 218, 1);
/** @type {?} */
var black = new Rgba(34, 34, 34, 1);
/**
 * @param {?} background
 * @return {?}
 */
function opaqueSliderWhite(background) {
    /** @type {?} */
    var cWhite = calculateContrast(white, new Rgba(background.r, background.g, background.b, 1));
    /** @type {?} */
    var cBlack = calculateContrast(black, new Rgba(background.r, background.g, background.b, 1));
    return cWhite > cBlack;
}
/**
 * @param {?} background
 * @return {?}
 */
function transparentSliderWhite(background) {
    /** @type {?} */
    var bg = compositeColors(background, white);
    /** @type {?} */
    var cWhite = calculateContrast(white, new Rgba(bg.r, bg.g, bg.b, 1));
    /** @type {?} */
    var cBlack = calculateContrast(black, new Rgba(bg.r, bg.g, bg.b, 1));
    return cWhite > cBlack;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    /** @type {?} */
    var ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var OutputFormat = {
    auto: 'auto',
    hex: 'hex',
    rgba: 'rgba',
    hsla: 'hsla',
};
/** @enum {string} */
var AlphaChannel = {
    enabled: 'enabled',
    disabled: 'disabled',
    always: 'always',
    forced: 'forced',
};
/** @enum {string} */
var DialogPosition = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom',
};
/** @enum {string} */
var DialogDisplay = {
    popup: 'popup',
    inline: 'inline',
};
/** @enum {string} */
var Position = {
    fixed: 'fixed',
    relative: 'relative',
    static: 'static',
    absolute: 'absolute',
};
/** @enum {number} */
var ColorModeInternal = {
    color: 0,
    grayscale: 1,
    presets: 2,
};
ColorModeInternal[ColorModeInternal.color] = 'color';
ColorModeInternal[ColorModeInternal.grayscale] = 'grayscale';
ColorModeInternal[ColorModeInternal.presets] = 'presets';
/**
 * @param {?} mode
 * @return {?}
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.alphaChannel = AlphaChannel;
        this.colorModeInternal = ColorModeInternal;
        this.dialogDisplay = DialogDisplay;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [
            ColorFormats.HEX,
            ColorFormats.RGBA,
            ColorFormats.HSLA
        ];
        this.useRootViewContainer = false;
        this.position = Position.relative;
        this.cpColorMode = ColorModeInternal.color;
        this.cpPosition = DialogPosition.right;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onCancelColor(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onAcceptColor(event);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider = new SliderPosition(0, 0, 0, 0);
        if (this.cpOutputFormat == OutputFormat.rgba) {
            this.format = ColorFormats.RGBA;
        }
        else if (this.cpOutputFormat == OutputFormat.hsla) {
            this.format = ColorFormats.HSLA;
        }
        else {
            this.format = ColorFormats.HEX;
        }
        this.listenerMouseDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { _this.onMouseDown(event); });
        this.listenerResize = (/**
         * @return {?}
         */
        function () { _this.onResize(); });
        this.openDialog(this.initialColor, false);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay == DialogDisplay.inline) {
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    ColorPickerComponent.prototype.openDialog = /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.closeColorPicker();
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    ColorPickerComponent.prototype.setupDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.cpColorMode = parseColorMode(cpColorMode);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay == DialogDisplay.inline) {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat == OutputFormat.hex &&
            cpAlphaChannel != AlphaChannel.always && cpAlphaChannel != AlphaChannel.forced) {
            this.cpAlphaChannel = AlphaChannel.disabled;
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.setInitialColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.initialColor = color;
    };
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    ColorPickerComponent.prototype.setPresetConfig = /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorFromString = /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        /** @type {?} */
        var hsva;
        if (this.cpAlphaChannel == AlphaChannel.always || this.cpAlphaChannel == AlphaChannel.forced) {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            this.updateColorPicker(emit, update);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (this.position == Position.fixed) {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay != DialogDisplay.inline) {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragEnd = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragStart = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isIE10 && this.cpDialogDisplay == DialogDisplay.popup &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === event.target; })).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            if (this.cpCloseClickOutside) {
                this.closeColorPicker();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onAcceptColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onCancelColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ColorPickerComponent.prototype.onFormatToggle = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length;
        /** @type {?} */
        var nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onColorChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHexInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            /** @type {?} */
            var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel == AlphaChannel.always) {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            /** @type {?} */
            var valid = validHex.test(value);
            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c + c; }))
                        .join('');
                }
                if (this.cpAlphaChannel == AlphaChannel.forced) {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
            }
            this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRedInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.r = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'red',
            valid: valid,
            value: rgba.r,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.b = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'blue',
            valid: valid,
            value: rgba.b,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onGreenInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.g = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'green',
            valid: valid,
            value: rgba.g,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.h = value.v / value.rg;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'hue',
            valid: valid,
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.v = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'value',
            valid: valid,
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.a = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'alpha',
            valid: valid,
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onLightnessInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.l = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'lightness',
            valid: valid,
            value: hsla.l,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onSaturationInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.s = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'saturation',
            valid: valid,
            value: hsla.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAddPresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return (color === value); })).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRemovePresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return (color !== value); }));
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    // Private helper functions for the color picker dialog status
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = 
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.hidden = false;
                _this.setDialogPosition();
                _this.cdRef.detectChanges();
            }), 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.closeColorPicker = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.updateColorPicker = /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (this.cpColorMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0;
        }
        /** @type {?} */
        var lastOutput = this.outputColor;
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
        /** @type {?} */
        var hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
            /** @type {?} */
            var allowHex8 = this.cpAlphaChannel == AlphaChannel.always;
            this.hexText = this.service.rgbaToHex(rgba, allowHex8);
            this.hexAlpha = this.rgbaText.a;
        }
        if (this.cpOutputFormat == OutputFormat.auto) {
            if (this.hsva.a < 1) {
                this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
            }
        }
        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)';
        this.svSliderWhite = opaqueSliderWhite(rgba);
        this.hueSliderWhite = opaqueSliderWhite(hue);
        this.valueSliderWhite = opaqueSliderWhite(rgba);
        this.alphaSliderWhite = transparentSliderWhite(rgba);
        this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
        this.slider = new SliderPosition((this.sliderH || this.hsva.h), this.hsva.s, (1 - this.hsva.v), this.hsva.a);
        if (emit && lastOutput !== this.outputColor) {
            this.directiveInstance.colorChanged(this.outputColor);
        }
    };
    // Private helper functions for the color picker dialog positioning
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = 
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cpDialogDisplay == DialogDisplay.inline) {
            this.position = Position.relative;
        }
        else {
            /** @type {?} */
            var position = Position.static;
            /** @type {?} */
            var transform = '';
            /** @type {?} */
            var style = void 0;
            /** @type {?} */
            var parentNode = null;
            /** @type {?} */
            var transformNode = null;
            /** @type {?} */
            var node = this.directiveElementRef.nativeElement.parentNode;
            /** @type {?} */
            var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position != Position.static && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position == Position.fixed) {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            /** @type {?} */
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position != Position.fixed));
            if (this.useRootViewContainer || (position == Position.fixed && (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                var boxParent = this.createDialogBox(parentNode, (position != Position.fixed));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position == Position.fixed) {
                this.position = Position.fixed;
            }
            if (this.cpPosition == DialogPosition.left) {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else if (this.cpPosition == DialogPosition.top) {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (this.cpPosition == DialogPosition.bottom) {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    // Private helper functions for the color picker dialog positioning and opening
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    ColorPickerComponent.prototype.isDescendant = 
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createDialogBox = /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    ColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cp-color-picker',
                    template: "<div #dialogPopup\r\n    class=\"color-picker\"\r\n    (click)=\"$event.stopPropagation()\"\r\n    [ngStyle]=\"{\r\n        visibility: hidden || !show ? 'hidden' : 'visible',\r\n        top: top || 0,\r\n        left: left || 0,\r\n        position: position || '',\r\n        height: cpHeight || 'auto',\r\n        width: cpWidth || 'auto'\r\n    }\">\r\n    <div *ngIf=\"cpDialogDisplay == dialogDisplay.popup\"\r\n        class=\"color-picker__arrow\"\r\n        [ngClass]=\"'color-picker__arrow--' + cpPosition\"\r\n        [ngStyle]=\"{ \r\n            top: arrowTop\r\n        }\"></div>\r\n    <div *ngIf=\"cpColorMode == colorModeInternal.color\"\r\n        class=\"color-picker__sv\"\r\n        cpSlider\r\n        [rgX]=\"1\"\r\n        [rgY]=\"1\"\r\n        (newValue)=\"onColorChange($event)\"\r\n        (dragStart)=\"onDragStart('saturation-lightness')\"\r\n        (dragEnd)=\"onDragEnd('saturation-lightness')\"\r\n        [ngStyle]=\"{ \r\n            backgroundColor: hueSliderColor || ''\r\n        }\">\r\n        <div class=\"color-picker__cursor color-picker__cursor--sv\"\r\n            [ngClass]=\"{ 'color-picker__cursor--white': svSliderWhite }\"\r\n            [ngStyle]=\"{\r\n                top: (slider?.v || 0) * 100 + '%',\r\n                left: (slider?.s || 0) * 100 + '%'\r\n            }\"></div>\r\n    </div>\r\n    <div class=\"color-picker__controls\">\r\n        <div class=\"color-picker__selected\">\r\n            <div class=\"color-picker__selected-color\">\r\n                <div [ngStyle]=\"{ \r\n                    backgroundColor: selectedColor || ''\r\n                }\"></div>\r\n            </div>\r\n            <button *ngIf=\"cpAddColorButton\"\r\n                class=\"color-picker__add-selected\"\r\n                [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\r\n                (click)=\"onAddPresetColor($event, selectedColor)\">{{ cpAddColorButtonText }}</button>\r\n        </div>\r\n        <div class=\"color-picker__hav\">\r\n            <div *ngIf=\"cpColorMode == colorModeInternal.color\"\r\n                class=\"color-picker__slider color-picker__slider--hue\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onHueChange($event)\"\r\n                (dragStart)=\"onDragStart('hue')\"\r\n                (dragEnd)=\"onDragEnd('hue')\">\r\n                <div class=\"color-picker__cursor\"\r\n                    [ngClass]=\"{ 'color-picker__cursor--white': hueSliderWhite }\"\r\n                    [ngStyle]=\"{\r\n                        left: (slider?.h || 0) * 100 + '%'\r\n                    }\"></div>\r\n            </div>\r\n            <div *ngIf=\"cpColorMode == colorModeInternal.grayscale\"\r\n                class=\"color-picker__slider color-picker__slider--value\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onValueChange($event)\"\r\n                (dragStart)=\"onDragStart('value')\"\r\n                (dragEnd)=\"onDragEnd('value')\">\r\n                <div class=\"color-picker__cursor\"\r\n                    [ngClass]=\"{ 'color-picker__cursor--white': valueSliderWhite }\"\r\n                    [ngStyle]=\"{\r\n                        left: (1 - (slider?.v || 0)) * 100 + '%'\r\n                    }\"></div>\r\n            </div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                class=\"color-picker__slider color-picker__slider--alpha\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onAlphaChange($event)\"\r\n                (dragStart)=\"onDragStart('alpha')\"\r\n                (dragEnd)=\"onDragEnd('alpha')\">\r\n                <div class=\"color-picker__slider--alpha-bg\"\r\n                    [ngStyle]=\"{\r\n                        backgroundImage: alphaSliderColor || ''\r\n                    }\">\r\n                    <div class=\"color-picker__cursor\"\r\n                        [ngClass]=\"{ 'color-picker__cursor--white': alphaSliderWhite }\"\r\n                        [ngStyle]=\"{\r\n                            left: (slider?.a || 0) * 100 + '%'\r\n                        }\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"hsla-text\"\r\n        [style.display]=\"format !== 2 ? 'none' : 'block'\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"360\"\r\n                cpText\r\n                [rg]=\"360\"\r\n                [value]=\"hslaText?.h\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onHueInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.s\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onSaturationInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.l\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onLightnessInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hslaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>H</div>\r\n            <div>S</div>\r\n            <div>L</div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        [style.display]=\"format !== 1 ? 'none' : 'block'\"\r\n        class=\"rgba-text\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.r\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onRedInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.g\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onGreenInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.b\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onBlueInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"rgbaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>R</div>\r\n            <div>G</div>\r\n            <div>B</div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"hex-text\"\r\n        [class.hex-alpha]=\"cpAlphaChannel == alphaChannel.forced\"\r\n        [style.display]=\"format !== 0 ? 'none' : 'block'\">\r\n        <div class=\"box\">\r\n            <input cpText\r\n                [value]=\"hexText\"\r\n                (blur)=\"onHexInput(null)\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onHexInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel == alphaChannel.forced\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hexAlpha\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>Hex</div>\r\n            <div *ngIf=\"cpAlphaChannel == alphaChannel.forced\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.grayscale\"\r\n        class=\"value-text\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.l\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onValueInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hslaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>V</div>\r\n            <div>A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"type-policy\">\r\n        <span class=\"type-policy-arrow\"\r\n            (click)=\"onFormatToggle(1)\"></span>\r\n        <span class=\"type-policy-arrow\"\r\n            (click)=\"onFormatToggle(-1)\"></span>\r\n    </div>\r\n\r\n    <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\r\n        class=\"preset-area\">\r\n        <hr>\r\n\r\n        <div class=\"preset-label\">{{cpPresetLabel}}</div>\r\n\r\n        <div *ngIf=\"cpPresetColors?.length\">\r\n            <div *ngFor=\"let color of cpPresetColors\"\r\n                class=\"preset-color\"\r\n                [style.backgroundColor]=\"color\"\r\n                (click)=\"setColorFromString(color)\">\r\n                <span *ngIf=\"cpAddColorButton\"\r\n                    class=\"{{cpRemoveColorButtonClass}}\"\r\n                    (click)=\"onRemovePresetColor($event, color)\"></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\r\n            class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"cpOKButton || cpCancelButton\"\r\n        class=\"button-area\">\r\n        <button *ngIf=\"cpCancelButton\"\r\n            type=\"button\"\r\n            class=\"{{cpCancelButtonClass}}\"\r\n            (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\r\n\r\n        <button *ngIf=\"cpOKButton\"\r\n            type=\"button\"\r\n            class=\"{{cpOKButtonClass}}\"\r\n            (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\r\n    </div>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [".color-picker{position:absolute;z-index:100000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);display:flex;flex-direction:column}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker .color-picker__sv{position:relative;direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-image:linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%),linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);background-size:100% 100%}.color-picker .color-picker__cursor{cursor:pointer;position:absolute;border-radius:50%;width:16px;height:16px;border:2px solid #222;margin:0 -8px;transition:border .2s linear}.color-picker .color-picker__cursor.color-picker__cursor--sv{margin:-8px}.color-picker .color-picker__cursor.color-picker__cursor--white{border-color:#dadada}.color-picker .color-picker__controls{display:flex;margin:8px;align-items:flex-start}.color-picker .color-picker__controls .color-picker__selected{margin:4px;flex:48px 0 0}.color-picker .color-picker__controls .color-picker__hav{margin:-4px -4px -4px 0;flex:auto 1 1}.color-picker .color-picker__selected-color{width:48px;height:48px;display:flex;align-items:stretch;justify-content:stretch;border-radius:50%;background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat;box-shadow:0 0 8px 0 rgba(0,0,0,.5)}.color-picker .color-picker__selected-color div{width:100%;height:100%;border-radius:50%}.color-picker .color-picker__add-selected{background:0 0;margin:4px 0;border:none;padding:0;width:100%;text-align:center}.color-picker .color-picker__hav{display:flex;flex-wrap:wrap}.color-picker .color-picker__slider{width:100%;flex:100% 1 1;height:16px;margin:8px;position:relative}.color-picker .color-picker__slider.color-picker__slider--hue{background-size:100% 100%;background-image:linear-gradient(to right,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#ff00ff 83.33333%,red 100%)}.color-picker .color-picker__slider.color-picker__slider--value{background-size:100% 100%;background-image:linear-gradient(to right,#000 0,#fff 100%)}.color-picker .color-picker__slider.color-picker__slider--alpha{background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat}.color-picker .color-picker__slider.color-picker__slider--alpha .color-picker__slider--alpha-bg{position:absolute;top:0;left:0;right:0;bottom:0}.color-picker .color-picker__arrow{height:0;width:0;border-style:solid;position:absolute;z-index:999999}.color-picker .color-picker__arrow.color-picker__arrow--top{border-width:12px 6px;border-color:#999 transparent transparent;left:12px}.color-picker .color-picker__arrow.color-picker__arrow--left{border-width:6px 12px;border-color:transparent transparent transparent #999;top:12px;left:230px}.color-picker .color-picker__arrow.color-picker__arrow--right{border-width:6px 12px;border-color:transparent #999 transparent transparent;top:12px;left:-24px}.color-picker .color-picker__arrow.color-picker__arrow--bottom{border-width:12px 6px;border-color:transparent transparent #999;top:-24px;left:12px}.color-picker input{text-align:center;font-size:13px;height:26px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:1px solid #a9a9a9;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:1px solid #a9a9a9}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:1px solid #a9a9a9}.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:linear-gradient(to right,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#ff00ff 83.33333%,red 100%)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:linear-gradient(to right,#000 0,#fff 100%)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:24px;height:24px;background-size:contain;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjMzMzMzMzIiBwb2ludHM9IjUwIDE2IDMwIDQ0IDcwIDQ0ICIvPjxwb2x5Z29uIGZpbGw9IiMzMzMzMzMiIHBvaW50cz0iNTAgODQgNzAgNTYgMzAgNTYgIi8+PC9zdmc+);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(\"data:image/png;base64, \\aiVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\")}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:0 0}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class::before{content:'x';position:relative;bottom:3.5px;display:inline-block;font-size:10px}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        dialogElement: [{ type: ViewChild, args: ['dialogPopup',] }],
        handleEsc: [{ type: HostListener, args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: HostListener, args: ['document:keyup.enter', ['$event'],] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpOutputFormat = OutputFormat.auto;
        this.cpAlphaChannel = AlphaChannel.enabled;
        this.cpDisableInput = false;
        this.cpDialogDisplay = DialogDisplay.popup;
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = DialogPosition.right;
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new EventEmitter(true);
        this.cpToggleChange = new EventEmitter(true);
        this.cpSliderChange = new EventEmitter(true);
        this.cpSliderDragEnd = new EventEmitter(true);
        this.cpSliderDragStart = new EventEmitter(true);
        this.cpOpen = new EventEmitter(true);
        this.cpClose = new EventEmitter(true);
        this.cpCancel = new EventEmitter(true);
        this.cpSelect = new EventEmitter(true);
        this.cpColorChange = new EventEmitter(false);
        this.cpPresetColorsChange = new EventEmitter(true);
    }
    Object.defineProperty(ColorPickerDirective.prototype, "cpColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cpColor;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cpColor = val;
            if (this.dialog)
                this.dialog.setColorFromString(val, false);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay == DialogDisplay.inline) {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialogCreated) {
            /** @type {?} */
            var vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                /** @type {?} */
                var classOfRootComponent = this.appRef.componentTypes[0];
                /** @type {?} */
                var appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            this.cmpRef = vcRef.createComponent(compFactory, 0, this.injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.cpColor, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.cpColor);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.cpDialogDisplay == DialogDisplay.popup) {
            this.dialog.closeDialog();
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ColorPickerDirective.prototype.stateChanged = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.cpOpen.emit(this.cpColor);
        }
        else {
            this.cpClose.emit(this.cpColor);
        }
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.cpColorChange.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.cpCancel.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpSelect.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var ignored = this.cpIgnoredElements.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === element; }));
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.cpColor = event.target.value;
            this.cpColorChange.emit(this.cpColor);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cpColor]'
                },] }
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
    ColorPickerDirective.propDecorators = {
        cpColor: [{ type: Input }],
        cpWidth: [{ type: Input }],
        cpHeight: [{ type: Input }],
        cpToggle: [{ type: Input }],
        cpDisabled: [{ type: Input }],
        cpIgnoredElements: [{ type: Input }],
        cpFallbackColor: [{ type: Input }],
        cpColorMode: [{ type: Input }],
        cpOutputFormat: [{ type: Input }],
        cpAlphaChannel: [{ type: Input }],
        cpDisableInput: [{ type: Input }],
        cpDialogDisplay: [{ type: Input }],
        cpSaveClickOutside: [{ type: Input }],
        cpCloseClickOutside: [{ type: Input }],
        cpUseRootViewContainer: [{ type: Input }],
        cpPosition: [{ type: Input }],
        cpPositionOffset: [{ type: Input }],
        cpPositionRelativeToArrow: [{ type: Input }],
        cpOKButton: [{ type: Input }],
        cpOKButtonText: [{ type: Input }],
        cpOKButtonClass: [{ type: Input }],
        cpCancelButton: [{ type: Input }],
        cpCancelButtonText: [{ type: Input }],
        cpCancelButtonClass: [{ type: Input }],
        cpPresetLabel: [{ type: Input }],
        cpPresetColors: [{ type: Input }],
        cpMaxPresetColorsLength: [{ type: Input }],
        cpPresetEmptyMessage: [{ type: Input }],
        cpPresetEmptyMessageClass: [{ type: Input }],
        cpAddColorButton: [{ type: Input }],
        cpAddColorButtonText: [{ type: Input }],
        cpRemoveColorButtonClass: [{ type: Input }],
        cpInputChange: [{ type: Output }],
        cpToggleChange: [{ type: Output }],
        cpSliderChange: [{ type: Output }],
        cpSliderDragEnd: [{ type: Output }],
        cpSliderDragStart: [{ type: Output }],
        cpOpen: [{ type: Output }],
        cpClose: [{ type: Output }],
        cpCancel: [{ type: Output }],
        cpSelect: [{ type: Output }],
        cpColorChange: [{ type: Output }],
        cpPresetColorsChange: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click',] }],
        handleFocus: [{ type: HostListener, args: ['focus',] }],
        handleInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.move(event); });
        this.listenerStop = (/**
         * @return {?}
         */
        function () { return _this.stop(); });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @private
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @private
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cpSlider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: Input }],
        rgY: [{ type: Input }],
        slider: [{ type: Input }],
        dragEnd: [{ type: Output }],
        dragStart: [{ type: Output }],
        newValue: [{ type: Output }],
        mouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            var numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    };
    TextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cpText]'
                },] }
    ];
    TextDirective.propDecorators = {
        rg: [{ type: Input }],
        text: [{ type: Input }],
        newValue: [{ type: Output }],
        inputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TextDirective,
                        SliderDirective,
                        ColorPickerComponent,
                        ColorPickerDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ColorPickerComponent,
                        ColorPickerDirective
                    ],
                    entryComponents: [
                        ColorPickerComponent
                    ]
                },] }
    ];
    return ColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ColorPickerService, ColorPickerComponent, ColorPickerModule, ColorFormats, Cmyk, Hsla, Hsva, Rgba, parseColorMode, OutputFormat, AlphaChannel, DialogPosition, DialogDisplay, Position, ColorModeInternal, ColorPickerDirective as ɵc, SliderDirective as ɵb, TextDirective as ɵa };

//# sourceMappingURL=color-picker.js.map