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
objet["class"]["CATEnoAttrMappingEnumDef"]=0;
objet["class"][0]="../CATPDMBaseInterfaces/class_CATEnoAttrMappingEnumDef_47698.htm";
objet["collection"]["CATListOfCATIPLMIdentificator"]=0;
objet["collection"][0]="../CATPDMBaseInterfaces/class_CATListOfCATIPLMIdentificator_59949.htm";
objet["interface"]["CATIAttrMappingInfo"]=0;
objet["interface"][0]="../CATPDMBaseInterfaces/interface_CATIAttrMappingInfo_40083.htm";
objet["interface"]["CATIPDMId0"]=1;
objet["interface"][1]="../CATPDMBaseInterfaces/interface_CATIPDMId0_26054.htm";
objet["interface"]["CATIPDMLog0"]=2;
objet["interface"][2]="../CATPDMBaseInterfaces/interface_CATIPDMLog0_27138.htm";
objet["interface"]["CATIPDMLogObject0"]=3;
objet["interface"][3]="../CATPDMBaseInterfaces/interface_CATIPDMLogObject0_35005.htm";
objet["interface"]["CATIPDMPersistency"]=4;
objet["interface"][4]="../CATPDMBaseInterfaces/interface_CATIPDMPersistency_38603.htm";
objet["interface"]["CATIPDMSaveAction"]=5;
objet["interface"][5]="../CATPDMBaseInterfaces/interface_CATIPDMSaveAction_36046.htm";
objet["interface"]["CATIPDMSaveInfo"]=6;
objet["interface"][6]="../CATPDMBaseInterfaces/interface_CATIPDMSaveInfo_32743.htm";
objet["interface"]["CATIPDMSaveInfo1"]=7;
objet["interface"][7]="../CATPDMBaseInterfaces/interface_CATIPDMSaveInfo1_33478.htm";
objet["interface"]["CATIPDMUEAllowDocumentLoading"]=8;
objet["interface"][8]="../CATPDMBaseInterfaces/interface_CATIPDMUEAllowDocumentLoading_63534.htm";
objet["interface"]["CATIPDMUECreate"]=9;
objet["interface"][9]="../CATPDMBaseInterfaces/interface_CATIPDMUECreate_32398.htm";
objet["interface"]["CATIPDMUEDocumentName"]=10;
objet["interface"][10]="../CATPDMBaseInterfaces/interface_CATIPDMUEDocumentName_43173.htm";
objet["interface"]["CATIPDMUELoadProcess"]=11;
objet["interface"][11]="../CATPDMBaseInterfaces/interface_CATIPDMUELoadProcess_41376.htm";
objet["interface"]["CATIPDMUEOnCancel"]=12;
objet["interface"][12]="../CATPDMBaseInterfaces/interface_CATIPDMUEOnCancel_35229.htm";
objet["interface"]["CATIPDMUEReadMode"]=13;
objet["interface"][13]="../CATPDMBaseInterfaces/interface_CATIPDMUEReadMode_35144.htm";
objet["interface"]["CATIPDMUEResId"]=14;
objet["interface"][14]="../CATPDMBaseInterfaces/interface_CATIPDMUEResId_30647.htm";
objet["interface"]["CATIPDMUESaveProcess"]=15;
objet["interface"][15]="../CATPDMBaseInterfaces/interface_CATIPDMUESaveProcess_41542.htm";
objet["interface"]["CATIPDMUnixNTMapping"]=16;
objet["interface"][16]="../CATPDMBaseInterfaces/interface_CATIPDMUnixNTMapping_41350.htm";
objet["interface"]["CATIPLMIdentificator"]=17;
objet["interface"][17]="../CATPDMBaseInterfaces/interface_CATIPLMIdentificator_42176.htm";
objet["enum"]["CATPDMLogStatus"]=0;
objet["enum"][0]="../CATPDMBaseInterfaces/enum_CATPDMLogStatus_30398.htm";
objet["enum"]["CATPDMModType"]=1;
objet["enum"][1]="../CATPDMBaseInterfaces/enum_CATPDMModType_27293.htm";
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