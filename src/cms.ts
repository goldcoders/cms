import { init } from 'netlify-cms';
import collections from './collections/index';
import type {Config} from './Structs/config';
import {Backend} from './Structs/backend';

let backend: Backend = {
    name: "git-gateway",
    branch: "netlify-cms"
}

let config: Config = {
    backend,
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

import './shortcodes';
import './events';
