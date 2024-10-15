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
objet["class"]["CATConstraintServices"]=0;
objet["class"][0]="../ConstraintModeler/class_CATConstraintServices_37657.htm";
objet["class"]["CATDimMath"]=1;
objet["class"][1]="../ConstraintModeler/class_CATDimMath_19820.htm";
objet["class"]["CATDimTempCst"]=2;
objet["class"][2]="../ConstraintModeler/class_CATDimTempCst_23233.htm";
objet["class"]["CATMfPossibleCst"]=3;
objet["class"][3]="../ConstraintModeler/class_CATMfPossibleCst_27622.htm";
objet["interface"]["CATICstFactory"]=0;
objet["interface"][0]="../ConstraintModeler/interface_CATICstFactory_27470.htm";
objet["interface"]["CATIDegreesOfFreedom"]=1;
objet["interface"][1]="../ConstraintModeler/interface_CATIDegreesOfFreedom_37011.htm";
objet["enum"]["CATDoFStatusEnum"]=0;
objet["enum"][0]="../ConstraintModeler/enum_CATDoFStatusEnum_27304.htm";
objet["enum"]["CATDoFTypeEnum"]=1;
objet["enum"][1]="../ConstraintModeler/enum_CATDoFTypeEnum_24085.htm";
objet["define"]["CATDimAngle0PI"]=2;
objet["define"][2]="../ConstraintModeler/define_CATDimAngle0PI_23676.htm";
objet["define"]["CATDimAngle1PI"]=3;
objet["define"][3]="../ConstraintModeler/define_CATDimAngle1PI_23687.htm";
objet["define"]["CATDimAngle2PI"]=4;
objet["define"][4]="../ConstraintModeler/define_CATDimAngle2PI_23698.htm";
objet["define"]["CATDimAngleUnspec"]=5;
objet["define"][5]="../ConstraintModeler/define_CATDimAngleUnspec_29656.htm";
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