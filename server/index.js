const session = require('smartux-connect');
session.transform.mantis = session.loadTransform('mantis');
require('./client');
session.start();