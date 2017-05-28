(function() {

  "use strict";
  const express = require('express'),
    app = express();

  app.use(express.static(__dirname + '/www'));

  app.listen(3000);
  console.log("App listening on port 3000");

})();
