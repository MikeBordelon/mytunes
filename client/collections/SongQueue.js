// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


 
  playFirst: function() {

    this.models[0].play();
  },
  
  initialize: function() {
    this.on({
      'add': function() {
        if (this.length === 1) {
          return this.playFirst();  
        }
      },
      'ended': function() {
        this.remove(this.models[0]);

        if (this.length) {
          return this.playFirst();   
        }
      },
      'dequeue': function() {
        this.remove(this.models[this.models.length - 1]);        
      },
      'enqueue': function() {
        this.add();
      },
    });
  },


});