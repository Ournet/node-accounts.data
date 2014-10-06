var validator = require('../validation'),
  assert = require('assert'),
  slug = require('slug'),
  crypto = require('crypto');

function get(data) {
  if (data && data.get)
    return data.get();
  return null;
}

module.exports = function(db, app, options) {

  //apps API
  return {
    // get app by key
    byKey: function(key) {
      return db.App.find({
        key: key
      }).then(get);
    }
  };
}