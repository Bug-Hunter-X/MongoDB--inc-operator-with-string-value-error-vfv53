```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":1},{$inc:{ "counter": 10 }})
```