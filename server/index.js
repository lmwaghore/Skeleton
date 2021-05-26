const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.send('nice');
});

app.listen(port, () => {
  console.log(`Web server running on: http://localhost:${port}`);
});
