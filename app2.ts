import express from 'express';

const app = express();
const port = 4000;

app.get('/', function (request, response) {
  response.send('你好');
});


app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
})