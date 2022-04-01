import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
 
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
   sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 background-color: #dde1e9;
}
*{
 margin: 0;
 padding: 0;
}
code {
 font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
   monospace;
}
`;
export default GlobalStyle;
