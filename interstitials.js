if(localStorage.getItem("schooblyHistory") === 'datascience') {
function AdSpeed_setCookie(n,v,e){var d=new Date();d.setTime(d.getTime()+e*60*1000);document.cookie=n+"="+v+"; expires="+d.toGMTString()+"; path=/";}function AdSpeed_getCookie(n){var re=new RegExp("(\;|^)[^;]*("+n+")\=([^;]*)(;|$)");var res=re.exec(document.cookie);return res!=null?res[3]:null;}function isIE(){return(navigator.appVersion.indexOf("MSIE")!=-1);}function inter11(){var i=10;if(i>0){var seen=AdSpeed_getCookie('SeenInter033497');if(seen!=null){return false;}AdSpeed_setCookie('SeenInter033497','yes',i);}var d=window.top.document,autoTimeout,seconds=5,autoTimeoutSeconds=20;var c='';c+='<'+'div id="asinter" style="position:fixed;z-index:99999;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);background:#222222;">\n <'+'div id="asinter-wrapper" style="margin-top:1% ;margin-bottom:3% ;text-align:center;"><img src="https://1.bp.blogspot.com/-x4VhU8nlmCw/Xli45xXjKCI/AAAAAAAAAO4/L4DM2ue8F9wkm2Jkjug8qoZ_nC-qvulfwCLcBGAsYHQ/logo.png" style="max-height:40px;">\n <'+'/div>\n <'+'div id="asinter-body" style="display:table;margin:0 auto;">' + schooblyPAds +  '<'+'div id="asint';c+='er-header" style="font-size:1.1em;padding:1em;color:#CCC;text-align:center;">\n <'+'a href="#" id="asinter-close" style="display:none;background-color:#4c4b4b;height:28px;font-size:12px;color:#fff;font-weight:600;line-height: 28px;text-transform:uppercase;padding:0 20px;margin:10px 0 0;border-bottom:1px solid rgba(0,0,0,.1);border-radius: 3px;transition:background .17s ease;text-align:center;">Skip This Ad<'+'/a>\n <'+'div id="asinter-timer" style="display:inline-block;background-color:#4c4b4b;height:28px;font-size:12px;color:#fff;font-weight:600;line-height: 28px;text-transform:uppercase;padding:0 20px;margin:10px 0 0;border-bottom:1px solid rgba(0,0,0,.1);border-radius: 3px;transition:background .17s ease;text-align:center;">You can skip this ad in <'+'span id="asin';c+='ter-secs"><'+'/span> seconds<'+'/div>\n<'+'/';c+='div>\n <'+'/div>\n <'+'/div>\n<'+'/div>';var n=document.createElement('span');n.innerHTML=c;window.top.document.body.appendChild(n);var closer=d.getElementById("asinter-close"),asinter=d.getElementById("asinter");var timer=d.getElementById("asinter-secs");timer.innerHTML=seconds;var interval=setInterval(function(){seconds--;if(seconds>0){timer.innerHTML=seconds;}if(seconds===0){d.getElementById("asinter-timer").style.display='none';closer.style.display='inline-block';clearInterval(interval);autoTimeout=setInterval(function(){autoTimeoutSeconds--;if(autoTimeoutSeconds===0){asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);}},1000);}},1000);if(closer.addEventListener){closer.addEventListener('click',function(event){event.preventDefault();asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);});}else{closer.attachEvent('onclick',function(event){event.returnValue=false;asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);});}} var w=5;if(w>0){window.setTimeout("inter11();",w*1000);}else if(w<0){if(isIE()){window.setTimeout("inter11();",5);}else{inter11();}}else{var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=inter11;}else{window.onload=function(){oldonload();inter11();}}}
}
