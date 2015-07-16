function copyrightDate(){
wriYr = new Date
var doYr = wriYr.getFullYear()
document.write("<strong>&copy 1979 - " + doYr + "</strong>")
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// jspw3x.js version 1.4.12===1.0.0
var gJspw3Obj="",gJspw3nm=0;function massage(wi,hi,g,t,l,n,v,b,clo){wi-=0;if(t != '')t-=0;if(l != '')l-=0;if(!window.isOther){var isOther=(navigator.userAgent.toLowerCase().indexOf("firebird")!=-1)?'fb':'';if(!isOther && (navigator.appName.toLowerCase()=='netscape')&&(parseInt(navigator.appVersion)==4))isOther='n4';window.isOther=isOther;}else var isOther=window.isOther;if(isOther != 'n4' && screen.availHeight){var h=screen.availHeight-30-7;if(isOther=='fb')h-=22;var w=screen.availWidth-10;}else{var adj=10;var h=screen.height;var w=screen.width;if(w<740)h=0.90*h-adj;if(w>=740 & w<835)h=0.91*h-adj;if(w>=835)h=0.93*h-adj;w-=adj;}if(Math.abs(l)>w-100)l=(l/Math.abs(l))*(w-100);if(Math.abs(l)<1&&Math.abs(l)>0.001)l=l*w;if(Math.abs(t)>h-100)t=(t/Math.abs(t))*(h-100);if(Math.abs(t)<1&&Math.abs(t)>0.001)t=t*h;if(n&&v.length>2){n=(n=='js')?0:1;v=v.split('.')[0]*(v.split('.')[1]-0+n);if(v>0)v+=15;}else v=0;var cnh=(hi-0)+v+(clo-0);if(!b){var rw=1,rh=1;if(wi>w)rw=w/wi;if(cnh>h)rh=h/cnh;wi=wi*Math.min(rh,rw);cnh=cnh*Math.min(rh,rw);var rh=1,rw=1;if(cnh>h-Math.abs(t))rh=(h-Math.abs(t))/cnh;if(wi>w-Math.abs(l))rw=(w-Math.abs(l))/wi;cnh=cnh*Math.min(rh,rw);wi=wi*Math.min(rh,rw);}var wh=Math.max(Math.min((cnh-0+2*g),(h-Math.abs(t))),100);var ww=Math.max(Math.min((wi-0+2*g),(w-Math.abs(l))),100);var pt=(h-wh)/2;var pl=(w-ww)/2;if(t!=''){if(t>=0){pt=t;}else pt=h+t-wh;}if(l!=''){if(l>=0){pl=l;}else pl=w+l-ww;}	if(pt<0)pt=0;if(pt>h-wh)pt=h-wh;if(pl<0)pl=0;if(pl>w-ww)pl=w-ww;return [parseInt(ww),parseInt(wh),parseInt(pt),parseInt(pl),parseInt(wi),parseInt(cnh-v-(clo-0))]}

function jspw3(d,m,f){ //v1.4 
	f=f.split(',');var b=f[15],u=f[17],c=f[0],sl="_v_w_d_";var hr="jspw3_pop.htm?"+eval('escape(m.replace(/\\//g,sl))');var ret=massage(f[10],f[11],f[12],f[13],f[14],f[1],String(f[2]),b,f[6]);if(ret!=''){hr+=","+ret[0]+","+c+","+escape(f[1])+","+f[2]+","+escape(f[3])+","+escape(f[4])+","+f[6]+","+f[7]+","+f[8]+","+f[9]+","+ret[4]+","+ret[5]+","+f[16]+","+f[19]+","+eval('d.replace(/\\//g,sl)')+","+escape(f[5]);b=(b)?"yes":"no";var features="resizable=yes,scrollbars="+b+",width="+ret[0]+",height="+ret[1]+",top="+ret[2]+",left="+ret[3];if(u&&!c){window.open(hr,gJspw3nm++,features);}else{if(gJspw3Obj && typeof gJspw3Obj=='object' && !gJspw3Obj.closed)gJspw3Obj.close();gJspw3Obj=window.open(hr,gJspw3nm++,features);}}else window.open(m);document.MM_returnValue=(f[18]==3);}