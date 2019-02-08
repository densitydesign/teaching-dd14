var db = $.db("users", "1.0", "Users Database", 1024 * 1024);

db.createTable({
    name: "user",
    columns: [
        "source TEXT"
    ],
    done: function () {
        console.log("[TABLE]");
    },
    fail: function () {
        console.log("[DB ERROR]");
    }
});

//
//db.tables(function (tables) {
//    console.log(tables);
//});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

// Give the URL parameters variable names
var sourceVar = getUrlParameter('utm_source');

db.insert("user", {
    data: {
        source: sourceVar
    },
    done: function () {
        console.log("[ADDED] " + sourceVar);
    },
    fail: function () {
        console.log("Something went wrong....");
    }
});


db.criteria("user").list(
    function (transaction, results) {
        var rows = results.rows;

        for (var i = 0; i < rows.length; i++) {
            var row = rows.item(i);
            console.log(row.source);
        }
    },
    function (transaction, error) {
        console.log("Something went wrong....");
    }
);
