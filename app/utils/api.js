var axios = require('axios');

module.exports = {
    fetchPopularRepos: function (language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=starts:>1+language:'+ language +'&sort=starts&order=desc&type=Repositories');

        return axios.get(encodedURI)
            .then(function (response) {
                return response.data.items;
            });
    }
}