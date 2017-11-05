var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');

accountingCollection.load();

function submit() {
	var newAccounting = {
		date: $("#date").val(),
		category: $("#category").val(),
		item: $("#item").val(),
		cost: $("#cost").val()
	}

	accountingCollection.insert(newAccounting);
	accountingCollection.save();

	$("#date").val("");
	$("#category").val("");
	$("#item").val("");
	$("#cost").val("");
	alert("儲存成功");

}

