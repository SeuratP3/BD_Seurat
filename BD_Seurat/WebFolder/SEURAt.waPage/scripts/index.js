
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bCreateAR = {};	// @button
	var gridJantesArriere = {};	// @dataGrid
	var bModif = {};	// @button
	var gridJantesAvant = {};	// @dataGrid
	var bCreateAV = {};	// @button
	var dataGrid2 = {};	// @dataGrid
	var button2 = {};	// @button
	var imageButton2 = {};	// @buttonImage
	var canvas1 = {};	// @canvas
	var imageButton1 = {};	// @buttonImage
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
	var $gridJantesAvant = $("#gridJantesAvant");
	var $gridJantesArriere = $("#gridJantesArriere");
	var $bCreateAV = $("#bCreateAV");
	var $bCreateAR = $("#bCreateAR");
	var $bRemoveAV = $("#bRemoveAV");
	var $bRemoveAR = $("#bRemoveAR");
    var txtSrch = "";
    var txtSrch2 = "";
    var txtSrch3 = "";
    var monTimeOut;
    var listF; //liste de tous les attributs de fiche
    var im = 0;

    WAF.sources.fiche.orderBy("marque",{onSuccess:function(event){
    	
    	WAF.sources.fiche.getEntityCollection().refresh();
    	
    }});

	bCreateAR.click = function bCreateAR_click (event)// @startlock
	{// @endlock
		// Add your code here
		WAF.sources.ar_Avec.fiche=WAF.sources.fiche;
	};// @lock

	gridJantesArriere.onRowClick = function gridJantesArriere_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
		sources.ar_jantes.save({onSuccess:function(event) //  save the current entity
        {
            //sources.av_jantes.addEntity(sources.av_jantes.getCurrentElement()); 
            //sources.av_jantes.ID = null;
                // put the current entity in the datasource's entity collection
        } });
	};// @lock

	bModif.click = function bModif_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.av_jantes.save({onSuccess:function(event) //  save the current entity
        {
        	
        }  });
	};// @lock

	gridJantesAvant.onRowClick = function gridJantesAvant_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
		sources.av_jantes.save({onSuccess:function(event) //  save the current entity
        {
            //sources.av_jantes.addEntity(sources.av_jantes.getCurrentElement()); 
            //sources.av_jantes.ID = null;
                // put the current entity in the datasource's entity collection
        } });
	};// @lock

	bCreateAV.click = function bCreateAV_click (event)// @startlock
	{// @endlock
		// Add your code here
		WAF.sources.av_Avec.ficheAssociee=WAF.sources.fiche;
	};// @lock

	var timeOut;

	dataGrid2.onCellClick = function dataGrid2_onCellClick (event)// @startlock
	{// @endlock
		// Afficher les bonnes jantes dans l(es)'autre(s) tableau(x) - gridJantesAvant
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// POUBELLE
		
	};// @lock


	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		// open SVG editor ? pour créer nouvelle image
		addImage(WAF.widgets.textField1.getValue());
		//open("http://127.0.0.1:8081/Print.waPage/");
	};// @lock

	canvas1.click = function canvas1_click (event)// @startlock
	{// @endlock
		// Add your code here
		ouvrePopup(WAF.sources.fiche.av_image,500,500);
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		WAF.sources.fiche.copier();
		var src = WAF.sources.fiche.getCurrentElement();
		
		WAF.sources.fiche.addNewElement();
		
		WAF.sources.fiche.serverRefresh({onSuccess:function(event){
				
			var listF = WAF.sources.fiche.getAttributeNames();

			for(var i in listF)
				{
					var el = listF[i];
					if(listF[i]!="ID")
					{
						WAF.sources.fiche[el] = src[el].value;
						//alert(el+"="+cur[el].value);
					}
				}

			//WAF.sources.fiche.marque = "Toto"; //zeSrc.marque;
			
			WAF.sources.fiche.save();
			
		    //WAF.sources.fiche.getEntityCollection().refresh();
		}});
	};// @lock
		
        
        
	bCopie.click = function bCopie_click (event)// @startlock
	{// @endlock
		
		var src = WAF.sources.fiche.getCurrentElement();
		
		WAF.sources.fiche.addNewElement();
		
        
		WAF.sources.fiche.serverRefresh({onSuccess:function(event){
		
    			var listF = WAF.sources.fiche.getAttributeNames();
    
    			for(var i in listF)
					{
						var el = listF[i];
						if(listF[i]!="ID")
						{
							WAF.sources.fiche[el] = src[el].value;
							//alert(el+"="+cur[el].value);
						}
					}

				//WAF.sources.fiche.marque = "Toto"; //zeSrc.marque;
				
				WAF.sources.fiche.save();
				
   		     	//WAF.sources.fiche.getEntityCollection().refresh();

			
				
			}});
		
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
	
	function addImage(link){
		
		var myPict = loadImage (link); // load the image from file
	    myPict.setPath("C:/Utilisateurs/Camille/Mes\ Documents/Wakanda/BD_Seurat/BD_Seurat/WebFolder/images/wak.jpg"); //create a new path for the image
	    WAF.sources.fiche.av_image = myPict;
	    WAF.sources.fiche.av_image.save();
//		var p = new ds.Pict();   // create a new entity in the Pict datastore class
//	    p.name = "Flower";   // give a name to the image
//	    p.photo = myPict;  // affects the image object
//		p.save();   // store the entity and the image reference
			// the image is also stored at the specified location
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
		  			{txtSrch = "((ID = "+lst[0]+") || (marque = '*"+lst[0]+"*') || (modele = '*"+lst[0]+"*') || (cylindree = "+lst[0]+") || (annee = "+lst[0]+") || (nom = '*"+lst[0]+"*'))";
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
		      				txtSrch += " && ((ID = "+lst[0]+") || (marque = '*"+lst[i]+"*') || (modele = '*"+lst[i]+"*') || (cylindree = '*"+lst[i]+"*') || (annee = '*"+lst[i]+"*') || (nom = '*"+lst[i]+"*'))";
		    		}
		   		} 
		   		//txtSrch += ")";
	 	 	}
	 	 	else
	 	 	{txtSrch="";}
	 	 	
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
		$gridJantesAvant.show();
		$gridJantesArriere.hide();
		$bCreateAV.show();
		$bCreateAR.hide();
		$bRemoveAV.show();
		$bRemoveAR.hide();
		
		//Bouton4 devient actuel (bleu ? rouge ?)
		//$button4.css('background','#aaaaff');
		//bouton3 redevient blanc
		//$button3.css('background','#F0F0F0');
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//BOUTON afficher ARRIERE
		$contOrgAr.show();
		$contOrgAv.hide();
		$imageAr.show();
		$imageAv.hide();
		$gridJantesArriere.show();
		$gridJantesAvant.hide();
		$bCreateAR.show();
		$bCreateAV.hide();
		$bRemoveAR.show();
		$bRemoveAV.hide();
		
		//Bouton3 devient actuel (bleu ? rouge ?)
		//$button3.css('background','#08a808');
		//bouton4 redevient blanc
		//$button4.css('background','#F0F0F0');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("bCreateAR", "click", bCreateAR.click, "WAF");
	WAF.addListener("gridJantesArriere", "onRowClick", gridJantesArriere.onRowClick, "WAF");
	WAF.addListener("bModif", "click", bModif.click, "WAF");
	WAF.addListener("gridJantesAvant", "onRowClick", gridJantesAvant.onRowClick, "WAF");
	WAF.addListener("bCreateAV", "click", bCreateAV.click, "WAF");
	WAF.addListener("dataGrid2", "onCellClick", dataGrid2.onCellClick, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("canvas1", "click", canvas1.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("bCopie", "click", bCopie.click, "WAF");
	WAF.addListener("imageAv", "click", imageAv.click, "WAF");
	WAF.addListener("textRecherche", "keyup", textRecherche.keyup, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
