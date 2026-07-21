import{c as ae}from"./chunk-JQRUD6KW-Co9xriaI.js";import{l as ie}from"./cynefin-VYW2F7L2-2VAHYKR6-CNLAyuGB.js";import{v as re,m as n,s as le,c as R,a3 as se,M as ne,L as oe,a2 as de,a4 as pe,a5 as V,a6 as ce,o as he,d as ge,g as ue,l as me,b as fe,h as xe,n as we}from"./mermaid.esm.min-BmjKotSS.js";import"./app-lGSnxpLC.js";var _=re.pie,z={sections:new Map,showData:!1,config:_},k=z.sections,H=z.showData,$e=structuredClone(_),ve=n(()=>structuredClone($e),"getConfig"),Se=n(()=>{k=new Map,H=z.showData,le()},"clear"),be=n(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);k.has(e)||(k.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=n(()=>k,"getSections"),Ce=n(e=>{H=e},"setShowData"),ke=n(()=>H,"getShowData"),q={getConfig:ve,clear:Se,setDiagramTitle:ge,getDiagramTitle:ue,setAccTitle:me,getAccTitle:fe,setAccDescription:xe,getAccDescription:we,addSection:be,getSections:ye,setShowData:Ce,getShowData:ke},De=n((e,a)=>{ae(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Te={parse:n(async e=>{let a=await ie("pie",e);R.debug(a),De(a,q)},"parse")},Ae=n(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Me=Ae,Oe=n(e=>{let a=[...e.values()].reduce((d,g)=>d+g,0),B=[...e.entries()].map(([d,g])=>({label:d,value:g})).filter(d=>d.value/a*100>=1);return se().value(d=>d.value).sort(null)(B)},"createPieArcs"),Re=n((e,a,B,d)=>{var I;R.debug(`rendering pie chart
`+e);let g=d.db,F=ne(),u=oe(g.getConfig(),F.pie),L=40,r=18,o=4,w=450,$=w,D=de(a),b=D.append("g");b.attr("transform","translate("+$/2+","+w/2+")");let{themeVariables:l}=F,[P]=pe(l.pieOuterStrokeWidth);P??(P=2);let J=u.legendPosition,W=u.textPosition,K=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min($,w)/2-L,Q=V().innerRadius(K*m).outerRadius(m),U=V().innerRadius(m*W).outerRadius(m*W),v=b.append("g");v.append("circle").attr("cx",0).attr("cy",0).attr("r",m+P/2).attr("class","pieOuterCircle");let y=g.getSections(),X=Oe(y),Y=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12],T=0;y.forEach(t=>{T+=t});let E=X.filter(t=>(t.data.value/T*100).toFixed(0)!=="0"),A=ce(Y).domain([...y.keys()]);v.selectAll("mySlices").data(E).enter().append("path").attr("d",Q).attr("fill",t=>A(t.data.label)).attr("class",t=>{let i="pieCircle";return u.highlightSlice==="hover"?i+=" highlightedOnHover":u.highlightSlice===t.data.label&&(i+=" highlighted"),i}),v.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/T*100).toFixed(0)+"%").attr("transform",t=>"translate("+U.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let Z=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(w-50)/2).attr("class","pieTitleText"),S=[...y.entries()].map(([t,i])=>({label:t,value:i})),f=b.selectAll(".legend").data(S).enter().append("g").attr("class","legend");f.append("rect").attr("width",r).attr("height",r).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",r+o).attr("y",r-o).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let x=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),C=w,M=$+L,s=r+o,O=S.length*s;switch(J){case"center":f.attr("transform",(t,i)=>{let p=s*S.length/2,c=-x/2-(r+o),h=i*s-p;return"translate("+c+","+h+")"});break;case"top":C+=O,f.attr("transform",(t,i)=>{let p=m,c=-x/2-(r+o),h=i*s-p;return`translate(${c}, ${h})`}),v.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":C+=O,f.attr("transform",(t,i)=>{let p=-m-s,c=-x/2-(r+o),h=i*s-p;return"translate("+c+","+h+")"});break;case"left":M+=r+o+x,f.attr("transform",(t,i)=>{let p=s*S.length/2,c=-m-(r+o),h=i*s-p;return"translate("+c+","+h+")"}),v.attr("transform",()=>`translate(${x+r+o}, 0)`);break;case"right":default:M+=r+o+x,f.attr("transform",(t,i)=>{let p=s*S.length/2,c=12*r,h=i*s-p;return"translate("+c+","+h+")"});break}let N=((I=Z.node())==null?void 0:I.getBoundingClientRect().width)??0,ee=$/2-N/2,te=$/2+N/2,j=Math.min(0,ee),G=Math.max(M,te)-j;D.attr("viewBox",`${j} 0 ${G} ${C}`),he(D,C,G,u.useMaxWidth)},"draw"),ze={draw:Re},Pe={parser:Te,db:q,renderer:ze,styles:Me};export{Pe as diagram};
