import axios from 'axios';

export const getApiData = url => {
    return axios
            .get(url)
            .then(response => {
                return response.data;
            });
}