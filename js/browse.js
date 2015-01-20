 //function will be called when process succeed
function dbConnect() {
    alert("success!");
    var db;
    if (window.sqlitePlugin !== undefined) {
        db = window.sqlitePlugin.openDatabase("MyFriends");
    } else {
        // For debugging in simulator fallback to native SQL Lite
        db = window.openDatabase("MyFriends", "1.0", "MyFriends Demo", 200000);
    }
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM MyFriends', [], function (tx, r) {
            for (var i = 0; i < rs.rows.length; i++) {
                alert(rs.rows.item(i));
            }            
        }, function (tx, e) {
            alert("SQLite Error: " + e.message);
        });

    });
}
