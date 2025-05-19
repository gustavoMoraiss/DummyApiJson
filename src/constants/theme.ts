export type LightTheme = {
  dark: false;
  colors: {
    background: '#FFFFFF';
    text: '#000000';
    primary: '#1E90FF';
    card: '#F5F5F5';
    border: '#E0E0E0';
  };
};

export type DarkTheme = {
  dark: true;
  colors: {
    background: '#121212';
    text: '#FFFFFF';
    primary: '#BB86FC';
    card: '#1E1E1E';
    border: '#272727';
  };
};

export type ThemeType = typeof LightTheme;
