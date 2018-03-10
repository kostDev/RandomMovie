let fs = require('fs');
const path = './public/json/list.json';

let getJSON = function() {
	return JSON.parse(fs.readFileSync(path,'utf8'));
}

let writeInJSON = function(data) {
	fs.writeFile(path, JSON.stringify(data), function (err) {
	  if (err) throw err;
	});
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.generateMove = function() {
	let obj = getJSON();
	while(true){
		let value = getRandomInt(0, obj.films.length);
		if(obj.films.every(arr => arr[1] == true)){
			return "Add films!";
		}
		if(!obj.films[value][1]){
			obj.films[value][1] = true;
			writeInJSON(obj);
			return obj.films[value][0];
		}
	}
}

exports.addFilm = function(move) {
	let obj = getJSON();
	obj.films.push([move, false]);
	writeInJSON(obj);
}

exports.getListOfMoves = function() {
	return getJSON();
}

exports.change = function(move) {
	let obj = getJSON();
	obj.films.map((arr, i) => {
		if(arr[0] == move){
			obj.films[i][1] = !obj.films[i][1];
		}
	})
	writeInJSON(obj);
}