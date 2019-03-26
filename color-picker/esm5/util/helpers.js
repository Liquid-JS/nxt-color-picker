/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function detectIE() {
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
export { SliderPosition };
if (false) {
    /** @type {?} */
    SliderPosition.prototype.h;
    /** @type {?} */
    SliderPosition.prototype.s;
    /** @type {?} */
    SliderPosition.prototype.v;
    /** @type {?} */
    SliderPosition.prototype.a;
}
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());
export { SliderDimension };
if (false) {
    /** @type {?} */
    SliderDimension.prototype.h;
    /** @type {?} */
    SliderDimension.prototype.s;
    /** @type {?} */
    SliderDimension.prototype.v;
    /** @type {?} */
    SliderDimension.prototype.a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbInV0aWwvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxVQUFVLFFBQVE7O1FBQ2hCLEVBQUUsR0FBRyxFQUFFO0lBRVgsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDbEMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7S0FDekM7O1FBRUssSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRWhDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNWLDBDQUEwQztRQUMxQyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUNyRTtJQUVELGdCQUFnQjtJQUNoQixPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDO0FBRUQ7SUFDSSx3QkFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUksQ0FBQztJQUMzRixxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGUsMkJBQWdCOztJQUFFLDJCQUFnQjs7SUFBRSwyQkFBZ0I7O0lBQUUsMkJBQWdCOztBQUd0RjtJQUNJLHlCQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTO1FBQS9ELE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7SUFBSSxDQUFDO0lBQzNGLHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEZSw0QkFBZ0I7O0lBQUUsNEJBQWdCOztJQUFFLDRCQUFnQjs7SUFBRSw0QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0SUUoKTogYm9vbGVhbiB8IG51bWJlciB7XHJcbiAgICBsZXQgdWEgPSAnJ1xyXG5cclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ21zaWUgJylcclxuXHJcbiAgICBpZiAobXNpZSA+IDApIHtcclxuICAgICAgICAvLyBJRSAxMCBvciBvbGRlciA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKG1zaWUgKyA1LCB1YS5pbmRleE9mKCcuJywgbXNpZSkpLCAxMClcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlciBicm93c2VyXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlclBvc2l0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyRGltZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHsgfVxyXG59XHJcbiJdfQ==