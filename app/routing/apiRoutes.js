
var path = require("path");
var userData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(userData);
    });

    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        console.log(JSON.stringify(userInput));

        var userAnswer = userInput.scores;
        console.log(userAnswer);

        var nameMatch = "";
        var imageMatch = "";
        var totalDiff = 100;

        for(var i = 0; i < userData.length; i++) {
            console.log(JSON.stringify(userData));
            
            var differentScore = 0;

            for(var j =0; j < userAnswer.length; j++) {
                differentScore += Math.abs(userData[i].scores[j] - userAnswer[j]);
            }
            console.log(differentScore);

            if(differentScore < totalDiff) {
                totalDiff = differentScore;
                nameMatch = userData[i].name;
                imageMatch =userData[i].photo;
            }
        }

        userData.push(userInput);
        res.json({
            nameMatch: nameMatch,
            imageMatch: imageMatch
        });
    });
};


