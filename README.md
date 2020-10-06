# Thriftshop CMS Beta Version

![pic-full-201006-1521-00](https://user-images.githubusercontent.com/55337687/95170828-9eeb6980-07e7-11eb-8283-6554e533b68f.png)

## Requirements
- [git](https://git-scm.com/downloads)
- [nodejs & npm](https://nodejs.org/en/download/)
- [hugo](https://github.com/gohugoio/hugo/releases)
- [yarn](https://yarnpkg.com/getting-started/install)

## Important on Windows Users
- add Hugo to your system env variables, hugo command must be accessible globally

### Integration on Thriftshop Ecommerce App

- open gitbash on windows , or terminal on linux / mac
- change directory to the thriftshop theme folder e.g.: type command: `cd ~/theme`
- type command: `git clone https://github.com/goldcoders/cms`
- make sure your are on netlify-cms branch to change branch type command: `git checkout netlify-cms`
- install all the dependencies type command: `yarn`

### SET Your .env on Thriftshop App

- add the following env variables to the thriftshop .env file
- inside thritshop theme folder on windows type command: `notepad .env` on linux or mac use your preferred editor e.g.: `vim .env`
- Add this new Default values

```
LOCAL_BACKEND=true
SHOW_PREVIEW_LINKS=true
MEDIA_FOLDER=exampleSite/static/images
SITE_URL=http://localhost:1234
DISPLAY_URL=http://localhost:1234
LOGO_URL=http://localhost:1234/images/logo.svg
PUBLIC_FOLDER=/images
```

> for list of all available .env variables [check this](https://gist.github.com/codeitlikemiley/33660ae3f1f5bae91595cdac072d70e1)


### RUN CMS on thriftshop

- yarn cms
- open one browser on left side on `http://localhost:1234` (LOCAL CMS)
- open one browser on right side on `http://localhost:1313` (LOCAL SITE WITH LIVE RELOAD)

## TODO
- Add Additional Custom Shortcodes to Hugo and CMS

## License

[MIT](./LICENSE)
