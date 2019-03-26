/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
export { TextDirective };
if (false) {
    /** @type {?} */
    TextDirective.prototype.rg;
    /** @type {?} */
    TextDirective.prototype.text;
    /** @type {?} */
    TextDirective.prototype.newValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXBGO0lBQUE7UUFPYyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQWFoRCxDQUFDOzs7OztJQVhzQyxtQ0FBVzs7OztJQUE5QyxVQUErQyxLQUFVOztZQUMvQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBRWhDLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7YUFBTTs7Z0JBQ0csT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUNsRDtJQUNMLENBQUM7O2dCQW5CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCOzs7cUJBRUksS0FBSzt1QkFDTCxLQUFLOzJCQUVMLE1BQU07OEJBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFXckMsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxhQUFhOzs7SUFDdEIsMkJBQW1COztJQUNuQiw2QkFBa0I7O0lBRWxCLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjcFRleHRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XHJcbiAgICBASW5wdXQoKSByZzogbnVtYmVyXHJcbiAgICBASW5wdXQoKSB0ZXh0OiBhbnlcclxuXHJcbiAgICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgaW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHZhbHVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogbnVtZXJpYywgcmc6IHRoaXMucmcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19