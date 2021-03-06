var querystring = require('querystring');

module.exports = function (xero) {
  
  xero.Payments = {
    all: function (callback) {
      xero.get('/Payments', function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments);
      });
    },
    
    
    find: function (id, callback) {
      xero.get('/Payments/' + id, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments[0]);
      });
    },
    
    
    findparams: function (params, callback) {
      var query = querystring.stringify(params);
      xero.get('/Payments/?' + query, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments);
      });
    },
    
    
    create: function (params, callback) {
      xero.put('/Payments', { Payments: { Payment: params }}, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments[0]);
      });
    }
  }
  
}