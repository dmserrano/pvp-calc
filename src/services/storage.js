import moment from "moment";
import { LAST_VISITED_DATE } from "@/constants/storage";

const localStorage = window.localStorage;
const { VUE_APP_LAST_VISITED_DATE_DURATION } = process.env;

export const getStorageValue = key => {
    const value = localStorage.getItem(key);
    return value ? value : null;
};

export const removeStorageValue = key => {
    localStorage.removeItem(key);
};

export const setStorageValue = (key, value) => {
    localStorage.setItem(key, value);
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