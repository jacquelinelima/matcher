const express = require('express');
const routes = express.Router();

const DeveloperController = require('./controller/Developer');
const LikeController = require('./controller/Like');
const DislikeController = require('./controller/Dislike');

routes.get('/developer', DeveloperController.index);
routes.post('/developer', DeveloperController.store);
routes.post('/developer/:developerId/like', LikeController.store);
routes.post('/developer/:developerId/dislike', DislikeController.store);

module.exports = routes;