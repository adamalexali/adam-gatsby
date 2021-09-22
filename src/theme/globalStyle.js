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
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
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
mark,
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
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// **************** MY STYLES ****************
:root {
--black: #1f1f1f;
--white: #fff;
--light: #faf8f6;
--links: #4a718a;
--linksLighter: #6e8da1;
--subtleColor: rgba(31, 31, 31, 0.8);
--accentColor: #fdcf58;
}

body {
  // font-family: -apple-system, Helvetica, Arial, sans-serif;
  // font-family: 'Source Sans Pro', sans-serif;
  font-family: 'Roboto', sans-serif;
  margin: 1rem auto;
  max-width: 768px;
  background-color: var(--light);
  color: var(--black);
  line-height: normal;
}

a {
  text-decoration-style: dotted;
  color: var(--links);
}

a:active, a:hover {
  color: var(--linksLighter);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
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
  font-size: 1.125em;
}
h5, h6 {
  font-size: 1.125em;
}

p {
  font-size: 1.063em;
  line-height: 1.5;
}

.icon {
  width: auto;
  height: 45px;
  margin: 10px;
}
`;

export default GlobalStyle;
