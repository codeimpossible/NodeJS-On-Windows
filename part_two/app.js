    var express     = require('express'),
        jade        = require('jade'),
        app         = express.createServer(),
        config      = {
                          routes:{
                              index: "/"
                          }
                      };

    app.set('views', __dirname + '/views');

    app.listen(8000);

    app.configure( function() {
      console.log('Express server listening on port %d in %s mode',
        app.address().port, app.settings.env);
    });


    app.get(config.routes.index, function(req, res) {
      res.render('index.jade', {
        title: 'Hello World!',
        layout: false
      });
    });
