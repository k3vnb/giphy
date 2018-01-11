const apiKey = require('./../.env').apiKey;

export class GiphyLand {
  constructor(inputTopic, outputGifs) {
    this.inputTopic = inputTopic;
  }

  getGiphs(success, error){//success and error are callback function names
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${this.inputTopic}&api_key=${apiKey}&limit=50`,
      type: 'GET',
      data: {
        format: 'json'
      },

      success: function(response) {

        const a = Math.floor(Math.random() * 45) + 1;
        const b = a + 5;
        let newArray = [];
        for (var i = a; i < b; i++){
        newArray.push(response.data[i].images.fixed_height.url);
        }

        success(newArray);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server
      },

      error: function() {
        error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  } //getGiphs()
}//GetGiph
