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
objet["interface"]["Behavior"]=0;
objet["interface"][0]="../CATBehaviorInterfaces/interface_Behavior_28534.htm";
objet["interface"]["BehaviorExtension"]=1;
objet["interface"][1]="../CATBehaviorInterfaces/interface_BehaviorExtension_40147.htm";
objet["interface"]["BehaviorVBScript"]=2;
objet["interface"][2]="../CATBehaviorInterfaces/interface_BehaviorVBScript_37776.htm";
objet["interface"]["Behaviors"]=3;
objet["interface"][3]="../CATBehaviorInterfaces/interface_Behaviors_29454.htm";
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