
var path = require("path");
var userData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(userData);
    });

    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        for(var i = 0; i < userInput.score.length; i++) {
            userInput.score[i] = parsent(userInput.score[i]);
            console.log(userInput[i]);
        }
        friendMatch = 0;
        difference = 100;

        for(var i = 0; i < userData.length; i++) {
            var totalDiff = 0;
            for(var j = 0; j < userData[i].score.length; j++) {
                userDiff = Math.abs(userInput[i].score[j] - userData.score[j]);
                totalDiff += userDiff;
            }
        }

        userData.push(userInput);

        res.json(userData[0]);
        // console.log(userInput);

        // // var userAnswer = userInput.scores;
        // console.log(userInput);

        // var nameMatch = "";
        // var imageMatch = "";
        // var totalDiff = 100;

        // for(var i = 0; i < userInput.score.length; i++) {
        //     userInput.score[i] = parent(userInput.score[i]);
        //     console.log(userInput[i]);
            
        //     var differentScore = 0;

        //     for(var j =0; j < userData[i].userAnswer.length; j++) {
        //         differentScore += Math.abs(userAnswer[j] - userData[i].score[j]);
        //     }
        //     console.log(differentScore);

        //     if(differentScore < totalDiff) {
        //         totalDiff = differentScore;
        //         nameMatch = userAnswer[i].name;
        //         imageMatch =userAnswer[i].photo;
        //     }
        // }

        // userData.push(userAnswer);
        // res.json({
        //     nameMatch: nameMatch,
        //     imageMatch: imageMatch
        // });
    });
};


