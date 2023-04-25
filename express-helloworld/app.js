var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! mas pruebas\n');
});
app.get('/Alex', function(req, res) {
  res.send('Hello Fran!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

