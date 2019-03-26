/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class SliderDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.move(event));
        this.listenerStop = (/**
         * @return {?}
         */
        () => this.stop());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseDown(event) {
        this.start(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchStart(event) {
        this.start(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    move(event) {
        event.preventDefault();
        this.setCursor(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    start(event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    }
    /**
     * @private
     * @return {?}
     */
    stop() {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    getX(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    getY(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    setCursor(event) {
        /** @type {?} */
        const width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        const height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        const x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cpSlider]'
            },] }
];
/** @nocollapse */
SliderDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFLaEcsTUFBTSxPQUFPLGVBQWU7Ozs7SUFzQnhCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFiM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDNUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFFOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFXeEMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBO1FBRXBELElBQUksQ0FBQyxZQUFZOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQTtJQUN6QyxDQUFDOzs7OztJQVpzQyxTQUFTLENBQUMsS0FBVTtRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCLENBQUM7Ozs7O0lBRXVDLFVBQVUsQ0FBQyxLQUFVO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckIsQ0FBQzs7Ozs7O0lBUU8sSUFBSSxDQUFDLEtBQVU7UUFDbkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxL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RUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDMUY7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZEO2FBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUN0RDtJQUNMLENBQUM7OztZQXpGSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7YUFDekI7Ozs7WUFKbUIsVUFBVTs7O2tCQVN6QixLQUFLO2tCQUNMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxNQUFNO3dCQUNOLE1BQU07dUJBRU4sTUFBTTt3QkFFTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUlwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBakJ0Qyx1Q0FBeUI7Ozs7O0lBQ3pCLHVDQUF5Qjs7SUFFekIsOEJBQW9COztJQUNwQiw4QkFBb0I7O0lBRXBCLGlDQUF1Qjs7SUFFdkIsa0NBQXNDOztJQUN0QyxvQ0FBd0M7O0lBRXhDLG1DQUE0Qzs7Ozs7SUFVaEMsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2NwU2xpZGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyTW92ZTogYW55XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyU3RvcDogYW55XHJcblxyXG4gICAgQElucHV0KCkgcmdYOiBudW1iZXJcclxuICAgIEBJbnB1dCgpIHJnWTogbnVtYmVyXHJcblxyXG4gICAgQElucHV0KCkgc2xpZGVyOiBzdHJpbmdcclxuXHJcbiAgICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gICAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICAgIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2VEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKSB0b3VjaFN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyTW92ZSA9IChldmVudDogYW55KSA9PiB0aGlzLm1vdmUoZXZlbnQpXHJcblxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJTdG9wID0gKCkgPT4gdGhpcy5zdG9wKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoZXZlbnQpXHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcClcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpXHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFgoZXZlbnQ6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVggPSAoZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVhcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICBjb25zdCBwYWdlWSA9IChldmVudC5wYWdlWSAhPT0gdW5kZWZpbmVkKSA/IGV2ZW50LnBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxyXG5cclxuICAgICAgICByZXR1cm4gcGFnZVkgLSBwb3NpdGlvbi50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEN1cnNvcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFgoZXZlbnQpLCB3aWR0aCkpXHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0WShldmVudCksIGhlaWdodCkpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgczogeCAvIHdpZHRoLCB2OiAoMSAtIHkgLyBoZWlnaHQpLCByZ1g6IHRoaXMucmdYLCByZ1k6IHRoaXMucmdZIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJnWCA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeSAvIGhlaWdodCwgcmdZOiB0aGlzLnJnWSB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHggLyB3aWR0aCwgcmdYOiB0aGlzLnJnWCB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=