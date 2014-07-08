
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var canvas1 = {};	// @canvas
	var button4 = {};	// @button
	var button3 = {};	// @button
	var imageAv = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	canvas1.click = function canvas1_click (event)// @startlock
	{// @endlock
		// Add your code here
		ouvrePopup(WAF.sources.fiche.av_image,500,500);
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

// @region eventManager// @startlock
	WAF.addListener("canvas1", "click", canvas1.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("imageAv", "click", imageAv.click, "WAF");
// @endregion
};// @endlock
