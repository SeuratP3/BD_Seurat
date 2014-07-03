
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textRecherche = {};	// @textField
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var textMarque = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

		var $contOrgAv = $("#contOrgAv");
		var $contOrgAr = $("#contOrgAr");
		var $button4 = $("#button4");
		var $button3 = $("#button3");
        var txtSrch = "";

	textRecherche.keyup = function textRecherche_keyup (event)// @startlock
	{// @endlock
		// Add your code here
		//var $input_content = ($textRecherche.text());
        
        //$("#texteRecherche").getValue();

		
		var txtR = $$("textRecherche").getValue();
		
        if(txtR!= ""){
	   		var lst = txtR.split(" ");
	   		
	  		txtSrch = "(marque = '*"+lst[0]+"*') || (modele = '*"+lst[0]+"*') || (cylindree = "+lst[0]+") || (annee = "+lst[0]+") || (nom = '*"+lst[0]+"*')";
	   		if(lst.length > 1){
	   	 		for(var i=1; i<lst.length; i++){
	     			if(lst[i] != "")
	      			txtSrch += " || (marque = '*"+lst[i]+"*') || (modele = '*"+lst[i]+"*') || (cylindree = '*"+lst[i]+"*') || (annee = '*"+lst[i]+"*') || (nom = '*"+lst[i]+"*')";
	    		}
	   		} 
	   		//$$("tInfos").setValue("Filtre : " + txtSrch);
 	 	}
 	 	else
 	 	{txtSrch="";}
  		//WAF.sources.fiche.query(txtSrch); 
        
        //var txtSrch = "(marque=textRecherche) || (modele=textRecherche) || (";
	 
	  WAF.sources.fiche.query(txtSrch);
	  //WAF.DataSource.fiche.query(txtSrch);
	   
	};// @lock

		
	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		$contOrgAv.show();
		$contOrgAr.hide();
		//Bouton4 devient actuel (bleu ? rouge ?)
		//$button4.css('background','#aaaaff');
		//bouton3 redevient blanc
		//$button3.css('background','#F0F0F0');
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
		$contOrgAv.hide();
		$contOrgAr.show();
		//Bouton3 devient actuel (bleu ? rouge ?)
		//$button3.css('background','#08a808');
		//bouton4 redevient blanc
		//$button4.css('background','#F0F0F0');
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
	WAF.addListener("textRecherche", "keyup", textRecherche.keyup, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textMarque", "change", textMarque.change, "WAF");
// @endregion
};// @endlock
