
var _category ='';
var _cardList = '';
var _index = 0;
var _front = false;

function init() {
	_category = parseUrlCategoryParameter();
	startCategory();
}


//const main = Promise.resolve();
//manage your initializtion here
/*const getData = () => {
	return new Promise((resolve) => {
		fetch(url)
			.then((data) => { return data.json(); })
			.then((myJson) => {
				console.log(JSON.stringify(myJson));
				//ASSIGN THE DATA HERE GLOBALLY
				mylist = myJson;
				resolve(environment);// where is response code and why not resolve(response)
			})
			.catch((error) => {
				console.log("An error occurred: ", error.message);
			});
	});
};
*/

function parseUrlCategoryParameter() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var c = url.searchParams.get("category");
	return c;
}

function startCategory() {
	_index = -1;
	searchAPI(_category).then(function(response){
		_cardList = response;
	}).then(function(response){
		loadCard();
	});
}

function searchAPI(category) {
	var baseURL= "http://10.0.140.110:54185";
	var apiURL = baseURL + "/api/Flashcard/Search?CategoryName=" + category;
	return fetch(apiURL).then(function(response){
		return response.json();
	});
}

function loadCard () {
	//load picture, english word, sound file, and mien word
	var image = '';
	var sound = '';
	var mienWord = '';
	var englishWord = '';
}

function showCard() {
	if(_front){	//if front is showing, show the back
		document.getElementById('cardTop').innerHTML = "mien side/back";
		index++;
	}
	else{ //else show the front
		document.getElementById('cardBottom').innerHTML = "english side/front";
		index++;
	}
}

(() => { window.onload = init(); })();