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
objet["struct"]["CATFileInfo64"]=0;
objet["struct"][0]="../SpecialAPI/struct_CATFileInfo64_12233.htm";
objet["define"]["CATINT32ToPtr"]=1;
objet["define"][1]="../SpecialAPI/define_CATINT32ToPtr_12436.htm";
objet["define"]["CATLONG32ToPtr"]=2;
objet["define"][2]="../SpecialAPI/define_CATLONG32ToPtr_13451.htm";
objet["define"]["CATPtrToINT32"]=3;
objet["define"][3]="../SpecialAPI/define_CATPtrToINT32_11556.htm";
objet["define"]["CATPtrToLONG32"]=4;
objet["define"][4]="../SpecialAPI/define_CATPtrToLONG32_12411.htm";
objet["define"]["CATPtrToUINT32"]=5;
objet["define"][5]="../SpecialAPI/define_CATPtrToUINT32_12572.htm";
objet["define"]["CATPtrToULONG32"]=6;
objet["define"][6]="../SpecialAPI/define_CATPtrToULONG32_13496.htm";
objet["define"]["CATUINT32ToPtr"]=7;
objet["define"][7]="../SpecialAPI/define_CATUINT32ToPtr_13532.htm";
objet["define"]["CATULONG32ToPtr"]=8;
objet["define"][8]="../SpecialAPI/define_CATULONG32ToPtr_14616.htm";
objet["define"]["FAILED"]=9;
objet["define"][9]="../SpecialAPI/define_FAILED_6536.htm";
objet["define"]["NULL"]=10;
objet["define"][10]="../SpecialAPI/define_NULL_5946.htm";
objet["define"]["SUCCEEDED"]=11;
objet["define"][11]="../SpecialAPI/define_SUCCEEDED_7957.htm";
objet["typedef"]["BYTE"]=12;
objet["typedef"][12]="../SpecialAPI/typedef_BYTE_6545.htm";
objet["typedef"]["CATINT32"]=13;
objet["typedef"][13]="../SpecialAPI/typedef_CATINT32_7921.htm";
objet["typedef"]["CATINTPTR"]=14;
objet["typedef"][14]="../SpecialAPI/typedef_CATINTPTR_8989.htm";
objet["typedef"]["CATLONG"]=15;
objet["typedef"][15]="../SpecialAPI/typedef_CATLONG_7674.htm";
objet["typedef"]["CATLONG32"]=16;
objet["typedef"][16]="../SpecialAPI/typedef_CATLONG32_8431.htm";
objet["typedef"]["CATLONG64"]=17;
objet["typedef"][17]="../SpecialAPI/typedef_CATLONG64_8468.htm";
objet["typedef"]["CATLONGINT"]=18;
objet["typedef"][18]="../SpecialAPI/typedef_CATLONGINT_9565.htm";
objet["typedef"]["CATLONGPTR"]=19;
objet["typedef"][19]="../SpecialAPI/typedef_CATLONGPTR_9644.htm";
objet["typedef"]["CATUC2Bytes"]=20;
objet["typedef"][20]="../SpecialAPI/typedef_CATUC2Bytes_11317.htm";
objet["typedef"]["CATUINT32"]=21;
objet["typedef"][21]="../SpecialAPI/typedef_CATUINT32_8512.htm";
objet["typedef"]["CATUINTPTR"]=22;
objet["typedef"][22]="../SpecialAPI/typedef_CATUINTPTR_9725.htm";
objet["typedef"]["CATULONG32"]=23;
objet["typedef"][23]="../SpecialAPI/typedef_CATULONG32_9091.htm";
objet["typedef"]["CATULONG64"]=24;
objet["typedef"][24]="../SpecialAPI/typedef_CATULONG64_9133.htm";
objet["typedef"]["CATULONGINT"]=25;
objet["typedef"][25]="../SpecialAPI/typedef_CATULONGINT_10359.htm";
objet["typedef"]["CATULONGPTR"]=26;
objet["typedef"][26]="../SpecialAPI/typedef_CATULONGPTR_10449.htm";
objet["typedef"]["DWORD"]=27;
objet["typedef"][27]="../SpecialAPI/typedef_DWORD_6844.htm";
objet["typedef"]["HRESULT"]=28;
objet["typedef"][28]="../SpecialAPI/typedef_HRESULT_7774.htm";
objet["typedef"]["LONG"]=29;
objet["typedef"][29]="../SpecialAPI/typedef_LONG_6529.htm";
objet["typedef"]["ULONG"]=30;
objet["typedef"][30]="../SpecialAPI/typedef_ULONG_6833.htm";
objet["typedef"]["WORD"]=31;
objet["typedef"][31]="../SpecialAPI/typedef_WORD_6528.htm";
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