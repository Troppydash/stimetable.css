import * as React from "react";

/// Color in Hex or CSS Compatible string
type HexColor = string;

/// A Series Variants of a color
interface ColorPalette {
    unchanged: HexColor,
    focus: HexColor,
    active: HexColor,
    text: HexColor,
}

/**
 * Shorthand way of creating a color palette
 * @param unchanged Unchanged HexColor
 * @param focus Focused HexColor
 * @param active Active HexColor
 * @param text Text HexColor
 * @returns ColorPalette Resulting ColorPalette
 * @constructor
 */
export function CreateColorPalette( unchanged: HexColor, focus: HexColor, active: HexColor, text: HexColor ): ColorPalette {
    return {
        unchanged,
        focus,
        active,
        text
    }
}

/// Generates the CSS Variables object for a given ColorPalette and its prefix
function generateColorPaletteStyles( theme: ColorPalette, prefix: string ): object {
    return {
        [`--st-${prefix}`]: theme.unchanged,
        [`--st-${prefix}-focus`]: theme.focus,
        [`--st-${prefix}-active`]: theme.active,
        [`--st-${prefix}-text`]: theme.text,
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
        '--st-text': theme.background.text
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
