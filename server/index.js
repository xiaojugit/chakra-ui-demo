const path = require('path');
const express = require('express');
const app = express();
const port = 8001;

app.use(express.static('build'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
