var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load();

function Search() {
    $("#accountingTable").find("tr").remove();
    if ($('input:checked').val() == "curMonth") {
        var date = new Date(); // new 一個叫做Date的物件
        var year = date.getUTCFullYear(); // 取得當前的年份，2017
        var month = date.getUTCMonth() + 1; // 取得當前的月份
        // 把一位數補足成兩位數
        if (month < 10) {
            month = "0" + month;
        }
        // 日期格式：2017-10-01
        var dateString = year + "-" + month + "-01";
        var accountings = accountingCollection.find(
            {
                date: {
                    $gte: dateString
                }
            },
            {
                $orderBy: { "date": -1 }
            }
        );
        for (var i = 0; i < accountings.length; i++) {
            var date = accountings[i].date;
            var category = accountings[i].category;
            var item = accountings[i].item;
            var cost = accountings[i].cost;
            $("#accountingTable").append(
                "<tr><td>" + date +
                "</td><td>" + category +
                "</td><td>" + item +
                "</td><td>" + cost +
                "</td></tr>");
        }
    } else {
        var fromTime = $("#fromTime").val();
		var toTime = $("#toTime").val();
		var accountings = accountingCollection.find(
			{
				date: {
					$gte: fromTime,
					$lte: toTime
				}
			}
		);
		for (var i = 0; i < accountings.length; i++) {
            var date = accountings[i].date;
            var category = accountings[i].category;
            var item = accountings[i].item;
            var cost = accountings[i].cost;
			$("#accountingTable").append(
                "<tr><td>" + date +
                "</td><td>" + category +
                "</td><td>" + item +
                "</td><td>" + cost +
                "</td></tr>");
		}
    }
}