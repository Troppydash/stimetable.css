import * as React from "react";

/// Color in Hex or CSS Compatible string
type HexColor = string;

/// A Series Variants of a color
interface ColorPalette {
    unchanged: HexColor,
    hover: HexColor,
    focus: HexColor,
    text: HexColor,
    textDimmed: HexColor,
}

/**
 * Shorthand way of creating a color palette
 * @param unchanged Unchanged HexColor
 * @param hover Hover HexColor
 * @param focus Focus HexColor
 * @param text Text HexColor
 * @returns ColorPalette Resulting ColorPalette
 * @constructor
 */
export function CreateColorPalette( unchanged: HexColor, hover: HexColor, focus: HexColor, text: HexColor, textDimmed: HexColor ): ColorPalette {
    return {
        unchanged,
        hover,
        focus,
        text,
        textDimmed
    }
}

/// Generates the CSS Variables object for a given ColorPalette and its prefix
function generateColorPaletteStyles( theme: ColorPalette, prefix: string ): object {
    return {
        [`--st-${prefix}`]: theme.unchanged,
        [`--st-${prefix}-hover`]: theme.hover,
        [`--st-${prefix}-focus`]: theme.focus,
        [`--st-${prefix}-text`]: theme.text,
        [`--st-${prefix}-text-dim`]: theme.textDimmed,
    }
}

/// A Color Theme for this CSS library
interface ColorTheme {
    primary: ColorPalette,
    secondary: ColorPalette,
    background: ColorPalette,
}

/// Generates the style object for a given ColorTheme
function generateColorThemeStyles( theme: ColorTheme ): object {
    return {
        ...generateColorPaletteStyles( theme.primary, "primary" ),
        ...generateColorPaletteStyles( theme.secondary, "secondary" ),
        ...generateColorPaletteStyles( theme.background, "background" ),
        '--st-text': theme.background.text,
        '--st-text-dim': theme.background.textDimmed,
    }
}

/// Props for Provider
interface ThemeProviderProps {
    theme: ColorTheme
}

/**
 * ThemeProvider for custom styling of the variables in the this CSS library
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function Provider( props: React.PropsWithChildren<ThemeProviderProps> ) {
    const { theme, children } = props;
    return (
        <div className="ts-themeprovider"
             style={generateColorThemeStyles( theme )}>
            {children}
        </div>
    )
}
