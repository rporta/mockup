app.setColor(app.generateColor());
var preloaderFull = app.newComponent('c-preloader-circle-full').setSectionColor(app.color.deepPurple [5]).setColorHexa(app.generateColorHexa());

setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);

app.create(preloaderFull);


//virtualDom
var header = app.newComponent('c-header');
var main = app.newComponent('c-main').setColor(app.color.blue[5]).setColorText(app.colorText.bwt[1]).setTextAling(app.textAling.c);
var container = app.newComponent('c-container');
var h = app.newComponent('c-h').setText("Términos y condiciones Consent Gateway");
var p = app.newComponent('c-p').setText(
	"Bla\
	Bla\
	Bla\
	Bla\
	Bla".repeat(10)
	);
var br = app.newComponent('c-br');
var form = app.newComponent('c-form').setMethod(0).setColorText(app.colorText.bwt[0]).setCardpanel(1).setAction('http://dev3.tulandia.net/landing/hpVX9F');
var footer = app.newComponent('c-footer').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
var aceptar = app.newComponent('c-button').setText("aceptar").setFlat(1);
var cancelar = app.newComponent('c-button').setText("cancelar").setFlat(1);
var modal = app.newComponent("c-modal");

//real Dom
app.create(header);
app.create(main);
main.create(container);
container.create(h);
container.create(form);
form.create(p);
form.create(br);
form.create(aceptar);
form.create(cancelar);
app.create(footer);
app.create(modal);

