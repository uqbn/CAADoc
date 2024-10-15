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
objet["interface"]["MachiningProcess"]=0;
objet["interface"][0]="../ManufacturingInterfaces/interface_MachiningProcess_42930.htm";
objet["interface"]["ManufacturingAPTGenerator"]=1;
objet["interface"][1]="../ManufacturingInterfaces/interface_ManufacturingAPTGenerator_60772.htm";
objet["interface"]["ManufacturingActivity"]=2;
objet["interface"][2]="../ManufacturingInterfaces/interface_ManufacturingActivity_52808.htm";
objet["interface"]["ManufacturingCopyTransformation"]=3;
objet["interface"][3]="../ManufacturingInterfaces/interface_ManufacturingCopyTransformation_79987.htm";
objet["interface"]["ManufacturingFeature"]=4;
objet["interface"][4]="../ManufacturingInterfaces/interface_ManufacturingFeature_50232.htm";
objet["interface"]["ManufacturingFeatures"]=5;
objet["interface"][5]="../ManufacturingInterfaces/interface_ManufacturingFeatures_52532.htm";
objet["interface"]["ManufacturingGeneratorData"]=6;
objet["interface"][6]="../ManufacturingInterfaces/interface_ManufacturingGeneratorData_63678.htm";
objet["interface"]["ManufacturingHole"]=7;
objet["interface"][7]="../ManufacturingInterfaces/interface_ManufacturingHole_44363.htm";
objet["interface"]["ManufacturingInsert"]=8;
objet["interface"][8]="../ManufacturingInterfaces/interface_ManufacturingInsert_48493.htm";
objet["interface"]["ManufacturingMachinableArea"]=9;
objet["interface"][9]="../ManufacturingInterfaces/interface_ManufacturingMachinableArea_65481.htm";
objet["interface"]["ManufacturingMachinableFeature"]=10;
objet["interface"][10]="../ManufacturingInterfaces/interface_ManufacturingMachinableFeature_74958.htm";
objet["interface"]["ManufacturingMachinableGeometry"]=11;
objet["interface"][11]="../ManufacturingInterfaces/interface_ManufacturingMachinableGeometry_78780.htm";
objet["interface"]["ManufacturingMachine"]=12;
objet["interface"][12]="../ManufacturingInterfaces/interface_ManufacturingMachine_49829.htm";
objet["interface"]["ManufacturingMachiningAxis"]=13;
objet["interface"][13]="../ManufacturingInterfaces/interface_ManufacturingMachiningAxis_63853.htm";
objet["interface"]["ManufacturingOperation"]=14;
objet["interface"][14]="../ManufacturingInterfaces/interface_ManufacturingOperation_54833.htm";
objet["interface"]["ManufacturingOutput"]=15;
objet["interface"][15]="../ManufacturingInterfaces/interface_ManufacturingOutput_48911.htm";
objet["interface"]["ManufacturingOutputGenerator"]=16;
objet["interface"][16]="../ManufacturingInterfaces/interface_ManufacturingOutputGenerator_70626.htm";
objet["interface"]["ManufacturingPattern"]=17;
objet["interface"][17]="../ManufacturingInterfaces/interface_ManufacturingPattern_50490.htm";
objet["interface"]["ManufacturingPrecedence"]=18;
objet["interface"][18]="../ManufacturingInterfaces/interface_ManufacturingPrecedence_56309.htm";
objet["interface"]["ManufacturingPrecedences"]=19;
objet["interface"][19]="../ManufacturingInterfaces/interface_ManufacturingPrecedences_58954.htm";
objet["interface"]["ManufacturingProcess"]=20;
objet["interface"][20]="../ManufacturingInterfaces/interface_ManufacturingProcess_50494.htm";
objet["interface"]["ManufacturingProgram"]=21;
objet["interface"][21]="../ManufacturingInterfaces/interface_ManufacturingProgram_50341.htm";
objet["interface"]["ManufacturingSetup"]=22;
objet["interface"][22]="../ManufacturingInterfaces/interface_ManufacturingSetup_46646.htm";
objet["interface"]["ManufacturingTool"]=23;
objet["interface"][23]="../ManufacturingInterfaces/interface_ManufacturingTool_44676.htm";
objet["interface"]["ManufacturingToolAssembly"]=24;
objet["interface"][24]="../ManufacturingInterfaces/interface_ManufacturingToolAssembly_61889.htm";
objet["interface"]["ManufacturingToolCorrector"]=25;
objet["interface"][25]="../ManufacturingInterfaces/interface_ManufacturingToolCorrector_64740.htm";
objet["interface"]["ManufacturingToolMotion"]=26;
objet["interface"][26]="../ManufacturingInterfaces/interface_ManufacturingToolMotion_57038.htm";
objet["interface"]["ManufacturingView"]=27;
objet["interface"][27]="../ManufacturingInterfaces/interface_ManufacturingView_44644.htm";
objet["interface"]["MfgActivities"]=28;
objet["interface"][28]="../ManufacturingInterfaces/interface_MfgActivities_38572.htm";
objet["interface"]["MfgToolMotions"]=29;
objet["interface"][29]="../ManufacturingInterfaces/interface_MfgToolMotions_39976.htm";
objet["enum"]["CatManufacturingPrecedenceType"]=0;
objet["enum"][0]="../ManufacturingInterfaces/enum_CatManufacturingPrecedenceType_72241.htm";
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