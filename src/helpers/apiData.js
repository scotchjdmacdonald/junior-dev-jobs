import axios from 'axios';

export const getApiData = url => {
    return axios
            .get(url)
            .then(response => {
                return response.data;
            });
}

export const patchApiData = (url, data) => {
    return axios
            .patch(url, data)
            .then(response => {
                return response.data;
            });
}

export const postApiData = (url, data) => {
    return axios
            .post(url, data)
            .then(response => {
                return response.data;
            });
}