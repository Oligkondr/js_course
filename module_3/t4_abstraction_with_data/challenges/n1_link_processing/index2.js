class MyURL extends URL {

    log() {
        console.log(this);
    }

    setProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }

    setHost(host) {
        this.host = host;
        return this;
    }

    getProtocol() {
        return this.protocol;
    }

}

// setProtocol(url, protocol) {
//     url.protocol = protocol;
// }
//
// getProtocol(url) {
//     console.log(this.protocol);
// }
//
// setHost = (url, host) => url.host = host;
//
// getHost = (url) => url.host;
//
// setPath = (url, path) => url.pathname = path;
//
// getPath = (url) => url.pathname;
//
// setQueryParam = (url, key, value) => url.searchParams.set(key, value);
//
// getQueryParam = (url, paramName, defaultValue = null) => (url.searchParams.get(paramName) || defaultValue);

const testUrl = new MyURL('https://aboba.com/qwe?asd=1');
testUrl.setProtocol('http:').log();
