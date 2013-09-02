(function() {
  "use strict";

  var console = require("console");
  var arangodb = require("org/arangodb");
  var db = arangodb.db;

  var createCollection = function(name) {
    var handle = app.collectionName(name);
    if (db._collection(handle) === null) {
      db._create(handle);
    }
    else {
      console.warn("collection '%s' already exists. Leaving it untouched.", handle);
    }
  };
  createCollection("words");
}());
