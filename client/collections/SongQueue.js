// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


 
  playFirst: function(url) {
    console.log(this.length)
    return url;
  },

  // this.on('all', function(e) {
  //   if (e === add) {
  //     this.playFirst(e.url);      
  //   }
    
  // });

  // add: function(song) {
  //   this.
  //   if (this.length === 1) {
  //     return this.playFirst(song.url);  
  //   } 
  // },

  initialize: function() {
    this.on('add', function(e) {
      console.log(e);
      if (this.length === 1) {
        return this.playFirst(e.url);  
      }   
    });
  },


});