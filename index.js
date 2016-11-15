var express = require('express')
var jade = require('jade')
var multer = require('multer')

var app = express()
var upload = multer({dest: "uploads/"})

app.post('/upload', upload.single('upload'), function(req,res){
  //.single('upload') is referencing the form field called upload
  res.end(JSON.stringify({size: req.file.size}))
})

app.get("/", function(req, res){
  app.set('views', "views")
  app.set('view engine', 'jade')
  res.render('main')
})

app.listen(process.env.PORT || 3000)
