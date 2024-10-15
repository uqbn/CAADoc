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
objet["class"]["CATPspListServices"]=0;
objet["class"][0]="../CATPlantShipModeler/class_CATPspListServices_34647.htm";
objet["class"]["CATPspObjAttrNameServices"]=1;
objet["class"][1]="../CATPlantShipModeler/class_CATPspObjAttrNameServices_49364.htm";
objet["class"]["CATPspObjectNameServices"]=2;
objet["class"][2]="../CATPlantShipModeler/class_CATPspObjectNameServices_46929.htm";
objet["class"]["CATPspServices"]=3;
objet["class"][3]="../CATPlantShipModeler/class_CATPspServices_28148.htm";
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