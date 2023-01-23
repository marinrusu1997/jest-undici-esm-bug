import { request } from 'undici';

function get(url: string) {
    return request(url);
}

export { get };
