function dbError(e) {
 console.log("Error", e);
}


function todo_bd_muestra(date){

	
	
db = window.openDatabase("db12", "1", "Database 1", 5*1024*1024);

 db.transaction(function(tx) {
 tx.executeSql("CREATE TABLE IF NOT EXISTS todo" +
' (id INTEGER NOT NULL PRIMARY KEY ASC, ' +
' date DATE NOT NULL, tipo_torso_pierna TEXT NOT NULL, ' +
' ejercicio TEXT NOT NULL, series INTEGER NOT NULL, ' +
' kilos_entreno INTEGER NOT NULL, kilos_activacion INTEGER NOT NULL, ' +
' tiempo_entreno INTEGER NOT NULL );');
 },dbError,function(tx) {
/*Aca va el codigo a hacer, segun sea*/

db.readTransaction(function(tx) {

    tx.executeSql('select * from todo where date=?;', [date], 
      function(tx, results){
var texto= "";
      for (var i = 0; i < results.rows.length; i++) {
        var row= results.rows.item(i);
        var contenedor= document.getElementById("contenedor");
 texto += '<tr>'+
             
             '<td>'+row.ejercicio+'</td>'+
             '<td>'+row.series+'</td>'+
             '<td>'+row.kilos_entreno+'</td>'+
             '<td>'+row.kilos_activacion+'</td>'+
           '</tr>';
contenedor.innerHTML= texto;
      


      };

    })
  })



/*Aca va el codigo a hacer, segun sea*/
})
}
var now = new Date();
var fecha= now.toLocaleDateString()

	todo_bd_muestra(fecha);

	setTimeout(hola, 0.1)
function hola(){
	var hola= document.getElementById("h1");
	var now = new Date();
var fecha= now.toLocaleDateString()
	hola.innerHTML=fecha;
//$("#h1").text("asdf")
	
}
