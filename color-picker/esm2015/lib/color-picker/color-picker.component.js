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
export class ColorPickerComponent {
    /**
     * @param {?} elRef
     * @param {?} cdRef
     * @param {?} service
     */
    constructor(elRef, cdRef, service) {
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
    handleEsc(event) {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onCancelColor(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEnter(event) {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onAcceptColor(event);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (event) => { this.onMouseDown(event); });
        this.listenerResize = (/**
         * @return {?}
         */
        () => { this.onResize(); });
        this.openDialog(this.initialColor, false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeDialog();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.cpWidth !== 230 || this.cpDialogDisplay == DialogDisplay.inline) {
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    }
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    openDialog(color, emit = true) {
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
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.closeColorPicker();
    }
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
    setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonText, cpRemoveColorButtonClass) {
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
    }
    /**
     * @param {?} color
     * @return {?}
     */
    setInitialColor(color) {
        this.initialColor = color;
    }
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    setPresetConfig(cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    }
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    setColorFromString(value, emit = true, update = true) {
        /** @type {?} */
        let hsva;
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
    }
    /**
     * @return {?}
     */
    onResize() {
        if (this.position == Position.fixed) {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay != DialogDisplay.inline) {
            this.closeColorPicker();
        }
    }
    /**
     * @param {?} slider
     * @return {?}
     */
    onDragEnd(slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    }
    /**
     * @param {?} slider
     * @return {?}
     */
    onDragStart(slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (!this.isIE10 && this.cpDialogDisplay == DialogDisplay.popup &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item === event.target)).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            if (this.cpCloseClickOutside) {
                this.closeColorPicker();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAcceptColor(event) {
        event.stopPropagation();
        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCancelColor(event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    }
    /**
     * @param {?} change
     * @return {?}
     */
    onFormatToggle(change) {
        /** @type {?} */
        const availableFormats = this.dialogInputFields.length;
        /** @type {?} */
        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onColorChange(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHueChange(value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onAlphaChange(value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHexInput(value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            /** @type {?} */
            let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel == AlphaChannel.always) {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            /** @type {?} */
            const valid = validHex.test(value);
            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => c + c))
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onRedInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlueInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onGreenInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHueInput(value) {
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueInput(value) {
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onAlphaInput(value) {
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onLightnessInput(value) {
        /** @type {?} */
        const hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSaturationInput(value) {
        /** @type {?} */
        const hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
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
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onAddPresetColor(event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        (color) => (color === value))).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onRemovePresetColor(event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        (color) => (color !== value)));
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    openColorPicker() {
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.hidden = false;
                this.setDialogPosition();
                this.cdRef.detectChanges();
            }), 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    }
    /**
     * @private
     * @return {?}
     */
    closeColorPicker() {
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
    }
    /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    updateColorPicker(emit = true, update = true) {
        if (this.cpColorMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0;
        }
        /** @type {?} */
        const lastOutput = this.outputColor;
        /** @type {?} */
        const hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        const rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
        /** @type {?} */
        const hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
            /** @type {?} */
            const allowHex8 = this.cpAlphaChannel == AlphaChannel.always;
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
    }
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    setDialogPosition() {
        if (this.cpDialogDisplay == DialogDisplay.inline) {
            this.position = Position.relative;
        }
        else {
            /** @type {?} */
            let position = Position.static;
            /** @type {?} */
            let transform = '';
            /** @type {?} */
            let style;
            /** @type {?} */
            let parentNode = null;
            /** @type {?} */
            let transformNode = null;
            /** @type {?} */
            let node = this.directiveElementRef.nativeElement.parentNode;
            /** @type {?} */
            const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
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
            const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position != Position.fixed));
            if (this.useRootViewContainer || (position == Position.fixed && (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                const boxParent = this.createDialogBox(parentNode, (position != Position.fixed));
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
    }
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    isDescendant(parent, child) {
        /** @type {?} */
        let node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    createDialogBox(element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
}
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cp-color-picker',
                template: "<div #dialogPopup\r\n    class=\"color-picker\"\r\n    (click)=\"$event.stopPropagation()\"\r\n    [ngStyle]=\"{\r\n        visibility: hidden || !show ? 'hidden' : 'visible',\r\n        top: top || 0,\r\n        left: left || 0,\r\n        position: position || '',\r\n        height: cpHeight || 'auto',\r\n        width: cpWidth || 'auto'\r\n    }\">\r\n    <div *ngIf=\"cpDialogDisplay == dialogDisplay.popup\"\r\n        class=\"color-picker__arrow\"\r\n        [ngClass]=\"'color-picker__arrow--' + cpPosition\"\r\n        [ngStyle]=\"{ \r\n            top: arrowTop\r\n        }\"></div>\r\n    <div *ngIf=\"cpColorMode == colorModeInternal.color\"\r\n        class=\"color-picker__sv\"\r\n        cpSlider\r\n        [rgX]=\"1\"\r\n        [rgY]=\"1\"\r\n        (newValue)=\"onColorChange($event)\"\r\n        (dragStart)=\"onDragStart('saturation-lightness')\"\r\n        (dragEnd)=\"onDragEnd('saturation-lightness')\"\r\n        [ngStyle]=\"{ \r\n            backgroundColor: hueSliderColor || ''\r\n        }\">\r\n        <div class=\"color-picker__cursor color-picker__cursor--sv\"\r\n            [ngClass]=\"{ 'color-picker__cursor--white': svSliderWhite }\"\r\n            [ngStyle]=\"{\r\n                top: (slider?.v || 0) * 100 + '%',\r\n                left: (slider?.s || 0) * 100 + '%'\r\n            }\"></div>\r\n    </div>\r\n    <div class=\"color-picker__controls\">\r\n        <div class=\"color-picker__selected\">\r\n            <div class=\"color-picker__selected-color\">\r\n                <div [ngStyle]=\"{ \r\n                    backgroundColor: selectedColor || ''\r\n                }\"></div>\r\n            </div>\r\n            <button *ngIf=\"cpAddColorButton\"\r\n                class=\"color-picker__add-selected\"\r\n                [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\r\n                (click)=\"onAddPresetColor($event, selectedColor)\">{{ cpAddColorButtonText }}</button>\r\n        </div>\r\n        <div class=\"color-picker__hav\">\r\n            <div *ngIf=\"cpColorMode == colorModeInternal.color\"\r\n                class=\"color-picker__slider color-picker__slider--hue\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onHueChange($event)\"\r\n                (dragStart)=\"onDragStart('hue')\"\r\n                (dragEnd)=\"onDragEnd('hue')\">\r\n                <div class=\"color-picker__cursor\"\r\n                    [ngClass]=\"{ 'color-picker__cursor--white': hueSliderWhite }\"\r\n                    [ngStyle]=\"{\r\n                        left: (slider?.h || 0) * 100 + '%'\r\n                    }\"></div>\r\n            </div>\r\n            <div *ngIf=\"cpColorMode == colorModeInternal.grayscale\"\r\n                class=\"color-picker__slider color-picker__slider--value\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onValueChange($event)\"\r\n                (dragStart)=\"onDragStart('value')\"\r\n                (dragEnd)=\"onDragEnd('value')\">\r\n                <div class=\"color-picker__cursor\"\r\n                    [ngClass]=\"{ 'color-picker__cursor--white': valueSliderWhite }\"\r\n                    [ngStyle]=\"{\r\n                        left: (1 - (slider?.v || 0)) * 100 + '%'\r\n                    }\"></div>\r\n            </div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                class=\"color-picker__slider color-picker__slider--alpha\"\r\n                cpSlider\r\n                [rgX]=\"1\"\r\n                (newValue)=\"onAlphaChange($event)\"\r\n                (dragStart)=\"onDragStart('alpha')\"\r\n                (dragEnd)=\"onDragEnd('alpha')\">\r\n                <div class=\"color-picker__slider--alpha-bg\"\r\n                    [ngStyle]=\"{\r\n                        backgroundImage: alphaSliderColor || ''\r\n                    }\">\r\n                    <div class=\"color-picker__cursor\"\r\n                        [ngClass]=\"{ 'color-picker__cursor--white': alphaSliderWhite }\"\r\n                        [ngStyle]=\"{\r\n                            left: (slider?.a || 0) * 100 + '%'\r\n                        }\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"hsla-text\"\r\n        [style.display]=\"format !== 2 ? 'none' : 'block'\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"360\"\r\n                cpText\r\n                [rg]=\"360\"\r\n                [value]=\"hslaText?.h\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onHueInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.s\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onSaturationInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.l\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onLightnessInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hslaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>H</div>\r\n            <div>S</div>\r\n            <div>L</div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        [style.display]=\"format !== 1 ? 'none' : 'block'\"\r\n        class=\"rgba-text\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.r\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onRedInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.g\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onGreenInput($event)\" />\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"255\"\r\n                cpText\r\n                [rg]=\"255\"\r\n                [value]=\"rgbaText?.b\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onBlueInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"rgbaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>R</div>\r\n            <div>G</div>\r\n            <div>B</div>\r\n            <div *ngIf=\"cpAlphaChannel != alphaChannel.disabled\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"hex-text\"\r\n        [class.hex-alpha]=\"cpAlphaChannel == alphaChannel.forced\"\r\n        [style.display]=\"format !== 0 ? 'none' : 'block'\">\r\n        <div class=\"box\">\r\n            <input cpText\r\n                [value]=\"hexText\"\r\n                (blur)=\"onHexInput(null)\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onHexInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel == alphaChannel.forced\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hexAlpha\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>Hex</div>\r\n            <div *ngIf=\"cpAlphaChannel == alphaChannel.forced\">A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.grayscale\"\r\n        class=\"value-text\">\r\n        <div class=\"box\">\r\n            <input type=\"number\"\r\n                pattern=\"[0-9]*\"\r\n                min=\"0\"\r\n                max=\"100\"\r\n                cpText\r\n                [rg]=\"100\"\r\n                [value]=\"hslaText?.l\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onValueInput($event)\" />\r\n            <input *ngIf=\"cpAlphaChannel != alphaChannel.disabled\"\r\n                type=\"number\"\r\n                pattern=\"[0-9]+([\\.,][0-9]{1,2})?\"\r\n                min=\"0\"\r\n                max=\"1\"\r\n                step=\"0.1\"\r\n                cpText\r\n                [rg]=\"1\"\r\n                [value]=\"hslaText?.a\"\r\n                (keyup.enter)=\"onAcceptColor($event)\"\r\n                (newValue)=\"onAlphaInput($event)\" />\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <div>V</div>\r\n            <div>A</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!cpDisableInput && cpColorMode == colorModeInternal.color\"\r\n        class=\"type-policy\">\r\n        <span class=\"type-policy-arrow\"\r\n            (click)=\"onFormatToggle(1)\"></span>\r\n        <span class=\"type-policy-arrow\"\r\n            (click)=\"onFormatToggle(-1)\"></span>\r\n    </div>\r\n\r\n    <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\r\n        class=\"preset-area\">\r\n        <hr>\r\n\r\n        <div class=\"preset-label\">{{cpPresetLabel}}</div>\r\n\r\n        <div *ngIf=\"cpPresetColors?.length\">\r\n            <div *ngFor=\"let color of cpPresetColors\"\r\n                class=\"preset-color\"\r\n                [style.backgroundColor]=\"color\"\r\n                (click)=\"setColorFromString(color)\">\r\n                <span *ngIf=\"cpAddColorButton\"\r\n                    class=\"{{cpRemoveColorButtonClass}}\"\r\n                    (click)=\"onRemovePresetColor($event, color)\"></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\r\n            class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"cpOKButton || cpCancelButton\"\r\n        class=\"button-area\">\r\n        <button *ngIf=\"cpCancelButton\"\r\n            type=\"button\"\r\n            class=\"{{cpCancelButtonClass}}\"\r\n            (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\r\n\r\n        <button *ngIf=\"cpOKButton\"\r\n            type=\"button\"\r\n            class=\"{{cpOKButtonClass}}\"\r\n            (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\r\n    </div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".color-picker{position:absolute;z-index:100000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);display:flex;flex-direction:column}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker .color-picker__sv{position:relative;direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-image:linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%),linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);background-size:100% 100%}.color-picker .color-picker__cursor{cursor:pointer;position:absolute;border-radius:50%;width:16px;height:16px;border:2px solid #222;margin:0 -8px;transition:border .2s linear}.color-picker .color-picker__cursor.color-picker__cursor--sv{margin:-8px}.color-picker .color-picker__cursor.color-picker__cursor--white{border-color:#dadada}.color-picker .color-picker__controls{display:flex;margin:8px;align-items:flex-start}.color-picker .color-picker__controls .color-picker__selected{margin:4px;flex:48px 0 0}.color-picker .color-picker__controls .color-picker__hav{margin:-4px -4px -4px 0;flex:auto 1 1}.color-picker .color-picker__selected-color{width:48px;height:48px;display:flex;align-items:stretch;justify-content:stretch;border-radius:50%;background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat;box-shadow:0 0 8px 0 rgba(0,0,0,.5)}.color-picker .color-picker__selected-color div{width:100%;height:100%;border-radius:50%}.color-picker .color-picker__add-selected{background:0 0;margin:4px 0;border:none;padding:0;width:100%;text-align:center}.color-picker .color-picker__hav{display:flex;flex-wrap:wrap}.color-picker .color-picker__slider{width:100%;flex:100% 1 1;height:16px;margin:8px;position:relative}.color-picker .color-picker__slider.color-picker__slider--hue{background-size:100% 100%;background-image:linear-gradient(to right,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#ff00ff 83.33333%,red 100%)}.color-picker .color-picker__slider.color-picker__slider--value{background-size:100% 100%;background-image:linear-gradient(to right,#000 0,#fff 100%)}.color-picker .color-picker__slider.color-picker__slider--alpha{background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat}.color-picker .color-picker__slider.color-picker__slider--alpha .color-picker__slider--alpha-bg{position:absolute;top:0;left:0;right:0;bottom:0}.color-picker .color-picker__arrow{height:0;width:0;border-style:solid;position:absolute;z-index:999999}.color-picker .color-picker__arrow.color-picker__arrow--top{border-width:12px 6px;border-color:#999 transparent transparent;left:12px}.color-picker .color-picker__arrow.color-picker__arrow--left{border-width:6px 12px;border-color:transparent transparent transparent #999;top:12px;left:230px}.color-picker .color-picker__arrow.color-picker__arrow--right{border-width:6px 12px;border-color:transparent #999 transparent transparent;top:12px;left:-24px}.color-picker .color-picker__arrow.color-picker__arrow--bottom{border-width:12px 6px;border-color:transparent transparent #999;top:-24px;left:12px}.color-picker input{text-align:center;font-size:13px;height:26px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:1px solid #a9a9a9;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:1px solid #a9a9a9}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:1px solid #a9a9a9}.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:linear-gradient(to right,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#ff00ff 83.33333%,red 100%)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:linear-gradient(to right,#000 0,#fff 100%)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:16px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBmaWxsPSIjQ0NDQ0NDIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgeT0iNTAiIGZpbGw9IiNDQ0NDQ0MiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPjxyZWN0IHk9IjUwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz48cmVjdCB4PSI1MCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+);background-repeat:repeat}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:24px;height:24px;background-size:contain;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjMzMzMzMzIiBwb2ludHM9IjUwIDE2IDMwIDQ0IDcwIDQ0ICIvPjxwb2x5Z29uIGZpbGw9IiMzMzMzMzMiIHBvaW50cz0iNTAgODQgNzAgNTYgMzAgNTYgIi8+PC9zdmc+);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(\"data:image/png;base64, \\aiVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\")}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:0 0}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class::before{content:'x';position:relative;bottom:3.5px;display:inline-block;font-size:10px}"]
            }] }
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ColorPickerService }
];
ColorPickerComponent.propDecorators = {
    dialogElement: [{ type: ViewChild, args: ['dialogPopup',] }],
    handleEsc: [{ type: HostListener, args: ['document:keyup.esc', ['$event'],] }],
    handleEnter: [{ type: HostListener, args: ['document:keyup.enter', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3RKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQWEsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3BKLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBUTVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQW1IN0IsWUFDWSxLQUFpQixFQUNqQixLQUF3QixFQUN4QixPQUEyQjtRQUYzQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBcEg5QixpQkFBWSxHQUFHLFlBQVksQ0FBQTtRQUMzQixzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQTtRQUNyQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQTtRQUU5QixXQUFNLEdBQVksS0FBSyxDQUFBO1FBbUJ2QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixzQkFBaUIsR0FB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QW1DOztJQUNuQyx3REFBdUM7Ozs7O0lBRXZDLDZDQUEyRDs7Ozs7SUFldkQscUNBQXlCOzs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBvcGFxdWVTbGlkZXJXaGl0ZSwgdHJhbnNwYXJlbnRTbGlkZXJXaGl0ZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udHJhc3QnXHJcbmltcG9ydCB7IENvbG9yRm9ybWF0cywgSHNsYSwgSHN2YSwgUmdiYSB9IGZyb20gJy4uLy4uL3V0aWwvZm9ybWF0cydcclxuaW1wb3J0IHsgZGV0ZWN0SUUsIFNsaWRlclBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xyXG5pbXBvcnQgeyBBbHBoYUNoYW5uZWwsIENvbG9yTW9kZSwgQ29sb3JNb2RlSW50ZXJuYWwsIERpYWxvZ0Rpc3BsYXksIERpYWxvZ1Bvc2l0aW9uLCBPdXRwdXRGb3JtYXQsIHBhcnNlQ29sb3JNb2RlLCBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXHJcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4uL2NvbG9yLXBpY2tlci5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NwLWNvbG9yLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWRcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIHJlYWRvbmx5IGFscGhhQ2hhbm5lbCA9IEFscGhhQ2hhbm5lbFxyXG4gICAgcmVhZG9ubHkgY29sb3JNb2RlSW50ZXJuYWwgPSBDb2xvck1vZGVJbnRlcm5hbFxyXG4gICAgcmVhZG9ubHkgZGlhbG9nRGlzcGxheSA9IERpYWxvZ0Rpc3BsYXlcclxuXHJcbiAgICBwcml2YXRlIGlzSUUxMDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHJpdmF0ZSBoc3ZhOiBIc3ZhXHJcblxyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyXHJcblxyXG4gICAgcHJpdmF0ZSBvdXRwdXRDb2xvcjogc3RyaW5nXHJcbiAgICBwcml2YXRlIGluaXRpYWxDb2xvcjogc3RyaW5nXHJcbiAgICBwcml2YXRlIGZhbGxiYWNrQ29sb3I6IHN0cmluZ1xyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuZXJSZXNpemU6IGFueVxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lck1vdXNlRG93bjogYW55XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJlY3RpdmVJbnN0YW5jZTogYW55XHJcblxyXG4gICAgcHJpdmF0ZSBzbGlkZXJIOiBudW1iZXJcclxuICAgIHByaXZhdGUgZGlyZWN0aXZlRWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG5cclxuICAgIHByaXZhdGUgZGlhbG9nQXJyb3dTaXplOiBudW1iZXIgPSAxMFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dBcnJvd09mZnNldDogbnVtYmVyID0gMTVcclxuXHJcbiAgICBwcml2YXRlIGRpYWxvZ0lucHV0RmllbGRzOiBDb2xvckZvcm1hdHNbXSA9IFtcclxuICAgICAgICBDb2xvckZvcm1hdHMuSEVYLFxyXG4gICAgICAgIENvbG9yRm9ybWF0cy5SR0JBLFxyXG4gICAgICAgIENvbG9yRm9ybWF0cy5IU0xBXHJcbiAgICBdXHJcblxyXG4gICAgcHJpdmF0ZSB1c2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHVibGljIHNob3c6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW5cclxuXHJcbiAgICBwdWJsaWMgdG9wOiBudW1iZXJcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXJcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogUG9zaXRpb24gPSBQb3NpdGlvbi5yZWxhdGl2ZVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXQ6IENvbG9yRm9ybWF0c1xyXG4gICAgcHVibGljIHNsaWRlcjogU2xpZGVyUG9zaXRpb25cclxuXHJcbiAgICBwdWJsaWMgaGV4VGV4dDogc3RyaW5nXHJcbiAgICBwdWJsaWMgaGV4QWxwaGE6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBoc2xhVGV4dDogSHNsYVxyXG4gICAgcHVibGljIHJnYmFUZXh0OiBSZ2JhXHJcblxyXG4gICAgcHVibGljIGFycm93VG9wOiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogc3RyaW5nXHJcbiAgICBwdWJsaWMgaHVlU2xpZGVyQ29sb3I6IHN0cmluZ1xyXG4gICAgcHVibGljIGFscGhhU2xpZGVyQ29sb3I6IHN0cmluZ1xyXG5cclxuICAgIHB1YmxpYyBzdlNsaWRlcldoaXRlOiBib29sZWFuXHJcbiAgICBwdWJsaWMgaHVlU2xpZGVyV2hpdGU6IGJvb2xlYW5cclxuICAgIHB1YmxpYyB2YWx1ZVNsaWRlcldoaXRlOiBib29sZWFuXHJcbiAgICBwdWJsaWMgYWxwaGFTbGlkZXJXaGl0ZTogYm9vbGVhblxyXG5cclxuICAgIHB1YmxpYyBjcFdpZHRoOiBudW1iZXJcclxuICAgIHB1YmxpYyBjcEhlaWdodDogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIGNwQ29sb3JNb2RlOiBDb2xvck1vZGVJbnRlcm5hbCA9IENvbG9yTW9kZUludGVybmFsLmNvbG9yXHJcblxyXG4gICAgcHVibGljIGNwQWxwaGFDaGFubmVsOiBBbHBoYUNoYW5uZWxcclxuICAgIHB1YmxpYyBjcE91dHB1dEZvcm1hdDogT3V0cHV0Rm9ybWF0XHJcblxyXG4gICAgcHVibGljIGNwRGlzYWJsZUlucHV0OiBib29sZWFuXHJcbiAgICBwdWJsaWMgY3BEaWFsb2dEaXNwbGF5OiBEaWFsb2dEaXNwbGF5XHJcblxyXG4gICAgcHVibGljIGNwSWdub3JlZEVsZW1lbnRzOiBhbnlcclxuXHJcbiAgICBwdWJsaWMgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY3BDbG9zZUNsaWNrT3V0c2lkZTogYm9vbGVhblxyXG5cclxuICAgIHB1YmxpYyBjcFBvc2l0aW9uOiBEaWFsb2dQb3NpdGlvbiA9IERpYWxvZ1Bvc2l0aW9uLnJpZ2h0XHJcbiAgICBwdWJsaWMgY3BQb3NpdGlvbk9mZnNldDogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIGNwT0tCdXR0b246IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjcE9LQnV0dG9uVGV4dDogc3RyaW5nXHJcbiAgICBwdWJsaWMgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmdcclxuXHJcbiAgICBwdWJsaWMgY3BDYW5jZWxCdXR0b246IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZ1xyXG4gICAgcHVibGljIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZ1xyXG5cclxuICAgIHB1YmxpYyBjcFByZXNldExhYmVsOiBzdHJpbmdcclxuICAgIHB1YmxpYyBjcFByZXNldENvbG9yczogc3RyaW5nW11cclxuICAgIHB1YmxpYyBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmdcclxuICAgIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmdcclxuXHJcbiAgICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhblxyXG4gICAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmdcclxuICAgIHB1YmxpYyBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZ1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2RpYWxvZ1BvcHVwJykgcHJpdmF0ZSBkaWFsb2dFbGVtZW50OiBFbGVtZW50UmVmXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZXNjJywgWyckZXZlbnQnXSkgaGFuZGxlRXNjKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93ICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbENvbG9yKGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5lbnRlcicsIFsnJGV2ZW50J10pIGhhbmRsZUVudGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93ICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjY2VwdENvbG9yKGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogQ29sb3JQaWNrZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKDAsIDAsIDAsIDApXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNwT3V0cHV0Rm9ybWF0ID09IE91dHB1dEZvcm1hdC5yZ2JhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0ID0gQ29sb3JGb3JtYXRzLlJHQkFcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT0gT3V0cHV0Rm9ybWF0LmhzbGEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSBDb2xvckZvcm1hdHMuSFNMQVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0ID0gQ29sb3JGb3JtYXRzLkhFWFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lck1vdXNlRG93biA9IChldmVudDogYW55KSA9PiB7IHRoaXMub25Nb3VzZURvd24oZXZlbnQpIH1cclxuICAgICAgICB0aGlzLmxpc3RlbmVyUmVzaXplID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCkgfVxyXG5cclxuICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jcFdpZHRoICE9PSAyMzAgfHwgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT0gRGlhbG9nRGlzcGxheS5pbmxpbmUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkRpYWxvZyhjb2xvcjogYW55LCBlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRBY3RpdmUodGhpcylcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3BXaWR0aCA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMzIwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcilcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcoY29sb3IsIGVtaXQpXHJcblxyXG4gICAgICAgIHRoaXMub3BlbkNvbG9yUGlja2VyKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0dXBEaWFsb2coaW5zdGFuY2U6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sb3I6IGFueSxcclxuICAgICAgICBjcFdpZHRoOiBzdHJpbmcsIGNwSGVpZ2h0OiBzdHJpbmcsIGNwRGlhbG9nRGlzcGxheTogRGlhbG9nRGlzcGxheSwgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgY3BDb2xvck1vZGU6IENvbG9yTW9kZSwgY3BBbHBoYUNoYW5uZWw6IEFscGhhQ2hhbm5lbCwgY3BPdXRwdXRGb3JtYXQ6IE91dHB1dEZvcm1hdCxcclxuICAgICAgICBjcERpc2FibGVJbnB1dDogYm9vbGVhbiwgY3BJZ25vcmVkRWxlbWVudHM6IGFueSwgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuLFxyXG4gICAgICAgIGNwQ2xvc2VDbGlja091dHNpZGU6IGJvb2xlYW4sIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4sIGNwUG9zaXRpb246IERpYWxvZ1Bvc2l0aW9uLFxyXG4gICAgICAgIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZywgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbiwgY3BQcmVzZXRMYWJlbDogc3RyaW5nLFxyXG4gICAgICAgIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSwgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlciwgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZyxcclxuICAgICAgICBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcsIGNwT0tCdXR0b246IGJvb2xlYW4sIGNwT0tCdXR0b25DbGFzczogc3RyaW5nLFxyXG4gICAgICAgIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcsIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuLCBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcsXHJcbiAgICAgICAgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcsIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4sXHJcbiAgICAgICAgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZywgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcilcclxuXHJcbiAgICAgICAgdGhpcy5jcENvbG9yTW9kZSA9IHBhcnNlQ29sb3JNb2RlKGNwQ29sb3JNb2RlKVxyXG5cclxuICAgICAgICB0aGlzLmlzSUUxMCA9IChkZXRlY3RJRSgpID09PSAxMClcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZSA9IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmID0gZWxlbWVudFJlZlxyXG5cclxuICAgICAgICB0aGlzLmNwRGlzYWJsZUlucHV0ID0gY3BEaXNhYmxlSW5wdXRcclxuXHJcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9IGNwQWxwaGFDaGFubmVsXHJcbiAgICAgICAgdGhpcy5jcE91dHB1dEZvcm1hdCA9IGNwT3V0cHV0Rm9ybWF0XHJcbiAgICAgICAgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPSBjcERpYWxvZ0Rpc3BsYXlcclxuXHJcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cyA9IGNwSWdub3JlZEVsZW1lbnRzXHJcblxyXG4gICAgICAgIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlID0gY3BTYXZlQ2xpY2tPdXRzaWRlXHJcbiAgICAgICAgdGhpcy5jcENsb3NlQ2xpY2tPdXRzaWRlID0gY3BDbG9zZUNsaWNrT3V0c2lkZVxyXG5cclxuICAgICAgICB0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyID0gY3BVc2VSb290Vmlld0NvbnRhaW5lclxyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jcFdpZHRoID0gcGFyc2VJbnQoY3BXaWR0aCwgMTApXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNwSGVpZ2h0ID0gcGFyc2VJbnQoY3BIZWlnaHQsIDEwKVxyXG5cclxuICAgICAgICB0aGlzLmNwUG9zaXRpb24gPSBjcFBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0ID0gcGFyc2VJbnQoY3BQb3NpdGlvbk9mZnNldCwgMTApXHJcblxyXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvbiA9IGNwT0tCdXR0b25cclxuICAgICAgICB0aGlzLmNwT0tCdXR0b25UZXh0ID0gY3BPS0J1dHRvblRleHRcclxuICAgICAgICB0aGlzLmNwT0tCdXR0b25DbGFzcyA9IGNwT0tCdXR0b25DbGFzc1xyXG5cclxuICAgICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uID0gY3BDYW5jZWxCdXR0b25cclxuICAgICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCA9IGNwQ2FuY2VsQnV0dG9uVGV4dFxyXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcyA9IGNwQ2FuY2VsQnV0dG9uQ2xhc3NcclxuXHJcbiAgICAgICAgdGhpcy5mYWxsYmFja0NvbG9yID0gY3BGYWxsYmFja0NvbG9yIHx8ICcjZmZmJ1xyXG5cclxuICAgICAgICB0aGlzLnNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsLCBjcFByZXNldENvbG9ycylcclxuXHJcbiAgICAgICAgdGhpcy5jcE1heFByZXNldENvbG9yc0xlbmd0aCA9IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXHJcbiAgICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZSA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlXHJcbiAgICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc1xyXG5cclxuICAgICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b24gPSBjcEFkZENvbG9yQnV0dG9uXHJcbiAgICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCA9IGNwQWRkQ29sb3JCdXR0b25UZXh0XHJcbiAgICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MgPSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3NcclxuXHJcbiAgICAgICAgaWYgKCFjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nQXJyb3dTaXplID0gMFxyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNwT3V0cHV0Rm9ybWF0ID09IE91dHB1dEZvcm1hdC5oZXggJiZcclxuICAgICAgICAgICAgY3BBbHBoYUNoYW5uZWwgIT0gQWxwaGFDaGFubmVsLmFsd2F5cyAmJiBjcEFscGhhQ2hhbm5lbCAhPSBBbHBoYUNoYW5uZWwuZm9yY2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSBBbHBoYUNoYW5uZWwuZGlzYWJsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluaXRpYWxDb2xvcihjb2xvcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29sb3IgPSBjb2xvclxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQcmVzZXRDb25maWcoY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNwUHJlc2V0TGFiZWwgPSBjcFByZXNldExhYmVsXHJcbiAgICAgICAgdGhpcy5jcFByZXNldENvbG9ycyA9IGNwUHJlc2V0Q29sb3JzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbG9yRnJvbVN0cmluZyh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBoc3ZhOiBIc3ZhIHwgbnVsbFxyXG5cclxuICAgICAgICBpZiAodGhpcy5jcEFscGhhQ2hhbm5lbCA9PSBBbHBoYUNoYW5uZWwuYWx3YXlzIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT0gQWxwaGFDaGFubmVsLmZvcmNlZCkge1xyXG4gICAgICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XHJcbiAgICAgICAgICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xyXG4gICAgICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh0aGlzLmZhbGxiYWNrQ29sb3IsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhzdmEpIHtcclxuICAgICAgICAgICAgdGhpcy5oc3ZhID0gaHN2YVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmhcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZW1pdCwgdXBkYXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT0gUG9zaXRpb24uZml4ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSAhPSBEaWFsb2dEaXNwbGF5LmlubGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnRW5kKHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnRW5kKHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0KHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnU3RhcnQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJRTEwICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkucG9wdXAgJiZcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNwQ2xvc2VDbGlja091dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQWNjZXB0Q29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm91dHB1dENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JTZWxlY3RlZCh0aGlzLm91dHB1dENvbG9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DYW5jZWxDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09IERpYWxvZ0Rpc3BsYXkucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNhbmNlbGVkKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Gb3JtYXRUb2dnbGUoY2hhbmdlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVGb3JtYXRzID0gdGhpcy5kaWFsb2dJbnB1dEZpZWxkcy5sZW5ndGhcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dEZvcm1hdCA9ICgoKHRoaXMuZGlhbG9nSW5wdXRGaWVsZHMuaW5kZXhPZih0aGlzLmZvcm1hdCkgKyBjaGFuZ2UpICVcclxuICAgICAgICAgICAgYXZhaWxhYmxlRm9ybWF0cykgKyBhdmFpbGFibGVGb3JtYXRzKSAlIGF2YWlsYWJsZUZvcm1hdHNcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmRpYWxvZ0lucHV0RmllbGRzW25leHRGb3JtYXRdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29sb3JDaGFuZ2UodmFsdWU6IHsgczogbnVtYmVyLCB2OiBudW1iZXIsIHJnWDogbnVtYmVyLCByZ1k6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oc3ZhLnMgPSB2YWx1ZS5zIC8gdmFsdWUucmdYXHJcbiAgICAgICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdZXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xyXG4gICAgICAgICAgICBzbGlkZXI6ICdsaWdodG5lc3MnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5oc3ZhLnYsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcclxuICAgICAgICAgICAgc2xpZGVyOiAnc2F0dXJhdGlvbicsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEucyxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkh1ZUNoYW5nZSh2YWx1ZTogeyB2OiBudW1iZXIsIHJnWDogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1hcclxuICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcclxuICAgICAgICAgICAgc2xpZGVyOiAnaHVlJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHsgdjogbnVtYmVyLCByZ1g6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdYXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xyXG4gICAgICAgICAgICBzbGlkZXI6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEudixcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFscGhhQ2hhbmdlKHZhbHVlOiB7IHY6IG51bWJlciwgcmdYOiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnWFxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcclxuICAgICAgICAgICAgc2xpZGVyOiAnYWxwaGEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25IZXhJbnB1dCh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gIT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnIycgKyB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWRIZXggPSAvXiMoW2EtZjAtOV17M318W2EtZjAtOV17Nn0pJC9naVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3BBbHBoYUNoYW5uZWwgPT0gQWxwaGFDaGFubmVsLmFsd2F5cykge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRIZXggPSAvXiMoW2EtZjAtOV17M318W2EtZjAtOV17Nn18W2EtZjAtOV17OH0pJC9naVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IHZhbGlkSGV4LnRlc3QodmFsdWUpXHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnIycgKyB2YWx1ZS5zdWJzdHJpbmcoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGMgPT4gYyArIGMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNwQWxwaGFDaGFubmVsID09IEFscGhhQ2hhbm5lbC5mb3JjZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBNYXRoLnJvdW5kKHRoaXMuaHN2YS5hICogMjU1KS50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiAnaGV4JyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlZElucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSlcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSAhaXNOYU4odmFsdWUudikgJiYgdmFsdWUudiA+PSAwICYmIHZhbHVlLnYgPD0gdmFsdWUucmdcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJnYmEuciA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdyZWQnLFxyXG4gICAgICAgICAgICB2YWxpZDogdmFsaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiByZ2JhLnIsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CbHVlSW5wdXQodmFsdWU6IHsgdjogbnVtYmVyLCByZzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgcmdiYS5iID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmhcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xyXG4gICAgICAgICAgICBpbnB1dDogJ2JsdWUnLFxyXG4gICAgICAgICAgICB2YWxpZDogdmFsaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiByZ2JhLmIsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25HcmVlbklucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSlcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSAhaXNOYU4odmFsdWUudikgJiYgdmFsdWUudiA+PSAwICYmIHZhbHVlLnYgPD0gdmFsdWUucmdcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJnYmEuZyA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICdncmVlbicsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IHJnYmEuZyxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkh1ZUlucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSAhaXNOYU4odmFsdWUudikgJiYgdmFsdWUudiA+PSAwICYmIHZhbHVlLnYgPD0gdmFsdWUucmdcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XHJcbiAgICAgICAgICAgIGlucHV0OiAnaHVlJyxcclxuICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25WYWx1ZUlucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSAhaXNOYU4odmFsdWUudikgJiYgdmFsdWUudiA+PSAwICYmIHZhbHVlLnYgPD0gdmFsdWUucmdcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS52ID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcclxuICAgICAgICAgICAgaW5wdXQ6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHN2YS52LFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQWxwaGFJbnB1dCh2YWx1ZTogeyB2OiBudW1iZXIsIHJnOiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkID0gIWlzTmFOKHZhbHVlLnYpICYmIHZhbHVlLnYgPj0gMCAmJiB2YWx1ZS52IDw9IHZhbHVlLnJnXHJcblxyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XHJcbiAgICAgICAgICAgIGlucHV0OiAnYWxwaGEnLFxyXG4gICAgICAgICAgICB2YWxpZDogdmFsaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxpZ2h0bmVzc0lucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgaHNsYS5sID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XHJcbiAgICAgICAgICAgIGlucHV0OiAnbGlnaHRuZXNzJyxcclxuICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogaHNsYS5sLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2F0dXJhdGlvbklucHV0KHZhbHVlOiB7IHY6IG51bWJlciwgcmc6IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZCA9ICFpc05hTih2YWx1ZS52KSAmJiB2YWx1ZS52ID49IDAgJiYgdmFsdWUudiA8PSB2YWx1ZS5yZ1xyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgaHNsYS5zID0gdmFsdWUudiAvIHZhbHVlLnJnXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XHJcbiAgICAgICAgICAgIGlucHV0OiAnc2F0dXJhdGlvbicsXHJcbiAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcclxuICAgICAgICAgICAgdmFsdWU6IGhzbGEucyxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFkZFByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yID09PSB2YWx1ZSkpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5jb25jYXQodmFsdWUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVtb3ZlUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciAhPT0gdmFsdWUpKVxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycylcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHN0YXR1c1xyXG5cclxuICAgIHByaXZhdGUgb3BlbkNvbG9yUGlja2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKVxyXG4gICAgICAgICAgICB9LCAwKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zdGF0ZUNoYW5nZWQodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlQ29sb3JQaWNrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zdGF0ZUNoYW5nZWQoZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSlcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZFJlZlsnZGVzdHJveWVkJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb2xvclBpY2tlcihlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNwQ29sb3JNb2RlID09IENvbG9yTW9kZUludGVybmFsLmdyYXlzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhzdmEucyA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RPdXRwdXQgPSB0aGlzLm91dHB1dENvbG9yXHJcblxyXG4gICAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSlcclxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpKVxyXG5cclxuICAgICAgICBjb25zdCBodWUgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKG5ldyBIc3ZhKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCwgMSwgMSwgMSkpKVxyXG5cclxuICAgICAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHNsYVRleHQgPSBuZXcgSHNsYShNYXRoLnJvdW5kKChoc2xhLmgpICogMzYwKSwgTWF0aC5yb3VuZChoc2xhLnMgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJnYmFUZXh0ID0gbmV3IFJnYmEocmdiYS5yLCByZ2JhLmcsIHJnYmEuYiwgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gdGhpcy5jcEFscGhhQ2hhbm5lbCA9PSBBbHBoYUNoYW5uZWwuYWx3YXlzXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhleFRleHQgPSB0aGlzLnNlcnZpY2UucmdiYVRvSGV4KHJnYmEsIGFsbG93SGV4OClcclxuICAgICAgICAgICAgdGhpcy5oZXhBbHBoYSA9IHRoaXMucmdiYVRleHQuYVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT0gT3V0cHV0Rm9ybWF0LmF1dG8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaHN2YS5hIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmhzdmEuYSA8IDEgPyBDb2xvckZvcm1hdHMuUkdCQSA6IENvbG9yRm9ybWF0cy5IRVhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5odWVTbGlkZXJDb2xvciA9ICdyZ2IoJyArIGh1ZS5yICsgJywnICsgaHVlLmcgKyAnLCcgKyBodWUuYiArICcpJ1xyXG4gICAgICAgIHRoaXMuYWxwaGFTbGlkZXJDb2xvciA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcsIDApIDAlLCByZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCAxKSAxMDAlKSdcclxuXHJcbiAgICAgICAgdGhpcy5zdlNsaWRlcldoaXRlID0gb3BhcXVlU2xpZGVyV2hpdGUocmdiYSlcclxuICAgICAgICB0aGlzLmh1ZVNsaWRlcldoaXRlID0gb3BhcXVlU2xpZGVyV2hpdGUoaHVlKVxyXG4gICAgICAgIHRoaXMudmFsdWVTbGlkZXJXaGl0ZSA9IG9wYXF1ZVNsaWRlcldoaXRlKHJnYmEpXHJcbiAgICAgICAgdGhpcy5hbHBoYVNsaWRlcldoaXRlID0gdHJhbnNwYXJlbnRTbGlkZXJXaGl0ZShyZ2JhKVxyXG5cclxuICAgICAgICB0aGlzLm91dHB1dENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsIHRoaXMuY3BPdXRwdXRGb3JtYXQsIHRoaXMuY3BBbHBoYUNoYW5uZWwpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsICdyZ2JhJywgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oXHJcbiAgICAgICAgICAgICh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgpLFxyXG4gICAgICAgICAgICB0aGlzLmhzdmEucyxcclxuICAgICAgICAgICAgKDEgLSB0aGlzLmhzdmEudiksXHJcbiAgICAgICAgICAgIHRoaXMuaHN2YS5hXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAoZW1pdCAmJiBsYXN0T3V0cHV0ICE9PSB0aGlzLm91dHB1dENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMub3V0cHV0Q29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmdcclxuXHJcbiAgICBwcml2YXRlIHNldERpYWxvZ1Bvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PSBEaWFsb2dEaXNwbGF5LmlubGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9zaXRpb24ucmVsYXRpdmVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBQb3NpdGlvbi5zdGF0aWMsIHRyYW5zZm9ybSA9ICcnLCBzdHlsZVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGU6IGFueSA9IG51bGwsIHRyYW5zZm9ybU5vZGU6IGFueSA9IG51bGxcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gdGhpcy5kaWFsb2dFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnRhZ05hbWUgIT09ICdIVE1MJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPSBQb3NpdGlvbi5zdGF0aWMgJiYgcGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJyAmJiB0cmFuc2Zvcm1Ob2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZSA9IG5vZGVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gUG9zaXRpb24uZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdHJhbnNmb3JtTm9kZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYm94RGlyZWN0aXZlID0gdGhpcy5jcmVhdGVEaWFsb2dCb3godGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIChwb3NpdGlvbiAhPSBQb3NpdGlvbi5maXhlZCkpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSb290Vmlld0NvbnRhaW5lciB8fCAocG9zaXRpb24gPT0gUG9zaXRpb24uZml4ZWQgJiYgKCFwYXJlbnROb2RlIHx8IHBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MVW5rbm93bkVsZW1lbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveFBhcmVudCA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KHBhcmVudE5vZGUsIChwb3NpdGlvbiAhPSBQb3NpdGlvbi5maXhlZCkpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wIC0gYm94UGFyZW50LnRvcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQgLSBib3hQYXJlbnQubGVmdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gUG9zaXRpb24uZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBQb3NpdGlvbi5maXhlZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jcFBvc2l0aW9uID09IERpYWxvZ1Bvc2l0aW9uLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgLT0gdGhpcy5jcFdpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09IERpYWxvZ1Bvc2l0aW9uLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvd1RvcCA9IGRpYWxvZ0hlaWdodCAtIDFcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wIC09IGRpYWxvZ0hlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PSBEaWFsb2dQb3NpdGlvbi5ib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgKz0gYm94RGlyZWN0aXZlLndpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZyBhbmQgb3BlbmluZ1xyXG5cclxuICAgIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG5vZGU6IGFueSA9IGNoaWxkLnBhcmVudE5vZGVcclxuXHJcbiAgICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEaWFsb2dCb3goZWxlbWVudDogYW55LCBvZmZzZXQ6IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCksXHJcbiAgICAgICAgICAgIGxlZnQ6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwKSxcclxuICAgICAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19