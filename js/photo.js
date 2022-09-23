/*选择壁纸----------------------------------------*/
// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'var(--leonus-blue)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)
 
    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    // <a href="javascript:;" rel="noopener external nofollow" style="background-image:url()" class="pimgbox" onclick="changeBg('url(https\:)')"></a>
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px; margin: 10px 10px">
    <div>
    <p style="font-size: 20px">Ps:点击对应样式即可切换背景。相册图片也可以当作壁纸哦!<p>  
    </div>
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>适配电脑页面:</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/16/Z6E9z0.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/16/Z6E9z0.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/16427494393164274943953.jpg)" class="imgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/16427494393164274943953.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/16/Z6EUwC.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/16/Z6EUwC.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/16/Z6Edsh.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/16/Z6Edsh.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1638860271747163886027116.jpg)" class="imgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1638860271747163886027116.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/16/Z6EcBm.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/16/Z6EcBm.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/15/ZIhAFA.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/15/ZIhAFA.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.helloimg.com/images/2022/09/15/ZIhnBm.png)" class="imgbox" onclick="changeBg('url(https\://www.helloimg.com/images/2022/09/15/ZIhnBm.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)')"></a>   
</div>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>适配手机页面:</h2>
    <div class="bgbox">

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009928240164300992847.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009928240164300992847.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009840942164300984016.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009840942164300984016.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/164300995237164300995252.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/164300995237164300995252.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/164300995221616430099528.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/164300995221616430099528.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009947304164300994716.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009947304164300994716.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009933373164300993312.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009933373164300993312.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/16430099287616430099288.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/16430099287616430099288.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009925630164300992534.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009925630164300992534.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/164300987835816430098780.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/164300987835816430098780.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009877437164300987769.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009877437164300987769.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009877396164300987796.jpg)" class="pimgbox" onclick="changeBg('url(https\://www.toopic.cn/public/uploads/small/1643009877396164300987796.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)')"></a>
    
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)" onclick="changeBg('linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(102.7deg,#fddaff 8.2%,#dfadfc 19.6%,#adcdfc 36.8%,#adfcf4 73.2%,#caf8d0 90.9%)" onclick="changeBg('linear-gradient(102.7deg,#fddaff 8.2%,#dfadfc 19.6%,#adcdfc 36.8%,#adfcf4 73.2%,#caf8d0 90.9%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right bottom,rgb(0, 255, 240),rgb(92, 159, 247) 40%,rgb(211, 34, 255) 80%)" onclick="changeBg('linear-gradient(to right bottom,rgb(0, 255, 240),rgb(92, 159, 247) 40%,rgb(211, 34, 255) 80%)')"></a>
    


    </div>
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fff" onclick="changeBg('#fff')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000" onclick="changeBg('#000000')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7d6a97" onclick="changeBg('#7d6a97')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}

