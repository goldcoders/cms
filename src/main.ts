import { init } from 'netlify-cms';
import collections from './collections/index';
import type {Config} from './Structs/config';
import {Backend} from './Structs/backend';

let backend: Backend = {
    name: "git-gateway",
    branch: "main"
}

let config: Config = {
    backend,
    local_backend: false,
    load_config_file: false,
    media_folder: 'exampleSite/static/images',
    public_folder: '/images',
    site_url: process.env.HUGO_BASEURL,
    display_url: process.env.HUGO_BASEURL,
    show_preview_links: false,
    collections
}
init({config});

import './shortcodes';
import './events';
import './widgets';
