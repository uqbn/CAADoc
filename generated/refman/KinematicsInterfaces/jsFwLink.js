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
objet["interface"]["CATIKinCmd"]=0;
objet["interface"][0]="../KinematicsInterfaces/interface_CATIKinCmd_27688.htm";
objet["interface"]["CATIKinJoint"]=1;
objet["interface"][1]="../KinematicsInterfaces/interface_CATIKinJoint_30174.htm";
objet["interface"]["CATIKinMechanism"]=2;
objet["interface"][2]="../KinematicsInterfaces/interface_CATIKinMechanism_35722.htm";
objet["interface"]["CATIKinMechanismFactory"]=3;
objet["interface"][3]="../KinematicsInterfaces/interface_CATIKinMechanismFactory_49753.htm";
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