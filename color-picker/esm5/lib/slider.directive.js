/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
export { SliderDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.listenerMove;
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.listenerStop;
    /** @type {?} */
    SliderDirective.prototype.rgX;
    /** @type {?} */
    SliderDirective.prototype.rgY;
    /** @type {?} */
    SliderDirective.prototype.slider;
    /** @type {?} */
    SliderDirective.prototype.dragEnd;
    /** @type {?} */
    SliderDirective.prototype.dragStart;
    /** @type {?} */
    SliderDirective.prototype.newValue;
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFaEc7SUF5QkkseUJBQW9CLEtBQWlCO1FBQXJDLGlCQUlDO1FBSm1CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFiM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDNUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFFOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFXeEMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhCLENBQWdCLENBQUEsQ0FBQTtRQUVwRCxJQUFJLENBQUMsWUFBWTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUEsQ0FBQTtJQUN6QyxDQUFDOzs7OztJQVpzQyxtQ0FBUzs7OztJQUFoRCxVQUFpRCxLQUFVO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckIsQ0FBQzs7Ozs7SUFFdUMsb0NBQVU7Ozs7SUFBbEQsVUFBbUQsS0FBVTtRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCLENBQUM7Ozs7OztJQVFPLDhCQUFJOzs7OztJQUFaLFVBQWEsS0FBVTtRQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7Ozs7SUFFTywrQkFB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O0lBQ3RDLG9DQUF3Qzs7SUFFeEMsbUNBQTRDOzs7OztJQVVoQyxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY3BTbGlkZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyRGlyZWN0aXZlIHtcclxuICAgIHByaXZhdGUgbGlzdGVuZXJNb3ZlOiBhbnlcclxuICAgIHByaXZhdGUgbGlzdGVuZXJTdG9wOiBhbnlcclxuXHJcbiAgICBASW5wdXQoKSByZ1g6IG51bWJlclxyXG4gICAgQElucHV0KCkgcmdZOiBudW1iZXJcclxuXHJcbiAgICBASW5wdXQoKSBzbGlkZXI6IHN0cmluZ1xyXG5cclxuICAgIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gICAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBtb3VzZURvd24oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnQoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pIHRvdWNoU3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnQoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJNb3ZlID0gKGV2ZW50OiBhbnkpID0+IHRoaXMubW92ZShldmVudClcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lclN0b3AgPSAoKSA9PiB0aGlzLnN0b3AoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICB0aGlzLnNldEN1cnNvcihldmVudClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEN1cnNvcihldmVudClcclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpXHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmxpc3RlbmVyU3RvcClcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSlcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSlcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WChldmVudDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICBjb25zdCBwYWdlWCA9IChldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkKSA/IGV2ZW50LnBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWFxyXG5cclxuICAgICAgICByZXR1cm4gcGFnZVggLSBwb3NpdGlvbi5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRZKGV2ZW50OiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZXHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlWSAtIHBvc2l0aW9uLnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q3Vyc29yKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0WChldmVudCksIHdpZHRoKSlcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRZKGV2ZW50KSwgaGVpZ2h0KSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmdYICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyBzOiB4IC8gd2lkdGgsIHY6ICgxIC0geSAvIGhlaWdodCksIHJnWDogdGhpcy5yZ1gsIHJnWTogdGhpcy5yZ1kgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmdYID09PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiB5IC8gaGVpZ2h0LCByZ1k6IHRoaXMucmdZIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeCAvIHdpZHRoLCByZ1g6IHRoaXMucmdYIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==