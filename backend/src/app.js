const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;