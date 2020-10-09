# Thriftshop Desktop CMS Beta Version

![pic-full-201006-1521-00](https://user-images.githubusercontent.com/55337687/95170828-9eeb6980-07e7-11eb-8283-6554e533b68f.png)

## [Live DEMO on my FB account](https://www.facebook.com/codeitlikemiley/posts/3366374673483596)

## Basic Requirements
- [git](https://git-scm.com/downloads)
- [nodejs & npm](https://nodejs.org/en/download/)
- [hugo](https://github.com/gohugoio/hugo/releases)
- [yarn](https://yarnpkg.com/getting-started/install)

## Set ENV Path
- on windows you need to manually add hugo to the sysytem PATH variables

## Note On Windows Users
- majority of the command only runs on git bash

### Integration on Thriftshop Ecommerce App

- open gitbash on windows , or terminal on linux / mac
- change directory to the thriftshop theme folder e.g.: type command: `cd ~/theme`
- type command: `git clone https://github.com/goldcoders/cms`
- make sure your are on netlify-cms branch to change branch type command: `git checkout netlify-cms`
- install all the dependencies type command: `yarn`

### SET Your .env on Thriftshop App

> Assuming you are already inside `cms` folder

- run this command `mv .env.example .env`

> Note: setting .env inside `cms` folder overrides .env on the `theme` folder

- edit `.env` file on windows type command: `notepad .env` on other OS (linux max) use your default editor eg.: `vim .env`
- modify SITE_URL and DISPLAY_URL according to your domain name
- you can also modify logo on login page by modifying LOGO_URL

```
LOCAL_BACKEND=true
SHOW_PREVIEW_LINKS=true
MEDIA_FOLDER=exampleSite/static/images
SITE_URL=http://goldcoders.net
DISPLAY_URL=http://goldcoders.net
LOGO_URL=/images/logo.svg
PUBLIC_FOLDER=/images
```

### RUN CMS on thriftshop locally

- yarn cms
- open one browser on left side on `http://localhost:1234` (LOCAL CMS)
- open one browser on right side on `http://localhost:1313` (LOCAL SITE WITH LIVE RELOAD)

## TODO
- Add Additional Custom Shortcodes to Hugo and CMS

## License

[MIT](./LICENSE)
