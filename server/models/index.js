var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      //messages id, message, roomname, username
      var queryString = 'select messages.id, messages.message, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.connection.query(queryString, function (err, results) {
        callback(results);
      });
    },

    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var queryString = 'insert into messages(message, roomname, userid) \
                      value (?, ?, (select id from users where username = ? limit 1))';
      //query the message to the correct row/tables INSERT INTO
      db.connection.query(queryString, params, function(err, results) {
        if(err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * from users';
      db.connection.query(queryString, function (err, results) {
        callback(results);
      });
    },
    post: function (params , callback) {
      var queryString = "INSERT INTO users(username) values (?)";

      db.connection.query(queryString, params, function(err, results){
        callback(results);
      });
    }
  }
};

