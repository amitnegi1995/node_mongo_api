const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mongo_app';

MongoClient.connect(url,function(err,db)
 {
    if(err)
    {
      return console.log('error');
    }
    console.log('connected to mongo ');

    db.collection('Users').insertOne(
      {
        'name':'amit negi',
        'age':18,
        'location':'Delhi'
      },function(err,result)
      {
        if(err)
         return console.log('unable to insert into database');

        console.log(JSON.stringify(result.ops,undefined,2));
      })
    db.close();
 }
);
