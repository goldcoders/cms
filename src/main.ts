window.CMS_MANUAL_INIT = true

import { init } from 'netlify-cms';
import collections from './collections/index';
import './shortcodes';
import './events';

import type {Config} from './Structs/config';


let config: Config = {
    backend: {
        name: "git-gateway",
        branch: "netlify-cms"
    },
    load_config_file: false,
    media_folder: "exampleSite/static/images",
    public_folder: "/images",
    logo_url: "/images/logo.svg",
    site_url: "/",
    display_url: "/",
    show_preview_links: false,
    collections
}

init({config});
