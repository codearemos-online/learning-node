import axios from 'axios';
const httpClientPlugin = {
    get: async (url: string) => {
        try {
            const { data } = await axios.get(url);
            return data;
        }
        catch (error) {
            throw ("Pokemon not found")
        }
    }
}

export {
    httpClientPlugin as http
}