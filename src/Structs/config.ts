import type {Backend} from './backend'
import type {LocalBackend} from './local_backend'

type PublishMode = "editorial_workflow";

type MediaLibrary = {
    name: string;
    config: {
        public_key?: string;
        max_file_size?: number;
    }
};

type EncodingType = "unicode"|"encoding";

type SlugType = {
   encoding: EncodingType;
   clean_accents: boolean;
   sanitize_replacement: string;
}




export interface Config  {
    backend: Backend;
    local_backend?: LocalBackend|boolean;
    load_config_file?: boolean;
    media_folder?: string;
    public_folder?: string;
    publish_mode?: PublishMode;
    media_library?: MediaLibrary;
    site_url?: string;
    slug?: SlugType;
    display_url?: string;
    logo_url?: string;
    show_preview_links: boolean;
    locale?: string;
    collections?: Array<any>;
}
