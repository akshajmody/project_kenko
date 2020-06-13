const express = require('express');

const { getCarbosData, getFatsData, getProbioticsData, getProteinsData, getSeasoningsData, getSupplementsData, getVegetablesData, getFruitsData } = require('./model.js');

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

app.get('/meal/:cuisine/carbo', (req, res) => {
  getCarbosData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/fat', (req, res) => {
  getFatsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/fruit', (req, res) => {
  getFruitsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/probiotic', (req, res) => {
  getProbioticsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/protein', (req, res) => {
  getProteinsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/seasoning', (req, res) => {
  getSeasoningsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/vegetable', (req, res) => {
  getVegetablesData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/meal/:cuisine/supplement', (req, res) => {
  getSupplementsData(req.params.cuisine, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});