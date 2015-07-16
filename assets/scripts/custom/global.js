function copyrightDate(){
wriYr = new Date();
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




  //###################################################################
  // Author: Ryan Gardner
  // Version: v1.0
  // Date: 2015-03-01
  // Description: displays the amount of time until the "dateFuture" entered below.

  var CDown = function() {
  this.state=0;// if initialized
  this.counts=[];// array holding countdown date objects and id to print to {d:new Date(2013,11,18,18,54,36), id:"countbox1"}
  this.interval=null;// setInterval object
  }

  CDown.prototype = {
  init: function(){
    this.state=1;
    var self=this;
    this.interval=window.setInterval(function(){self.tick();}, 25);
  },
  add: function(date,id){
    this.counts.push({d:date,id:id});
    this.tick();
    if(this.state==0) this.init();
  },
  expire: function(idxs){
    for(var x in idxs) {
      this.display(this.counts[idxs[x]], "NOW!");
      this.counts.splice(idxs[x], 1);
    }
  },
  format: function(r){
    var out="";
    out += r.d +" "+((r.d==1)?"day":"days")+", ";
    out += r.h +" "+((r.h==1)?"hour":"hours")+", ";
    out += r.m +" "+((r.m==1)?"min":"mins")+", ";
    out += r.s +("."+r.ms)+" "+((r.s==1)?"sec":"secs")+", ";

    return out.substr(0,out.length-2);
  },
  math: function(work){
    var	y=w=d=h=m=s=ms=0;

    ms=(""+((work%1000)+1000)).substr(1,3);
    work=Math.floor(work/1000);//kill the "milliseconds" so just secs

    y=Math.floor(work/31536000);//years (no leapyear support)
    w=Math.floor(work/604800);//weeks
    d=Math.floor(work/86400);//days
    work=work%86400;

    h=Math.floor(work/3600);//hours
    work=work%3600;

    m=Math.floor(work/60);//minutes
    work=work%60;

    s=Math.floor(work);//seconds

    return {y:y,w:w,d:d,h:h,m:m,s:s,ms:ms};
  },
  tick: function(){
    var now=(new Date()).getTime(),
      expired=[],cnt=0,amount=0;

    if(this.counts)
    for(var idx=0,n=this.counts.length; idx<n; ++idx){
      cnt=this.counts[idx];
      amount=cnt.d.getTime()-now;//calc milliseconds between dates

      // if time is already past
      if(amount<0){
        expired.push(idx);
      }
      // date is still good
      else{
        this.display(cnt, this.format(this.math(amount)));
      }
    }

    // deal with any expired
    if(expired.length>0) this.expire(expired);

    // if no active counts, stop updating
    if(this.counts.length==0) window.clearTimeout(this.interval);

  },
  display: function(cnt,msg){
    document.getElementById(cnt.id).innerHTML="Spook Hollow 2015 season starts in " +msg;
  }
  };
