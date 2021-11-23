# SLI Helper
Setting up for helping pull up specific dashboards for SLI

## To run local:

1. Clone repo `git clone git@github.homedepot.com:sxw172p/sli-helper.git`
2. `cd` into where you cloned it
3. Run `npm ci`
4. Run `npm start`

## Dev/Prod
Not in dev/prod at this time

## Tech Stack
- React - v17 utilizing Create React App
- Material UI - v5
- GitHub

## Files:

```
.
├── README.md                 //You are here
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js                //Context and layout setup
    ├── App.test.js
    ├── Context
    │   └── ThemedContext.js  //Theme provider
    ├── Landing
    │   ├── Landing.js        //Landing page
    │   └── Links.js          //Generates links
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```