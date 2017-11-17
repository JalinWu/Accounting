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

        var eatCost =0;
        var playCost =0;
        var otherCost =0;
        var totalCost =0;
        for (var i = 0; i < accountings.length; i++) {
            var date = accountings[i].date;
            var category = accountings[i].category;
            var item = accountings[i].item;
            var cost = accountings[i].cost;
            var id = accountings[i]._id;

            $("#accountingTable").append(
                "<tr><td>" + date +
                "</td><td>" + category +
                "</td><td>" + item +
                "</td><td>" + cost +
                "</td><td>" + "<button class=\"btn btn-danger little\" onclick=\"remove(\'"+ id +"\')\">刪除</button>" + 
                "</td></tr>");

            if(category == "吃的") {
                eatCost += cost / 1;
                console.log(eatCost);
            }else if(category == "玩的") {
                playCost += cost / 1;
            }else{
                otherCost += cost / 1;
            }
        }
        totalCost = eatCost + playCost + otherCost;

		$("#eatCost").text(eatCost)
		$("#eatProportion").text(Math.round((eatCost/totalCost)*100) + "%")
		$("#playCost").text(playCost)
		$("#playProportion").text(Math.round((playCost/totalCost)*100) + "%")
		$("#otherCost").text(otherCost)
		$("#otherProportion").text(Math.round((otherCost/totalCost)*100) + "%")
        $("#totalCost").text(totalCost)

        var data = [
            { label: "吃的", data: eatCost},
            { label: "玩的", data: playCost },
            { label: "其他", data: otherCost }
          ];
    
          var options = {
            series: {
              pie: { show: true }
            },
            legend: {
              show: false
            }
          };
          $.plot($("#flotcontainer"), data, options);
        
    } else {
        var fromTime = $("#fromTime").val();
		var toTime = $("#toTime").val();
		var accountings = accountingCollection.find(
			{
				date: {
					$gte: fromTime,
					$lte: toTime
				}
			},
            {
                $orderBy: { "date": -1 }
            }
		);
		var eatCost =0;
        var playCost =0;
        var otherCost =0;
        var totalCost =0;
        for (var i = 0; i < accountings.length; i++) {
            var date = accountings[i].date;
            var category = accountings[i].category;
            var item = accountings[i].item;
            var cost = accountings[i].cost;
            var id = accountings[i]._id;
            
            $("#accountingTable").append(
                "<tr><td>" + date +
                "</td><td>" + category +
                "</td><td>" + item +
                "</td><td>" + cost +
                "</td><td>" + "<button class=\"btn btn-danger little\" onclick=\"remove(\'"+ id +"\')\">刪除</button>" + 
                "</td></tr>");

            if(category == "吃的") {
                eatCost += cost / 1;
                console.log(eatCost);
            }else if(category == "玩的") {
                playCost += cost / 1;
            }else{
                otherCost += cost / 1;
            }
        }
        totalCost = eatCost + playCost + otherCost;

		$("#eatCost").text(eatCost)
		$("#eatProportion").text(Math.round((eatCost/totalCost)*100) + "%")
		$("#playCost").text(playCost)
		$("#playProportion").text(Math.round((playCost/totalCost)*100) + "%")
		$("#otherCost").text(otherCost)
		$("#otherProportion").text(Math.round((otherCost/totalCost)*100) + "%")
        $("#totalCost").text(totalCost)
    }
}

function remove(id) {
    console.log(id);
    accountingCollection.remove({
        _id: id
    });
    accountingCollection.save();
    // location.reload();
    Search();
}
