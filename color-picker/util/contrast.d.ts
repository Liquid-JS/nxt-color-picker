import { Rgba } from './formats';
export declare function calculateContrast(foreground: Rgba, background: Rgba): number;
export declare function compositeColors(foreground: Rgba, background: Rgba): Rgba;
export declare function compositeAlpha(foregroundAlpha: number, backgroundAlpha: number): number;
export declare function compositeComponent(fgC: number, fgA: number, bgC: number, bgA: number, a: number): number;
export declare function calculateLuminance(color: Rgba): number;
export declare function calculateMinimumAlpha(foreground: Rgba, background: Rgba, minContrastRatio: number): number;
export declare function opaqueSliderWhite(background: Rgba): boolean;
export declare function transparentSliderWhite(background: Rgba): boolean;
