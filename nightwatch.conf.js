const _ = require('lodash');
const dotenv = require('dotenv');
const environmentEngine = require('./environments/environment-configs');

dotenv.config();

const { DOCKER_ENGINE } = process.env;
const TEST_ENV = process.env.TEST_ENV ? process.env.TEST_ENV : 'QA';

const engine = DOCKER_ENGINE ? 'docker' : 'locally';
const environment = environmentEngine[engine];

const config = _.merge(environment.default, environment[TEST_ENV]);

module.exports = config;