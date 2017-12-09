var express = require("express"),
    request = require("request");
    
var app = express();
    
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.redirect("/competitions");
});

app.get("/competitions", function(req, res){
    var restRequest = {
        headers: { 'X-Auth-Token': '***************' },
        url: 'http://api.football-data.org/v1/competitions?timeFrame=n1',
        dataType: 'json',
        type: 'GET'
    }
    request(restRequest, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("competitions", {data:data})
        }
    });
});

app.get("/teams", function(req, res){
    var restRequest = {
        headers: { 'X-Auth-Token': '***************' },
        url: 'http://api.football-data.org/v1/teams?timeFrame=n1',
        dataType: 'json',
        type: 'GET'
    }
    request(restRequest, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("teams", {data:data})
        }
    });
});

app.get("/fixtures", function(req, res){
    var restRequest = {
        headers: { 'X-Auth-Token': '687e3db98f674985b1a381277cee6caf' },
        url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
        dataType: 'json',
        type: 'GET'
    }
    request(restRequest, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("fixtures", {data:data})
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Soccer Scores app has started!!!");
});
