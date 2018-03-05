const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mongo_app';

MongoClient.connect(url,function(err,db)
 {
    if(err)
    {
      return console.log('error');
    }
    console.log('connected to mongo ');

    // db.collection('Users').find().toArray().then(
    // function(docs)
    // {
    //   console.log('Users : ');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },
    // function(err)
    // {
    //   console.log('unable to fetch');
    // }
    // )
    db.collection('Users').find({'name':'amit '}).toArray().then(
      function(docs)
      {
        console.log(JSON.stringify(docs,undefined,2));
      },
      function(err)
      {
        console.log('unable to fetch');
      }

    );
    // db.close();
 }
);
