import React from 'react';

export const Clubs3SvgComponent = () => (
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
      id="SC3"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
        fill="black"
      ></path>
    </symbol>
    <symbol
      id="VC3"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-250 -320L-250 -460L200 -460L-110 -80C-100 -90 -50 -120 0 -120C200 -120 250 0 250 150C250 350 170 460 -30 460C-230 460 -260 300 -260 300"
        stroke="black"
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
    <use xlinkHref="#VC3" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SC3" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SC3" height="70" x="-35" y="-135.588"></use>
    <use xlinkHref="#SC3" height="70" x="-35" y="-35"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VC3" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SC3" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SC3" height="70" x="-35" y="-135.588"></use>
    </g>
  </svg>
);