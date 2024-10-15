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
objet["interface"]["SfmConnectionParameters"]=0;
objet["interface"][0]="../CATStrFunctionalInterfaces/interface_SfmConnectionParameters_64240.htm";
objet["interface"]["SfmEndcut"]=1;
objet["interface"][1]="../CATStrFunctionalInterfaces/interface_SfmEndcut_41260.htm";
objet["interface"]["SfmEndcutManager"]=2;
objet["interface"][2]="../CATStrFunctionalInterfaces/interface_SfmEndcutManager_49760.htm";
objet["interface"]["SfmFactory"]=3;
objet["interface"][3]="../CATStrFunctionalInterfaces/interface_SfmFactory_42339.htm";
objet["interface"]["SfmFunctionFactory"]=4;
objet["interface"][4]="../CATStrFunctionalInterfaces/interface_SfmFunctionFactory_53736.htm";
objet["interface"]["SfmManager"]=5;
objet["interface"][5]="../CATStrFunctionalInterfaces/interface_SfmManager_42078.htm";
objet["interface"]["SfmMember"]=6;
objet["interface"][6]="../CATStrFunctionalInterfaces/interface_SfmMember_41159.htm";
objet["interface"]["SfmMember2Points"]=7;
objet["interface"][7]="../CATStrFunctionalInterfaces/interface_SfmMember2Points_49669.htm";
objet["interface"]["SfmMemberCurve"]=8;
objet["interface"][8]="../CATStrFunctionalInterfaces/interface_SfmMemberCurve_46915.htm";
objet["interface"]["SfmMemberPlane2Curves"]=9;
objet["interface"][9]="../CATStrFunctionalInterfaces/interface_SfmMemberPlane2Curves_58517.htm";
objet["interface"]["SfmMemberPointLength"]=10;
objet["interface"][10]="../CATStrFunctionalInterfaces/interface_SfmMemberPointLength_57126.htm";
objet["interface"]["SfmMemberPointUpToLimit"]=11;
objet["interface"][11]="../CATStrFunctionalInterfaces/interface_SfmMemberPointUpToLimit_63373.htm";
objet["interface"]["SfmMemberSurfSurf"]=12;
objet["interface"][12]="../CATStrFunctionalInterfaces/interface_SfmMemberSurfSurf_51613.htm";
objet["interface"]["SfmObject"]=13;
objet["interface"][13]="../CATStrFunctionalInterfaces/interface_SfmObject_41158.htm";
objet["interface"]["SfmOpening"]=14;
objet["interface"][14]="../CATStrFunctionalInterfaces/interface_SfmOpening_42164.htm";
objet["interface"]["SfmOpeningContoursMgr"]=15;
objet["interface"][15]="../CATStrFunctionalInterfaces/interface_SfmOpeningContoursMgr_59594.htm";
objet["interface"]["SfmOperationFactory"]=16;
objet["interface"][16]="../CATStrFunctionalInterfaces/interface_SfmOperationFactory_55637.htm";
objet["interface"]["SfmPositioningStrategyManager"]=17;
objet["interface"][17]="../CATStrFunctionalInterfaces/interface_SfmPositioningStrategyManager_79796.htm";
objet["interface"]["SfmProfile"]=18;
objet["interface"][18]="../CATStrFunctionalInterfaces/interface_SfmProfile_42143.htm";
objet["interface"]["SfmReferences"]=19;
objet["interface"][19]="../CATStrFunctionalInterfaces/interface_SfmReferences_45615.htm";
objet["interface"]["SfmSlot"]=20;
objet["interface"][20]="../CATStrFunctionalInterfaces/interface_SfmSlot_39704.htm";
objet["interface"]["SfmSlots"]=21;
objet["interface"][21]="../CATStrFunctionalInterfaces/interface_SfmSlots_40509.htm";
objet["interface"]["SfmStandardContourParameters"]=22;
objet["interface"][22]="../CATStrFunctionalInterfaces/interface_SfmStandardContourParameters_77429.htm";
objet["interface"]["SfmStandardOpening"]=23;
objet["interface"][23]="../CATStrFunctionalInterfaces/interface_SfmStandardOpening_53284.htm";
objet["interface"]["SfmStandardPosStrategyParameters"]=24;
objet["interface"][24]="../CATStrFunctionalInterfaces/interface_SfmStandardPosStrategyParameters_89697.htm";
objet["interface"]["SfmStiffener"]=25;
objet["interface"][25]="../CATStrFunctionalInterfaces/interface_SfmStiffener_44398.htm";
objet["interface"]["SfmSuperPlate"]=26;
objet["interface"][26]="../CATStrFunctionalInterfaces/interface_SfmSuperPlate_45523.htm";
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