//function que resuelve click : aceptar | cancelar
var resolveClick = (e) => {

	//aceptar
	e.target.id === aceptar.$el.id 
	? (()=>{
		// CG API
		// var option = {};

		// option.url = null;
		// option.type = 'get';
		// option.data = null;

		// CGAPI = app.getApi(option);

		//preparando virtual Dom param CG API paremters

		// var CpId = app.newComponent('c-input-fields').setType(3).setName('CpId').setValue(valCpId).setShow(0);
		// var MSISDN = app.newComponent('c-input-fields').setType(3).setName('MSISDN').setValue(valMSISDN).setShow(0);
		// var productID = app.newComponent('c-input-fields').setType(3).setName('productID').setValue(valproductID).setShow(0);
		// var pPrice = app.newComponent('c-input-fields').setType(3).setName('pPrice').setValue(valpPrice).setShow(0);
		// var pVal = app.newComponent('c-input-fields').setType(3).setName('pVal').setValue(valpVal).setShow(0);
		// var CpPwd = app.newComponent('c-input-fields').setType(3).setName('CpPwd').setValue(valCpPwd).setShow(0);
		// var CpName = app.newComponent('c-input-fields').setType(3).setName('CpName').setValue(valCpName).setShow(0);
		// var reqMode = app.newComponent('c-input-fields').setType(3).setName('reqMode').setValue(valreqMode).setShow(0);
		// var reqType = app.newComponent('c-input-fields').setType(3).setName('reqType').setValue(valreqType).setShow(0);
		// var ismID = app.newComponent('c-input-fields').setType(3).setName('ismID').setValue(valismID).setShow(0);
		// var transID = app.newComponent('c-input-fields').setType(3).setName('transID').setValue(valtransID).setShow(0);
		// var Wap_mdata = app.newComponent('c-input-fields').setType(3).setName('Wap_mdata').setValue(valWap_mdata).setShow(0);
		// var sRenewaIprice = app.newComponent('c-input-fields').setType(3).setName('sRenewaIprice').setValue(valsRenewaIprice).setShow(0);
		// var sRenewaIValidity = app.newComponent('c-input-fields').setType(3).setName('sRenewaIValidity').setValue(valsRenewaIValidity).setShow(0);
		// var Songname = app.newComponent('c-input-fields').setType(3).setName('Songname').setValue(valSongname).setShow(0);
		// var Opt3 = app.newComponent('c-input-fields').setType(3).setName('Opt3').setValue(valOpt3).setShow(0);
		// var Opt4 = app.newComponent('c-input-fields').setType(3).setName('Opt4').setValue(valOpt4).setShow(0);
		// var Opt5 = app.newComponent('c-input-fields').setType(3).setName('Opt5').setValue(valOpt5).setShow(0);


		//real Dom param CG API paremters

		// form.create(CpId);
		// form.create(MSISDN);
		// form.create(productID);
		// form.create(pPrice);
		// form.create(pVal);
		// form.create(CpPwd);
		// form.create(CpName);
		// form.create(reqMode);
		// form.create(reqType);
		// form.create(ismID);
		// form.create(transID);
		// form.create(Wap_mdata);
		// form.create(sRenewaIprice);
		// form.create(sRenewaIValidity);
		// form.create(Songname);
		// form.create(Opt3);
		// form.create(Opt4);
		// form.create(Opt5);

		//preparando virtual Dom param Callback API

		// methods app : generateAlphaId | generateAlphanumericId | generateNumericId | generateRandArray

		//MSIDN con prefijo
		// valMSISDN = '971123456789';
		valMSISDN = '123456789';
		valResult = 'SUCCESS';
		valReason = app.generateRandArray(['Success_accepted_by_user', 'Success_denied_by_user']);
		valproductId = app.generateAlphaId(30);
		valtransID = app.generateAlphaId(15);
		valTPCGID = app.generateNumericId(18);
		valSongname = app.generateAlphaId(10);

		var MSISDN = app.newComponent('c-input-fields').setType(3).setName('MSISDN').setValue(valMSISDN).setShow(0);
		var Result = app.newComponent('c-input-fields').setType(3).setName('Result').setValue(valResult).setShow(0);
		var Reason = app.newComponent('c-input-fields').setType(3).setName('Reason').setValue(valReason).setShow(0);
		var productId = app.newComponent('c-input-fields').setType(3).setName('productId').setValue(valproductId).setShow(0);
		var transID = app.newComponent('c-input-fields').setType(3).setName('transID').setValue(valtransID).setShow(0);
		var TPCGID = app.newComponent('c-input-fields').setType(3).setName('TPCGID').setValue(valTPCGID).setShow(0);
		var Songname = app.newComponent('c-input-fields').setType(3).setName('Songname').setValue(valSongname).setShow(0);

		//real Dom param Callback API

		form.create(MSISDN);
		form.create(Result);
		form.create(Reason);
		form.create(productId);
		form.create(transID);
		form.create(TPCGID);
		form.create(Songname);

		//submit
		setTimeout(()=>{form.$el.submit()}, 500);
	})()
	: null;

	//cancelar
	e.target.id === cancelar.$el.id 
	? (()=>{
		//preparando virtual Dom param CG API paremters

		// var option = {};

		// option.url = null;
		// option.type = 'get';
		// option.data = null;

		// CGAPI = app.getApi(option);

		// var CpId = app.newComponent('c-input-fields').setType(3).setName('CpId').setValue(valCpId).setShow(0);
		// var MSISDN = app.newComponent('c-input-fields').setType(3).setName('MSISDN').setValue(valMSISDN).setShow(0);
		// var productID = app.newComponent('c-input-fields').setType(3).setName('productID').setValue(valproductID).setShow(0);
		// var pPrice = app.newComponent('c-input-fields').setType(3).setName('pPrice').setValue(valpPrice).setShow(0);
		// var pVal = app.newComponent('c-input-fields').setType(3).setName('pVal').setValue(valpVal).setShow(0);
		// var CpPwd = app.newComponent('c-input-fields').setType(3).setName('CpPwd').setValue(valCpPwd).setShow(0);
		// var CpName = app.newComponent('c-input-fields').setType(3).setName('CpName').setValue(valCpName).setShow(0);
		// var reqMode = app.newComponent('c-input-fields').setType(3).setName('reqMode').setValue(valreqMode).setShow(0);
		// var reqType = app.newComponent('c-input-fields').setType(3).setName('reqType').setValue(valreqType).setShow(0);
		// var ismID = app.newComponent('c-input-fields').setType(3).setName('ismID').setValue(valismID).setShow(0);
		// var transID = app.newComponent('c-input-fields').setType(3).setName('transID').setValue(valtransID).setShow(0);
		// var Wap_mdata = app.newComponent('c-input-fields').setType(3).setName('Wap_mdata').setValue(valWap_mdata).setShow(0);
		// var sRenewaIprice = app.newComponent('c-input-fields').setType(3).setName('sRenewaIprice').setValue(valsRenewaIprice).setShow(0);
		// var sRenewaIValidity = app.newComponent('c-input-fields').setType(3).setName('sRenewaIValidity').setValue(valsRenewaIValidity).setShow(0);
		// var Songname = app.newComponent('c-input-fields').setType(3).setName('Songname').setValue(valSongname).setShow(0);
		// var Opt3 = app.newComponent('c-input-fields').setType(3).setName('Opt3').setValue(valOpt3).setShow(0);
		// var Opt4 = app.newComponent('c-input-fields').setType(3).setName('Opt4').setValue(valOpt4).setShow(0);
		// var Opt5 = app.newComponent('c-input-fields').setType(3).setName('Opt5').setValue(valOpt5).setShow(0);


		//real Dom param CG API paremters

		// form.create(CpId);
		// form.create(MSISDN);
		// form.create(productID);
		// form.create(pPrice);
		// form.create(pVal);
		// form.create(CpPwd);
		// form.create(CpName);
		// form.create(reqMode);
		// form.create(reqType);
		// form.create(ismID);
		// form.create(transID);
		// form.create(Wap_mdata);
		// form.create(sRenewaIprice);
		// form.create(sRenewaIValidity);
		// form.create(Songname);
		// form.create(Opt3);
		// form.create(Opt4);
		// form.create(Opt5);

		//preparando virtual Dom param Callback API

		// methods app : generateAlphaId | generateAlphanumericId | generateNumericId | generateRandArray

		//MSIDN con prefijo
		// valMSISDN = '971123456789';
		valMSISDN = '123456789';
		valResult = app.generateRandArray(['FAIL', 'REJECT']);
		valReason = app.generateRandArray(['Consent_Request_Timeout', 'No_Call_Request_Received', 'user_given_incorrect_input']);
		valproductId = app.generateNumericId(30);
		valtransID = app.generateAlphaId(15);
		valTPCGID = app.generateNumericId(18);
		valSongname = app.generateAlphaId(10);

		var MSISDN = app.newComponent('c-input-fields').setType(3).setName('MSISDN').setValue(valMSISDN).setShow(0);
		var Result = app.newComponent('c-input-fields').setType(3).setName('Result').setValue(valResult).setShow(0);
		var Reason = app.newComponent('c-input-fields').setType(3).setName('Reason').setValue(valReason).setShow(0);
		var productId = app.newComponent('c-input-fields').setType(3).setName('productId').setValue(valproductId).setShow(0);
		var transID = app.newComponent('c-input-fields').setType(3).setName('transID').setValue(valtransID).setShow(0);
		var TPCGID = app.newComponent('c-input-fields').setType(3).setName('TPCGID').setValue(valTPCGID).setShow(0);
		var Songname = app.newComponent('c-input-fields').setType(3).setName('Songname').setValue(valSongname).setShow(0);

		//real Dom param Callback API

		form.create(MSISDN);
		form.create(Result);
		form.create(Reason);
		form.create(productId);
		form.create(transID);
		form.create(TPCGID);
		form.create(Songname);

		//submit
		setTimeout(()=>{form.$el.submit()}, 500);
	})()
	: null;
};

//administro eventos
aceptar.$el.addEventListener('click', resolveClick, false);
cancelar.$el.addEventListener('click', resolveClick, false);

