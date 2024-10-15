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
objet["class"]["CATListPtrCATBaseUnknown"]=0;
objet["class"][0]="../ObjectModelerSystem/class_CATListPtrCATBaseUnknown_46989.htm";
objet["class"]["CORBAAny"]=1;
objet["class"][1]="../ObjectModelerSystem/class_CORBAAny_21769.htm";
objet["class"]["_SEQUENCE_CATBaseUnknown_ptr"]=2;
objet["class"][2]="../ObjectModelerSystem/class__SEQUENCE_CATBaseUnknown_ptr_56990.htm";
objet["class"]["_SEQUENCE_octet"]=3;
objet["class"][3]="../ObjectModelerSystem/class__SEQUENCE_octet_29257.htm";
objet["class"]["sequence"]=4;
objet["class"][4]="../ObjectModelerSystem/class_sequence_22169.htm";
objet["interface"]["CATInterfaceEvents"]=0;
objet["interface"][0]="../ObjectModelerSystem/interface_CATInterfaceEvents_37726.htm";
objet["interface"]["LifeCycleObject"]=1;
objet["interface"][1]="../ObjectModelerSystem/interface_LifeCycleObject_32446.htm";
objet["define"]["SEQUENCE"]=0;
objet["define"][0]="../ObjectModelerSystem/define_SEQUENCE_21731.htm";
objet["define"]["max"]=1;
objet["define"][1]="../ObjectModelerSystem/define_max_20031.htm";
objet["typedef"]["CATCallback"]=2;
objet["typedef"][2]="../ObjectModelerSystem/typedef_CATCallback_25727.htm";
objet["typedef"]["CATCallbackEvent"]=3;
objet["typedef"][3]="../ObjectModelerSystem/typedef_CATCallbackEvent_32495.htm";
objet["typedef"]["CATSubscriberData"]=4;
objet["typedef"][4]="../ObjectModelerSystem/typedef_CATSubscriberData_33967.htm";
objet["typedef"]["CATSubscriberMethod"]=5;
objet["typedef"][5]="../ObjectModelerSystem/typedef_CATSubscriberMethod_37939.htm";
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