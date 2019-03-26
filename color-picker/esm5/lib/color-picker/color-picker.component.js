/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { opaqueSliderWhite, transparentSliderWhite } from '../../util/contrast';
import { ColorFormats, Hsla, Hsva, Rgba } from '../../util/formats';
import { detectIE, SliderPosition } from '../../util/helpers';
import { AlphaChannel, ColorModeInternal, DialogDisplay, DialogPosition, OutputFormat, parseColorMode, Position } from '../../util/types';
import { ColorPickerService } from '../color-picker.service';
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
export { ColorPickerComponent };
if (false) {
    /** @type {?} */
    ColorPickerComponent.prototype.alphaChannel;
    /** @type {?} */
    ColorPickerComponent.prototype.colorModeInternal;
    /** @type {?} */
    ColorPickerComponent.prototype.dialogDisplay;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.isIE10;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.hsva;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.height;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.outputColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.initialColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.fallbackColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.listenerResize;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.listenerMouseDown;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.directiveInstance;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.sliderH;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.directiveElementRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogArrowSize;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogArrowOffset;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogInputFields;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.useRootViewContainer;
    /** @type {?} */
    ColorPickerComponent.prototype.show;
    /** @type {?} */
    ColorPickerComponent.prototype.hidden;
    /** @type {?} */
    ColorPickerComponent.prototype.top;
    /** @type {?} */
    ColorPickerComponent.prototype.left;
    /** @type {?} */
    ColorPickerComponent.prototype.position;
    /** @type {?} */
    ColorPickerComponent.prototype.format;
    /** @type {?} */
    ColorPickerComponent.prototype.slider;
    /** @type {?} */
    ColorPickerComponent.prototype.hexText;
    /** @type {?} */
    ColorPickerComponent.prototype.hexAlpha;
    /** @type {?} */
    ColorPickerComponent.prototype.hslaText;
    /** @type {?} */
    ColorPickerComponent.prototype.rgbaText;
    /** @type {?} */
    ColorPickerComponent.prototype.arrowTop;
    /** @type {?} */
    ColorPickerComponent.prototype.selectedColor;
    /** @type {?} */
    ColorPickerComponent.prototype.hueSliderColor;
    /** @type {?} */
    ColorPickerComponent.prototype.alphaSliderColor;
    /** @type {?} */
    ColorPickerComponent.prototype.svSliderWhite;
    /** @type {?} */
    ColorPickerComponent.prototype.hueSliderWhite;
    /** @type {?} */
    ColorPickerComponent.prototype.valueSliderWhite;
    /** @type {?} */
    ColorPickerComponent.prototype.alphaSliderWhite;
    /** @type {?} */
    ColorPickerComponent.prototype.cpWidth;
    /** @type {?} */
    ColorPickerComponent.prototype.cpHeight;
    /** @type {?} */
    ColorPickerComponent.prototype.cpColorMode;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAlphaChannel;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOutputFormat;
    /** @type {?} */
    ColorPickerComponent.prototype.cpDisableInput;
    /** @type {?} */
    ColorPickerComponent.prototype.cpDialogDisplay;
    /** @type {?} */
    ColorPickerComponent.prototype.cpIgnoredElements;
    /** @type {?} */
    ColorPickerComponent.prototype.cpSaveClickOutside;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCloseClickOutside;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPosition;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPositionOffset;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetLabel;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetColors;
    /** @type {?} */
    ColorPickerComponent.prototype.cpMaxPresetColorsLength;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetEmptyMessage;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetEmptyMessageClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAddColorButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAddColorButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpRemoveColorButtonClass;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogElement;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3RKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQWEsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3BKLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRTVEO0lBeUhJLDhCQUNZLEtBQWlCLEVBQ2pCLEtBQXdCLEVBQ3hCLE9BQTJCO1FBRjNCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFwSDlCLGlCQUFZLEdBQUcsWUFBWSxDQUFBO1FBQzNCLHNCQUFpQixHQUFHLGlCQUFpQixDQUFBO1FBQ3JDLGtCQUFhLEdBQUcsYUFBYSxDQUFBO1FBRTlCLFdBQU0sR0FBWSxLQUFLLENBQUE7UUFtQnZCLG9CQUFlLEdBQVcsRUFBRSxDQUFBO1FBQzVCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQTtRQUU5QixzQkFB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LGlEQUlDOzs7OztJQUVELG9EQUE2Qzs7SUFFN0Msb0NBQW9COztJQUNwQixzQ0FBc0I7O0lBRXRCLG1DQUFrQjs7SUFDbEIsb0NBQW1COztJQUNuQix3Q0FBNkM7O0lBRTdDLHNDQUEyQjs7SUFDM0Isc0NBQTZCOztJQUU3Qix1Q0FBc0I7O0lBQ3RCLHdDQUF1Qjs7SUFFdkIsd0NBQXFCOztJQUNyQix3Q0FBcUI7O0lBRXJCLHdDQUF1Qjs7SUFFdkIsNkNBQTRCOztJQUM1Qiw4Q0FBNkI7O0lBQzdCLGdEQUErQjs7SUFFL0IsNkNBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLGdEQUFnQzs7SUFDaEMsZ0RBQWdDOztJQUVoQyx1Q0FBc0I7O0lBQ3RCLHdDQUF1Qjs7SUFFdkIsMkNBQStEOztJQUUvRCw4Q0FBbUM7O0lBQ25DLDhDQUFtQzs7SUFFbkMsOENBQThCOztJQUM5QiwrQ0FBcUM7O0lBRXJDLGlEQUE2Qjs7SUFFN0Isa0RBQWtDOztJQUNsQyxtREFBbUM7O0lBRW5DLDBDQUF3RDs7SUFDeEQsZ0RBQStCOztJQUUvQiwwQ0FBMEI7O0lBQzFCLDhDQUE2Qjs7SUFDN0IsK0NBQThCOztJQUU5Qiw4Q0FBOEI7O0lBQzlCLGtEQUFpQzs7SUFDakMsbURBQWtDOztJQUVsQyw2Q0FBNEI7O0lBQzVCLDhDQUErQjs7SUFDL0IsdURBQXNDOztJQUV0QyxvREFBbUM7O0lBQ25DLHlEQUF3Qzs7SUFFeEMsZ0RBQWdDOztJQUNoQyxvREFBbUM7O0lBQ25DLHdEQUF1Qzs7Ozs7SUFFdkMsNkNBQTJEOzs7OztJQWV2RCxxQ0FBeUI7Ozs7O0lBQ3pCLHFDQUFnQzs7Ozs7SUFDaEMsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IG9wYXF1ZVNsaWRlcldoaXRlLCB0cmFuc3BhcmVudFNsaWRlcldoaXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb250cmFzdCdcclxuaW1wb3J0IHsgQ29sb3JGb3JtYXRzLCBIc2xhLCBIc3ZhLCBSZ2JhIH0gZnJvbSAnLi4vLi4vdXRpbC9mb3JtYXRzJ1xyXG5pbXBvcnQgeyBkZXRlY3RJRSwgU2xpZGVyUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXHJcbmltcG9ydCB7IEFscGhhQ2hhbm5lbCwgQ29sb3JNb2RlLCBDb2xvck1vZGVJbnRlcm5hbCwgRGlhbG9nRGlzcGxheSwgRGlhbG9nUG9zaXRpb24sIE91dHB1dEZvcm1hdCwgcGFyc2VDb2xvck1vZGUsIFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcclxuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29sb3ItcGlja2VyLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3AtY29sb3ItcGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgcmVhZG9ubHkgYWxwaGFDaGFubmVsID0gQWxwaGFDaGFubmVsXHJcbiAgICByZWFkb25seSBjb2xvck1vZGVJbnRlcm5hbCA9IENvbG9yTW9kZUludGVybmFsXHJcbiAgICByZWFkb25seSBkaWFsb2dEaXNwbGF5ID0gRGlhbG9nRGlzcGxheVxyXG5cclxuICAgIHByaXZhdGUgaXNJRTEwOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwcml2YXRlIGhzdmE6IEhzdmFcclxuXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgICBwcml2YXRlIG91dHB1dENvbG9yOiBzdHJpbmdcclxuICAgIHByaXZhdGUgaW5pdGlhbENvbG9yOiBzdHJpbmdcclxuICAgIHByaXZhdGUgZmFsbGJhY2tDb2xvcjogc3RyaW5nXHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lclJlc2l6ZTogYW55XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyTW91c2VEb3duOiBhbnlcclxuXHJcbiAgICBwcml2YXRlIGRpcmVjdGl2ZUluc3RhbmNlOiBhbnlcclxuXHJcbiAgICBwcml2YXRlIHNsaWRlckg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBkaXJlY3RpdmVFbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcblxyXG4gICAgcHJpdmF0ZSBkaWFsb2dBcnJvd1NpemU6IG51bWJlciA9IDEwXHJcbiAgICBwcml2YXRlIGRpYWxvZ0Fycm93T2Zmc2V0OiBudW1iZXIgPSAxNVxyXG5cclxuICAgIHByaXZhdGUgZGlhbG9nSW5wdXRGaWVsZHM6IENvbG9yRm9ybWF0c1tdID0gW1xyXG4gICAgICAgIENvbG9yRm9ybWF0cy5IRVgsXHJcbiAgICAgICAgQ29sb3JGb3JtYXRzLlJHQkEsXHJcbiAgICAgICAgQ29sb3JGb3JtYXRzLkhTTEFcclxuICAgIF1cclxuXHJcbiAgICBwcml2YXRlIHVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc2hvdzogYm9vbGVhblxyXG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhblxyXG5cclxuICAgIHB1YmxpYyB0b3A6IG51bWJlclxyXG4gICAgcHVibGljIGxlZnQ6IG51bWJlclxyXG4gICAgcHVibGljIHBvc2l0aW9uOiBQb3NpdGlvbiA9IFBvc2l0aW9uLnJlbGF0aXZlXHJcblxyXG4gICAgcHVibGljIGZvcm1hdDogQ29sb3JGb3JtYXRzXHJcbiAgICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJQb3NpdGlvblxyXG5cclxuICAgIHB1YmxpYyBoZXhUZXh0OiBzdHJpbmdcclxuICAgIHB1YmxpYyBoZXhBbHBoYTogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIGhzbGFUZXh0OiBIc2xhXHJcbiAgICBwdWJsaWMgcmdiYVRleHQ6IFJnYmFcclxuXHJcbiAgICBwdWJsaWMgYXJyb3dUb3A6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBzdHJpbmdcclxuICAgIHB1YmxpYyBodWVTbGlkZXJDb2xvcjogc3RyaW5nXHJcbiAgICBwdWJsaWMgYWxwaGFTbGlkZXJDb2xvcjogc3RyaW5nXHJcblxyXG4gICAgcHVibGljIHN2U2xpZGVyV2hpdGU6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBodWVTbGlkZXJXaGl0ZTogYm9vbGVhblxyXG4gICAgcHVibGljIHZhbHVlU2xpZGVyV2hpdGU6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBhbHBoYVNsaWRlcldoaXRlOiBib29sZWFuXHJcblxyXG4gICAgcHVibGljIGNwV2lkdGg6IG51bWJlclxyXG4gICAgcHVibGljIGNwSGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgY3BDb2xvck1vZGU6IENvbG9yTW9kZUludGVybmFsID0gQ29sb3JNb2RlSW50ZXJuYWwuY29sb3JcclxuXHJcbiAgICBwdWJsaWMgY3BBbHBoYUNoYW5uZWw6IEFscGhhQ2hhbm5lbFxyXG4gICAgcHVibGljIGNwT3V0cHV0Rm9ybWF0OiBPdXRwdXRGb3JtYXRcclxuXHJcbiAgICBwdWJsaWMgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjcERpYWxvZ0Rpc3BsYXk6IERpYWxvZ0Rpc3BsYXlcclxuXHJcbiAgICBwdWJsaWMgY3BJZ25vcmVkRWxlbWVudHM6IGFueVxyXG5cclxuICAgIHB1YmxpYyBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjcENsb3NlQ2xpY2tPdXRzaWRlOiBib29sZWFuXHJcblxyXG4gICAgcHVibGljIGNwUG9zaXRpb246IERpYWxvZ1Bvc2l0aW9uID0gRGlhbG9nUG9zaXRpb24ucmlnaHRcclxuICAgIHB1YmxpYyBjcFBvc2l0aW9uT2Zmc2V0OiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgY3BPS0J1dHRvbjogYm9vbGVhblxyXG4gICAgcHVibGljIGNwT0tCdXR0b25UZXh0OiBzdHJpbmdcclxuICAgIHB1YmxpYyBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZ1xyXG5cclxuICAgIHB1YmxpYyBjcENhbmNlbEJ1dHRvbjogYm9vbGVhblxyXG4gICAgcHVibGljIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nXHJcbiAgICBwdWJsaWMgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nXHJcblxyXG4gICAgcHVibGljIGNwUHJlc2V0TGFiZWw6IHN0cmluZ1xyXG4gICAgcHVibGljIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXVxyXG4gICAgcHVibGljIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZ1xyXG4gICAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZ1xyXG5cclxuICAgIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZ1xyXG4gICAgcHVibGljIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nXHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZGlhbG9nUG9wdXAnKSBwcml2YXRlIGRpYWxvZ0VsZW1lbnQ6IEVsZW1lbnRSZWZcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5lc2MnLCBbJyRldmVudCddKSBoYW5kbGVFc2MoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3cgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2FuY2VsQ29sb3IoZXZlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLmVudGVyJywgWyckZXZlbnQnXSkgaGFuZGxlRW50ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3cgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWNjZXB0Q29sb3IoZXZlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oMCwgMCwgMCwgMClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT0gT3V0cHV0Rm9ybWF0LnJnYmEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSBDb2xvckZvcm1hdHMuUkdCQVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PSBPdXRwdXRGb3JtYXQuaHNsYSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCA9IENvbG9yRm9ybWF0cy5IU0xBXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSBDb2xvckZvcm1hdHMuSEVYXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVyTW91c2VEb3duID0gKGV2ZW50OiBhbnkpID0+IHsgdGhpcy5vbk1vdXNlRG93bihldmVudCkgfVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJSZXNpemUgPSAoKSA9PiB7IHRoaXMub25SZXNpemUoKSB9XHJcblxyXG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNwV2lkdGggIT09IDIzMCB8fCB0aGlzLmNwRGlhbG9nRGlzcGxheSA9PSBEaWFsb2dEaXNwbGF5LmlubGluZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRGlhbG9nKGNvbG9yOiBhbnksIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldEFjdGl2ZSh0aGlzKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jcFdpZHRoID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAzMjBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKVxyXG5cclxuICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyhjb2xvciwgZW1pdClcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuQ29sb3JQaWNrZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXR1cERpYWxvZyhpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2xvcjogYW55LFxyXG4gICAgICAgIGNwV2lkdGg6IHN0cmluZywgY3BIZWlnaHQ6IHN0cmluZywgY3BEaWFsb2dEaXNwbGF5OiBEaWFsb2dEaXNwbGF5LCBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBjcENvbG9yTW9kZTogQ29sb3JNb2RlLCBjcEFscGhhQ2hhbm5lbDogQWxwaGFDaGFubmVsLCBjcE91dHB1dEZvcm1hdDogT3V0cHV0Rm9ybWF0LFxyXG4gICAgICAgIGNwRGlzYWJsZUlucHV0OiBib29sZWFuLCBjcElnbm9yZWRFbGVtZW50czogYW55LCBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgY3BDbG9zZUNsaWNrT3V0c2lkZTogYm9vbGVhbiwgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiwgY3BQb3NpdGlvbjogRGlhbG9nUG9zaXRpb24sXHJcbiAgICAgICAgY3BQb3NpdGlvbk9mZnNldDogc3RyaW5nLCBjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93OiBib29sZWFuLCBjcFByZXNldExhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdLCBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyLCBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nLFxyXG4gICAgICAgIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZywgY3BPS0J1dHRvbjogYm9vbGVhbiwgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmcsXHJcbiAgICAgICAgY3BPS0J1dHRvblRleHQ6IHN0cmluZywgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4sIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZyxcclxuICAgICAgICBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZywgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbixcclxuICAgICAgICBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nLCBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKVxyXG5cclxuICAgICAgICB0aGlzLmNwQ29sb3JNb2RlID0gcGFyc2VDb2xvck1vZGUoY3BDb2xvck1vZGUpXHJcblxyXG4gICAgICAgIHRoaXMuaXNJRTEwID0gKGRldGVjdElFKCkgPT09IDEwKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlID0gaW5zdGFuY2VcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmXHJcblxyXG4gICAgICAgIHRoaXMuY3BEaXNhYmxlSW5wdXQgPSBjcERpc2FibGVJbnB1dFxyXG5cclxuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gY3BBbHBoYUNoYW5uZWxcclxuICAgICAgICB0aGlzLmNwT3V0cHV0Rm9ybWF0ID0gY3BPdXRwdXRGb3JtYXRcclxuICAgICAgICB0aGlzLmNwRGlhbG9nRGlzcGxheSA9IGNwRGlhbG9nRGlzcGxheVxyXG5cclxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzID0gY3BJZ25vcmVkRWxlbWVudHNcclxuXHJcbiAgICAgICAgdGhpcy5jcFNhdmVDbGlja091dHNpZGUgPSBjcFNhdmVDbGlja091dHNpZGVcclxuICAgICAgICB0aGlzLmNwQ2xvc2VDbGlja091dHNpZGUgPSBjcENsb3NlQ2xpY2tPdXRzaWRlXHJcblxyXG4gICAgICAgIHRoaXMudXNlUm9vdFZpZXdDb250YWluZXIgPSBjcFVzZVJvb3RWaWV3Q29udGFpbmVyXHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNwV2lkdGggPSBwYXJzZUludChjcFdpZHRoLCAxMClcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY3BIZWlnaHQgPSBwYXJzZUludChjcEhlaWdodCwgMTApXHJcblxyXG4gICAgICAgIHRoaXMuY3BQb3NpdGlvbiA9IGNwUG9zaXRpb25cclxuICAgICAgICB0aGlzLmNwUG9zaXRpb25PZmZzZXQgPSBwYXJzZUludChjcFBvc2l0aW9uT2Zmc2V0LCAxMClcclxuXHJcbiAgICAgICAgdGhpcy5jcE9LQnV0dG9uID0gY3BPS0J1dHRvblxyXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvblRleHQgPSBjcE9LQnV0dG9uVGV4dFxyXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvbkNsYXNzID0gY3BPS0J1dHRvbkNsYXNzXHJcblxyXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24gPSBjcENhbmNlbEJ1dHRvblxyXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0ID0gY3BDYW5jZWxCdXR0b25UZXh0XHJcbiAgICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzID0gY3BDYW5jZWxCdXR0b25DbGFzc1xyXG5cclxuICAgICAgICB0aGlzLmZhbGxiYWNrQ29sb3IgPSBjcEZhbGxiYWNrQ29sb3IgfHwgJyNmZmYnXHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWwsIGNwUHJlc2V0Q29sb3JzKVxyXG5cclxuICAgICAgICB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoID0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGhcclxuICAgICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2VcclxuICAgICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MgPSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzXHJcblxyXG4gICAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiA9IGNwQWRkQ29sb3JCdXR0b25cclxuICAgICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25UZXh0ID0gY3BBZGRDb2xvckJ1dHRvblRleHRcclxuICAgICAgICB0aGlzLmNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcyA9IGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzc1xyXG5cclxuICAgICAgICBpZiAoIWNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5pbmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dBcnJvd1NpemUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3BPdXRwdXRGb3JtYXQgPT0gT3V0cHV0Rm9ybWF0LmhleCAmJlxyXG4gICAgICAgICAgICBjcEFscGhhQ2hhbm5lbCAhPSBBbHBoYUNoYW5uZWwuYWx3YXlzICYmIGNwQWxwaGFDaGFubmVsICE9IEFscGhhQ2hhbm5lbC5mb3JjZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9IEFscGhhQ2hhbm5lbC5kaXNhYmxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5pdGlhbENvbG9yKGNvbG9yOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb2xvciA9IGNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3BQcmVzZXRMYWJlbCA9IGNwUHJlc2V0TGFiZWxcclxuICAgICAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gY3BQcmVzZXRDb2xvcnNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhzdmE6IEhzdmEgfCBudWxsXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNwQWxwaGFDaGFubmVsID09IEFscGhhQ2hhbm5lbC5hbHdheXMgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PSBBbHBoYUNoYW5uZWwuZm9yY2VkKSB7XHJcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcclxuICAgICAgICAgICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XHJcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHRoaXMuZmFsbGJhY2tDb2xvciwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaHN2YSkge1xyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSBoc3ZhXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihlbWl0LCB1cGRhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5maXhlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ICE9IERpYWxvZ0Rpc3BsYXkuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRyYWdFbmQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdFbmQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnU3RhcnQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdTdGFydCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0lFMTAgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCAmJlxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgICAgICAgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jcFNhdmVDbGlja091dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvcilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3BDbG9zZUNsaWNrT3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BY2NlcHRDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0Q29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvclNlbGVjdGVkKHRoaXMub3V0cHV0Q29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNhbmNlbENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2FuY2VsZWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkZvcm1hdFRvZ2dsZShjaGFuZ2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUZvcm1hdHMgPSB0aGlzLmRpYWxvZ0lucHV0RmllbGRzLmxlbmd0aFxyXG5cclxuICAgICAgICBjb25zdCBuZXh0Rm9ybWF0ID0gKCgodGhpcy5kaWFsb2dJbnB1dEZpZWxkcy5pbmRleE9mKHRoaXMuZm9ybWF0KSArIGNoYW5nZSkgJVxyXG4gICAgICAgICAgICBhdmFpbGFibGVGb3JtYXRzKSArIGF2YWlsYWJsZUZvcm1hdHMpICUgYXZhaWxhYmxlRm9ybWF0c1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZGlhbG9nSW5wdXRGaWVsZHNbbmV4dEZvcm1hdF1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db2xvckNoYW5nZSh2YWx1ZTogeyBzOiBudW1iZXIsIHY6IG51bWJlciwgcmdYOiBudW1iZXIsIHJnWTogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhzdmEucyA9IHZhbHVlLnMgLyB2YWx1ZS5yZ1hcclxuICAgICAgICB0aGlzLmhzdmEudiA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1lcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XHJcbiAgICAgICAgICAgIHNsaWRlcjogJ2xpZ2h0bmVzcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEudixcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xyXG4gICAgICAgICAgICBzbGlkZXI6ICdzYXR1cmF0aW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHN2YS5zLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSHVlQ2hhbmdlKHZhbHVlOiB7IHY6IG51bWJlciwgcmdYOiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnWFxyXG4gICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xyXG4gICAgICAgICAgICBzbGlkZXI6ICdodWUnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogeyB2OiBudW1iZXIsIHJnWDogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhzdmEudiA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1hcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XHJcbiAgICAgICAgICAgIHNsaWRlcjogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHN2YS52LFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQWxwaGFDaGFuZ2UodmFsdWU6IHsgdjogbnVtYmVyLCByZ1g6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmdYXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xyXG4gICAgICAgICAgICBzbGlkZXI6ICdhbHBoYScsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkhleElucHV0KHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVswXSAhPT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcjJyArIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2YWxpZEhleCA9IC9eIyhbYS1mMC05XXszfXxbYS1mMC05XXs2fSkkL2dpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jcEFscGhhQ2hhbm5lbCA9PSBBbHBoYUNoYW5uZWwuYWx3YXlzKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZEhleCA9IC9eIyhbYS1mMC05XXszfXxbYS1mMC05XXs2fXxbYS1mMC05XXs4fSkkL2dpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdmFsaWRIZXgudGVzdCh2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcjJyArIHZhbHVlLnN1YnN0cmluZygxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYyA9PiBjICsgYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3BBbHBoYUNoYW5uZWwgPT0gQWxwaGFDaGFubmVsLmZvcmNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IE1hdGgucm91bmQodGhpcy5oc3ZhLmEgKiAyNTUpLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlLCB0cnVlLCBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ICdoZXgnLFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVkSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgcmdiYS5yID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmhcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xyXG4gICAgICAgICAgICBpbnB1dDogJ3JlZCcsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IHJnYmEucixcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJsdWVJbnB1dCh2YWx1ZTogeyB2OiBudW1iZXIsIHJnOiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpXHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkID0gIWlzTmFOKHZhbHVlLnYpICYmIHZhbHVlLnYgPj0gMCAmJiB2YWx1ZS52IDw9IHZhbHVlLnJnXHJcblxyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICByZ2JhLmIgPSB2YWx1ZS52IC8gdmFsdWUucmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XHJcbiAgICAgICAgICAgIGlucHV0OiAnYmx1ZScsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IHJnYmEuYixcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkdyZWVuSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgcmdiYS5nID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmhcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xyXG4gICAgICAgICAgICBpbnB1dDogJ2dyZWVuJyxcclxuICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogcmdiYS5nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSHVlSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdodWUnLFxyXG4gICAgICAgICAgICB2YWxpZDogdmFsaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblZhbHVlSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xyXG4gICAgICAgICAgICBpbnB1dDogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5oc3ZhLnYsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BbHBoYUlucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSAhaXNOYU4odmFsdWUudikgJiYgdmFsdWUudiA+PSAwICYmIHZhbHVlLnYgPD0gdmFsdWUucmdcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdhbHBoYScsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGlnaHRuZXNzSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpXHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkID0gIWlzTmFOKHZhbHVlLnYpICYmIHZhbHVlLnYgPj0gMCAmJiB2YWx1ZS52IDw9IHZhbHVlLnJnXHJcblxyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICBoc2xhLmwgPSB2YWx1ZS52IC8gdmFsdWUucmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdsaWdodG5lc3MnLFxyXG4gICAgICAgICAgICB2YWxpZDogdmFsaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBoc2xhLmwsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TYXR1cmF0aW9uSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpXHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkID0gIWlzTmFOKHZhbHVlLnYpICYmIHZhbHVlLnYgPj0gMCAmJiB2YWx1ZS52IDw9IHZhbHVlLnJnXHJcblxyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICBoc2xhLnMgPSB2YWx1ZS52IC8gdmFsdWUucmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdzYXR1cmF0aW9uJyxcclxuICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogaHNsYS5zLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQWRkUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgPT09IHZhbHVlKSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmNvbmNhdCh2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZW1vdmVQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yICE9PSB2YWx1ZSkpXHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgc3RhdHVzXHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuQ29sb3JQaWNrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICAgICAgICAgIH0sIDApXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnN0YXRlQ2hhbmdlZCh0cnVlKVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VDb2xvclBpY2tlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnN0YXRlQ2hhbmdlZChmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNkUmVmWydkZXN0cm95ZWQnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvbG9yUGlja2VyKGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3BDb2xvck1vZGUgPT0gQ29sb3JNb2RlSW50ZXJuYWwuZ3JheXNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS5zID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFzdE91dHB1dCA9IHRoaXMub3V0cHV0Q29sb3JcclxuXHJcbiAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKVxyXG4gICAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSkpXHJcblxyXG4gICAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEobmV3IEhzdmEodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oLCAxLCAxLCAxKSkpXHJcblxyXG4gICAgICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5oc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5sICogMTAwKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoaHNsYS5hICogMTAwKSAvIDEwMClcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmdiYVRleHQgPSBuZXcgUmdiYShyZ2JhLnIsIHJnYmEuZywgcmdiYS5iLCBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxvd0hleDggPSB0aGlzLmNwQWxwaGFDaGFubmVsID09IEFscGhhQ2hhbm5lbC5hbHdheXNcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGV4VGV4dCA9IHRoaXMuc2VydmljZS5yZ2JhVG9IZXgocmdiYSwgYWxsb3dIZXg4KVxyXG4gICAgICAgICAgICB0aGlzLmhleEFscGhhID0gdGhpcy5yZ2JhVGV4dC5hXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PSBPdXRwdXRGb3JtYXQuYXV0bykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oc3ZhLmEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuaHN2YS5hIDwgMSA/IENvbG9yRm9ybWF0cy5SR0JBIDogQ29sb3JGb3JtYXRzLkhFWFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmh1ZVNsaWRlckNvbG9yID0gJ3JnYignICsgaHVlLnIgKyAnLCcgKyBodWUuZyArICcsJyArIGh1ZS5iICsgJyknXHJcbiAgICAgICAgdGhpcy5hbHBoYVNsaWRlckNvbG9yID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgnICsgcmdiYS5yICsgJywnICsgcmdiYS5nICsgJywnICsgcmdiYS5iICsgJywgMCkgMCUsIHJnYmEoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcsIDEpIDEwMCUpJ1xyXG5cclxuICAgICAgICB0aGlzLnN2U2xpZGVyV2hpdGUgPSBvcGFxdWVTbGlkZXJXaGl0ZShyZ2JhKVxyXG4gICAgICAgIHRoaXMuaHVlU2xpZGVyV2hpdGUgPSBvcGFxdWVTbGlkZXJXaGl0ZShodWUpXHJcbiAgICAgICAgdGhpcy52YWx1ZVNsaWRlcldoaXRlID0gb3BhcXVlU2xpZGVyV2hpdGUocmdiYSlcclxuICAgICAgICB0aGlzLmFscGhhU2xpZGVyV2hpdGUgPSB0cmFuc3BhcmVudFNsaWRlcldoaXRlKHJnYmEpXHJcblxyXG4gICAgICAgIHRoaXMub3V0cHV0Q29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcEFscGhhQ2hhbm5lbClcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgJ3JnYmEnLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbihcclxuICAgICAgICAgICAgKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCksXHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS5zLFxyXG4gICAgICAgICAgICAoMSAtIHRoaXMuaHN2YS52KSxcclxuICAgICAgICAgICAgdGhpcy5oc3ZhLmFcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGlmIChlbWl0ICYmIGxhc3RPdXRwdXQgIT09IHRoaXMub3V0cHV0Q29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5vdXRwdXRDb2xvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZ1xyXG5cclxuICAgIHByaXZhdGUgc2V0RGlhbG9nUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBQb3NpdGlvbi5yZWxhdGl2ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IFBvc2l0aW9uLnN0YXRpYywgdHJhbnNmb3JtID0gJycsIHN0eWxlXHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZTogYW55ID0gbnVsbCwgdHJhbnNmb3JtTm9kZTogYW55ID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dIZWlnaHQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJylcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9IFBvc2l0aW9uLnN0YXRpYyAmJiBwYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnICYmIHRyYW5zZm9ybU5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlID0gbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBQb3NpdGlvbi5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0cmFuc2Zvcm1Ob2RlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgKHBvc2l0aW9uICE9IFBvc2l0aW9uLmZpeGVkKSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyIHx8IChwb3NpdGlvbiA9PSBQb3NpdGlvbi5maXhlZCAmJiAoIXBhcmVudE5vZGUgfHwgcGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxVbmtub3duRWxlbWVudCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3BcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94UGFyZW50ID0gdGhpcy5jcmVhdGVEaWFsb2dCb3gocGFyZW50Tm9kZSwgKHBvc2l0aW9uICE9IFBvc2l0aW9uLmZpeGVkKSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3AgLSBib3hQYXJlbnQudG9wXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdCAtIGJveFBhcmVudC5sZWZ0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBQb3NpdGlvbi5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvc2l0aW9uLmZpeGVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNwUG9zaXRpb24gPT0gRGlhbG9nUG9zaXRpb24ubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmNwV2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDJcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT0gRGlhbG9nUG9zaXRpb24udG9wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93VG9wID0gZGlhbG9nSGVpZ2h0IC0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgLT0gZGlhbG9nSGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemVcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09IERpYWxvZ1Bvc2l0aW9uLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCArPSBib3hEaXJlY3RpdmUud2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nIGFuZCBvcGVuaW5nXHJcblxyXG4gICAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBhbnksIGNoaWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbm9kZTogYW55ID0gY2hpbGQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZURpYWxvZ0JveChlbGVtZW50OiBhbnksIG9mZnNldDogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwKSxcclxuICAgICAgICAgICAgbGVmdDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApLFxyXG4gICAgICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=