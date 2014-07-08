

model.Fiche.collectionMethods.copier = function() {
	// Add your code here;
	var src = model.Fiche.getCurrentElement();
	
	model.Fiche.addNewElement();
	model.Fiche.serverRefresh();
	 
	        	//sources.fiche.addEntity(sources.fiche.getCurrentElement());
	        	
    listF = model.Fiche.getAttributeNames();
	var dest = model.Fiche.getCurrentElement();
	
	model.Fiche.marque = "vohuzke";
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

	model.Fiche.save();
		
				
};

model.Fiche.collectionMethods.copier.scope = "public";


model.Fiche.methods.copier_2 = function() {
	// Add your code here;
	
};
model.Fiche.methods.copier_2.scope = "public";
