var PORT = 3030; 

var express = require('express');
var s_whiteboard = require("./s_whiteboard.js");
var app = express();
app.use(express.static(__dirname + '/public'));
var server = require('http').Server(app);
server.listen(PORT);
var io = require('socket.io')(server);
console.log("Webserver & socketserver running on port:"+PORT);

app.get('/loadwhiteboard', function(req, res) {
    var wid = req["query"]["wid"];
    var ret = s_whiteboard.loadStoredData(wid);
    res.send(ret);
    res.end();
});


var allUsers = {};
io.on('connection', function(socket){

    socket.on('disconnect', function () {
        delete allUsers[socket.id];
        socket.broadcast.emit('refreshUserBadges', null);
    });

    socket.on('drawToWhiteboard', function(content) {
        content = escapeAllContentStrings(content);
        sendToAllUsersOfWhiteboard(content["wid"], socket.id, content)
        s_whiteboard.handleEventsAndData(content); //save whiteboardchanges on the server
    });

    socket.on('joinWhiteboard', function(wid) {
        allUsers[socket.id] = {
            "socket" : socket,
            "wid" : wid
        };
    });
});

function sendToAllUsersOfWhiteboard(wid, ownSocketId, content) {
    for(var i in allUsers) {
        if(allUsers[i]["wid"]===wid && allUsers[i]["socket"].id !== ownSocketId) {
            allUsers[i]["socket"].emit('drawToWhiteboard', content);
        }
    }
}

//Prevent cross site scripting
function escapeAllContentStrings(content, cnt) {
    if(!cnt)
        cnt = 0;

    if(typeof(content)=="string") {
        return content.replace(/<\/?[^>]+(>|$)/g, "");
    }
    for(var i in content) {
        if(typeof(content[i])=="string") {
            content[i] = content[i].replace(/<\/?[^>]+(>|$)/g, "");
        } if(typeof(content[i])=="object" && cnt < 10) {
            content[i] = escapeAllContentStrings(content[i], ++cnt);
        }
    }
    return content;
}