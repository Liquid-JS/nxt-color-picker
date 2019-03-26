/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class TextDirective {
    constructor() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChange(event) {
        /** @type {?} */
        const value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            const numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    }
}
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
if (false) {
    /** @type {?} */
    TextDirective.prototype.rg;
    /** @type {?} */
    TextDirective.prototype.text;
    /** @type {?} */
    TextDirective.prototype.newValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBS3BGLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBT2MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7SUFhaEQsQ0FBQzs7Ozs7SUFYc0MsV0FBVyxDQUFDLEtBQVU7O2NBQy9DLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFFaEMsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNOztrQkFDRyxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQ2xEO0lBQ0wsQ0FBQzs7O1lBbkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTthQUN2Qjs7O2lCQUVJLEtBQUs7bUJBQ0wsS0FBSzt1QkFFTCxNQUFNOzBCQUVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFMakMsMkJBQW1COztJQUNuQiw2QkFBa0I7O0lBRWxCLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjcFRleHRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XHJcbiAgICBASW5wdXQoKSByZzogbnVtYmVyXHJcbiAgICBASW5wdXQoKSB0ZXh0OiBhbnlcclxuXHJcbiAgICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgaW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHZhbHVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogbnVtZXJpYywgcmc6IHRoaXMucmcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19