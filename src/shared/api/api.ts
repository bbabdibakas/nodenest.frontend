import axios from 'axios';
import {PROFILE_LOCALSTORAGE_KEY} from "shared/const/localstorage";

//TODO: have to add httpOnly cookies
const getAccessToken = () => {
    const profileDataJSON = localStorage.getItem(PROFILE_LOCALSTORAGE_KEY);

    if (profileDataJSON) {
        // TODO: have to create type validator
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const profileData = JSON.parse(profileDataJSON);
        return profileData.accessToken ? `Bearer ${profileData.accessToken}` : '';
    }

    return ''
}

export const api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: getAccessToken(),
        'content-type': 'application/json',
    },
});