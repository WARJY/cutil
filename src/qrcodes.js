//base64转blob
function base64ToBlob(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
        type: contentType
    });
}

//文件下载
function downloadFile(fileName, content) {
    let aLink = document.createElement('a');
    let blob = this.base64ToBlob(content); // new Blob([content]);
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    }))
}

// 批量下载
// @params option
//  @props  nameList Array<String>  文件名列表
//  @props  dataList Array<String>  二维码数据列表
//  @props  timeOut  Number||1000   下载时间间隔
module.exports = function(option){
    if(!option.nameList || !option.dataList) return console.log("必须传入文件名列表和二维码数据列表")
    if(option.nameList.length !== option.dataList.length) return console.log("文件名列表和二维码数据列表长度不统一")
    let nameList = option.nameList
    let dataList = option.dataList
    let download = (index) => {
        if (list[index]) {
            qrcode.makeCode(dataList[index])
            setTimeout(() => {
                let img = document.getElementById("qrcode").getElementsByTagName("img")[0]
                downloadFile(nameList[index],img.src)
                download(index+1)
            }, option.timeOut || 1000)
        }
    }
    download(0)
}