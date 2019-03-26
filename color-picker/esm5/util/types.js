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
export { OutputFormat };
/** @enum {string} */
var AlphaChannel = {
    enabled: 'enabled',
    disabled: 'disabled',
    always: 'always',
    forced: 'forced',
};
export { AlphaChannel };
/** @enum {string} */
var DialogPosition = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom',
};
export { DialogPosition };
/** @enum {string} */
var DialogDisplay = {
    popup: 'popup',
    inline: 'inline',
};
export { DialogDisplay };
/** @enum {string} */
var Position = {
    fixed: 'fixed',
    relative: 'relative',
    static: 'static',
    absolute: 'absolute',
};
export { Position };
/** @enum {number} */
var ColorModeInternal = {
    color: 0,
    grayscale: 1,
    presets: 2,
};
export { ColorModeInternal };
ColorModeInternal[ColorModeInternal.color] = 'color';
ColorModeInternal[ColorModeInternal.grayscale] = 'grayscale';
ColorModeInternal[ColorModeInternal.presets] = 'presets';
/**
 * @param {?} mode
 * @return {?}
 */
export function parseColorMode(mode) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJ1dGlsL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNJLE1BQU8sTUFBTTtJQUNiLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7Ozs7SUFJYixTQUFVLFNBQVM7SUFDbkIsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7Ozs7O0lBSWpCLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7Ozs7SUFJakIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7OztJQUlqQixPQUFRLE9BQU87SUFDZixVQUFXLFVBQVU7SUFDckIsUUFBUyxRQUFRO0lBQ2pCLFVBQVcsVUFBVTs7Ozs7SUFNckIsUUFBSztJQUNMLFlBQVM7SUFDVCxVQUFPOzs7Ozs7Ozs7O0FBR1gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFZO0lBQ3ZDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ25DLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLE9BQU87WUFDUixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQTtRQUVsQyxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxXQUFXO1lBQ1osT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUE7UUFFdEMsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssU0FBUztZQUNWLE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBRXBDO1lBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUE7S0FDckM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gT3V0cHV0Rm9ybWF0IHtcclxuICAgIGF1dG8gPSAnYXV0bycsXHJcbiAgICBoZXggPSAnaGV4JyxcclxuICAgIHJnYmEgPSAncmdiYScsXHJcbiAgICBoc2xhID0gJ2hzbGEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFscGhhQ2hhbm5lbCB7XHJcbiAgICBlbmFibGVkID0gJ2VuYWJsZWQnLFxyXG4gICAgZGlzYWJsZWQgPSAnZGlzYWJsZWQnLFxyXG4gICAgYWx3YXlzID0gJ2Fsd2F5cycsXHJcbiAgICBmb3JjZWQgPSAnZm9yY2VkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaWFsb2dQb3NpdGlvbiB7XHJcbiAgICB0b3AgPSAndG9wJyxcclxuICAgIGxlZnQgPSAnbGVmdCcsXHJcbiAgICByaWdodCA9ICdyaWdodCcsXHJcbiAgICBib3R0b20gPSAnYm90dG9tJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaWFsb2dEaXNwbGF5IHtcclxuICAgIHBvcHVwID0gJ3BvcHVwJyxcclxuICAgIGlubGluZSA9ICdpbmxpbmUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBvc2l0aW9uIHtcclxuICAgIGZpeGVkID0gJ2ZpeGVkJyxcclxuICAgIHJlbGF0aXZlID0gJ3JlbGF0aXZlJyxcclxuICAgIHN0YXRpYyA9ICdzdGF0aWMnLFxyXG4gICAgYWJzb2x1dGUgPSAnYWJzb2x1dGUnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbG9yTW9kZSA9ICdjb2xvcicgfCAnYycgfCAnMScgfCAnZ3JheXNjYWxlJyB8ICdnJyB8ICcyJyB8ICdwcmVzZXRzJyB8ICdwJyB8ICczJ1xyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JNb2RlSW50ZXJuYWwge1xyXG4gICAgY29sb3IsXHJcbiAgICBncmF5c2NhbGUsXHJcbiAgICBwcmVzZXRzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbG9yTW9kZShtb2RlOiBzdHJpbmcpOiBDb2xvck1vZGVJbnRlcm5hbCB7XHJcbiAgICBzd2l0Y2ggKG1vZGUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgY2FzZSAnQ09MT1InOlxyXG4gICAgICAgICAgICByZXR1cm4gQ29sb3JNb2RlSW50ZXJuYWwuY29sb3JcclxuXHJcbiAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgY2FzZSAnR1JBWVNDQUxFJzpcclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yTW9kZUludGVybmFsLmdyYXlzY2FsZVxyXG5cclxuICAgICAgICBjYXNlICczJzpcclxuICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICBjYXNlICdQUkVTRVRTJzpcclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yTW9kZUludGVybmFsLnByZXNldHNcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yTW9kZUludGVybmFsLmNvbG9yXHJcbiAgICB9XHJcbn1cclxuIl19