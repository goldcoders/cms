# CMS

## Requirements

- nodejs & npm (latest)
- yarn (latest)

## Installation

### Add Dependencies
- yarn add netlify-cms netlify-cms-proxy-server npm-run-all parcel-bundler typescript dotenv

### Update Package.json

```
"scripts":{
"cms-dev": "parcel cms/src/index.html -d exampleSite/static/admin",
"cms-build": "parcel build cms/src/index.html -d exampleSite/static/admin",
"cms-proxy": "netlify-cms-proxy-server",
"start": "run-p cms-proxy cms-dev dev"
}
```

### Merge ENV variables to your existing one

```
LOCAL_BACKEND=true
SHOW_PREVIEW_LINKS=true
MEDIA_FOLDER=exampleSite/static/images
SITE_URL=http://localhost:1234
DISPLAY_URL=http://localhost:1234
LOGO_URL=http://localhost:1234/images/logo.svg
PUBLIC_FOLDER=/images
```
### RUN CMS

- yarn start

## Todo
- Add Additional Shortcodes
