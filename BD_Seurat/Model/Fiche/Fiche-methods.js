

model.Fiche.collectionMethods.copier = function() {
	// Add your code here;
	var src = WAF.sources.fiche.getCurrentElement();
	
	WAF.sources.fiche.addNewElement();
	WAF.sources.fiche.serverRefresh();
	 
	        	//sources.fiche.addEntity(sources.fiche.getCurrentElement());
	        	
    listF = WAF.sources.fiche.getAttributeNames();
	var dest = WAF.sources.fiche.getCurrentElement();
	
	WAF.sources.fiche.marque = "vohuzke";
	//dest.marque = cur.marque;
//				for(var i in listF)
//					{
//						var el = listF[i];
//						//if(listF[i]=="ID")
//							//dest[el] = cur[el]+1;
//						if(listF[i]!="ID")
//						{
//							dest[el].setValue(src[el].getValue());
//							//alert(el+"="+cur[el].value);
//						}
//					}

	WAF.sources.fiche.save();
		
				
};

model.Fiche.collectionMethods.copier.scope = "public";


model.Fiche.methods.copier_2 = function() {
	// Add your code here;
	
};
model.Fiche.methods.copier_2.scope = "public";
