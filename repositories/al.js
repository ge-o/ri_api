(function () {
  "use strict";
  
  var _ = require("underscore"),
    Foxx = require("org/arangodb/foxx"),
    Words_Repository = Foxx.Repository.extend({
      // Define the save functionality
      save: function (content) {
        return this.collection.save(content.toJSON());
      },
      // Define the functionality to remove one object from the collection
      destroy: function (id) {
        this.collection.remove(id);
      },
      // Define the functionality to display all elements in the collection
      list: function () {
        var self = this;
        return _.map(this.collection.toArray(), function(o) {
          return new self.modelPrototype(o);
        });
      },
      // Define the functionality to replace one document.
      update: function (id, content) {
        this.collection.replace(id, content.toJSON());
      }
    });
  exports.Repository = Words_Repository;
  
}());
