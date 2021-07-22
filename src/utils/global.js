import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%; //1rem=10px
    box-sizing: border-box;
    --color-main: ${(props) => props.theme.colors.main};
    --color-mainLight: ${(props) => props.theme.colors.mainLight};
    --color-mainDark: ${(props) => props.theme.colors.mainDark};
    --color-mainBg: ${(props) => props.theme.colors.mainBg};
    --color-text: ${(props) => props.theme.colors.textColor};
    --color-error: ${(props) => props.theme.colors.errorRed};
    --color-white: ${(props) => props.theme.colors.whiteColor};
    --shadow:  ${(props) => props.theme.colors.shadow};
}

body {
  font-family: "Roboto";
  font-weight: 400;
  line-height: 1.6;
}
a, button {
    cursor: pointer;
  }
a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;
