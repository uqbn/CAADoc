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
objet["class"]["CATMathFoundationX"]=0;
objet["class"][0]="../AdvancedMathematics/class_CATMathFoundationX_34678.htm";
objet["class"]["CATMathFoundationXY"]=1;
objet["class"][1]="../AdvancedMathematics/class_CATMathFoundationXY_36280.htm";
objet["class"]["CATMathFunctionGeneral"]=2;
objet["class"][2]="../AdvancedMathematics/class_CATMathFunctionGeneral_42652.htm";
objet["class"]["CATMathFunctionX"]=3;
objet["class"][3]="../AdvancedMathematics/class_CATMathFunctionX_31229.htm";
objet["class"]["CATMathFunctionXY"]=4;
objet["class"][4]="../AdvancedMathematics/class_CATMathFunctionXY_32653.htm";
objet["class"]["CATMathInterval"]=5;
objet["class"][5]="../AdvancedMathematics/class_CATMathInterval_29872.htm";
objet["class"]["CATMathIntervalND"]=6;
objet["class"][6]="../AdvancedMathematics/class_CATMathIntervalND_32130.htm";
objet["class"]["CATMathPolynomX"]=7;
objet["class"][7]="../AdvancedMathematics/class_CATMathPolynomX_29805.htm";
objet["class"]["CATMathPolynomXY"]=8;
objet["class"][8]="../AdvancedMathematics/class_CATMathPolynomXY_31140.htm";
objet["class"]["CATMathSetOfPointsND"]=9;
objet["class"][9]="../AdvancedMathematics/class_CATMathSetOfPointsND_37359.htm";
objet["class"]["CATMathSetOfPointsNDTwoTangents"]=10;
objet["class"][10]="../AdvancedMathematics/class_CATMathSetOfPointsNDTwoTangents_66289.htm";
objet["class"]["CATMathSetOfPointsNDWithVectors"]=11;
objet["class"][11]="../AdvancedMathematics/class_CATMathSetOfPointsNDWithVectors_66407.htm";
objet["enum"]["CATMathDiagnostic"]=0;
objet["enum"][0]="../AdvancedMathematics/enum_CATMathDiagnostic_32587.htm";
objet["function"]["CATProjectPointOnSegmentND"]=1;
objet["function"][1]="../AdvancedMathematics/function_CATProjectPointOnSegmentND_226537.htm";
objet["function"]["CATScalarProductND"]=2;
objet["function"][2]="../AdvancedMathematics/function_CATScalarProductND_124020.htm";
objet["function"]["CATSquareDistanceND"]=3;
objet["function"][3]="../AdvancedMathematics/function_CATSquareDistanceND_76638.htm";
objet["function"]["IsMonotone"]=4;
objet["function"][4]="../AdvancedMathematics/function_IsMonotone_713942.htm";
objet["define"]["CATMathFunctionXTypeId"]=5;
objet["define"][5]="../AdvancedMathematics/define_CATMathFunctionXTypeId_42583.htm";
objet["define"]["CATMathFunctionXYTypeId"]=6;
objet["define"][6]="../AdvancedMathematics/define_CATMathFunctionXYTypeId_44598.htm";
objet["define"]["CATPolynomXR19NbStaticCoeff"]=7;
objet["define"][7]="../AdvancedMathematics/define_CATPolynomXR19NbStaticCoeff_52963.htm";
objet["define"]["CATPolynomXYR19NbStaticCoeff"]=8;
objet["define"][8]="../AdvancedMathematics/define_CATPolynomXYR19NbStaticCoeff_55405.htm";
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