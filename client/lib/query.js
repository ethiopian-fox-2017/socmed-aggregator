'use strict'


const AjaxWrapper = {
  request : function(req){
    let oReq = new XMLHttpRequest();
    oReq.open(req.type, req.url, true);
    oReq.onload = function() {
      if (oReq.status >= 200 && oReq.status < 400) {
        // Success!
        var data = JSON.parse(oReq.responseText);
        req.success(data);
      } else {
        // We reached our target server, but it returned an error
        req.fail();
      }
    };

  oReq.onerror = function() {
    // There was a connection error of some sort
    req.fail();
  };

  oReq.send();

},
  post : function(url, newTweet) {
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(newTweet);
  }
};
