var dataSource = require("../data/movieDataSource");

exports.getAllMovies = function(request, response) {
	var movies = dataSource.getAll();
	response.send(movies);
};

exports.getMovieById = function(request, response) {

};

exports.updateMovie = function(request, response){

};
 
exports.createMovie = function(request, response){

};

exports.deleteMovie = function(request, response){

};