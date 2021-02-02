const defaultConf = require('./default.conf');
const QAConf = require('./qa.conf');


const dockerDefaultConf = require('./docker-default.conf');
const dockerQAConf = require('./docker-qa.conf');


const locally = {
  default: defaultConf,
  QA: QAConf,
  
};

const docker = {
  default: dockerDefaultConf,
  QA: dockerQAConf,
 
};

module.exports = {
  locally,
  docker
};