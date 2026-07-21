import{m as o,p as rt,f as he,B as ie,s as fe,c as nt,M as ut,q as me,l as ye,b as ke,d as ge,g as pe,h as be,n as Te,i as $t,x as ve,V as xe,y as $e,o as we,Z as _e,Y as De,S as Se,A as Bt,C as Xt,E as qt,F as Qt,G as Ut,T as Jt,J as Zt,K as Ce,u as Me,Q as Ct,R as Ye,U as Ee,X as Le,_ as Oe,$ as Ae,a0 as Ie,a1 as Fe}from"./mermaid.esm.min-BmjKotSS.js";import"./app-lGSnxpLC.js";var We=Ct((t,s)=>{(function(n,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_isoWeek=e()})(t,function(){var n="day";return function(e,a,h){var b=o(function(Y){return Y.add(4-Y.isoWeekday(),n)},"a"),w=a.prototype;w.isoWeekYear=function(){return b(this).year()},w.isoWeek=function(Y){if(!this.$utils().u(Y))return this.add(7*(Y-this.isoWeek()),n);var S,P,I,N,G=b(this),z=(S=this.isoWeekYear(),P=this.$u,I=(P?h.utc:h)().year(S).startOf("year"),N=4-I.isoWeekday(),I.isoWeekday()>4&&(N+=7),I.add(N,n));return G.diff(z,"week")+1},w.isoWeekday=function(Y){return this.$utils().u(Y)?this.day()||7:this.day(this.day()%7?Y:Y-7)};var W=w.startOf;w.startOf=function(Y,S){var P=this.$utils(),I=!!P.u(S)||S;return P.p(Y)==="isoweek"?I?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):W.bind(this)(Y,S)}}})}),Pe=Ct((t,s)=>{(function(n,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_customParseFormat=e()})(t,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,b=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,W={},Y=o(function(y){return(y=+y)+(y>68?1900:2e3)},"a"),S=o(function(y){return function(_){this[y]=+_}},"f"),P=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var F=_.match(/([+-]|\d\d)/g),A=60*F[1]+(+F[2]||0);return A===0?0:F[0]==="+"?-A:A}(y)}],I=o(function(y){var _=W[y];return _&&(_.indexOf?_:_.s.concat(_.f))},"u"),N=o(function(y,_){var F,A=W.meridiem;if(A){for(var V=1;V<=24;V+=1)if(y.indexOf(A(V,0,_))>-1){F=V>12;break}}else F=y===(_?"pm":"PM");return F},"d"),G={A:[w,function(y){this.afternoon=N(y,!1)}],a:[w,function(y){this.afternoon=N(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[h,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[b,S("seconds")],ss:[b,S("seconds")],m:[b,S("minutes")],mm:[b,S("minutes")],H:[b,S("hours")],h:[b,S("hours")],HH:[b,S("hours")],hh:[b,S("hours")],D:[b,S("day")],DD:[h,S("day")],Do:[w,function(y){var _=W.ordinal,F=y.match(/\d+/);if(this.day=F[0],_)for(var A=1;A<=31;A+=1)_(A).replace(/\[|\]/g,"")===y&&(this.day=A)}],w:[b,S("week")],ww:[h,S("week")],M:[b,S("month")],MM:[h,S("month")],MMM:[w,function(y){var _=I("months"),F=(I("monthsShort")||_.map(function(A){return A.slice(0,3)})).indexOf(y)+1;if(F<1)throw new Error;this.month=F%12||F}],MMMM:[w,function(y){var _=I("months").indexOf(y)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,S("year")],YY:[h,function(y){this.year=Y(y)}],YYYY:[/\d{4}/,S("year")],Z:P,ZZ:P};function z(y){var _,F;_=y,F=W&&W.formats;for(var A=(y=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(m,p,g){var k=g&&g.toUpperCase();return p||F[g]||n[g]||F[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(r,u,d){return u||d.slice(1)})})).match(e),V=A.length,j=0;j<V;j+=1){var E=A[j],T=G[E],f=T&&T[0],C=T&&T[1];A[j]=C?{regex:f,parser:C}:E.replace(/^\[|\]$/g,"")}return function(m){for(var p={},g=0,k=0;g<V;g+=1){var r=A[g];if(typeof r=="string")k+=r.length;else{var u=r.regex,d=r.parser,v=m.slice(k),i=u.exec(v)[0];d.call(p,i),m=m.replace(i,"")}}return function(x){var c=x.afternoon;if(c!==void 0){var l=x.hours;c?l<12&&(x.hours+=12):l===12&&(x.hours=0),delete x.afternoon}}(p),p}}return o(z,"l"),function(y,_,F){F.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(Y=y.parseTwoDigitYear);var A=_.prototype,V=A.parse;A.parse=function(j){var E=j.date,T=j.utc,f=j.args;this.$u=T;var C=f[1];if(typeof C=="string"){var m=f[2]===!0,p=f[3]===!0,g=m||p,k=f[2];p&&(k=f[2]),W=this.$locale(),!m&&k&&(W=F.Ls[k]),this.$d=function(v,i,x,c){try{if(["x","X"].indexOf(i)>-1)return new Date((i==="X"?1e3:1)*v);var l=z(i)(v),$=l.year,M=l.month,O=l.day,L=l.hours,B=l.minutes,D=l.seconds,U=l.milliseconds,et=l.zone,ot=l.week,kt=new Date,gt=O||($||M?1:kt.getDate()),lt=$||kt.getFullYear(),H=0;$&&!M||(H=M>0?M-1:kt.getMonth());var it,J=L||0,X=B||0,Tt=D||0,st=U||0;return et?new Date(Date.UTC(lt,H,gt,J,X,Tt,st+60*et.offset*1e3)):x?new Date(Date.UTC(lt,H,gt,J,X,Tt,st)):(it=new Date(lt,H,gt,J,X,Tt,st),ot&&(it=c(it).week(ot).toDate()),it)}catch{return new Date("")}}(E,C,T,F),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),g&&E!=this.format(C)&&(this.$d=new Date("")),W={}}else if(C instanceof Array)for(var r=C.length,u=1;u<=r;u+=1){f[1]=C[u-1];var d=F.apply(this,f);if(d.isValid()){this.$d=d.$d,this.$L=d.$L,this.init();break}u===r&&(this.$d=new Date(""))}else V.call(this,j)}}})}),ze=Ct((t,s)=>{(function(n,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_advancedFormat=e()})(t,function(){return function(n,e){var a=e.prototype,h=a.format;a.format=function(b){var w=this,W=this.$locale();if(!this.isValid())return h.bind(this)(b);var Y=this.$utils(),S=(b||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(P){switch(P){case"Q":return Math.ceil((w.$M+1)/3);case"Do":return W.ordinal(w.$D);case"gggg":return w.weekYear();case"GGGG":return w.isoWeekYear();case"wo":return W.ordinal(w.week(),"W");case"w":case"ww":return Y.s(w.week(),P==="w"?1:2,"0");case"W":case"WW":return Y.s(w.isoWeek(),P==="W"?1:2,"0");case"k":case"kk":return Y.s(String(w.$H===0?24:w.$H),P==="k"?1:2,"0");case"X":return Math.floor(w.$d.getTime()/1e3);case"x":return w.$d.getTime();case"z":return"["+w.offsetName()+"]";case"zzz":return"["+w.offsetName("long")+"]";default:return P}});return h.bind(this)(S)}}})}),He=Ct((t,s)=>{(function(n,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_duration=e()})(t,function(){var n,e,a=1e3,h=6e4,b=36e5,w=864e5,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y=31536e6,S=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,I={years:Y,months:S,days:w,hours:b,minutes:h,seconds:a,milliseconds:1,weeks:6048e5},N=o(function(E){return E instanceof V},"c"),G=o(function(E,T,f){return new V(E,f,T.$l)},"f"),z=o(function(E){return e.p(E)+"s"},"m"),y=o(function(E){return E<0},"l"),_=o(function(E){return y(E)?Math.ceil(E):Math.floor(E)},"$"),F=o(function(E){return Math.abs(E)},"y"),A=o(function(E,T){return E?y(E)?{negative:!0,format:""+F(E)+T}:{negative:!1,format:""+E+T}:{negative:!1,format:""}},"v"),V=function(){function E(f,C,m){var p=this;if(this.$d={},this.$l=m,f===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return G(f*I[z(C)],this);if(typeof f=="number")return this.$ms=f,this.parseFromMilliseconds(),this;if(typeof f=="object")return Object.keys(f).forEach(function(r){p.$d[z(r)]=f[r]}),this.calMilliseconds(),this;if(typeof f=="string"){var g=f.match(P);if(g){var k=g.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}o(E,"l");var T=E.prototype;return T.calMilliseconds=function(){var f=this;this.$ms=Object.keys(this.$d).reduce(function(C,m){return C+(f.$d[m]||0)*I[m]},0)},T.parseFromMilliseconds=function(){var f=this.$ms;this.$d.years=_(f/Y),f%=Y,this.$d.months=_(f/S),f%=S,this.$d.days=_(f/w),f%=w,this.$d.hours=_(f/b),f%=b,this.$d.minutes=_(f/h),f%=h,this.$d.seconds=_(f/a),f%=a,this.$d.milliseconds=f},T.toISOString=function(){var f=A(this.$d.years,"Y"),C=A(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var p=A(m,"D"),g=A(this.$d.hours,"H"),k=A(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var u=A(r,"S"),d=f.negative||C.negative||p.negative||g.negative||k.negative||u.negative,v=g.format||k.format||u.format?"T":"",i=(d?"-":"")+"P"+f.format+C.format+p.format+v+g.format+k.format+u.format;return i==="P"||i==="-P"?"P0D":i},T.toJSON=function(){return this.toISOString()},T.format=function(f){var C=f||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return C.replace(W,function(p,g){return g||String(m[p])})},T.as=function(f){return this.$ms/I[z(f)]},T.get=function(f){var C=this.$ms,m=z(f);return m==="milliseconds"?C%=1e3:C=m==="weeks"?_(C/I[m]):this.$d[m],C||0},T.add=function(f,C,m){var p;return p=C?f*I[z(C)]:N(f)?f.$ms:G(f,this).$ms,G(this.$ms+p*(m?-1:1),this)},T.subtract=function(f,C){return this.add(f,C,!0)},T.locale=function(f){var C=this.clone();return C.$l=f,C},T.clone=function(){return G(this.$ms,this)},T.humanize=function(f){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!f)},T.valueOf=function(){return this.asMilliseconds()},T.milliseconds=function(){return this.get("milliseconds")},T.asMilliseconds=function(){return this.as("milliseconds")},T.seconds=function(){return this.get("seconds")},T.asSeconds=function(){return this.as("seconds")},T.minutes=function(){return this.get("minutes")},T.asMinutes=function(){return this.as("minutes")},T.hours=function(){return this.get("hours")},T.asHours=function(){return this.as("hours")},T.days=function(){return this.get("days")},T.asDays=function(){return this.as("days")},T.weeks=function(){return this.get("weeks")},T.asWeeks=function(){return this.as("weeks")},T.months=function(){return this.get("months")},T.asMonths=function(){return this.as("months")},T.years=function(){return this.get("years")},T.asYears=function(){return this.as("years")},E}(),j=o(function(E,T,f){return E.add(T.years()*f,"y").add(T.months()*f,"M").add(T.days()*f,"d").add(T.hours()*f,"h").add(T.minutes()*f,"m").add(T.seconds()*f,"s").add(T.milliseconds()*f,"ms")},"p");return function(E,T,f){n=f,e=f().$utils(),f.duration=function(p,g){var k=f.locale();return G(p,{$l:k},g)},f.isDuration=N;var C=T.prototype.add,m=T.prototype.subtract;T.prototype.add=function(p,g){return N(p)?j(this,p,1):C.bind(this)(p,g)},T.prototype.subtract=function(p,g){return N(p)?j(this,p,-1):m.bind(this)(p,g)}}})}),Et=function(){var t=o(function(k,r,u,d){for(u=u||{},d=k.length;d--;u[k[d]]=r);return u},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],e=[1,27],a=[1,28],h=[1,29],b=[1,30],w=[1,31],W=[1,32],Y=[1,33],S=[1,34],P=[1,9],I=[1,10],N=[1,11],G=[1,12],z=[1,13],y=[1,14],_=[1,15],F=[1,16],A=[1,19],V=[1,20],j=[1,21],E=[1,22],T=[1,23],f=[1,25],C=[1,35],m={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:o(function(k,r,u,d,v,i,x){var c=i.length-1;switch(v){case 1:return i[c-1];case 2:this.$=[];break;case 3:i[c-1].push(i[c]),this.$=i[c-1];break;case 4:case 5:this.$=i[c];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[c].substr(18);break;case 19:d.TopAxis(),this.$=i[c].substr(8);break;case 20:d.setAxisFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 21:d.setTickInterval(i[c].substr(13)),this.$=i[c].substr(13);break;case 22:d.setExcludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 23:d.setIncludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 24:d.setTodayMarker(i[c].substr(12)),this.$=i[c].substr(12);break;case 27:d.setDiagramTitle(i[c].substr(6)),this.$=i[c].substr(6);break;case 28:this.$=i[c].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[c].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[c].substr(8)),this.$=i[c].substr(8);break;case 33:d.addTask(i[c-1],i[c]),this.$="task";break;case 34:this.$=i[c-1],d.setClickEvent(i[c-1],i[c],null);break;case 35:this.$=i[c-2],d.setClickEvent(i[c-2],i[c-1],i[c]);break;case 36:this.$=i[c-2],d.setClickEvent(i[c-2],i[c-1],null),d.setLink(i[c-2],i[c]);break;case 37:this.$=i[c-3],d.setClickEvent(i[c-3],i[c-2],i[c-1]),d.setLink(i[c-3],i[c]);break;case 38:this.$=i[c-2],d.setClickEvent(i[c-2],i[c],null),d.setLink(i[c-2],i[c-1]);break;case 39:this.$=i[c-3],d.setClickEvent(i[c-3],i[c-1],i[c]),d.setLink(i[c-3],i[c-2]);break;case 40:this.$=i[c-1],d.setLink(i[c-1],i[c]);break;case 41:case 47:this.$=i[c-1]+" "+i[c];break;case 42:case 43:case 45:this.$=i[c-2]+" "+i[c-1]+" "+i[c];break;case 44:case 46:this.$=i[c-3]+" "+i[c-2]+" "+i[c-1]+" "+i[c];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:e,14:a,15:h,16:b,17:w,18:W,19:18,20:Y,21:S,22:P,23:I,24:N,25:G,26:z,27:y,28:_,29:F,30:A,31:V,33:j,35:E,36:T,37:24,38:f,40:C},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:36,11:17,12:n,13:e,14:a,15:h,16:b,17:w,18:W,19:18,20:Y,21:S,22:P,23:I,24:N,25:G,26:z,27:y,28:_,29:F,30:A,31:V,33:j,35:E,36:T,37:24,38:f,40:C},t(s,[2,5]),t(s,[2,6]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),t(s,[2,25]),t(s,[2,26]),t(s,[2,27]),{32:[1,37]},{34:[1,38]},t(s,[2,30]),t(s,[2,31]),t(s,[2,32]),{39:[1,39]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),t(s,[2,15]),t(s,[2,16]),{41:[1,40],43:[1,41]},t(s,[2,4]),t(s,[2,28]),t(s,[2,29]),t(s,[2,33]),t(s,[2,34],{42:[1,42],43:[1,43]}),t(s,[2,40],{41:[1,44]}),t(s,[2,35],{43:[1,45]}),t(s,[2,36]),t(s,[2,38],{42:[1,46]}),t(s,[2,37]),t(s,[2,39])],defaultActions:{},parseError:o(function(k,r){if(r.recoverable)this.trace(k);else{var u=new Error(k);throw u.hash=r,u}},"parseError"),parse:o(function(k){var r=this,u=[0],d=[],v=[null],i=[],x=this.table,c="",l=0,$=0,M=0,O=2,L=1,B=i.slice.call(arguments,1),D=Object.create(this.lexer),U={yy:{}};for(var et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,et)&&(U.yy[et]=this.yy[et]);D.setInput(k,U.yy),U.yy.lexer=D,U.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var ot=D.yylloc;i.push(ot);var kt=D.options&&D.options.ranges;typeof U.yy.parseError=="function"?this.parseError=U.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function gt(q){u.length=u.length-2*q,v.length=v.length-q,i.length=i.length-q}o(gt,"popStack");function lt(){var q;return q=d.pop()||D.lex()||L,typeof q!="number"&&(q instanceof Array&&(d=q,q=d.pop()),q=r.symbols_[q]||q),q}o(lt,"lex");for(var H,it,J,X,Tt,st,ct={},vt,K,Vt,xt;;){if(J=u[u.length-1],this.defaultActions[J]?X=this.defaultActions[J]:((H===null||typeof H>"u")&&(H=lt()),X=x[J]&&x[J][H]),typeof X>"u"||!X.length||!X[0]){var Mt="";xt=[];for(vt in x[J])this.terminals_[vt]&&vt>O&&xt.push("'"+this.terminals_[vt]+"'");D.showPosition?Mt="Parse error on line "+(l+1)+`:
`+D.showPosition()+`
Expecting `+xt.join(", ")+", got '"+(this.terminals_[H]||H)+"'":Mt="Parse error on line "+(l+1)+": Unexpected "+(H==L?"end of input":"'"+(this.terminals_[H]||H)+"'"),this.parseError(Mt,{text:D.match,token:this.terminals_[H]||H,line:D.yylineno,loc:ot,expected:xt})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+H);switch(X[0]){case 1:u.push(H),v.push(D.yytext),i.push(D.yylloc),u.push(X[1]),H=null,it?(H=it,it=null):($=D.yyleng,c=D.yytext,l=D.yylineno,ot=D.yylloc,M>0);break;case 2:if(K=this.productions_[X[1]][1],ct.$=v[v.length-K],ct._$={first_line:i[i.length-(K||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(K||1)].first_column,last_column:i[i.length-1].last_column},kt&&(ct._$.range=[i[i.length-(K||1)].range[0],i[i.length-1].range[1]]),st=this.performAction.apply(ct,[c,$,l,U.yy,X[1],v,i].concat(B)),typeof st<"u")return st;K&&(u=u.slice(0,-1*K*2),v=v.slice(0,-1*K),i=i.slice(0,-1*K)),u.push(this.productions_[X[1]][0]),v.push(ct.$),i.push(ct._$),Vt=x[u[u.length-2]][u[u.length-1]],u.push(Vt);break;case 3:return!0}}return!0},"parse")},p=function(){var k={EOF:1,parseError:o(function(r,u){if(this.yy.parser)this.yy.parser.parseError(r,u);else throw new Error(r)},"parseError"),setInput:o(function(r,u){return this.yy=u||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var u=r.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:o(function(r){var u=r.length,d=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var v=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===v.length?this.yylloc.first_column:0)+v[v.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(r){this.unput(this.match.slice(r))},"less"),pastInput:o(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var r=this.pastInput(),u=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:o(function(r,u){var d,v,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),v=r[0].match(/(?:\r\n?|\n).*/g),v&&(this.yylineno+=v.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:v?v[v.length-1].length-v[v.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var x in i)this[x]=i[x];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,u,d,v;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),x=0;x<i.length;x++)if(d=this._input.match(this.rules[i[x]]),d&&(!u||d[0].length>u[0].length)){if(u=d,v=x,this.options.backtrack_lexer){if(r=this.test_match(d,i[x]),r!==!1)return r;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(r=this.test_match(u,i[v]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var r=this.next();return r||this.lex()},"lex"),begin:o(function(r){this.conditionStack.push(r)},"begin"),popState:o(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:o(function(r){this.begin(r)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(r,u,d,v){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return k}();m.lexer=p;function g(){this.yy={}}return o(g,"Parser"),g.prototype=m,m.Parser=g,new g}();Et.parser=Et;var Ne=Et,je=rt(he()),Q=rt(ie()),Re=rt(We()),Ge=rt(Pe()),Ve=rt(ze());Q.default.extend(Re.default);Q.default.extend(Ge.default);Q.default.extend(Ve.default);var Kt={friday:5,saturday:6},Z="",It="",Ft,Wt="",ft=[],mt=[],Pt=new Map,zt=[],Dt=[],yt="",Ht="",se=["active","done","crit","milestone","vert"],Nt=[],dt="",bt=!1,jt=!1,Rt="sunday",St="saturday",Lt=0,Be=o(function(){zt=[],Dt=[],yt="",Nt=[],wt=0,At=void 0,_t=void 0,R=[],Z="",It="",Ht="",Ft=void 0,Wt="",ft=[],mt=[],bt=!1,jt=!1,Lt=0,Pt=new Map,dt="",fe(),Rt="sunday",St="saturday"},"clear"),Xe=o(function(t){dt=t},"setDiagramId"),qe=o(function(t){It=t},"setAxisFormat"),Qe=o(function(){return It},"getAxisFormat"),Ue=o(function(t){Ft=t},"setTickInterval"),Je=o(function(){return Ft},"getTickInterval"),Ze=o(function(t){Wt=t},"setTodayMarker"),Ke=o(function(){return Wt},"getTodayMarker"),ti=o(function(t){Z=t},"setDateFormat"),ei=o(function(){bt=!0},"enableInclusiveEndDates"),ii=o(function(){return bt},"endDatesAreInclusive"),si=o(function(){jt=!0},"enableTopAxis"),ni=o(function(){return jt},"topAxisEnabled"),ri=o(function(t){Ht=t},"setDisplayMode"),ai=o(function(){return Ht},"getDisplayMode"),oi=o(function(){return Z},"getDateFormat"),ne=o((t,s)=>{let n=s.toLowerCase().split(/[\s,]+/).filter(e=>e!=="");return[...new Set([...t,...n])]},"mergeTokens"),li=o(function(t){ft=ne(ft,t)},"setIncludes"),ci=o(function(){return ft},"getIncludes"),di=o(function(t){mt=ne(mt,t)},"setExcludes"),ui=o(function(){return mt},"getExcludes"),hi=o(function(){return Pt},"getLinks"),fi=o(function(t){yt=t,zt.push(t)},"addSection"),mi=o(function(){return zt},"getSections"),yi=o(function(){let t=te(),s=10,n=0;for(;!t&&n<s;)t=te(),n++;return Dt=R,Dt},"getTasks"),re=o(function(t,s,n,e){let a=t.format(s.trim()),h=t.format("YYYY-MM-DD");return e.includes(a)||e.includes(h)?!1:n.includes("weekends")&&(t.isoWeekday()===Kt[St]||t.isoWeekday()===Kt[St]+1)||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(a)||n.includes(h)},"isInvalidDate"),ki=o(function(t){Rt=t},"setWeekday"),gi=o(function(){return Rt},"getWeekday"),pi=o(function(t){St=t},"setWeekend"),ae=o(function(t,s,n,e){if(!n.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,Q.default)(t.startTime):a=(0,Q.default)(t.startTime,s,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=(0,Q.default)(t.endTime):h=(0,Q.default)(t.endTime,s,!0);let[b,w]=bi(a,h,s,n,e);t.endTime=b.toDate(),t.renderEndTime=w},"checkTaskDates"),bi=o(function(t,s,n,e,a){let h=!1,b=null,w=s.add(1e4,"d");for(;t<=s;){if(h||(b=s.toDate()),h=re(t,n,e,a),h&&(s=s.add(1,"d"),s>w))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[s,b]},"fixTaskDates"),Ot=o(function(t,s,n){if(n=n.trim(),o(h=>{let b=h.trim();return b==="x"||b==="X"},"isTimestampFormat")(s)&&/^\d+$/.test(n))return new Date(Number(n));let e=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(e!==null){let h=null;for(let w of e.groups.ids.split(" ")){let W=at(w);W!==void 0&&(!h||W.endTime>h.endTime)&&(h=W)}if(h)return h.endTime;let b=new Date;return b.setHours(0,0,0,0),b}let a=(0,Q.default)(n,s.trim(),!0);if(a.isValid())return a.toDate();{nt.debug("Invalid date:"+n),nt.debug("With date format:"+s.trim());let h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),oe=o(function(t){let s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),le=o(function(t,s,n,e=!1){n=n.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(a!==null){let Y=null;for(let P of a.groups.ids.split(" ")){let I=at(P);I!==void 0&&(!Y||I.startTime<Y.startTime)&&(Y=I)}if(Y)return Y.startTime;let S=new Date;return S.setHours(0,0,0,0),S}let h=(0,Q.default)(n,s.trim(),!0);if(h.isValid())return e&&(h=h.add(1,"d")),h.toDate();let b=(0,Q.default)(t),[w,W]=oe(n);if(!Number.isNaN(w)){let Y=b.add(w,W);Y.isValid()&&(b=Y)}return b.toDate()},"getEndDate"),wt=0,ht=o(function(t){return t===void 0?(wt=wt+1,"task"+wt):t},"parseId"),Ti=o(function(t,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;let e=n.split(","),a={};Gt(e,a,se);for(let b=0;b<e.length;b++)e[b]=e[b].trim();let h="";switch(e.length){case 1:a.id=ht(),a.startTime=t.endTime,h=e[0];break;case 2:a.id=ht(),a.startTime=Ot(void 0,Z,e[0]),h=e[1];break;case 3:a.id=ht(e[0]),a.startTime=Ot(void 0,Z,e[1]),h=e[2];break}return h&&(a.endTime=le(a.startTime,Z,h,bt),a.manualEndTime=(0,Q.default)(h,"YYYY-MM-DD",!0).isValid(),ae(a,Z,mt,ft)),a},"compileData"),vi=o(function(t,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;let e=n.split(","),a={};Gt(e,a,se);for(let h=0;h<e.length;h++)e[h]=e[h].trim();switch(e.length){case 1:a.id=ht(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:e[0]};break;case 2:a.id=ht(),a.startTime={type:"getStartDate",startData:e[0]},a.endTime={data:e[1]};break;case 3:a.id=ht(e[0]),a.startTime={type:"getStartDate",startData:e[1]},a.endTime={data:e[2]};break}return a},"parseData"),At,_t,R=[],ce={},xi=o(function(t,s){let n={section:yt,type:yt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},e=vi(_t,s);n.raw.startTime=e.startTime,n.raw.endTime=e.endTime,n.id=e.id,n.prevTaskId=_t,n.active=e.active,n.done=e.done,n.crit=e.crit,n.milestone=e.milestone,n.vert=e.vert,n.vert?n.order=-1:(n.order=Lt,Lt++);let a=R.push(n);_t=n.id,ce[n.id]=a-1},"addTask"),at=o(function(t){let s=ce[t];return R[s]},"findTaskById"),$i=o(function(t,s){let n={section:yt,type:yt,description:t,task:t,classes:[]},e=Ti(At,s);n.startTime=e.startTime,n.endTime=e.endTime,n.id=e.id,n.active=e.active,n.done=e.done,n.crit=e.crit,n.milestone=e.milestone,n.vert=e.vert,At=n,Dt.push(n)},"addTaskOrg"),te=o(function(){let t=o(function(n){let e=R[n],a="";switch(R[n].raw.startTime.type){case"prevTaskEnd":{let h=at(e.prevTaskId);e.startTime=h.endTime;break}case"getStartDate":a=Ot(void 0,Z,R[n].raw.startTime.startData),a&&(R[n].startTime=a);break}return R[n].startTime&&(R[n].endTime=le(R[n].startTime,Z,R[n].raw.endTime.data,bt),R[n].endTime&&(R[n].processed=!0,R[n].manualEndTime=(0,Q.default)(R[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ae(R[n],Z,mt,ft))),R[n].processed},"compileTask"),s=!0;for(let[n,e]of R.entries())t(n),s=s&&e.processed;return s},"compileTasks"),wi=o(function(t,s){let n=s;ut().securityLevel!=="loose"&&(n=(0,je.sanitizeUrl)(s)),t.split(",").forEach(function(e){at(e)!==void 0&&(ue(e,()=>{window.open(n,"_self")}),Pt.set(e,n))}),de(t,"clickable")},"setLink"),de=o(function(t,s){t.split(",").forEach(function(n){let e=at(n);e!==void 0&&e.classes.push(s)})},"setClass"),_i=o(function(t,s,n){if(ut().securityLevel!=="loose"||s===void 0)return;let e=[];if(typeof n=="string"){e=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<e.length;a++){let h=e[a].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),e[a]=h}}e.length===0&&e.push(t),at(t)!==void 0&&ue(t,()=>{me.runFunc(s,...e)})},"setClickFun"),ue=o(function(t,s){Nt.push(function(){let n=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${n}"]`);e!==null&&e.addEventListener("click",function(){s()})},function(){let n=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${n}-text"]`);e!==null&&e.addEventListener("click",function(){s()})})},"pushFun"),Di=o(function(t,s,n){t.split(",").forEach(function(e){_i(e,s,n)}),de(t,"clickable")},"setClickEvent"),Si=o(function(t){Nt.forEach(function(s){s(t)})},"bindFunctions"),Ci={getConfig:o(()=>ut().gantt,"getConfig"),clear:Be,setDateFormat:ti,getDateFormat:oi,enableInclusiveEndDates:ei,endDatesAreInclusive:ii,enableTopAxis:si,topAxisEnabled:ni,setAxisFormat:qe,getAxisFormat:Qe,setTickInterval:Ue,getTickInterval:Je,setTodayMarker:Ze,getTodayMarker:Ke,setAccTitle:ye,getAccTitle:ke,setDiagramTitle:ge,getDiagramTitle:pe,setDiagramId:Xe,setDisplayMode:ri,getDisplayMode:ai,setAccDescription:be,getAccDescription:Te,addSection:fi,getSections:mi,getTasks:yi,addTask:xi,findTaskById:at,addTaskOrg:$i,setIncludes:li,getIncludes:ci,setExcludes:di,getExcludes:ui,setClickEvent:Di,setLink:wi,getLinks:hi,bindFunctions:Si,parseDuration:oe,isInvalidDate:re,setWeekday:ki,getWeekday:gi,setWeekend:pi};function Gt(t,s,n){let e=!0;for(;e;)e=!1,n.forEach(function(a){let h="^\\s*"+a+"\\s*$",b=new RegExp(h);t[0].match(b)&&(s[a]=!0,t.shift(1),e=!0)})}o(Gt,"getTaskTags");var pt=rt(ie()),Mi=rt(He());pt.default.extend(Mi.default);var Yi=o(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),ee={monday:Ye,tuesday:Ee,wednesday:Le,thursday:Oe,friday:Ae,saturday:Ie,sunday:Fe},Ei=o((t,s)=>{let n=[...t].map(()=>-1/0),e=[...t].sort((h,b)=>h.startTime-b.startTime||h.order-b.order),a=0;for(let h of e)for(let b=0;b<n.length;b++)if(h.startTime>=n[b]){n[b]=h.endTime,h.order=b+s,b>a&&(a=b);break}return a},"getMaxIntersections"),tt,Yt=1e4,Li=o(function(t,s,n,e){let a=ut().gantt;e.db.setDiagramId(s);let h=ut().securityLevel,b;h==="sandbox"&&(b=$t("#i"+s));let w=h==="sandbox"?$t(b.nodes()[0].contentDocument.body):$t("body"),W=h==="sandbox"?b.nodes()[0].contentDocument:document,Y=W.getElementById(s);tt=Y.parentElement.offsetWidth,tt===void 0&&(tt=1200),a.useWidth!==void 0&&(tt=a.useWidth);let S=e.db.getTasks(),P=S.filter(m=>!m.vert),I=[];for(let m of P)I.push(m.type);I=C(I);let N={},G=2*a.topPadding;if(e.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let m={};for(let g of P)m[g.section]===void 0?m[g.section]=[g]:m[g.section].push(g);let p=0;for(let g of Object.keys(m)){let k=Ei(m[g],p)+1;p+=k,G+=k*(a.barHeight+a.barGap),N[g]=k}}else{G+=P.length*(a.barHeight+a.barGap);for(let m of I)N[m]=P.filter(p=>p.type===m).length}Y.setAttribute("viewBox","0 0 "+tt+" "+G);let z=w.select(`[id="${s}"]`),y=ve().domain([xe(S,function(m){return m.startTime}),$e(S,function(m){return m.endTime})]).rangeRound([0,tt-a.leftPadding-a.rightPadding]);function _(m,p){let g=m.startTime,k=p.startTime,r=0;return g>k?r=1:g<k&&(r=-1),r}o(_,"taskCompare"),S.sort(_),F(S,tt,G),we(z,G,tt,a.useMaxWidth),z.append("text").text(e.db.getDiagramTitle()).attr("x",tt/2).attr("y",a.titleTopMargin).attr("class","titleText");function F(m,p,g){let k=a.barHeight,r=k+a.barGap,u=a.topPadding,d=a.leftPadding,v=_e().domain([0,I.length]).range(["#00B9FA","#F95002"]).interpolate(De);V(r,u,d,p,g,m,e.db.getExcludes(),e.db.getIncludes()),E(d,u,p,g),A(m,r,u,d,k,v,p),T(r,u),f(d,u,p,g)}o(F,"makeGantt");function A(m,p,g,k,r,u,d){m.sort((l,$)=>l.vert===$.vert?0:l.vert?1:-1);let v=m.filter(l=>!l.vert),i=[...new Set(v.map(l=>l.order))].map(l=>v.find($=>$.order===l));z.append("g").selectAll("rect").data(i).enter().append("rect").attr("x",0).attr("y",function(l,$){return $=l.order,$*p+g-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",p).attr("class",function(l){for(let[$,M]of I.entries())if(l.type===M)return"section section"+$%a.numberSectionStyles;return"section section0"}).enter();let x=z.append("g").selectAll("rect").data(m).enter(),c=e.db.getLinks();if(x.append("rect").attr("id",function(l){return s+"-"+l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?y(l.startTime)+k+.5*(y(l.endTime)-y(l.startTime))-.5*r:y(l.startTime)+k}).attr("y",function(l,$){return $=l.order,l.vert?a.gridLineStartPadding:$*p+g}).attr("width",function(l){return l.milestone?r:l.vert?.08*r:y(l.renderEndTime||l.endTime)-y(l.startTime)}).attr("height",function(l){return l.vert?v.length*(a.barHeight+a.barGap)+a.barHeight*2:r}).attr("transform-origin",function(l,$){return $=l.order,(y(l.startTime)+k+.5*(y(l.endTime)-y(l.startTime))).toString()+"px "+($*p+g+.5*r).toString()+"px"}).attr("class",function(l){let $="task",M="";l.classes.length>0&&(M=l.classes.join(" "));let O=0;for(let[B,D]of I.entries())l.type===D&&(O=B%a.numberSectionStyles);let L="";return l.active?l.crit?L+=" activeCrit":L=" active":l.done?l.crit?L=" doneCrit":L=" done":l.crit&&(L+=" crit"),L.length===0&&(L=" task"),l.milestone&&(L=" milestone "+L),l.vert&&(L=" vert "+L),L+=O,L+=" "+M,$+L}),x.append("text").attr("id",function(l){return s+"-"+l.id+"-text"}).text(function(l){return l.task}).attr("font-size",a.fontSize).attr("x",function(l){let $=y(l.startTime),M=y(l.renderEndTime||l.endTime);if(l.milestone&&($+=.5*(y(l.endTime)-y(l.startTime))-.5*r,M=$+r),l.vert)return y(l.startTime)+k;let O=this.getBBox().width;return O>M-$?M+O+1.5*a.leftPadding>d?$+k-5:M+k+5:(M-$)/2+$+k}).attr("y",function(l,$){return l.vert?a.gridLineStartPadding+v.length*(a.barHeight+a.barGap)+60:($=l.order,$*p+a.barHeight/2+(a.fontSize/2-2)+g)}).attr("text-height",r).attr("class",function(l){let $=y(l.startTime),M=y(l.endTime);l.milestone&&(M=$+r);let O=this.getBBox().width,L="";l.classes.length>0&&(L=l.classes.join(" "));let B=0;for(let[U,et]of I.entries())l.type===et&&(B=U%a.numberSectionStyles);let D="";return l.active&&(l.crit?D="activeCritText"+B:D="activeText"+B),l.done?l.crit?D=D+" doneCritText"+B:D=D+" doneText"+B:l.crit&&(D=D+" critText"+B),l.milestone&&(D+=" milestoneText"),l.vert&&(D+=" vertText"),O>M-$?M+O+1.5*a.leftPadding>d?L+" taskTextOutsideLeft taskTextOutside"+B+" "+D:L+" taskTextOutsideRight taskTextOutside"+B+" "+D+" width-"+O:L+" taskText taskText"+B+" "+D+" width-"+O}),ut().securityLevel==="sandbox"){let l;l=$t("#i"+s);let $=l.nodes()[0].contentDocument;x.filter(function(M){return c.has(M.id)}).each(function(M){var O=$.querySelector("#"+CSS.escape(s+"-"+M.id)),L=$.querySelector("#"+CSS.escape(s+"-"+M.id+"-text"));let B=O.parentNode;var D=$.createElement("a");D.setAttribute("xlink:href",c.get(M.id)),D.setAttribute("target","_top"),B.appendChild(D),D.appendChild(O),D.appendChild(L)})}}o(A,"drawRects");function V(m,p,g,k,r,u,d,v){if(d.length===0&&v.length===0)return;let i,x;for(let{startTime:O,endTime:L}of u)(i===void 0||O<i)&&(i=O),(x===void 0||L>x)&&(x=L);if(!i||!x)return;if((0,pt.default)(x).diff((0,pt.default)(i),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let c=e.db.getDateFormat(),l=[],$=null,M=(0,pt.default)(i);for(;M.valueOf()<=x;)e.db.isInvalidDate(M,c,d,v)?$?$.end=M:$={start:M,end:M}:$&&(l.push($),$=null),M=M.add(1,"d");z.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",O=>s+"-exclude-"+O.start.format("YYYY-MM-DD")).attr("x",O=>y(O.start.startOf("day"))+g).attr("y",a.gridLineStartPadding).attr("width",O=>y(O.end.endOf("day"))-y(O.start.startOf("day"))).attr("height",r-p-a.gridLineStartPadding).attr("transform-origin",function(O,L){return(y(O.start)+g+.5*(y(O.end)-y(O.start))).toString()+"px "+(L*m+.5*r).toString()+"px"}).attr("class","exclude-range")}o(V,"drawExcludeDays");function j(m,p,g,k){if(g<=0||m>p)return 1/0;let r=p-m,u=pt.default.duration({[k??"day"]:g}).asMilliseconds();return u<=0?1/0:Math.ceil(r/u)}o(j,"getEstimatedTickCount");function E(m,p,g,k){let r=e.db.getDateFormat(),u=e.db.getAxisFormat(),d;u?d=u:r==="D"?d="%d":d=a.axisFormat??"%Y-%m-%d";let v=Se(y).tickSize(-k+p+a.gridLineStartPadding).tickFormat(Bt(d)),i=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(e.db.getTickInterval()||a.tickInterval);if(i!==null){let x=parseInt(i[1],10);if(isNaN(x)||x<=0)nt.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{let c=i[2],l=e.db.getWeekday()||a.weekday,$=y.domain(),M=$[0],O=$[1],L=j(M,O,x,c);if(L>Yt)nt.warn(`The tick interval "${x}${c}" would generate ${L} ticks, which exceeds the maximum allowed (${Yt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":v.ticks(Zt.every(x));break;case"second":v.ticks(Jt.every(x));break;case"minute":v.ticks(Ut.every(x));break;case"hour":v.ticks(Qt.every(x));break;case"day":v.ticks(qt.every(x));break;case"week":v.ticks(ee[l].every(x));break;case"month":v.ticks(Xt.every(x));break}}}if(z.append("g").attr("class","grid").attr("transform","translate("+m+", "+(k-50)+")").call(v).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),e.db.topAxisEnabled()||a.topAxis){let x=Ce(y).tickSize(-k+p+a.gridLineStartPadding).tickFormat(Bt(d));if(i!==null){let c=parseInt(i[1],10);if(isNaN(c)||c<=0)nt.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{let l=i[2],$=e.db.getWeekday()||a.weekday,M=y.domain(),O=M[0],L=M[1];if(j(O,L,c,l)<=Yt)switch(l){case"millisecond":x.ticks(Zt.every(c));break;case"second":x.ticks(Jt.every(c));break;case"minute":x.ticks(Ut.every(c));break;case"hour":x.ticks(Qt.every(c));break;case"day":x.ticks(qt.every(c));break;case"week":x.ticks(ee[$].every(c));break;case"month":x.ticks(Xt.every(c));break}}}z.append("g").attr("class","grid").attr("transform","translate("+m+", "+p+")").call(x).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}o(E,"makeGrid");function T(m,p){let g=0,k=Object.keys(N).map(r=>[r,N[r]]);z.append("g").selectAll("text").data(k).enter().append(function(r){let u=r[0].split(Me.lineBreakRegex),d=-(u.length-1)/2,v=W.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("dy",d+"em");for(let[i,x]of u.entries()){let c=W.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttribute("alignment-baseline","central"),c.setAttribute("x","10"),i>0&&c.setAttribute("dy","1em"),c.textContent=x,v.appendChild(c)}return v}).attr("x",10).attr("y",function(r,u){if(u>0)for(let d=0;d<u;d++)return g+=k[u-1][1],r[1]*m/2+g*m+p;else return r[1]*m/2+p}).attr("font-size",a.sectionFontSize).attr("class",function(r){for(let[u,d]of I.entries())if(r[0]===d)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}o(T,"vertLabels");function f(m,p,g,k){let r=e.db.getTodayMarker();if(r==="off")return;let u=z.append("g").attr("class","today"),d=new Date,v=u.append("line");v.attr("x1",y(d)+m).attr("x2",y(d)+m).attr("y1",a.titleTopMargin).attr("y2",k-a.titleTopMargin).attr("class","today"),r!==""&&v.attr("style",r.replace(/,/g,";"))}o(f,"drawToday");function C(m){let p={},g=[];for(let k=0,r=m.length;k<r;++k)Object.prototype.hasOwnProperty.call(p,m[k])||(p[m[k]]=!0,g.push(m[k]));return g}o(C,"checkUnique")},"draw"),Oi={setConf:Yi,draw:Li},Ai=o(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Ii=Ai,Pi={parser:Ne,db:Ci,renderer:Oi,styles:Ii};export{Pi as diagram};
