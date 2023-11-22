const router = require('express').Router();
const { home, uploads } = require('../controller/controller');
const { ensureAuthenticated } = require('../middleware/authMiddleWare');
const { store } = require('../middleware/multer');

// routes
router.get('/', ensureAuthenticated, home);
router.post('/uploadmultiple', ensureAuthenticated, store.array('images', 12), uploads);

module.exports = router;
