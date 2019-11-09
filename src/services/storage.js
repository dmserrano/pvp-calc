import moment from "moment";
import Swal from "sweetalert2";
import { LAST_VISITED_DATE, SAVED_RESULTS } from "@/constants/storage";

const localStorage = window.localStorage;
const { VUE_APP_LAST_VISITED_DATE_DURATION } = process.env;

export const getStorageValue = key => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const removeStorageValue = key => {
    localStorage.removeItem(key);
};

export const setStorageValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorage = () => localStorage.clear();

export const checkVisitationToken = () => {
    const lastVisitedDate = getStorageValue(LAST_VISITED_DATE);
    const dateFormat = "YYYY-MM-DDTHH:MM:ss";

    if (!lastVisitedDate) {
        setStorageValue(LAST_VISITED_DATE, moment().format(dateFormat));
        return;
    }

    const visitationDifference = moment().diff(lastVisitedDate, "hours");

    if (visitationDifference >= VUE_APP_LAST_VISITED_DATE_DURATION) {
        clearStorage();
    }
};

export const getSavedResults = () => {
    if (!storageAvailable()) return;

    const savedResults = getStorageValue(SAVED_RESULTS);
    return savedResults && Array.isArray(savedResults) ? savedResults : [];
};

export const saveResults = async results => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "Results will be saved to the browser's local storage. Clearing browsing data will delete the saved results.",
        type: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Save"
    });

    if (!result.value) return;

    setStorageValue(SAVED_RESULTS, results);
};

// This function will determine if localStorage is available in the browser
export const storageAvailable = () => {
    let storage;
    const storageType = "localStorage";

    try {
        storage = window[storageType];
        let x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};