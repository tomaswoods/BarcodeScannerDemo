 //function will be called when process succeed
function dbConnect() {
    alert("success!");
    var db = window.sqlitePlugin.openDatabase("MyAllergy", "1.0", "Allergy Demo", 200000);
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM MyTable ORDER BY id", [], function (tx, result) {
            alert("selected successfull");
            $('#categories').empty();
            $.each(result.rows, function (index) {
                var row = result.rows.item(index);
                $('#categories').append('< li>< a href=" #">< h3 class="ui-li-heading">' + row['category'] + '< /h3>< /a>< /li>');
            });

            $('#categories').listview();
        }, function (tx, e) {
            console.log("SQLite Error: " + e.message);
        });
    });
}
