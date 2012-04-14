var express     = require('express')
    app         = express.createServer(),
    config      = {
                      routes:{
                          index: "/"
                      }
                  };

app.listen(8000);

app.configure( function() {
  console.log('Express server listening on port %d in %s mode',
                  app.address().port, app.settings.env);
});

app.get(config.routes.index, function(req, res) {
    res.send("<h1>Hello World!</h1>")
});
