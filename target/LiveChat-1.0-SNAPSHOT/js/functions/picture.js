/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月17日09:04:48 
 */
//#choosePic
function addImgToInputMsgPanel() {
    console.log("try to add img to Panel~");
    var file = document.getElementById("choosePic").files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("请选择图片文件！");
        return false;
    }
    var reader = new FileReader();
    //将文件以Data URL形式读入页面  
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        //        +reader.result
        var imgHtml =  '<img src="' + this.result + '" alt="" />';
        var $msgInput=$("#msgInput");
        $msgInput.append(imgHtml);
    };
}
$(function () {
    var imgReader = function (item) {
        var blob = item.getAsFile(),
                reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;
            document.getElementById('msgInput').appendChild(img);
        };
        reader.readAsDataURL(blob);
    };
    document.getElementById('msgInput').addEventListener('paste', function (e) {
        var clipboardData = e.clipboardData,
                i = 0,
                items, item, types;
        if (clipboardData) {
            items = clipboardData.items;
            if (!items) {
                return;
            }
            item = items[0];
            types = clipboardData.types || [];
            for (; i < types.length; i++) {
                if (types[i] === 'Files') {
                    item = items[i];
                    break;
                }
            }
            if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
                imgReader(item);
            }
        }
    });
});
