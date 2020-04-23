var map;
var local;
$(function () {
    if (document.cookie.length > 0) {
        document.getElementById("loginUser").innerHTML = "您好，" + document.cookie;
    }
});
window.onload = loadJScript;  //异步加载地图
function queryOrder(){
    if (document.cookie.length > 0) {
        alert("抱歉，您没有任何订单");
    } else{
        alert("请登录后查询");
        window.location.href = "login.html";
    }
}
function queryKeyWord(key) {
    if (key.length > 0) {
        local.search(key);
    } else {
        local.search($("#keyWord").val());
    }
}
function leaveComments() {
    if ($("#message-form").val() != "") {
        alert("感谢您的意见/建议！");
    }
}
//百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=BsDDtbVdLh2bqHGjWk5d8TtKLG4DbKwr&callback=init";
    document.body.appendChild(script);
}
function init() {
    // 创建Map实例
    map = new BMap.Map("map");
    // 创建点坐标
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point,15);
    //启用滚轮放大缩小
    map.enableScrollWheelZoom();
    // 添加定位控件
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (position) {
        map.centerAndZoom(position.point, 15);
    });
    local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    local.search("景点");
}
