import React from 'react';

export const Hearts10SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="card"
    height="3.5in"
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width="2.5in"
  >
    <symbol
      id="SHT"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
        fill="red"
      ></path>
    </symbol>
    <symbol
      id="VHT"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-260 430L-260 -430M-50 0L-50 -310A150 150 0 0 1 250 -310L250 310A150 150 0 0 1 -50 310Z"
        stroke="red"
        strokeWidth="80"
        strokeLinecap="square"
        strokeMiterlimit="1.5"
        fill="none"
      ></path>
    </symbol>
    <rect
      width="239"
      height="335"
      x="-119.5"
      y="-167.5"
      rx="12"
      ry="12"
      fill="white"
      stroke="black"
    ></rect>
    <use xlinkHref="#VHT" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SHT" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SHT" height="70" x="-87.501" y="-135.501"></use>
    <use xlinkHref="#SHT" height="70" x="17.501" y="-135.501"></use>
    <use xlinkHref="#SHT" height="70" x="-87.501" y="-68.5"></use>
    <use xlinkHref="#SHT" height="70" x="17.501" y="-68.5"></use>
    <use xlinkHref="#SHT" height="70" x="-35" y="-102"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VHT" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SHT" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SHT" height="70" x="-87.501" y="-135.501"></use>
      <use xlinkHref="#SHT" height="70" x="17.501" y="-135.501"></use>
      <use xlinkHref="#SHT" height="70" x="-87.501" y="-68.5"></use>
      <use xlinkHref="#SHT" height="70" x="17.501" y="-68.5"></use>
      <use xlinkHref="#SHT" height="70" x="-35" y="-102"></use>
    </g>
  </svg>
);