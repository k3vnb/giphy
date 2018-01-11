const apiKey = require('./../.env').apiKey;
import {GiphyLand} from './../js/giphy.js';

$(document).ready(function() {
  $('form#search').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    const gifs = $('#gif-search-input').val();
    $('#gif-search-input').val("");
    const newRequest = new GiphyLand(gifs);

    newRequest.getGiphy(function(cheese){
      $('.result').append(`<img src="${newArray}">`);
    }, function(bacon){
      $('#errors').text("There was an error processing your request. Please try again.");

    }
  });
});

// response.data[i].images.fixed_height.url
