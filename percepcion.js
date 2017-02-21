$(document).ready(function(){
	

	



$("#ingresa_serie").click(function(){
  
  var kg= $("#kg").val();
  var reserva= $("#reserva").val();
  var ejercicio= $(".ejercicio").text();
  var ejercicios_tipo_Torso= new Array();
  var ejercicios_tipo_Pierna= new Array();
  ejercicios_tipo_Torso= ["Press Banca", "Jalones Nuca", "Dominadas", "Remo", "Press Francés", "Tricep Polea", "Hombro"];
  ejercicios_tipo_Pierna= ["Sentadilla", "HipThrust", "Peso Muerto", "Zancada", "Cuádriceps", "Femorales", "Gemelos"];
  var tipo_tp;
  
if(window.localStorage){
	alert("si")
}

if($("#menutorsopierna1").text().length>19){
alert("estoy en activacion")

for (var i = 0; i < ejercicios_tipo_Pierna.length; i++) {
	if(ejercicios_tipo_Pierna[i]===ejercicio){
		tipo_tp= "Pierna";
		localStorage.setItem("tipo_tp",tipo_tp);
		localStorage.setItem("ej",ejercicio);
	}
};
for (var i = 0; i < ejercicios_tipo_Torso.length; i++) {
	if(ejercicios_tipo_Torso[i]===ejercicio){
		tipo_tp= "Torso";
		localStorage.setItem("tipo_tp",tipo_tp);
		localStorage.setItem("ej",ejercicio);
	}
};


alert(localStorage.getItem("tipo_tp"))

}

  
  var datos= 
  '<section id="borrar"><table style="" class="tabla_borrar" id="series_activacion" style="color:white;"><th style="padding-left:8vh" >'+kg+'</th><th style="padding-left:30vh;">'+reserva+'</th></table></section>';

$("ul").append(datos);



if($("#menutorsopierna1").text().length<18){
if(typeof series==="undefined"){
	series= new Array();
	series.push(reserva)
}else{
	series.push(reserva)	
}
}


function isArrayLike(o) {
if (o && // o is not null, undefined, etc.
typeof o === "object" && // o is an object
isFinite(o.length) && // o.length is a finite number
o.length >= 0 && // o.length is non-negative
o.length===Math.floor(o.length) && // o.length is an integer
o.length < 4294967296) // o.length < 2^32
return true; // Then o is array-like
else
return false; // Otherwise it is not
}





function todo_bd_ingresa(date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno){
db = window.openDatabase("db12", "1", "Database 1", 5*1024*1024);

 db.transaction(function(tx) {
 tx.executeSql("CREATE TABLE IF NOT EXISTS todo" +
' (id INTEGER NOT NULL PRIMARY KEY ASC, ' +
' date DATE NOT NULL, tipo_torso_pierna TEXT NOT NULL, ' +
' ejercicio TEXT NOT NULL, series INTEGER NOT NULL, ' +
' kilos_entreno INTEGER NOT NULL, kilos_activacion INTEGER NOT NULL, ' +
' tiempo_entreno INTEGER NOT NULL );');
 },dbError,function(tx) {
 db.transaction(function(tx){
    var addedOn = new Date();
    tx.executeSql("INSERT INTO todo(date, tipo_torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno) VALUES (?,?,?,?,?,?,?)",
        [date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno], function(e) {
console.log("Db error ",e);
}, function() {
console.log("Done");
});

 });
});
}


/*Aca abajo, dentro del if, se pone el codigo de cuando se alcanza la primera serie de entreno, y se cambia el peso al 90% y se 
empiezan las series ... */
if(document.getElementById("kg").disabled){

//alert("el boton ya esta disabled");


switch($("#reserva").val()){
	case "0":
//termina_serie();
var now = new Date();
var fecha= now.toLocaleDateString()

alert(kg +" " + series.length + " "+ localStorage.getItem("tipo_tp") + " "+ localStorage.getItem("ej")+" // Fecha:"+ "19/2/2017")
function dbError(e) {
 console.log("Error", e);
}

todo_bd_ingresa(fecha, localStorage.getItem("tipo_tp"), localStorage.getItem("ej"), series.length, 1, kg, 5);
//setTimeout(location.reload(), 9000)
alert("Finalizaste la serie");
/*Reiniciar todo */


function termina_serie(){
$("section").empty();
$("section").remove();
$("br").remove();
$("#menutorsopierna1").text("Series de Activación") // Cambia el nav, pone título correpondiente
$("#menutorsopierna1").css("display", "none");
$("#menutorsopierna").css("display", "block");
var boton_kg= document.getElementById("kg");
$("#reserva").val("");
$("#kg").val("");
$("#kg").css("background", "white")
$("#kg").css("color", "black");
boton_kg.disabled= false;
$(".Menu_ejercicio_seleccionado_parte_de_arriba").css("display", "none");
 $("#menu_a").css("display", "block");
	$("#agregar_escala").css("display", "none");
}









	break;

	default:
$("#reserva").val("");
	break;
}



}else{
	




	if(reserva<=1){
/*Aca abajo, dentro del if, se pone el codigo de cuando se alcanza la primera serie de entreno, y se cambia el peso al 90% y se 
empiezan las series ... */


var texto= '<h3>¡Has conseguido tu primera serie de entrenamiento!</h3><br><h6>Ahora comenzarás con el resto de las series. Debes hacer entre 4 y 7 series. Si haces menos quiere decir que calculaste mal tus repeticiones en reserva, debiste haber usado menos peso. Si haces mas de 7 series, quiere decir que exageraste la intensidad de tus repeticiones de reserva: la verdad es que podías cargar mas peso! </h6><br><input onclick="close2" style="z-index:100" type="button" id="close_boton" value="Aceptar">';
//alert(series.length)
$(".modal-body").html(texto)  //Modal que indica el paso a las series de entreno
               $("section").empty();   //borra los elementos de la activacion
               $("section").remove();  //borra los elementos de la activacion
               $("br").remove();       //borra los elementos de la activacion
        $("#menutorsopierna1").text("Series de Entreno") // Cambia el nav, pone título correpondiente
var texto_previo= $(".ejercicio").text();
var texto_rm= $("#rm").text();
//alert(texto_previo)
var boton_kg= document.getElementById("kg");
boton_kg.value= kg*0.9;
$("#reserva").val("");
$("#kg").css("background-image", "-webkit-gradient(linear, left top, left bottom, from(grey), to(black))")
$("#kg").css("color", "white")
boton_kg.disabled= true;
$(".ejercicio").text(texto_previo +" "+texto_rm);
$("#rm").text(kg*0.9+" Kilos")


  //alert(modal.style.display) 
 // $("#modal").attr("id", "modal12");
  var modal = document.getElementById('modal');
  modal.style.display= "block";
//modal.removeEventListener("click", close1);
//document.getElementById("modal").removeEventListener("click", close1, true);
//var boton=document.getElementById("close_boton")
//boton.addEventListener("click", close2, false)	
}else{
	$("#kg").val("");
$("#reserva").val("");
}
}
/*Aca Arriba, dentro del if, se pone el codigo de cuando se alcanza la primera serie de entreno, y se cambia el peso al 90% y se 
empiezan las series ... */
/*Aca Arriba, dentro del if, se pone el codigo de cuando se alcanza la primera serie de entreno, y se cambia el peso al 90% y se 
empiezan las series ... */







 
})
})