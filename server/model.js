const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.PG_USER || 'akshajmody',
  password: process.env.PG_PASSWORD || '',
  host: process.env.PG_HOST || 'localhost',
  database: 'kenko',
});

pool.connect((err) => {
  if (err) return console.error(err);
  return console.log('CONNECTED TO POSTGRES AT: ', process.env.PG_HOST || 'localhost');
});

const getCarbosData = (cuisine, callback) => {
  const query = `SELECT * FROM carbos WHERE cuisine='${cuisine}' ORDER BY RANDOM() LIMIT 1`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getFatsData = (cuisine, callback) => {
  const query = `SELECT * FROM fats WHERE cuisine='${cuisine}' ORDER BY RANDOM() LIMIT 1`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getProbioticsData = (cuisine, callback) => {
  const query = `SELECT * FROM probiotics WHERE cuisine='${cuisine}' ORDER BY RANDOM() LIMIT 1`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getProteinsData = (cuisine, callback) => {
  const query = `SELECT * FROM proteins WHERE cuisine='${cuisine}' ORDER BY RANDOM() LIMIT 1`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};


const getSeasoningsData = (cuisine, callback) => {
  const query = `SELECT * FROM seasonings WHERE cuisine='${cuisine}' ORDER BY RANDOM() LIMIT 4`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getSupplementsData = (cuisine, callback) => {
  const query = `SELECT * FROM supplements`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};


const getVegetablesData = (cuisine, callback) => {
  const query = `SELECT * FROM vegetables ORDER BY RANDOM() LIMIT 3`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getFruitsData = (cuisine, callback) => {
  const query = `SELECT * FROM fruits ORDER BY RANDOM() LIMIT 2`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};


module.exports = {
  getCarbosData,
  getFruitsData,
  getFatsData,
  getProbioticsData,
  getProteinsData,
  getSeasoningsData,
  getSupplementsData,
  getVegetablesData,
};