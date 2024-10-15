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
objet["interface"]["CATIStrColorESSObjectSettingAtt"]=0;
objet["interface"][0]="../StructureInterfaces/interface_CATIStrColorESSObjectSettingAtt_68385.htm";
objet["interface"]["CATIStrColorSTDObjectSettingAtt"]=1;
objet["interface"][1]="../StructureInterfaces/interface_CATIStrColorSTDObjectSettingAtt_68356.htm";
objet["interface"]["CATIStrMaterialESSObjectSettingAtt"]=2;
objet["interface"][2]="../StructureInterfaces/interface_CATIStrMaterialESSObjectSettingAtt_77943.htm";
objet["interface"]["CATIStrPathESSRessourcesSettingAtt"]=3;
objet["interface"][3]="../StructureInterfaces/interface_CATIStrPathESSRessourcesSettingAtt_79301.htm";
objet["interface"]["CATIStrTypeESSObjectSettingAtt"]=4;
objet["interface"][4]="../StructureInterfaces/interface_CATIStrTypeESSObjectSettingAtt_65401.htm";
objet["interface"]["CATIStructureFactory"]=5;
objet["interface"][5]="../StructureInterfaces/interface_CATIStructureFactory_41840.htm";
objet["interface"]["CATIStructureMember"]=6;
objet["interface"][6]="../StructureInterfaces/interface_CATIStructureMember_39380.htm";
objet["interface"]["CATIStructureObject"]=7;
objet["interface"][7]="../StructureInterfaces/interface_CATIStructureObject_39369.htm";
objet["interface"]["CATIStructurePlate"]=8;
objet["interface"][8]="../StructureInterfaces/interface_CATIStructurePlate_37573.htm";
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