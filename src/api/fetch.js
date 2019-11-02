import Swal from "sweetalert2";

const { NODE_ENV, VUE_APP_PRODUCTION_API_URL, VUE_APP_DEVELOPMENT_API_URL } = process.env;

const BASE_URL = NODE_ENV === "production"
    ? VUE_APP_PRODUCTION_API_URL : VUE_APP_DEVELOPMENT_API_URL;

const rootOptions = {
    headers: {
        "Accept": "application/json"
    }
};

const parseFetch = async (url, options) => {
    try {
        const response = await fetch(BASE_URL + url, { ...rootOptions, options });
        const result = await response.json();

        if (response.status > 400) {
            throw new Error(result);
        }

        return result;
    } catch (error) {
        Swal.fire({
            type: "error",
            title: "Oops...",
            text: error
        });

        return { error };
    }
};

export const get = async (url, options) => {
    const response = await parseFetch(url, options);
    return response;
};