import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Inter", sans-serif;
  color: ${(p) => p.theme.colors.dark};
  }


main {
  min-height: calc(100vh - 688px - 54px);
}

h1,
h2,
h3,
h4,
p,
ul,
ol,
li {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

button {
  margin: 0;
  padding: 0;
}

p {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

img {
  display: block;
}

.list {
  list-style-type: none;
}

.link {
  text-decoration: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
}

.is-hidden {
  display: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  opacity: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
}

.container {
  margin: 0 auto;
  padding: 100px 64px;
  max-width: 1440px;
  display: flex;
  gap: 64px;
}


`;
