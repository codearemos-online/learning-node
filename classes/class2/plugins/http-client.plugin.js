const httpClientPlugin = {
    get: async(url) => {
        let resp = await fetch(url);
        return resp.json()
    }
}

module.exports = {
    http: httpClientPlugin
}