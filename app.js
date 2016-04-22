var fs = require('fs');
var express = require('express');
var app = express();
var x = 0;
var jsonobj = fs.readFileSync('dati.json');
var jaa = JSON.parse(jsonobj);
app.get('/', function(req, res){
res.sendFile(__dirname + "/" + "index.html");
}
)
app.get('/process_get', function(req, res){
jaa.first_name[x] = req.query.first_name;
jaa.last_name[x] = req.query.last_name;
console.log("Nome: ",jaa.first_name[x]);
console.log("Cognome: ", jaa.last_name[x]);
fs.writeFileSync("dati.json", JSON.stringify(jaa));
if(jaa.first_name[x] == "Emanuele" && jaa.last_name[x] == "Graziosi"){
res.sendFile(__dirname + "log.html");
}
else{
res.send('Salve ' + jaa.first_name[x] + " " + jaa.last_name[x]);
}
x = x + 1;
}
)
