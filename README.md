# PLANETS using ThreeJS

This mini-project uses threeJS library.
It's based on:
- API using NodeJS, Express, and PUG view engine
- Webpage style with css (using Bulma CSS Framework)
- Webpage interaction with JavaScript/TypeScript

## [See app website](https://planets-three-js.vercel.app/)

## Getting Started

Install dependencies: after cloning the project and from the project directory: `npm install`

Create `.env` file

Convert source files in TypeScript to JS file: `npm run compress`

Start the server: `npm start`

## Endpoints

- `GET /` home page
- `GET /:planets` planets pages

## Technical stack

### API

- Node JS
- EXPRESS
- [PUG](https://pugjs.org/) for views

### Front

- CSS
- TypeScrit and JavaScript
- [Watchify](https://www.npmjs.com/package/watchify) and [Tsify](https://www.npmjs.com/package/tsify) to convert TypeScript files in `src` folder to Javascript file
- [ThreeJS](https://threejs.org/) to create 3D models for planets