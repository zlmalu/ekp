var _wpp = {}

var bUseHttps = false;

var isCloseWpp=false;
function _WppInvoke(funcs) {
    var info = {};
    info.funcs = funcs;
    var func = bUseHttps ? WpsInvoke.InvokeAsHttps : WpsInvoke.InvokeAsHttp
    func(WpsInvoke.ClientType.wpp, // 组件类型
        "WppOAAssist", // 插件名，与wps客户端加载的加载的插件名对应
        "dispatcher", // 插件方法入口，与wps客户端加载的加载的插件代码对应，详细见插件代码
        info, // 传递给插件的数据
        function (result) { // 调用回调，status为0为成功，其他是错误
            if (result.status) {
                if (bUseHttps && result.status == 100) {
                    WpsInvoke.AuthHttpesCert('请在稍后打开的网页中，点击"高级" => "继续前往"，完成授权。')
                    return;
                }
                alert(result.message)

            } else {
                console.log(result.response)
            }
        })
}

/**
 * 该方法封装了发送给WPS客户端的请求，不需要用户去实现
 * 接收消息：WpsInvoke.RegWebNotify（type，name,callback）
 * WPS客户端返回消息： wps.OAAssist.WebNotify（message）
 * @param {*} type 加载项对应的插件类型
 * @param {*} name 加载项对应的名字
 * @param {func} callback 接收到WPS客户端的消息后的回调函数
 */
/*WpsInvoke.RegWebNotify(WpsInvoke.ClientType.wpp, "WppOAAssist", function (messageText) {
	 console.log(messageText);
	 let json = eval('(' + messageText + ')');
	 isCloseEt=json.closeWpp;
    //var span = window.parent.document.getElementById("webnotifyspan")
    //span.innerHTML = messageText
})*/

function GetDemoPath(fileName) {

    var url = document.location.host;
    return document.location.protocol + "//" + url + "/file/" + fileName;
}

function GetUploadPath() {
    var url = document.location.host;
    return document.location.protocol + "//" + url + "/Upload";
}

function newDoc() {
    _WppInvoke([{
        "OpenDoc": {
            showButton: "btnSaveFile;btnSaveAsLocal"
        }
    }])
}

_wpp['newDoc'] = {
    action: newDoc,
    code: _WppInvoke.toString() + "\n\n" + newDoc.toString(),
    detail: "\n\
  说明：\n\
    点击按钮，打开演示组件后,新建一个空白演示文档\n\
    \n\
  方法使用：\n\
    页面点击按钮，通过wps客户端协议来启动演示组件，调用oaassist插件，执行插件中的js函数OpenDoc,不带文档路径则默认新建一个空白演示文档\n\
    funcs参数说明:\n\
        OpenDoc方法对应于OA助手dispatcher支持的方法名\n\
            showButton 要显示的按钮\n\
"
}

function openDoc() {
    var filePath = prompt("请输入打开文件路径（本地或是url）：", GetDemoPath("样章.pptx"))
    var uploadPath = prompt("请输入文档上传路径:", GetUploadPath())

    _WppInvoke([{
        "OpenDoc": {
            "docId": "123", // 文档ID
            "uploadPath": uploadPath, // 保存文档上传路径
            "fileName": filePath,
            showButton: "btnSaveFile;btnSaveAsLocal"
        }
    }])
}

_wpp['openDoc'] = {
    action: openDoc,
    code: _WppInvoke.toString() + "\n\n" + openDoc.toString(),
    detail: "\n\
  说明：\n\
    点击按钮，输入要打开的文档路径，输入文档上传路径，如果传的不是有效的服务端地址，将无法使用保存上传功能。\n\
    打开演示后,将根据文档路径下载并打开对应的文档，保存将自动上传指定服务器地址\n\
    \n\
  方法使用：\n\
    页面点击按钮，通过wps客户端协议来启动演示组件，调用oaassist插件，执行传输数据中的指令\n\
    funcs参数信息说明:\n\
        OpenDoc方法对应于OA助手dispatcher支持的方法名\n\
            docId 文档ID，OA助手用以标记文档的信息，以区分其他文档\n\
            uploadPath 保存文档上传路径\n\
            fileName 打开的文档路径\n\
            showButton 要显示的按钮\n\
"
}

function onlineEditDoc() {
    var filePath = prompt("请输入打开文件路径（本地或是url）：", GetDemoPath("样章.pptx"))
    var uploadPath = prompt("请输入文档上传路径:", GetUploadPath())

    _WppInvoke([{
        "OnlineEditDoc": {
            "docId": "123", // 文档ID
            "uploadPath": uploadPath, // 保存文档上传路径
            "fileName": filePath,
            showButton: "btnSaveFile;btnSaveAsLocal"
        }
    }])
}

_wpp['onlineEditDoc'] = {
    action: onlineEditDoc,
    code: _WppInvoke.toString() + "\n\n" + onlineEditDoc.toString(),
    detail: "\n\
  说明：\n\
    点击按钮，输入要打开的文档路径，输入文档上传路径，如果传的不是有效的服务端地址，将无法使用保存上传功能。\n\
    打开演示后,将根据文档路径下载并打开对应的文档，保存将自动上传指定服务器地址\n\
    \n\
  方法使用：\n\
    页面点击按钮，通过wps客户端协议来启动演示组件，调用oaassist插件，执行传输数据中的指令\n\
    funcs参数信息说明:\n\
        OnlineEditDoc方法对应于OA助手dispatcher支持的方法名\n\
            docId 文档ID，OA助手用以标记文档的信息，以区分其他文档\n\
            uploadPath 保存文档上传路径\n\
            fileName 打开的文档路径\n\
            showButton 要显示的按钮\n\
"
}

//window.onload = function () {
//    var btns = document.getElementsByClassName("btn");
//
//    for (var i = 0; i < btns.length; i++) {
//        btns[i].onclick = function (event) {
//            document.getElementById("blockFunc").style.visibility = "visible";
//            var btn2 = document.getElementById("demoBtn");
//            btn2.innerText = this.innerText;
//            document.getElementById("codeDes").innerText = _wpp[this.id].detail.toString()
//            document.getElementById("code").innerText = _wpp[this.id].code.toString()
//            document.getElementById("demoBtn").onclick = _wpp[this.id].action;
//
//            hljs.highlightBlock(document.getElementById("code"));
//        }
//    }
//}

function CloseWppClient(docId){
	if(!isCloseWpp){
		for (var int = 0; int < 5; int++) {
			_WppInvoke([{
		        "ExitWpp": {"ekpSysAttMainId":docId,"closeFileNoTip":true}
		    }]);
		}
	}
	
}