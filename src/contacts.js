var moment = require('moment');


module.exports = function (xero) {
  
  xero.Contacts = {
    
    
    all: function (callback) {
      xero.get('/Contacts', function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Contacts);
      });
    },
    
    
    find: function (ContactID, callback) {
      xero.get('/Contacts/' + ContactID, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Contacts[0]);
      });
    },
    
    
    create: function (params, callback) {
      
      xero.post('/Contacts', { Contact: params }, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Contacts[0]);
      });
    },
    
    
    update: function (ContactID, params, callback) {
      xero.post('/Contacts/' + ContactID, { Contact: params }, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Contacts[0]);
      })
    },
    
    
    delete: function (ContactID, callback) {
      var params = {
        Status: xero.Contacts.ARCHIVED
      };
      
      xero.post('/Contacts/' + ContactID, { Contact: params }, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Contacts[0]);
      });
    }
  };
  
};