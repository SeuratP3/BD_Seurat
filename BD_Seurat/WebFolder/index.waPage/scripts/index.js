
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		// Add your code here
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
// @endregion
};// @endlock
