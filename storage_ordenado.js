db.readTransaction(function to do stuff, error handler, success handler);
__________________________________________________

db.readTransaction(function(tx) {
tx.executeSql("select * from foo");
}, function(e) {
console.log("Db error ",e);
}, function() {
console.log("Done");
})

___________________________________________________


function todo_bd_ingresa(date, torso_pierna, ejercicio, series, kilos_entreno, kilos_activacion, tiempo_entreno){

db = window.openDatabase("db12", "1", "Database 1", 5*1024*1024);

db.Transaction(create_db(tx), error, ingresa(tx));

}

function create_db(tx) {

 tx.executeSql("CREATE TABLE IF NOT EXISTS todo" +
' (id INTEGER NOT NULL PRIMARY KEY ASC, ' +
' date DATE NOT NULL, tipo_torso_pierna TEXT NOT NULL, ' +
' ejercicio TEXT NOT NULL, series INTEGER NOT NULL, ' +
' kilos_entreno INTEGER NOT NULL, kilos_activacion INTEGER NOT NULL, ' +
' tiempo_entreno INTEGER NOT NULL );');
 },dbError,function(tx) {
 }	
 }