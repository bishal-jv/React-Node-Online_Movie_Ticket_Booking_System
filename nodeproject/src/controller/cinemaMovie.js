const res = require("express/lib/response");
const movieModel = require("../models/movie");

//add new movie api
const addMovie = async (req, res) => {
  try {
    if (!req.body.movie_name || !req.body.description || !req.body.runtime) {
      return res.json({ message: "Malformed Request!!" });
    }

    const movieAlreadyExist = await movieModel.findOne({
      movie_name: req.body.movie_name,
    });

    if (movieAlreadyExist) {
      return res.json({ message: "Movie already exists!!" });
    }

    const movieData = {
      movie_name: req.body.movie_name,
      description: req.body.description,
      runtime: req.body.runtime,
    };

    const result = await movieModel.create(movieData);

    return res.json({
      message: "Movie creation success",
      status: 200,
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//update movie api
const updateMovie = async (req, res) => {
  try {
    const movieData = {
      movie_name: req.body.movie_name,
      description: req.body.description,
      runtime: req.body.runtime,
    };

    const result = await movieModel.findOneAndUpdate(
      { _id: req.body._id },
      movieData
    );

    return res.json({
      message: "Movie updated success",
      status: 200,
      data: movieData,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//delete movie api
const deleteMovie = async (req, res) => {
  try {
    const result = await movieModel.deleteOne({ _id: req.body._id });
    if (result !== null) {
      return res.json({
        message: "Movie delete success",
        status: 200,
      });
    } else {
      return res.json({
        message: "Movie not found, nothing deleted",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//search movie api
const searchMovie = async (req, res) => {
  try {
    const searchBar = await movieModel.findOne({
      movie_name: req.body.movie_name,
    });
    if (searchBar !== null) {
      return res.json({
        message: "Movie found",
        searchBar: searchBar,
      });
    } else {
      return res.json({
        message: "Movie not found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//list all movie api
const listallMovie = async (req, res) => {
  const listMovie = await movieModel.find({});
  if (listMovie !== null) {
    return res.json({
      listMovie: listMovie,
    });
  } else {
    return res.json({
      message: "No movies to display!!",
    });
  }
};

//specific movie details api
const specificMovie = async (req, res) => {
  try {
    const infoMovie = await movieModel.findOne({ _id: req.body._id });
    return res.json({
      message: "Movie Details below",
      data: infoMovie,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
  listallMovie,
  specificMovie,
};
