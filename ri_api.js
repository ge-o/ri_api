(function() {
  "use strict";
  var Controller = require("org/arangodb/foxx").Controller,
    Repository = require("org/arangodb/foxx").Repository,
    console = require("console"),
    arangodb = require("org/arangodb"),
    actions = require("org/arangodb/actions"),
    controller = new Controller(applicationContext),
    words = new Repository(controller.collection("words"));

    controller.get("/random", function (req, res) {
        var result = words.collection.any();
        var c = result.anzahl;
        if(true == isNaN(c))
            c = 0;
        c++;
        words.collection.update(result._id,{"anzahl": c});
        res.responseCode = actions.HTTP_OK;
        res.contentType = "application/json; charset=utf-8";
        res.body = JSON.stringify(result);
    }).nickname("random")
  .summary("Returns new Word")
  .notes("This function simply returns the new Word");


  controller.post("/new", function (req, res) {
        words.collection.save(JSON.parse(req.requestBody));
        res.responseCode = actions.HTTP_OK;
        res.contentType = "application/json; charset=utf-8";
        res.body = JSON.stringify({ "msg": "stored" });
    }).nickname("new")
  .summary("Adds new Word")
  .notes("This function simply adds the new Word");

    controller.start(applicationContext);
}());