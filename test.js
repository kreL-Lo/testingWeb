const mongoose = require('mongoose');
const models = require('./models/index');
const uri = 'mongodb+srv://krello:test123@testing-fa2hn.mongodb.net/test?retryWrites=true&w=majority';
const http = require('http');
const port = 8000;
const hostname = '127.0.0.1';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function(db,err){
      if(!err)
        console.log(db);
        else
        console.log(err);
  });

var Schema = mongoose.Schema;

async function test1(){
    const Model = models.User;
    const doc = Model.find({}).then(function(err,data){
        console.log(err);
    });
}
test1();
const server = http.createServer(function(req,res){
  
    
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
