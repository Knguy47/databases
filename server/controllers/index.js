var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
      //   models.users.get(function(username) {'

      // });
      
        var finalResults = results.map(function(message){
          return {message: message.message, roomname: message.roomname, username: message.username};
        });

        
        res.json({results: finalResults});
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];

      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      console.log(params);
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
};
