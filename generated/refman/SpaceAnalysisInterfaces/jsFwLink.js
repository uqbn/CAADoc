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
objet["interface"]["CATIDMUUpdateDuringSimulation"]=0;
objet["interface"][0]="../SpaceAnalysisInterfaces/interface_CATIDMUUpdateDuringSimulation_72259.htm";
objet["interface"]["CATIInertia"]=1;
objet["interface"][1]="../SpaceAnalysisInterfaces/interface_CATIInertia_35637.htm";
objet["interface"]["CATIMeasurableInContext"]=2;
objet["interface"][2]="../SpaceAnalysisInterfaces/interface_CATIMeasurableInContext_56274.htm";
objet["interface"]["CATISPAMeasureSettingAtt"]=3;
objet["interface"][3]="../SpaceAnalysisInterfaces/interface_CATISPAMeasureSettingAtt_58138.htm";
objet["interface"]["CATISPASectioningSettingAtt"]=4;
objet["interface"][4]="../SpaceAnalysisInterfaces/interface_CATISPASectioningSettingAtt_66018.htm";
objet["interface"]["CATISpaEnvironment"]=5;
objet["interface"][5]="../SpaceAnalysisInterfaces/interface_CATISpaEnvironment_46286.htm";
objet["enum"]["CATMeasModeOfCalc"]=0;
objet["enum"][0]="../SpaceAnalysisInterfaces/enum_CATMeasModeOfCalc_39979.htm";
objet["function"]["CATDMUCopyData"]=1;
objet["function"][1]="../SpaceAnalysisInterfaces/function_CATDMUCopyData_122947.htm";
objet["define"]["CATDMUAllData"]=2;
objet["define"][2]="../SpaceAnalysisInterfaces/define_CATDMUAllData_35169.htm";
objet["define"]["CATDMUClash"]=3;
objet["define"][3]="../SpaceAnalysisInterfaces/define_CATDMUClash_33146.htm";
objet["define"]["CATDMUClashData"]=4;
objet["define"][4]="../SpaceAnalysisInterfaces/define_CATDMUClashData_37924.htm";
objet["define"]["CATDMUDistance"]=5;
objet["define"][5]="../SpaceAnalysisInterfaces/define_CATDMUDistance_36925.htm";
objet["define"]["CATDMUDistanceData"]=6;
objet["define"][6]="../SpaceAnalysisInterfaces/define_CATDMUDistanceData_42837.htm";
objet["define"]["CATDMUMeasure"]=7;
objet["define"][7]="../SpaceAnalysisInterfaces/define_CATDMUMeasure_35753.htm";
objet["define"]["CATDMUMeasureData"]=8;
objet["define"][8]="../SpaceAnalysisInterfaces/define_CATDMUMeasureData_41287.htm";
objet["define"]["CATDMUSection"]=9;
objet["define"][9]="../SpaceAnalysisInterfaces/define_CATDMUSection_35769.htm";
objet["define"]["CATDMUSectionData"]=10;
objet["define"][10]="../SpaceAnalysisInterfaces/define_CATDMUSectionData_41303.htm";
objet["typedef"]["CATDMUDataType"]=11;
objet["typedef"][11]="../SpaceAnalysisInterfaces/typedef_CATDMUDataType_37453.htm";
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