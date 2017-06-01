windows 系统下 package.json 下 script中替换成以下

"start": "set NODE_ENV=dev && webpack-dev-server --progress --colors",
"mock": "node --harmony ./mockrver.js",
"build": "rd/s/q build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors"