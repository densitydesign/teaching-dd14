//Number.prototype.pad = function (size) {
//    var s = String(this);
//    while (s.length < (size || 2)) {
//        s = "0" + s;
//    }
//    return s;
//}
//
//var source = [];
//
//const ourCount = {};
//
//var iterator = 0;
//
//
//
//
//for (var i = 0; i < 21; i++) {
//
//    $.getJSON("https://api-ssl.bitly.com/v3/link/referring_domains?access_token=dcbfd1ef1b57eb1923e7b6fdcbde5aa9dd849431&link=http%3A%2F%2Fbit.ly%2FAFManifesto" + i.pad(2))
//        .then(function (data) {
//
//            var refer = data["data"]["referring_domains"];
//
//            for (var it = 0; it < refer.length; it++) {
//                var obj = refer['' + it + ''];
//
//                var domain = obj['domain'],
//                    clicks = obj['clicks'];
//
//                source.push({
//
//                    domain: domain,
//                    clicks: clicks
//                });
//
//            }
//
//            showRefer();
//
//        })
//        .fail(function () {
//            // ...didn't work, handle it
//        });
//
//
//
//}
//
//
//function showRefer() {
//    iterator++;
//
//    if (iterator === 20) {
//        console.log(source);
//
//        source.forEach(entry => {
//            if (!ourCount[entry.domain]) {
//                ourCount[entry.domain] = 0;
//            }
//            ourCount[entry.domain] += entry.clicks;
//        });
//
//        console.log(ourCount);
//
//
//
//
//
//    }
//}