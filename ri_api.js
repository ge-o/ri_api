 
(function() {
  "use strict";

  var FoxxController = require("org/arangodb/foxx").Controller,
    controller = new FoxxController(applicationContext);

    var usersRepo = new foxx.Repository(db._collection("words"));


    controller.get("/random", function (req, res) {
        var result = usersRepo.collection.any();
        var c = result.anzahl;
        if(true == isNaN(c))
            c = 0;
        c++;
        usersRepo.collection.update(result._id,{"anzahl": c});
       res.json(result);
    }).nickname("random")
  .summary("Returns new Word")
  .notes("This function simply returns the new Word");


    controller.post("/new", function (req, res) {
        usersRepo.collection.save(JSON.parse(req.requestBody));
      res.json({ "msg": "stored" });
    }).nickname("new")
  .summary("Adds new Word")
  .notes("This function simply adds the new Word");


    controller.start(applicationContext);
}());
