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
objet["class"]["CATCrvDegreeModification"]=0;
objet["class"][0]="../FreeFormOperators/class_CATCrvDegreeModification_44135.htm";
objet["class"]["CATCrvFittingToNurbsCrv"]=1;
objet["class"][1]="../FreeFormOperators/class_CATCrvFittingToNurbsCrv_41696.htm";
objet["class"]["CATFrFSmoothingOper"]=2;
objet["class"][2]="../FreeFormOperators/class_CATFrFSmoothingOper_33267.htm";
objet["class"]["CATInterproxCrv"]=3;
objet["class"][3]="../FreeFormOperators/class_CATInterproxCrv_26854.htm";
objet["class"]["CATInterproxSur"]=4;
objet["class"][4]="../FreeFormOperators/class_CATInterproxSur_27029.htm";
objet["class"]["CATLiss"]=5;
objet["class"][5]="../FreeFormOperators/class_CATLiss_17834.htm";
objet["class"]["CATSurDegreeModification"]=6;
objet["class"][6]="../FreeFormOperators/class_CATSurDegreeModification_44175.htm";
objet["class"]["CATSurFittingToNurbsSur"]=7;
objet["class"][7]="../FreeFormOperators/class_CATSurFittingToNurbsSur_42031.htm";
objet["function"]["CATCreateCrvFittingToNurbsCrv"]=0;
objet["function"][0]="../FreeFormOperators/_function_CATCreateCrvFittingToNurbsCrv.htm";
objet["function"]["CATCreateInterproxCrv"]=1;
objet["function"][1]="../FreeFormOperators/function_CATCreateInterproxCrv_1287128.htm";
objet["function"]["CATCreateInterproxSur"]=2;
objet["function"][2]="../FreeFormOperators/function_CATCreateInterproxSur_1570469.htm";
objet["function"]["CATCreateLiss"]=3;
objet["function"][3]="../FreeFormOperators/function_CATCreateLiss_401943.htm";
objet["function"]["CATCreateSurFittingToNurbsSur"]=4;
objet["function"][4]="../FreeFormOperators/_function_CATCreateSurFittingToNurbsSur.htm";
objet["function"]["CATFrFCreateSmoothingOper"]=5;
objet["function"][5]="../FreeFormOperators/function_CATFrFCreateSmoothingOper_259961.htm";
objet["function"]["CreateConvertSurToNurbsSur"]=6;
objet["function"][6]="../FreeFormOperators/function_CreateConvertSurToNurbsSur_179421.htm";
objet["function"]["CreateCrvDegreeModification"]=7;
objet["function"][7]="../FreeFormOperators/_function_CreateCrvDegreeModification.htm";
objet["function"]["CreateInterproxCrv"]=8;
objet["function"][8]="../FreeFormOperators/function_CreateInterproxCrv_927001.htm";
objet["function"]["CreateInterproxSur"]=9;
objet["function"][9]="../FreeFormOperators/function_CreateInterproxSur_1167958.htm";
objet["function"]["CreateLiss"]=10;
objet["function"][10]="../FreeFormOperators/function_CreateLiss_215160.htm";
objet["function"]["CreateSurDegreeModification"]=11;
objet["function"][11]="../FreeFormOperators/_function_CreateSurDegreeModification.htm";
objet["define"]["NULL"]=12;
objet["define"][12]="../FreeFormOperators/_define_NULL.htm";
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