import Swal from "sweetalert2";
const BASE_URL = "http://localhost:4000/api/v1";

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