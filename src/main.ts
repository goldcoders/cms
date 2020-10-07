(window as any).CMS_MANUAL_INIT = true

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
    local_backend: true,
    load_config_file: false,
    media_folder: 'exampleSite/static/images',
    public_folder: '/images',
    site_url: '/',
    display_url: '/',
    logo_url: '/images/logo.svg',
    show_preview_links: false,
    collections
}
init({config});

import './shortcodes';
import './events';
