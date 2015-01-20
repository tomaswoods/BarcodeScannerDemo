 //function will be called when process succeed
function dbConnect() {
    alert("success!");
    var db = window.sqlitePlugin.openDatabase({ name: "MyAllergy" });
    db.transaction(function (tx) {
        alert("successfull");
        tx.executeSql("SELECT * FROM MyAllergy", function (tx, result) {
            alert("selected successfull");
            $('#categories').empty();
            $.each(result.rows, function (index) {
                var row = result.rows.item(index);
                $('#categories').append('< li>< a href=" #">< h3 class="ui-li-heading">' + row['category'] + '< /h3>< /a>< /li>');
            });

            $('#categories').listview();
        }, function (e) {
            alert("ERROR: " + e.message);
        });
    });
}
