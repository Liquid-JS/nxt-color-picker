export declare enum OutputFormat {
    auto = "auto",
    hex = "hex",
    rgba = "rgba",
    hsla = "hsla"
}
export declare enum AlphaChannel {
    enabled = "enabled",
    disabled = "disabled",
    always = "always",
    forced = "forced"
}
export declare enum DialogPosition {
    top = "top",
    left = "left",
    right = "right",
    bottom = "bottom"
}
export declare enum DialogDisplay {
    popup = "popup",
    inline = "inline"
}
export declare enum Position {
    fixed = "fixed",
    relative = "relative",
    static = "static",
    absolute = "absolute"
}
export declare type ColorMode = 'color' | 'c' | '1' | 'grayscale' | 'g' | '2' | 'presets' | 'p' | '3';
export declare enum ColorModeInternal {
    color = 0,
    grayscale = 1,
    presets = 2
}
export declare function parseColorMode(mode: string): ColorModeInternal;
