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
objet["interface"]["CATIMfgMappingForFollowCurve"]=0;
objet["interface"][0]="../PrismaticMachiningInterfaces/interface_CATIMfgMappingForFollowCurve_81688.htm";
objet["interface"]["CATIMfgMappingForPocketing"]=1;
objet["interface"][1]="../PrismaticMachiningInterfaces/interface_CATIMfgMappingForPocketing_76027.htm";
objet["interface"]["CATIMfgMappingForProfileContouring"]=2;
objet["interface"][2]="../PrismaticMachiningInterfaces/interface_CATIMfgMappingForProfileContouring_101280.htm";
objet["interface"]["CATIMfgPrismMachiningDirectionMgt"]=3;
objet["interface"][3]="../PrismaticMachiningInterfaces/interface_CATIMfgPrismMachiningDirectionMgt_96729.htm";
objet["interface"]["CATIMfgPrismaticStartupFactory"]=4;
objet["interface"][4]="../PrismaticMachiningInterfaces/interface_CATIMfgPrismaticStartupFactory_88592.htm";
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