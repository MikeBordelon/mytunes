// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  callback: function(array) {
    return this.add(array).bind(this);
  },

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      data: '',
      success: function(data) {
        
      },
      error: function() {}
    });
  },

});
// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });