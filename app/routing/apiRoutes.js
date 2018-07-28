var friendsData = require('../data/friends');
var newFriend = [];
var lowestScoreDiff = 1000;
var foundFriend;
module.exports = function(app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function (req, res) {
    newFriend = req.body;
    friendsData.push(req.body);
    checkScores();
    console.log("NEW FRIEND: ")
    console.log(foundFriend);
  })
}

function checkScores() {
  foundFriend = friendsData[0];
  for (var i = 0; i < friendsData.length - 1; i++) {
   
    var differenceNum = 0;
    for (var j = 0; j < 10; j++) {
      differenceNum += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])));
    }
    console.log(friendsData[i].name);
    console.log(differenceNum);
    if (differenceNum < lowestScoreDiff) {
      lowestScoreDiff = differenceNum;
      foundFriend = friendsData[i];
    }    
  }
  return;
}