
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>	
	<link rel="stylesheet" href="css/materialize.min.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel='stylesheet' href='css/icon.css'>
	<script src="js/libs/query-3.3.1.min.js"></script>
	<script src="js/libs/materialize.min.js"></script>
	<title></title>
</head>
<body>
	<div id="app">
	</div>
	<script src="js/libs/vue.js"></script>
	<script type="text/javascript" src="js/components/properties.js"></script>
	<script type="text/javascript" src="js/components/components.js"></script>
	<script type="text/javascript" src="js/components/app.js"></script>
	<script type="text/javascript">

		//request
		
		let hash = '<?php echo($_SERVER['QUERY_STRING']);?>';
		//request CG API

		var CGAPI = null;

		//parameters CG API paremters

		// var valCpId = "x";
		// var valMSISDN = "x";
		// var valproductID = "x";
		// var valpPrice = "x";
		// var valpVal = "x";
		// var valCpPwd = "x";
		// var valCpName = "x";
		// var valreqMode = "x";
		// var valreqType = "x";
		// var valismID = "x";
		// var valtransID = "x";
		// var valWap_mdata = "x";
		// var valsRenewaIprice = "x";
		// var valsRenewaIValidity = "x";
		// var valSongname = "x";
		// var valOpt3 = "x";
		// var valOpt4 = "x";
		// var valOpt5 = "x";

		//Callback API
		
		var valMSISDN = "x";
		var valResult = "x";
		var valReason = "x";
		var valproductId = "x";
		var valtransID = "x";
		var valTPCGID = "x";
		var valSongname = "x";

	</script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>