import apiAction from "../services/ApiAction";
import axios     from "axios"

const GithubRepoAPI = {
    getRepositories(username, page = 1, perPage = 40) {
        return new Promise((resolve, reject) => {
            apiAction.get(`/users/${username}/repos`, {
                page    : page,
                per_page: perPage
            }, {
                Accept: "application/vnd.github.v3+json"
            }).then(response => {
                return resolve(response.data);
            })
                     .catch(err => {
                         return reject(err);
                     })
        })
    },

    getRawREADME(login, repo) {
        return new Promise((resolve, reject) => {
            axios.get(`https://raw.githubusercontent.com/${login}/${repo}/master/README.md`)
                 .then(response => {
                     return resolve(response.data)
                 })
                 .catch(err => reject(err));

        })
    }
};

export default GithubRepoAPI;