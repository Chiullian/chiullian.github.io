var card_category_list=document.getElementsByClassName("card-category-list child"),item=document.getElementsByClassName("card-category-list-item");function toggle(e){"none"==e.parentElement.nextSibling.style.display?(e.parentElement.nextSibling.style.display="block",e.parentElement.nextSibling.style.height="100%",e.className=e.className.replace("fa-chevron-up","fa-chevron-down")):(e.parentElement.nextSibling.style.display="none",e.className=e.className.replace("fa-chevron-down","fa-chevron-up"))}for(var i=0;i<card_category_list.length;i++)card_category_list[i].style.display="none",card_category_list[i].style.transition="all 1s",card_category_list[i].previousSibling.innerHTML+='<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" οnclick="toggle(this)"></i>';function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e));if(n){let e=Date.now()-n.time;if(e<60*t*1e3&&e>-1)return n.data}return 0}try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let n=document.getElementById("web_bg");"#"==e.charAt(0)?(n.style.backgroundColor=e,n.style.backgroundImage="none"):n.style.backgroundImage=e,t||saveData("blogbg",e)}function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100);n<=99||(n=99),document.querySelector("#percent").innerHTML=n,document.getElementById("page-name").innerText=document.title.split(" | chiullian")[0]}setInterval((()=>{let e=Math.round(new Date("2022/04/06 00:00:00").getTime()/1e3),t=Math.round((new Date).getTime()/1e3)-e,n=new Array(0,0,0,0,0);var a=function(e){return e>9?e:"0"+e};t>=31536e3&&(n[0]=parseInt(t/31536e3),t%=31536e3),t>=86400&&(n[1]=parseInt(t/86400),t%=86400),t>=3600&&(n[2]=a(parseInt(t/3600)),t%=3600),t>=60&&(n[3]=a(parseInt(t/60)),t%=60),t>=0&&(n[4]=a(t));let i="";0!=n[0]&&(i+=n[0]+" YEAR "),i+=n[1]+" DAYS "+n[2]+" : "+n[3]+" : "+n[4],document.getElementById("runtime").innerHTML=i}),1e3),window.onscroll=percent;let rmf={scrollToTop:function(){btf.scrollToDest(0,500)},translate:function(){document.getElementById("translateLink").click()}};var titleTime,OriginTitile=document.title;function switchDarkMode(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="w(ﾟДﾟ)w 不要走！再看看嘛！",clearTimeout(titleTime)):(document.title="♪(^∇^*)欢迎肥来！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))})),function(e){var t,n={},a="jinrishici-token";function i(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function o(){n.load((function(e){var t=document.getElementById("jinrishici-sentence"),n=document.getElementsByClassName("jinrishici-sentence");if(t&&(t.innerText=e.data.content),0!==n.length)for(var a=0;a<n.length;a++)n[a].innerText=e.data.content}))}function r(e,t){var n=new XMLHttpRequest;n.open("get",t),n.withCredentials=!0,n.send(),n.onreadystatechange=function(t){if(4===n.readyState){var a=JSON.parse(n.responseText);"success"===a.status?e(a):console.error("今日诗词API加载失败，错误原因："+a.errMessage)}}}n.load=function(t){return e.localStorage&&e.localStorage.getItem(a)?function(e,t){return r(e,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(t))}(t,e.localStorage.getItem(a)):function(t){return r((function(n){e.localStorage.setItem(a,n.token),t(n)}),"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(t)},e.jinrishici=n,i()?o():(t=function(){i()&&o()},"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&t()})))}(window);let newYearTimer=null;var newYear=()=>{if(clearTimeout(newYearTimer),!document.querySelector("#newYear"))return;let e=new Date("2023-12-24 00:00:00").getTime()/1e3,t={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};function n(e){return e>9?e:"0"+e}!function a(){let i=new Date;document.querySelector("#newYear .today").innerHTML=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+" "+t[i.getDay()];let o=e-Math.round(i.getTime()/1e3);if(o<0)document.querySelector("#newYear .title").innerHTML="Fighting！！!",document.querySelector("#newYear .newYear-time").innerHTML='<span class="happyNewYear">GO GO GO ~</span>';else if(document.querySelector("#newYear .title").innerHTML="距离2023年考研：",o>86400)document.querySelector("#newYear .newYear-time").innerHTML=`<span class="day">${Math.ceil(o/86400)}<span class="unit">天</span></span>`;else{let e=n(parseInt(o/3600));o%=3600;let t=n(parseInt(o/60));o%=60;let i=n(o);document.querySelector("#newYear .newYear-time").innerHTML=`<span class="time">${e}:${t}:${i}</span></span>`,newYearTimer=setTimeout(a,1e3)}}(),jQuery(document).ready((function(e){e("#newYear").wpSuperSnow({flakes:["https://image.chiullian.cn/picture/yb1.webp","https://image.chiullian.cn/picture/1111.png","https://image.chiullian.cn/picture/link.png"],totalFlakes:"100",zIndex:"1",maxSize:"30",maxDuration:"20",useFlakeTrans:!1})}))};newYear();var swiper=new Swiper("#noticeList",{spaceBetween:30,centeredSlides:!0,direction:"vertical",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}});function whenDOMReady(){newYear()}whenDOMReady(),document.addEventListener("pjax:complete",whenDOMReady);