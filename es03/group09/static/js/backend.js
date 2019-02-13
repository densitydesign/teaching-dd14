function writeEntry(pathstr, values) {
    var tstmp = new firebase.firestore.Timestamp.now();
    var entry = db.collection("sessions").doc((tstmp.seconds).toString()).set({
        category: playback.category,
        d: pathstr,
        timestamp: tstmp,
        values: values
    })
}

// var cd = curves_data;

// this method gets a reference of the document on the server
function getLastEntries(num, bool = false) {

    db.collection("sessions").where("category", "==", playback.category).limit(num).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // push path data
                curves_data.push(doc.data());
            });

            if (bool == true) {
                // curva già elaborata, alleggerisce animazione (?)
                ca = "M0,0C17.5,0 -4,980 66,980S129,980 199,980 263,980 333,980 396,980 466,980 529,980 599,980 663,980 733,980 782.5,0 800,0"

                // crea n curve in base al json, le imposta uguali alla curva d'arrivo
                usersLayer.selectAll('path.curves-layer').data(curves_data)
                    .enter().append('path')
                    .attr({
                        'class': function (d, i) {
                            return 'users-curve users-path' + i;
                        },
                        'd': ca,
                        'vector-effect': 'non-scaling-stroke'
                    })
            } else { animateLinesResults(); }
        })
        .catch(function (error) {
            console.log("Error getting entries: ", error);
        });
}

function getAllEntries(callBack = function(){}) {
    for (var i = 0; i < 4; i++) {
        var t = 0;
        db.collection("sessions").where("category", "==", i+1).limit(10).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // push path data
                all_results_data[t].push(doc.data());
            });
            t++;
            if (t == 4) {   
                callBack();
            }
        })
    }
}

function getAverages(arrayName) {
    db.collection("sessions").where("category", "==", playback.category).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arrayName.push(doc.data().values);
            });
            computeAvg(playback.current);
        })
        .catch(function (error) {
            console.log("Error getting averages: ", error);
        });
}


// gets average of same index among many arrays
function getContentAverage(arr, index) {
    if (index > 0 && index < 6) {
        var outputArr = [];

        arr.forEach((entry) => {
            outputArr.push(entry[index]);
        });
        var result = ((outputArr) => {
            var avg = 0;
            for (i = 0; i < outputArr.length; i++) {
                avg += parseFloat(outputArr[i]);
            }
            return (avg / arr.length).toFixed(2);
        })(outputArr);
    } else return false;

    return result;
}