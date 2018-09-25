module.exports.getMovieTitles = async _movieName => {

    if (_movieName == '' || _movieName == undefined)
        throw new Error('inset more precise name');

    var rp = require('request-promise');
    var movieCounter = 0,currentPage = 1, lastPage;
    var movieTitles = [];
    var movieName = _movieName;

    var req;
    var url = `https://jsonmock.hackerrank.com/api/movies/search/%20?Title=${movieName}&page=${currentPage}`;
    var options = {
        method: 'GET',
        uri: url,
        json: true
    };

    req = await rp(options);
    lastPage = req.total_pages;

    for(currentPage; currentPage <= lastPage; currentPage++){
        options.uri = `https://jsonmock.hackerrank.com/api/movies/search/%20?Title=${movieName}&page=${currentPage}`;
        req = await rp(options);

        for(movieCounter; movieCounter < req.data.length; movieCounter++) {
            movieTitles.push(req.data[movieCounter].Title);
        }

        movieCounter = 0;
    }

    movieTitles.sort();

    console.log(movieTitles);
};
