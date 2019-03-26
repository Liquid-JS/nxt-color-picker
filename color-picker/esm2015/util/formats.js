/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColorFormats = {
    HEX: 0,
    RGBA: 1,
    HSLA: 2,
};
export { ColorFormats };
ColorFormats[ColorFormats.HEX] = 'HEX';
ColorFormats[ColorFormats.RGBA] = 'RGBA';
ColorFormats[ColorFormats.HSLA] = 'HSLA';
export class Cmyk {
    /**
     * @param {?} c
     * @param {?} m
     * @param {?} y
     * @param {?} k
     */
    constructor(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}
if (false) {
    /** @type {?} */
    Cmyk.prototype.c;
    /** @type {?} */
    Cmyk.prototype.m;
    /** @type {?} */
    Cmyk.prototype.y;
    /** @type {?} */
    Cmyk.prototype.k;
}
export class Hsla {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} l
     * @param {?} a
     */
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
}
if (false) {
    /** @type {?} */
    Hsla.prototype.h;
    /** @type {?} */
    Hsla.prototype.s;
    /** @type {?} */
    Hsla.prototype.l;
    /** @type {?} */
    Hsla.prototype.a;
}
export class Hsva {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
if (false) {
    /** @type {?} */
    Hsva.prototype.h;
    /** @type {?} */
    Hsva.prototype.s;
    /** @type {?} */
    Hsva.prototype.v;
    /** @type {?} */
    Hsva.prototype.a;
}
export class Rgba {
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @param {?} a
     */
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
if (false) {
    /** @type {?} */
    Rgba.prototype.r;
    /** @type {?} */
    Rgba.prototype.g;
    /** @type {?} */
    Rgba.prototype.b;
    /** @type {?} */
    Rgba.prototype.a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbInV0aWwvZm9ybWF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDSSxNQUFHO0lBQ0gsT0FBSTtJQUNKLE9BQUk7Ozs7OztBQUdSLE1BQU0sT0FBTyxJQUFJOzs7Ozs7O0lBQ2IsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUksQ0FBQztDQUMxRjs7O0lBRGUsaUJBQWdCOztJQUFFLGlCQUFnQjs7SUFBRSxpQkFBZ0I7O0lBQUUsaUJBQWdCOztBQUd0RixNQUFNLE9BQU8sSUFBSTs7Ozs7OztJQUNiLFlBQW1CLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVM7UUFBL0QsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFJLENBQUM7Q0FDMUY7OztJQURlLGlCQUFnQjs7SUFBRSxpQkFBZ0I7O0lBQUUsaUJBQWdCOztJQUFFLGlCQUFnQjs7QUFHdEYsTUFBTSxPQUFPLElBQUk7Ozs7Ozs7SUFDYixZQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTO1FBQS9ELE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7SUFBSSxDQUFDO0NBQzFGOzs7SUFEZSxpQkFBZ0I7O0lBQUUsaUJBQWdCOztJQUFFLGlCQUFnQjs7SUFBRSxpQkFBZ0I7O0FBR3RGLE1BQU0sT0FBTyxJQUFJOzs7Ozs7O0lBQ2IsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUksQ0FBQztDQUMxRjs7O0lBRGUsaUJBQWdCOztJQUFFLGlCQUFnQjs7SUFBRSxpQkFBZ0I7O0lBQUUsaUJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ29sb3JGb3JtYXRzIHtcclxuICAgIEhFWCxcclxuICAgIFJHQkEsXHJcbiAgICBIU0xBXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbXlrIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjOiBudW1iZXIsIHB1YmxpYyBtOiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyBrOiBudW1iZXIpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHNsYSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgbDogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhzdmEge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZ2JhIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByOiBudW1iZXIsIHB1YmxpYyBnOiBudW1iZXIsIHB1YmxpYyBiOiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHsgfVxyXG59XHJcbiJdfQ==