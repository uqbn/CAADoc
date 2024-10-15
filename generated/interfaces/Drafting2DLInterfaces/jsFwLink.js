var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
objet["interface"]["Layout2DFactory"]=0;
objet["interface"][0]="../Drafting2DLInterfaces/interface_Layout2DFactory_35190.htm";
objet["interface"]["Layout2DRoot"]=1;
objet["interface"][1]="../Drafting2DLInterfaces/interface_Layout2DRoot_31024.htm";
objet["interface"]["Layout2DSettingAtt"]=2;
objet["interface"][2]="../Drafting2DLInterfaces/interface_Layout2DSettingAtt_39927.htm";
objet["interface"]["Layout2DSheet"]=3;
objet["interface"][3]="../Drafting2DLInterfaces/interface_Layout2DSheet_32096.htm";
objet["interface"]["Layout2DSheets"]=4;
objet["interface"][4]="../Drafting2DLInterfaces/interface_Layout2DSheets_33591.htm";
objet["interface"]["Layout2DView"]=5;
objet["interface"][5]="../Drafting2DLInterfaces/interface_Layout2DView_30935.htm";
objet["interface"]["Layout2DViews"]=6;
objet["interface"][6]="../Drafting2DLInterfaces/interface_Layout2DViews_32315.htm";
objet["enum"]["CatClippingFrameReframeOnMode"]=0;
objet["enum"][0]="../Drafting2DLInterfaces/enum_CatClippingFrameReframeOnMode_61985.htm";
objet["enum"]["CatDedicatedFilterType"]=1;
objet["enum"][1]="../Drafting2DLInterfaces/enum_CatDedicatedFilterType_45337.htm";
objet["enum"]["CatView2DModeVisu"]=2;
objet["enum"][2]="../Drafting2DLInterfaces/enum_CatView2DModeVisu_34884.htm";
objet["enum"]["CatViewBackgroundMode"]=3;
objet["enum"][3]="../Drafting2DLInterfaces/enum_CatViewBackgroundMode_42948.htm";
objet["enum"]["CatViewFilterCreationMode"]=4;
objet["enum"][4]="../Drafting2DLInterfaces/enum_CatViewFilterCreationMode_52119.htm";
objet["enum"]["CatViewSide"]=5;
objet["enum"][5]="../Drafting2DLInterfaces/enum_CatViewSide_27021.htm";
objet["enum"]["CatViewType"]=6;
objet["enum"][6]="../Drafting2DLInterfaces/enum_CatViewType_27264.htm";
objet["enum"]["CatVisuBackgroundMode"]=7;
objet["enum"][7]="../Drafting2DLInterfaces/enum_CatVisuBackgroundMode_43006.htm";
objet["enum"]["CatVisuIn3DMode"]=8;
objet["enum"][8]="../Drafting2DLInterfaces/enum_CatVisuIn3DMode_31171.htm";
function locateObject(name,type,NorP){ 
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,type,NorP){ 
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }