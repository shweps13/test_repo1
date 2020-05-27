const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        req.user = { 
          name: decodedToken.name
        }
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'No token provided' });
  }

};

function createUser(user) {
  const queryString = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`

  return pool.query(queryString)
}

function find() {
  return pool.query('SELECT * FROM users');
}

function findBy(parameter, filter) {
  return pool.query(`SELECT * FROM users WHERE ${parameter} = '${filter}'`);
}

function createUser(user) {
  const queryString = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`

  return pool.query(queryString)
}

function find() {
  return pool.query('SELECT * FROM users');
}

function findBy(parameter, filter) {
  return pool.query(`SELECT * FROM users WHERE ${parameter} = '${filter}'`);
}

function createUser(user) {
  const queryString = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`

  return pool.query(queryString)
}

function find() {
  return pool.query('SELECT * FROM users');
}

function findBy(parameter, filter) {
  return pool.query(`SELECT * FROM users WHERE ${parameter} = '${filter}'`);
}