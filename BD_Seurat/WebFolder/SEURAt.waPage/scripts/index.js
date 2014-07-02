
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var textMarque = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		var $contOrgAv = $("#contOrgAv");
		$contOrgAv.show();
		var $contOrgAr = $("#contOrgAr");
		$contOrgAr.hide();
		//Bouton4 devient actuel (bleu ? rouge ?)
		var $button4 = $("#button4");
		$button4.css('background','#aaaaff');
		//bouton3 redevient blanc
		var $button3 = $("#button3");
		$button3.css('background','#F0F0F0');
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
		var $contOrgAv = $("#contOrgAv");
		$contOrgAv.hide();
		var $contOrgAr = $("#contOrgAr");
		$contOrgAr.show();
		//Bouton3 devient actuel (bleu ? rouge ?)
		var $button3 = $("#button3");
		$button3.css('background','#aaaaff');
		//bouton4 redevient blanc
		var $button4 = $("#button3");
		$button4.css('background','#F0F0F0');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//var m = sources.montage.newEntity();
		//sources.fiche.avant = m;
		
	};// @lock

	textMarque.change = function textMarque_change (event)// @startlock
	{// @endlock
		// Add your code here
		
		//var q = queryString;
    	//sources.fiche.query(q);
    	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textMarque", "change", textMarque.change, "WAF");
// @endregion
};// @endlock
