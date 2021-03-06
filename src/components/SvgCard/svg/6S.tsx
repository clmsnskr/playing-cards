import React from 'react';
import { SvgCardProps } from './SvgCardProps';

export const Spades6SvgComponent = ({ width, height }: SvgCardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="card"
    height={height}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={width}
  >
    <symbol
      id="SS6"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
        fill="black"
      ></path>
    </symbol>
    <symbol
      id="VS6"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-250 100A250 250 0 0 1 250 100L250 210A250 250 0 0 1 -250 210L-250 -210A250 250 0 0 1 0 -460C150 -460 180 -400 200 -375"
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
    <use xlinkHref="#VS6" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SS6" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SS6" height="70" x="-87.501" y="-135.501"></use>
    <use xlinkHref="#SS6" height="70" x="17.501" y="-135.501"></use>
    <use xlinkHref="#SS6" height="70" x="-87.501" y="-35"></use>
    <use xlinkHref="#SS6" height="70" x="17.501" y="-35"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VS6" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SS6" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SS6" height="70" x="-87.501" y="-135.501"></use>
      <use xlinkHref="#SS6" height="70" x="17.501" y="-135.501"></use>
    </g>
  </svg>
);
