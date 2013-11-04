(function() {
    "use strict";

    var console = require("console");
    var arangodb = require("org/arangodb");
    var db = arangodb.db;

    var words = applicationContext.collectionName("words");

    if (db._collection(words) === null) {
        var collection = db._create(words);
    }
    else {
        console.log("collection '%s' already exists. Leaving it untouched.", words);
    }
}());