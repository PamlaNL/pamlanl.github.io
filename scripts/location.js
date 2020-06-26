// © 2020 PamlaNL
// All rights reserved.
// Alle rechten voorbehouden.

var pageOne = document.getElementById("pageOne")
var pageTwo = document.getElementById("pageTwo")
var punten = document.getElementById("punten");
var vragen = document.getElementById("vragen");
var vraag1popup;
var vraag2popup;
var vraag3popup;
var vraag4popup;
var vraag5popup;
var vraag6popup;
var vraag7popup;
var vraag8popup;
var vraag9popup;
var vraag10popup;
var vraag11popup;
var vraag12popup;
var vraag13popup;
var vraag14popup;
var vraag15popup;
var vraag16popup;
var vraag17popup;
var vraag18popup;
var mymap;

function previousPage() {
	pageOne.style.visibility = 'visible';
	pageTwo.style.visibility = 'hidden';
}
function nextPage() {
	pageOne.style.visibility = 'hidden';
	pageTwo.style.visibility = 'visible';
}
function startGame() {
	pageOne.remove();
	pageTwo.remove();
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
	
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		}
	}
	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			alert("Toestemming geweigerd, laad de pagina opnieuw en probeer opnieuw.")
			break;
			case error.POSITION_UNAVAILABLE:
			alert("Positie onbekend, wees er zeker van dat u GPS aan hebt.")
			break;
			case error.UNKNOWN_ERROR:
			alert("Een onbekend fout heeft opgetreden. Laad de pagina opnieuw en probeer opnieuw.")
			break;
		}
	}
	
	function showPosition(position) {
		var mapid = document.getElementById("mapid")
		mapid.style.height = "95%";
		mapid.style.width = "100%";
		mymap = L.map('mapid').setView([50.958748, 5.840622], 16);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
		}).addTo(mymap);
		if (navigator.appVersion.includes("Windows", "Macintosh")) {
			mapid.style.marginTop = "1%";
		}
		
		vraag1popup = L.marker([50.959883, 5.841911], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag1()'>Vraag 1 beantwoorden.</button>")
		
		vraag2popup = L.marker([50.959421, 5.841656], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag2()'>Vraag 2 beantwoorden.</button>")
		
		vraag3popup = L.marker([50.958880, 5.841696], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag3()'>Vraag 3 beantwoorden.</button>")
		
		vraag4popup = L.marker([50.958475, 5.841760], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag4()'>Vraag 4 beantwoorden.</button>")
		
		vraag5popup = L.marker([50.958367, 5.841266], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag5()'>Vraag 5 beantwoorden.</button>")
		
		vraag6popup = L.marker([50.958718, 5.840719], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag6()'>Vraag 6 beantwoorden.</button>")
		
		vraag7popup = L.marker([50.958261, 5.840544], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag7()'>Vraag 7 beantwoorden.</button>")
		
		vraag8popup = L.marker([50.957660, 5.840265], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag8()'>Vraag 8 beantwoorden.</button>")
		
		vraag9popup = L.marker([50.957106, 5.840008], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag9()'>Vraag 9 beantwoorden.</button>")
		
		vraag10popup = L.marker([50.956559, 5.839954], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag10()'>Vraag 10 beantwoorden.</button>")
		
		vraag11popup = L.marker([50.956532, 5.839621], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag11()'>Vraag 11 beantwoorden.</button>")
		
		vraag12popup = L.marker([50.957133, 5.839622], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag12()'>Vraag 12 beantwoorden.</button>")
		
		vraag13popup = L.marker([50.957924, 5.840019], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag13()'>Vraag 13 beantwoorden.</button>")
		
		vraag14popup = L.marker([50.958519, 5.840309], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag14()'>Vraag 14 beantwoorden.</button>")
		
		vraag15popup = L.marker([50.958837, 5.840481], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag15()'>Vraag 15 beantwoorden.</button>")
		
		vraag16popup = L.marker([50.959175, 5.840642], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag16()'>Vraag 16 beantwoorden.</button>")
		
		vraag17popup = L.marker([50.959662, 5.840953], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag17()'>Vraag 17 beantwoorden.</button>")
		
		vraag18popup = L.marker([50.960067, 5.841329], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("<button type='button' class='popup' onclick='vraag18()'>Vraag 18 beantwoorden.</button>")
		
		L.circle([position.coords.latitude, position.coords.longitude], 20, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("U bevindt zich momenteel hier.")
		
	}
	
	getLocation();

}

function vraag1() {
	var vraag1 = document.getElementById("vraag1");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag1.style.display = "block";
}

function vraag2() {
	var vraag2 = document.getElementById("vraag2");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag2.style.display = "block";
}

function vraag3() {
	var vraag3 = document.getElementById("vraag3");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag3.style.display = "block";
}

function vraag4() {
	var vraag4 = document.getElementById("vraag4");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag4.style.display = "block";
}

function vraag5() {
	var vraag5 = document.getElementById("vraag5");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag5.style.display = "block";
}

function vraag6() {
	var vraag6 = document.getElementById("vraag6");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag6.style.display = "block";
}

function vraag7() {
	var vraag7 = document.getElementById("vraag7");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag7.style.display = "block";
}

function vraag8() {
	var vraag8 = document.getElementById("vraag8");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag8.style.display = "block";
}

function vraag9() {
	var vraag9 = document.getElementById("vraag9");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag9.style.display = "block";
}

function vraag10() {
	var vraag10 = document.getElementById("vraag10");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag10.style.display = "block";
}

function vraag11() {
	var vraag11 = document.getElementById("vraag11");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag11.style.display = "block";
}

function vraag12() {
	var vraag12 = document.getElementById("vraag12");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag12.style.display = "block";
}

function vraag13() {
	var vraag13 = document.getElementById("vraag13");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag13.style.display = "block";
}

function vraag14() {
	var vraag14 = document.getElementById("vraag14");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag14.style.display = "block";
}

function vraag15() {
	var vraag15 = document.getElementById("vraag15");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag15.style.display = "block";
}

function vraag16() {
	var vraag16 = document.getElementById("vraag16");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag16.style.display = "block";
}

function vraag17() {
	var vraag17 = document.getElementById("vraag17");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag17.style.display = "block";
}

function vraag18() {
	var vraag18 = document.getElementById("vraag18");
	var mapid = document.getElementById("mapid");
	mapid.style.visibility = "hidden";
	vraag18.style.display = "block";
}

var i = 0;
var j = 0;

function submit1() {
	var vraag1 = document.getElementById("vraag1");
	var mapid = document.getElementById("mapid");
	var submit1 = document.getElementById("submit1");
	var goed1 = document.getElementById("goed1");
	var fout1 = document.getElementById("fout1");
	if (document.getElementById("2004").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit1.parentNode.removeChild(submit1);
		mymap.removeLayer(vraag1popup)
		goed1.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed1.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag1.style.display = "none";
			mapid.style.visibility = "visible";
		}, 2000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout1.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout1.innerHTML = ""
	}, 3000)
	}
}

function submit2() {
	var vraag2 = document.getElementById("vraag2");
	var mapid = document.getElementById("mapid");
	var submit2 = document.getElementById("submit2");
	var goed2 = document.getElementById("goed2");
	var fout2 = document.getElementById("fout2");
	if (document.getElementById("lammetje").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit2.parentNode.removeChild(submit2);
		mymap.removeLayer(vraag2popup)
		goed2.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed2.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag2.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout2.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout2.innerHTML = ""
	}, 3000)
	}
}

function submit3() {
	var vraag3 = document.getElementById("vraag3");
	var mapid = document.getElementById("mapid");
	var submit3 = document.getElementById("submit3");
	var goed3 = document.getElementById("goed3");
	var fout3 = document.getElementById("fout3");
	if (document.getElementById("groot").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit3.parentNode.removeChild(submit3);
		mymap.removeLayer(vraag3popup)
		goed3.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed3.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag3.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout3.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout3.innerHTML = ""
	}, 3000)
	}
}

function submit4() {
	var vraag4 = document.getElementById("vraag4");
	var mapid = document.getElementById("mapid");
	var submit4 = document.getElementById("submit4");
	var goed4 = document.getElementById("goed4");
	var fout4 = document.getElementById("fout4");
	if (document.getElementById("vlinder").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit4.parentNode.removeChild(submit4);
		mymap.removeLayer(vraag4popup)
		goed4.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed4.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag4.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout4.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout4.innerHTML = ""
	}, 3000)
	}
}

function submit5() {
	var vraag5 = document.getElementById("vraag5");
	var mapid = document.getElementById("mapid");
	var submit5 = document.getElementById("submit5");
	var goed5 = document.getElementById("goed5");
	var fout5 = document.getElementById("fout5");
	if (document.getElementById("haan").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit5.parentNode.removeChild(submit5);
		mymap.removeLayer(vraag5popup)
		goed5.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed5.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag5.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout5.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout5.innerHTML = ""
	}, 3000)
	}
}

function submit6() {
	var vraag6 = document.getElementById("vraag6");
	var mapid = document.getElementById("mapid");
	var submit6 = document.getElementById("submit6");
	var goed6 = document.getElementById("goed6");
	var fout6 = document.getElementById("fout6");
	if (document.getElementById("kikkerdril").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit6.parentNode.removeChild(submit6);
		mymap.removeLayer(vraag6popup)
		goed6.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed6.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag6.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout6.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout6.innerHTML = ""
	}, 3000)
	}
}

function submit7() {
	var vraag7 = document.getElementById("vraag7");
	var mapid = document.getElementById("mapid");
	var submit7 = document.getElementById("submit7");
	var goed7 = document.getElementById("goed7");
	var fout7 = document.getElementById("fout7");
	if (document.getElementById("lieveheersbeestje").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit7.parentNode.removeChild(submit7);
		mymap.removeLayer(vraag7popup)
		goed7.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed7.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag7.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout7.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout7.innerHTML = ""
	}, 3000)
	}
}

function submit8() {
	var vraag8 = document.getElementById("vraag8");
	var mapid = document.getElementById("mapid");
	var submit8 = document.getElementById("submit8");
	var goed8 = document.getElementById("goed8");
	var fout8 = document.getElementById("fout8");
	if (document.getElementById("nectar").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit8.parentNode.removeChild(submit8);
		mymap.removeLayer(vraag8popup)
		goed8.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed8.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag8.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout8.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout8.innerHTML = ""
	}, 3000)
	}
}

