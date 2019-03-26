/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostListener, Injector, Input, Output, ViewContainerRef } from '@angular/core';
import { AlphaChannel, DialogDisplay, DialogPosition, OutputFormat } from '../util/types';
import { ColorPickerComponent } from './color-picker/color-picker.component';
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
export { ColorPickerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.dialogCreated;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.ignoreChanges;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.cmpRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype._cpColor;
    /** @type {?} */
    ColorPickerDirective.prototype.cpWidth;
    /** @type {?} */
    ColorPickerDirective.prototype.cpHeight;
    /** @type {?} */
    ColorPickerDirective.prototype.cpToggle;
    /** @type {?} */
    ColorPickerDirective.prototype.cpDisabled;
    /** @type {?} */
    ColorPickerDirective.prototype.cpIgnoredElements;
    /** @type {?} */
    ColorPickerDirective.prototype.cpFallbackColor;
    /** @type {?} */
    ColorPickerDirective.prototype.cpColorMode;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOutputFormat;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAlphaChannel;
    /** @type {?} */
    ColorPickerDirective.prototype.cpDisableInput;
    /** @type {?} */
    ColorPickerDirective.prototype.cpDialogDisplay;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSaveClickOutside;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCloseClickOutside;
    /** @type {?} */
    ColorPickerDirective.prototype.cpUseRootViewContainer;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPosition;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPositionOffset;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPositionRelativeToArrow;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetLabel;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetColors;
    /** @type {?} */
    ColorPickerDirective.prototype.cpMaxPresetColorsLength;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetEmptyMessage;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetEmptyMessageClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAddColorButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAddColorButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpRemoveColorButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpInputChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpToggleChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderDragEnd;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderDragStart;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOpen;
    /** @type {?} */
    ColorPickerDirective.prototype.cpClose;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancel;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSelect;
    /** @type {?} */
    ColorPickerDirective.prototype.cpColorChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetColorsChange;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFNLE9BQU8sRUFBRSxZQUFZLEVBQWEsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUE7QUFFNUU7SUFxR0ksOEJBQ1ksUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsS0FBdUIsRUFDdkIsS0FBaUI7UUFKakIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBbkdyQixrQkFBYSxHQUFZLEtBQUssQ0FBQTtRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQTtRQWdCN0IsWUFBTyxHQUFXLE9BQU8sQ0FBQTtRQUN6QixhQUFRLEdBQVcsTUFBTSxDQUFBO1FBRXpCLGFBQVEsR0FBWSxLQUFLLENBQUE7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQTtRQUUzQixzQkFBaUIsR0FBUSxFQUFFLENBQUE7UUFFM0Isb0JBQWUsR0FBVyxFQUFFLENBQUE7UUFFNUIsZ0JBQVcsR0FBYyxPQUFPLENBQUE7UUFFaEMsbUJBQWMsR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQTtRQUNoRCxtQkFB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QywwQ0FBb0M7O0lBRXBDLGlEQUFvQzs7SUFFcEMsK0NBQXFDOztJQUVyQywyQ0FBeUM7O0lBRXpDLDhDQUF5RDs7SUFDekQsOENBQTREOztJQUU1RCw4Q0FBd0M7O0lBRXhDLCtDQUE2RDs7SUFFN0Qsa0RBQTJDOztJQUMzQyxtREFBNEM7O0lBRTVDLHNEQUFnRDs7SUFFaEQsMENBQTBEOztJQUMxRCxnREFBd0M7O0lBQ3hDLHlEQUFtRDs7SUFFbkQsMENBQW9DOztJQUNwQyw4Q0FBc0M7O0lBQ3RDLCtDQUF1RDs7SUFFdkQsOENBQXdDOztJQUN4QyxrREFBOEM7O0lBQzlDLG1EQUErRDs7SUFFL0QsNkNBQWdEOztJQUNoRCw4Q0FBaUM7O0lBQ2pDLHVEQUE0Qzs7SUFFNUMsb0RBQXlEOztJQUN6RCx5REFBbUU7O0lBRW5FLGdEQUEwQzs7SUFDMUMsb0RBQW1EOztJQUVuRCx3REFBMEU7O0lBRTFFLDZDQUFxRDs7SUFFckQsOENBQTBEOztJQUUxRCw4Q0FBc0Q7O0lBQ3RELCtDQUEwRDs7SUFDMUQsaURBQTREOztJQUU1RCxzQ0FBaUQ7O0lBQ2pELHVDQUFrRDs7SUFFbEQsd0NBQW1EOztJQUNuRCx3Q0FBbUQ7O0lBQ25ELDZDQUF5RDs7SUFFekQsb0RBQTREOzs7OztJQWV4RCx3Q0FBMEI7Ozs7O0lBQzFCLG1DQUFxQzs7Ozs7SUFDckMsc0NBQThCOzs7OztJQUM5QixxQ0FBK0I7Ozs7O0lBQy9CLHFDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5qZWN0b3IsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQWxwaGFDaGFubmVsLCBDb2xvck1vZGUsIERpYWxvZ0Rpc3BsYXksIERpYWxvZ1Bvc2l0aW9uLCBPdXRwdXRGb3JtYXQgfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2NwQ29sb3JdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IENvbG9yUGlja2VyQ29tcG9uZW50XHJcblxyXG4gICAgcHJpdmF0ZSBkaWFsb2dDcmVhdGVkOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgaWdub3JlQ2hhbmdlczogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHJpdmF0ZSBjbXBSZWY6IENvbXBvbmVudFJlZjxDb2xvclBpY2tlckNvbXBvbmVudD5cclxuXHJcbiAgICBwcml2YXRlIF9jcENvbG9yOiBzdHJpbmdcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY3BDb2xvcih2YWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NwQ29sb3IgPSB2YWxcclxuICAgICAgICBpZiAodGhpcy5kaWFsb2cpXHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyh2YWwsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjcENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jcENvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgY3BXaWR0aDogc3RyaW5nID0gJzIzMHB4J1xyXG4gICAgQElucHV0KCkgY3BIZWlnaHQ6IHN0cmluZyA9ICdhdXRvJ1xyXG5cclxuICAgIEBJbnB1dCgpIGNwVG9nZ2xlOiBib29sZWFuID0gZmFsc2VcclxuICAgIEBJbnB1dCgpIGNwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIEBJbnB1dCgpIGNwSWdub3JlZEVsZW1lbnRzOiBhbnkgPSBbXVxyXG5cclxuICAgIEBJbnB1dCgpIGNwRmFsbGJhY2tDb2xvcjogc3RyaW5nID0gJydcclxuXHJcbiAgICBASW5wdXQoKSBjcENvbG9yTW9kZTogQ29sb3JNb2RlID0gJ2NvbG9yJ1xyXG5cclxuICAgIEBJbnB1dCgpIGNwT3V0cHV0Rm9ybWF0OiBPdXRwdXRGb3JtYXQgPSBPdXRwdXRGb3JtYXQuYXV0b1xyXG4gICAgQElucHV0KCkgY3BBbHBoYUNoYW5uZWw6IEFscGhhQ2hhbm5lbCA9IEFscGhhQ2hhbm5lbC5lbmFibGVkXHJcblxyXG4gICAgQElucHV0KCkgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIEBJbnB1dCgpIGNwRGlhbG9nRGlzcGxheTogRGlhbG9nRGlzcGxheSA9IERpYWxvZ0Rpc3BsYXkucG9wdXBcclxuXHJcbiAgICBASW5wdXQoKSBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBASW5wdXQoKSBjcENsb3NlQ2xpY2tPdXRzaWRlOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIEBJbnB1dCgpIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIEBJbnB1dCgpIGNwUG9zaXRpb246IERpYWxvZ1Bvc2l0aW9uID0gRGlhbG9nUG9zaXRpb24ucmlnaHRcclxuICAgIEBJbnB1dCgpIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyA9ICcwJSdcclxuICAgIEBJbnB1dCgpIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIEBJbnB1dCgpIGNwT0tCdXR0b246IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgQElucHV0KCkgY3BPS0J1dHRvblRleHQ6IHN0cmluZyA9ICdPSydcclxuICAgIEBJbnB1dCgpIGNwT0tCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLW9rLWJ1dHRvbi1jbGFzcydcclxuXHJcbiAgICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZyA9ICdDYW5jZWwnXHJcbiAgICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3AtY2FuY2VsLWJ1dHRvbi1jbGFzcydcclxuXHJcbiAgICBASW5wdXQoKSBjcFByZXNldExhYmVsOiBzdHJpbmcgPSAnUHJlc2V0IGNvbG9ycydcclxuICAgIEBJbnB1dCgpIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXVxyXG4gICAgQElucHV0KCkgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlciA9IDZcclxuXHJcbiAgICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nID0gJ05vIGNvbG9ycyBhZGRlZCdcclxuICAgIEBJbnB1dCgpIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZyA9ICdwcmVzZXQtZW1wdHktbWVzc2FnZSdcclxuXHJcbiAgICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuID0gZmFsc2VcclxuICAgIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmcgPSAnQWRkIGNvbG9yJ1xyXG5cclxuICAgIEBJbnB1dCgpIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLXJlbW92ZS1jb2xvci1idXR0b24tY2xhc3MnXHJcblxyXG4gICAgQE91dHB1dCgpIGNwSW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSlcclxuXHJcbiAgICBAT3V0cHV0KCkgY3BUb2dnbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpXHJcblxyXG4gICAgQE91dHB1dCgpIGNwU2xpZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpXHJcbiAgICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpXHJcbiAgICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSlcclxuXHJcbiAgICBAT3V0cHV0KCkgY3BPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpXHJcbiAgICBAT3V0cHV0KCkgY3BDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKVxyXG5cclxuICAgIEBPdXRwdXQoKSBjcENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKVxyXG4gICAgQE91dHB1dCgpIGNwU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpXHJcbiAgICBAT3V0cHV0KCkgY3BDb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihmYWxzZSlcclxuXHJcbiAgICBAT3V0cHV0KCkgY3BQcmVzZXRDb2xvcnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSlcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRGb2N1cygpXHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBoYW5kbGVGb2N1cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Rm9jdXMoKVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgaGFuZGxlSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNtcFJlZiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5jcFRvZ2dsZSAmJiAhdGhpcy5jcERpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghY2hhbmdlcy5jcFRvZ2dsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5jb2xvclBpY2tlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWFsb2cgJiYgIXRoaXMuaWdub3JlQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0SW5pdGlhbENvbG9yKGNoYW5nZXMuY29sb3JQaWNrZXIuY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyhjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lciAmJiB0aGlzLmNwRGlhbG9nRGlzcGxheSAhPSBEaWFsb2dEaXNwbGF5LmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlnbm9yZUNoYW5nZXMgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY3BQcmVzZXRMYWJlbCB8fCBjaGFuZ2VzLmNwUHJlc2V0Q29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0UHJlc2V0Q29uZmlnKHRoaXMuY3BQcmVzZXRMYWJlbCwgdGhpcy5jcFByZXNldENvbG9ycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkRpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICBsZXQgdmNSZWYgPSB0aGlzLnZjUmVmXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0NyZWF0ZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jcFVzZVJvb3RWaWV3Q29udGFpbmVyICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ICE9IERpYWxvZ0Rpc3BsYXkuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc09mUm9vdENvbXBvbmVudCA9IHRoaXMuYXBwUmVmLmNvbXBvbmVudFR5cGVzWzBdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBJbnN0YW5jZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KGNsYXNzT2ZSb290Q29tcG9uZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIHZjUmVmID0gYXBwSW5zdGFuY2UudmNSZWYgfHwgYXBwSW5zdGFuY2Uudmlld0NvbnRhaW5lclJlZiB8fCB0aGlzLnZjUmVmXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZjUmVmID09PSB0aGlzLnZjUmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIHVzaW5nIGNwVXNlUm9vdFZpZXdDb250YWluZXIsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYnV0IHRoZSByb290IGNvbXBvbmVudCBpcyBub3QgZXhwb3Npbmcgdmlld0NvbnRhaW5lclJlZiEnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1BsZWFzZSBleHBvc2UgaXQgYnkgYWRkaW5nIFxcJ3B1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxcJyB0byB0aGUgY29uc3RydWN0b3IuJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb2xvclBpY2tlckNvbXBvbmVudClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY21wUmVmID0gdmNSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5LCAwLCB0aGlzLmluamVjdG9yLCBbXSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY21wUmVmLmluc3RhbmNlLnNldHVwRGlhbG9nKHRoaXMsIHRoaXMuZWxSZWYsIHRoaXMuY3BDb2xvcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3BXaWR0aCwgdGhpcy5jcEhlaWdodCwgdGhpcy5jcERpYWxvZ0Rpc3BsYXksIHRoaXMuY3BGYWxsYmFja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcENvbG9yTW9kZSwgdGhpcy5jcEFscGhhQ2hhbm5lbCwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcERpc2FibGVJbnB1dCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMsIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlLCB0aGlzLmNwQ2xvc2VDbGlja091dHNpZGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNwVXNlUm9vdFZpZXdDb250YWluZXIsIHRoaXMuY3BQb3NpdGlvbiwgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93LCB0aGlzLmNwUHJlc2V0TGFiZWwsIHRoaXMuY3BQcmVzZXRDb2xvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoLCB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlLCB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNwT0tCdXR0b24sIHRoaXMuY3BPS0J1dHRvbkNsYXNzLCB0aGlzLmNwT0tCdXR0b25UZXh0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiwgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzLCB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiwgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSB0aGlzLmNtcFJlZi5pbnN0YW5jZVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudmNSZWYgIT09IHZjUmVmKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cub3BlbkRpYWxvZyh0aGlzLmNwQ29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaWFsb2cgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZURpYWxvZygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0ZUNoYW5nZWQoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNwVG9nZ2xlQ2hhbmdlLmVtaXQoc3RhdGUpXHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNwT3Blbi5lbWl0KHRoaXMuY3BDb2xvcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNwQ2xvc2UuZW1pdCh0aGlzLmNwQ29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xvckNoYW5nZWQodmFsdWU6IHN0cmluZywgaWdub3JlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWdub3JlQ2hhbmdlcyA9IGlnbm9yZVxyXG5cclxuICAgICAgICB0aGlzLmNwQ29sb3JDaGFuZ2UuZW1pdCh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sb3JDYW5jZWxlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNwQ2FuY2VsLmVtaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xvclNlbGVjdGVkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNwU2VsZWN0LmVtaXQodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlucHV0Rm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudFxyXG5cclxuICAgICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5jcElnbm9yZWRFbGVtZW50cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZWxlbWVudClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNwRGlzYWJsZWQgJiYgIWlnbm9yZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZygpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlhbG9nIHx8ICF0aGlzLmRpYWxvZy5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2coKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaWFsb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0Q29sb3JGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSwgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNwQ29sb3IgPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3BDb2xvckNoYW5nZS5lbWl0KHRoaXMuY3BDb2xvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlucHV0Q2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcElucHV0Q2hhbmdlLmVtaXQoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNsaWRlckNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3BTbGlkZXJDaGFuZ2UuZW1pdChldmVudClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2xpZGVyRHJhZ0VuZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcFNsaWRlckRyYWdFbmQuZW1pdChldmVudClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2xpZGVyRHJhZ1N0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNwU2xpZGVyRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZXNldENvbG9yc0NoYW5nZWQodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcFByZXNldENvbG9yc0NoYW5nZS5lbWl0KHZhbHVlKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==