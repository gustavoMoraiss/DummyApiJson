import {UnistylesRegistry} from 'react-native-unistyles';
import {breakpoints} from './tokens/breakpoints';
import {dark, light} from './theme';

type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof light;
  dark: typeof dark;
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: light,
    dark: dark,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
