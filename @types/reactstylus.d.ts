declare module "ThemeBuilder" {
  export interface ColorProfile {
    origin: string;
    tint?: string;
    shade?: string;
  }

  export interface Colors {
    primaryLight: ColorProfile;
    primaryDark: ColorProfile;
    primaryPale: ColorProfile;
    secondaryLight: ColorProfile;
    secondaryDark: ColorProfile;
    secondaryPale: ColorProfile;
    tertiaryLight: ColorProfile;
    tertiaryDark: ColorProfile;
    tertiaryPale: ColorProfile;
  }

  export interface ColorsMode {
    primary: ColorProfile;
    secondary: ColorProfile;
    tertiary: ColorProfile;
  }

  export enum ModeSelect {
    DARK = "DARK",
    LIGHT = "LIGHT",
    PALE = "PALE",
  }

  export interface ColorsByMode {
    background?: string;
    text?: string;
    tint?: string;
    complementary?: string;
    colors?: ColorsMode;
  }
  export interface IsSet {
    colorsAreSet?: boolean;
    backgroundsAreSet?: boolean;
    textIsSet?: boolean;
    complimentaryColorsAreSet?: boolean;
    statusColorsAreSet?: boolean;
  }
  export type ThemeBuilderProps = {
    colors?: Colors;
    backgroundDark?: string;
    backgroundLight?: string;
    colorsAreSet?: boolean;
    backgroundPale?: string;
    textColorLight?: string;
    textColorDark?: string;
    textColorPale?: string;
    tintColorLight?: string;
    tintColorDark?: string;
    tintColorPale?: string;
    warningColorLight?: string;
    warningColorDark?: string;
    warningColorPale?: string;
    dangerColorLight?: string;
    dangerColorDark?: string;
    dangerColorPale?: string;
    successColorLight?: string;
    successColorDark?: string;
    successColorPale?: string;
    complimentaryColorLight?: string;
    complementaryColorDark?: string;
    complementaryColorPale?: string;
    mode: ModeSelect;
    willBeSet: IsSet;
  };

  export type TextColors = {
    textColorDark: string;
    textColorLight: string;
    textColorPale: string;
  };

  export type StatusColors = {
    warning?: string;
    success?: string;
    danger?: string;
  };

  export interface Theming {
    setMode(mode: ModeSelect): void;
    getMode(): string;
    getColors(): ColorsMode | void;
    getBackgroundColor(): string | void;
    getTextColor(): string | void;
    getTint(): string | void;
    getComplementaryColors(): string | void;
    getColorsByMode(): ColorsByMode | void;
    getStatusColors(): StatusColors | void;
    setWhatIsSet(isSet: IsSet): void;
    whatIsSet(): IsSet;
  }

  class ThemeBuilder implements Theming {
    constructor(props: ThemeBuilderProps);
    setMode(mode: ModeSelect): void;
    getMode(): string;
    getColors(): ColorsMode | void;
    getBackgroundColor(): string | void;
    getTextColor(): string | void;
    getTint(): string | void;
    getComplementaryColors(): string | void;
    getColorsByMode(): ColorsByMode | void;
    getStatusColors(): StatusColors | void;
    setWhatIsSet(isSet: IsSet): void;
    whatIsSet(): IsSet;
  }
}
