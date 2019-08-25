// Import and connect all routes to router here to export to ../server.js
const userRoutes = require('./userRoutes');
const imageRoutes = require('./imageRouter');
const router = require('express').Router();

router.use('/users', userRoutes);

const imageRoutes = require('./imageRouter');
router.use('/users', imageRoutes);

module.exports = router;
