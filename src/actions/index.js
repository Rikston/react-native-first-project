import { SEARCH_CHANGE } from '../types';

export const searchChanged = (text) => {
    console.log(text);
    return {
        type: SEARCH_CHANGE,
        payload: text
    };
};
