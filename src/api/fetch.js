const BASE_URL = "http://localhost:3000/api/v1";

const rootOptions = {
    headers: {
        "Accept": "application/json"
    }
};

const parseFetch = async (url, options) => {
    const response = await fetch(BASE_URL + url, { ...rootOptions, options });
    const result = await response.json();
    return result;
};

export const get = async (url, options) => {
    try {
        const response = await parseFetch(url, options);
        return response;
    } catch (error) {
        return error;
    }
};