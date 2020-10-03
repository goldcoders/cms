# CMS

## Install Dependency on The Site Project

- yarn add netlify-cms netlify-cms-proxy-server npm-run-all parcel-bundler typescript dotenv
- modify package.json

```
"browserslist": [
    "last 1 chrome versions"
],
"scripts":{
"cms-dev": "parcel src/index.html",
"cms-build": "parcel build src/index.html",
"cms-proxy": "netlify-cms-proxy-server",
"cms": "run-p cms-dev cms-proxy"
}
```

- cp .env.example .env
- yarn cms

## Todo
- Add Additional Shortcodes
