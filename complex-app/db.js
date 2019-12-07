const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')




mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  try{
    module.exports= client    
  }  catch(e){
    console.log("erro" +e)
  }
    const app = require('./app')
    app.listen(process.env.PORT)
  })