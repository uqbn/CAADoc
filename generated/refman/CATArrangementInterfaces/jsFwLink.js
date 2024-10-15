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
objet["class"]["CATEArrAppProductAdapter"]=0;
objet["class"][0]="../CATArrangementInterfaces/class_CATEArrAppProductAdapter_58042.htm";
objet["interface"]["CATIArrAppProduct"]=0;
objet["interface"][0]="../CATArrangementInterfaces/interface_CATIArrAppProduct_46373.htm";
objet["interface"]["CATIArrConnectorFactory"]=1;
objet["interface"][1]="../CATArrangementInterfaces/interface_CATIArrConnectorFactory_58898.htm";
objet["interface"]["CATIArrNode"]=2;
objet["interface"][2]="../CATArrangementInterfaces/interface_CATIArrNode_37693.htm";
objet["interface"]["CATIArrSegment"]=3;
objet["interface"][3]="../CATArrangementInterfaces/interface_CATIArrSegment_41694.htm";
objet["interface"]["CATIArrSegmentsString"]=4;
objet["interface"][4]="../CATArrangementInterfaces/interface_CATIArrSegmentsString_54383.htm";
objet["interface"]["CATIRouRadiusCornerSection"]=5;
objet["interface"][5]="../CATArrangementInterfaces/interface_CATIRouRadiusCornerSection_66108.htm";
objet["interface"]["CATIRouRectSection"]=6;
objet["interface"][6]="../CATArrangementInterfaces/interface_CATIRouRectSection_48110.htm";
objet["interface"]["CATIRouRoundSection"]=7;
objet["interface"][7]="../CATArrangementInterfaces/interface_CATIRouRoundSection_50117.htm";
objet["interface"]["CATIRouSection"]=8;
objet["interface"][8]="../CATArrangementInterfaces/interface_CATIRouSection_41777.htm";
objet["enum"]["CATArrAlignmentConnectorTypeEnum"]=0;
objet["enum"][0]="../CATArrangementInterfaces/enum_CATArrAlignmentConnectorTypeEnum_81013.htm";
objet["enum"]["CATArrFaceConnectorTypeEnum"]=1;
objet["enum"][1]="../CATArrangementInterfaces/enum_CATArrFaceConnectorTypeEnum_65525.htm";
objet["enum"]["CATArrOrientationConnectorTypeEnum"]=2;
objet["enum"][2]="../CATArrangementInterfaces/enum_CATArrOrientationConnectorTypeEnum_88023.htm";
objet["enum"]["CATRouNodeGeomStatus"]=3;
objet["enum"][3]="../CATArrangementInterfaces/enum_CATRouNodeGeomStatus_49109.htm";
objet["enum"]["CATRouSectionTypes"]=4;
objet["enum"][4]="../CATArrangementInterfaces/enum_CATRouSectionTypes_45537.htm";
objet["enum"]["CATRouSetPointNames"]=5;
objet["enum"][5]="../CATArrangementInterfaces/enum_CATRouSetPointNames_46892.htm";
objet["define"]["CatRouSectionFirst"]=6;
objet["define"][6]="../CATArrangementInterfaces/define_CatRouSectionFirst_46392.htm";
objet["define"]["CatRouSectionLast"]=7;
objet["define"][7]="../CATArrangementInterfaces/define_CatRouSectionLast_44417.htm";
objet["define"]["CatRouSetPointFirst"]=8;
objet["define"][8]="../CATArrangementInterfaces/define_CatRouSetPointFirst_48226.htm";
objet["define"]["CatRouSetPointLast"]=9;
objet["define"][9]="../CATArrangementInterfaces/define_CatRouSetPointLast_46135.htm";
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