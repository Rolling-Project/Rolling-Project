import { css } from '@emotion/react';
import NanumPen from '../assets/fonts/NanumPen.woff2';
import NanumMyeongjo from '../assets/fonts/NanumMyeongjo.woff2';
import NotoSansRegular from '../assets/fonts/NotoSans-Regular.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';

const Reset = css`
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
  html {
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: '나눔명조';
    src: url(${NanumMyeongjo});
  }
  @font-face {
    font-family: '나눔손글씨 손편지체';
    src: url(${NanumPen});
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansRegular});
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular});
    font-display: swap;
  }
`;

export default Reset;
