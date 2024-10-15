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
objet["class"]["CATColIMergeableAdapter"]=0;
objet["class"][0]="../CATInstantCollabDesignCAAItf/class_CATColIMergeableAdapter_62054.htm";
objet["class"]["CATColISharableAdapter"]=1;
objet["class"][1]="../CATInstantCollabDesignCAAItf/class_CATColISharableAdapter_59857.htm";
objet["class"]["CATCollabLocalInfo"]=2;
objet["class"][2]="../CATInstantCollabDesignCAAItf/class_CATCollabLocalInfo_51827.htm";
objet["class"]["CATCollabWsInfo"]=3;
objet["class"][3]="../CATInstantCollabDesignCAAItf/class_CATCollabWsInfo_47121.htm";
objet["interface"]["CATIColId"]=0;
objet["interface"][0]="../CATInstantCollabDesignCAAItf/interface_CATIColId_42477.htm";
objet["interface"]["CATIColInvariantId"]=1;
objet["interface"][1]="../CATInstantCollabDesignCAAItf/interface_CATIColInvariantId_54512.htm";
objet["interface"]["CATIColMergeContextTable"]=2;
objet["interface"][2]="../CATInstantCollabDesignCAAItf/interface_CATIColMergeContextTable_67244.htm";
objet["interface"]["CATIColMergeItem"]=3;
objet["interface"][3]="../CATInstantCollabDesignCAAItf/interface_CATIColMergeItem_51113.htm";
objet["interface"]["CATIColMergeable"]=4;
objet["interface"][4]="../CATInstantCollabDesignCAAItf/interface_CATIColMergeable_51145.htm";
objet["interface"]["CATIColSharable"]=5;
objet["interface"][5]="../CATInstantCollabDesignCAAItf/interface_CATIColSharable_49653.htm";
objet["interface"]["CATICollabServices"]=6;
objet["interface"][6]="../CATInstantCollabDesignCAAItf/interface_CATICollabServices_54949.htm";
objet["enum"]["CATIColMergeContextFlag"]=0;
objet["enum"][0]="../CATInstantCollabDesignCAAItf/enum_CATIColMergeContextFlag_61721.htm";
objet["enum"]["CATIColMergeContextRole"]=1;
objet["enum"][1]="../CATInstantCollabDesignCAAItf/enum_CATIColMergeContextRole_62196.htm";
objet["function"]["CATColAfterMerge"]=2;
objet["function"][2]="../CATInstantCollabDesignCAAItf/function_CATColAfterMerge_223119.htm";
objet["function"]["CATColBeforeMerge"]=3;
objet["function"][3]="../CATInstantCollabDesignCAAItf/function_CATColBeforeMerge_439571.htm";
objet["function"]["CATColCanBeSharedAs"]=4;
objet["function"][4]="../CATInstantCollabDesignCAAItf/function_CATColCanBeSharedAs_171666.htm";
objet["function"]["CATColComputeMergeFlagFromContext"]=5;
objet["function"][5]="../CATInstantCollabDesignCAAItf/function_CATColComputeMergeFlagFromContext_506469.htm";
objet["function"]["CATColGetAllSharableObjects"]=6;
objet["function"][6]="../CATInstantCollabDesignCAAItf/function_CATColGetAllSharableObjects_199261.htm";
objet["function"]["CATColGetMergeContextTable"]=7;
objet["function"][7]="../CATInstantCollabDesignCAAItf/function_CATColGetMergeContextTable_182507.htm";
objet["function"]["CATColGetShareAccess"]=8;
objet["function"][8]="../CATInstantCollabDesignCAAItf/function_CATColGetShareAccess_181410.htm";
objet["function"]["CATColIsSharable"]=9;
objet["function"][9]="../CATInstantCollabDesignCAAItf/function_CATColIsSharable_75193.htm";
objet["function"]["CATColListAvailableShareMode"]=10;
objet["function"][10]="../CATInstantCollabDesignCAAItf/function_CATColListAvailableShareMode_167452.htm";
objet["function"]["CATColMerge"]=11;
objet["function"][11]="../CATInstantCollabDesignCAAItf/function_CATColMerge_136414.htm";
objet["function"]["CATColShareAs"]=12;
objet["function"][12]="../CATInstantCollabDesignCAAItf/function_CATColShareAs_435201.htm";
objet["function"]["CATCreateCATICollabServices"]=13;
objet["function"][13]="../CATInstantCollabDesignCAAItf/function_CATCreateCATICollabServices_102783.htm";
objet["define"]["CATLISTP_APPLY_RELEASE"]=14;
objet["define"][14]="../CATInstantCollabDesignCAAItf/define_CATLISTP_APPLY_RELEASE_54982.htm";
objet["define"]["SizeCollabUUID"]=15;
objet["define"][15]="../CATInstantCollabDesignCAAItf/define_SizeCollabUUID_45196.htm";
objet["typedef"]["CATListOfShareAccess"]=16;
objet["typedef"][16]="../CATInstantCollabDesignCAAItf/typedef_CATListOfShareAccess_56721.htm";
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