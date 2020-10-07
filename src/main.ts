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
    load_config_file: false,
    media_folder: 'exampleSite/static/images',
    public_folder: '/images',
    site_url: process.env.SITE_URL,
    display_url: process.env.DISPLAY_URL,
    logo_url: '/images/logo.svg',
    show_preview_links: false,
    collections
}
init({config});

import './shortcodes';
import './events';
