import{r,h as t,n as o,c as i,H as e}from"./p-6b9905f8.js";import{l as s,p,t as a,a as l,i as n}from"./p-52cc8856.js";import{r as d,s as _,a as h}from"./p-9edb44a5.js";const c=class{constructor(e){r(this,e),this.player=void 0,this.config=void 0,this.direction=void 0,this.youtube=void 0,this.currentTime=void 0,this.duration=void 0,this.ended=void 0}componentWillLoad(){this.player&&(this.player.on("ended",(()=>this.setEnded())),this.player.on("timeupdate",(r=>this.setCurrentTime(r))))}setEnded(){this.ended=!0}setCurrentTime(r){var e,t;this.currentTime=null===(e=null==r?void 0:r.detail)||void 0===e?void 0:e.plyr.currentTime,this.duration=null===(t=null==r?void 0:r.detail)||void 0===t?void 0:t.plyr.duration}disconnectedCallback(){this.player&&(this.player.off("ended",this.setEnded),this.player.off("timeupdate",this.setCurrentTime))}render(){return t("presto-action-bar-controller",{ended:this.ended,config:this.config,currentTime:this.currentTime,duration:this.duration,direction:this.direction,youtube:this.youtube})}get el(){return o(this)}};c.style=":host{display:block}";const y=class{constructor(e){r(this,e),this.playVideo=i(this,"playVideo",7),this.pauseVideo=i(this,"pauseVideo",7),this.getRef=void 0,this.autoplay=void 0,this.src=void 0,this.preload=void 0,this.poster=void 0,this.player=void 0,this.preset=void 0,this.tracks=void 0,this.provider=void 0,this.mediaTitle=void 0,this.audioAttributes=void 0,this.width=void 0}renderPosterImage(){if(this.poster)return t("div",{class:"presto-audio__poster"},t("img",{src:this.poster}))}hasPosterArea(){var r;return!!this.poster||!!(null===(r=this.preset)||void 0===r?void 0:r["play-large"])}renderMobilePoster(){var r;return t("div",{class:"presto-audio__poster-wrapper-mobile"},!!(null===(r=this.preset)||void 0===r?void 0:r["play-large"])&&this.renderLargePlay("presto-audio__large-play-button is-relative"),t("div",{class:"presto-audio__mobile-title"},this.mediaTitle))}renderLargePlay(r="presto-audio__large-play-button"){return t("div",{class:r,onClick:()=>{this.player.playing?this.pauseVideo.emit():this.playVideo.emit()}},t("svg",{class:"presto-audio__icon-play",width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M15.5588 9.00005L0.117662 17.915L0.117662 0.0850823L15.5588 9.00005Z"})),t("svg",{class:"presto-audio__icon-pause",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("rect",{width:"5",height:"17"}),t("rect",{x:"12",width:"5",height:"17"})))}componentDidLoad(){"ResizeObserver"in window&&new ResizeObserver((r=>{r.forEach((r=>this.width=r.contentRect.width))})).observe(this.el)}render(){var r,e,o,i,a;return t("div",{ref:r=>this.el=r,class:{"presto-audio__wrapper":!0,"has-poster":!!this.poster,"has-play-large":!!(null===(r=this.preset)||void 0===r?void 0:r["play-large"]),"is-playing":null===(e=this.player)||void 0===e?void 0:e.playing,"has-light-background":"light"===s(null===(o=this.preset)||void 0===o?void 0:o.background_color),"has-dark-background":"dark"===s(null===(i=this.preset)||void 0===i?void 0:i.background_color),"breakpoint-small":this.width<520,"skin-stacked":this.width<520,"breakpoint-large":this.width>=520}},this.hasPosterArea()&&t("div",{class:"presto-audio__poster-wrapper"},!!(null===(a=this.preset)||void 0===a?void 0:a["play-large"])&&t("div",{class:"presto-audio__large-play-wrapper"},this.renderLargePlay()),this.renderPosterImage()),this.hasPosterArea()&&this.renderMobilePoster(),t("div",{class:"presto-audio__controls-wrapper"},t("div",{class:"presto-audio__title"},this.mediaTitle),t("audio",Object.assign({part:"audio-player",ref:this.getRef,autoplay:this.autoplay,preload:this.preload,"data-poster":this.poster},this.audioAttributes),t("source",{src:this.src}),!!this.tracks&&!!this.tracks.length&&this.tracks.map((r=>t("track",{kind:"captions",label:(null==r?void 0:r.label)?r.label:"Captions",src:null==r?void 0:r.src,srclang:(null==r?void 0:r.srcLang)?null==r?void 0:r.srcLang:"en"}))))))}};y.style=":host{display:block}.presto-audio__wrapper{border-radius:var(--presto-player-border-radius, 0px)}.presto-audio__wrapper .plyr--audio .plyr__controls{padding:0}.presto-audio__wrapper .plyr--audio .plyr__control.plyr__tab-focus,.presto-audio__wrapper .plyr--audio .plyr__control:hover,.presto-audio__wrapper .plyr--audio .plyr__control[aria-expanded=true]{background:var(--plyr-audio-controls-background);color:var(--plyr-audio-control-color)}.presto-audio__wrapper{display:flex;background:var(--plyr-audio-controls-background, #fff)}.presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 2);flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.has-poster .presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 3)}.has-play-large:not(.has-poster) .presto-audio__controls-wrapper{padding-left:0}.presto-audio__title,.presto-audio__mobile-title{font-size:18px;font-weight:500;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--plyr-audio-control-color)}.presto-audio__title{margin:calc(var(--plyr-control-spacing, 10px) / 2);margin-top:0}.presto-audio__poster-wrapper{position:relative;width:100px;min-height:100px;flex:0 0 100px}.presto-audio__poster-wrapper img{border-radius:var(--presto-player-border-radius, 0px) 0 0 var(--presto-player-border-radius, 0px);width:100%;height:100%;object-fit:cover;aspect-ratio:1;display:block}.has-poster .presto-audio__poster-wrapper{width:140px;height:140px;flex:0 0 140px}.presto-audio__poster{width:100%;height:100%}.presto-audio__large-play-button{user-select:none;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:50px;height:50px;color:white;border-radius:100%;background:var(--plyr-audio-control-color);color:var(--plyr-audio-controls-background)}.presto-audio__large-play-button.is-relative{position:relative;top:auto;left:auto;transform:none}.has-light-background.has-poster .presto-audio__large-play-button{background:var(--plyr-audio-controls-background);color:var(--plyr-audio-control-color)}.has-dark-background.has-poster .presto-audio__large-play-button{background:var(--plyr-audio-control-color);color:var(--plyr-audio-controls-background)}.presto-audio__icon-play,.presto-audio__icon-pause{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);fill:currentColor;display:block;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;margin:0 auto;text-align:center}.presto-audio__icon-pause{opacity:0;visibility:hidden}.presto-audio__wrapper.is-playing .presto-audio__icon-pause{opacity:1;visibility:visible}.presto-audio__icon-play{margin-left:2px;opacity:1;visibility:visible}.presto-audio__wrapper.is-playing .presto-audio__icon-play{opacity:0;visibility:hidden}.presto-audio__poster-wrapper-mobile{display:none;min-width:0}.presto-audio__poster-wrapper-mobile .presto-audio__large-play-button{flex:0 0 50px}.presto-audio__wrapper.breakpoint-small{flex-direction:column}.presto-audio__wrapper.breakpoint-small .presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 2)}.presto-audio__wrapper.breakpoint-small.has-poster .presto-audio__title{text-align:center;margin:calc(var(--plyr-control-spacing, 10px) * 1.5)}.presto-audio__wrapper.breakpoint-small.has-poster .presto-audio__poster-wrapper{margin:30px auto auto auto;overflow:hidden;border-radius:var(--presto-player-border-radius, 0px);width:225px;height:225px;flex:0 0 225px}.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__poster-wrapper,.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__title{display:none}.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__poster-wrapper-mobile{display:flex;align-items:center;gap:1em;margin-bottom:calc(var(--plyr-control-spacing, 10px) * -1);padding:calc(var(--plyr-control-spacing, 10px) * 2) calc(var(--plyr-control-spacing, 10px) * 2) 0 calc(var(--plyr-control-spacing, 10px) * 2)}.skin-stacked.presto-sticky-audio .presto-audio__wrapper{height:115px}.skin-stacked.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:20px}.skin-stacked.presto-sticky-audio .has-poster .presto-audio__poster-wrapper{width:115px;height:115px;flex:0 0 115px}.presto-sticky-audio .presto-audio__wrapper{height:100px}.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:20px}.presto-sticky-audio .has-poster .presto-audio__poster-wrapper{width:100px;height:100px;flex:0 0 100px}.action-bar-active .presto-audio__wrapper{border-radius:var(--presto-player-border-radius) var(--presto-player-border-radius) 0px 0px}@media screen and (max-width: 520px){.presto-sticky-audio .presto-audio__poster-wrapper-mobile{display:flex;align-items:center;gap:1em;margin-bottom:calc(var(--plyr-control-spacing, 10px) * -1);padding:calc(var(--plyr-control-spacing, 10px) * 2) calc(var(--plyr-control-spacing, 10px) * 2) 0 calc(var(--plyr-control-spacing, 10px) * 2)}.presto-sticky-audio .presto-audio__poster-wrapper,.presto-sticky-audio .presto-audio__title{display:none}.presto-sticky-audio .presto-audio__wrapper{height:140px}.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:0px}.presto-sticky-audio .presto-audio__poster-wrapper-mobile .presto-audio__large-play-button{flex:0 0 40px;height:40px}}";const u=class{constructor(e){r(this,e),this.getRef=void 0,this.autoplay=void 0,this.src=void 0,this.preload=void 0,this.poster=void 0,this.player=void 0,this.tracks=void 0,this.playsinline=void 0,this.provider=void 0,this.thumbnail=void 0,this.previewUrl=void 0,this.videoAttributes=void 0}componentWillLoad(){this.poster=this.poster||this.thumbnail}render(){return t("presto-video",{getRef:this.getRef,player:this.player,autoplay:this.autoplay,preload:this.preload,poster:this.poster,playsinline:this.playsinline,src:this.src,tracks:this.tracks,videoAttributes:this.videoAttributes})}},v=class{constructor(e){r(this,e)}render(){return t(e,null,t("slot",null))}};v.style='.skin-business.presto-player__wrapper.rewind-inactive .plyr__controls .plyr__controls__item:nth-child(2)::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper.caption-style-full .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 16px) * -4))}.skin-business.presto-player__wrapper .presto-player-progress__marker{border-radius:0;width:15px;height:15px;border-width:1px}.skin-business.presto-player__wrapper .plyr__control[data-plyr]:hover:not([role*=menuitem]):not(.plyr__control--back),.skin-business.presto-player__wrapper .plyr__control[data-plyr]:focus:not([role*=menuitem]):not(.plyr__control--back),.skin-business.presto-player__wrapper .plyr__control[data-plyr]:active:not([role*=menuitem]):not(.plyr__control--back){background-color:transparent;color:var(--plyr-color-main)}.skin-business.presto-player__wrapper .plyr__control[data-plyr]:hover:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play],.skin-business.presto-player__wrapper .plyr__control[data-plyr]:focus:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play],.skin-business.presto-player__wrapper .plyr__control[data-plyr]:active:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play]{background-color:var(--plyr-color-main);color:white}.skin-business.presto-player__wrapper .plyr__control--overlaid[data-plyr=play]{border-radius:4px;background:#000000;opacity:75%}.skin-business.presto-player__wrapper .plyr__control--overlaid[data-plyr=play]:hover{background-color:var(--plyr-color-main);color:white;opacity:100%}.skin-business.presto-player__wrapper .plyr__volume input[type=range]{cursor:pointer}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fast-forward]{border-radius:0px}.skin-business.presto-player__wrapper .plyr__progress{margin:0px 20px 0 5px}.skin-business.presto-player__wrapper .plyr__progress input[type=range]{height:32px;border-radius:0px;cursor:pointer}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker):first-child::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker):last-child::before{border-radius:0px var(--plyr-control-radius, 3px) var(--plyr-control-radius, 3px) 0px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__control[data-plyr=play]{order:-1;margin-right:5px;padding:11px 20px 11px 20px;top:-4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__control[data-plyr=play]::before{border-radius:4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=rewind]::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not([data-plyr=play]){margin:0}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen]{padding:4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{height:24px;width:24px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker){position:relative}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker).plyr__time{height:32px;padding-top:4.5px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker)::before{content:"";background:#000000;position:absolute;top:0px;left:0;right:0;bottom:0px;opacity:0.76;z-index:-1}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-runnable-track{box-shadow:none;color:var(--plyr-color-main);height:9px;outline:1px solid #878787a6;outline-offset:2px;border-radius:0px}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb{visibility:hidden}.skin-business.presto-player__wrapper .plyr__progress__buffer::-webkit-progress-value{position:relative;border-radius:0px;height:9px;top:-2px}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background-color:transparent}@media screen and (max-width: 480px){.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__time{padding:1.5%}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=play]{padding:8px;top:0px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{width:22px}}';const g=class{constructor(e){r(this,e),this.player=void 0,this.direction=void 0,this.preset=void 0,this.i18n=void 0,this.provider=void 0,this.currentTime=void 0,this.duration=void 0,this.ended=void 0}componentWillLoad(){this.player&&(this.player.on("ended",(()=>this.setEnded())),this.player.on("timeupdate",(r=>this.setCurrentTime(r))))}setEnded(){this.ended=!0}setCurrentTime(r){var e,t;this.currentTime=null===(e=null==r?void 0:r.detail)||void 0===e?void 0:e.plyr.currentTime,this.duration=null===(t=null==r?void 0:r.detail)||void 0===t?void 0:t.plyr.duration}disconnectedCallback(){this.player&&(this.player.off("ended",this.setEnded),this.player.off("timeupdate",this.setCurrentTime))}render(){var r;return t("presto-cta-overlay-controller",{ended:this.ended,currentTime:this.currentTime,duration:this.duration,direction:this.direction,cta:null===(r=this.preset)||void 0===r?void 0:r.cta,i18n:this.i18n,provider:this.provider})}};g.style=":host{display:block}";const m=class{constructor(e){r(this,e),this.reloadComponent=i(this,"reloadComponent",7),this.watermarkRef={left:null,right:null},this.refs={},this.overlays=void 0,this.player=void 0,this.preset=void 0,this.enabled=void 0,this.currentTime=void 0,this.destroy=!1}componentDidLoad(){this.player&&this.player.on("timeupdate",(r=>{this.currentTime=r.detail.plyr.currentTime,this.checkValidity()}))}checkValidity(){var r,e,t,o,i,s,a,p,l,n;this.player.playing&&((null===(r=null==this?void 0:this.overlays)||void 0===r?void 0:r.length)||(null===(t=null===(e=this.preset)||void 0===e?void 0:e.watermark)||void 0===t?void 0:t.enabled))&&((null===(o=this.container)||void 0===o?void 0:o.offsetParent)&&(null===(i=this.topLeft)||void 0===i?void 0:i.offsetParent)&&(null===(s=this.topRight)||void 0===s?void 0:s.offsetParent)||this.reloadComponent.emit(),Object.keys(this.refs||{}).forEach((r=>{const{overlay:e,component:t}=this.refs[r];this.checkComponent(t,e.text,(()=>this.reloadComponent.emit()))})),this.shouldShowWatermark("top-left")&&this.watermarkRef.left&&this.checkComponent(this.watermarkRef.left,null===(p=null===(a=this.preset)||void 0===a?void 0:a.watermark)||void 0===p?void 0:p.text,(()=>this.reloadComponent.emit())),this.shouldShowWatermark("top-right")&&this.watermarkRef.right&&this.checkComponent(this.watermarkRef.right,null===(n=null===(l=this.preset)||void 0===l?void 0:l.watermark)||void 0===n?void 0:n.text,(()=>this.reloadComponent.emit())))}checkComponent(r,e,t){if(!(null==r?void 0:r.offsetParent))return t();if(!r.shadowRoot.querySelector("slot"))return t();if(this.player&&this.player.playing){const o=r.shadowRoot.querySelector("slot").assignedNodes()[0];if(o){if(o.parentElement.innerHTML!=e)return t();const r=getComputedStyle(o.parentElement.shadowRoot.querySelector(".overlay-text"));if(parseInt(r.fontSize,10)<10)return t();const i=p(r.color);if("1"!==(null==i?void 0:i[3]))return t()}}}shouldShowOverlay(r){if(void 0!==this.currentTime)return!(this.currentTime<a(null==r?void 0:r.startTime)||this.currentTime>a(null==r?void 0:r.endTime))}renderOverlay(r){var e,o;return t("presto-dynamic-overlay-ui",{class:{visible:this.shouldShowOverlay(r)},ref:e=>this.refs[r.id]={overlay:r,component:e},key:r.id,position:r.position,href:null===(e=null==r?void 0:r.link)||void 0===e?void 0:e.url,target:(null===(o=null==r?void 0:r.link)||void 0===o?void 0:o.opensInNewTab)?"_blank":"_self",innerHTML:this.shouldShowOverlay(r)?r.text:"",style:{"--presto-dynamic-overlay-color":(null==r?void 0:r.color)||"#fff","--presto-dynamic-overlay-background":(null==r?void 0:r.backgroundColor)||"#333","--presto-dynamic-overlay-opacity":(null==r?void 0:r.opacity)?(r.opacity/100).toString():"1"}})}shouldShowWatermark(r){var e,t,o;if(!(null===(t=null===(e=this.preset)||void 0===e?void 0:e.watermark)||void 0===t?void 0:t.enabled))return!1;const i=null===(o=this.preset)||void 0===o?void 0:o.watermark;return"randomize"===i.position?Math.floor((this.player.currentTime||0)/10)%2==0?"top-left"===r:"top-right"===r:i.position===r||!i.position&&"top-right"===r}render(){var r,e,o,i,s,a,p,l,n,d,c;if(this.enabled&&((null===(r=null==this?void 0:this.overlays)||void 0===r?void 0:r.length)||(null===(o=null===(e=this.preset)||void 0===e?void 0:e.watermark)||void 0===o?void 0:o.enabled)))return t("div",{class:"overlays",ref:r=>this.container=r},t("div",{class:"top-left",ref:r=>this.topLeft=r},!!this.shouldShowWatermark("top-left")&&t("presto-dynamic-overlay-ui",{ref:r=>this.watermarkRef.left=r,style:{"--presto-dynamic-overlay-color":(null===(i=this.preset.watermark)||void 0===i?void 0:i.color)||"#fff","--presto-dynamic-overlay-background":(null===(s=this.preset.watermark)||void 0===s?void 0:s.backgroundColor)||"#333","--presto-dynamic-overlay-opacity":(null===(a=this.preset.watermark)||void 0===a?void 0:a.opacity)?(this.preset.watermark.opacity/100).toString():"1"},class:"visible",position:"top-left",innerHTML:this.preset.watermark.text}),!!(null===(p=null==this?void 0:this.overlays)||void 0===p?void 0:p.length)&&this.overlays.map((r=>"top-left"!==r.position?"":this.renderOverlay(r)))),t("div",{class:"top-right",ref:r=>this.topRight=r},!!this.shouldShowWatermark("top-right")&&t("presto-dynamic-overlay-ui",{ref:r=>this.watermarkRef.right=r,style:{"--presto-dynamic-overlay-color":(null===(l=this.preset.watermark)||void 0===l?void 0:l.color)||"#fff","--presto-dynamic-overlay-background":(null===(n=this.preset.watermark)||void 0===n?void 0:n.backgroundColor)||"#333","--presto-dynamic-overlay-opacity":(null===(d=this.preset.watermark)||void 0===d?void 0:d.opacity)?(this.preset.watermark.opacity/100).toString():"1"},class:"visible",position:"top-right",innerHTML:this.preset.watermark.text}),!!(null===(c=null==this?void 0:this.overlays)||void 0===c?void 0:c.length)&&this.overlays.map((r=>"top-right"!==r.position?"":this.renderOverlay(r)))))}get el(){return o(this)}};m.style=".top-left,.top-right{position:absolute;display:block;padding:20px;max-width:45%;z-index:20;display:flex;flex-direction:column;flex-wrap:wrap}.top-left{top:0;left:0}.top-right{top:0;right:0;align-items:flex-end}presto-dynamic-overlay-ui{overflow:hidden;height:0;opacity:0;transition:height 0ms 400ms, opacity 400ms 0ms}presto-dynamic-overlay-ui.visible{margin-bottom:10px;height:auto;opacity:1;transition:height 0ms 0ms, opacity 500ms 0ms}";const b=class{constructor(e){r(this,e),this.player=void 0,this.direction=void 0,this.preset=void 0,this.videoId=void 0,this.i18n=void 0,this.provider=void 0,this.currentTime=void 0,this.duration=void 0,this.ended=void 0}componentWillLoad(){this.player&&(this.player.on("ended",(()=>this.setEnded())),this.player.on("timeupdate",(r=>this.setCurrentTime(r))))}setEnded(){this.ended=!0}setCurrentTime(r){var e,t;this.currentTime=null===(e=null==r?void 0:r.detail)||void 0===e?void 0:e.plyr.currentTime,this.duration=null===(t=null==r?void 0:r.detail)||void 0===t?void 0:t.plyr.duration}disconnectedCallback(){this.player&&(this.player.off("ended",this.setEnded),this.player.off("timeupdate",this.setCurrentTime))}render(){var r,e;return t("presto-email-overlay-controller",{ended:this.ended,currentTime:this.currentTime,videoId:this.videoId,duration:this.duration,direction:this.direction,presetId:null===(r=this.preset)||void 0===r?void 0:r.id,emailCollection:null===(e=this.preset)||void 0===e?void 0:e.email_collection,i18n:this.i18n,provider:this.provider})}};b.style=":host{display:block}";const k=class{constructor(e){r(this,e)}render(){return t(e,null,t("slot",null))}};k.style='.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid{border-radius:2px;padding:3% 5%;max-width:135px;max-height:90px;box-sizing:content-box;position:absolute !important;top:50% !important;opacity:100%}.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid svg{height:31px;width:37px}.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid:hover,.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid:focus{opacity:0.8;background:var(--plyr-color-main)}.skin-modern.presto-player__wrapper.caption-style-full .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 9px) * -4))}.skin-modern.presto-player__wrapper .plyr--video .plyr__controls{padding:0px}.skin-modern.presto-player__wrapper .plyr--video .plyr__controls::before{content:"";background:var(--plyr-color-main);position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.75}.skin-modern.presto-player__wrapper .plyr__controls__item{z-index:1}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__control:not(.presto-player-progress__marker):not([role*=menuitem]):not(.plyr__control--back){height:36px;border-radius:0px}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__control:not(.presto-player-progress__marker):not([role*=menuitem]):not(.plyr__control--back):focus{background-color:transparent;color:white}.skin-modern.presto-player__wrapper .plyr__controls__item.presto-player-progress__marker{z-index:2}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__menu{height:36px}.skin-modern.presto-player__wrapper .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{height:2px;color:white}.skin-modern.presto-player__wrapper .presto-player__wrapper .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{height:2px}.skin-modern.presto-player__wrapper .plyr--video .plyr__progress__buffer{height:2px;top:11px}.skin-modern.presto-player__wrapper .plyr__progress input[type=range]{cursor:pointer}.skin-modern.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb{top:1px;height:var(--plyr-range-thumb-height, 8px);width:var(--plyr-range-thumb-height, 8px);box-shadow:0px 0px 5px white}.skin-modern.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.5)}.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item{margin:0px}.skin-modern.presto-player__wrapper .plyr__volume{width:auto}.skin-modern.presto-player__wrapper .plyr__volume input[type=range]{width:55px}.skin-modern.presto-player__wrapper .plyr__volume input[type=range]{cursor:pointer}.skin-modern.presto-player__wrapper .presto-player__muted-overlay .plyr__control.plyr__control--overlaid{border-radius:2px}.skin-modern.presto-player__wrapper .presto-player__muted-overlay .plyr__control.plyr__control--overlaid svg{height:40px;width:50px}.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=rewind] svg,.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fast-forward] svg,.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{width:22px;height:22px}@media screen and (max-width: 480px){.skin-modern.presto-player__wrapper .plyr__control--overlaid svg{height:18px;width:16px}}';const w=class{constructor(e){r(this,e),this.playVideo=i(this,"playVideo",7),this.mutedPreview=void 0,this.mutedOverlay=void 0,this.preset=void 0}render(){var r,e,o,i,s,a,p,l,n;return t("div",{class:"presto-player__muted-overlay",onClick:()=>{this.mutedPreview=!1,this.playVideo.emit()}},(null===(r=this.preset)||void 0===r?void 0:r["play-large"])&&t("div",{class:"plyr__control plyr__control--overlaid","data-plyr":"play","aria-label":"Play",part:"muted-overlay-play"},t("svg",{id:"plyr-play",viewBox:"0 0 18 18"},t("path",{d:"M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"})),t("span",{class:"plyr__sr-only"},"Play")),(null===(e=this.mutedOverlay)||void 0===e?void 0:e.enabled)&&(null===(o=this.mutedOverlay)||void 0===o?void 0:o.src)?t("div",{class:"presto-player__overlay is-image",part:"muted-overlay-image",style:{width:`${(null===(i=this.mutedOverlay)||void 0===i?void 0:i.width)||50}%`,left:100*((null===(a=null===(s=this.mutedOverlay)||void 0===s?void 0:s.focalPoint)||void 0===a?void 0:a.x)||.5)+"%",top:100*((null===(l=null===(p=this.mutedOverlay)||void 0===p?void 0:p.focalPoint)||void 0===l?void 0:l.y)||.5)+"%"}},t("img",{src:null===(n=this.mutedOverlay)||void 0===n?void 0:n.src,style:{transform:"translateX(-50%) translateY(-50%)"}})):"")}};w.style=":host{display:block}";const x=class{constructor(e){r(this,e),this.value=void 0,this.player=void 0,this.markers=void 0,this.currentMarkerLocation=-1}onSearch(r){if(this.value=r.detail,""===this.value)d(this.player),this.markers=[];else{const r=_(this.player,this.value);this.player.config.markers={enabled:!0,points:r},this.markers=r,h(this.player,r)}}onPreviousNav(){this.currentMarkerLocation-1<0?this.currentMarkerLocation=this.markers.length-1:this.currentMarkerLocation--,this.player.currentTime=this.markers[this.currentMarkerLocation].time}onFocusChange(r){var e,t;this.player.config.hideControls=!0!==(null==r?void 0:r.detail)&&((null===(t=null===(e=this.player.config)||void 0===e?void 0:e.preset)||void 0===t?void 0:t.auto_hide)||!1)}onNextNav(){this.currentMarkerLocation+1>this.markers.length-1?this.currentMarkerLocation=0:this.currentMarkerLocation++,this.player.currentTime=this.markers[this.currentMarkerLocation].time}render(){var r,e;if(!this.player)return"";if(0===this.player.media.textTracks.length)return"";const o=null===(r=this.player.config.preset.search)||void 0===r?void 0:r.placeholder;return t("presto-search-bar-ui",{value:this.value,hasNavigation:(null===(e=this.markers)||void 0===e?void 0:e.length)>1,placeholder:o,onNextNav:()=>this.onNextNav(),onPreviousNav:()=>this.onPreviousNav(),onSearch:r=>this.onSearch(r),onFocusChange:r=>this.onFocusChange(r)})}},f=class{constructor(e){r(this,e)}render(){return t(e,null,t("slot",null))}};f.style=".skin-stacked .plyr__controls{flex-wrap:wrap}.skin-stacked .presto-player-progress__marker{transform:scale(0.75)}.skin-stacked .plyr__controls{justify-content:flex-start}.skin-stacked .plyr__controls__item.plyr__progress__container{order:-1;flex:1 0 100%}.skin-stacked .plyr__controls__item.plyr__progress__container+:not(.plyr__time),.skin-stacked .plyr__controls__item.plyr__progress__container+.plyr__time+*{margin-left:auto}.skin-stacked .plyr__controls .plyr__controls__item:first-child{margin:0}.skin-stacked .plyr__progress{height:19px;display:flex;align-items:center}.skin-stacked .plyr__progress .plyr__progress__buffer{height:3px;transition:all 0.25s ease;position:absolute;top:calc(50% + 1px)}.skin-stacked .plyr__progress input[type=range]::-moz-range-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-fill-upper{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-fill-lower{height:3px;transition:height 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-moz-range-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress__container:hover .presto-player-progress__marker{transform:scale(1)}.skin-stacked .plyr__progress__container:hover .plyr__progress .plyr__progress__buffer{height:5px;top:50%}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]{overflow:visible}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-upper{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-lower{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:visible;opacity:1}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-thumb{visibility:visible;opacity:1}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-thumb{visibility:visible;opacity:1}";const C=class{constructor(e){r(this,e),this.src=void 0,this.poster=void 0,this.player=void 0,this.getRef=void 0}getId(r){const e=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(r||"");return(null==e?void 0:e[5])||""}parseHash(r){const e=r.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*\&*h=|\/)+(?<hash>[\d,a-f]+)/);return e?e.groups.hash:null}render(){if(this.src)return l()?t("div",{class:"presto-iframe-fallback-container"},t("iframe",{src:`https://player.vimeo.com/video/${this.getId(this.src)}?h=${this.parseHash(this.src)}&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`,allowFullScreen:!0,allowTransparency:!0,allow:"autoplay",style:{width:"100%"},class:"presto-fallback-iframe"})):t("div",{class:"plyr__video-embed",part:"embed",ref:this.getRef,"data-plyr-provider":"vimeo","data-plyr-embed-id":this.getId(this.src),"data-plyr-embed-hash":this.parseHash(this.src)})}};C.style=":host{display:block}";const z=class{constructor(e){r(this,e),this.reload=i(this,"reload",7),this.src=void 0,this.poster=void 0,this.lazyLoad=void 0,this.player=void 0,this.getRef=void 0,this.reloadPlayer=void 0,this.isWebView=void 0}handlePlayerChange(){this.player&&(this.fixes(),this.setPoster())}fixes(){this.player.once("statechange",(r=>{var e,t,o,i,s;1===r.detail.code&&((null===(s=null===(i=null===(o=null===(t=null===(e=null==r?void 0:r.detail)||void 0===e?void 0:e.plyr)||void 0===t?void 0:t.config)||void 0===o?void 0:o.blockAttributes)||void 0===i?void 0:i.mutedPreview)||void 0===s?void 0:s.enabled)||(this.player.muted=!1))}))}getId(r){var e;const t=(r||"").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===(null===(e=null==t?void 0:t[2])||void 0===e?void 0:e.length)?t[2]:null}loadPlayer(){this.lazyLoad=!1,this.reloadPlayer=!0}componentDidRender(){this.reloadPlayer&&(this.reloadPlayer=!1,this.reload.emit("play"))}setWebView(){var r;let e=null===(r=window.navigator)||void 0===r?void 0:r.standalone,t=window.navigator.userAgent.toLowerCase(),o=/safari/.test(t),i=/iphone|ipod|ipad/.test(t);this.isWebView=i?!e&&!o:t.includes("wv")}loadImage(r,e=1){return new Promise(((t,o)=>{const i=new Image,s=()=>{delete i.onload,delete i.onerror,(i.naturalWidth>=e?t:o)(r)};Object.assign(i,{onload:s,onerror:s,src:r})}))}setPoster(){if(!this.player.poster){let r=r=>`https://i.ytimg.com/vi/${this.getId(this.src)}/${r}default.jpg`;this.loadImage(r("maxres"),121).catch((()=>this.loadImage(r("sd"),121))).catch((()=>this.loadImage(r("hq"),121))).then((r=>this.player.poster=r)).catch((()=>{}))}}componentWillLoad(){this.setWebView(),this.lazyLoad&&n()&&(this.lazyLoad=!1)}render(){return this.isWebView?t("div",{class:"fallback-container"},t("iframe",{src:this.src,allowFullScreen:!0,allowtransparency:!0,allow:"autoplay"})):this.lazyLoad?t("div",null,t("presto-video",{part:"video",getRef:this.getRef,src:"",provider:"youtube"}),t("div",{class:"presto-player__play-cover",onClick:()=>this.loadPlayer()})):t("div",{class:"plyr__video-embed",part:"embed",ref:this.getRef,"data-plyr-provider":"youtube","data-plyr-embed-id":this.getId(this.src)})}static get watchers(){return{player:["handlePlayerChange"]}}};z.style=":host{display:block}.fallback-container{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.fallback-container iframe,.fallback-container object,.fallback-container embed{position:absolute;top:0;left:0;width:100%;height:100%}@supports not (aspect-ratio: 16/9){.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0 !important;padding-bottom:56.25%;position:relative}}";export{c as presto_action_bar,y as presto_audio,u as presto_bunny,v as presto_business_skin,g as presto_cta_overlay,m as presto_dynamic_overlays,b as presto_email_overlay,k as presto_modern_skin,w as presto_muted_overlay,x as presto_search_bar,f as presto_stacked_skin,C as presto_vimeo,z as presto_youtube};