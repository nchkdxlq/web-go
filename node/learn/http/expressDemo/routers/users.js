const express = require('express');
const router = express.Router();


router.use('/list', (req, res, next) => {

  res.json(['kobe', 'james', 'jom']);
});

router.use('/:id', (req, res, next) => {

  res.json(`${req.params.id}的详细信息`);
});

module.exports = router;