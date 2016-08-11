// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // callback: function(array) {
  //   return this.add(array).bind(this);
  // },

  url: 'https://api.parse.com/1/classes/songs',
  parse: function(response) {
    return response.results;
  },



  initialize: function() {
    this.fetch();
  },

});