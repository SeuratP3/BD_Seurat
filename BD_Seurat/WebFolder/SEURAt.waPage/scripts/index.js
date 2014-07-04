
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bCopie = {};	// @button
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
        var monTimeOut;
        var listF; //liste de tous les attributs de fiche
        var im = 0;

	
        WAF.sources.fiche.orderBy("marque");
        
        
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
		
		//WAF.sources.fiche.newEntity();
//		sources.fiche.save({onSuccess:function(event) //  save the current entity
//        {
//            sources.fiche.addEntity();
//            for(var i in listF)
//            {
//            	source.fiche.listF[i]=source.fiche.getCurrentElement.listF[i];
//            }
//        } });
        
        //sources.fiche.newEntity();
//        sources.employee.save({onSuccess:function(event) //  save the current entity
//        {
//        	sources.fiche.addEntity(sources.fiche.getCurrentElement());
//    	}});

//sources.fiche.addEntity(sources.fiche.getCurrentElement());
		//debugger;
		var cur = WAF.sources.fiche.getCurrentElement();
		//alert(cur.toString);
        listF = WAF.sources.fiche.getAttributeNames();
		
		WAF.sources.fiche.addNewElement(); //create the new company entity
		
		
		for(var i in listF)
			{
				//alert(listF[i]);
//				if(listF[i]=="ID")
//					alert("ID");
				if(listF[i]!="ID")
				{
					var el = listF[i];
					WAF.sources.fiche[el] = cur[el];
					//alert(el+"="+cur[el].value);
				}
			}
		//WAF.sources.fiche.save();

		sources.fiche.save({onSuccess:function(event) //  save the current entity
        {
        	
		}});
		
		
        
//      sources.employee.addNewElement();
//		sources.employee.lastName=lastNameInput;    // data input by the user through Text Input widgets
//		sources.employee.firstName=firstNameInput;
//		sources.employee.save({onSuccess: mySaveHandler;}); // save the entity
		//listF = WAF.sources.fiche.getAttributeNames();
		//for(var i=0; i<listF.length; i++)
		//{
			//WAF.sources.fiche.addEntity(fiche);
			
		//}
		
		
	};// @lock

//	function copyEntity(source, dest, skipList, onlyList){
//    var sourceAttrs  = [];
//    var attrIterator = null;
//    var attrName     = "";
//    var haveSkip     = false;
//    var haveOnly     = false;
//    var idx          = 0;
//    var result       = {
//        ok       : false,
//        error    : null,
//        copied   : [],
//        notCopied: []
//    };
// 
//    if((isNullish(source)) || (isNullish(dest))){
//        result.error = setError(1, "Invalid parameters.");
//        return result;
//    }
// 
//    if(source.getDataClass().getName() != dest.getDataClass().getName()){
//        result.error = setError(2, "Source and destination are not the same data class");
//        return result;
//    }
// 
//    if((!isNullish(skipList)) && (skipList.length > 0)){
//        haveSkip = true;
//    }
// 
//    if((!isNullish(onlyList)) && (onlyList.length > 0)){
//        haveOnly = true;
//    }
// 
//    if((haveOnly === true) && (haveSkip === true)){
//        result.error = setError(3, "Invalid attribute lists.");
//        return result;
//    }
// 
//    try{
//        attrIterator = source.getDataClass().attributes;
//        for(attrName in attrIterator){
//            sourceAttrs.push(attrName);
//        }
// 
//        if(haveOnly === true){
//            for(idx = 0; idx < onlyList.length; idx++){
//                attrName = onlyList[idx];
//                if(sourceAttrs.indexOf(attrName) >= 0){
//                    dest[attrName] = source[attrName];
//                    result.copied.push(attrName);
//                }
//                else{
//                    result.notCopied.push(attrName);
//                }
//            }
//        }
//        else{
//            for(idx = 0; idx < sourceAttrs.length; idx++){
//                attrName = sourceAttrs[idx];
// 
//                if((haveSkip === false) || (skipList.indexOf(attrName) < 0)){
//                    dest[attrName] = source[attrName];
//                    result.copied.push(attrName);
//                }
//                else{
//                    result.notCopied.push(attrName);
//                }
//            }
//        }
//    }
//    catch(e){
//        result.error = setError(10, "Failed. Err:" + getCatchMessage(e));
//        return result;
//    }
//    result.ok = true;
//    return result;
//}

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

		if(monTimeOut != null){
			window.clearTimeout(monTimeOut);
		}
		
    	monTimeOut = setTimeout(function(){    
		
			var txtR = $$("textRecherche").getValue();
			
	        if(txtR!= ""){
		   		var lst = txtR.split(" ");
		   		var i = 0;
		   		
		   		if((lst[0] == "avant") || (lst[0] == "Avant") || (lst[0] == "AVANT"))
	 				{	 					
	 					txtSrch = "((av_oJ_dim2 = "+lst[1]+") || (av_aJ_dim2 = "+lst[1]+"))";
	 					i=2;
	 				}
	 			else if((lst[0] == "arriere") || (lst[0] == "arrière") || (lst[0] == "Arriere") || (lst[0] == "Arrière") || (lst[0] == "ARRIERE"))
	 				{txtSrch = "((ar_oJ_dim2 = "+lst[1]+") || (ar_aJ_dim2 = "+lst[1]+"))";
	 				i=2;}
		  		else 
		  			{txtSrch = "((marque = '*"+lst[0]+"*') || (modele = '*"+lst[0]+"*') || (cylindree = "+lst[0]+") || (annee = "+lst[0]+") || (nom = '*"+lst[0]+"*'))";
		  			i=1;}

		   		if(lst.length > 1){
		   	 		for(var i; i<lst.length; i++){
		   				//alert("trololol");
		   	 			if((lst[i] == "avant") || (lst[i] == "Avant") || (lst[i] == "AVANT"))
		   	 				{txtSrch += " && ((av_oJ_dim2 = "+lst[i+1]+") || (av_aJ_dim2 = "+lst[i+1]+") || (av_oJ_dim2 = "+lst[i+1]+"\") || (av_aJ_dim2 = "+lst[i+1]+"\"))";
		   	 				i++;}
		   	 			else if((lst[i] == "arriere") || (lst[i] == "arrière") || (lst[i] == "Arriere") || (lst[i] == "Arrière") || (lst[i] == "ARRIERE"))
		   	 				{txtSrch += " && ((ar_oJ_dim2 = "+lst[i+1]+") || (ar_aJ_dim2 = "+lst[i+1]+")) || (ar_oJ_dim2 = "+lst[i+1]+"\") || (ar_aJ_dim2 = "+lst[i+1]+"\"))";
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
		  	
	  	}, 400);
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
	WAF.addListener("imageAv", "click", imageAv.click, "WAF");
	WAF.addListener("textRecherche", "keyup", textRecherche.keyup, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