function submit9() {
	var vraag9 = document.getElementById("vraag9");
	var mapid = document.getElementById("mapid");
	var submit9 = document.getElementById("submit9");
	var goed9 = document.getElementById("goed9");
	var fout9 = document.getElementById("fout9");
	if (document.getElementById("kitten").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit9.parentNode.removeChild(submit9);
		mymap.removeLayer(vraag9popup)
		goed9.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed9.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag9.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout9.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout9.innerHTML = ""
	}, 3000)
	}
}

function submit10() {
	var vraag10 = document.getElementById("vraag10");
	var mapid = document.getElementById("mapid");
	var submit10 = document.getElementById("submit10");
	var goed10 = document.getElementById("goed10");
	var fout10 = document.getElementById("fout10");
	if (document.getElementById("4okt").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit10.parentNode.removeChild(submit10);
		mymap.removeLayer(vraag10popup)
		goed10.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed10.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag10.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout10.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout10.innerHTML = ""
	}, 3000)
	}
}

function submit11() {
	var vraag11 = document.getElementById("vraag11");
	var mapid = document.getElementById("mapid");
	var submit11 = document.getElementById("submit11");
	var goed11 = document.getElementById("goed11");
	var fout11 = document.getElementById("fout11");
	if (document.getElementById("langer").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit11.parentNode.removeChild(submit11);
		mymap.removeLayer(vraag11popup)
		goed11.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed11.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag11.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout11.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout11.innerHTML = ""
	}, 3000)
	}
}

