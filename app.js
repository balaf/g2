var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var exphbs  = require('express3-handlebars');
var gallery = require('./ext/gallery');
var rt = require('thumb-express');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//app.use(express.favicon());
app.use(express.logger('default'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(rt.init(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use(gallery.middleware({static: 'public', directory: '/photos', rootURL: "/work"}));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/work', routes.work);
app.get('/work*', routes.gallery);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
