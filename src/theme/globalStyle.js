import { createGlobalStyle } from 'styled-components';
// import '../../public/static/reset.css';

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
// blockquote,
// pre,
a,
abbr,
acronym,
address,
big,
cite,
// code,
del,
dfn,
// em,
img,
ins,
kbd,
q,
s,
samp,
small,
// strike,
// strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
// mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
// ol,
// ul {
//   list-style: none;
// }
// blockquote,
// q {
//   quotes: none;
// }
// blockquote:before,
// blockquote:after,
// q:before,
// q:after {
//   content: '';
//   content: none;
// }
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// **************** MY STYLES ****************
:root {
--black: #1f1f1f;
--white: #fff;
--light: #faf8f6;
--links: #4c4cf3;
--linksLighter: #6f6ff5;
--linksVisited: #3535aa;
--accentColor: #fdcf58;
}

body {
  font-family: 'Roboto', sans-serif;
  // font-family: 'Roboto Mono', monospace;
  margin: 1rem auto;
  max-width: 768px;
  // background-color: var(--light);
  color: var(--black);
  line-height: normal;
}

a {
  text-decoration-style: dotted;
  color: var(--links);
}

// a:visited {
//   color: var(--linksVisited);
// }

a:active, a:hover {
  color: var(--linksLighter);
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Roboto Slab', serif;
// font-family: 'Roboto Mono', monospace;
  font-weight: 800;
}

h1 {
  font-size: 2em;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5em;
  margin-bottom: 1rem;
}
h3 {
  font-size: 1.25em;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}
h4 {
  font-size: 1.125rem;
}
h5, h6 {
  font-size: 1.125rem;
}

p {
  // font-size: 1.063rem;
  font-size: 1rem;
  line-height: 1.5;
}

.icon {
  // width: auto;
  height: 45px;
  margin: 10px;
}

ul, ol {
  padding-left: 1.375rem;
}

blockquote {
  border-left: 2px solid var(--black);
  padding-left: 1rem;
}

// **************** Markdown Posts ****************

.post-content p {
  margin-bottom: 0.5rem;
}
`;

export default GlobalStyle;
