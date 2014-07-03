
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bCopie = {};	// @button
	var textArriere = {};	// @textField
	var textAvant = {};	// @textField
	var imageAv = {};	// @image
	var textRecherche = {};	// @textField
	var button4 = {};	// @button
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock
		var $contOrgAv = $("#contOrgAv");
		var $contOrgAr = $("#contOrgAr");
		var $button4 = $("#button4"); //Bouton qui affiche la partie AVANT
		var $button3 = $("#button3"); //Bouton qui affiche la partie ARRIERE
		var $imageAv = $("#imageAv");
		var $imageAr = $("#imageAr");
        var txtSrch = "";
        var txtSrch2 = "";
        var txtSrch3 = "";
        var im = 0;

        
	bCopie.click = function bCopie_click (event)// @startlock
	{// @endlock
		// Copier une fiche
		//WAF.sources.fiche.?;
//		var clone = new WAF.sources.fiche({
//			marque: this.marque,
//			modele: this.modele
//		});
//		clone.save();
// 
//		return clone;
		
		
		
	};// @lock

	textArriere.keyup = function textArriere_keyup (event)// @startlock
	{// @endlock
		// Add your code here
//		var txtR = $$("textArriere").getValue();
//		
//        if(txtR!= "")
//	  		{txtSrch3 = "((ar_oJ_dim2 = "+txtR+") || (ar_aJ_dim2 = "+txtR+"))";}
// 	 	else
// 	 		{txtSrch3="";}
// 	 		
// 	 	if(txtSrch!= "")
// 	 		{txtSrch3 += " && ("+txtSrch+")";}
// 	 	if(txtSrch2!= "")
// 	 		{txtSrch3 += " && ("+txtSrch2+")";}
//	 
//	  	WAF.sources.fiche.query(txtSrch3);
  
	};// @lock

	textAvant.keyup = function textAvant_keyup (event)// @startlock
	{// @endlock
		// Add your code here		
//		var txtR = $$("textAvant").getValue();
//		
//        if(txtR!= "")
//	  		{txtSrch2 = "((av_oJ_dim2 = "+txtR+") || (av_aJ_dim2 = "+txtR+"))";}
// 	 	else
// 	 		{txtSrch2="";}
//	 	
//	 	if(txtSrch!= "")
// 	 		{txtSrch2 += " && ("+txtSrch+")";}
// 	 	if(txtSrch3!= "")
// 	 		{txtSrch2 += " && ("+txtSrch3+")";}
//	 
//	  	WAF.sources.fiche.query(txtSrch2);
	};// @lock


	function ouvrePopup(sPage, iLarg, iHaut){
	    var iTop=(screen.height-iHaut)/2;
	    var iLeft=(screen.width-iLarg)/2;
	    window.open(sPage, "popup", "resizable=no, location=no, menubar=no, status=no, scrollbars=no, top="+iTop+",left="+iLeft+",width="+iLarg+", height="+iHaut);
	    return false;
	}
	/*******************************************************************************
	* Fermeture des Popup
	*******************************************************************************/
	function fermePopup(){
	    opener = self;
	    self.close();
	}
		
	imageAv.click = function imageAv_click (event)// @startlock
	{// @endlock
		// Afficher l'image en plus grand
		
		ouvrePopup(WAF.sources.fiche.av_image,500,500);
		
//		if(im==0){
//			$imageAv.width(400);
//			$imageAv.height(400);
//			im=1;
//		}
//		else{
//			$imageAv.width(165);
//			$imageAv.height(165);
//			im=0;
//		}
		
	};// @lock


	textRecherche.keyup = function textRecherche_keyup (event)// @startlock
	{// @endlock
		// Add your code here
		
		var txtR = $$("textRecherche").getValue();
		
        if(txtR!= ""){
	   		var lst = txtR.split(" ");
	   		var i = 0;
	   		
	   		if(lst[0] == "avant")
 				{txtSrch = " ((av_oJ_dim2 = "+lst[1]+") || (av_aJ_dim2 = "+lst[1]+"))";
 				i=2;}
 			else if((lst[0] == "arriere") || (lst[0] == "arrière"))
 				{txtSrch = "((ar_oJ_dim2 = "+lst[1]+") || (ar_aJ_dim2 = "+lst[1]+"))";
 				i=2;}
	  		else 
	  			{txtSrch = "((marque = '*"+lst[0]+"*') || (modele = '*"+lst[0]+"*') || (cylindree = "+lst[0]+") || (annee = "+lst[0]+") || (nom = '*"+lst[0]+"*'))";
	  			i=1;}

	   		if(lst.length > 1){
	   	 		for(var i; i<lst.length; i++){
	   				//alert("trololol");
	   	 			if(lst[i] == "avant")
	   	 				{txtSrch += " && ((av_oJ_dim2 = "+lst[i+1]+") || (av_aJ_dim2 = "+lst[i+1]+"))";
	   	 				i++;}
	   	 			else if((lst[i] == "arriere") || (lst[i] == "arrière"))
	   	 				{txtSrch += " && ((ar_oJ_dim2 = "+lst[i+1]+") || (ar_aJ_dim2 = "+lst[i+1]+"))";
	   	 				i++;}
	     			else if(lst[i] != "")
	      				txtSrch += " && ((marque = '*"+lst[i]+"*') || (modele = '*"+lst[i]+"*') || (cylindree = '*"+lst[i]+"*') || (annee = '*"+lst[i]+"*') || (nom = '*"+lst[i]+"*'))";
	    		}
	   		} 
	   		//txtSrch += ")";
 	 	}
 	 	else
 	 	{txtSrch="";}
 	 	
// 	 	if(txtSrch2!= "")
// 	 		{txtSrch += " && ("+txtSrch2+")";}
// 	 	if(txtSrch3!= "")
// 	 		{txtSrch += " && ("+txtSrch3+")";}
        	 
	  	WAF.sources.fiche.query(txtSrch);  
	};// @lock
	
	
	button4.click = function button4_click (event)// @startlock
	{// @endlock
		//BOUTON Afficher AVANT
		$contOrgAv.show();
		$contOrgAr.hide();
		$imageAv.show();
		$imageAr.hide();
		//Bouton4 devient actuel (bleu ? rouge ?)
		//$button4.css('background','#aaaaff');
		//bouton3 redevient blanc
		//$button3.css('background','#F0F0F0');
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//BOUTON afficher ARRIERE
		$contOrgAv.hide();
		$contOrgAr.show();
		$imageAv.hide();
		$imageAr.show();
		//Bouton3 devient actuel (bleu ? rouge ?)
		//$button3.css('background','#08a808');
		//bouton4 redevient blanc
		//$button4.css('background','#F0F0F0');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("bCopie", "click", bCopie.click, "WAF");
	WAF.addListener("textArriere", "keyup", textArriere.keyup, "WAF");
	WAF.addListener("textAvant", "keyup", textAvant.keyup, "WAF");
	WAF.addListener("imageAv", "click", imageAv.click, "WAF");
	WAF.addListener("textRecherche", "keyup", textRecherche.keyup, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
