const express = require('express');
const router = express.Router();


const USER_DOSE_NOT_EXISTS = "user dose not exists";

router.get('/list', (req, res, next) => {
  res.json(['kobe', 'james', 'jom']);
});

router.get('/:id', (req, res, next) => {
  const exists = false;
  if (exists) {
    res.json(`${req.params.id}的详细信息`);
  } else {
    next(new Error(USER_DOSE_NOT_EXISTS));
  }
});

router.post('/register', (req, res) => {
  console.log(req.body);
  res.json('user register success');
});

// 错误处理
router.use((error, req, res, next) => {
  let status = 404;
  let message = 'NOT FOUNT';
  switch (error.message) {
    case USER_DOSE_NOT_EXISTS:
      message = 'user dose not exists~';
      break;
  }
  
  res.status(status).json({
    code: status,
    message
  });
});


module.exports = router;