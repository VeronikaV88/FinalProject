import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
.main {
background-color: #7300e6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 750px;
  border: 20px inset #ffd633;
}`;
