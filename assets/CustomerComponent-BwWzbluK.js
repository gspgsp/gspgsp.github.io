import{_ as s,o as n,c as r,b as i}from"./app-Cl2rcTth.js";const l={name:"customer-component",data(){return{videolist:{autoplay:!1,controls:"controls",controlslist:"nodownload disablePictureInPicture"},webkitplaysinline:"true",playHistory:{resourceIndex:-1,currentFileIndex:-1,currenTime:0},videoPlayer:null,activeIndex:"0",currentResource:{}}},mounted(){this.querylist()},methods:{querylist(){this.$nextTick(()=>{this.initVideoplayer(),this.fileTimelengthRecord()})},initVideoplayer(){!this.videoPlayer&&this.$refs.video&&(this.videoPlayer=this.$refs.video,this.videoPlayer.addEventListener("timeupdate",e=>{sessionStorage.setItem("currentTime",this.videoPlayer.currentTime),sessionStorage.setItem("duration",this.videoPlayer.duration)}),this.videoPlayer.addEventListener("pause",e=>{}),this.videoPlayer.addEventListener("play",e=>{}),this.videoPlayer.addEventListener("ended",e=>{console.log(this.videoPlayer.currentTime,"ended 播放完成")}))},fileTimelengthRecord(){let e=sessionStorage.getItem("currentTime");sessionStorage.getItem("duration"),e>0?this.ifopen():this.videoPlayer.currentTime=0},ifopen(){this.$confirm("是否从上次的记录开始播放?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let e=sessionStorage.getItem("currentTime");this.videoPlayer.currentTime=e,this.videoPlayer.play()}).catch(()=>{this.videoPlayer.currentTime=0,this.videoPlayer.pause()})},open(e,o){sessionStorage.setItem("currentTime",0),sessionStorage.setItem("duration",0),this.activeIndex=o}}},a={class:"video_box"},d={class:"video_center"},c=["autoplay","controls","controlslist","webkit-playsinline"];function u(e,o,m,h,t,p){return n(),r("div",null,[i("div",a,[i("div",d,[i("video",{ref:"video",id:"video",src:"http://img.qinhongzs.com/video/2022-10-28%2021-37-00.mp4",poster:"http://img.qinhongzs.com/blog/base1.jpg",preload:"auto",autoplay:t.videolist.autoplay,controls:t.videolist.controls,controlslist:t.videolist.controlslist,"webkit-playsinline":t.webkitplaysinline,oncontextmenu:"return false",style:{width:"100%",height:"100%"}},null,8,c)])])])}const y=s(l,[["render",u],["__scopeId","data-v-f5ccab5f"],["__file","CustomerComponent.vue"]]);export{y as default};