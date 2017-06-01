window package.json

set：

"scripts": {
    "start": "set NODE_ENV=dev && webpack-dev-server --progress --colors",
    "mock": "node --harmony ./mock/server.js",
    "build": "rd/s/q build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors"
  }
  
  运行报错 手动新建build文件夹
