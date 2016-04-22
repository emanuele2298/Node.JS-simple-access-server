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
console.log("Nome: ",jaa.user[x]);
console.log("Cognome: ", jaa.pw[x]);
fs.writeFileSync("dati.json", JSON.stringify(jaa));
if(jaa.user[x] == "Emanuele" && jaa.pw[x] == "Graziosi"){
res.sendFile(__dirname + "/doc/log.html");
}
else{
res.send('Salve ' + jaa.user[x]);
}
x = x + 1;
}
)
app.listen(app.get('port'));
