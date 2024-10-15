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
objet["class"]["CATVPMServices"]=0;
objet["class"][0]="../PSNInteroperability/class_CATVPMServices_28728.htm";
objet["function"]["CATAddCBToCurrentEditor"]=0;
objet["function"][0]="../PSNInteroperability/function_CATAddCBToCurrentEditor_56744.htm";
objet["function"]["CATCloseAssemblyInVPM"]=1;
objet["function"][1]="../PSNInteroperability/function_CATCloseAssemblyInVPM_51216.htm";
objet["function"]["CATCommitVPM"]=2;
objet["function"][2]="../PSNInteroperability/function_CATCommitVPM_37188.htm";
objet["function"]["CATCompleteSessionFromVPM"]=3;
objet["function"][3]="../PSNInteroperability/function_CATCompleteSessionFromVPM_68548.htm";
objet["function"]["CATComputeDocId"]=4;
objet["function"][4]="../PSNInteroperability/function_CATComputeDocId_725528.htm";
objet["function"]["CATConnectToVPM"]=5;
objet["function"][5]="../PSNInteroperability/function_CATConnectToVPM_398508.htm";
objet["function"]["CATCreateVPMProductStructure"]=6;
objet["function"][6]="../PSNInteroperability/function_CATCreateVPMProductStructure_872547.htm";
objet["function"]["CATCreateVPMSession"]=7;
objet["function"][7]="../PSNInteroperability/_function_CATCreateVPMSession.htm";
objet["function"]["CATDisconnectFromVPM"]=8;
objet["function"][8]="../PSNInteroperability/function_CATDisconnectFromVPM_49471.htm";
objet["function"]["CATGetVPMEnvironment"]=9;
objet["function"][9]="../PSNInteroperability/function_CATGetVPMEnvironment_118099.htm";
objet["function"]["CATInitBatch"]=10;
objet["function"][10]="../PSNInteroperability/function_CATInitBatch_37556.htm";
objet["function"]["CATInitBatchOnHost"]=11;
objet["function"][11]="../PSNInteroperability/function_CATInitBatchOnHost_47888.htm";
objet["function"]["CATLoadChildrenFromVPM"]=12;
objet["function"][12]="../PSNInteroperability/function_CATLoadChildrenFromVPM_110207.htm";
objet["function"]["CATLoadDocumentFromVPM"]=13;
objet["function"][13]="../PSNInteroperability/_function_CATLoadDocumentFromVPM.htm";
objet["function"]["CATLoadFromVPM"]=14;
objet["function"][14]="../PSNInteroperability/function_CATLoadFromVPM_451711.htm";
objet["function"]["CATOpenConfiguredAssemblyInVPM"]=15;
objet["function"][15]="../PSNInteroperability/_function_CATOpenConfiguredAssemblyInVPM.htm";
objet["function"]["CATRebuildAssemblyFromDstDocument"]=16;
objet["function"][16]="../PSNInteroperability/function_CATRebuildAssemblyFromDstDocument_139595.htm";
objet["function"]["CATSaveInVPM"]=17;
objet["function"][17]="../PSNInteroperability/function_CATSaveInVPM_76631.htm";
objet["function"]["CATSaveInVPMFromCATIA"]=18;
objet["function"][18]="../PSNInteroperability/_function_CATSaveInVPMFromCATIA.htm";
objet["function"]["CATSimpleQueryToVPM"]=19;
objet["function"][19]="../PSNInteroperability/function_CATSimpleQueryToVPM_1996686.htm";
objet["function"]["CATTerminateBatch"]=20;
objet["function"][20]="../PSNInteroperability/function_CATTerminateBatch_44725.htm";
objet["function"]["CATValuatePdmId"]=21;
objet["function"][21]="../PSNInteroperability/_function_CATValuatePdmId.htm";
objet["function"]["ExecuteOnServer"]=22;
objet["function"][22]="../PSNInteroperability/function_ExecuteOnServer_47587.htm";
objet["function"]["GetObjectToSaveSortedList"]=23;
objet["function"][23]="../PSNInteroperability/function_GetObjectToSaveSortedList_153898.htm";
objet["function"]["OpenAPSNGraph"]=24;
objet["function"][24]="../PSNInteroperability/function_OpenAPSNGraph_193915.htm";
objet["function"]["OpenAPSNGraphWithClause"]=25;
objet["function"][25]="../PSNInteroperability/function_OpenAPSNGraphWithClause_323554.htm";
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