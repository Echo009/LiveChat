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
    // 这里需要将图片转换成合适的大小。
    console.log("size :  "+ file.size/1024);
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
            console.log("try to paste img ");
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

function toDataURL(element, width, height){  
    if (element.files && element.files[0]) {  
        var reader = new FileReader();  
        reader.readAsDataURL(element.files[0]);  
        reader.onload = function(event){  
            var img = new Image();  
            img.src = event.target.result;  
            var c = document.createElement("canvas");  
            // width、height参数缺省时处理  
            if(width == null && height == null){  
                width = img.width;  
                height = img.height;  
            }else if(width == null){  
                var ratio = height / img.height;  
                width = img.width * ratio;  
            }else if(height == null){  
                var ratio = width / img.width;  
                height = img.height * ratio;  
            }  
            c.width = width;  
            c.height = height;  
            var ctx = c.getContext("2d");  
            img.onload = function(){  
                ctx.drawImage(this, 0, 0, width, height);  
                return c.toDataURL(element.files[0].type);
                /** 这里进行图片处理后业务逻辑的处理 **/  
                //console.log(c.toDataURL(element.files[0].type))  
//                $("body").append("<img id='test' src='" + c.toDataURL(element.files[0].type) + "' style='border:1px solid #f00;' widht=" + width +" height=" + height + " />");  
            }  
        }  
    }  
}  