function submit12() {
	var vraag12 = document.getElementById("vraag12");
	var mapid = document.getElementById("mapid");
	var submit12 = document.getElementById("submit12");
	var goed12 = document.getElementById("goed12");
	var fout12 = document.getElementById("fout12");
	if (document.getElementById("bruin").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit12.parentNode.removeChild(submit12);
		mymap.removeLayer(vraag12popup)
		goed12.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed12.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag12.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout12.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout12.innerHTML = ""
	}, 3000)
	}
}

function submit13() {
	var vraag13 = document.getElementById("vraag13");
	var mapid = document.getElementById("mapid");
	var submit13 = document.getElementById("submit13");
	var goed13 = document.getElementById("goed13");
	var fout13 = document.getElementById("fout13");
	if (document.getElementById("tegen").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit13.parentNode.removeChild(submit13);
		mymap.removeLayer(vraag13popup)
		goed13.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed13.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag13.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout13.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout13.innerHTML = ""
	}, 3000)
	}
}

function submit14() {
	var vraag14 = document.getElementById("vraag14");
	var mapid = document.getElementById("mapid");
	var submit14 = document.getElementById("submit14");
	var goed14 = document.getElementById("goed14");
	var fout14 = document.getElementById("fout14");
	if (document.getElementById("beuk").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit14.parentNode.removeChild(submit14);
		mymap.removeLayer(vraag14popup)
		goed14.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed14.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag14.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout14.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout14.innerHTML = ""
	}, 3000)
	}
}

