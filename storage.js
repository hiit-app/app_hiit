var html5rocks = {};
html5rocks.webdb = {};
html5rocks.webdb.db = null;

html5rocks.webdb.open = function() {
  var dbSize = 5 * 1024 * 1024; // 5MB
  html5rocks.webdb.db = openDatabase("Todo", "1", "Todo manager", dbSize);
}

html5rocks.webdb.onError = function(tx, e) {
  alert("There has been an error: " + e.message);
}

html5rocks.webdb.onSuccess = function(tx, r) {
  // re-render the data.
  // loadTodoItems is defined in Step 4a
  html5rocks.webdb.getAllTodoItems(loadTodoItems);
}

html5rocks.webdb.createTable = function() {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS todo" +
' (id INTEGER NOT NULL PRIMARY KEY ASC, ' +
' date DATE NOT NULL, tipo_torso_pierna TEXT NOT NULL, ' +
' ejercicio TEXT NOT NULL, series INTEGER NOT NULL, ' +
' kilos_entreno INTEGER NOT NULL, kilos_activacion INTEGER NOT NULL, ' +
' tiempo_entreno INTEGER NOT NULL );', []);
  });
}
function dbError(e) {
 console.log("Error", e);
}


function todo_bd_muestra(id){
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

    tx.executeSql('select * from todo where date=?;', [id], 
      function(tx, results){

      for (var i = 0; i < results.rows.length; i++) {
        var row= results.rows.item(i);
        var contenedor= document.getElementById("contenedor");
var texto= ' <tr>
             <th>'+row.date+'</th>
             <td>'+row.ejercicio+'</td>
             <td>'+row.series+'</td>
             <td>'+row.kilos_entreno+'</td>
             <td>'+row.kilos_activacion+'</td>
           </tr>
';
      contenedor.innerHTML= texto;


      };
    })
  })



/*Aca va el codigo a hacer, segun sea*/
})
}
function renderNotes() {
 db.readTransaction(function(tx) {
 tx.executeSql('select * from notes',[],
 function(tx, results) {

  var rowStr = "";
 for(var i=0;i<results.rows.length;i++) {
 var row = results.rows.item(i);
 //use row.col

 rowStr += "<tr><td>" + row.date + "</td>";
 rowStr += "<td>" + row.ejercicio + "</td>";
 var d = new Date();
 d.setTime(row.updated);
 rowStr += "<td>" + d.toDateString() + " " + d.toTimeString();
 rowStr += "</td></tr>";
 };
 $notesTable.empty();
 $notesTable.append(rowStr);
 });
 },dbError);
 

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


html5rocks.webdb.addTodo = function(date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno) {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx){
    var addedOn = new Date();
    tx.executeSql("INSERT INTO todo(date, tipo_torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno) VALUES (?,?,?,?,?,?,?)",
        [date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno],
        html5rocks.webdb.onSuccess,
        html5rocks.webdb.onError);
   });
}
html5rocks.webdb.getAllTodoItems = function(renderFunc) {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM todo", [], renderFunc,
        html5rocks.webdb.onError);
  });
}

html5rocks.webdb.getAllTodoItems1 = function(renderFunc, data) {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM todo where title=?;' ,[], renderFunc,
        html5rocks.webdb.onError);
  });
}

function init(date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno) {
  html5rocks.webdb.open();
  html5rocks.webdb.createTable();
  html5rocks.webdb.addTodo(date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno)
  //html5rocks.webdb.getAllTodoItems(loadTodoItems);
}

function init1(){
	html5rocks.webdb.open();
	html5rocks.webdb.createTable();
	html5rocks.webdb.getAllTodoItems(loadTodoItems);
}

function loadTodoItems(tx, rs) {
  var rowOutput = "";
  var todoItems = document.getElementById("todoItems");
  for (var i=0; i < rs.rows.length; i++) {
    //rowOutput += renderTodo(rs.rows.item(i));
    rowOutput += renderTodo1(rs.rows.item(i));
    console.log(rs.rows.length)
    todoItems.innerHTML =  rs.rows.item(i);
  }

  todoItems.innerHTML =  rowOutput;
}

html5rocks.webdb.deleteTodo = function(id) {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx){
    tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
        html5rocks.webdb.onSuccess,
        html5rocks.webdb.onError);
    });
}

function renderTodo1(row) {
	var ahora = new Date();
var comienzo = new Date(ahora.getFullYear(), 0, 0);
var dif = ahora - comienzo;
var unDia = (1000 * 60 * 60 * 24);
var dia = Math.ceil(dif / unDia)-1;
  return "<div class="+dia+" style='display:none'><div class='table-responsive'><table class='table table-striped'><tr class="+row.date+" ><td><td>"+row.date+"</td><td>"+row.tipo_torso_pierna+"</td><td>"+"</td><td>"+row.ejercicio+"</td><td>"+
  "</td><td>"+row.series+"</td><td>"+"</td><td>"+row.kilos_entreno+"</td><td>"+"</td><td>"+row.kilos_activacion+"</td><td>"
  +"</td><td>"+row.tiempo_entreno+"</td><td></tr></table></div></div>";
}

function renderTodo(row) {
  return "<li>" + row.todo + 
         " [<a href='javascript:void(0);' onclick=\'html5rocks.webdb.deleteTodo(" + 
         row.ID +");\'>Delete</a>]</li>";
}