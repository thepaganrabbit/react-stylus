# React Stylus (BETA)

A way of styling based upon users color profiles. Control of colors for modes DARK, LIGHT, and PALE color profiles setup by you the user. It is a provider using the React Context API and can be used site wide.

## Information

All the fields are optional but must be turned on using the key will be set: This is used for functions that return multiple values based on color mode.

```TypeScript
export interface IsSet {
  colorsAreSet?: boolean;
  backgroundsAreSet?: boolean;
  textIsSet?: boolean;
  complimentaryColorsAreSet?: boolean;
  statusColorsAreSet?: boolean;
}
```

If you are providing the colors the matching choice should be set to true, by default they are set to false:

```TypeScript
{
    willBeSet: {
    colorsAreSet: true,
    backgroundsAreSet: false,
    textIsSet: false,
    complimentaryColorsAreSet: false,
    statusColorsAreSet: false,
  },
}
```

The same goes for all others that if selected should be switched to on (True) if you are providing them.

**Sample Complete Object**

This is a sample of a complete Theme settings object. 

```TypeScript
export const THEMESETTINGS: ThemeBuilderProps = {
  backgroundLight: '#d1d9e3',
  backgroundDark: '#167D7F',
  backgroundPale: '#b984c3',
  highlight: '#29A0B1',
  tint: '#94d0d8',
  textColorLight: '#0F1513',
  textColorDark: '#E8F2F2',
  textColorPale: '#061617',
  tintColorLight: '#F0F9F6',
  tintColorDark: '#167D7F',
  tintColorPale: '#29A0B1',
  warningColorLight: '#FF8700',
  warningColorDark: '#167D7F',
  warningColorPale: '#29A0B1',
  dangerColorLight: '#EF103A',
  dangerColorDark: '#167D7F',
  dangerColorPale: '#29A0B1',
  successColorLight: '#2DD258',
  successColorDark: '#167D7F',
  successColorPale: '#29A0B1',
  complimentaryColorLight: '#b9aeab',
  complementaryColorDark: '#7F1816',
  complementaryColorPale: '#E27E79',
  mode: ModeSelect.LIGHT,
  willBeSet: {
    colorsAreSet: true,
    backgroundsAreSet: true,
    textIsSet: true,
    complimentaryColorsAreSet: true,
    statusColorsAreSet: true,
  },
  colors: {
    primaryDark: {
      origin: '#004369',
      tint: '#99b4c3',
      shade: '#00283f',
    },
    primaryLight: {
      origin: '#0280c7',
      tint: '#609dbf',
      shade: '#265b78',
    },
    primaryPale: {
      origin: '#76b7db',
      tint: '#aedaf2',
      shade: '#89a4b3',
    },
    secondaryLight: {
      origin: '#01949A',
      tint: '#99d4d7',
      shade: '#01686c',
    },
    secondaryDark: {
      origin: '#026c70',
      tint: '#67888a',
      shade: '#23484a',
    },
    secondaryPale: {
      origin: '#8cd8db',
      tint: '#b9eef0',
      shade: '#87a7a8',
    },
    tertiaryPale: {
      origin: '#E5DDC8',
      tint: '#f2eee4',
      shade: '#898578',
    },
    tertiaryDark: {
      origin: '#7d672f',
      tint: '#8a7b57',
      shade: '#524832',
    },
    tertiaryLight: {
      origin: '#f7c452',
      tint: '#fad98e',
      shade: '#ba9b54',
    },
  },
}

export const STYLUSTHEME: ReactStylus = new ReactStylus(THEMESETTINGS); 
```

**Folder Structure**

-> src
    -> theme
        -> index.tsx
        -> theme.tsx
        -> Context.tsx


**Available Methods**

```TypeScript
// Setters
setMode(mode: ModeSelect): void;
setWhatIsSet(isSet: IsSet): void;
//getters
getMode(): string;
getColors(): ColorsMode | void;
getBackgroundColor(): string | void;
getTextColor(): string | void;
getTint(): string | void;
getComplementaryColors(): string | void;
getStatusColors(): StatusColors | void;
whatIsSet(): IsSet;
// Get All based on modes
getColorsByMode(): ColorsByMode | void;
```

All the methods return a color based on what the mode is set to. For example if you run getTextColor() it will return the text color based on the mode selection. 


**The Context**

Wrap the index.tsx or App.tsx in the provider:

```TypeScript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactStylusProvider.Provider value={STYLUSTHEME}>
          {routeManager()}
        </ReactStylusProvider.Provider>
      </header>
    </div>
  );
}

export default App;
```

**Accessing The context in app**

Using it:

```TypeScript
const Button = ({ children, onClick }: ButtonProps) => {
  const themeCtx = React.useContext<ReactStylus>(STYLUSTHEME);
  return (
    <button
      className="button is-responsive"
      style={{
        backgroundColor: themeCtx.getColorsByMode().tint,
        width: '100%',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## Notes:

This is is development so there are some bugs and quirks.


### LICENSE

Copyright (c) [2022], [gonzalesgustavoc]

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.