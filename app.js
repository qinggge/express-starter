const express = require('express');
const app = express();
const port = 4000;

app.get('/', (request, response) => {
  response.send('你好啊啊！');
});

app.post('/xxx', (request, response, next) => {

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
