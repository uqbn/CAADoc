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
objet["class"]["CATBatStatePubCAA"]=0;
objet["class"][0]="../BatchInfrastructure/class_CATBatStatePubCAA_31792.htm";
objet["notification"]["CATBatchEndNotifCAA"]=0;
objet["notification"][0]="../BatchInfrastructure/class_CATBatchEndNotifCAA_35050.htm";
objet["class"]["CATBatchLogCAA"]=1;
objet["class"][1]="../BatchInfrastructure/class_CATBatchLogCAA_27462.htm";
objet["notification"]["CATBatchNotif"]=1;
objet["notification"][1]="../BatchInfrastructure/class_CATBatchNotif_27625.htm";
objet["class"]["CATBatchParameters"]=2;
objet["class"][2]="../BatchInfrastructure/class_CATBatchParameters_35722.htm";
objet["interface"]["CATBatClientMonitorCAA"]=0;
objet["interface"][0]="../BatchInfrastructure/interface_CATBatClientMonitorCAA_44226.htm";
objet["interface"]["CATIBatchCAA"]=1;
objet["interface"][1]="../BatchInfrastructure/interface_CATIBatchCAA_27719.htm";
objet["interface"]["CATIBatchElementCAA"]=2;
objet["interface"][2]="../BatchInfrastructure/interface_CATIBatchElementCAA_37811.htm";
objet["interface"]["CATIBatchElementsCAA"]=3;
objet["interface"][3]="../BatchInfrastructure/interface_CATIBatchElementsCAA_39848.htm";
objet["enum"]["ExportedByCATBatchUtils"]=0;
objet["enum"][0]="../BatchInfrastructure/enum_ExportedByCATBatchUtils_44275.htm";
objet["function"]["CATBatchParamToSplitAccess"]=1;
objet["function"][1]="../BatchInfrastructure/function_CATBatchParamToSplitAccess_195942.htm";
objet["function"]["CloseParameterFile"]=2;
objet["function"][2]="../BatchInfrastructure/function_CloseParameterFile_112587.htm";
objet["function"]["GetBatchPublisherCAA"]=3;
objet["function"][3]="../BatchInfrastructure/function_GetBatchPublisherCAA_58939.htm";
objet["function"]["GetBatchRootCAA"]=4;
objet["function"][4]="../BatchInfrastructure/function_GetBatchRootCAA_76562.htm";
objet["function"]["GetCATIBatchCAA"]=5;
objet["function"][5]="../BatchInfrastructure/function_GetCATIBatchCAA_44090.htm";
objet["function"]["GetOutputXMLFile"]=6;
objet["function"][6]="../BatchInfrastructure/function_GetOutputXMLFile_68829.htm";
objet["function"]["InitParameterFile"]=7;
objet["function"][7]="../BatchInfrastructure/function_InitParameterFile_110863.htm";
objet["define"]["SIZE_T_ID"]=8;
objet["define"][8]="../BatchInfrastructure/define_SIZE_T_ID_23085.htm";
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