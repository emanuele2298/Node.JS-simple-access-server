var fs = require('fs');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('doc'));
var x = 0;
var jsonobj = fs.readFileSync('dati.json');
var jaa = JSON.parse(jsonobj);
app.get('/', function(req, res){
res.sendFile(__dirname + "/" + "index.html");
}
)
app.get('/process_get', function(req, res){
jaa.user[x] = req.query.user;
jaa.pw[x] = req.query.pw;
console.log("Username: ",jaa.user[x]);
console.log("Password: ", jaa.pw[x]);
fs.writeFileSync("dati.json", JSON.stringify(jaa));
for (var i = 0; i < x; i++){
if(jaa.user[x] == jaa.user[i] && jaa.pw[x] == jaa.pw[i]){
res.sendFile(__dirname + "/doc/log.html");
}
else{
res.send('Salve ' + jaa.user[x]);
}
}
x = x + 1;
}
)
app.listen(app.get('port'));
