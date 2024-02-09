const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

//middleware
app.use((req, res, next) => {
console.log('new request made:');
console.log('host: ', req.hostname);
console.log('path: ', req.path);
console.log('method: ', req.method);
next();
});

app.use((req, res, next) => {
console.log('in the next middleware');
next();
});


app.get('/', (req, res) => {
  //res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  //res.send('<p>about page</p>');
   res.sendFile('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
});