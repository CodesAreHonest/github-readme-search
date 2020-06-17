import apiAction from "../services/ApiAction";

const GithubUserAPI = {
    searchUsers(login, page, perPage) {
        return new Promise((resolve, reject) => {
            apiAction.get("/search/users", {
                q       : `${login} in:login`,
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

    getProfile(username) {
        return new Promise((resolve, reject) => {
            apiAction.get(`/users/${username}`, {}, {
                Accept: "application/vnd.github.v3+json"
            }).then(response => {
                return resolve(response.data);
            })
                     .catch(err => {
                         return reject(err);
                     })
        })

    }
};

export default GithubUserAPI;