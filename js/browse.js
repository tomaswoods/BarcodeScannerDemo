//function will be called when an error occurred
function errorDB(err) {
    alert("Error processing SQL: "+err.code);
}
  
//function will be called when process succeed
function dbConnect() {
    alert("success!");
    var db = window.openDatabase("AllergyDB", "1.0", "AllergyDB", 200000);
    db.transaction(queryDB,errorDB);
}
  
//select all from MyFriends
function queryDB(tx) {
    alert("success1");
    tx.executeSql('SELECT * FROM allergy_table', [], querySuccess, errorDB);
}
  
function querySuccess(tx, result) {
    alert("query success!");
    $('#categories').empty();
    $.each(result.rows,function(index){
        var row = result.rows.item(index);
        $('#categories').append('< li>< a href=" #">< h3 class="ui-li-heading">'+row['category']+'< /h3>< /a>< /li>');
    });
  
    $('#categories').listview();
}