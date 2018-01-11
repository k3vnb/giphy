const apiKey = require('./../.env').apiKey;
import {GiphyLand} from './../js/giphy.js';

$(document).ready(function() {
  $('form#search').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    const gifs = $('#gif-search-input').val();
    const newRequest = new GiphyLand(gifs);

    newRequest.getGiphs(function(cheese){
      console.log(cheese);
      for (var i = 0; i < cheese.length; i++)
      $('.result').append(`<img class="gif-place" src="${cheese[i]}")>`);
    }, function(bacon){
      $('#errors').text("There was an error processing your request. Please try again.");

    }); //newRequest.getGiphy function
  });//form submit
}); //doc ready

// response.data[i].images.fixed_height.url
