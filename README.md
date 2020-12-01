### 安装依赖：
npm install

### 启动项目:
MacOS、Linux：DEBUG=myapp:* npm start
Win：set DEBUG=myapp:* & npm start
启动项目后就可以通过接口拿数据了

### 接口路径：
http://localhost:3004   (可在 bin ==> www 文件内修改)

### 例子：
$.ajax({
   type: "GET",
   url: "http://localhost:3004/birds/class",
   success: function (res) {
      console.log(res);
   },
   error: function (err) {
      console.log(err);
   },
});

### 目录介绍:
bin     对外
public  资源、公共文件
routes  路由，也就是对外的接口路径
views   模块
web     前端部分的东西
app.js  全局配置
