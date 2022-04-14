const axios = require('axios');
var express = require('express');
let app = express();

const urlencodedParser = express.urlencoded({extended: false});

var ValueEval ='';
var DateEval ='';

async function GetCurse() {
try{
const currentObj = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
let Nominal = 'currentObj.data.Valute.USD.Nominal';
let Value = 'currentObj.data.Valute.USD.Value';
let Date = 'currentObj.headers.date';

NominalEval = eval(Nominal);
ValueEval = eval(Value);
DateEval = eval(Date);
console.log('Данные обновлены');
} catch (error) {
  console.log(error);
}
}
let timerId = setInterval(() => {GetCurse()}, 3600000);// каждый час обновляем курс
GetCurse()
//========================================================
app.set("view engine","ejs");
app.use('/public', express.static('public'));
//========================================================
app.get('/', function(req, res) {

  if(req.query.UpdatTheCourse){
    GetCurse()
  }

res.render('index',{ValueEval: ValueEval,DateEval: DateEval});
});

app.get('/index.ejs', function(req, res) {

res.render('index', {ValueEval:ValueEval,DateEval:DateEval});
});

//========================================================
app.use(function(req, res) {
	res.status(404).send('not found');
});

app.listen(5000, function() {
	console.log('running');
});
//========================================================
