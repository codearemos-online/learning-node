import axios from 'axios';
const httpClientPlugin = {
    get: async (url:string) => {
        const { data } = await axios.get(url);
        return data;
    }
}

export {
    httpClientPlugin as http
}