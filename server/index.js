const session = require('smartux-connect');
session.transform.mantis = session.loadTransform('mantis');
require('./client');
require('./transform/mantis/login');
require('./transform/mantis/issuelist');
session.start();