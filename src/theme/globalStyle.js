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

/* **************** ROOT ****************  */
:root {
  --black: #222;
  --white: #fff;
  --off-white: #f2f2f2;
  --light: #faf8f6;
  --lightLinks: #0000ff;
  --lightLinksActive: #3232ff;
  --darkLinks: #ff7324;
  --darkLinksActive: #ff8f4f;
}

#themeToggleBtn {
background-color: transparent;
border: none;
text-align: center;
font-size: 1.75rem;
cursor: pointer;
}

/* **************** LIGHTMODE ****************  */
body.light {
  background-color: var(--white);
  color: var(--black);
}

body.light a {
  color: var(--lightLinks);
}

body.light a:active, body.light a:hover {
  color: var(--lightLinksActive);
}

/* **************** DARKMODE **************** */
body.dark {
  background-color: var(--black);
  color: var(--off-white);
}

body.dark a {
  color: var(--darkLinks);
}

body.dark a:active, body.dark a:hover  {
  color: var(--darkLinksActive);
}

/* **************** BREADCRUMBS **************** */
.breadcrumb__list {
  list-style: none;
  padding: 0;
  text-transform: lowercase;
  // margin-bottom: 1rem;
}

.breadcrumb__list > li {
  display: inline;
}

/* **************** MISC **************** */
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica neue, Helvetica,
    sans-serif;
  margin: 1rem auto;
  max-width: 668px;
  line-height: normal;
}

a {
  text-decoration-style: dotted;
}

a[target='_blank']::after {
  margin-left: 0.125em;
  margin-right: 0.25em;
  display: inline;
  content: '↗';
  font-style: normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
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
  font-size: 1.125rem;
}
h5,
h6 {
  font-size: 1.125rem;
}

p {
  font-size: 1.063rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}

.icon {
  width: auto;
  height: 45px;
  margin: 10px;
}

ul,
ol {
  // padding-left: 1.375rem;
}

blockquote {
  border-left: 2px solid var(--black);
  padding-left: 1rem;
}

/* **************** MARKDOWN **************** */
.post-content p {
  margin-bottom: 0.5rem;
}
`;

export default GlobalStyle;
