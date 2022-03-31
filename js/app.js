document.getElementById('actualiser').addEventListener("click", function(e){
	e.preventDefault();
	window.location.reload();
});

//var heure = 
var date = new Date();
var annee = date.getFullYear();
var mois = date.getMonth()+1;
var jour = date.getUTCDate();
//alert(annee+'-'+mois+'-'+jour);
var requette = new XMLHttpRequest();
var date = new Date();
var annee = date.getFullYear();
var mois = date.getMonth()+1;
var jour = date.getUTCDate();
var dte = annee+"-"+"0"+mois+"-"+(jour<5 ? jour : jour-5);
var dte2 = annee+"-"+"0"+mois+"-"+jour;
requette.open("POST", "https://apiv2.allsportsapi.com/football/?met=Fixtures&leagueKey=1&APIkey=0694261c7010be47dfc5ab66caa4e84c8ee3cfa4be3bb92dcc15c12fa9e33129&from="+dte2+"&to="+dte2);
requette.send(null);

requette.onreadystatechange = function(){
	//alert(requette.status);
	if(requette.readyState == 4  && requette.status == 200){
		//alert(requette.responseText)
		//console.log(requette.responseText);
		var donnees = JSON.parse(requette.responseText.trim());
		var list = donnees.result;
		console.log(donnees)
		for(var i=0; i<list.length; i++){
			if(list[i]["league_key"]>20 && list[i]["league_key"]<28){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-7").appendChild(div);
		}else if(list[i]["league_key"]==3){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-5").appendChild(div);
		}else if(list[i]["league_key"]==29){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-6").appendChild(div);
		}else if(list[i]["league_key"]==168){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-1").appendChild(div);
		}else if(list[i]["league_key"]==302){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-2").appendChild(div);
		}else if(list[i]["league_key"]==99){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-3").appendChild(div);
		}else if(list[i]["league_key"]==304){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" <br/>status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-4").appendChild(div);
		}else if(list[i]["league_key"]==175){
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-6").appendChild(div);
		}else{
			var div = document.createElement("div");
			div.style.backgroundColor="#313640";
			div.style.margin = "2px";
			// document.querySelector(".contenu-7").textContent 
			div.innerHTML = list[i]["event_home_team"]+" vs "+ list[i]["event_away_team"]+" "+list[i]["event_final_result"]+" heure:"+list[i]["event_time"]+" status:"+list[i]["event_status"]+"<br/><br/>";
			//document.getElementById('content').append(div);
			document.querySelector(".contenu-8").appendChild(div);

		}
		}
		//console.log(donnees);
	}
}
requette.onerror = function(e){
	//alert(e);
}