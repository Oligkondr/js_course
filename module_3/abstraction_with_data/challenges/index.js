const make = (url) => new URL(url);

const toString = (url) => url.toString();

const setProtocol = (url, protocol) => url.protocol = protocol;

const getProtocol = (url) => url.protocol;

const setHost = (url, host) => url.host = host;

const getHost = (url) => url.host;

const setPath = (url, path) => url.pathname = path;

const getPath = (url) => url.pathname;

const setQueryParam = (url, key, value) => url.searchParams.set(key, value);

const getQueryParam = (url, paramName, defaultValue = null) => (url.searchParams.get(paramName) || defaultValue);

export {
    setQueryParam,
    getQueryParam,
    setProtocol,
    getProtocol,
    toString,
    setPath,
    getPath,
    setHost,
    getHost,
    make,
};
