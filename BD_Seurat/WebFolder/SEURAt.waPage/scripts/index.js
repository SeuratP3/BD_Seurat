
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var textMarque = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

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
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textMarque", "change", textMarque.change, "WAF");
// @endregion
};// @endlock
