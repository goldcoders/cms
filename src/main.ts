require("dotenv").config();
window.CMS_MANUAL_INIT = true

import { init } from 'netlify-cms';
import collections from './collections';
import './shortcodes';
import './events';

import type {Config} from './Structs/config';


let config: Config = {
    backend: {
        name: "git-gateway",
        branch: "netlify-cms"
    },
    local_backend: JSON.parse(process.env.LOCAL_BACKEND),
    media_folder: process.env.MEDIA_FOLDER,
    public_folder: process.env.PUBLIC_FOLDER,
    site_url: process.env.SITE_URL,
    display_url: process.env.DISPLAY_URL,
    logo_url: process.env.LOGO_URL,
    show_preview_links: JSON.parse(process.env.SHOW_PREVIEW_LINKS),
    collections
}

init({config});
