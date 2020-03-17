function AdSpeed_setCookie(n,v,e){var d=new Date();d.setTime(d.getTime()+e*60*1000);document.cookie=n+"="+v+"; expires="+d.toGMTString()+"; path=/";}function AdSpeed_getCookie(n){var re=new RegExp("(\;|^)[^;]*("+n+")\=([^;]*)(;|$)");var res=re.exec(document.cookie);return res!=null?res[3]:null;}function isIE(){return(navigator.appVersion.indexOf("MSIE")!=-1);}function inter51(){var i=10;if(i>0){var seen=AdSpeed_getCookie('SeenInter033497');if(seen!=null){return false;}AdSpeed_setCookie('SeenInter033497','yes',i);}var d=window.top.document,autoTimeout,seconds=5,autoTimeoutSeconds=200;var c='';c+='<'+'div id="asinter" style="position:fixed;z-index:99999;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);">\n <'+'div id="asinter-wrapper" style="padding-top:5%;text-align:center;">\n <'+'div id="asint';c+='er-header" style="font-size:1.1em;padding:1em;color:#CCC">\n <'+'a href="#" id="asinter-close" style="display:none;color:#CCC">Skip Ad<'+'/a>\n <'+'div id="asinter-timer">You can skip this ad in <'+'span id="asin';c+='ter-secs"><'+'/span> seconds.<'+'/div>\n <'+'/div>\n <'+'div id="asinter-body" style="display:table;margin:0 auto;">' + getElementById('HTML1') +'\n <'+'/';c+='div>\n <'+'/div>\n <'+'/div>\n<'+'/div>';var n=document.createElement('span');n.innerHTML=c;window.top.document.body.appendChild(n);var closer=d.getElementById("asinter-close"),asinter=d.getElementById("asinter");var timer=d.getElementById("asinter-secs");timer.innerHTML=seconds;var interval=setInterval(function(){seconds--;if(seconds>0){timer.innerHTML=seconds;}if(seconds===0){d.getElementById("asinter-timer").style.display='none';closer.style.display='block';clearInterval(interval);autoTimeout=setInterval(function(){autoTimeoutSeconds--;if(autoTimeoutSeconds===0){asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);}},1000);}},1000);if(closer.addEventListener){closer.addEventListener('click',function(event){event.preventDefault();asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);});}else{closer.attachEvent('onclick',function(event){event.returnValue=false;asinter.parentNode.removeChild(asinter);clearInterval(autoTimeout);});}} var w=5;if(w>0){window.setTimeout("inter51();",w*1000);}else if(w<0){if(isIE()){window.setTimeout("inter51();",5);}else{inter51();}}else{var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=inter51;}else{window.onload=function(){oldonload();inter51();}}}







var schooblyAds = [
 
   { 
     adImage: `https://i.udemycdn.com/course/240x135/914200_388c_3.jpg`,
     adLink: `http://bit.ly/33bcoUe`,
     adTitle: `Earn From Your Photos!`,
     adNiche: `Photography`,
     adLanding: `photojobz.co`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://miro.medium.com/max/2000/1*sqMHMa6-2uoWTRkK3EIhHg.jpeg`,
     adLink: `http://bit.ly/2wGT2Ku`,
     adTitle: `Ultimate Guide To Job Interview Answers`,
     adNiche: `Career Development`,
     adLanding: `interview-answers.com`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/322302_1979_2.jpg`,
     adLink: `https://099bdip41bp89r7h-jvnu8qc6l.hop.clickbank.net/`,
     adTitle: `Tutor Jobs Online | Get Paid To Teach Online`,
     adNiche: `Teacher Training`,
     adLanding: `tutorjobsonline.com`,
     adCTAText: `Learn More`
   },   
    { 
     adImage: `https://i.udemycdn.com/course/240x135/2687810_8991_3.jpg`,
     adLink: `http://bit.ly/2TPPE7Q`,
     adTitle: `Data Entry Work Online Jobs - Earn From Home`,
     adNiche: `Home Business`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/869632_d1f2_2.jpg`,
     adLink: `http://bit.ly/2W15T4M`,
     adTitle: `Slogan Seller - Turn A Phase Into Cash`,
     adNiche: `Home Business`,
     adLanding: `sloganseller.com`,
     adCTAText: `Learn More`
   },
 
 //E-business & E-marketing


{ 
     adImage: `https://i.udemycdn.com/course/240x135/703522_0e3f_3.jpg`,
     adLink: `http://bit.ly/2W2srlI`,
     adTitle: `Get Paid To Use Facebook, Twitter And Youtube`,
     adNiche: `Home Business`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/313360_0668_3.jpg`,
     adLink: `http://bit.ly/38Esoz5`,
     adTitle: `The 12 Minute Affiliate System - Hot Offer!`,
     adNiche: `Affiliate Marketing`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/661030_70d3_5.jpg`,
     adLink: `http://bit.ly/2xuxLnL`,
     adTitle: `Salehoo Wholesale & Dropship Directory - #1 Affiliate Program`,
     adNiche: `Dropshipping`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://img.youtube.com/vi/XZteEHUNz1I/mqdefault.jpg`,
     adLink: `http://bit.ly/2TDoVMK`,
     adTitle: `Super Affiliate System - John Crestani's Autowebinar Funnel`,
     adNiche: `Affiliate Marketing`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/501164_5826.jpg`,
     adLink: `http://bit.ly/3cNnsv2`,
     adTitle: `CB University: 70k+ Students - Our Clients Have Earned $3.5 Billion, It's Your Turn!`,
     adNiche: `Home Business`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/1729276_e950_2.jpg`,
     adLink: `http://bit.ly/3cOwRSY`,
     adTitle: `Video Marketing Blaster - Rank Videos On #1 Page Of Google And Youtube`,
     adNiche: `Social Media Marketing`,
     adCTAText: `Learn More`
   },{ 
     adImage: `https://i.udemycdn.com/course/240x135/630050_7fc3.jpg`,
     adLink: `http://bit.ly/2ID77eB`,
     adTitle: `Zendyx Affiliate System - $1.4+ Epcs!`,
     adNiche: `Affiliate Marketing`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/576054_7e88_6.jpg`,
     adLink: `http://bit.ly/38I9RSq`,
     adTitle: `Instant Wordpess Theme To Match Your Existing Website Design!`,
     adNiche: `Web Design`,
     adCTAText: `Learn More`
   },
   { 
     adImage: `https://i.udemycdn.com/course/240x135/487450_afe7_2.jpg`,
     adLink: `http://bit.ly/3356mnQ`,
     adTitle: `Host Unlimited Sites From $3 Per Year!`,
     adNiche: `Web Hosting`,
     adCTAText: `Learn More`
   }

];