function submit15() {
	var vraag15 = document.getElementById("vraag15");
	var mapid = document.getElementById("mapid");
	var submit15 = document.getElementById("submit15");
	var goed15 = document.getElementById("goed15");
	var fout15 = document.getElementById("fout15");
	if (document.getElementById("zoet").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit15.parentNode.removeChild(submit15);
		mymap.removeLayer(vraag15popup)
		goed15.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed15.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag15.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout15.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout15.innerHTML = ""
	}, 3000)
	}
}

function submit16() {
	var vraag16 = document.getElementById("vraag16");
	var mapid = document.getElementById("mapid");
	var submit16 = document.getElementById("submit16");
	var goed16 = document.getElementById("goed16");
	var fout16 = document.getElementById("fout16");
	if (document.getElementById("3").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit16.parentNode.removeChild(submit16);
		mymap.removeLayer(vraag16popup)
		goed16.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed16.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag16.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout16.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout16.innerHTML = ""
	}, 3000)
	}
}

function submit17() {
	var vraag17 = document.getElementById("vraag17");
	var mapid = document.getElementById("mapid");
	var submit17 = document.getElementById("submit17");
	var goed17 = document.getElementById("goed17");
	var fout17 = document.getElementById("fout17");
	if (document.getElementById("ja").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit17.parentNode.removeChild(submit17);
		mymap.removeLayer(vraag17popup)
		goed17.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed17.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag17.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout17.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout17.innerHTML = ""
	}, 3000)
	}
}

function submit18() {
	var vraag18 = document.getElementById("vraag18");
	var mapid = document.getElementById("mapid");
	var submit18 = document.getElementById("submit18");
	var goed18 = document.getElementById("goed18");
	var fout18 = document.getElementById("fout18");
	if (document.getElementById("maas").checked) {
		i = i + 100
		j = j + 1
		punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
		vragen.innerHTML = "Totaal beantwoorde vragen: " + j + "/18"
		submit18.parentNode.removeChild(submit18);
		mymap.removeLayer(vraag18popup)
		goed18.innerHTML = "U hebt het juiste antwoord gekozen, u mag door naar de volgende vraag!"
		setTimeout(() => {
			goed18.innerHTML = ""
		}, 3000)
		setTimeout(() => {
			vraag18.style.display = "none";
			mapid.style.visibility = "visible";
		}, 3000)
	}
	else {
	i = i - 50
	punten.innerHTML = "Totaal behaalde punten: " + i + "/1800"
	fout18.innerHTML = "Dit is het foute antwoord, probeer opnieuw!"
	setTimeout(() => {
		fout18.innerHTML = ""
	}, 3000)
	}
}