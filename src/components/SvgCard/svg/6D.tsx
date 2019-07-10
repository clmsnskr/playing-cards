import React from 'react';

export const Diamonds6SvgComponent = () => (
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
      id="SD6"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
        fill="red"
      ></path>
    </symbol>
    <symbol
      id="VD6"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-250 100A250 250 0 0 1 250 100L250 210A250 250 0 0 1 -250 210L-250 -210A250 250 0 0 1 0 -460C150 -460 180 -400 200 -375"
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
    <use xlinkHref="#VD6" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SD6" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SD6" height="70" x="-87.501" y="-135.501"></use>
    <use xlinkHref="#SD6" height="70" x="17.501" y="-135.501"></use>
    <use xlinkHref="#SD6" height="70" x="-87.501" y="-35"></use>
    <use xlinkHref="#SD6" height="70" x="17.501" y="-35"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VD6" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SD6" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SD6" height="70" x="-87.501" y="-135.501"></use>
      <use xlinkHref="#SD6" height="70" x="17.501" y="-135.501"></use>
    </g>
  </svg>
);