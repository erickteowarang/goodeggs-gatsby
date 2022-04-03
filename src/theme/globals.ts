import { createGlobalStyle, withTheme } from 'styled-components'

const Globals = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @keyframes zoomInUp {
    0% {
      transform: scale(0.95) translateY(10px) translateX(-50%);
      visibility: hidden;
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scale(1), translateY(0) translateX(-50%);
      visibility: visible;
    }
  }

  @keyframes zoomOutDown {
    0% {
      transform: scale(1) translateY(0) translateX(-50%);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0.95) translateY(10px) translateX(-50%);
      visibility: hidden;
    }
  }

  @keyframes fadeIn {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`

export default withTheme(Globals);