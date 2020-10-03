import type {Backend} from './backend'

export interface Config  {
    backend: Backend;
    local_backend: boolean;
    media_folder?: string;
    public_folder?: string;
    site_url?: string;
    display_url?: string;
    logo_url?: string;
    show_preview_links: boolean;
    collections?: Array<any>;
}
