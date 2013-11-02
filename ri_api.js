 
(function() {
  "use strict";

  var FoxxController = require("org/arangodb/foxx").Controller;
    controller = new FoxxController(applicationContext);

    controller.registerRepository(
      "words"
    );

    controller.get("/random", function (req, res) {
        var result = repositories.words.collection.any();
        var c = result.anzahl;
        if(true == isNaN(c))
            c = 0;
        c++;
        repositories.words.collection.update(result._id,{"anzahl": c});
       res.json(result);
    }).nickname("random")
  .summary("Returns new Word")
  .notes("This function simply returns the new Word");


    controller.post("/new", function (req, res) {
      repositories.words.collection.save(JSON.parse(req.requestBody));
      res.json({ "msg": "stored" });
    }).nickname("new")
  .summary("Adds new Word")
  .notes("This function simply adds the new Word");


    controller.start(applicationContext);
}());
