const express = require('express');

const app = express();
const PORT = 3005;
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser')

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});