// ==UserScript==
// @name         删除B豆
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Delete it.
// @author       4εv3Я$Ad_η£кØ
// @include      https://www.bilibili.com/video/*
// @include      https://space.bilibili.com/*/dynamic
// @include      https://t.bilibili.com/*
// @icon           data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant         none
// @require      https://code.jquery.com/jquery-3.1.1.js
// ==/UserScript==

(function() {
    window.addEventListener('load', (event) => {
        const BeanPicName = ['[doge]','[脸红]','[[藏狐]]','[微笑]','[OK]','[星星眼]','[妙啊]','[辣眼睛]','[吃瓜]','[滑稽]','[呲牙]','[打call]','[歪嘴]','[调皮]','[嗑瓜子]','[笑哭]','[脱单doge]','[嘟嘟]','[哦呼]','[喜欢]','[酸了]','[嫌弃]','[大哭]','[害羞]','[疑惑]','[喜极而泣]','[奸笑]','[笑]','[偷笑]','[惊讶]','[[鼓掌]','[doge]','[尴尬]','[灵魂出窍]','[委屈]','[傲娇]','[疼]','[冷]','[生病]','[吓]','[吐]','[捂眼]','[嘘声]','[思考]','[再见]','[翻白眼]','[哈欠]','[奋斗]','[墨镜]','[难过]','[撇嘴]','[抓狂]','[生气]','[口罩]','[捂脸]','[阴险]','[囧]','[呆]','[抠鼻]','[大笑]','[惊喜]','[无语]','[点赞]']

        setTimeout(function(){var a = document.getElementsByTagName("img")
        var i = 0
        do{
            i += 1
            if(BeanPicName.indexOf(a[i].alt)>=0){
                a[i].setAttribute('class','del')}
        }
        while (1);},1000);
    });

    window.onload = () =>{
        const picStyle = "img.small {display:none;} img.del {display:none !important;}";
        const createElement = document.createElement('style');
        createElement.innerText = picStyle;
        document.body.appendChild(createElement);
    }
})();