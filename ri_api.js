 
(function() {
  "use strict";

 var FoxxApplication = require("org/arangodb/foxx").Application,
      app = new FoxxApplication();

    app.registerRepository(
      "words"
    );

    app.get("/random", function (req, res) {
       res.json(repositories.words.collection.any());
    }).nickname("random")
  .summary("Returns new Word")
  .notes("This function simply returns the new Word");

 
  app.post("/new", function (req, res) {
    var content = JSON.parse(req.requestBody);
    res.json(content);
    }).nickname("new")
  .summary("Adds new Word")
  .notes("This function simply adds the new Word");


  app.start(applicationContext);
}());
