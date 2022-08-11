'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ModeSelect;
(function (ModeSelect) {
    ModeSelect["DARK"] = "DARK";
    ModeSelect["LIGHT"] = "LIGHT";
    ModeSelect["PALE"] = "PALE";
})(ModeSelect || (ModeSelect = {}));

var ReactStylus = /** @class */ (function () {
    function ReactStylus(props) {
        var _this = this;
        Object.entries(props).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return (_this[key] = value);
        });
    }
    ReactStylus.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    ReactStylus.prototype.setWhatIsSet = function (isSet) {
        this.willBeSet = isSet;
    };
    ReactStylus.prototype.whatIsSet = function () {
        return this.willBeSet;
    };
    ReactStylus.prototype.getMode = function () {
        return this.mode;
    };
    ReactStylus.prototype.getColors = function () {
        if (!this.willBeSet.colorsAreSet)
            return;
        if (!this.colors)
            return;
        switch (this.mode) {
            case ModeSelect.DARK:
                return {
                    primary: this.colors.primaryDark,
                    secondary: this.colors.secondaryDark,
                    tertiary: this.colors.tertiaryDark,
                };
            case ModeSelect.PALE:
                return {
                    primary: this.colors.primaryPale,
                    secondary: this.colors.secondaryPale,
                    tertiary: this.colors.tertiaryPale,
                };
            default:
                return {
                    primary: this.colors.primaryLight,
                    secondary: this.colors.secondaryLight,
                    tertiary: this.colors.tertiaryLight,
                };
        }
    };
    ReactStylus.prototype.getBackgroundColor = function () {
        switch (this.mode) {
            case ModeSelect.DARK:
                return this.backgroundDark;
            case ModeSelect.PALE:
                return this.backgroundPale;
            default:
                return this.backgroundLight;
        }
    };
    ReactStylus.prototype.getTextColor = function () {
        switch (this.mode) {
            case ModeSelect.DARK:
                return this.textColorDark;
            case ModeSelect.PALE:
                return this.textColorPale;
            default:
                return this.textColorLight;
        }
    };
    ReactStylus.prototype.getTint = function () {
        switch (this.mode) {
            case ModeSelect.DARK:
                return this.tintColorDark;
            case ModeSelect.PALE:
                return this.tintColorPale;
            default:
                return this.tintColorLight;
        }
    };
    ReactStylus.prototype.getComplementaryColors = function () {
        switch (this.mode) {
            case ModeSelect.DARK:
                return this.complementaryColorDark;
            case ModeSelect.PALE:
                return this.complementaryColorPale;
            default:
                return this.complimentaryColorLight;
        }
    };
    ReactStylus.prototype.getColorsByMode = function () {
        if (!this.willBeSet.colorsAreSet &&
            !this.willBeSet.backgroundsAreSet &&
            !this.willBeSet.complimentaryColorsAreSet &&
            !this.willBeSet.statusColorsAreSet &&
            !this.willBeSet.textIsSet)
            return;
        if (this)
            switch (this.mode) {
                case ModeSelect.DARK:
                    return {
                        background: this.backgroundDark,
                        text: this.textColorDark,
                        tint: this.tintColorDark,
                        complementary: this.complementaryColorDark,
                        colors: {
                            primary: this.colors.primaryDark,
                            secondary: this.colors.secondaryDark,
                            tertiary: this.colors.tertiaryDark,
                        },
                    };
                case ModeSelect.PALE:
                    return {
                        background: this.backgroundPale,
                        text: this.textColorPale,
                        tint: this.tintColorPale,
                        complementary: this.complementaryColorPale,
                        colors: {
                            primary: this.colors.primaryPale,
                            secondary: this.colors.secondaryPale,
                            tertiary: this.colors.tertiaryPale,
                        },
                    };
                default:
                    return {
                        background: this.backgroundLight,
                        text: this.textColorLight,
                        tint: this.tintColorLight,
                        complementary: this.complimentaryColorLight,
                        colors: {
                            primary: this.colors.primaryLight,
                            secondary: this.colors.secondaryLight,
                            tertiary: this.colors.tertiaryLight,
                        },
                    };
            }
    };
    ReactStylus.prototype.getStatusColors = function () {
        if (!this.willBeSet.statusColorsAreSet)
            return;
        switch (this.mode) {
            case ModeSelect.DARK:
                return {
                    warning: this.warningColorDark,
                    success: this.successColorDark,
                    danger: this.dangerColorDark,
                };
            case ModeSelect.PALE:
                return {
                    warning: this.warningColorPale,
                    success: this.successColorPale,
                    danger: this.dangerColorPale,
                };
            default:
                return {
                    warning: this.warningColorLight,
                    success: this.successColorLight,
                    danger: this.dangerColorLight,
                };
        }
    };
    return ReactStylus;
}());

var ReactStylusProvider = React__default["default"].createContext(null);

exports.ReactStylus = ReactStylus;
exports.ReactStylusProvider = ReactStylusProvider;
//# sourceMappingURL=index.cjs.js.map
