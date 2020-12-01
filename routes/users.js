var express = require('express');
var router = express.Router();

// 特定于此路由器的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// 定义主页路由
router.get('/', function(req, res, next) {
  res.json({
    result: {
      name: "tom",
      age: 18,
      sex: true
    },
    state: {
      message: "",
      state: "ok",
      success: true
    }
  });
});

// 定义users路线
router.get('/test', function(req, res, next) {
  // console.log(111111111111);
  // console.log(req, res, next);
  // console.log(22222222222222);
  res.send('respond1 with a resource');
});

module.exports = router;
