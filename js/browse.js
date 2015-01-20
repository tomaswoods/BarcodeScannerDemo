 //function will be called when process succeed
function dbConnect() {
    alert("success!");
    var db = window.openDatabase("MyAllergy", "1.0", "MyAllergy", 200000);
    db.transaction(queryDB, errorDB);
    db.transaction(function (tx) {
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
